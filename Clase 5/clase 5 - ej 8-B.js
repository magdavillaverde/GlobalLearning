const array = ["sheep","sheep","sheep","sheep","sheep","wolf","sheep","sheep"];


function warnTheSheep(array){
  for (i=1; i<array.length; i++){
    const wolf = array.find(item => array.indexOf(item) == array.lastIndexOf(item));
        
    if (wolf === "wolf" & array[i+1] === "sheep"){
      console.log("Hey! Oveja numero " + i + "El lobo esta cerca!");
    } else
      console.log("oveja no está en peligro");
    }
}
console.log(warnTheSheep(array));