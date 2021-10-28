
//esta opción genera un nuevo arreglo
var array = [9,5,10,2,24,-1];
console.log (array);
var newArray = [];
newArray.length = array.length-1;

function MaxProd(array){
  for (i=0; i<array.length-1; i++){
   prod = array[i]*array[i+1];
   newArray[i] = prod;
   console.log (prod);
  }
  console.log(newArray);
  return max = Math.max(...newArray);
}

MaxProd(array);


//opción de multiplicar los dos mayores valores de un arreglo
//var array = [9,5,10,2,24,-1];
//console.log (array);

//function MaxProd(array){
//  const [max0, max1] = array.sort((a, b) => b-a);
//    console.log ([max0, max1]);
//return max0 * max1;
//}

//MaxProd(array);