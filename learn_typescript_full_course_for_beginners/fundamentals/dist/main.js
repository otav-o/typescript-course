var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// console.log(foo2.hi());
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
// console.log(vAny.foo());
// console.log(vUnknown.foo());
// --------------------------------------------------------------
// TYPE ASSERTION (convertion)
var s3 = vUnknown;
var pageNumber = '1';
// let numericPageNumber: number = pageNumber as number;
var numericPageNumber2 = pageNumber; // type assertion
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
var User = /** @class */ (function () {
    function User(firstName, lasName) {
        this.firstName = firstName;
        this.lastName = lasName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var userObj = new User('Otávio', 'Dioscânio');
console.log(userObj.getFullName()); // everything is public by default
console.log(User.maxAge);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('Name', 'Surname');
console.log(admin.unchangableName);
// --------------------------------------------------------------
// GENERICS
// const addId = <T>(obj: T) => {
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user4 = {
    name: 'Jack'
};
var result = addId(user4); // explicit declarations are better to read
var result2 = addId("foo");
console.log("Result line 191: ", result);
var user5 = {
    name: "Jack",
    data: {
        meta: "foo"
    }
};
var user6 = {
    name: "John",
    data: ["foo", "bar", "baz"]
};
var user7 = {
    name: "John",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
// --------------------------------------------------------------
// ENUMS
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.InProgress); // values are increased from zero when there is no assignment
// The main benefit is using as data type, as well as enum
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
