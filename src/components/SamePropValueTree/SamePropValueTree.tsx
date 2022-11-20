import { Box, Button } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { useState } from 'react';
import { SamePropValueChild } from './SamePropValueChild';

const sameValue = { text: 'Testing 123' };

export const SamePropValueTree = (): JSX.Element => {
  const [, setCounter] = useState(0);
  return (
    <GlowingOnRenderBox>
      <Button onClick={() => setCounter(c => c + 1)}>Re render the parent</Button>
      <Box m={1}> I am the parent</Box>
      <SamePropValueChild value={sameValue} />
    </GlowingOnRenderBox>
  );
};
