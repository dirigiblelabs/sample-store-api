import { store } from "sdk/db";
import { response } from "sdk/http";

let entry1 = { 'name': 'John', 'address': 'Sofia, Bulgaria' };
let entry2 = { 'name': 'Jane', 'address': 'Varna, Bulgaria' };
let entry3 = { 'name': 'Matthias', 'address': 'Berlin, Germany' };

store.save('Customer', entry1);
store.save('Customer', entry2);
store.save('Customer', entry3);

let list = store.list('Customer');
response.println("List all customers:");
response.println(JSON.stringify(list, null, 2));