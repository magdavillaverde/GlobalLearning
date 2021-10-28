const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},  
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
  var n=0;
  
  for (i=0; i<=list.length-1; i++){
    if (list[i].continent == 'Europe'){
      n = n + 1;
      //console.log(list[i].firstName + " de Europa asistió al congreso")
    } 
   }
  console.log ("El número de asistentes de Europa es: " + n);