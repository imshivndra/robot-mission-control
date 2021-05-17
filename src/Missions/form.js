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
import DeleteIcon from "@material-ui/icons/Delete";
import { LinearProgress } from "@material-ui/core";

import { Button } from "@material-ui/core";
import { Formik, Form, Field, FieldArray } from "formik";
import { TextField, Select } from "formik-material-ui";
import { set } from "lodash";

import {
  selectOpenForm,
  setOpenForm,
  selectMissionMetaData,
  selectMissionMetaDataLoading,
} from "./missionsSlice";
import { getMissionMetaData, postMission } from "./actions";


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

  const missionMetaData = useSelector(selectMissionMetaData);
  const missionMetaDataLoading = useSelector(selectMissionMetaDataLoading);

  // const [robots, setRobots] = useState([]);
  // const [locations, setLocations] = useState([]);
  // const [actions, setActions] = useState([]);

  useEffect(() => {
    dispatch(getMissionMetaData());
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
            date_time: "",
            robot: "",
          }}
          validate={(values) => {
            const errors = {};
            if (values.name.length < 1) {
              set(errors, "name", "required");
            }
            console.log("error", errors);
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
           dispatch(postMission({values,setSubmitting}))
          }}
        >
          {({ submitForm, isSubmitting, values }) => {
            return (
              <Form>
                <Field
                  component={TextField}
                  name="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                />
                <Field
                  component={TextField}
                  name="date_time"
                  type="datetime-local"
                  variant="outlined"
                />

                <FormControl>
                  <InputLabel id="robots" style={{ paddingLeft: "1rem" }}>
                    {" "}
                    Robots{" "}
                  </InputLabel>
                  <Field
                    component={Select}
                    name="robot"
                    type="text"
                    label="Date Time"
                    variant="outlined"
                    disabled={missionMetaDataLoading}
                  >
                    {(missionMetaData.robots || []).map((option) => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>

                <span>Tasks</span>

                <FieldArray
                  name="tasks"
                  render={(arrayHelpers) => (
                    <>
                      <div>
                        {values.tasks.map((column, index) => (
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              alignItems: "center",
                            }}
                            key={index}
                          >
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                gap: "1rem",
                                alignItems: "center",
                              }}
                            >
                              <FormControl style={{ width: "100%" }}>
                                <InputLabel
                                  id="location"
                                  style={{ paddingLeft: "1rem" }}
                                >
                                  {" "}
                                  Location{" "}
                                </InputLabel>
                                <Field
                                  component={Select}
                                  name={`tasks[${index}].location`}
                                  type="text"
                                  label="location"
                                  variant="outlined"
                                >
                                  {(missionMetaData.locations || []).map(
                                    (option) => (
                                      <MenuItem
                                        key={option.id}
                                        value={option.name}
                                      >
                                        {option.name}
                                      </MenuItem>
                                    )
                                  )}
                                </Field>
                              </FormControl>

                              <FormControl style={{ width: "100%" }}>
                                <InputLabel
                                  id="action"
                                  style={{ paddingLeft: "1rem" }}
                                >
                                  {" "}
                                  Action{" "}
                                </InputLabel>
                                <Field
                                  component={Select}
                                  name={`tasks[${index}].action`}
                                  type="text"
                                  label="Action"
                                  variant="outlined"
                                >
                                  {(missionMetaData.actions || []).map(
                                    (option) => (
                                      <MenuItem
                                        key={option.id}
                                        value={option.name}
                                      >
                                        {option.name}
                                      </MenuItem>
                                    )
                                  )}
                                </Field>
                              </FormControl>
                              {values.tasks.length > 1 ? (
                                <DeleteIcon
                                  onClick={() => arrayHelpers.remove(index)}
                                />
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={() =>
                          arrayHelpers.push({
                            location: "",
                            action: "",
                          })
                        }
                      >
                        +
                      </Button>
                    </>
                  )}
                />
                {isSubmitting && <LinearProgress />}
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

// <div
// style={{
//   display: "flex",
//   flexDirection: "column",
// }}
// >
// <Button
//   onClick={() => arrayHelpers.remove(index)}
// >
//   -
// </Button>
// {values.tasks.length === index + 1 ? (
//   <Button
//     onClick={() =>
//       arrayHelpers.push({
//         location: "",
//         action: "",
//       })
//     }
//   >
//     +
//   </Button>
// ) : null}
// </div>
