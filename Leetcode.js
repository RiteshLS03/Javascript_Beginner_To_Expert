/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  let key = [];
  console.log(typeof obj);
  if (typeof obj == "object") {
    key = Object.keys(obj);
  }
  return key.length == 0 ? true : false;
};

isEmpty({ a: "b" });
