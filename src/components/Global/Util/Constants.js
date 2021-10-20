import { isArray, isEqual, isObject, transform } from 'lodash';

export const devices = {
  mobile: 360,
  tablet: 767,
  desktop: 1200
};

export const antdNumCheck = (e) => {
  if (
    !e.key.match(/^\d+$/) &&
    e.which !== 8 &&
    e.which !== 46 &&
    e.which !== 37 &&
    e.which !== 39 &&
    e.which !== 190 &&
    e.which !== 110 &&
    e.which !== 9
  ) {
    e.preventDefault();
  }
};

export const formatCurrency = (amount) =>
  amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
  });

/**
 * Find difference between two objects
 * @param  {object} origObj - Source object to compare newObj against
 * @param  {object} newObj  - New object with potential changes
 * @return {object} differences
 */
export const difference = (origObj, newObj) => {
  function changes(newObj, origObj) {
    let arrayIndexCounter = 0;
    return transform(newObj, function (result, value, key) {
      if (!isEqual(value, origObj[key])) {
        let resultKey = isArray(origObj) ? arrayIndexCounter++ : key;
        result[resultKey] =
          isObject(value) && isObject(origObj[key])
            ? changes(value, origObj[key])
            : value;
      }
    });
  }
  return changes(newObj, origObj);
};
