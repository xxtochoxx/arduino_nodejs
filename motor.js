var five = require("johnny-five");
board = new five.Board();

board.on("ready", function() {
  // Create a new `motor` hardware instance.
  var motor;
  motor = new five.Motor({
    pins: [7, 8],
    controller: "PCA9685",
    address: 0x60
  });

  // Inject the `motor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    motor: motor,
  });

  // Motor Event API

  // "start" events fire when the motor is started.
  motor.on("start", function() {
    console.log("start", Date.now());

    // Demonstrate motor stop in 2 seconds
    board.wait(2000, function() {
      motor.stop();
    });
  });

  // "stop" events fire when the motor is started.
  motor.on("stop", function() {
    console.log("stop", Date.now());
  });

  // Motor API

  // start()
  // Start the motor. `isOn` property set to |true|
  motor.start();

});



// var five = require("johnny-five"),
//   board = new five.Board();

// board.on("ready", function() {
//   var motor;
//   /*
//       Motor A
//         pwm: 3
//         dir: 12
//    */


//   motor = new five.Motor({
//     pins: {
//       pwm: 3,
//       dir: 12
//     },
//     invertPWM: true
//   });




//   board.repl.inject({
//     motor: motor
//   });

//   motor.on("start", function() {
//     console.log("start", Date.now());
//   });

//   motor.on("stop", function() {
//     console.log("automated stop on timer", Date.now());
//   });

//   motor.on("forward", function() {
//     console.log("forward", Date.now());

//     // demonstrate switching to reverse after 5 seconds
//     board.wait(5000, function() {
//       motor.reverse(255);
//     });
//   });

//   motor.on("reverse", function() {
//     console.log("reverse", Date.now());

//     // demonstrate stopping after 5 seconds
//     board.wait(5000, function() {
//       motor.stop();
//     });
//   });

//   // set the motor going forward full speed
//   motor.forward(255);
// });