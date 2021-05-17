import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";

import { selectOpenForm, setOpenForm } from "./missionsSlice";
import MissionScheduler from "./form";
import MissionsList from "./MissionsList";

function MissionControl() {
  const dispatch = useDispatch();

  const openForm = useSelector(selectOpenForm);

  const handleClick = () => {
    dispatch(setOpenForm(true));
  };
  return (
    <div style={{ margin: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Mission Queue</p>
        <IconButton color="primary" onClick={handleClick}>
          <AddIcon />
        </IconButton>
      </div>
      <div>
        <MissionsList />
      </div>
      {openForm ? <MissionScheduler /> : null}
    </div>
  );
}

export default MissionControl;
