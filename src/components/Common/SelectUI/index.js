import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const SelectUI = ({inputLabel}) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      "& select": {
        padding: "10.5px 14px"
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },

    label: {
      transform: "translate(9px, 12px) scale(1)"
    }
  }));

  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          className={classes.label}
          htmlFor="outlined-age-native-simple"
        >
          {inputLabel}
        </InputLabel>
        <Select
          className={classes.selectStyles}
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple"
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Student</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectUI;
