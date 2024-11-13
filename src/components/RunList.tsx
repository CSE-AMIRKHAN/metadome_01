import React from 'react';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Run } from '../misc/type';
import { useNavigate } from 'react-router-dom';
import  "./styles.css";

interface RunListProps {
  runs: Run[];
}

const RunList: React.FC<RunListProps> = ({ runs }) => {
  const navigate = useNavigate();

  return (
    <List style={{backgroundColor:"#D8DBBD"}}>
      {runs.map((run) => (
        <ListItem className='list' key={run.id}>
          <ListItemButton onClick={() => navigate(`/runs/${run.id}`)}>
            <ListItemText primary={run.name} secondary={run.date} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default RunList;