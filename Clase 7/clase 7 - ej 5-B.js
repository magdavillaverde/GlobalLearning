const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];
  
  function ProgrammerLanguage (language){
   const found = list.find(person => person.language == language);   
   if (found){
     console.log ("true");
   } else {
     console.log ("false");
   }
  }
  
  ProgrammerLanguage('Ruby');
  
  