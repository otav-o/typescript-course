var a = "1";
console.log('aaa', a);
// let and const become var in js because transpiler generates ES3 code.
// always specify every type!
var hello = "world"; // type "world"
// hello = "another world"; // in TS, constants are really constants and can't be changed later
var hello2 = "world"; // type string
// hello2 = true; // we can change the value only to the same type
// --------------------------------------------------------------
var hello3 = "world"; // same like previous, but explicit
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName('Otavio', 'Dioscanio'));
var user = {
    name: "Otávio",
    age: 20
};
var user2 = {
    name: "Rafael",
    age: 10
};
var user3 = {
    name: "Jack",
    age: 30,
    getMessage: function () {
        return "Hello " + name;
    }
};
console.log(user3.getMessage());
var popularTags = ['dragon', 'coffee']; // could be :string[], but it is clearer to understand using alias
var dragonsTag = "Hi";
var username = "alex";
var pageName = "1"; // union: operator to combine types. Means OR
var errorMessage = null;
var newUser = null;
var someProp; // bad code
// --------------------------------------------------------------
// VOID: only for functions
var doSomethingNew = function () {
    console.log('Hi');
};
// void is a set of undefined and null
var foo = null; // nosense
foo = undefined;
// --------------------------------------------------------------
// ANY: turns off typescript type check
// Should be avoided
var foo2 = "foo";
console.log(foo2.hi());
// --------------------------------------------------------------
// NEVER: function that does not reach its end
var doSomething2 = function () {
    console.log("Hi hi");
    throw "never";
};
// --------------------------------------------------------------
// UNKNOWN: similar to any
var vAny = 10;
var vUnknown = 10;
var s1 = vAny; // any: typescript doesnt care and you can assign any value
// let s2: string = vUnknown; // type unknown is not assignable to type string (without as);
// We can't assign unknown to another type (but any so).
console.log(vAny.foo());
// console.log(vUnknown.foo());
// --------------------------------------------------------------
// TYPE ASSERTION (convertion)
var s3 = vUnknown;
var pageNumber = '1';
// let numericPageNumber: number = pageNumber as number;
var numericPageNumber2 = pageNumber; // type assertion
// --------------------------------------------------------------
// TYPESCRIPT AND DOM
var genericElement = document.querySelector('.foo'); // type: Element. Same properties available to all DOM elements
console.log('Generic element', genericElement.value); // never do this!
var specificElement = document.querySelector('.foo');
console.log('specificElement', specificElement.value); // HTMLInputElement has value property
specificElement.addEventListener('Blur', function (event) {
    var target = event.target;
    console.log(target.value);
}); // Event is also the most generic possible in events
