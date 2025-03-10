//
// String, Numbers and Booleans
//
var userName = "alice";
var age = 30;
var isLoggedIn = false;
//
// Implicit vs. explicit types
//
var amount1 = 10;
var amount2 = 20;
//
// Unions
//
var statusCode;
statusCode = 200;
statusCode = "not found";
// statusCode = false; // Error
//
// Functions
//
function calcTotal(a, b) {
    return a + b;
}
calcTotal(10, 20);
// calcTotal(10, "20"); // Error
// 
// Arrays
// 
var numbers = [1, 2, 3]; // implicit
var employees = ["alice", "bob", "charlie"];
numbers.push(4);
// numbers.push("foobar");
employees.push("david");
// employees.push(5)
// console.log(numbers[1].toUpperCase());
console.log(employees[1].toUpperCase());
var player1 = { name: "cristiano", year: 1985 };
var player2 = { name: "leo", year: 1987, favouriteDrink: "mate" };
var player3 = { name: "david emmanuel", year: 1987, favouriteDrink: "mate or coffee" };
var usersArr = [
    { userName: "alice", age: 30 },
    { userName: "bob", age: 25, likesPizza: true }
];
usersArr.forEach(function (user) {
    console.log(user.age);
    // console.log(user.foobar)
    // console.log(user.age.toUpperCase())
});
