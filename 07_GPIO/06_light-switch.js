'use strict';

const Gpio = require('onoff').Gpio;
const led = new Gpio(17,'out');
const button = new Gpio(2,'in','both');

button.watch(function(err,value){
    if(err)
        throw err;
    led.writeSync(value ^ 1);
});

process.on('SIGINT',function(){
    led.unexport();
    button.unexport();
});