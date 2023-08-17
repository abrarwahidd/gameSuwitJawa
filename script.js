function getPilihanComputer(){
    let comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if(player === comp) return 'SERI!';
    if(player == 'gajah')return (comp == 'orang') ? 'MENANG!' : 'KALAH!'
    if(player == 'orang')return (comp == 'gajah') ? 'KALAH!' : 'MENANG!'
    if(player == 'semut')return (comp == 'orang') ? 'KALAH!' : 'MENANG!'
}

// putar
function putar(){
    const imgComputer = document.querySelector('.gb-computer');
    const gambar = ['orang', 'gajah', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.jpeg');
        if(i == gambar.length) i = 0;
    }, 100);
    
}

// rules cara pertama
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className; 
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        const cp = document.querySelector('.cp');

        putar();

        setTimeout(function(){
            const imgComputer = document.querySelector('.gb-computer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpeg');
            cp.innerHTML = pilihanComputer;

            const textHasil = document.querySelector('.text-area');
            if(hasil == 'SERI!'){
                textHasil.innerHTML = pilihanPlayer + ' VS ' + pilihanComputer + ' Hasil ' + hasil;
            } else{
                textHasil.innerHTML = pilihanPlayer + ' VS ' + pilihanComputer + ' Kamu ' + hasil;
            }

        }, 1000)

        
    })
})


// rules cara kedua
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className; 
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.gb-computer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const textHasil = document.querySelector('.text-area');
//     textHasil.innerHTML = hasil;
// })
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className; 
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.gb-computer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const textHasil = document.querySelector('.text-area');
//     textHasil.innerHTML = hasil;
// })
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className; 
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.gb-computer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const textHasil = document.querySelector('.text-area');
//     textHasil.innerHTML = hasil;
// })
