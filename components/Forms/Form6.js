import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInputNew from "components/CustomInput/CustomInputNew.js";

import styles from "styles/jss/nextjs-material-kit/components/formStyle.js";

const useStyles = makeStyles(styles);

export default function Form6(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div className={classes.container}>
            <h6 className={classes.headTitle}>
                In order to build your KYB profile, first provide your company’s details below, and then click the “Retrieve Data” button. This will result in an eIDAS eID authentication.
            </h6>

                <h4 className={classes.customH4 }>
                    Company Details Form
                </h4>
                <GridContainer>

                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInputNew
                            labelText="Company Name"
                            id="companyName"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            handleChange={props.handleChange}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInputNew
                            labelText="Company Country"
                            id="companyCountry"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            handleChange={props.handleChange}
                        />
                    </GridItem>
                </GridContainer>
                <h4 className={classes.customH4 }>
                    Representative Form
                </h4>
                <GridContainer>

                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInputNew
                            labelText="Name"
                            id="name"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            handleChange={props.handleChange}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInputNew
                            labelText="Surname"
                            id="surname"
                            formControlProps={{
                                fullWidth: true,
                            }}

                            handleChange={props.handleChange}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomInputNew
                            labelText="email"
                            id="email"
                            formControlProps={{
                                fullWidth: true,
                            }}

                            handleChange={props.handleChange}
                        />
                    </GridItem>
                </GridContainer>
                <Button color="primary" size="lg">
                    Retrieve
                </Button>
        </div>

    );
}
