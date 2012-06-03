(function(){
  var objectToExtend = {};
  var notExtended_object = {};
  
  objectToExtend.say_something = function ()
  {
    console.log("something from objectToExtend");
  }

  if(typeof(objectToExtend.say_something) === 'function') objectToExtend.say_something();
  if(typeof(notExtended_object.say_something) === 'function') notExtended_object.say_something();

})();
