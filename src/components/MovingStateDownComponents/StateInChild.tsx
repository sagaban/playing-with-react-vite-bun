import { Box, Button } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { useState } from 'react';

const FakeModal = (): JSX.Element => {
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

export const StateInChild = (): JSX.Element => {
  return (
    <GlowingOnRenderBox>
      <Box>I am the parent</Box>
      <FakeModal />
      <GlowingOnRenderBox>I am another expensive component</GlowingOnRenderBox>
    </GlowingOnRenderBox>
  );
};
