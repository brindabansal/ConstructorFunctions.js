// a constructor is just a function that creates an object for
//what if you want to make a lot of objects,you dont need to actually make functions again and again, rather you can use constructor functions...

//on console you can dID this as practice...
 var myCar={
    maxSpeed:70,
    driver:"vrinda heyhey",
    driver: function(speed,time){
        document.write(speed*  time)

    },
    logDriver:function(){
        document.write("driver name is "+ this.driver);
    }

 };

// USING CONSTRUCTOR FUNCTION
var Car= function(maxSpeed,driver){
    //we can use this keyword instead of writing myCar2.maxSpeed
    this.maxSpeed=maxSpeed;
    this.driver= driver;
    this.drive= function(speed,time){
        document.write(speed*time);

    };
    this.logDriver=function(){
        document.drive("driver name is "+ this.driver);
    };



 }
 // now its easy to make large number of car objects...
 var myCar=new Car(70,"vrinda1");
 var myCar2=new Car(30,"damn");
 var myCar3=new Car(40,"shaun");
 var myCar4=new Car(50,"yuq");
 myCar.drive(30,5);
 myCar3.logDriver();

