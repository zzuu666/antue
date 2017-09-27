/**
 * Check if a value in validList 
 * @param {String} value 
 * @param {Array} validList 
 * @return {Boolean} 
 */
export const oneOf = (value, validList) => validList.indexOf(value) > -1
