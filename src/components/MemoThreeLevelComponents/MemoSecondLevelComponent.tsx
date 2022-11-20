import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { memo } from 'react';
import { MemoThirdLevelComponent } from './MemoThirdLevelComponent';

export const SecondLevelComponent = (): JSX.Element => {
  return (
    <GlowingOnRenderBox>
      Second level
      <MemoThirdLevelComponent />
    </GlowingOnRenderBox>
  );
};

export const MemoSecondLevelComponent = memo(SecondLevelComponent);
