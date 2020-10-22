import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { breakpoints } from "../../../../../public/styles/theme";
import Icon from "../../Icon";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import Modal from "../../Modal";
import { AnimatePresence } from "framer-motion";
import Textarea from "../../Textarea";
import { Form } from "./styles";

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

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const submitEmailEnquiry = async () => {
    if (!email) {
      setError(`Please enter your email.`);
      return false;
    }
    await fetch(`http://localhost:3000/api/enquire`, {
      headers: {
        email,
      },
    });

    return true;
  };

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
          <Form id="contactForm" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <Textarea />
            <Button onClick={submitEmailEnquiry}>SEND</Button>
          </Form>
        </div>
      </div>
    </FooterWrapper>
  );
};

Footer.propTypes = {};

export default React.memo(Footer);
