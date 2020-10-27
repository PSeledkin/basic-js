const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  try {
    return arr.filter(element => typeof(element) === 'string').map(element => element.replace(/\s/g, '')[0].toUpperCase()).sort().join('') || false; }
    catch {
      return false;
    }
};
