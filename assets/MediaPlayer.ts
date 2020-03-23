class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    /* if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    } */
    (this.media.paused)
      ? this.play()
      : this.pause();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMuted() {
    // Funcion para quitar y poner sonido al video
    (this.media.muted)
      ? this.unmute()
      : this.mute();
  }
}

export default MediaPlayer;
