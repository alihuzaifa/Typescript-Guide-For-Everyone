"use strict";
/*
TOPICS That we will cover
1) Advanced Types (Union , Intersection)
2) Type Guards
3) Type vs Interface
*/
// 1 a) Union types, TypeScript mein do ya zyada data types ko combine karne ka tareeka hai. Union type mein aap multiple data types ko ek saath use kar sakte hain, jaise ki string | number jo string ya number dono ko represent karta hai. Isse aap multiple data types ko represent kar sakte hain jo ek variable mein store ho sakte hain.
let val;
val = 10; // Valid
val = "Hello"; // Valid
// Error: Duplicate identifier 'Example'
// type Example2 = {
//   prop2: number;
// };
// Conclusion: In short, dono type aur interface types define karne ke liye istemal hote hain, lekin unmein kuch differences hote hain jaise ki additional properties allowance aur declaration merging mein. Yeh differences depend karte hain ki aapke code ke requirements aur use cases kya hain.
//# sourceMappingURL=app.js.map