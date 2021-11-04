import {container, primaryColor, defaultFont, title} from "styles/jss/nextjs-material-kit.js";

const formStyle = {
    container: {
        ...container,
        ...defaultFont,
        zIndex: "2",
        position: "relative",
        paddingTop: "1vh",
        color: "rgba(0, 0, 0, 0.87)",
        paddingBottom: "4vh",
    },
    cardHidden: {
        opacity: "0",
        transform: "translate3d(0, -60px, 0)",
    },

    form: {
        margin: "0",
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
    },
    headTitle: {
        color: "#4d4d4d",
        padding: "8px 0px 0px",
        fontWeight: "normal",
        lineHeight: "1.6",
        letterSpacing: "0.0075em",

        "@media (min-width: 600px)": {
            fontSize: "1.25rem",
        },
        "@media (min-width: 960px)": {
            fontSize: "1.4286rem",
        },
        "@media (min-width: 1280px)": {
            fontSize: "1.4286rem",
        },
    }
};

export default formStyle;
