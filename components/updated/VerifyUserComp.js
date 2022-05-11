import * as React from "react";
import LayoutNew from "./LayoutNew";
import Head from "next/head";
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

//Icons
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";

//Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// List
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Link from 'next/link'

function mapName(name) {
  switch (name) {
    case "Identifier":
      return "eID Identifier";
      break;
    default:
      return name;
  }
}

function createData(variabl, value) {
  return { variabl, value };
}

const VerifyUser = (props) => {
  let userDetails = props.userDetails;
  // ? props.userDetails:{
  //   Name: "Nikos",
  //   Surname: "Triantafyllou",
  //   Identifier: "1231",
  // }

  const rows = [];
  const rowsPersonal = [];
  let personalAttributes = [
    "given_name",
    "family_name",
    "personal_number",
    "birthdate",
    "business_role",
  ];
  Object.keys(props.userDetails).forEach((attributeName) => {
    if (personalAttributes.indexOf(attributeName) >= 0) {
      rowsPersonal.push(
        createData(mapName(attributeName), props.userDetails[attributeName])
      );
    } else {
      rows.push(
        createData(mapName(attributeName), props.userDetails[attributeName])
      );
    }
  });

  return (
    <LayoutNew home alert={!props.userDetails} activeStep={1}>
      <>
        <Typography variant="h5" sx={{ mt: 6, mb: 4 }}>
          Before we begin, Is your Personal Information accurate?
        </Typography>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.variabl}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Box fontWeight="fontWeightBold" display="inline">
                      {row.variabl}
                    </Box>
                  </TableCell>
                  <TableCell align="left">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
        <Button
          color="inherit"
          disabled={props.activeStep === 0}
          onClick={props.handleBack}
          sx={{ mr: 1 }}
          size="large"
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <>
        <Link href="/ticketInfo">
        <Button
            variant="contained"
            size="large"
            sx={{ mr: 1 }}
          >
            Confirm
          </Button>
        </Link>
          {/* <Button
            variant="contained"
            size="large"
            onClick={() => {
              window.location = "/ticketInfo";
            }}
            sx={{ mr: 1 }}
          >
            Confirm
          </Button> */}
        </>
      </Box>

      {/* <Head>
        <title>Palaemon Registration Service</title>
      </Head>

      <Typography variant="h5" sx={{ mt: 6, mb: 4 }}>
      Before we begin
      </Typography>
      <Typography sx={{ mt: 6, mb: 4 }}>
      Is your Personal Information accurate?
        <Box fontWeight="fontWeightBold" display="inline">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Your National eID, via the eIDAS eID network" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Your electronic travel docment (eMRTD) " />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Typography>

      <Typography></Typography>
      <Box>
        <Button
          variant="contained"
          size="large"
          type="submit"
          onClick={() => {
            window.location = "/login";
          }}
        >
          Access the service
        </Button>
      </Box>   <GridContainer  className={"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4"}>
              <GridItem xs={12} sm={12} md={12}>
                <div className={"MuiBox-root jss270"}>
                  <div className={"col-12 col-md-11 col-lg-6 pl-lg-0"}>
                    <div className={classes.jss369}>
                      <h6
                        className={classes.jss370}
                        style={{ marginBottom: "0" }}
                      >
                        Before we begin
                      </h6>
                    </div>

                    <h1
                      style={{
                        margin: "0px 0px 48px 0px",
                        fontSize: "3rem",
                        overflowWrap: "break-word",
                        display: "block",
                        marginBlockStart: "0.67em",
                        marginBlockEnd: "0.67em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        fontWeight: "bold",
                        lineHeight: "1.43",
                        letterSpacing: "0.01071em",
                        marginTop: "0",
                      }}
                    >
                      Is your Personal Information accurate?
                    </h1>
                  
                    <div
                      className={classes.actionstagline}
                      style={{
                        fontFamily: "Open Sans,sans-serif!important",
                      }}
                    >
                      <RegistryPromptArea
                        userDetails={userDetails}
                      />
                    </div>
                  </div>

                  <div
                    className={"serviceActionsList"}
                    style={{ paddingTop: "32px", marginBottom: "32px" }}
                  >
                     <Link  href="/ticketInfo">
                    <a
                      className={[
                        classes.btn,
                        classes.btnBlue,
                        classes.fontWeightBold,
                        classes.textWhite,
                        classes.serviceActionsListA,
                      ].join(" ")}
                      data-uw-rm-brl="false"
                    >
                      <span data-uw-styling-context="true">
                        Confirm
                      </span>{" "}
                    </a>
                    </Link>
                  </div>
                </div>
              </GridItem>
            </GridContainer> 
    </LayoutNewAlert>
  );

          */}
    </LayoutNew>
  );
};

export default VerifyUser;
