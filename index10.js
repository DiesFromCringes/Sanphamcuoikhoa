
let a = 10
let c = 20
let triangle = (a, c) => {
const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2))
const height = (a * c) / hypotenuse     
return {
    h: hypotenuse,
    c: height,      
}
}

console.log(triangle(a, c).h);
console.log(triangle(a, c).c);
