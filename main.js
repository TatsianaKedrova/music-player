const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progress = document.querySelector(".progress");
const audio = document.querySelector("#audio");
const progressContainer = document.querySelector(".progress-container");
const songTitle = document.querySelector("#title");
const cover = document.querySelector("#cover");

//song titles
const songs = ["drunkInLove", "meeToo", "yonce"];

//keep track of the songs
let songIndex = 2;

loadSong(songs[songIndex]);

//initially load songs into the DOM
function loadSong(song) {
  songTitle.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
}

//event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains(".play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
