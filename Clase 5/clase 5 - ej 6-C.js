const array = [7, 4, 2, 3];  

function minSum(array){
var min1 = Math.min(...array);

let i = array.indexOf(min1);

let remov = array.splice(i, 1);

let min2 = Math.min(...array);

var minSum = min1 + min2;

return minSum;
}

minSum(array);