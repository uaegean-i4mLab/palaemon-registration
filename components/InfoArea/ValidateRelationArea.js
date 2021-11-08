import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LayoutNew from "../LayoutNew";
import Button from "../CustomButtons/Button.js";
import Head from "next/head";

import styles from "styles/jss/nextjs-material-kit/components/infoStyle.js";

const useStyles = makeStyles(styles);

export default function ValidateRelationArea(props) {
  const classes = useStyles();

  let documentDisplayDiv = !props.displayDocument ? (
    <div></div>
  ) : (
    <div id="document">
      <div className="row" style={{ marginBottom: "3rem" }}>
        Document:
      </div>
      <div className="row" style={{ marginBottom: "3rem" }}>
        <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>I</span>
        <b>
          {props.userDetails.given_name} {props.userDetails.family_name}
        </b>
        <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>, born at:</span>{" "}
        <b>{props.userDetails.birthdate}</b>
        <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>
          identified by the eIDAS personal Identifier:
        </span>
        <b>{props.userDetails.personal_number}</b>
        <span style={{ padding: "0rem 0.3rem 0rem 0.3rem" }}>
          {" "}
          attest that I am affiliated with the company identified by the Legal
          Company Identifier or Legal Name:
        </span>
        <b>{props.companyIdentifier}</b>.
      </div>
    </div>
  );

  return (
    <LayoutNew home>
      <Head>
        <title>Grids</title>
      </Head>
      <div className="MuiContainer-root  MuiContainer-maxWidthLg">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4">
          <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
              <h1 className="">Personal Declaration</h1>
            </div>
          </div>

          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
            <p
              className="MuiTypography-root  MuiTypography-body1"
              style={{ fontSize: "1.1429rem" }}
            >
              Before proceeding, please validate your relationship with the
              declared company. To do so, click the Sign button. This will
              result in the signing a qualified One Time Signature (issued using
              your eIDAS eID profile) a document validating your relationship
              with the declared document. To review the document please click{" "}
              <a href="#" onClick={props.showDocument}>
                here
              </a>
            </p>
          </div>
          {documentDisplayDiv}

          <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
              <Button
                onClick={props.signAndProceed}
                color="primary"
                size="lg"
                type="submit"
              >
                Sign Declaration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutNew>
  );
}
