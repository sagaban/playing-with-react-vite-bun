import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { GoBackButton } from 'components/GoBackButton';
import { MemoFirstLevelComponent } from 'components/MemoThreeLevelComponents/MemoFirstLevelComponent';
import { FirstLevelComponent } from 'components/ThreeLevelComponents/FirstLevelComponent';

const MemoRerendering = (): JSX.Element => {
  return (
    <>
      <GoBackButton />
      <Typography variant="h1">Memo Rerendering</Typography>
      <Box sx={{ py: 2 }}>
        <Typography variant="h3" component="h2">
          Re-renders reason: <b>state changes</b>
        </Typography>
        When a component’s state changes, it will re-render itself. Usually, it happens either in a callback or in
        <code> useEffect</code> hook. State changes are the “root” source of all re-renders.
      </Box>
      <Grid container columnSpacing={2}>
        <Grid xs={6}>
          <Typography variant="h2">Without memorization</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="h2">With memorization</Typography>
        </Grid>
        <Grid xs={6}>
          <FirstLevelComponent />
        </Grid>
        <Grid xs={6}>
          <MemoFirstLevelComponent />
        </Grid>
      </Grid>
    </>
  );
};

export default MemoRerendering;
