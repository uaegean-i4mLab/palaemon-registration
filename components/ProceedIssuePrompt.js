import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
//AppBar
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
//Stepper
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";

//Card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

//Forms
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";

//Icons
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DoneAllIcon from "@mui/icons-material/DoneAll";

//Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import IssueVCButton from "./IssueVCButton";


const ProceedIssuePrompt = (props) => {

  // Jolocom Wallet connected succesfully

  return (
    <React.Fragment>
    <>
      <Typography variant="body1" sx={{ fontWeight: 300 }} style={{marginTop: "3rem"}}>
        Jolocom Wallet connected succesfully
      </Typography>
      <Typography variant="h5" sx={{ mt: 1, fontWeight: 300 }}>
        Proceed to Issue your Portable KYB Credential
      </Typography>
      <Typography variant="body1" sx={{ my: 3, fontWeight: 300 }}>
        {" "}
        Click the following button to generate your "Palaemon Service Card"
        Credential. Next, scan the generated QR code to receive it on your
        mobile wallet app.
      </Typography>
      <img src="/cred.svg" width="200px" alt="credentials" />
    </>
    {/* <Button variant="contained" size="large" onClick={handleNext}>
      Issue Verifiable Credential
    </Button> */}
    <Box style={{ flexDirection: "row", paddingTop: "32px" }}>
      <IssueVCButton
        hasRequiredAttributes={props.hasRequiredAttributes}
        baseUrl={props.baseUrl}
        uuid={props.uuid}
        vcType={props.vcType}
      />
    </Box>
  </React.Fragment>
  );
};

export default ProceedIssuePrompt;
