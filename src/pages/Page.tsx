import { DoubleArrow } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Page = (): JSX.Element => {
  return (
    <Stack>
      <Typography variant="h1">React experiments</Typography>
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/memo-rerendering">
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="Memo Rerendering (state changes)" />
          </ListItemButton>
        </ListItem>
      </List>
      <Typography variant="h4" component="h2">
        References
      </Typography>
      <ul>
        <li>
          <a href="https://www.developerway.com/posts/react-re-renders-guide" target="_blank" rel="noreferrer">
            React re-renders guide: everything, all at once
          </a>
        </li>
      </ul>
    </Stack>
  );
};

export default Page;
