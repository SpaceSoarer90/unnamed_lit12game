Window_Message.prototype.updatePlacement = function() {
    const goldWindow = this._goldWindow;
    this._positionType = $gameMessage.positionType();
    this.y = (this._positionType * (Graphics.boxHeight - this.height)) / 2;
    if (goldWindow) {
        goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - goldWindow.height;
    }
};

Scene_Message.prototype.messageWindowRect = function() {
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(2, false) + 8;
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = 0;
    return new Rectangle(wx, wy, ww, wh);
};