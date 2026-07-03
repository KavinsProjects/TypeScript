let age : number = 13;
console.log(age);
const myName : string = "kavin";
console.log(myName);
let isAdmin : boolean = true;
console.log(isAdmin);
// array of strings
const tag : string[] = ["kavin", "asus-rog"];
console.log(tag);
//same thing with generic syntax
const tags1 : Array <String> = ["wasd", "Hi"];

//"turn off type checking"
let anything : any = "avoid me";
anything = 23434;
anything = true;
console.log(anything);

// //unknow
// //any - but safe
// let value : unknown = 12;
// value = "kavin";
// if(typeof value === "string"){
//     value.toUpperCase();
//     console.log(value);
// }

//void
//void is used to indicate that a function does not return a value.
function sayHi(msg: string): void {
    console.log(msg);
}
sayHi("Hello this is kavin");

// function namee(): void {
//     return "oops!"//not allowed
// }

function namee(): void {
    return 
}
const nofiyUser = (user : string): void => {
    console.log("the Nofication is send to the :", user);
}
nofiyUser("kavin");
//never

// function throwNewError(content : string): never {
//     throw new Error(content);
// }
// throwNewError("Someing Went Wrong ");

function infinyeloop(): never {
    while(true){}
}


