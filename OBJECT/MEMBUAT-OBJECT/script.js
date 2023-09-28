// Membuat object
// var mhs = {
//      nama : "Fajar Fauzian",
//      umur : 31,
//      ips : [3.00, 2.50, 3.20],
//      alamat : {
//           jalan : "JL. abc No. 123",
//           kota : "Bandung",
//           provinsi : "Jawa Barat"
//      }
// };

// Oject Literal
var mhs1 = {
     nama : 'Fajar Fauzian',
     nrp : '1220899',
     email : 'fajarfauzian@gmail.com',
     jurusan : 'PPLG'
}

var mhs2 = {
     nama : 'Hasan Rizki',
     nrp : '1229191',
     email : 'hasanrizki@gmail.com',
     jurusan : 'PPLG'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
     email, jurusan 
          var mhs = {};
          mhs.nama = nama;
          mhs.nrp = nrp;
          mhs.email = email;
          mhs.jurusan = jurusan;
          return mhs;
}
var mhs3 = buatObjectMahasiswa('Nofariza', '10213810', 'nofa@gmail.com', 'Teknik Pangan');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan){
     // nrp this = {};
     this.nama = nama;
     this.nrp = nrp;
     this.email = email;
     this.jurusan = jurusan;
     // return this;
}

var mhs4 = new Mahasiswa('Ikbal', '29492174', '', 'ikbal@gmail.com', 'Teknik Industri');