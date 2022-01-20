const prompt = require("prompt");

prompt.start();
console.log("please enter your data");
prompt.get(["data"], function getPowerConsumption(err, result) {
  if (err) {
    return err;
  }

  const Data = result.data.split(" ");

  let oneCounter = 0;
  let zeroCounter = 0;
  let gammaRate = "";
  let epsilonRate = "";

  for (let i = 0; i < Data[1].length; ) {
    for (let j = 0; j < Data.length; j++) {
      if (Data[j][i] === "0") {
        zeroCounter += 1;
      } else {
        oneCounter += 1;
      }
    }

    //** finding the most common bit */
    if (oneCounter > zeroCounter) {
      gammaRate += "1";
      epsilonRate += "0";
    } else {
      gammaRate += "0";
      epsilonRate += "1";
    }
    //** Counter back to initialstate */
    oneCounter = 0;
    zeroCounter = 0;
    i++;
  }

  //**Calculating the power consumption of the submarine
  //   using gamma&epsilon Rates in decimal */

  var power = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
  console.log("final result is", power);

  return power;
});
