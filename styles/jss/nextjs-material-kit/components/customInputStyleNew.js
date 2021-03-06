import {
    primaryColor,
    dangerColor,
    successColor,
    defaultFont,
} from "styles/jss/nextjs-material-kit.js";

const customInputStyleNew = {
    disabled: {
        "&:before": {
            borderColor: "transparent !important",
        },
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#D2D2D2 !important",
            borderWidth: "1px !important",
        },
        "&:after": {
            borderColor: primaryColor,
        },
    },
    underlineError: {
        "&:after": {
            borderColor: dangerColor,
        },
    },
    underlineSuccess: {
        "&:after": {
            borderColor: successColor,
        },
    },
    whiteUnderline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#FFFFFF",
        },
        "&:after": {
            borderColor: "#FFFFFF",
        },
    },
    labelRoot: {
        ...defaultFont,
        color: "rgba(0, 0, 0, 0.87) !important",
        fontWeight: "400",
        fontSize: "1rem",
        lineHeight: "1.42857",
        letterSpacing: "0.01071em",
        "& + $underline": {
            marginTop: "0px",
        },
    },
    labelRootError: {
        color: dangerColor + " !important",
    },
    labelRootSuccess: {
        color: successColor + " !important",
    },
    formControl: {
        margin: "8px 0 8px 0",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
            color: "#495057",
        },
    },
    input: {
        color: "#495057",
        height: "unset",
        "&,&::placeholder": {
            fontSize: "14px",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "400",
            lineHeight: "1.42857",
            opacity: "1",
        },
        "&::placeholder": {
            color: "#AAAAAA",
        },
    },
    whiteInput: {
        "&,&::placeholder": {
            color: "#FFFFFF",
            opacity: "1",
        },
    },
    outlinedFormClass:{
        borderRadius: "8px",
    }
};

export default customInputStyleNew;
