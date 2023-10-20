
let a = 5;
let c = 8;
// Arrow function
let equation = (a, c) => {
    if (a == 0) {
       if (c == 0){
        return "Phương trình vô số nghiệm"                      
    } else {
        return 'phương trình vô nghiệm'
    }
} else {
         return 'Phương trình có nghiệm là:' + (-c / a);     
}
     
}
console.log(equation(a, c))
