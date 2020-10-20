import React from "react";
import PropTypes from "prop-types";
import { Header, TitleSection, WorkSection } from "./styles";
import Container from "../../Common/Layout/Container";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Home = (props) => {
  return (
    <>
      <TitleSection>
        <Container>
          <Header>
            <span className="line">Jeremy</span>
            <span className="line">Southon</span>
          </Header>
          <br />
          <br />
        </Container>
      </TitleSection>
      <Projects />
      <Footer/>
    </>
  );
};

Home.propTypes = {};

export default Home;
