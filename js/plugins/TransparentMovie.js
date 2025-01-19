_Graphics__updateVisibility = Graphics._updateVisibility;
Graphics._updateVisibility = function(videoVisible) {
    _Graphics__updateVisibility.call(this, videoVisible);
    this._canvas.style.opacity = 1;
};