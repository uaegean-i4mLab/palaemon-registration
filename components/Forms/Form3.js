import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Stepper from "components/Stepper.js";
import Link from "next/link";

import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                absolute
                color="primary"
                brand="NextJS Material Kit"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.container}>
                    <GridContainer justifyContent="center">
                        <GridItem xs={12} sm={4} md={10}>
                            <Card className={classes[cardAnimaton]}>
                                {/*<form className={classes.form}>*/}
                                <CardHeader color="primary" className={classes.cardHeader}>
                                    <h4>Register</h4>
                                    <Stepper steps={[{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'},
                                        {title: 'Step Four'}, {title: 'Step Five'}, {title: 'Step Six'},
                                        {title: 'Step Seven'}, {title: 'Step Eight'} ] } activeStep={ 5 }  />

                                </CardHeader>

                                <CardBody>
                                    <GridContainer>

                                        <GridItem xs={12} sm={12} md={12}>
                                            Please review the attributes retrieved, presented below. If you are certain
                                            that these attributes correctly identify you please click the Next button.
                                            Additionally, if you would like to add your Company’s KYB profile in the
                                            public registry in an easily Verifiable Format? If you opt in for this
                                            feature the public profile of your organization will be easily verified
                                            by anyone (public authorities, B2B transactions etc.)
                                            greatly facilitating your dealings with these parties.
                                            If Yes, please click the “Register” button

                                        </GridItem>

                                    </GridContainer>
                                        <GridContainer justifyContent="center">
                                            <GridItem cs={12} sm={12} md={8}>
                                                <h2 className={classes.title}>Attributes</h2>

                                                <GridContainer>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Legal Name</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>360kompany AG</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Legal Person Identifier</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>375714x</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Jurisdiction Code</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>Dummy Jurisdiction Code</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Business Role</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>Dummy Business Role</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Address</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>Dummy address</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>LEI</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>529900ENKWV3BZ5GYL12</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Vat Registration</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>ATU67091005</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Birthdate</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>16/05/1984</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Trading Status</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>LIVE</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Given Name</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>John</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Family Name</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>Doe</div>
                                                    </GridItem>
                                                    <hr className={classes.hrLine}></hr>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textRight}>Sub Jurisdiction</div>

                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <div className={classes.textLeft}>AT</div>
                                                    </GridItem>


                                                </GridContainer>

                                            </GridItem>
                                        </GridContainer>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <Button color="primary" size="lg">
                                        Register
                                    </Button>
                                </CardFooter>
                                <CardFooter className={classes.cardFooterLeft}>
                                    <Button color="primary" size="lg">
                                        Next
                                    </Button>
                                </CardFooter>
                                {/* </form>*/}
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}
