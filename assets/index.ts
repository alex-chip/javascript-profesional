import MediaPlayer from './MediaPlayer';
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay,
  new AutoPause(),
] });

// obteniendo los botones de controles
const play: HTMLElement = document.getElementById('play');
const mute: HTMLElement = document.getElementById('mute');


play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMuted();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}