'use strict';

new TypeIt('.home__title--strong', {
  speed: 100,
})
  .pause(1000)
  //   .move(null, { to: 'END' })
  .move(-9)
  .delete(10)
  .type('Front-end ')
  .pause(1000)
  //   .type('Back-end')
  //   .delete(10)
  //   .type('Full-stack')
  //   .pause(1000)
  .move(10)
  .go();
