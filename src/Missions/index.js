import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";

function MissionControl() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
    <p>Mission Queue</p>
      <AddIcon />
    </div>
  );
}

export default MissionControl;
