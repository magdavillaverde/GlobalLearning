const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

function CreateUserName (){
  for (i=0; i < list1.length; i++){
    var today = new Date();
    var year = today.getFullYear();
    var BirthYear = year - list1[i].age ;
    console.log(list1[i].firstName.toLowerCase() + list1[i].lastName.toLowerCase().charAt(0) + BirthYear);
  }
}

CreateUserName();