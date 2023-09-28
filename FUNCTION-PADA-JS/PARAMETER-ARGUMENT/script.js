// function tambah(a,b) {
//      return a + b;
// }

// function kali(a,b) {
//      return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);

// var a = parseInt(prompt('Masukkan nilai 1:'));
// var b = parseInt(prompt('Masukkan nilai 2:'));
// var hasil = tambah(a*2,b*2);

// console.log(hasil);



// Arguments
function tambah() {
     var hasil = 0;
     for( var i = 0; i < arguments.length; i++ ){
          hasil += arguments[i];
     }
     return hasil;
}

var coba = tambah(1,2,3,4,5);
console.log(coba);