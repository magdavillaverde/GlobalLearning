function Deletelast3elem(){
    var array = [1,2,3,4,5,6,7];
    
    console.log(array);
    
    if (array.length > 5) {
    for(i=0; i<=3; i++){
    const newArray = array.pop();
    }
    console.log(array);
    }
    }
    
    Deletelast3elem([1,2,3,4,5,6,7]);