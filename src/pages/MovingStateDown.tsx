import { Box, Typography, Grid } from '@mui/material';
import { CodeDisplay } from 'components/CodeDisplay';
import { GoBackButton } from 'components/GoBackButton';
import { StateInChild, StateInParent } from 'components/MovingStateDownComponents';

export const MovingStateDown = (): JSX.Element => {
  return (
    <>
      <GoBackButton />
      <Typography variant="h1">Moving state down</Typography>
      <Box sx={{ py: 2 }}>
        <Typography variant="h3" component="h2">
          Preventing re-renders with composition: <b>moving state down</b>
        </Typography>
        This pattern can be beneficial when a heavy component manages state, and this state is only used on a small
        isolated portion of the render tree. A typical example would be opening/closing a dialog with a button click in
        a complicated component that renders a significant portion of a page.
      </Box>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h2">State in parent</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <StateInParent />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const StateInParent = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GlowingOnRenderBox>
      <Box>I am the parent</Box>
      <Button onClick={() => setIsOpen(state => !state)}>Open a fictional modal</Button>
      {isOpen && <GlowingOnRenderBox>I am a fake modal doing my best here</GlowingOnRenderBox>}
      <GlowingOnRenderBox>I am another expensive component</GlowingOnRenderBox>
    </GlowingOnRenderBox>
  );
};
          `}
          />
        </Grid>
        <Grid size={12}>
          <Typography variant="h2">State in child</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <StateInChild />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const FakeModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GlowingOnRenderBox>
      <>
        <Button onClick={() => setIsOpen(state => !state)}>Open a fictional modal</Button>
        {isOpen && <GlowingOnRenderBox>I am a fake modal too, but better</GlowingOnRenderBox>}
      </>
    </GlowingOnRenderBox>
  );
};

const StateInChild = (): JSX.Element => {
  return (
    <GlowingOnRenderBox>
      <Box>I am the parent</Box>
      <FakeModal />
      <GlowingOnRenderBox>I am another expensive component</GlowingOnRenderBox>
    </GlowingOnRenderBox>
  );
};
          `}
          />
        </Grid>
      </Grid>
    </>
  );
};
