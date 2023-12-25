/* TOPICS That we will cover in this
1 OOPs
2 BASIC CLASS
3 INHERITANCE IN CLASSES
4 ACCESS MODIFIERS (public , private , protected)
5 GETTER & SETTER Functions
6 ABSTRACT CLASSES
7 STATIC METHODS
8 SINGLETONS
*/


// 1 OOPs (Object-Oriented Programming) ka basic purpose hota hai jo real-life objects ko represent karna aur unke characteristics aur behavior ko programming mein use karta hain. Har object ko properties (ya attributes) aur uske actions (ya methods) ke saath define kiya jaata hai.


// 2 CLASSES objects ko create karne ka blueprint ya template provide karte hain. Har class, ek particular type ke objects ke liye properties (ya attributes) aur behavior (ya methods) ko define karti hai. jiska use karke hum objects ko create kar sakte hain in short ye DAI ki tarah working karti hain
class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let student1 = new Student("Ali Huzaifa", 12);


// 3 INHERITANCE is like apne aik class banai hain jisme ap ne kuch properties aur methods define kiye huwe hain or ap chah rahe hain k mene aik aur class banai hain volunteer student magar usme Student wali class ki bhi properties ajaye mujhe dubara nahi likhna pade
class VolunteerStudent extends Student {
  constructor(public name: string, public age: number) {
    super(name, age);
  }
}
const volunteerStudent = new VolunteerStudent("Huzaifa", 12);


// 4 ACCESS MODIFIERS TypeScript mein class members (properties aur methods) ko control karte hain, yani ye batate hain ki class ke bahar se un members ko kis tarah access kiya ja sakta hai.

// a) Public Access Modifier: public access modifier ke saath members ko declare karne se, woh members class ke bahar bhi accessible ho jaate hain. Yani, unhe class ke instances se ya dusre classes se directly access kiya ja sakta hai.

class PublicCar {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}
let myCar = new PublicCar("Toyota");

// b) Private Access Modifier: Jab koi member ko private declare kiya jaata hai, tab woh member sirf apne defining class ke andar hi accessible hota hai. Yani, dusre class ya instances se us private member ko direct access nahi kiya ja sakta hai. aur ap isko bahar se bhi access nahi karsakte
class PrivateCar {
  private speed: number;
  constructor() {
    this.speed = 50;
  }
}
const car = new PrivateCar();

//  c) Protected access modifier bhi access control ko define karta hai, lekin yeh thoda alag hota hai. Jab ek member ko protected declare kiya jaata hai, toh woh member apne defining class ke andar accessible hota hai, aur saath hi uski subclasses mein bhi accessible hota hai.
//  Iska matlab hai ki agar ek class mein Vehicle ke naam se ek class hai aur usme speed naam ka protected variable hai, toh speed variable ko Vehicle class ke instances ke saath saath uski subclasses bhi access kar sakti hain.

class ProtectedCar {
  protected name: string = "";
}
class Car extends ProtectedCar {
  constructor(protected carName: string, public fuelInTakeName: string) {
    super();
  }
}
const protectedCar1 = new Car("Mercedes", "FuelName");


// 5 GETTER & SETTER Functions

// GETTER agar apne aik property banai hain class me aur usko access modifier private diya hain to ye ap access nahi karsakte class ke sath to isliye hum private properties ko access karne ke liye hum aik getter bana dete hain like ye aik function hota hain jo k private properties ki value ko return karta hain aur ap isko function ki tarah bhi call nahi karte bus class.getter ka name

// SETTER agar private property me data insert karna chah rahe hain lekin koi aur isme data insert na kar sake to hum iska aik setter bana dete hain jisse ye sirf first time accessible hota hain bad me nahi

class Animal {
  private animalCount: number[] = [];
  constructor() {}
  get getAnimalCount() {
    return this.animalCount;
  }
  set setAnimalCount(animalCount: number[]) {
    for (const iterator of animalCount) {
      if (!iterator) return;
    }
    this.animalCount = animalCount;
  }
}
const lion = new Animal();


// 6 ABSTRACT CLASSES: wo classes hoti hain jinke methods ki koi definitions nahi hoti like agar koi is class ko extend karta hain to usko lazmi is method ya is property ko define karna pade ga like apne aik rule define kardiya hain k agar apne ye kaam karna hain to apko is rule se chalna pade ga aur kisi bhi property ko abstract karne ke liye ap uski parent class ko lazmi abtract karte hain

abstract class Bird {
  abstract makeSound(): string;
}
class Eagle extends Bird {
  makeSound(): string {
    return "Chichiichi";
  }
  constructor(public name: string) {
    super();
  }
}


// 7 STATIC METHODS class ke instance create kiye baghair direct taur par class ke through access kiye ja sakte hain. Yeh methods class ke specific hote hain aur unhe instance create kiye bina use kiya ja sakta hai.

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
}
const sum = Calculator.add(5, 3);
const difference = Calculator.subtract(10, 4);


// 8 SINGLETONS typescript ka part nahi hain magar ye programming languages me use hota hain aur javascript isko puri tariqe se enabled nahi karta hain aur isko typescript ne akar enable kiya hain basically singletons kiya hote hain singletons aik pattern hain jis ke andar hum kisi bhi class ko hum restrict kardete hain ke ye class se sirf aik hi object bane aik se ziada na bane aur isme hum constructor ko private kardete hain aur ap isko sirf class ke andar hi access kar sakte hain
class Ghost {
  static object: Ghost;
  private constructor(public name: string) {}
  static getObject(name: string) {
    if (Ghost.object) return Ghost.object;
    return (this.object = new Ghost(name));
  }
}
const ghost1 = Ghost.getObject("Bhoot1");
const ghost2 = Ghost.getObject("Bhoot2");
