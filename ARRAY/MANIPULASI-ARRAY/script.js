// Manipulasi Array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// arr[0] = "Fajar";
// arr[1] = "Fauzian";
// arr[2] = "Haii";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Fajar", "Fauzian", "Nofa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Fajar", "Fauzian", "Nofa"];
// for( var i = 0; i < arr.length; i++){
//      console.log('Mahasiswa ke- ' + (i+1) + ' : ' + arr[i]);
// }

// Method pada Array
// 1. join
var arr = ['Fajar', 'Fauzian', 'Hasan'];
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Ikbal', 'Gaus');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Hello');
arr.shift();
console.log(arr.join(' - '));
