import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";

import { setOpenForm } from "./missionsSlice";
import MissionScheduler from "./form";

function MissionControl() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setOpenForm(true));
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Mission Queue</p>
        <AddIcon onClick={handleClick} />
      </div>
      <MissionScheduler />
    </div>
  );
}

export default MissionControl;
