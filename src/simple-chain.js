const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = "( )") {
    value += "";
    defLink = `( ${value} )`;
    this.chain.push(defLink);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("ERROR!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = chainMaker;
