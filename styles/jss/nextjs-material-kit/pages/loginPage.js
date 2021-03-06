import {container, primaryColor, defaultFont, title} from "styles/jss/nextjs-material-kit.js";

const signupPageStyle = {
  container: {
    ...container,
    ...defaultFont,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "rgba(0, 0, 0, 0.87)",
    paddingBottom: "200px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.1)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardMid: {
    marginTop: "30px",
    marginBottom: "0px",
    marginLeft: "20px",
    marginRight: "20px",
    textAlign: "left",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  cardFooterLeft: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "left !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
  textLeft: {
    textAlign: "left",
  },
  customH4: {
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "left",
    fontSize: "1.5rem",
    overflowWrap: "break-word",
  },
  textRight: {
    textAlign: "right",
  },
  textCenter: {
    color: "#999",
    textAlign: "center",
  },
  hrLine: {
    color: "#999",
    backgroundColor: "#999",
    borderWidth: "1px",
    border: "none",
    width: "35em",
    height: "1px"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  MuiContainerRoot : {
    width: "100%",
    display: "block",
    boxSizing: "border-box",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  jss409 : {
    flex: "1",
    padding: "0px 48px 32px"
  },
  jss413 : {
    flex: "0 1 0%",
    display: "flex"
  }
};

export default signupPageStyle;
