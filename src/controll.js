//Lista de musicas - Categoria - Flashback
const musicasFlashback = [
    {
        path: 'src/media/music/flashback/01.mp3',
        displayName: 'Voyage Voyage',
        //cover: '/img'
        artist: 'Desireless'
    },
    {
        path: 'src/media/music/flashback/02.mp3',
        displayName: 'Girls Just Want To Have Fun',
        //cover: '/img'
        artist: 'Cyndi Lauper'
    },
    {
        path: 'src/media/music/flashback/03.mp3',
        displayName: 'You Are The One',
        //cover: '/img'
        artist: 'A-Ha'
    },
    {
        path: 'src/media/music/flashback/04.mp3',
        displayName: 'Domino Dancing',
        //cover: '/img'
        artist: 'Pet Shop Boys'
    },
    {
        path: 'src/media/music/flashback/05.mp3',
        displayName: 'Holiday',
        //cover: '/img'
        artist: 'Madonna'
    },
    {
        path: 'src/media/music/flashback/06.mp3',
        displayName: 'The Promise',
        //cover: '/img'
        artist: 'When In Rome'
    },
    {
        path: 'src/media/music/flashback/07.mp3',
        displayName: 'Maria Magdalena',
        //cover: '/img'
        artist: 'Sandra'
    },
    {
        path: 'src/media/music/flashback/08.mp3',
        displayName: 'Sweet Dreams',
        //cover: '/img'
        artist: 'Eutythmics'
    },
    {
        path: 'src/media/music/flashback/09.mp3',
        displayName: 'A little Respect',
        //cover: '/img'
        artist: 'Erasure'
    },
    {
        path: 'src/media/music/flashback/10.mp3',
        displayName: 'Like a Virgin',
        //cover: '/img'
        artist: 'Madonna'
    },
    {
        path: 'src/media/music/flashback/11.mp3',
        displayName: 'Big In Japan',
        //cover: '/img'
        artist: 'Alphaville'
    },
    {
        path: 'src/media/music/flashback/12.mp3',
        displayName: 'Tarzan Boy',
        //cover: '/img'
        artist: 'Baltimora'
    },
    {
        path: 'src/media/music/flashback/13.mp3',
        displayName: 'Maniac',
        //cover: '/img'
        artist: 'Michael Sembello'
    },
]

//capturando os botoes da tecla
const play = document.getElementById("play");
const pause = document.getElementById("pause");

//controle do player
const player = document.getElementById("player");
const titulo = document.getElementById("titulo")

play.addEventListener("click", ()=>{
    play.style.display = "none"
    pause.style.display = "block"
    player.src = musicasFlashback[0].path;
    player.play();    
    titulo.innerHTML = musicasFlashback[0].displayName
})
pause.addEventListener("click", ()=>{
    play.style.display = "block"
    pause.style.display = "none"
    player.pause();
})
