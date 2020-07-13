import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 20 + theme.spacing(3) * 2
  },
  secondary: {
    color: "#B20A1B"
  }
}));

function ValueLabelComponent(props) {
  const {children, open, value} = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
const SliderComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />

      <Slider
        className={classes.secondary}
        color={"secondary"}
        min={15}
        max={75}
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        defaultValue={30}
      />
    </div>
  );
};

export default SliderComponent;
