// object is collection of properties

let person={//person is an object and this whole schema is to declare an object with peoperties and methods(functions inside the objects are called as methods) and the objects are like key value pairs.
    firstName:'jay',
    lastName: 'kumar',
    email:'jay598@gmai.com',
    fullname:function(){// anonymous funcion it is valid if we assign this to any var
        
         console.log(this.firstName+" "+this.lastName+" "+this.email);
        
        }

}



console.log("first name: "+person.firstName)
console.log("last name:"+person.lastName)
console.log("email: "+person.email)

person.firstName="yadavalli";
console.log("fitst name: "+person.firstName)

console.log("lastname: "+person.lastName)
console.log("email: "+person.email)
person.contact='565634267687';
console.log("firstname: "+person.firstName)
console.log("lastname: "+person.lastName)

console.log("email: "+person.email)
console.log("CONTACT: "+person.contact)
console.log("-----------------------")

console.log(person)

delete person.contact

console.log("-----------------------")
console.log(person)

console.log(person.fullname())

// recursive function
console.log("recursive")
function factorial(x){
    if(x<=1){
        return x;
    }
    else{
        return x*factorial(x-1);
    }
}

let y=factorial(10);
console.log(y);

//functions using arrows
myfunc=(a,b)=>a*b;
console.log(myfunc(9,2))

//first class functions
const Animal={
    eat : (animal,food)=>{
        return `${animal} eats ${food}`
    },
    sleep : (animal,sleep)=>{
        return `${animal} eats ${sleep}`
    },
    swim : (animal,food)=>{
        return `${animal} eats ${swim}`
    }
}
console.log(Animal.eat('lion','meat'));
console.log(Animal.eat('lion',true));
console.log(Animal.eat('lion',true));
let s1=Object.create(Animal);
console.log(s1.eat('lion','grass'));

//immediately invoked function expressions

var iife=function(){
   return 'immediately invoked function expressions example';
}();
console.log(iife);//for correct explaination check iife.js file

//function prototype

function Customer(){
    this.cname='krishna',
    this.cadd='mathura'
}
let cust1=new Customer();
let cust2=new Customer();
console.log(Customer.prototype);
Customer.prototype.orderplaced=true;//here we are appending another column like inheriting
console.log(Customer.prototype);

console.log(cust1.cname+' '+cust1.cadd+' '+cust1.orderplaced);
console.log('cust2'+cust2.orderplaced);


function product(pid,pname)
{
    this.pid=pid;
    this.pname=pname;
}
var p1=new product('p01','laptop');
console.log(p1.pid+' '+p1.pname);

//using create
let pp1=Object.create(person);
console.log(pp1.firstName);

//closures here we call the function using the varaible name for which the function returns the value

function sayHello()
{
    var hello='hello,world';
    return function()
    {
        console.log(hello);
    };
}
var sayHelloClosure=sayHello();
sayHelloClosure();


console.log(tempVar); // ReferenceError
var tempVar = "I am var"; // Declaration is hoisted, value assignment isn't
console.log(tempVar);
console.log(tempLet); // ReferenceError
let tempLet = "I am let"; // Temporal Dead Zone - variable not accessible
