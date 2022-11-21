import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { GoBackButton } from 'components/GoBackButton';
import { OnScrollComponent, OnScrollOnParent } from 'components/OnScrollComponent';

export const ChildrenAsProps = (): JSX.Element => {
  return (
    <>
      <GoBackButton />
      <Typography variant="h1">Children as props</Typography>
      <Box sx={{ py: 2 }}>
        <Typography variant="h3" component="h2">
          Preventing re-renders with composition: <b>children as props</b>
        </Typography>
        This can also be called “wrap state around children”. This pattern is similar to “moving state down”: it
        encapsulates state changes in a smaller component. The difference here is that state is used on an element that
        wraps a slow portion of the render tree, so it can’t be extracted that easily. A typical example would be
        <code>onScroll</code> or <code>onMouseMove</code> callbacks attached to the root element of a component.
        <br />
        Also read:
        <a href="https://www.developerway.com/posts/react-elements-children-parents" target="_blank" rel="noreferrer">
          The mystery of React Element, children, parents and re-renders
        </a>
      </Box>
      <Grid container columnSpacing={2}>
        <Grid xs={6}>
          <Typography variant="h2">State in parent</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="h2">State in child</Typography>
        </Grid>
        <Grid xs={6}>
          <OnScrollOnParent />
        </Grid>
        <Grid xs={6}>
          <OnScrollComponent />
        </Grid>
      </Grid>
    </>
  );
};
