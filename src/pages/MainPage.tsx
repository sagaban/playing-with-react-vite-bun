import { DoubleArrow } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MainPage = (): JSX.Element => {
  return (
    <Stack>
      <Typography variant="h1">Avoiding re-renders</Typography>
      <List sx={{ mb: 2 }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/memo-rerendering">
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="Memo, rerendering and state changes" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/prop-change">
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="Props change, memo and useMemo" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/moving-state-down">
            <ListItemIcon>
              <DoubleArrow />
            </ListItemIcon>
            <ListItemText primary="Moving state down" />
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
        <li>
          <a
            href="https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/"
            target="_blank"
            rel="noreferrer"
          >
            A (Mostly) Complete Guide to React Rendering Behavior
          </a>
        </li>
      </ul>
    </Stack>
  );
};

export default MainPage;
