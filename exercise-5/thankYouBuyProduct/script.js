function greet(nama,produk){
    alert( "Terima kasih " + nama + " anda telah membeli produk " + produk) ;
}

let nama = prompt("masukan nama anda: ");
let produk = prompt("masukan nama produk yang akan dibeli: ");
console.log(greet(nama, produk));