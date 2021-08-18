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