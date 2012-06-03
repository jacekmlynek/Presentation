(function() {
  var myCarMaker = function(spec){
    var _sound = spec.sound || "brummm";
    var _proto = spec.proto || {};

    //Create new object
    var _that = Object.create(_proto);

    // make private methods 
    var _startEngin = function(){
      console.log("StartEngin");
    };

    var _shiftGear = function(){
      console.log("Shift gear");
    };

    var _pressAccelerator = function(){
      console.log("Press accelerator and brummm");
    };

    //Privilages methods
    _that.get_name = function () {return spec.name;};
    _that.startDrive = function () 
    {
      console.log(spec.name);
      _startEngin();
      console.log(_sound);
      _shiftGear();
      _pressAccelerator();
    };

    return _that;
  };

  var myCar = myCarMaker({
    name: "My private car become prototype",
    sound: "trtr"
  });

  myCar.startDrive();
  //myCar.startEngin(); //should throw error

  var myGirlCar = myCarMaker({
    name: "My git car. She only think that it is her car :)",
    sound: "u lalalal",
    proto: myCar
  });

  myGirlCar.startDrive();

  //next instance of mycar
  
  var myWeekendsCar = myCarMaker({
    name: "My week car. It is just my daily car, nothink special",
    sound: "wrrrrrrrrr",
    proto: myCar
  });

  myWeekendsCar.startDrive();

})();



