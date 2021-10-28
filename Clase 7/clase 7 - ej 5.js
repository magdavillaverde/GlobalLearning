const list = [
  { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

var n = 0;

function ProgrammerLanguage (item){
  for (i=0; i<=list.length-1; i++){
    if (list[i].language == item){
       console.log('true');
    } else {
      console.log ('false'); 
    }
  }
}

ProgrammerLanguage('JavaScript');

