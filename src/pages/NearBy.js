import React from "react";
import Simple from "../layout/simple";
import Maps from "../components/Map";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {withRouter} from "react-router";
import AdvanceSearch from "./../components/AdvanceSearch/index";
import NearbyControlButtons from "./../components/NearByControlButtons/index";
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    padding: 50,
    display: "block",
    minHeight: "calc(100vh - 50px) !important",
    minWidth: "60vh"
  },
  maps: {
    "max-width": "100%",
    "max-height": "100% "
  }
}));

const NearBy = (props) => {
  const classes = useStyles();

  const redirectTo = (path) => {
    props.history.push(path);
  };

  return (
    <Simple className="nearby">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <Typography variant="h4" gutterBottom>
              People online nearby you.
            </Typography> */}
            <AdvanceSearch />
          </Grid>
          <Grid xs={12} md={12}>
            <Maps redirectTo={redirectTo} className={classes.maps} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="py-2"
          >
            <NearbyControlButtons />
          </Grid>
        </Grid>
      </Paper>
    </Simple>
  );
};

export default withRouter(NearBy);
