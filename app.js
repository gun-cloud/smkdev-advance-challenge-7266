//program loop untuk menampilkan pola bilangan terbalik
for (let i = 5; i >= 1; i--) {
    let pola = '';
    for (let j = i; j >= 1; j--) {
        pola += j + ' ';
    }
    console.log(pola);
}
