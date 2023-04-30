const convertToCelsius = function(far) {
  let num = (far - 32) * (5/9);
  let result = Math.round(num*10)/10;
  return result;
};

const convertToFahrenheit = function(cel) {
  let num = (cel * 2) + 30;
  let result = Math.round(num*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
