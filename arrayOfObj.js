'use strict';

const peoplesJobs = [
  {
    name: 'michael',
    jobTitle: 'it'
  },
  {
    name: 'mary',
    jobTitle: 'barista',
    boss: 'michael'
  },
  {
    name: 'josh',
    jobTitle: 'saleperson',
    boss: 'michael'
  },
  {
    name: 'aspen',
    jobTitle: 'puppy',
    boss: 'michael'
  }
];

peoplesJobs.forEach(function (person){
  if ('boss' in person == true) {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
  }
});

peoplesJobs.forEach(function (person){
  if ('boss' in person === false) {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
  }
});

//Trying to add an if statement to check for boss to give two different console.logs.  Having trouble combining the .forEach method with ternary or if/else statements