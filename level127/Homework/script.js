     // task1
// let numbers = {
//     [Symbol.iterator](){
//         let number = 0
//         return{
//             next(){
//                 if(number<50){
//                     return{
//                         value: number+=10,
//                         done: false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// for(let num of numbers){
//     console.log(num)
// }

    //task2
// let letters = {
//     [Symbol.iterator](){
//         let word = "HELLO"
//         let i = 0
//         return{
//             next(){
//                 if(i<word.length ){
//                     return{
//                         value:`${word[i++]}`,
//                         done:false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// for(let letter of letters){
//     console.log(letter)
// }

    //task3
// let countdown = {
//     [Symbol.iterator](){
//         let count = 10
//         return{
//             next(){
//                 if(count>=0){
//                     return{
//                         value:count--,
//                         done:false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// for(let time of countdown){
//     console.log(time)
// }

    //task4
// let products = {
//     [Symbol.iterator](){
//         let product = ["Laptop","Phone","Tablet"]
//         let i = 0
//         return{
//             next(){
//                 if(i<product.length){
//                     return{
//                         value:`${product[i++]}`,
//                         done:false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// } 
// for(let prod of products){
//     console.log(prod)
// }

    //task5
// let evenNumbers = {
//     [Symbol.iterator](){
//         let numb = 0
//         return{
//             next(){
//                 if(numb<10){
//                     return{
//                         value:numb+=2,
//                         done:false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// for(let even of evenNumbers){
//     console.log(even)
// }

    //task6
// let students = {
//     [Symbol.iterator](){
//         let studs = ["andria","nika","gio","erekle"]
//         let i = 0
//         return{
//             next(){
//                 if(i<studs.length){
//                     return{
//                         value:studs[i++],
//                         done:false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// for(let student of students){
//     console.log(student)
// }

    //task7
// let multiplication = {
//     [Symbol.iterator](){
//         let i = 0
//         return{
//             next(){
//                 if(i<25){
//                     return{
//                         value:i+=5,
//                         done:false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// for(let multi of multiplication){
//     console.log(multi)
// }

    //task8
// let messages ={
//     [Symbol.iterator](){
//         let message = ["you have 3 missed calls", "get spotify for 3 months free","Temu order :D"]
//         let i = 0
//         return{
//             next(){
//                 if(i<message.length){
//                     return{
//                         value:message[i++],
//                         done:false
//                     }
//                 }
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// for(let msg of messages){
//     console.log(msg)
// }


// level 127:

// 1) შექმენი Iterable ობიექტი `numbers`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს რიცხვებს 10-დან 50-მდე, 10-ის შუალედით.

// 2) შექმენი Iterable ობიექტი `letters`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს სიტყვა `"HELLO"`-ს თითოეულ ასოს ცალ-ცალკე.

// 3) შექმენი Iterable ობიექტი `countdown`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს რიცხვებს 10-დან 1-მდე.

// 4) შექმენი Iterable ობიექტი `products`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს:
//    `"Laptop"`
//    `"Phone"`
//    `"Tablet"`

// 5) შექმენი Iterable ობიექტი `evenNumbers`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს მხოლოდ ლუწ რიცხვებს 2-დან 10-მდე.

// 6) შექმენი Iterable ობიექტი `students`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს 4 სტუდენტის სახელს. გამოიყენე Array და `index` ცვლადი.

// 7) შექმენი Iterable ობიექტი `multiplication`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს 5-ის გამრავლების ტაბულას:
//    5
//    10
//    15
//    20
//    25

// 8) შექმენი Iterable ობიექტი `messages`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს 3 შეტყობინებას. გამოიყენე `Symbol.iterator`, `next()`, `value` და `done`.