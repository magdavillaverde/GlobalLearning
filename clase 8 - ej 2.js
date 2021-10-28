const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

function OlderProgrammer (){
  const newList1 = list1.map((person =>person.age));

  var max = Math.max.apply(null, newList1);

  for (i = 0; i<=list1.length-1; i=i+1){
    if (list1[i].age === max){
      console.log (list1[i]);
    }
  }
}

OlderProgrammer ();
