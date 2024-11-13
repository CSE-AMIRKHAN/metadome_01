import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Run } from '../misc/type';
import BackButton from './BackButton';

interface RunDetailProps {
  run: Run | null;
}


const RunDetail: React.FC<RunDetailProps> = ({ run }) => {
  if (!run) {
    return <Typography>No run found.</Typography>;
  }

  return (
    <Card style={{
        background: "#FFEBD4",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontSize:'48px',
        fontWeight:600
      }}>
      <CardContent>
        <BackButton/>
        <Typography variant="h5">{run.name}</Typography>
        <Typography variant="body1">{run.description}</Typography>
        <Typography variant="caption">{run.date}</Typography>
      </CardContent>
    </Card>
  );
};

export default RunDetail;