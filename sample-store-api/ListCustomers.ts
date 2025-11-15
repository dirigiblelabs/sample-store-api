import { store } from "sdk/db";
import { response } from "sdk/http";

let list = store.list('Customer');
response.println("List all customers:");
response.println(JSON.stringify(list, null, 2));