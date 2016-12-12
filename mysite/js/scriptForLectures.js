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
