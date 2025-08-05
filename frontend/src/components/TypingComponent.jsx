import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {

    const sentance="  A single drop awakens the spell — golden sunlight swirling into bloom, turning each cup into a canvas of color, each sip into a story. At Magic Cassiao, we don’t just serve tea. We conjure wonder — where flavor dances, and nature’s beauty performs before your eyes."
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


// import React, { useEffect, useRef } from 'react';
// import '../stylesheet/typingAnimation.css'; // link the CSS file

// const TypingAnimation = () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const part1 = 'The Magic Begins with Every Drop of Lemon Syrup';
//     const part2 =
//       ' — A single drop awakens the spell — golden sunlight swirling into bloom, turning each cup into a canvas of color, each sip into a story. At Magic Cassiao, we don’t just serve tea. We conjure wonder — where flavor dances, and nature’s beauty performs before your eyes.';

//     if (ref.current) {
//       ref.current.innerHTML = `<span class="highlight">${part1}</span>${part2}`;
//     }
//   }, []);

//   return (
//     <p
//       ref={ref}
//       className="typing-text"
//     ></p>
//   );
// };

// export default TypingAnimation;
