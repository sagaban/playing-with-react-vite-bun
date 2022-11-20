import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { GoBackButton } from 'components/GoBackButton';
import { StateInChild, StateInParent } from 'components/MovingStateDownComponents';

export const MovingStateDown = (): JSX.Element => {
  return (
    <>
      <GoBackButton />
      <Typography variant="h1">Moving state down</Typography>
      <Box sx={{ py: 2 }}>
        <Typography variant="h3" component="h2">
          Preventing re-renders with composition: moving state down
        </Typography>
        This pattern can be beneficial when a heavy component manages state, and this state is only used on a small
        isolated portion of the render tree. A typical example would be opening/closing a dialog with a button click in
        a complicated component that renders a significant portion of a page.
      </Box>
      <Grid container columnSpacing={2}>
        <Grid xs={6}>
          <Typography variant="h2">State in parent</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="h2">State in child</Typography>
        </Grid>
        <Grid xs={6}>
          <StateInParent />
        </Grid>
        <Grid xs={6}>
          <StateInChild />
        </Grid>
      </Grid>
    </>
  );
};
