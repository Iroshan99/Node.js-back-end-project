var event=require('events');
var eventEmitter=new event.EventEmitter();

var dog=function(){
    console.log("dog is barking");
}

eventEmitter.on('bark',dog);

eventEmitter.emit('bark');