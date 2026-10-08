class Shape{
    /**
     *
     */
    constructor(color) {
        this.color = color
    }
}

class Rectangle extends Shape{
    /**
     *
     */
    constructor(color,width,height) {
        super(color);
        this.width = width
        this.height = height
    }

    getArea(){
        return this.width*this.height
    }
}

const square = new Rectangle("yellow",30,18)
console.log(square.getArea())