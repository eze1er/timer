'use strict';
const timerSound = process.argv.slice(2);
let timer = 1000;
for (let i = 0; i < timerSound.length; i++) {
  setTimeout(() => {
    // the timer sound
    process.stdout.write('\x07');
    console.log('.');
    if (i === timerSound.length - 1) {
      timer += ('\n');
    }
  }, timer);
  // increment my timer outside of setTimeout
  timer += (1000 * timerSound[i]);
}

// for test you should run node with number for timer.


