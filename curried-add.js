/* 
   Write a function called curriedAdd. If you give this function a number, it returns a new function to you. 
   If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far. 
*/


function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNext(value) {
        if (value === undefined) return total;
        total += value;
        return addNext;
    };
}

module.exports = { curriedAdd };
