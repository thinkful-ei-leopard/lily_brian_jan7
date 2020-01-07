'use strict';

const peoplesJobs = [
  {
    name: 'michael',
    jobTitle: 'it'
  },
  {
    name: 'mary',
    jobTitle: 'barista'
  },
  {
    name: 'josh',
    jobTitle: 'saleperson'
  },
  {
    name: 'aspen',
    jobTitle: 'puppy'
  }
];

peoplesJobs.forEach (person => console.log(person.name, person.jobTitle));