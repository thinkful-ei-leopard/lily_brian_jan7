'use strict';

const object = {
  foo: 1,
  bar: "think",
  fum: 17,
  quux: "age",
  spam: "style"
};

for (const key in object){
  const value = object[key];
  console.log(key , value);
}