//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    checkService(){
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
    start() {
        if(this.fuel > 0) {
            console.log('Engine has started.');
            return this.started = true
        } else {
            console.log("out of gas");
            return this.started = false;
        }
    }
    loadPassenger(num) { 
        if(this.passenger <this.maxPassengers) {
            if((num+ this.passenger) <= this.maxPassengers){
               this.passenter = num;
               return this.passenger; 
            } else {
                console.log(this.model + "  " + this.make + " has all the passengers it can carry")
            }
        }
    }
}
//If I were able to install npm and get the node up and running on this file. (I think its corrupted on gitHub I erased the orginal that I did and rewrote this file and still could not install node or json on this forked file)this is how I would check the code. I don't see any errors, other than no node files or npm.  

//this shows how to call from this module...
let myCar = new Car('merury', 'cool_sedan', 2023, 'green', 100);

myCar.start();
myCar.loadPassenger(2);
myCar.stop();
myCar.checkService();

console.log(myCar)



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
