var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodem1411' }
  },

  devices: {
    motor: { driver: 'motor', pin: 4 }
  },

  work: function(my) {
    my.motor.speed(100);

    after((5).seconds(), function() {
      my.motor.stop();
    });
  }
}).start();