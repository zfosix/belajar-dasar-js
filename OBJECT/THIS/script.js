//  Membuat Object

// cara 1
// function halo(){
//      console.log('halo');
// }
// halo();

// cara 2 - object literal
// var obj = {};
// obj.halo = function(){
//      console.log('halo');
// }
// obj.halo();

// cara 3 - constructor
// function halo(){
//      console.log('halo');
// }
// new halo();

// This
// var a = 10;
// console.log(this.a);


// cara 1
// function halo() {
//      console.log(this);
//      console.log('halo');
// }
// this.halo();
// this mengembalikan object global 

// cara 2 
// var obj = {a : 10, nama : 'Fajar'};
// obj.halo = function(){
//      console.log(this);
//      console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3
// function Halo(){
//      console.log(this);
//      console.log('halo');
//      }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
