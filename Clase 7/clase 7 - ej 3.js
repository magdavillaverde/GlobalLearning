const list1 = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function AddGreeting (list1){
  for (i=0; i<=list1.length-1; i++){
    list1[i].greeting = "Hi "+ list1[i].firstName + ", what do you like the most about " + list1[i].language+"?";
    console.log(list1[i]);
  }
}

AddGreeting(list1);

