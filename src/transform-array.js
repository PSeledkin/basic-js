const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('ERROR!')
  }
  transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (arr[i + 1] !== undefined) {
          transformArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev" :
      if (arr[i - 1] !== undefined) {
        if (arr[i-2] === '--discard-next') {
          continue;
        }
        transformArr.push(arr[i - 1]);
      }
      break;
      case '--discard-next' : if (arr[i + 1] !== undefined) {
        i +=1;
      }
      break;
      case '--discard-prev' : if (arr[i - 1] !== undefined) {
        if (arr[i-2] === '--discard-next') {
          continue;
        }
        transformArr.pop();
      }
      break;
      default:
        transformArr.push(arr[i]);
    }
  }
  return transformArr;
};
