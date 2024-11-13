import React from 'react';
import { useParams } from 'react-router-dom';
import RunDetail from './RunDetail';
import { sampleRuns } from '../misc/data';

const RunDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const runId = id ? parseInt(id) : null;
  const run = sampleRuns.find((run) => run.id === runId);

  return (
    <div style={{
      background: "#FF8A8A",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      width:'98vw',
      padding:"24px"
    }}>
      <h1>Run Details</h1>
      <RunDetail run={run || null} />
    </div>
  );
};

export default RunDetailsPage;