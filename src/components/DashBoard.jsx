import React from "react";
import { sampleRuns } from "../misc/data";
import RunList from "./RunList";

const Dashboard: React.FC = () => {
  return (
    <div
      style={{
        background: "#B59F78",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width:'98vw',
        padding:"24px"
      }}
    >
      <div style={{
        background: "#FF4E88",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontSize:'48px',
        fontWeight:600
      }}>Runs Dashboard</div>
      <div>
      <RunList runs={sampleRuns} />
      </div>
    </div>
  );
};

export default Dashboard;
