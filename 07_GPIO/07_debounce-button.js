'use strict';

const Gpio = require('onoff').Gpio;
const led = new Gpio(17,'out');
const button = new Gpio(2,'in','falling',{debounceTimeout:10});

button.watch(function(err,value){
    if(err)
        throw err;
    led.writeSync(led.readSync() ^ 1);
});

process.on('SIGINT',function(){
    led.unexport();
    button.unexport();
});