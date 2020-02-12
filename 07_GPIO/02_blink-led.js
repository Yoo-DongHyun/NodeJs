'use strict';

const Gpio = require('onoff').Gpio;
const led = new Gpio(17,'out');


const iv = setInterval(function(){
    led.writeSync(led.readSync() ^ 1); //led 상태값을 반대로
}, 200);

setTimeout(function(){
    clearInterval(iv);
    led.unexport();
},5000);