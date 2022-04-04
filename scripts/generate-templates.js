import glob from "glob";
import fse from "fs-extra";
import path from "path";
import { minify } from "html-minifier";
import { render } from "mjml-react";

const getDirectories = (folder, callback) => {
  glob(folder + "/**/!(*.d).js", callback);
};

function _renderMJML(mjml_markup) {
  const mjml_parsed_obj = mjml2html(mjml_markup, { minify: true });
  if (mjml_parsed_obj.errors && mjml_parsed_obj.errors.length > 0) {
    const error = new Error("Failed to build html from mjml template");
    error.mjml_error = mjml_parsed_obj.errors;
    sentry.captureError(error);
    throw error;
  }
  return mjml_parsed_obj.html;
}

function renderToHTML(component, component_props) {
  const component_markup = ReactDOM.renderToStaticMarkup(
    React.createElement(
      ServiceProvider,
      React.createElement(component, component_props)
    )
  );
  if (component_markup.includes("<mjml>")) return _renderMJML(component_markup);
  return component_markup;
}

// Move extension from mjml to html
const getHtmlFileName = (file) =>
  `${file.substr(0, file.lastIndexOf("."))}.html`;

getDirectories("dist/react/ts", (err, templates) => {
  if (err) {
    console.log("Error", err);
    return;
  }

  templates.map(async (template_file) => {
    try {
      const mjml = await import(path.join(process.cwd(), template_file));

      const { html, error } = render(mjml.default());
      if (error) throw error;

      const minified_html = minify(html, {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });

      const new_file_name = getHtmlFileName(template_file);

      fse.outputFileSync(`html/${new_file_name}`, minified_html);
    } catch (err) {
      console.log(err);
    }
  });
});

getDirectories("dist/react/js", (err, templates) => {
  if (err) {
    console.log("Error", err);
    return;
  }

  templates.map(async (template_file) => {
    try {
      const component = await import(path.join(process.cwd(), template_file));

      const { html, error } = renderToHTML(component);
      if (error) throw error;

      const minified_html = minify(html, {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });

      const new_file_name = getHtmlFileName(template_file);

      fse.outputFileSync(`html/${new_file_name}`, minified_html);
    } catch (err) {
      console.log(err);
    }
  });
});
