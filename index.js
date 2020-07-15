'use strict';


/**17で割り切れるかの判別
 *@param {number} num 
 */
function isMultipleOfSeventeen (num){
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen
};