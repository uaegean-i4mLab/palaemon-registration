/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";
import Button from "../CustomButtons/Button";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className="lfImgAndText">
            <div className="lfImgAndText--text">
              <div>
                <b>Co-financed by the European Union</b>
                <hr className="hrFtr" />
              </div>
              <div>Connecting Europe Facility</div>
            </div>
          </div>
          <div className="btmText">
            <p>
              Grant Agreement under the Connection Europe Facility (CEF) <br/>
              Telecommunications Sector <br />
              Agreement number INEA/CEF/ICT/A2019/1926018
            </p>
          </div>
          {/*<List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>*/}
        </div>
        <div className={classes.right}>
          <div>
            University of the Aegean | Dpt of Financial and Management
            Engineering | i4m Lab
          </div>
          <div>
            Web address | Dpt:{" "}
            <Link simple color="primary" href={"http://www.fme.aegean.gr/"}>
              <a>http://www.fme.aegean.gr/</a>
            </Link>
          </div>
          <div>
            Web address | i4m Lab:{" "}
            <a href="http://www.atlantis-group.gr/i4Mlab">
              http://www.atlantis-group.gr/i4Mlab
            </a>
          </div>
          <div>e-mail: i4mlab-courses@aegean.gr</div>
          <div>Service developed by UAegean | i4m Lab © 2021</div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
