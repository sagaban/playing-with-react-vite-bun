import { Box, Button } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { memo, useState } from 'react';
import { SamePropValueChild } from './SamePropValueChild';

const sameValue = { text: 'Testing 123' };

const MemoSamePropValueChild = memo(SamePropValueChild);

export const MemoSamePropValueTree = (): JSX.Element => {
  const [, setCounter] = useState(0);
  return (
    <GlowingOnRenderBox>
      <Button onClick={() => setCounter(c => c + 1)}>Re render the parent</Button>
      <Box m={1}> I am the parent and use memo child</Box>
      <MemoSamePropValueChild value={sameValue} />
    </GlowingOnRenderBox>
  );
};
