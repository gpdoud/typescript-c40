"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    name;
    age;
    email;
    bff;
    constructor(name, age, email, bff = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
}
exports.Customer = Customer;
