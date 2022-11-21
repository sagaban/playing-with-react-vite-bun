import { DoubleArrow } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MainPage = (): JSX.Element => {
  const routesList = [
    {
      to: '/memo-rerendering',
      label: 'State changes and memo',
    },
    {
      to: '/props-change',
      label: 'Props change, memo and useMemo',
    },
    {
      to: '/moving-state-down',
      label: 'Moving state down',
    },
    {
      to: '/children-as-props',
      label: 'Children as props',
    },
  ];

  return (
    <Stack>
      <Typography variant="h1">Avoiding re-renders</Typography>
      <List sx={{ mb: 2 }}>
        {routesList.map(route => (
          <ListItem disablePadding key={route.to}>
            <ListItemButton component={Link} to={route.to}>
              <ListItemIcon>
                <DoubleArrow />
              </ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
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
