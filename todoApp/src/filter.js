const persons = [
  { name: "manoj", age: 25 },
  { name: "yashwant", age: 22 },
  { name: "abhishek", age: 23 },
  { name: "kishen", age: 19 },
];

const validPersonsList = persons
  .filter((person) => person.age >= 20)
  .map((person) => person.name)
  .sort();
console.log(validPersonsList);
