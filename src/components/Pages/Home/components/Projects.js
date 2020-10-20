import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { breakpoints } from "../../../../../public/styles/theme";

const ProjectWrapper = styled.section`
  position: relative;
  .project-banner {
    display: flex;
    width: 100%;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    padding: 17px 15px;
    text-transform: uppercase;

    @media (max-width: ${breakpoints.laptop}px) {
      padding: 13px 15px;
    }
  }

  .project-list {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 8px 15px 10em;
    border-bottom: 1px solid black;
    @media (max-width: ${breakpoints.laptop}px) {
      padding: 14px 15px 77px;
    }
    ul {
      list-style: none;
      li {
        font-size: 4.375em;
        color: #feefc3;
        letter-spacing: -0.01em;
        line-height: 1.25;
        -webkit-text-stroke: 1px black;
        @media (max-width: ${breakpoints.laptop}px) {
          font-size: 2.25em;
        }
        &:hover {
          color: black;
        }
      }
    }
  }

  .project-image-preview {
    position: absolute;
    top: 20%;
    right: 30%;
    z-index: -1;

    @media (max-width: ${breakpoints.laptop}px) {
      top: 0;
      right: 0;
    }
    @media (max-width: ${breakpoints.phone}px) {
      visibility: hidden;
    }
    .preview-container {
      background: wheat;
      width: 400px;
      height: 300px;
    }
  }
`;

const Projects = (props) => {
  return (
    <ProjectWrapper>
      <div className="project-banner">
        <div>
          <span>Projects</span>
        </div>
      </div>
      <div className="project-list">
        <ul>
          <li>GitScout</li>
          <li>Islands Near Me</li>
          <li>FarmIQ Soil</li>
          <li>Portfolio</li>
          <li>Zinc</li>
        </ul>
        <div className="project-image-preview">
          <div className="preview-container">
            <img src="" alt="project image" />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
};

Projects.propTypes = {};

export default Projects;
