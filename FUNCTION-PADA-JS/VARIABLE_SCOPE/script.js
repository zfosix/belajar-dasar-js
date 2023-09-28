// global scope / window scope
// var a = 1;

var a = 1;
function tes(a) {
     // name conflict
     console.log(a);
}

tes(a);
console.log(a);