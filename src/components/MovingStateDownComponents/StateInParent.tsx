import { Box, Button } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { useState } from 'react';

export const StateInParent = (): JSX.Element => {
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
