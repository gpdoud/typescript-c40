export class Customer {

    name;
    age;
    email;
    bff;
    
    constructor(name: string, age: number, email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
}