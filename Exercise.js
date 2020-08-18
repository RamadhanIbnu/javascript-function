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
console.log(greet(nama, produk));

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
console.log(alert(suhu+ " Fahrenheit adalah " +getCelcius(suhu)+ " Celcius."));


/*
Soal No.3

Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinya adalah:

Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia

Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia

Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah 4 kali umur manusia. Jadi jika umur
kucing saat ini 4 tahun berarti dalam kalendar tahun kucing, umurnya adalah 32 tahun.

Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun
manusia. */
function moreAge(age){

    if (age >= 3){
        let sumAge = 24 + ((age-2) * 4);

        return sumAge;
    }
}

let convertAge = catAge =>{

    if (catAge === 1){
        return 15 ;
    }
        else if(catAge === 2){
            return 24 ;
        }
    else{
        return moreAge(catAge);
    }

};

let inputAge = parseInt(prompt("masukan umur kucing"));
console.log(alert(inputAge+ " tahun kucing adalah " + convertAge(inputAge) + " tahun umur manusia."));

/*
Soal No.4

Buat sebuah function untuk mengubah format semua string menjadi huruf kecil.

Menerima 1 parameter string

Gunakan single line block function

Output adalah string yang telah diubah formatnya menjadi lower case

Gunakan built in method string */
let changeString = word => word.toLowerCase();

function tampilkan(check){
    if (check === false){
        return alert("terimakasih, sampai jumpa!")
    }

    let input = prompt("masukan kata yang ingin diubah: ");
    
    alert(changeString(input)+ " <= telah diubah menjadi lower case.");
    
    return tampilkan(check=confirm("apakah anda ingin lanjut?"));
}

console.log(tampilkan())



/*
Soal No.5

Buat tampilan untuk seluruh soal diatas. Buat sekreatif teman-teman. 1 soal = 1 fitur = 1 page.

JAWAB

Semua soal diatas sudah diberikan tampilan, baik itu berupa alert, inputan menggunakan prompt, serta confirm dari user.
*/






