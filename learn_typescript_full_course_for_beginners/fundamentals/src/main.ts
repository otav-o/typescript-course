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
// console.log(foo2.hi());

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

// console.log(vAny.foo());
// console.log(vUnknown.foo());

// --------------------------------------------------------------
// TYPE ASSERTION (convertion)
let s3: string = vUnknown as string;
let pageNumber: string = '1';
// let numericPageNumber: number = pageNumber as number;
let numericPageNumber2: number = pageNumber as unknown as number; // type assertion

// --------------------------------------------------------------
// // TYPESCRIPT AND DOM
// const genericElement = document.querySelector('.foo'); // type: Element. Same properties available to all DOM elements
// console.log('Generic element', (genericElement as any).value); // never do this!

// const specificElement = document.querySelector('.foo') as HTMLInputElement;
// console.log('specificElement', specificElement.value); // HTMLInputElement has value property

// specificElement.addEventListener('Blur', (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log(target.value);
// }); // Event is also the most generic possible in events

// --------------------------------------------------------------
// CLASSES 

class User implements UserInterface3 {
  private firstName: string;
  private lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lasName: string) {
    this.firstName = firstName;
    this.lastName = lasName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

const userObj = new User('Otávio', 'Dioscânio');
console.log(userObj.getFullName()); // everything is public by default
// public, private, protected keywords
// readonly, constructor, static property/method
// extends, implements (very similar to Java)

interface UserInterface3 {
  getFullName(): string;
}

console.log(User.maxAge);

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const admin = new Admin('Name', 'Surname');
console.log(admin.unchangableName);

// --------------------------------------------------------------
// GENERICS
// const addId = <T>(obj: T) => {
const addId = <T extends Object>(obj: T) => { // T restritions
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  }
}

interface IUser {
  name: string;
}

const user4: IUser = {
  name: 'Jack',
};
const result = addId<IUser>(user4); // explicit declarations are better to read
const result2 = addId<string>("foo");
console.log("Result line 191: ", result);

// Generic Interface

interface UserInterface4<T> {
  name: string;
  data: T;
}

const user5: UserInterface4<{meta: string}> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
}

const user6: UserInterface4<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
}

interface UserInterface5<T, R> {
  name: string;
  data: T;
  meta: R;
}

const user7: UserInterface5<{meta: string}, string> = {
  name: "John",
  data: {
    meta: "foo",
  },
  meta: "bar",
}
