let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector('.music-player'); 
let sectionPlayer = document.querySelector('.last')
let music = document.querySelector('#audio')

let src = music.getAttribute('data-src');

musicPlayer.querySelector('audio').src = src;
musicPlayer.querySelector('audio').play();



closePlayer.onclick =() =>{ 
    musicPlayer.classList.toggle('active'); 
    sectionPlayer.classList.toggle('active'); 
}

