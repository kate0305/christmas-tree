const audio = new Audio();
let isPlay = false;

export default function playSong() {
  const audioBtn = document.querySelector('.music') as HTMLElement;
  if (!isPlay) {
    audio.src = "./assets/audio/audio.mp3";
    audioBtn.classList.add('play');
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    audioBtn.classList.remove('play');
    isPlay = false;
  }
}