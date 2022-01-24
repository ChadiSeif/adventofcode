const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`enter your data `, function LifeSupportRating(data) {
  var Data = data.split(" ");
  zeroCounter = 0;
  oneCounter = 0;

  let arro2 = [...Data];
  let arrco2 = [...Data];

  let i = 0;
  const getMostCommun = (array, i) => {
    for (let j = 0; j < array.length; j++) {
      if (Data[j][i] === "0") {
        zeroCounter += 1;
      } else {
        oneCounter += 1;
      }
    }
    if (oneCounter > zeroCounter || oneCounter == zeroCounter) {
      return 1;
    } else {
      return 0;
    }
    zeroCounter = 0;
    oneCounter = 0;
  };

  function Rating(arr, key) {
    let i = 0;
    while (arr.length > 1) {
      let mostcommun = getMostCommun(arr, i);
      arr = arr.filter((bit) =>
        key == "o2" ? bit[i] == mostcommun : bit[i] == 1 - mostcommun
      );
      i++;
    }
    // console.log(parseInt(Number(arr[0]), 2));
    return parseInt(Number(arr[0]), 2);
  }

  let o2 = Rating(arro2, "o2");
  let co2 = Rating(arrco2, "co2");
  console.log(o2 * co2);
  return;

  //**Calculating the power consumption of the submarine
  readline.close();
});
