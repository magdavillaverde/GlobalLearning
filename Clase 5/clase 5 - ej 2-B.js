const array = [1,2,3,4,5,6,7,8];
console.log(array);

function Deletelast3elem(){

var h=array.length - 3;

if (array.length > 5) {
  array.length = h;
}

console.log(array); 
}


Deletelast3elem();