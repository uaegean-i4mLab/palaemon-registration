import Head from "next/head";
import LayoutNew from "../components/updated/LayoutNew";
import IndexForm from "../components/updated/IndexForm"
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import MessageBox from "../components/messageBox";
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInputNew from "components/CustomInput/CustomInputNew.js";

import styles from "styles/jss/nextjs-material-kit/components/formStyle.js";
import stylesCustom from "../styles/jss/palaemon.module.js";

export default function Home() {
  const tableStyles = { ...styles, ...stylesCustom };
  const useStyles = makeStyles(tableStyles);
  const classes = useStyles();

  // return (
  //   <LayoutNew home activeStep={0}>
  //     <Head>
  //       <title>Palaemon Registration Service</title>
  //     </Head>

  //     <div className={classes.container}>
  //       <div className={"row"} style={{ paddingTop: "3rem!important" }}>
  //         <div className={classes.col}>
  //           <div className={classes.categories}>
  //             <div className={"row"}>
  //               <div className={classes.col_12}>
  //                 <div className={classes.services}>
  //                   <div className={"row"} >
  //                     <div className={"col-12 col-md-11 col-lg-6 pl-lg-0"}>
  //                       <h2 style={{
  //                             fontSize: "27px",
  //                             fontWeight: "bolder",
  //                             position: "relative",
  //                             verticalAlign: "middle"
  //                       }}>Palaemon Pre-Embarkation Registration Service</h2>

  //                       <div className={classes.actionstagline} style={{fontFamily: "Open Sans,sans-serif!important",}}>
  //                         <p data-uw-styling-context="true" className={classes.explanationParagraph}>
  //                         Please Register before embarking on your journey.{" "}
  //                         </p>
  //                         <p data-uw-styling-context="true">In order to register you must first Authenticate. Authentication is handled via:</p>
  //                         <ul>
  //                           <li>Your National eID, via the eIDAS eID network</li>
  //                           <li>Your electronic travel docment (eMRTD)</li>
  //                         </ul>
  //                       </div>
  //                     </div>
  //                     <div className={"serviceActionsList pb-5 mb-3 pb-lg-0"} style={{paddingTop: "32px", paddingBottom: "32px"}}>
  //                       <a
  //                         href="/login"
  //                         className={ [classes.btn, classes.btnBlue, classes.fontWeightBold, 
  //                           classes.textWhite,  classes.serviceActionsListA].join(" ")}
  //                         data-uw-rm-brl="false"
  //                       >
  //                         <span data-uw-styling-context="true" style={{paddingRight: "1rem"}}>Access the service</span>
  //                         <svg
  //                           width="22px"
  //                           height="22px"
  //                           viewBox="0 0 22 22"
  //                           version="1.1"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                           xmlnsXlink="http://www.w3.org/1999/xlink"
  //                           className={classes.arrowService}
  //                         >
  //                           <g
  //                             id="Landing"
  //                             stroke="none"
  //                             strokeWidth="1"
  //                             fill="none"
  //                             fillRule="evenodd"
  //                           >
  //                             <g
  //                               id="Landing-1440"
  //                               transform="translate(-954.000000, -2718.000000)"
  //                               fill="#046EC5"
  //                             >
  //                               <g
  //                                 id="Organisations-Col"
  //                                 transform="translate(710.000000, 1475.000000)"
  //                               >
  //                                 <g
  //                                   id="View-All"
  //                                   transform="translate(0.000000, 1236.000000)"
  //                                 >
  //                                   <path
  //                                     d="M255,7 C261.075132,7 266,11.9248678 266,18 C266,24.0751322 261.075132,29 255,29 C248.924868,29 244,24.0751322 244,18 C244,11.9248678 248.924868,7 255,7 Z M253.5,13.5502525 L252.400056,14.6501964 L256.24986,18.5 L252.400056,22.3498036 L253.5,23.4497475 L258.449747,18.5 L253.5,13.5502525 Z"
  //                                     id="arrow_all"
  //                                   ></path>
  //                                 </g>
  //                               </g>
  //                             </g>
  //                           </g>
  //                         </svg>
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //   </LayoutNew>
  // );

  return (
    <IndexForm/>
  )
}
