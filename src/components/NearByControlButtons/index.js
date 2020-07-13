import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
const NearbyControlButtons = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      },
      "& button": {
        background: "#B20A1B",
        border: "1px solid #B20A1B",
        "&:hover": {
          background: "#B20A1B"
        }
      }
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button>Home</Button>
        <Button>Chat</Button>
        <Button>Payment</Button>
      </ButtonGroup> */}
      <StyledButtonGroup
        variant="contained"
        color="secondary"
        aria-label="contained secondary button group"
      >
        <Button>Home</Button>
        <Button>Chat</Button>
        <Button>Payment</Button>
      </StyledButtonGroup>
    </div>
  );
};

export default NearbyControlButtons;

const StyledButtonGroup = styled(ButtonGroup)`
  button {
    padding: 6px 30px;
  }
`;
