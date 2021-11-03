import { container, primaryColor, defaultFont } from "styles/jss/nextjs-material-kit.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  left: {
    ...defaultFont,
    textAlign: "left",
    float: "left!important",
    display: "block",
  },
  right: {
    ...defaultFont,
    textAlign: "left",
    padding: "15px 0",
    margin: "0",
    float: "right!important",
    a: {

        color: primaryColor,
        textDecoration: "none",
        backgroundColor: "transparent",

    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "static",
    borderTop: "4px solid #046ec5",
    backgroundColor: "#eeeeee"
  },
  /*a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },*/
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      // color: "#FFFFFF",
      backgroundColor: "#FFFFFF"
    },
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
};
export default footerStyle;
