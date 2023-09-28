// var angka = prompt('Masukan Angka :');

// if ( angka == 1 ) {
//      alert('Anda memasukan angka 1');
// }else if( angka == 2 ){
//      alert('Anda memasukan angka 2');
// }else if( angka == 3 ){
//      alert('Anda memasukan angka 3');
// }else{
//      alert('Angka yang anda masukan salah!');
// }

// var angka = parseInt(prompt('Masukan Angka :'));

// if ( angka === 1 ) {
//      alert('Anda memasukan angka 1');
// }else if( angka === 2 ){
//      alert('Anda memasukan angka 2');
// }else if( angka === 3 ){
//      alert('Anda memasukan angka 3');
// }else{
//      alert('Angka yang anda masukan salah!');
// }

// var angka = prompt('Masukan Angka :');

// switch(angka){
//      case '1' :
//           alert('anda memasukan angka 1');
//           break;
//      case '2' :
//           alert('anda memasukan angka 2');
//           break;
//      case '3' :
//           alert('anda memasukan angka 3');
//           break;
//      default : 
//           alert('angka yang anda masukan salah');
//           break; 
// }

var item = prompt('masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch( item ){
     case 'nasi' :
     case 'daging' :
     case 'susu' :
          alert('makanan / minuman SEHAT!');
          break;
     case 'hamburger' :
     case 'softdrink' :
          alert('makanan / minuman TIDAK SEHAT!');
          break;
     default :
          alert('anda memasukan nama makanan /  minuman yang salah!');
          break;
}