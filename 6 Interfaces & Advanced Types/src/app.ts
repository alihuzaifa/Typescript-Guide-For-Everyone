/*
TOPICS That we will cover 
1) Advanced Types (Union , Intersection)
2) Type Guards
3) Type vs Interface
*/

// 1 a) Union types, TypeScript mein do ya zyada data types ko combine karne ka tareeka hai. Union type mein aap multiple data types ko ek saath use kar sakte hain, jaise ki string | number jo string ya number dono ko represent karta hai. Isse aap multiple data types ko represent kar sakte hain jo ek variable mein store ho sakte hain.
let val: string | number;

val = 10; // Valid
val = "Hello"; // Valid
// val = true; // Invalid

// b) Intersection types, do ya zyada existing types ko combine karne ke liye use hote hain, jisse resultant type un sab types ka combination ho jata hai. Intersection types & operator se represent kiye jate hain.

// type A = { name: string };
// type B = { age: number };
// type Combined = A & B;
// let obj: Combined;
// obj = { name: "John", age: 25 };

// Aur agar ap isko interface se karna chahte hain to ap is tariqe se kare ge aur isi tariqe se multiple interfaces bhi aik class se connect kar sakte hain
// interface A {
//   name: string;
// }
// interface B {
//   age: number;
// }
// interface Combined extends A, B {}
// let obj: Combined;
// obj = { name: "John", age: 25 };

// 2 Type Guards: basically type guards sirf aik check hota hain jo ke apko lagana hota hain kisi bhi property ko access karne se pehle agar ap is tariqe se kam karrahe hun jaise ke humne niche wali example me dekha mene 2 type banai hain aik animal aur aik bird aur usko aik aur type me rakha hain uniqueIdentity ke name se jisme mene 2 type as a union dedi hain ab usme ye error aye ga jab ap . karke kisi property ko access kare ge k name diya hain user ne ya flyingSpeed to hum isse bachne ke liye aik chceking karte hain k ye property exist karti hain ya nahi  jisse hum error se bach jate hain
// Conclusion ap kisi aisi property ko access karke modify na karo jo ke exist hi nahi karti hain

// type Animal = {
//   name: string;
// };
// type Bird = {
//   flyingSpeed: number;
// };
// type uniqueIdentity = Animal | Bird;
// function log(params: uniqueIdentity) {
//   if ("flyingSpeed" in params) {
//     console.log("flyingSpeed", params.flyingSpeed);
//   } else {
//     console.log("name", params.name);
//   }
// }
// log({ name: "Eagle" });
// log({ flyingSpeed: 200 });

// Example With Classes
// class Animal {
//   constructor(public name: string) {}
// }
// class Bird {
//   constructor(public flyingSpeed: number) {}
// }
// type uniqueIdentity = Animal | Bird;
// function log(params: uniqueIdentity) {
//   if (params instanceof Bird) {
//     console.log("flyingSpeed", params.flyingSpeed);
//   } else {
//     console.log("name", params.name);
//   }
// }
// log({ name: "Lion" });

// TYPE vs INTERFACE dono same hain kahi ap apna kaam type ko use karke karo ge aur kabhi ap interface ko use karke karo ge ye ap per depend karta hain k ap kisko use karte hain magar interface apko aik additional benefit deti hain jo type apko nahi deti wo kiya hain wo ye hain k apki type classes per work nahi karti magar interface classes ke liye bhi hota hain  like jo ap interface me bata rahe hun ap usko aik class per bhi implement karsakte hain

// Differences between type and interface

// Additional Properties Handling:
// Interfaces: Interfaces additional properties ko allow karte hain, specifically agar woh class mein implement ki ja rahi hai. Interfaces ke through class ke structure ko describe kiya ja sakta hai aur woh class us interface ko implement karte waqt defined properties ko zarur implement karega, lekin woh additional properties ko bhi add kar sakta hai.
interface Car {
  brand: string;
  model: string;
}

// Types: Types restrict karte hain ki variables ya objects mein sirf defined properties hi hon, additional properties ko allow nahi karte. Types ke through specific types ko define kiya jata hai, aur variables ko usi defined type ke according use kiya ja sakta hai.
type Car2 = {
  brand: string;
  model: string;
};

// Declaration Merging: Interfaces: Interfaces ko merge kiya ja sakta hai. Agar ek interface do baar define ki gayi ho aur woh same name se define ki gayi ho, toh TypeScript dono definitions ko merge kar dega.
interface Example {
  prop1: string;
}

interface Example {
  prop2: number;
}
// Merged interface:
// interface Example {
//     prop1: string;
//     prop2: number;
// }

// Types: Types ko merge nahi kiya ja sakta hai. Agar same name se do types define kiye jaate hain toh TypeScript error dega.

type Example2 = {
  prop1: string;
};

// Error: Duplicate identifier 'Example'
// type Example2 = {
//   prop2: number;
// };

// Conclusion: In short, dono type aur interface types define karne ke liye istemal hote hain, lekin unmein kuch differences hote hain jaise ki additional properties allowance aur declaration merging mein. Yeh differences depend karte hain ki aapke code ke requirements aur use cases kya hain.