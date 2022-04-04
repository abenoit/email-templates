import {
  Mjml,
  MjmlHead,
  MjmlFont,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlSocial,
  MjmlWrapper,
  MjmlButton,
  MjmlSocialElement,
  MjmlText,
} from "mjml-react";
import React from "react";

export default () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlFont
          name="Poppins"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </MjmlHead>
      <MjmlBody>
        <MjmlSection>
          <MjmlColumn verticalAlign="middle">
            <MjmlImage
              align="left"
              width="140px"
              height="40px"
              alt="Busbud"
              src="https://busbud.imgix.net/busbud-logos/busbud_logo_norm_RGB_HR.png"
            />
          </MjmlColumn>
        </MjmlSection>

        <MjmlWrapper borderRadius="24px" paddingTop="16px">
          <MjmlSection fullWidth padding={0}>
            <MjmlColumn width="100%">
              <MjmlImage
                fluidOnMobile="true"
                height="180px"
                borderRadius="12px"
                paddingTop="0px"
                paddingLeft="16px"
                alt="email"
                src="https://www.online-image-editor.com//styles/2014/images/example_image.png"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection fullWidth padding={0}>
            <MjmlColumn width="100%">
              <MjmlText align="center">
                <p>Here's an email!</p>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection fullWidth padding={0}>
            <MjmlColumn width="100%">
              <MjmlText align="center">
                <p>Hi Homer!</p>
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
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection fullWidth padding={0}>
            <MjmlColumn width="100%">
              <MjmlButton>Action</MjmlButton>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText align="center">Busbud inc.</MjmlText>

            <MjmlText align="center">
              5425 Casgrain Ave #901, Montreal, Canada
            </MjmlText>

            <MjmlText align="center">
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
            </MjmlText>

            <MjmlText align="center">
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
            </MjmlText>

            <MjmlSocial icon-size="24px" mode="horizontal" innerPadding="16px">
              <MjmlSocialElement
                name="instagram"
                alt="Instagram"
                href="https://busbud.com/"
              />
              <MjmlSocialElement
                name="facebook"
                alt="Facebook"
                href="https://busbud.com/"
              />
              <MjmlSocialElement
                name="twitter"
                alt="Twitter"
                href="https://busbud.com/"
              />
            </MjmlSocial>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};
