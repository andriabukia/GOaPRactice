//  task1
const numbers = [1,2,3,4,5]
const iterator = numbers[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//  task2
const js = "JavaScript"
const i = js[Symbol.iterator]()
console.log(i.next())
console.log(i.next())
console.log(i.next())

//  task3
const numbers = {
  [Symbol.iterator]() {
    let number = 1;
    return {
      next() {
        if (number <= 5) {
          return { 
            value: `number is ${number++}`
            , done: false 
        };
        }
        return { done: true };
      }
    };
  }
};

for (const num of numbers) {
  console.log(num);
}
//  task4
const countdown = {
    [Symbol.iterator](){
        let time = 5
         return{
           next(){
            if(time>=1){
                return{
                value:`time is ${time--}`,
                done:false
                }
            }
                   return{
                done:true
            }
           }
                
            }
         

        }
    }

for(const t of countdown){
    console.log(t)
}

//  task5
const students = {
    [Symbol.iterator](){
        let names = ["nika","luka","giorgi"]
        let i = 0
            return{
                next(){
                    if(i <=names.length){
                    return{
                     value:`name is ${names[i++]}`,
                    done:false
                        }
              
                    }
                  return{
                    done:true
                }
                }

            }
      
        
    }
}
for(const student of students){
    console.log(student)
}



// level 127:

// 1) შექმენი Array `numbers`, რომელშიც იქნება 5 რიცხვი. შექმენი მისი Iterator `Symbol.iterator`-ის გამოყენებით და `next()`-ის საშუალებით გამოიტანე ყველა ელემენტი სათითაოდ.

// 2) შექმენი String `"JavaScript"`. შექმენი მისი Iterator და `next()`-ის გამოყენებით გამოიტანე პირველი 3 სიმბოლო.

// 3) შექმენი ობიექტი `numbers`, რომელიც `[Symbol.iterator]()`-ის გამოყენებით Iterable იქნება. `for...of`-ის გამოყენებისას ობიექტმა უნდა გამოიტანოს რიცხვები 1-დან 5-მდე.

// 4) შექმენი საკუთარი Iterable ობიექტი `countdown`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს რიცხვებს 5-დან 1-მდე.

// 5) შექმენი საკუთარი Iterable ობიექტი `students`, რომელიც `for...of`-ის გამოყენებისას გამოიტანს შემდეგ სახელებს:

// "Nika"
// "Luka"
// "Giorgi"

// გამოიყენე:
// - Symbol.iterator
// - next()
// - value
// - done