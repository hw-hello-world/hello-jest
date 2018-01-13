const fp = require('lodash/fp');

const nToBools = fp.curry((len, n) => {
  return fp.range(len-1, -1, -1)
    .map((i) => (n & Math.pow(2, i)) ? true : false);
});

const genTable = (keys = []) => {
  const l = keys.length;

  if (l <= 0) {
    return [];
  }

  const xs = fp.range(0, Math.pow(2, l))
        .map(nToBools(l))
        .map(fp.zipObject(keys))
  ;
  return xs;
};


module.exports = genTable;
