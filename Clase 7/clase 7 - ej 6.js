const list = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: "Python" }
  ];
  
  log = "JavaScript";
  
  function firstPr(item){
    return item.language == log;
  }
  
  const found = list.find(firstPr)
  
  console.log(found.firstName + " from "+ found.country + " was the first " + found.language + " developer in the conference");
  
  console.log ("%s from %s was the girst %s developer in the conference", found.firstName, found.country, found.language);
  