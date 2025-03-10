//
// String, Numbers and Booleans
//

let userName: string = "alice";
let age: number = 30;
let isLoggedIn: boolean = false;

//
// Implicit vs. explicit types
//

let amount1: number = 10;
let amount2 = 20;



//
// Unions
//

let statusCode: number | string;

statusCode = 200;
statusCode = "not found";
// statusCode = false; // Error


//
// Functions
//

function calcTotal(a: number, b: number): number {
    return a + b;
}

calcTotal(10, 20);
// calcTotal(10, "20"); // Error


// 
// Arrays
// 

const numbers = [1, 2, 3]; // implicit
const employees: string[] = ["alice", "bob", "charlie"];

numbers.push(4);
// numbers.push("foobar");

employees.push("david")
// employees.push(5)


// console.log(numbers[1].toUpperCase());
console.log(employees[1].toUpperCase());




// 
// Type aliases
// 

type Player = {
    name: string,
    year: number,
    favouriteDrink?: string
}

const player1: Player = {name: "cristiano", year: 1985}
const player2: Player = {name: "leo", year: 1987, favouriteDrink: "mate"}
const player3: Player = {name: "david emmanuel", year: 1987, favouriteDrink: "mate or coffee"}


// 
// Type aliases (example 2)
// 

type CoolUser = {
    userName: string,
    age: number,
    likesPizza?: boolean
}

const usersArr: CoolUser[] = [
    {userName: "alice", age: 30},
    {userName: "bob", age: 25, likesPizza: true}
]

usersArr.forEach((user) => {
    console.log(user.age);
    // console.log(user.foobar)
    // console.log(user.age.toUpperCase())
});

