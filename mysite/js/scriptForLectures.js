var message = "in global";
console.log("global:message = " + message); 

var a = function() {
	var message = "inside a";
	console.log("a:message = " + message);
	b();
}

function b() {
	console.log("b:message = " + message);
}

a();

var x;
console.log(x);

if (x == undefined) {
	console.log("x is undefined");
}

x = 5;
if (x == undefined) {
	console.log("x id undefined");
}
else {
	console.log("x has been defined");
}

//******String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");

//******Regular math operators
console.log((5 + 7) / 3);
console.log(undefined / 3);
function test1 (a) {
	console.log(a / 5);
}
test1();
//******Equality
var x = 4, y = 4;
if (x == y){
	console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y){
	console.log("x='4' is equal to y=4");
}

//******Strict equality
if (x === y) {
	console.log("Strict: x='4' is equal to y=4");
}
else {
	console.log("Strict: x='4' is NOT equal to y=4");	
}

//****** If statement (all false)
if ( false || null || undefined || "" || 0 || NaN ) {
	console.log("This line won't ever execute");
}
else {
	console.log("All false");
}

//****** If statement (all true)
if (true && "hello" && 1 && -1 && "false"){
	console.log("All true");
}

//***** Best practice for {} style
function c()
{
	return 
	{
		name: "Yaalov"
	};
}
function d() {
	return {
		name: "Yaalov"
	};
}

console.log(c());
console.log(d());

//For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

//Default values
function orderChickenWith(sideDish) {
	// if (sideDish === undefined) {
	// 	sideDish = "potatoes";
	// }
	sideDish = sideDish || "potatoes";
	console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();

var x = 10;
if ( (null) || (console.log("Hopla")) || x > 5 ) {
  console.log("Hello");
}

// Object creation
var company = new Object();
console.log(company);
company.name = "Facebook";
console.log(company);
// company.ceo.firstName = "Mark"; 	//company.ceo is not an Object...
// console.log(company);			//Undefined
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is " + company.ceo.firstName);

console.log(company["name"]);
// the dot notation will only work with whatever is a valid JavaScript identifier, or valid JavaScript, either function name, or valid JavaScript variable name
// company.$stock of company = 110; Uncaught SyntaxError: Unexpected identifier
// but
company["stock of company"] = 110;
console.log(company);
console.log("Stock ptice is: " + company["stock of company"]);

var agePropName = "age of company";
company[agePropName] = 10;
console.log("The age of the Company is: " + company[agePropName]);

// Better way: object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	stock: 110,
	"age of company": 10
};
console.log(facebook);



// Functions are First-Class Data Types

// whatever you could do with the variable or with an object you could 
// also do with the function. You could 
// pass that around, 
// assign it to a variable, 
// pass it as an argument to another function, 
// return it as a return result from a function.

// Functions ARE regular objects


function multiply(x, y) {			// x, y - ARGUMENTS
	return x * y;
}
console.log(multiply(4, 7));
// now we could set a property on the multiply function.
// Let's set a property called multiply.version 
// and let's set it to version V.1.0.0.
multiply.version = "v.1.0.0";		// .version = "v.1.0.0" - PROPERTY
console.log(multiply);
// We're not actually calling the function. If we call the function, 
// we would have to put the parenthesis after it. 
// But we actually just want to output the value of the function. 

// And the value of function is the function code itself. 
// So the reason that's happening is because every object has this 
// inherent method or inherent function to it that's called 
// toString 
console.log(multiply.toString());
console.log(multiply.version);		// Function as an OBJECT




// Function factory
function makeMultiplier(multiplier) {
// We're going to do is we're going to return a multiplier function 
// out of this function.
	var myFunc = function (x) {
		return multiplier * x;
	};
// now we need to return this function as the return result 
// of the function makeMultiplier
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
// multiplyBy3, is a reference to a function that we made inside this function
console.log(multiplyBy3(3));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// Passing functions as arguments
function doOperationOn(x, operation) {
// In this case what we want to do is we want to actually 
// execute whatever function you pass to us on the value x. 	
	return operation(x);
}

var result = doOperationOn (5, multiplyBy3);
// Now notice we're not passing multiplyBy3(). 
// That would actually execute the function multiplyBy3. 
// We just want to pass a reference to that function, multiplyBy3.
console.log(result);
result = doOperationOn(100, doubleAll);
// We're having a doubleAll as a reference to our function doubleAll 
// that we created right here. And we're passing it into our 
// doOperationOn as a reference to that function. 
// And once we get it as a reference we could go ahead 
// and put parens around it and pass it to x that we're passing though. 
// So they do operation on and then we'll execute that function, 
// return the result, and store it inside the result variable. 
console.log(result);

// pass Functions around and treat them as objects, 
// pass Functions as arguments, 
// return Functions as a result of a function execution, 
// set properties on Functions just like on regular objects. 

console.log("COPY BY REFERENCE VS BY VALUE");

console.log("Copy by Value");
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b unpdate:");
console.log("a: " + a);
console.log("b: " + b);

console.log("Copy by Reference");
a = { x:7 };
b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x unpdate:");
console.log(a);
console.log(b);

console.log("PASS BY REFERENCE VS BY VALUE");

function changePrimitive(primValue) {
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(primValue);

	primValue = 5;
	console.log("after:");
	console.log(primValue);
}
//we'll say the value = 7
var value = 7;
//we'll pass it inside that changePrimitive function. 
changePrimitive(value); // primValue = value
//And notice that when we pass value inside the changePrimitive function, 
//what is really going on is that the value 7 is being copied 
//and equal to primValue. 
console.log("after changePrimitive, orig value");
console.log(value);

function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}
value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value");
console.log(value);


// Lecture 48: Function Constructors, prototype and 'this' Keyword

function test() {
	//console.log("Hello Courstra!");
	console.log(this);
	this.myName = "Milana";
}
test();
console.log(window.myName);
//Function constructors
function Circle (radius) {
	console.log(this);
	this.radius = radius;

	this.getArea =
		function () {
			return Math.PI * Math.pow(this.radius, 2)
		};
}

var myCircle = new Circle(10);// equivalent to new Object();
console.log(myCircle);
//we can't return anything from the function constructor
//it has to remain without a return value.
 
 //Now, what would be an object without some methods? 
 //And methods in JavaScript are just functions 
 //that are set on properties of objects.
 console.log(myCircle.getArea());

//Prototype

function Circle2 (radius) {
	this.raduis = radius;
}
Circle2.prototype.getArea = 
	function () {
		return Math.PI * Math.pow(this.radius, 2);
	}

var myCircle2 = new Circle2(10);
console.log(myCircle2);

var myOtherCircle = new Circle2(20);
console.log(myOtherCircle);

// 49. Object literals and "this"

var literalCircle = {
	radius: 10,

	getArea: function () {
		console.log(this);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());

var literalCircle2 = {
	radius: 10,

	getArea: function () {
		// var self = this;
		console.log(this);

		var increaseRadius = function () {
			// self.radius = 20;
			this.radius = 30; // window.radius: 30
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle2.getArea());

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Buddy", "Max");
max.bark();

//Lecture 50: Arrays

var array = new Array();
array[0] = "Mila";
array[1] = "2";
array[2] = function (name) {
	console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2]();
array[2]("Mila");
array[2](array[0]);
console.log(array[3].course);

//short hand array creation
var names = ["Mila", "Vadim", "Milana", "Moana", "Arabella"];
console.log(names);

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}

names[100] = "Viktor";
for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}
// there's a special for loop that you could use 
// to traverse the properties of an object.
var names2 = ["Do", "Re", "Mi"];

var myObj = {
	name: "Mila",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}
// we know that in JavaScript arrays are just objects 
// and the indices are just property names.

for (var name in names2) {
	console.log("Hello - " + names2[name]);
}
// So every time through the loop this name will be equal 
// a different property of their rate. 
// So the first time it will be equal zero,
//  because that's a property name of the array. 
//  The second time it will equal one 
//  and the third time it will be equal two. 

// The problem with this for loop is that arrays are just objects 
// in JavaScript, this for loop will loop over properties, 
// even over properties that really have nothing to do 
// with the core data that we want to loop over.

names2.greeting = "Hi";
for (var name in names2) {
	console.log("Hello - " + names2[name]);
}

var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);

// Closures
function makeMultiplier (multiplier) {
	// var multiplier = 2;
	function b() {
		console.log("Multiplier is: " + multiplier);
	}
	b();

	return (
		function (x) {
			return multiplier * x;
		}
	);
}
var doubleAll2 = makeMultiplier(2);
console.log(doubleAll2);
// when we execute doubleAll and pass it a 10 this function is 
// now finally being executed:
console.log(doubleAll2(10));// its own execution environment
							// its own outer variable environment

// The problem is that our return statement doesn't really create its 
// own execution environment, because this is not a function execution. 
// This is just a function value. This is the object, a function that 
// gets returned back to the caller of the makeMultiplier function.

// So if this is not an execution of the function that means: 
// it doesn't get its own 'this' variable; 
// it doesn't get an outer reference;
// it simply gets returned to the caller (makeMultiplier). 

// So now, when it gets returned to the caller in this line right 
// here (var doubleAll2 = makeMultiplier(2);), so this 
// variable (var doubleAll2) is now equal to this function 
// function (x) {
// 			return multiplier * x;
// 		}
// and in the next line will
// be actually execute doubleAll and pass it a 10 this function is 
// now finally being executed, which means it is now getting it's own 
// execution environment and it is now in this line right here. 

// It gets its own execution environment, and it gets its own outer 
// variable environment, and so on.

// So how then can it possibly know what the multiplier variable is?

// Because at the time that this is 
// executing the makeMultiplier function is no longer in the execution
// stack. It's done. It returned whatever we needed to return, 
// and is no longer functioning. It's done. It's part of the execution 
// stack. 

// Well, the reason this still works is because of JavaScript 
// closures. Since a function like this returned from inside of this 
// function JavaScript preserves its outer lexical environment memory 
// space for this function, so this function can go ahead and produce 
// what it needs to produce. So the multiplier is something that's 
// still sitting in memory in lexical outside scope of this function.
// So even when we call doubleALL it will go ahead and execute this 
// function. It will create its own execution environment. 
// It will go ahead and look for the multiplier variable in its own 
// execution environment. It will not find it and it will then try 
// to look for for this variable in its outer lexical environment, 
// and the outer lexical environment memory space will still remain 
// even though the makeMultiplier function no longer exists.

