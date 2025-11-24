import { Box } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { useState } from 'react';

const ComponentWithScroll = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [, setScroll] = useState({});
  return (
    <GlowingOnRenderBox onScroll={e => setScroll(e)} sx={{ height: '200px', overflowY: 'scroll' }}>
      I am a component that handles the scroll and render children
      {children}
    </GlowingOnRenderBox>
  );
};
export const OnScrollComponent = (): JSX.Element => {
  return (
    <ComponentWithScroll>
      <Box sx={{ mt: 1, height: '300px' }}>
        <Box>I am the parent</Box>
        <GlowingOnRenderBox sx={{ height: '150px' }}>I am an expensive component</GlowingOnRenderBox>
      </Box>
    </ComponentWithScroll>
  );
};
