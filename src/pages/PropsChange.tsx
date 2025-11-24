import { Box, Typography, Grid } from '@mui/material';
import { GoBackButton } from 'components/GoBackButton';
import { MemoPropValueChangeTree, PropValueChangeTree } from 'components/PropValueChangeTree';
import { MemoSamePropValueTree, SamePropValueTree } from 'components/SamePropValueTree';

const PropsChange = (): JSX.Element => {
  return (
    <>
      <GoBackButton />
      <Typography variant="h1">Prop Change</Typography>

      <Box sx={{ py: 2 }}>
        <Typography variant="h3" component="h2">
          Re-renders reason: <b>props changes (the big myth)</b>
        </Typography>
        It doesn’t matter whether the component’s props change or not when talking about re-renders of not memoized
        components. In order for props to change, they need to be updated by the parent component. This means the parent
        would have to re-render, which will trigger re-render of the child component regardless of its props. Only when
        memoization techniques are used (<code>React.memo</code>, <code>useMemo</code>), then props change becomes
        important.
      </Box>
      <Grid container columnSpacing={2}>
        <Grid size={12} sx={{ mt: 2 }}>
          <Typography variant="h2">Same prop value</Typography>
        </Grid>
        <Grid size={6} sx={{ mt: 1 }}>
          <Typography variant="h3">Without memorization</Typography>
        </Grid>
        <Grid size={6} sx={{ mt: 1 }}>
          <Typography variant="h3">With memorization</Typography>
        </Grid>
        <Grid size={6}>
          <SamePropValueTree />
        </Grid>
        <Grid size={6}>
          <MemoSamePropValueTree />
        </Grid>
        <Grid size={12} sx={{ mt: 2 }}>
          <Typography variant="h2">Value prop changes</Typography>
          As the value is an object that is defined every time the parents in re-redendered. With <code>
            string
          </code>, <code>useMemo</code> is not needed
        </Grid>
        <Grid size={6} sx={{ mt: 1 }}>
          <Typography variant="h3">With just memorization</Typography>
        </Grid>
        <Grid size={6} sx={{ mt: 1 }}>
          <Typography variant="h3">With memorization and useMemo</Typography>
        </Grid>
        <Grid size={6} sx={{ mt: 1 }}>
          <PropValueChangeTree />
        </Grid>
        <Grid size={6} sx={{ mt: 1 }}>
          <MemoPropValueChangeTree />
        </Grid>
      </Grid>
    </>
  );
};

export default PropsChange;
