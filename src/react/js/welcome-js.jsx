import React from "react";

export default () => {
  var name = "Amélie";

  return (
    <mjml>
      <mjml-head>
        <mjml-font
          name="Poppins"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </mjml-head>
      <mjml-body>
        <mjml-section>
          <mjml-column verticalAlign="middle">
            <mjml-image
              align="left"
              width="140px"
              height="40px"
              alt="Busbud"
              src="https://busbud.imgix.net/busbud-logos/busbud_logo_norm_RGB_HR.png"
            />
          </mjml-column>
        </mjml-section>

        <mjmlWrapper borderRadius="24px" paddingTop="16px">
          <mjml-section fullWidth padding={0}>
            <mjml-column width="100%">
              <mjml-image
                fluidOnMobile="true"
                height="180px"
                borderRadius="12px"
                paddingTop="0px"
                paddingLeft="16px"
                alt="email"
                src="https://www.online-image-editor.com//styles/2014/images/example_image.png"
              />
            </mjml-column>
          </mjml-section>
          <mjml-section fullWidth padding={0}>
            <mjml-column width="100%">
              <mjml-text align="center">
                <p>Here's an email!</p>
              </mjml-text>
            </mjml-column>
          </mjml-section>

          <mjml-section fullWidth padding={0}>
            <mjml-column width="100%">
              <mjml-text align="center">
                <p>Hi {name}!</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <a
                    href="https://busbud.com"
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    This is a link.
                  </a>
                </p>
                <p>Thank you!</p>
                <p>The Busbud team</p>
              </mjml-text>
            </mjml-column>
          </mjml-section>

          <mjml-section fullWidth padding={0}>
            <mjml-column width="100%">
              <mjmlButton>Action</mjmlButton>
            </mjml-column>
          </mjml-section>
        </mjmlWrapper>
        <mjml-section>
          <mjml-column>
            <mjml-text align="center">Busbud inc.</mjml-text>

            <mjml-text align="center">
              5425 Casgrain Ave #901, Montreal, Canada
            </mjml-text>

            <mjml-text align="center">
              <a
                href="https://busbud.com"
                style={{
                  textDecoration: "none",
                }}
              >
                View Online
              </a>
              <span> | </span>
              <a
                href="https://busbud.com"
                style={{
                  textDecoration: "none",
                }}
              >
                Help
              </a>
            </mjml-text>

            <mjml-text align="center">
              You are receiving this email because you signed up and subscribed
              to receive transactional and promotional emails from us. You can{" "}
              <a
                href="https://busbud.com"
                style={{
                  textDecoration: "none",
                }}
              >
                manage your preferences
              </a>{" "}
              or
              <a
                href="https://busbud.com"
                style={{
                  textDecoration: "none",
                }}
              >
                {" "}
                unsubscribe{" "}
              </a>
              anytime.
            </mjml-text>

            <mjmlSocial icon-size="24px" mode="horizontal" innerPadding="16px">
              <mjmlSocialElement
                name="instagram"
                alt="Instagram"
                href="https://busbud.com/"
              />
              <mjmlSocialElement
                name="facebook"
                alt="Facebook"
                href="https://busbud.com/"
              />
              <mjmlSocialElement
                name="twitter"
                alt="Twitter"
                href="https://busbud.com/"
              />
            </mjmlSocial>
          </mjml-column>
        </mjml-section>
      </mjml-body>
    </mjml>
  );
};
