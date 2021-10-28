const array = [1, 1, 1, 1, 1, 5, 1, 1];

function FindUnique(){
  return array.find(item => array.indexOf(item) == array.lastIndexOf(item));
   }

console.log(FindUnique()); 