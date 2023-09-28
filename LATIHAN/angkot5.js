var jmlAngkot = 10;
var angkotBeroperasi = 6;

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
     if(noAngkot <= 6){
          console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');
     }else if(noAngkot === 8 || noAngkot === 10){
          console.log('Angkot No. ' + noAngkot + ' Sedang lembur.');
     }else{
          console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.');
     }
}