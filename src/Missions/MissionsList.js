import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { selectMissions, setEditMission, setOpenForm } from "./missionsSlice";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

import { getMissions } from "./actions";

const useStyles = makeStyles({
  table: {
    width: "100%",
    "&:hover": {
      cursor: "pointer",
    },
  },
  paper: {
    padding: "8px",
  },
});

function MissionsList() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const missions = useSelector(selectMissions);

  const [missionDetails, setMissionDetails] = useState({
    open: false,
    mission: { id: "" },
  });

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const handleRowClick = (id) => {
    if (id === missionDetails.mission.id) {
      setMissionDetails({
        open: !missionDetails.open,
        mission: missionDetails.mission,
      });
    } else {
      const mission = missions.find((m) => m.id === id);

      setMissionDetails({ open: true, mission: mission });
    }
  };
  const handleEditMission = (id) => {
    dispatch(setEditMission({ open: true, id }));
    dispatch(setOpenForm(true));
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="missions table">
              <TableHead style={{ background: "#0c21422b" }}>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell align="right">Mission</TableCell>
                  <TableCell align="right">Robot</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(missions || []).map((mission, index) => (
                  <TableRow
                    key={mission.id}
                    onClick={() => handleRowClick(mission.id)}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{mission.name}</TableCell>
                    <TableCell align="right">{mission.robot}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {missionDetails.open ? (
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>Mission Details</div>
                <div>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditMission(missionDetails.mission.id)}
                  >
                    <EditIcon />
                  </IconButton>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Name : {missionDetails.mission.name}</span>

                <span>Robot : {missionDetails.mission.robot}</span>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <span>Schedule Time: {missionDetails.mission.date_time}</span>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <span>Tasks</span>
              </div>
              {(missionDetails.mission.tasks || []).map((t, index) => (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  key={index}
                >
                  <span>{index + 1}</span>
                  <span>Location : {t.location}</span>
                  <span>Action : {t.action}</span>
                </div>
              ))}
            </Paper>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}

export default MissionsList;
