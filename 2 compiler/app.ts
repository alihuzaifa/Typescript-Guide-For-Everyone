/*
TypeScript code seedhe browser mein run nahi hota. TypeScript ek superset hai JavaScript ka jo ki browsers ya kisi bhi JavaScript runtime environment mein seedha chalane ke liye tayyar nahi hota.

TypeScript code ko run karne ke liye, use JavaScript mein convert karna hota hai. TypeScript compiler (tsc) TypeScript code ko JavaScript mein translate karta hai. Is compiled JavaScript code ko hi browsers aur other JavaScript runtime environments understand aur execute kar sakte hain.

Is tarah se, jab aap TypeScript code likhte hain, aapko pehle use compile karke JavaScript mein convert karna hota hai. Phir uss JavaScript code ko aap apne web browser ya kisi bhi JavaScript runtime environment mein use kar sakte hain.

Is process ko samajhne ke liye, aapko TypeScript code likhna, usse compile karna tsc ke through aur phir resulting JavaScript code ko browser mein run karke dekhna hoga.

Example
agar ap apni HTML file ko TypeScript ke saath connect karna chahte hain. Iske liye aap tsc --init command ka istemal karke ek tsconfig.json file create kar sakte hain. Is file ko customize karke aap apne TypeScript code ko compile kar JavaScript mein convert kar sakte hain.

Yeh tsconfig.json file aapko project ki specific settings provide karegi, jaise ki rootDir aur outDir, jinhe aap customize kar sakte hain. rootDir mein aapko apne TypeScript files ka folder path specify karna hoga, aur outDir mein aapko output JavaScript files ka directory path dena hoga.


Apne terminal ya command prompt me jaye.

Navigate kare apne project folder me.

Run kare tsc --init. Yeh aapki project ke liye ek tsconfig.json file create karega.
Ab, aap tsconfig.json file ko edit karein:

rootDir mein aap apne TypeScript files ka folder path specify karenge.

outDir mein aap output JavaScript files ka directory path denge, jahan par compiled JavaScript files generate hongi.

include mein aap specify kar sakte hain ki kaun se folders mein TypeScript files hain.

exclude mein aap specify kar sakte hain ki kaun se folders TypeScript compilation ke liye exclude kiye gaye hain.

Is tareeke se, tsconfig.json file ki madad se aap apne TypeScript code ko configure kar sakte hain aur agar aap chahte hain ki aapke changes ko detect kiya jaye aur updated JavaScript files automatically generate ho, to aap tsc -w ya tsc --watch ka istemal kar sakte hain. Is command se TypeScript compiler watch mode mein chala jayega, jisse jab bhi aap koi changes karte hain, wo detect kiya jata hai aur updated JavaScript files generate hote hain.
*/
console.log("Hello World!");
