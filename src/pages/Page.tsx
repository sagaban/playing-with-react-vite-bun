import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Page = (): JSX.Element => {
  return (
    <Stack>
      <Typography variant="h1">React experiments</Typography>
      <ul>
        <li>
          <Link to="/memo-rerendering">Memo Rerendering</Link>
        </li>
      </ul>
    </Stack>
  );
};

export default Page;
