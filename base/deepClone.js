const _ = require("lodash");

function isObject(target) {
  const type = typeof target;
  return type === "object" && type !== null;
}
function isPlainObject(target) {
  if (!isObject(target)) {
    return false;
  }
  let prototype = Object.getPrototypeOf(target);
  return (
    Object.prototype.toString.call(target) === "[object Object]" &&
    Object.getPrototypeOf(prototype) === null
  );
}
function cloneDeep(originObject) {
  const map = new WeakMap();
  const cloneHandler = (x) => {
    const isNeedCloneType = Array.isArray(x) || isPlainObject(x);
    if (!isNeedCloneType) {
      return x;
    }
    if(map.has(x)){
      return map.get(x)
    }
    const newValue = Array.isArray(x) ? [] : {};
    map.set(x,x)
    for (const k in x) {
      const v = x[k];
      if (Object.hasOwnProperty.call(x, k)) {
        newValue[k] = cloneHandler(v);
      }
    }
    return newValue;
  };
  return cloneHandler(originObject)
}

const target = {
  field1: 1,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
};
target.copy = target;
console.log(target)
console.log(cloneDeep(target));
