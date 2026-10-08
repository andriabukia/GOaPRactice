// task 1
let city = "Tbilisi" // primitive
let temperature = 30 // primitive
let isSummer = true // primitive
let person = {
    name:"Gio",
    age:20
}   // reference
let fruits = ["Apple", "Banana", "Orange"]; // reference

//  task 2
let x = 15
let y = x
y=50
console.log(x) //15
console.log(y) //50

// task 3
let firstName = "Luka";

let secondName = firstName;

secondName = "Nika";

console.log(firstName); //Luka
console.log(secondName); //Nika

// task 4
let student = {
    name: "andria",
    age: 16,
    academy:"GOA"
}
let student2 = student
student2.name = "Nika"
console.log(student2.name) //Nika
console.log(student.name) // Nika
//   ორივე ცვლადი ზუსტად იმავე ობიექტს მიუთითებს

// task 5
let arr1 = [10,20,30]
let arr2 = arr1
arr2.push(40)
console.log(arr1); // 10,20,30,40
console.log(arr2); // 10,20,30,40
//იგივეა როგორც წინა