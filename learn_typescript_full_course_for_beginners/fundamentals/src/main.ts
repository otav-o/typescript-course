const a = "1";
console.log('aaa', a);

// let and const become var in js because transpiler generates ES3 code.
// always specify every type!

const hello = "world"; // type "world"
// hello = "another world"; // in TS, constants are really constants and can't be changed later

let hello2 = "world"; // type string
// hello2 = true; // we can change the value only to the same type

let hello3: string = "world"; // same like previous, but explicit

const getFullName = (name: String, surname: String): String => {
  return name + " " + surname;
};

console.log(getFullName('Otavio', 'Dioscanio'));

const user: {name: string, age: number} = {
  name: "Otávio",
  age: 20,
}

const user2: {name: string, age: number} = {
  name: "Rafael",
  age: 10,
}

interface User {
  name: String,
  age: number,
  email?: String, // non-mandatory property
}

const user3: User = {
  name: "Jack",
  age: 30,
}

console.log(user3.email);
