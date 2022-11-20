import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { useRef } from 'react';
import { ThirdLevelComponent } from './ThirdLevelComponent';

export const SecondLevelComponent = (): JSX.Element => {
  const renderCount = ++useRef(0).current;
  return (
    <GlowingOnRenderBox>
      Second levels renders: {renderCount}
      <ThirdLevelComponent />
    </GlowingOnRenderBox>
  );
};
