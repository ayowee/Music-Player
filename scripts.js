const musicContainer = document.querySelector('.music-player');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeControl = document.getElementById('volume');

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

// Music list
const songs = [
    {
        name: 'song1',
        title: 'On & On (feat. Daniel Levi) [NCS Release]',
        artist: 'Cartoon, Jéja'
    },
    {
        name: 'song2',
        title: 'Royalty [NCS Release]',
        artist: 'Egzod, Maestro Chives, Neoni - '
    },
    {
        name: 'song3',
        title: 'BANE [NCS Release]',
        artist: 'Emin Nilsen'
    }
];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = `music/${song.name}.mp3`;
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.innerText = '⏸️';
    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.innerText = '▶️';
    audio.pause();
}

// Previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Volume control
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});
