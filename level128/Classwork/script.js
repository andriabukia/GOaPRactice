// // generator  -  არის ფუნქცია მუშაობს ამ პრინციპით:
//     // მუშაობის დაწყება
//     // დროებითი შეჩერება
//     // მნიშვნელობის დაბრუნება
//     // შემდეგ პირობაზე გადასვლა
//         // ამის შემდეგ ციკლი მეორდება !!!

// levle 128:
// 1) შექმენი Generator, რომელიც yield-ით დააბრუნებს 3 ქალაქს. გამოიძახე next() ოთხჯერ და დააკვირდი done-ის მნიშვნელობას.
// 2) შექმენი Generator, რომელიც აბრუნებს 2 რიცხვს, შემდეგ კი return-ით აბრუნებს "Finished"-ს. დაბეჭდე ყველა next().
// 3) შექმენი Generator, სადაც იქნება ცვლადი count = 1. ყოველ yield-ზე დააბრუნე count, შემდეგ გაზარდე ის 1-ით.
// 4) შექმენი Generator, რომელიც yield-ით აბრუნებს 10-ის ჯერად რიცხვებს 10-დან 100-მდე და გამოიტანე ისინი for...of-ით.


// task1
// function* cities(){
//     yield "berlin"
//     yield "tbilisi"
//     yield "london"
// }
// const generator = cities()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// task2
// function* numbers(){
//     yield 18
//     yield 29
//     return "finished"   
// }
//  const gen = numbers()
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())

// task3
// `function* whileCount(){
//     let count = 1
//     while(true){
//         yield count
//         count++
//     }
// }
// const gen2 = whileCount()
// console.log(gen2.next().value)
// console.log(gen2.next().value)
// console.log(gen2.next().value)`

// task4
function* countdown(){
    let num = 10
    while(num<=100){
        yield num
        num+=10
    }
}
const gen3 = countdown()
for(let numm of gen3){
    console.log(numm)
}