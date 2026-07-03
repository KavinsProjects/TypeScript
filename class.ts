// class Aninaml{
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log(`${this.name} is Food`);
//     }
// }
// const dog = new Aninaml("Dog");

class Animal{
    name : string;
    constructor (name : string){
        this.name = name;
    }
    eat():void { // Thers on anyting to return means we can use :void
        console.log(`${this.name} is Eating food`);   
    }
}
const myDog = new Animal("Dog");

//Dog is Eating food
//console.log(myDog); -> Animal { name: 'Dog' }

class Student{
    name : string;
    age : number;
    rollNum : number;
    isPresent : boolean;
    constructor(name: string,age : number, rollNum : number, isPersent : boolean ){
            this.name = name;
            this.age = age;
            this.rollNum = rollNum;
            this.isPresent = isPersent;
    }
    toprint():void{
        console.log(`The Student ${this.name} age is ${this.age} and his/her rollnumber is ${this.rollNum}, ${this.isPresent}`);
    }
}
const StudentOne = new Student("kavin", 20, 201, true);
const StudentTwo = new Student("shurthi",57, 507, true);
const StudentThree = new Student("kavin", 20, 201, true);
const StudentFour = new Student("kavin", 20, 201, true);
const students: Student[] = [StudentOne, StudentTwo, StudentThree, StudentFour];
students.forEach((student) => {
    student.toprint();
});