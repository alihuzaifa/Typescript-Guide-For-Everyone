"use strict";
/* TOPICS That we will cover in this
1 String Type
2 Number Type
3 Object Type
4 Array Type
5 Literal Type
6 FUnction Type
7 Tupple Type
*/
// TypeScript mein, variable declare karne ke liye pehle variable ka naam likha jata hai, uske baad colon : lagakar us variable ki data type declare ki jaati hai.
// 1) String Type
// Yahan message ek variable hai jo sirf string type ki values ko accept karega.
let message;
message = "Hello World";
// 2) Number Type
// Yahan totalMarks ek variable hai jo sirf Number type ki values ko accept karega.
let totalMarks;
totalMarks = 1000;
// 3) Object Type
// jab humein kisi variable mein kisi bhi data type ke values ko store karna ho jo primitive types nahi hain, jaise ki number, string, boolean, etc.
let user;
user = { name: "Ali Huzaifa" };
user = { age: 21 };
let person;
person = { name: "Ali Huzaifa", age: 21, isTeenager: false };
// Yahan Human ek custom object type hai jisme name property string type, age property number type, aur isTeenager property boolean type ki hai.
// Fir person variable ko Human type mein declare kiya gaya hai, aur usmein ek object assign kiya gaya hai jisme name, age, aur isTeenager properties specified data types ke mutabiq hain.
// Is tarah ke custom object types use karke, aap specific properties aur unki corresponding data types ko define kar sakte hain, jo ki TypeScript mein type safety aur clarity ko improve karta hai.
// 4) array type
// string array: is type ka variable sirf array of string hi accept kare ga aur kuch nahi
let fruits;
fruits = ["Apple", "Mango", "Pineapple"];
// number array: is type ka variable sirf array of number hi accept kare ga aur kuch nahi
let studentsRollNumber;
studentsRollNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// 5) Literal types TypeScript mein aise values hote hain jo bilkul specific hote hain. In values ko hum explicitly declare karte hain. Ye values exact aur specific hoti hain, jaise ki ek particular string, number, ya boolean value.
let score;
// score = 120; // Invalid
score = 100; // Valid
// 6) Function type: TypeScript mein functions ko represent karne ka tareeka hai. Isme aap specify karte hain ki function kis tarah ke parameters le sakta hai aur kya return karega.
// colon : ke bad humne isme return type batayi hain k ye function kiya return kare ga
function add(num1, num2) {
    return num1 + num2;
}
let totalNumber = add(100, 100); // Valid
// let totalNumber = add("Hello", "World"); Invalid
// 7) Tupple Type :Tuples TypeScript mein ek tarah ka data structure hai jo kisi specific order mein elements ko store karta hai. Har element ko uski position ke hisab se identify kiya jata hai.
// Tuples declare karne ke liye, aap [ ] brackets mein elements ke types ko likhte hain:
let tuppleName;
tuppleName = ["Ali Huzaifa", 21]; // Valid
// tuppleName = [20, 21]; // Invalid
//# sourceMappingURL=app.js.map