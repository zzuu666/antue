/**
 * Check if a value in vaildList 
 * @param {String} value 
 * @param {Array} vaildList 
 * @return {Boolean} 
 */
export const oneOf = (value, vaildList) => vaildList.indexOf(value) > -1
