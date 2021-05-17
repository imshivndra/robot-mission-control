import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import { selectOpenForm, setOpenForm } from "./missionsSlice";
import MissionScheduler from "./form";
import { getMissions } from "./actions";

function MissionControl() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const openForm = useSelector(selectOpenForm);

  const handleClick = () => {
    dispatch(setOpenForm(true));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Mission Queue</p>
        <AddIcon onClick={handleClick} />
      </div>
      {openForm ? <MissionScheduler /> : null}
    </div>
  );
}

export default MissionControl;
