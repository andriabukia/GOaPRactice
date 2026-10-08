// task 1
let name = "Nika" // -> primitive
let age = 18 // -> primitive
let user = {
    name:"Nika"
} // reference - heap
let numbers = [1,2,3] //-> reference - heap


//  task2
let a = 5
let b = a
b = 10
console.log(a) // 5
console.log(b) // 10

// task 3
let car = {
    brand:"mitsubishi",
    model:"jeep",
    year:2024
}
let car2 = car
car2.brand = "nisan"
car2.model = "ravi"
car2.year = 2000
console.log(`${car.brand}, ${car.model} ${car.year}`) //nisan, ravi 2000
console.log(`${car2.brand}, ${car2.model} ${car2.year}`) // nisan, ravi 2000

// task 4
const fruits = ["Apple","Banana","Orange"]
let newFruits = fruits
newFruits.push("Peach")
console.log(newFruits)
console.log(fruits)

// task 5
// stack - არის მეხსიერების ნაწილი სადაც ინახება პრიმიტიული მონაცემები მაგ: Number,boolean,string და ა.შ 
// heap - არის მეხსიერების ნაწილი სადაც ინახება შედარებით რთული/კომპლექსური ობიქტები,ფუნქციები,მასივები და ა.შ