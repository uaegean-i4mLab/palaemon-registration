/*
import Head from "next/head";
// import Header from "./Header.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      #__next,
      html,
      body,
      #__next > div {
        height: 100%;
      }

      .box-container {
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .box-fill-v {
        flex: 1;
      }
    `}</style>
    <Header />
    <Container className="box-container">
      {props.children}
      {/!* <div className="box">this is the footer</div> *!/}
    </Container>
      <Footer />
  </div>
);

export default Layout;
*/

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LayoutNew(props, {children, home}) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <GridContainer direction="column">
            <div className={classes.jss413}>
                <Header
                    absolute
                    color="primary"
                    brand="NextJS Material Kit"
                    rightLinks={<HeaderLinks />}
                    {...rest}
                />
            </div>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={8}>
                    <main>{props.children}</main>
                        </GridItem>
                    </GridContainer>
                </div>
            <Footer />

        </GridContainer>
    );
}



