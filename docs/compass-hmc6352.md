<!--remove-start-->

# Compass - HMC6352

<!--remove-end-->






##### Breadboard for "Compass - HMC6352"



![docs/breadboard/compass-hmc6352.png](breadboard/compass-hmc6352.png)<br>

Fritzing diagram: [docs/breadboard/compass-hmc6352.fzz](breadboard/compass-hmc6352.fzz)

&nbsp;




Run this example from the command line with:
```bash
node eg/compass-hmc6352.js
```


```javascript
const {Board, Compass} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const compass = new Compass({
    controller: "HMC6352"
  });

  compass.on("change", () => {
    const {bearing, heading} = compass;
    console.log("Compass:");
    console.log("  bearing     : ", bearing);
    console.log("  heading     : ", heading);
    console.log("--------------------------------------");
  });
});

```








&nbsp;

<!--remove-start-->

## License
Copyright (c) 2012-2014 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license.
Copyright (c) 2015-2019 The Johnny-Five Contributors
Licensed under the MIT license.

<!--remove-end-->
