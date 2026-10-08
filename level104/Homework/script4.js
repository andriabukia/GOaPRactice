class User{
    /**
     *
     */
    constructor(name,email) {
        this.name = name
        this.email = email
    }
}

class Admin extends User{
    /**
     *
     */
    constructor(name,email,role) {
        super(name,email);
        this.role = role
    }

    getRoleInfo(){
        return `${this.role}`
    }
}
const adm = new Admin("turi","turi@","superAdmin")
const use = new User("turikela","turi@222")
console.log(`${adm.name}, ${adm.email}, ${adm.role}`)
console.log(`${use.name}, ${use.email}`)
console.log(adm.getRoleInfo())