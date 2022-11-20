import { Box, Button } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { memo, useMemo, useState } from 'react';
import { PropValueChangeChild } from './PropValueChangeChild';

const MemoPropValueChangeChild = memo(PropValueChangeChild);

export const MemoPropValueChangeTree = (): JSX.Element => {
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
