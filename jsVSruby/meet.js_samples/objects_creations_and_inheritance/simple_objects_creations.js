(function(){
  var myCar = {
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
  }

  var myGirlCar = Object.create(myCar);
  myGirlCar.name = "My git car. She only think that it is her car :)";
  myGirlCar.color = "pink";
  myGirlCar.sound = "u lalalal";

  var myWeekendsCar = Object.create(myCar);
  myWeekendsCar.name = "My week car. It is just my daily car, nothink special";
  myWeekendsCar.color = "black";
  myWeekendsCar.sound = "wrrrrrrrrr";

  //Checking all my cars.
  myCar.startDrive();
  myGirlCar.startDrive();
  myWeekendsCar.startDrive();
})();
