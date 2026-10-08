class Vehicle{
    /**
     *
     */
    constructor(brand) {
        this.brand = brand
    }

    static compare(v1,v2){
        if(v1.brand == v2.brand){
            return `ორივეს იგივე ბრენდი აქვს: ${v1}`
        }
        else{
            return `სხვადასხვა ბრენდი აქვთ: ${v1} - ${v2}`
        }
    }
}