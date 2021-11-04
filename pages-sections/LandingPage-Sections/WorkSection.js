import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Query for specific company</h2>
          <h4 className={classes.description}>
            In order to build your KYB profile, first provide your company’s details below, and then click the “Retrieve Data” button. This will result in an eIDAS eID authentication.
          </h4>
            <h4 className={classes.textLeft }>
                Company Details Form
            </h4>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Company Name"
                  id="companyName"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  handleChange={props.handleChange}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                    labelText="Company Country"
                    id="companyCountry"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={props.handleChange}
                />
              </GridItem>
                <CustomInput
                    labelText="LEI"
                    id="lei"
                    formControlProps={{
                        fullWidth: true,
                        className: classes.textArea,
                    }}
                    handleChange={props.handleChange}
                />

            </GridContainer>

            <h4 className={classes.textLeft}>
                Representative Form
            </h4>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Name"
                        id="name"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        handleChange={props.handleChange}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Surname"
                        id="surname"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        handleChange={props.handleChange}
                    />
                </GridItem>
                <CustomInput
                    labelText="email"
                    id="email"
                    formControlProps={{
                        fullWidth: true,
                        className: classes.textArea,
                    }}
                    handleChange={props.handleChange}
                />

            </GridContainer>
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary">Retrieve</Button>
              </GridItem>

        </GridItem>
      </GridContainer>
    </div>
  );
}
