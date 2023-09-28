// var x = 10;
// console.log("Hello World");
// console.log("isi dari variable x adalah" + x);

// POP UP
// var nama = prompt('Masukan Nama Kamu!');
// alert(nama);
// alert(tes); 
// var tes = confirm('Kamu Yakin?');
// if( tes === true ){
//      alert ('user menekan OK!');
// }else{
//      alert ('user menekan CANCEL!');
// }

alert ('Selamat Datang...');
var lagi = true;

while( lagi === true ){
     var nama = prompt('masukan nama:');
     alert('halo '+ nama);

     lagi = confirm('coba lagi?');
}

alert('terimakasih...');