var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Initialize a Servo collection
  var servos = new five.Servos([9, 10]);


  servos.center();


  // Inject the `servo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  this.repl.inject({
    servos: servos
  });
///
// var five = require("johnny-five"),
//   board = new five.Board();
// 
// board.on("ready", function() {
//   var servo = new five.Servo({
//     pin: 10,
//     startAt: 90
//   });
//   var lap = 0;
// 
//   servo.sweep().on("sweep:full", function() {
//     console.log("lap", ++lap);
// 
//     if (lap === 1) {
//       this.sweep({
//         range: [40, 140],
//         step: 10
//       });
//     }
// 
//     if (lap === 2) {
//       this.sweep({
//         range: [60, 120],
//         step: 5
//       });
//     }
// 
//     if (lap === 3) {
//       this.sweep({
//         range: [80, 100],
//         step: 1
//       });
//     }
// 
//     if (lap === 5) {
//       process.exit(0);
//     }
//   });
// });  

///
  // min()
  //
  // set all servos to the minimum degrees
  // defaults to 0
  //
  // eg. servos.min();

  // max()
  //
  // set all servos to the maximum degrees
  // defaults to 180
  //
  // eg. servos.max();

  // to( deg )
  //
  // set all servos to deg
  //
  // eg. servos.to( deg );

  // step( deg )
  //
  // step all servos by deg
  //
  // eg. servos.step( -20 );

  // stop()
  //
  // stop all servos
  //
  // eg. servos.stop();

  // each( callbackFn )
  //
  // Execute callbackFn for each active servo instance
  //
  // eg.
  // servos.each(function( servo, index ) {
  //
  //  `this` refers to the current servo instance
  //
  // });

});
// var five = require("johnny-five"),
//     board, slider, tilt, scalingRange;
// 
// board = five.Board({
//   debug: true
// });
// 
// board.on("ready", function() {
// 
//   scalingRange = [ 0, 170 ];
// 
//   slider = five.Sensor({
//     pin: "A0",
//     freq: 50
//   });
// 
//   tilt = five.Servo({
//     pin: 9,
//     range: scalingRange
//   });
// 
//   slider.scale( scalingRange ).on("slide", function( err, value ) {
// 
//     // The slider's value will be scaled to match the tilt servo range
// 
//     tilt.move( Math.floor(this.value) );
// 
//   });
// });