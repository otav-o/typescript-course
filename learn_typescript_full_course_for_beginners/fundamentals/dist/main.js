var a = "1";
console.log('aaa', a);
// let and const become var in js because transpiler generates ES3 code.
// always specify every type!
var hello = "world"; // type "world"
// hello = "another world"; // in TS, constants are really constants and can't be changed later
var hello2 = "world"; // type string
// hello2 = true; // we can change the value only to the same type
var hello3 = "world"; // same like previous, but explicit
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName('Otavio', 'Dioscanio'));
