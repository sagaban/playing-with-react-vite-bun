import { Box, Typography, Grid } from '@mui/material';
import { CodeDisplay } from 'components/CodeDisplay';
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
      <Grid container spacing={2}>
        <Grid size={12} sx={{ mt: 2 }}>
          <Typography variant="h2">Same prop value</Typography>
        </Grid>
        <Grid size={12} sx={{ mt: 1 }}>
          <Typography variant="h3">Without memorization</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <SamePropValueTree />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const sameValue = { text: 'Testing 123' };

const SamePropValueTree = (): JSX.Element => {
  const [, setCounter] = useState(0);
  return (
    <GlowingOnRenderBox>
      <Button onClick={() => setCounter(c => c + 1)}>Re render the parent</Button>
      <Box m={1}> I am the parent</Box>
      <SamePropValueChild value={sameValue} />
    </GlowingOnRenderBox>
  );
};

const SamePropValueChild = ({ value }: { value: { text: string } }) => {
  return <GlowingOnRenderBox> I am the child and receives {value.text}</GlowingOnRenderBox>;
};
          `}
          />
        </Grid>
        <Grid size={12} sx={{ mt: 1 }}>
          <Typography variant="h3">With memorization</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <MemoSamePropValueTree />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const sameValue = { text: 'Testing 123' };

const MemoSamePropValueChild = memo(SamePropValueChild);

const MemoSamePropValueTree = (): JSX.Element => {
  const [, setCounter] = useState(0);
  return (
    <GlowingOnRenderBox>
      <Button onClick={() => setCounter(c => c + 1)}>Re render the parent</Button>
      <Box m={1}> I am the parent and use memo child</Box>
      <MemoSamePropValueChild value={sameValue} />
    </GlowingOnRenderBox>
  );
};

const SamePropValueChild = ({ value }: { value: { text: string } }) => {
  return <GlowingOnRenderBox> I am the child and receives {value.text}</GlowingOnRenderBox>;
};
          `}
          />
        </Grid>
        <Grid size={12} sx={{ mt: 2 }}>
          <Typography variant="h2">Value prop changes</Typography>
          As the value is an object that is defined every time the parents in re-redendered. With <code>
            string
          </code>, <code>useMemo</code> is not needed
        </Grid>
        <Grid size={12} sx={{ mt: 1 }}>
          <Typography variant="h3">With just memorization</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <PropValueChangeTree />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const MemoPropValueChangeChild = memo(PropValueChangeChild);

const PropValueChangeTree = (): JSX.Element => {
  const [, setCounter] = useState(0);
  const componentValue = { text: 'Testing 123' };

  return (
    <GlowingOnRenderBox>
      <Button onClick={() => setCounter(c => c + 1)}>Re render the parent</Button>
      <Box m={1}> I am the parent and use memo child</Box>
      <MemoPropValueChangeChild value={componentValue} />
    </GlowingOnRenderBox>
  );
};

const PropValueChangeChild = ({ value }: { value: { text: string } }) => {
  return <GlowingOnRenderBox> I am the child and receives {value.text}</GlowingOnRenderBox>;
};
          `}
          />
        </Grid>
        <Grid size={12} sx={{ mt: 1 }}>
          <Typography variant="h3">With memorization and useMemo</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <MemoPropValueChangeTree />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const MemoPropValueChangeChild = memo(PropValueChangeChild);

const MemoPropValueChangeTree = (): JSX.Element => {
  const [, setCounter] = useState(0);
  const componentValue = useMemo(() => ({ text: 'Testing 123' }), []);

  return (
    <GlowingOnRenderBox>
      <Button onClick={() => setCounter(c => c + 1)}>Re render the parent</Button>
      <Box m={1}> I am the parent and use memo child and useMemo hook</Box>
      <MemoPropValueChangeChild value={componentValue} />
    </GlowingOnRenderBox>
  );
};

const PropValueChangeChild = ({ value }: { value: { text: string } }) => {
  return <GlowingOnRenderBox> I am the child and receives {value.text}</GlowingOnRenderBox>;
};
            `}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PropsChange;
