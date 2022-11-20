import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { memo } from 'react';

export const ThirdLevelComponent = (): JSX.Element => {
  return <GlowingOnRenderBox>Third level</GlowingOnRenderBox>;
};

export const MemoThirdLevelComponent = memo(ThirdLevelComponent);
