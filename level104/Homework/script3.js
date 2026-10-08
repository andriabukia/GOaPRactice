class Animal{
    /**
     *
     */
    constructor(name) {
        this.name = name
    }

    speak(){
        return "sup"
    }
}

class Dog extends Animal{
    /**
     *
     */
    constructor(name) {
        super(name);
    }

    speak(){
        return "gurp"
    }
}

const dogge = new Dog("jeka")
const animala = new Animal("wanker")
console.log(dogge.speak())
console.log(animala.speak())