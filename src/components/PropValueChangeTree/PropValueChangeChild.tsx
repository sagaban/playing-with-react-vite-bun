import { GlowingOnRenderBox } from 'components/GlowingOnRenderBox';

export const PropValueChangeChild = ({ value }: { value: { text: string } }) => {
  return <GlowingOnRenderBox> I am the child and receives {value.text}</GlowingOnRenderBox>;
};
