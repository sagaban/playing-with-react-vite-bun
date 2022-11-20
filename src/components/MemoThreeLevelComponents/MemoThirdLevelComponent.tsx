import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { memo, useRef } from 'react';

export const ThirdLevelComponent = (): JSX.Element => {
  const renderCount = ++useRef(0).current;
  return <GlowingOnRenderBox>Third levels renders: {renderCount}</GlowingOnRenderBox>;
};

export const MemoThirdLevelComponent = memo(ThirdLevelComponent);
