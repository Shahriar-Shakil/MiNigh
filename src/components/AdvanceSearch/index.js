import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";
import SliderComponent from "./../Common/Slider/index";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import SelectUI from "./../Common/SelectUI/index";

const AdvanceSearch = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <StyledSearchForm className="row m-0">
      <form className="form-inline w-100  justify-content-around">
        <div className="form-group ">
          <SelectUI inputLabel={"I am a"} />
        </div>
        <div className="form-group ">
          <label
            // htmlFor="exampleFormControlSelect1"
            className="font-weight-bold d-block"
          >
            Age
            <SliderComponent />
          </label>
        </div>
        <div className="form-group ">
          <SelectUI inputLabel={"Looking for"} />
        </div>
        <div className="form-group ">
          <label
            // htmlFor="exampleFormControlSelect1"
            className="font-weight-bold d-block"
          >
            Age up to:
          </label>
          <SliderComponent />
        </div>
        <div className="form-group d-flex">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{"aria-label": "primary checkbox"}}
            value="Advance"
          />
          <label className="pr-3">Advance</label>
          <Button variant="contained">Search</Button>
        </div>
      </form>
    </StyledSearchForm>
  );
};

export default AdvanceSearch;

const StyledSearchForm = styled.div`
  .form-group {
    display: block;
  }
`;
