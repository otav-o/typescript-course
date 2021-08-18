const a = "1";
console.log('aaa', a);

// let and const become var in js because transpiler generates ES3 code.
// always specify every type!

const hello = "world"; // type "world"
// hello = "another world"; // in TS, constants are really constants and can't be changed later

let hello2 = "world"; // type string
// hello2 = true; // we can change the value only to the same type

// --------------------------------------------------------------

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

interface UserInterface { // or IUser (avoids name collision with class User)
  name: String,
  age: number,
  email?: String, // non-mandatory property
  getMessage(): string,
}

const user3: UserInterface = {
  name: "Jack",
  age: 30,
  getMessage() {
    return "Hello " + name;
  }
}

console.log(user3.getMessage());

// --------------------------------------------------------------

type ID = string; // alias
type PopularTag = string;
type MaybePopularTag = PopularTag | null; // we do not have to write this union command everywhere

interface UserInterface2 {
  id: ID; // same as id: string
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee']; // could be :string[], but it is clearer to understand using alias

const dragonsTag: MaybePopularTag = "Hi";

let username: string = "alex";

let pageName: string | number = "1"; // union: operator to combine types. Means OR

let errorMessage:  string | null = null;

let newUser: UserInterface2 | null = null;

let someProp: string | number | null | undefined | string[] | object; // bad code

// --------------------------------------------------------------
// VOID: only for functions
const doSomethingNew = (): void => {
  console.log('Hi');
}

// void is a set of undefined and null
let foo: void = null; // nosense
foo = undefined;

// --------------------------------------------------------------
// ANY: turns off typescript type check
// Should be avoided
let foo2: any = "foo";
console.log(foo2.hi());

// --------------------------------------------------------------
// NEVER: function that does not reach its end
const doSomething2 = (): never => {
  console.log("Hi hi");
  throw "never";
}

// --------------------------------------------------------------
// UNKNOWN: similar to any
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny; // any: typescript doesnt care and you can assign any value
// let s2: string = vUnknown; // type unknown is not assignable to type string (without as);
// We can't assign unknown to another type (but any so).

console.log(vAny.foo());
// console.log(vUnknown.foo());

// --------------------------------------------------------------
// TYPE ASSERTION (convertion)
let s3: string = vUnknown as string;
let pageNumber: string = '1';
// let numericPageNumber: number = pageNumber as number;
let numericPageNumber2: number = pageNumber as unknown as number; // type assertion
