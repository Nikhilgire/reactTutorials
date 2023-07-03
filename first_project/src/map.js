const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
  { name: "yashwant", age: 19 },
  { name: "kishen", age: 22 },
  { name: "vishal", age: 35 },
];

// 1.
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr[i] = arr[i] + 5;
// }

// arr.forEach((value, index) => {
//   newArr[index] = value + 5;
// });

const newArr = arr.map((ele) => ele + 5);

const updatedPeople = people.map((person) => ({
  ...person,
  age: person.age + 1,
}));
console.log(updatedPeople);

// console.log(newArr);
