'use strict';
const timerSound = process.argv.slice(2);
let timer = 0
for (let i = 0; i < timerSound.length; i++) {
  setTimeout(() => {
    // the timer sound
    process.stdout.write('\x07');
    // increment my timer
    if (i === timerSound.length - 1) {
      timer += (1000 * timerSound[i]) ;
      timer += ('\n');
    } else {
      timer += (1000 * timerSound[i]) ;
    }
     
  }, timer);

}

// for test you should run node with number for timer.

