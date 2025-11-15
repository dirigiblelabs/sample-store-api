
import { store } from "sdk/db";
import { response } from "sdk/http";

response.println("");
response.println("Select customers with first name John:");
let select = store.query("from Customer c where c.name = 'John'");
response.println(JSON.stringify(select, null, 2));

response.println("");
response.println("Select native customers with first name John:");
let selectNative = store.queryNative("select * from Customer c where CUSTOMER_NAME = 'John'");
response.println(JSON.stringify(selectNative, null, 2));

response.println("");
response.println("Find customers by Example:");
let findByExample = store.find('Customer', { "name": "John" });
response.println(JSON.stringify(findByExample, null, 2));

response.println("");
response.println("List customers with filter options:");
let listWithOptions = store.list('Customer', { "conditions": [{ "propertyName": "name", "operator": "LIKE", "value": "J%" }], "sorts": [{ "propertyName": "name", "direction": "ASC" }], "limit": "100" });
response.println(JSON.stringify(listWithOptions, null, 2));

response.println("");
response.println("Select customers with first name starts with J:");
let selectWithParams = store.query("from Customer c where c.name like ?1", ["J%"]);
response.println(JSON.stringify(selectWithParams, null, 2));