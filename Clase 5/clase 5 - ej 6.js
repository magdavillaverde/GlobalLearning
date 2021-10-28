const array = [];

function MinSum(array){
   console.log(array);
  //const [min0, min1] = array.sort((a, b) => a-b).slice(0,2);
  const [min0, min1] = array.sort((a, b) => a-b);
  console.log([min0, min1]);
  return sum = min0+min1;
}

MinSum([7, 4, 2, 3]);