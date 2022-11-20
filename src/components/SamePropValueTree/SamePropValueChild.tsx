import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';

export const SamePropValueChild = ({ value }: { value: { text: string } }) => {
  return <GlowingOnRenderBox> I am the child and receives {value.text}</GlowingOnRenderBox>;
};
