/*
TOPICS That we will cover 
1) Generics
*/

// Generics kisi bhi type ki additional information ko hum generics me pass karte aur generics ka sabse ziada istimal hum waha karte hain jaha typescript sahi se get nahi kar parahi hain k waha value kiya aye gi waha per hum generics ka use karte hain aur kabhi bhi agar ap koi angle bracket dekhe like this <> to ap samajh jaye ye generics hain aur generics ka ziada tar use ap tab karte hain jab ap apni app ke liye koi helper function bana rahe hote hain helper function wo function hote hain jo ke ap ke app se related wo kaam karke de rahe hote hain jo k ap ki app me bar bar horahe hote hain
// isme meny ya batadiya hain ye aik promise hain jo number return karega Promise<number>

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
});
promise.then((data) => {
  const number = data.toFixed(1);
  console.log("number", number);
});

// aur resolve aur reject ki hum type bhi nahi batayi hain qk promise me diya hain isliye typescript khudi samajh gayi hain

// Chaliye ek chhota sa generic function merge banate hain jisse hum do objects ko merge karke ek naya object create kar sake, aur phir hum kuch scenarios dekhte hain jahan koi parameter missing ho ya extra ho.

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

// Example 1: Both objects have complete properties
const obj1 = { name: "Nadir", age: 25 };
const obj2 = { city: "New York", country: "USA" };
const merged1 = merge(obj1, obj2);
console.log(merged1); // Output: { name: 'Nadir', age: 25, city: 'New York', country: 'USA' }

// Example 2: One object has incomplete properties
const obj3 = { name: "Alice" };
const obj4 = { age: 30, city: "London" };
const merged2 = merge(obj3, obj4);
console.log(merged2); // Output: { name: 'Alice', age: 30, city: 'London' }

// Example 3: Both objects have no properties
const obj5 = {};
const obj6 = {};
const merged3 = merge(obj5, obj6);
console.log(merged3); // Output: {}

// Pehli example mein merge function obj1 aur obj2 ko merge karke ek naya object merged1 create karta hai jisme dono objects ke properties shaamil hoti hain.
// Dusre example mein, obj3 mein sirf name property hai aur obj4 mein age aur city properties hain. merge function ke through in dono objects ko merge kiya jata hai aur resultant object merged2 mein dono ke properties shaamil hote hain.
// Teesre example mein, dono objects obj5 aur obj6 mein koi properties nahi hain, isliye merged3 mein koi property nahi hoti. Is tarah se, merge function flexible tareeke se kaam karta hai aur objects ko merge karke ek naya object generate karta hai, chahe unme se koi parameter missing ho ya extra ho.
