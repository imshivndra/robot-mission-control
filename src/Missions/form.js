import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { TextField, Select } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Formik, Form, Field, FieldArray } from "formik";
import { set } from "lodash";

import {
  selectOpenForm,
  setOpenForm,
  selectRobots,
  selectRobotsLoading,
} from "./missionsSlice";
import { getRobots } from "./actions";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "400px",
    overflowX: "hidden",
  },
  body: {
    padding: "1em",
    "& form": {
      display: "flex",
      flexDirection: "column",
      "& .MuiFormControl-root": {
        marginBottom: "1em",
      },
    },
  },
  header: {
    display: "flex",
    justify: "space-between",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#444444",
    padding: "5px 0 5px 12px",
    margin: "0 10px",
    borderBottom: "solid 1px #D2D2D2",
  },
  title: {
    flexGrow: 1,
  },
}));

function MissionScheduler(props) {
  const c = useStyles();
  const dispatch = useDispatch();
  const openForm = useSelector(selectOpenForm);

  const Robots = useSelector(selectRobots);
  const robotOptionsLoading = useSelector(selectRobotsLoading);

  // const [robots, setRobots] = useState([]);
  // const [locations, setLocations] = useState([]);
  // const [actions, setActions] = useState([]);

  useEffect(() => {
    console.log("get robots", getRobots());
    dispatch(getRobots());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(setOpenForm(false));
  };

  return (
    <Drawer
      anchor="right"
      classes={{
        paper: c.drawerPaper,
      }}
      onClose={handleClose}
      open={openForm}
    >
      <Box className={c.header}>
        <Box className={c.title}>Mission Scheduler</Box>
        <IconButton onClick={handleClose} aria-label="close drawer">
          <CancelIcon />
        </IconButton>
      </Box>
      <Box className={c.body}>
        <Formik
          initialValues={{
            name: "",
            tasks: [{ location: "", action: "" }],
          }}
          validate={(values) => {
            const errors = {};
            if (values.name < 1) {
              set(errors, "name", "required");
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          {({ submitForm, isSubmitting, values, errors, setFieldValue }) => {
            return (
              <Form>
                <Field
                  component={TextField}
                  name="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                />
                <FormControl>
                  <InputLabel id="robots"> Robots </InputLabel>
                  <Field
                    component={Select}
                    name="robot"
                    type="text"
                    label="Robot"
                    variant="outlined"
                    disabled={robotOptionsLoading}
                  >
                    {!robotOptionsLoading
                      ? (Robots || []).map((option) => (
                          <MenuItem key={option.id} value={option.name}>
                            {option.name}
                          </MenuItem>
                        ))
                      : null}
                  </Field>
                </FormControl>

                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  size="large"
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Drawer>
  );
}

export default MissionScheduler;
