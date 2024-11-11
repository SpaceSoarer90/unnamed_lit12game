var Imported = Imported || {};
Imported.Space_LIT = true;

var Space = Space || {};        // Space's main object
Space.LIT = Space.LIT || {};      // This plugin object
Space.LIT.pluginName = "Space_LIT12";

const faceWidthNaminManigasKayoPutangina = 72;


Window_Base.prototype.lineHeight = function() {
    return 18;
};

// prettier-ignore
Window_Base.prototype.drawFace = function(
    faceName, faceIndex, x, y, width, height
) {
    width = width || ImageManager.faceWidth;
    height = height || ImageManager.faceHeight;
    const bitmap = ImageManager.loadFace(faceName);
    const pw = ImageManager.faceWidth;
    const ph = ImageManager.faceHeight;
    const sw = Math.min(width, pw);
    const sh = Math.min(height, ph);
    const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    const sx = Math.floor((faceIndex % 4) * pw + (pw - sw) / 2);
    const sy = Math.floor(Math.floor(faceIndex / 4) * ph + (ph - sh) / 2);
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
};

// face images default to 144x144
Window_Message.prototype.drawMessageFace = function() {
    const faceName = $gameMessage.faceName();
    const faceIndex = $gameMessage.faceIndex();
    const rtl = $gameMessage.isRTL();
    // const width = ImageManager.faceWidth;
    const width = faceWidthNaminManigasKayoPutangina;
    // const height = this.innerHeight;
    const height = 72;
    const x = rtl ? this.innerWidth - width - 4 : 4;
    this.drawFace(faceName, faceIndex, x, 0, width, height);
};

Window_Message.prototype.newLineX = function(textState) {
    const faceExists = $gameMessage.faceName() !== "";
    const faceWidth = faceWidthNaminManigasKayoPutangina;
    // const spacing = 20;
    const spacing = 20;
    const margin = faceExists ? faceWidth + spacing : 4;
    return textState.rtl ? this.innerWidth - margin : margin;
};

/**
 * Performs a block transfer.
 *
 * @param {Bitmap} source - The bitmap to draw.
 * @param {number} sx - The x coordinate in the source.
 * @param {number} sy - The y coordinate in the source.
 * @param {number} sw - The width of the source image.
 * @param {number} sh - The height of the source image.
 * @param {number} dx - The x coordinate in the destination.
 * @param {number} dy - The y coordinate in the destination.
 * @param {number} [dw=sw] The width to draw the image in the destination.
 * @param {number} [dh=sh] The height to draw the image in the destination.
 */
Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    dw = dw || sw;
    dh = dh || sh;
    try {
        const image = source._canvas || source._image;
        this.context.globalCompositeOperation = "source-over";
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        this._baseTexture.update();
    } catch (e) {
        //
    }
};

/*:
 * @target MZ
 * @plugindesc Permit use of _originalPattern for non-event characters.
 * @author Caethyril
 * @url https://forums.rpgmakerweb.com/threads/159233/
 * @help Free to use and/or modify for any project, no credit required.
 */
void (alias => {
    Game_CharacterBase.prototype.isOriginalPattern = function() {
      if ("_originalPattern" in this)
        return this.pattern() === this._originalPattern;
      return alias.apply(this, arguments);
    };
  })(Game_CharacterBase.prototype.isOriginalPattern);
  
  void (alias => {
    Game_CharacterBase.prototype.resetPattern = function() {
      alias.apply(this, arguments);  // better odds of cross-compatibility
      if ("_originalPattern" in this)
        this.setPattern(this._originalPattern);
    };
  })(Game_CharacterBase.prototype.resetPattern);


Space.LIT.setFrame = function(frame) {
  if (frame > 3 || frame < 0) {
    console.log("index out of bounds");
    return;
  }
  
  $gamePlayer._originalPattern = frame;
  $gamePlayer.resetPattern();
}

Space.LIT.videos = function(SceneNo) {

  if (SceneNo == "S2.1") {
    Niji.Video.load("S2.1", "Scene2Cutscene.webm", {volume: 80}) ;
    Niji.Video.scale("S2.1", 0.5, 0.5);
    Niji.Video.center("S2.1");
    Niji.Video.animate("S2.1", [
      { type: 'opacity', opacity: 0, duration: 1 }
    ]);
    Niji.Video.animate("S2.1", [
      { type: 'opacity', opacity: 1, duration: 60 }
    ]);
    Niji.Video.animate("S2.1", [
    { type: 'opacity', opacity: 1, duration: 6960 }
    ]);
    Niji.Video.animate("S2.1", [
      { type: 'opacity', opacity: 0, duration: 1 }
    ]);
    Niji.Video.play("S2.1");
  } else {
    console.log("Video does not exist!");
  } // else if () { }
}
