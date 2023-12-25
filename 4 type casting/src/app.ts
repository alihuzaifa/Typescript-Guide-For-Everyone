// Jab hum HTML se kisi element ko TypeScript mein target karte hain, tab us element ki type initially pata nahi hoti. Isliye hum type casting karte hain (<HTMLButtonElement>) taaki hum TypeScript ko bata sakein ki wo element kis type ka hai, jaise ki button ya input.
let btn = <HTMLButtonElement>document.querySelector("button");
