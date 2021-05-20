//single line

/*multi-
line*/

//output to console
console.log("Display");

//Data types

//number =1,3,5.6,4.33

//string="good","hj hghj"

//boolean=true/false

//null

//undefined

//object ,symbol

//const
const constant="hi";

var h=5.8;

/***********************************************************************/

let ac="my";
ac="the";

//concatination using +=
ac+=" fox";

console.log(ac);

let c="Name";

//string concatination
let g=ac + ' ' + c;

//getting character
console.log(c[1]);

//string length
console.log(c.length);

//string methods
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.indexOf('m'));

//string immutability
ac[1]="r";	//this stmt won't work

/***********************************************************************/

//mathematical operations

let a=10;
let b=7;

//addition  
let result=a+b;

//subtraction
result=a-b;

//multiplication
result=a*b;

//Division
result=a/b;

//remainder
result=a%b;

// increment by 1
a++;	++a;	a+=1;
//increment by b
a+=b;

//decrement by 1
a--;	--a;	a-=1;
// decrement by b
a-=b;

console.log(result++);
//display, then update
a++;
console.log(result++);

/***********************************************************************/

//escape character

//single quote \'	double quote \"
console.log("I'm a \"fox\"");

//tab \t 	newline \n 	word boundary \b 	backslash \\
console.log(`My age\t is ${a}.\n What\bab\\t y?`);

//carriage return \r 	form feed \f 

/***********************************************************************/


