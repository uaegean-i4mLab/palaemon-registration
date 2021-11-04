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
                                    <h4>Scan QR code</h4>
                                    <Stepper steps={[{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'},
                                        {title: 'Step Four'}, {title: 'Step Five'}, {title: 'Step Six'},
                                        {title: 'Step Seven'}, {title: 'Step Eight'} ] } activeStep={ 5 }  />

                                </CardHeader>

                                <CardBody>
                                    <GridContainer>

                                        <GridItem xs={12} sm={12} md={12}>
                                            Please scan the following QR code with your Business Wallet to connect it to the service
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12}>
                                            <div className={classes.textCenter}>
                                            <img
                                                src="https://myria.math.aegean.gr/~atsol/newpage/software/aegeanlogo/qrcodes/qrplain.png"
                                                alt="..."
                                            />
                                            </div>
                                        </GridItem>



                                    </GridContainer>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
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
