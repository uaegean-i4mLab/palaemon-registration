import { title, primaryColor, defaultFont } from "styles/jss/nextjs-material-kit.js";

const workStyle = {
  section: {
    ...defaultFont,
    padding: "70px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    color: "#999",
    textAlign: "left",
  },
  textRight: {
    color: "#999",
    textAlign: "right",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  hrLine: {
    color: "#999",
    backgroundColor: "#999",
    borderWidth: "1px",
    border: "none",
    width: "35em",
    height: "1px"
  }
};

export default workStyle;
