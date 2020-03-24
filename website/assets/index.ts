import MediaPlayer from '@alex_chip/platzimediaplayer/lib/MediaPlayer';
import AutoPlay from "@alex_chip/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from '@alex_chip/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@alex_chip/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay,
  new AutoPause(),
  new Ads(),
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