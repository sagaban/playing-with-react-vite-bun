import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { useRef } from 'react';

export const ThirdLevelComponent = (): JSX.Element => {
  const renderCount = ++useRef(0).current;
  return <GlowingOnRenderBox>Third levels renders: {renderCount}</GlowingOnRenderBox>;
};
