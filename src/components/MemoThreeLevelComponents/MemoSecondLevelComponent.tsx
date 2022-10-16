import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox/GlowingOnRenderBox';
import { memo, useRef } from 'react';
import { MemoThirdLevelComponent } from './MemoThirdLevelComponent';

export const SecondLevelComponent = (): JSX.Element => {
  const renderCount = ++useRef(0).current;
  return (
    <GlowingOnRenderBox>
      Second levels renders: {renderCount}
      <MemoThirdLevelComponent />
    </GlowingOnRenderBox>
  );
};

export const MemoSecondLevelComponent = memo(SecondLevelComponent);
