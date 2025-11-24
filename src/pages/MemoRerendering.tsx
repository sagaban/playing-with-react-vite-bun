import { Box, Typography, Grid } from '@mui/material';
import { CodeDisplay } from 'components/CodeDisplay';
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
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h2">Without memorization</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <FirstLevelComponent />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const FirstLevelComponent = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  return (
    <GlowingOnRenderBox>
      <Box m={1}>Counter: {counter}</Box>
      <Button onClick={() => setCounter(c => c + 1)}>Increase counter</Button>
      <Box m={1}> First level</Box>
      <SecondLevelComponent />
    </GlowingOnRenderBox>
  );
};

const SecondLevelComponent = (): JSX.Element => {
  return (
    <GlowingOnRenderBox>
      Second level
      <ThirdLevelComponent />
    </GlowingOnRenderBox>
  );
};
          `}
          />
        </Grid>
        <Grid size={6}>
          <Typography variant="h2">With memorization</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <MemoFirstLevelComponent />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const FirstLevelComponent = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  return (
    <GlowingOnRenderBox>
      <Box m={1}>Counter: {counter}</Box>
      <Button onClick={() => setCounter(c => c + 1)}>Increase counter</Button>
      <Box m={1}> First level</Box>
      <MemoSecondLevelComponent />
    </GlowingOnRenderBox>
  );
};

const MemoFirstLevelComponent = memo(FirstLevelComponent);

const SecondLevelComponent = (): JSX.Element => {
  return (
    <GlowingOnRenderBox>
      Second level
      <MemoThirdLevelComponent />
    </GlowingOnRenderBox>
  );
};

const MemoSecondLevelComponent = memo(SecondLevelComponent);
          `}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MemoRerendering;
