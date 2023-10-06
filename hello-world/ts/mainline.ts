import { Customer } from "./customer";

let customers: Customer[] = [
    new Customer("Amy  ", 27, "amy@friend.com  "),
    new Customer("Bill ", 33, "bill@friend.com "),
    new Customer("Cindy", 29, "cindy@friend.com", true),
    new Customer("Dan  ", 41, "dan@friend.com  " )
];

for(let c of customers) {
    console.log(`${c.name} | ${c.email} | ${c.age} | ${c.bff ? 'BFF' : ''}`);
}