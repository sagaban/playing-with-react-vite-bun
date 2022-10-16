import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { MemoFirstLevelComponent } from 'components/MemoThreeLevelComponents/MemoFirstLevelComponent';
import { FirstLevelComponent } from 'components/ThreeLevelComponents/FirstLevelComponent';

const MemoRerendering = (): JSX.Element => {
  return (
    <>
      <Typography variant="h1">Memo Rerendering</Typography>
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
