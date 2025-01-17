const moment = require("moment");
const {Board, Led} = require("../lib/johnny-five");
const Galileo = require("galileo-io");

const board = new Board({
  io: new Galileo()
});

board.on("ready", () => {
  var digits = new Led.Digits({
    pins: {
      data: 2,
      cs: 3,
      clock: 4,
    }
  });

  setInterval(() => digits.print(time()), 1000);
});

function time() {
  /*
    The desired display looks something
    like these examples:

      02.25.54 P
      12.30.00 A

    moment.js doesn't have an option for
    a single letter meridiem (nor should it,
    that would be silly), so we need to
    manipulate the string a bit to so that
    it the string matches our desired display.
   */
  return moment().format("hh.mm.ssA")
    .replace(/([AP])M/, " $1");
}
