import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <button onClick={handleBackClick}>
      Go Back
    </button>
  );
};

export default BackButton;