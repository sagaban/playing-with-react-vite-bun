import { Box, Button } from '@mui/material';
import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox/GlowingOnRenderBox';
import { memo, useRef, useState } from 'react';
import { MemoSecondLevelComponent } from './MemoSecondLevelComponent';

export const FirstLevelComponent = (): JSX.Element => {
  const renderCount = ++useRef(0).current;
  const [counter, setCounter] = useState(0);
  return (
    <GlowingOnRenderBox>
      <Box m={1}>Counter: {counter}</Box>
      <Button onClick={() => setCounter(c => c + 1)}>Increase counter</Button>
      <Box m={1}> First levels renders: {renderCount}</Box>
      <MemoSecondLevelComponent />
    </GlowingOnRenderBox>
  );
};

export const MemoFirstLevelComponent = memo(FirstLevelComponent)
