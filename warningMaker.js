function warningMaker(obstacle) {
  return function(number, location) { // set parameters
    console.log("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " + location + "!");
          // finish the warning message here
  };
}

var sign = warningMaker("Skillful Children");
sign(33, "Union Station");