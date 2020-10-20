import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { breakpoints } from "../../../../../public/styles/theme";
import Icon from "../../../Common/Icon";
import Input from "../../../Common/Form/Input";
import Button from "../../../Common/Form/Button";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 1.25em;
  @media (max-width: ${breakpoints.laptop}px) {
    font-size: 1em;
  }
  @media (max-width: ${breakpoints.phone}px) {
    flex-direction: column;
  }
  .footer-socials {
    border-right: 1px solid black;
    padding: 12px 15px 25px;
    flex: 0 0 auto;
    width: 30%;
    @media (max-width: ${breakpoints.phone}px) {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid black;
    }
    ul {
      li {
        line-height: 1.25;

        a:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer-contact {
    padding: 12px 15px 25px;

    .footer-contact-form {
    }
  }
`;

const Footer = (props) => {
  const [email, setEmail] = React.useState("");
  return (
    <FooterWrapper>
      <div className="footer-socials">
        <ul>
          <li>
            <a href="" alt="social link">
              Twitter
            </a>
          </li>
          <li>
            <a href="" alt="social link">
              Github
            </a>
          </li>
          <li>
            <a href="" alt="social link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" alt="social link">
              CodeSandbox
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-form">
          <h3>Want to work together? Lets connect!</h3>
          <form id="contactForm">
            <Input
              placeholder="Email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <Button onClick={() => {}}>
              <Icon name="rightArrow" />
            </Button>
          </form>
        </div>
      </div>
    </FooterWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
