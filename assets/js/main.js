// -----------1.1 Array sort()----------
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
languages.sort()
console.log(languages);
// -----------1.13 Arrays join()----------
let meinText1 = ["Hello", "World"]
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
let meinText3 = ["Superman", "Wonderwomen", "Hulk", "Batman", "Spiderman"]
let join1 = meinText1.join();
let join2 = meinText1.join("");
let join3 = meinText1.join(" ");
let join4 = meinText1.join("+")
console.log(join1);
console.log(join2);
console.log(join3);
console.log(join4);
let join5 = meinText2.join();
let join6 = meinText2.join("");
let join7 = meinText2.join(" ");
let join8 = meinText2.join("+")
console.log(join5);
console.log(join6);
console.log(join7);
console.log(join8);
let join9 = meinText3.join();
let join10 = meinText3.join("");
let join11 = meinText3.join(" ");
let join12 = meinText3.join("+")
console.log(join9);
console.log(join10);
console.log(join11);
console.log(join12);
// -----------1.2 Array reverse()----------
// Von Aufgabe 1.1 !!
// let languages = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "Ruby",
//     "PHP",
//     "C++",
//     "CSS",
//     "C#",
//     "Go",
//     "C",
//     "TypeScript",
//     "Swift"
// ];  
let sortierung2 = languages.sort().reverse();
console.log(languages);
// -----------2.2 sort() bigger numbers----------
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2);
numArray2.sort((a, b) => {return a-b});
console.log(numArray2);
// -----------3.1 Reverse Name, Words----------
function reverseString(str) {return str.split("").reverse().join("")}
console.log(reverseString("Hannah"));
console.log(reverseString("Sergio"));
console.log(reverseString("Regallager"));
console.log(reverseString("Reliefpfeiler"));
console.log(reverseString("Rentner"));
console.log(reverseString("Ella mag alle Bohnen"));
console.log(reverseString("han nesaH has ennaH"));
console.log(reverseString("Nie solo sein"));