const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Pyshon' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Python' } 
  ];
  
  const newList = list.map((person =>person.language));
  var n=0;
  for (i=0; i < newList.length; i++){
    if (newList[i] == newList[i+1]){
      n = n + 1;
    } 
  } 
  let quest;
  quest = n > 1 ? "true" : "false";
  
  
  