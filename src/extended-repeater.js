const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  outStr = ""+str;
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
    if (!options.additionRepeatTimes) {
      options.additionRepeatTimes = 1;
    }
    outAddition = "";
    if (!options.additionSeparator) {
      options.additionSeparator = "|";
    }
    i = 0;
    do {
      i++;
      outAddition += options.addition;
      if (options.additionRepeatTimes > 1 && i < options.additionRepeatTimes ) {
        outAddition += options.additionSeparator;
      }
    } while (i < options.additionRepeatTimes);
    outStr += outAddition;
  }
   outStr +=options.separator;

  return outStr.repeat(options.repeatTimes).slice(0, -options.separator.length);
};
