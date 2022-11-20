import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const GoBackButton = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} startIcon={<ArrowBack />}>
      Go Back
    </Button>
  );
};
