const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !=='string' || Number.isNaN(parseInt(sampleActivity, 10)) || parseInt(sampleActivity, 10) <=0 || Number.isInteger(parseInt(sampleActivity, 10)) || parseInt(sampleActivity, 10) > MODERN_ACTIVITY){
    return false;
  }
return Math.ceil((Math.log(MODERN_ACTIVITY / parseInt(sampleActivity, 10))) / (0.693 / HALF_LIFE_PERIOD));
};
