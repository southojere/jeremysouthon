import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { breakpoints } from "../../../../../public/styles/theme";

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
  }
`;

const Footer = (props) => {
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
            <input placeholder="Email" />
            <button>
              <svg id="r-arrow-e" viewBox="0 0 25 25">
                <path d="M12.167 4l-1.41 1.41 5.58 5.59H4.167v2h12.17l-5.58 5.59 1.41 1.41 8-8-8-8z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </FooterWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
