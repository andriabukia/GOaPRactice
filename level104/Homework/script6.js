class User{
    /**
     *
     */
    static count = 0
    constructor(name) {
        this.name = name
        User.count++
    }

    
}

class Admin extends User{
    constructor(name) {
        super(name);
        
    }
}

const adm1 = new Admin("turi")
const adm2 = new Admin("turi2")
console.log(User.count)