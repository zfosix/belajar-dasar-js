// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Fajar', 'Fauzian', 'Hasan'];

// for( var i = 0; i < angka.length; i++ ){
//      console.log(angka[i]);
// }
// angka.forEach(function(e){
//      console.log(e);
// });

// nama.forEach(function(e, i){
//      console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })

// 7. map
// var angka = [1,2,3,4,5,6,7,8,4];
// var angka2 = angka.map(function(e){
//      return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
var angka = [2,1,4,3,6,5,8,7,10,9];
angka.sort(function(a,b){
     return a-b;
});
console.log(angka.join(' - '));