(function(myCar){
  
  var myOffRoadCar = Object.create(myCar);
  myOffRoadCar.name = "My off road car, its not prototyp, it can be, but now its not nessesery";
  myOffRoadCar.sound = "road hrrr szrr"; // should overide mycar sound.
  myOffRoadCar.fireSecondWheelDrive = function(){
    console.log("second wheel drive has been fired");
  };

  myOffRoadCar.startDrive(); //Should log raod hrrr szrr instand of brum

  var myTruckCar = Object.create(myCar);
  
  //Differances only
  myTruckCar.name = "My track has become truck prototype ";
  myTruckCar.sound = "hrrrrr plum";

  myTruckCar.containerType = "long";
  myTruckCar.cargoType = "wood";
  myTruckCar.relaseCargo = function (){
    console.log("cargo  has been relased");
  };

  myTruckCar.startDrive();
  myTruckCar.relaseCargo();

  // aguments params.
  var myRoadsterTruck = Object.create(myTruckCar,{
    name: {
        value: "My beautiful truck", 
        writable: true,
        configurable: true,
        enumerable: true},
    containerType: {value: "short"}
    });
  
  myRoadsterTruck.startDrive(); // it has not have its own sound so shoud get from myTruckCar.

  // It will be not needed i my shiny new truck :)
  delete myRoadsterTruck.cargoType;
  delete myRoadsterTruck.relaseCargo;
  
  //myRoadsterTruck.relaseCargo(); //throw error;
})( {
      name: "My car which has became prototype for other my cars, but itself is ready to drive",
      color: "white",
      enginSound: function() {
        return this.sound || "brummm";
      },

      startEngin: function(){
        console.log("StartEngin");
      },
      shiftGear: function(){
        console.log("Shift gear");
      },
      pressAccelerator: function(){
        console.log("Press accelerator and brummm");
      },
      startDrive: function(){
        console.log(this.name);
        this.startEngin();
        console.log(this.enginSound());
        this.shiftGear();
        this.pressAccelerator();
      }
  });
