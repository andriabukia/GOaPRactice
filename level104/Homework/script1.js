class User {
    static count = 0
    constructor(userName) {
        this.name = userName
        User.count++
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
    }
}

const user1 = new User("turi")
const user2 = new User("turmalverde")
const admin1 = new Admin("turikela")
console.log(User.count)

class Vehicle{
    constructor(brandd) {
        this.brand = brandd
    }

    static compare(v1,v2){
        if( v1.brand == v2.brand){
            return `ორივეს იგივე ბრენდი აქვს: ${v1.brand}`
        }
        else{
            return `სხვადასხვა ბრენდები აქვთ: v1-${v1.brand}, v2-${v2.brand}`
        }
    }
}

class Car extends Vehicle{
    /**
     *
     */
    constructor(brand) {
        super(brand);
        
    }
}

const car1 = new Car("bmw")
const car2 = new Car("bmw")
const car3 = new Car("mercedes")
console.log(Vehicle.compare(car1,car2))
console.log(Vehicle.compare(car1,car3))