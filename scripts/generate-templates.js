import glob from "glob";
import fse from "fs-extra";
import path from "path";
import mjml2html from "mjml";
import { render } from "mjml-react";
import { minify } from "html-minifier";

const getDirectories = (folder, callback) => {
  glob(folder + "/**/!(*.d).js", callback);
};

const getMjmlFiles = (folder, callback) => {
  glob(folder + "/**/*.mjml", callback);
};

// Move extension from mjml to html
const getHtmlFileName = (file) =>
  `${file.substr(0, file.lastIndexOf("."))}.html`;

getDirectories("dist/templates", (err, templates) => {
  if (err) {
    console.log("Error", err);
    return;
  }

  templates.map(async (template_file) => {
    try {
      const mjml = await import(path.join(process.cwd(), template_file));

      const { html, error } = render(mjml.default(theme));
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

// getMjmlFiles("src/mjml", (err, templates) => {
//   if (err) {
//     console.log("Error", err);
//     return;
//   }

//   templates.map(async (template_file) => {
//     try {
//       console.log("mjml_template", template_file);
//       const mjml_template = await import(
//         path.join(process.cwd(), template_file)
//       );
//       // console.log("fefk", mjml_template);
//       // const { html, error } = mjml2html(`${mjml_template}`);
//       // if (error) throw error;

//       // const minified_html = minify(html, {
//       //   collapseWhitespace: true,
//       //   minifyCSS: true,
//       //   minifyJS: true,
//       // });

//       // const new_file_name = getHtmlFileName(template_file);

//       // fse.outputFileSync(`html/${new_file_name}`, minified_html);
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });
