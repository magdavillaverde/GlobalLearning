const array = [];
function arraylength(num){
  console.log(num);
  for (i=0;i<=num;i++){
   array[i]=i;
  }
  array.length = num;
  console.log(array);
}

arraylength(100);