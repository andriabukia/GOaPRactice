class Product{
    /**
     *
     */
    constructor(name,price) {
        this.name = name
        this.price = price
    }
}

class DiscountedProducts extends Product{
    /**
     *
     */
    constructor(name,price,discount) {
        super(name,price);
        this.discount = discount
    }

    static getfinalPrice(price,discount){
        return price - discount
    }
}

const prod = new Product("banana",10)
const discounted = new DiscountedProducts("wurst",20.99,7.5)
const prod2 = new Product("apfel",2)
console.log(DiscountedProducts.getfinalPrice(discounted.price,discounted.discount))