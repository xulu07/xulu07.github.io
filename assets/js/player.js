/**
 * Music Player Logic
 * For BOGUMMY⭐SHINING site
 */

const tracks = [
    {
        title: "All My Love",
        artist: "Park Bo-gum",
        cover: "assets/img/taek.jpg",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Sample music
    },
    {
        title: "Bloomin'",
        artist: "Park Bo-gum",
        cover: "assets/img/post-landscape-3.jpg",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Dear My Friend",
        artist: "Park Bo-gum",
        cover: "assets/img/taek.jpg",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

let trackIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const playerCard = document.querySelector('.player-card');
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progress = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-container');
    const title = document.getElementById('track-title');
    const artist = document.getElementById('artist-name');
    const cover = document.getElementById('player-cover');

    // Load initial track
    loadTrack(tracks[trackIndex]);

    function loadTrack(track) {
        title.innerText = track.title;
        artist.innerText = track.artist;
        cover.src = track.cover;
        audio.src = track.src;
    }

    function playSong() {
        playerCard.classList.add('playing');
        playBtn.querySelector('i').classList.replace('bi-play-fill', 'bi-pause-fill');
        audio.play();
    }

    function pauseSong() {
        playerCard.classList.remove('playing');
        playBtn.querySelector('i').classList.replace('bi-pause-fill', 'bi-play-fill');
        audio.pause();
    }

    playBtn.addEventListener('click', () => {
        const isPlaying = playerCard.classList.contains('playing');
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevBtn.addEventListener('click', () => {
        trackIndex--;
        if (trackIndex < 0) trackIndex = tracks.length - 1;
        loadTrack(tracks[trackIndex]);
        if (playerCard.classList.contains('playing')) playSong();
    });

    nextBtn.addEventListener('click', () => {
        trackIndex++;
        if (trackIndex > tracks.length - 1) trackIndex = 0;
        loadTrack(tracks[trackIndex]);
        if (playerCard.classList.contains('playing')) playSong();
    });

    audio.addEventListener('timeupdate', (e) => {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    });

    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });

    audio.addEventListener('ended', () => {
        nextBtn.click();
    });
});
