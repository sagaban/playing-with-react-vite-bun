import { DoubleArrow, OpenInNew } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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

  const references = [
    {
      url: 'https://www.developerway.com/posts/react-re-renders-guide',
      title: 'React re-renders guide: everything, all at once',
    },
    {
      url: 'https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/',
      title: 'A (Mostly) Complete Guide to React Rendering Behavior',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h1" component="h1" gutterBottom>
            Avoiding re-renders
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Explore different techniques and patterns to optimize React component rendering performance.
          </Typography>
        </Box>

        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
              Topics
            </Typography>
            <List>
              {routesList.map((route, index) => (
                <Box key={route.to}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component={RouterLink}
                      to={route.to}
                      sx={{
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: 'action.hover',
                        },
                      }}
                    >
                      <ListItemIcon>
                        <DoubleArrow color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={route.label}
                        primaryTypographyProps={{
                          variant: 'body1',
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < routesList.length - 1 && <Divider variant="inset" component="li" />}
                </Box>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
              References
            </Typography>
            <Stack spacing={2}>
              {references.map((ref, index) => (
                <Box key={ref.url}>
                  <Link
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: 'primary.light',
                      },
                    }}
                  >
                    <OpenInNew fontSize="small" />
                    <Typography variant="body1">{ref.title}</Typography>
                  </Link>
                  {index < references.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default MainPage;
