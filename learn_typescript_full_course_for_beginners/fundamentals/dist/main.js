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
