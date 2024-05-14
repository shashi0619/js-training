//WAP to show the result of AND operation btween three boolean values with different permutation (ttt,ttf,tft,tff,ftt,ftf,fft,fff) and print in readable format ( like : t and t and t is t for each pair)

let a = "true";
let b = "true";
let c = "true";
let d = (a&&b&&c);

console.log("T AND T AND T is "+d)

let e = "true";
let f = "true";
let g = "false";
let h = (e&&f&&g);

console.log("T AND T AND F is "+h)


let ee = "true";
let ff = "false";
let gg = "true";
let hh = (ee&&ff&&gg);

console.log("T AND F AND T is "+hh)


let aa = "true";
let bb = "false";
let cc = "false";
let dd = (aa&&bb&&cc);

console.log("T AND F AND F is "+dd)


let aaa = "false";
let bbb = "true";
let ccc = "true";
let ddd = (aaa&&bbb&&ccc);

console.log("F AND T AND T is "+ddd)

let a1 = "false";
let b1 = "true";
let c1 = "false";
let d1 = (a1&&b1&&c1);

console.log("F AND T AND F is "+d1)


let a2 = "false";
let b2 = "false";
let c2 = "true";
let d2 = (a2&&b2&&c2);

console.log("F AND F AND T is "+d2)


let a3 = "false";
let b3 = "false";
let c3 = "false";
let d3 = (a3&&b3&&c3);

console.log("F AND F AND F is "+d3)