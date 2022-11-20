import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';
import { ThirdLevelComponent } from './ThirdLevelComponent';

export const SecondLevelComponent = (): JSX.Element => {
  return (
    <GlowingOnRenderBox>
      Second level
      <ThirdLevelComponent />
    </GlowingOnRenderBox>
  );
};
