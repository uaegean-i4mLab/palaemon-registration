import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {

  const classes = useStyles();
  return (
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Grids</h2>
            <h5 className={classes.description}>
              Use the following menu in order to either query for the Verifiable KYB Data of an organization or start
              your own Verifiable Business Wallet (Issue a KYB Verifiable Credential for your Company). A Verifiable
              Business Wallet implements a portable identity business profile for an organization. To learn more please
              click here
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>

            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                  title="Issue KYB"
                  description="KYB info text"
                  icon={Chat}
                  iconColor="info"
                  urlLink="/login"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                  title="Search KYBs"
                  description="Search for existing KYBs"
                  icon={VerifiedUser}
                  iconColor="success"
                  urlLink="/company-selection"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                  title="Fingerprint"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={Fingerprint}
                  iconColor="danger"
                  urlLink="/query"
                  vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
