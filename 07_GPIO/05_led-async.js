'use strict';

const Gpio = require('onoff').Gpio;
const led = new Gpio(17,'out');
let stopBlinking =false;

const blinkLed= function(){
    if (stopBlinking)
        return led.unexport();
    led.read(function(err,value){
        if(err)
            throw err;
        if( value == 0)
            console.log('LED ON');
        else    
            console.log('LED OFF');
        led.write(value ^ 1, function(err){
            if(err)
                throw err;
        });
    });
    setTimeout(blinkLed, 1000);
};

blinkLed();

setTimeout(function(){
    stopBlinking = true;
},10000);
    