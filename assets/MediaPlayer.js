function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || []

  this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function() {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted
    },
    set mute(value) {
      this.media.muted = value
    }
  }
  this.plugins.forEach(plugin => {
    plugin.run(this)
  })
}

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
  /* if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  } */
  (this.media.paused)
    ? this.play()
    : this.pause()
};

MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}

MediaPlayer.prototype.toggleMuted = function () {
  // Funcion para quitar y poner sonido al video
  (this.media.muted)
    ? this.unmute()
    : this.mute()
}

export default MediaPlayer