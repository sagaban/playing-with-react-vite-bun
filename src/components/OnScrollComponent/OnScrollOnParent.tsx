import { Box } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { useState } from 'react';

export const OnScrollOnParent = (): JSX.Element => {
  const [, setScroll] = useState({});
  return (
    <GlowingOnRenderBox onScroll={e => setScroll(e)} sx={{ height: '200px', overflowY: 'scroll' }}>
      <Box sx={{ mt: 4 }}>
        I am the parent and handle scroll events
        <GlowingOnRenderBox sx={{ height: '120px' }}>I am an expensive component</GlowingOnRenderBox>
      </Box>
    </GlowingOnRenderBox>
  );
};
