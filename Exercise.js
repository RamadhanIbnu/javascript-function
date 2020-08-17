/*
Soal No.1

Buat sebuah function untuk toko online kita. Ikuti poin-poin dibawah ini:

Function mempunyai 2 parameter yaitu nama pembeli dan produk yang dibeli

Function akan mengembalikan nilai “Terima kasih (nama pembeli) telah membeli produk (produk
yang dibeli)”

Panggil function dengan menggunakan console.log() */

function greet(nama,produk){
    alert( "Terima kasih " + nama + " anda telah membeli produk " + produk) ;
}

let nama = prompt("masukan nama anda: ");
let produk = prompt("masukan nama produk yang akan dibeli: ");
let sapa = greet(nama, produk);

console.log(sapa);

/*
Soal No.2

Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenherit dan sebaliknya. Ikuti
poin-poin dibawah ini:

Buat sebuah function helper lalu gunakan pada function converternya. Seperti contoh dibawah ini. Jadi kita tinggal
membuat function helper dan function utama untuk convert fahrenheit ke Celcius */

function subtraction(number){
    return number - 32 ;
}

function getCelcius(fahrenheit){
    return subtraction(fahrenheit) * 5/9 ;
}

let suhu = parseInt(prompt("masukan suhu Celcius yang ingin anda konversikan: "));
let hasil = alert(suhu+ " Celcius adalah " +getCelcius(suhu)+ " fahrenheit.");

console.log(hasil)

/*
Soal No.3

Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinya adalah:

Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia

Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia

Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah 4 kali umur manusia. Jadi jika umur
kucing saat ini 4 tahun berarti dalam kalendar tahun kucing, umurnya adalah 32 tahun.

Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun
manusia. */








