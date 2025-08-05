import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {

    const sentance="The Magic Begins with Every Drop of Lemon Syrup A single drop awakens the spell — golden sunlight swirling into bloom, turning each cup into a canvas of color, each sip into a story. At Magic Cassiao, we don’t just serve tea. We conjure wonder — where flavor dances, and nature’s beauty performs before your eyes."
  return (
    <TypeAnimation
      sequence={[sentance]}
      wrapper="span"
      cursor={true}
      speed={60}
      style={{ fontSize: '15px', color: 'white' }}
      repeat={0} // 0 means it runs only once
    />
  );
};

export default TypingAnimation;
