const list = [
  { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: "Python" }
];

function firstXDeveloper (language){
    const found = list.find(findfirst => findfirst.language == language);
    if (found){
      console.log(found.firstName + " from "+ found.country + " was the first " + found.language + " developer in the conference");
    } else {
      console.log ("There are no " + language + " developers in the conference");
    }
}

firstXDeveloper ("Python");


 