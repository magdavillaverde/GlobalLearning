const array = ["sheep","shepp","sheep","sheep","sheep","wolf","sheep","sheep"];

function WarnTheSheep(array){
  const wolfIndex = array.indexOf("wolf");
  var sheep = array [wolfIndex+1];
  if (sheep == "sheep"){
    var sheepIndex = array.length - wolfIndex - 1;
    //console.log ('Hey! Oveja número ' + sheepIndex + ' el lobo está cerca!')
    console.log ('Hey! Oveja número ' + sheepIndex + ' el lobo está cerca!')
  } else 
    console.log ('No sigas comiendo ovejas!');
}

WarnTheSheep(array);