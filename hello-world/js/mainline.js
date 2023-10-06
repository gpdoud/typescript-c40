"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
let customers = [
    new customer_1.Customer("Amy  ", 27, "amy@friend.com  "),
    new customer_1.Customer("Bill ", 33, "bill@friend.com "),
    new customer_1.Customer("Cindy", 29, "cindy@friend.com", true),
    new customer_1.Customer("Dan  ", 41, "dan@friend.com  ")
];
for (let c of customers) {
    console.log(`${c.name} | ${c.email} | ${c.age} | ${c.bff ? 'BFF' : ''}`);
}
