import { Box, Typography, Grid } from '@mui/material';
import { CodeDisplay } from 'components/CodeDisplay';
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
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h2">State in parent</Typography>
        </Grid>
        <Grid size={6} offset={3}>
          <OnScrollOnParent />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const OnScrollOnParent = (): JSX.Element => {
  const [, setScroll] = useState({});
  return (
    <GlowingOnRenderBox onScroll={e => setScroll(e)} sx={{ height: '200px', overflowY: 'scroll' }}>
      <Box sx={{ mt: 4, height: '300px' }}>
        I am the parent and handle scroll events
        <GlowingOnRenderBox sx={{ height: '120px' }}>I am an expensive component</GlowingOnRenderBox>
      </Box>
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
          <OnScrollComponent />
        </Grid>
        <Grid size={12}>
          <CodeDisplay
            code={`const ComponentWithScroll = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [, setScroll] = useState({});
  return (
    <GlowingOnRenderBox onScroll={e => setScroll(e)} sx={{ height: '200px', overflowY: 'scroll' }}>
      I am a component that handles the scroll and render children
      {children}
    </GlowingOnRenderBox>
  );
};

const OnScrollComponent = (): JSX.Element => {
  return (
    <ComponentWithScroll>
      <Box sx={{ mt: 1, height: '300px' }}>
        <Box>I am the parent</Box>
        <GlowingOnRenderBox sx={{ height: '150px' }}>I am an expensive component</GlowingOnRenderBox>
      </Box>
    </ComponentWithScroll>
  );
};
            `}
          />
        </Grid>
      </Grid>
    </>
  );
};
