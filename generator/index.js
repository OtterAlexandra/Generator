import lodash from "lodash";

const obj = { a: 1, b: 2, c: 3 };

lodash.forEach(obj, (value, key) => {
  console.log(key, value);
});
