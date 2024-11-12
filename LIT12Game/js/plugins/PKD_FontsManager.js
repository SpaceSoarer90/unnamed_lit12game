/*
 * Copyright (c) 2022 Vladimir Skrypnikov (Pheonix KageDesu)
 * <http://kdworkshop.net/>
 *

 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 */

/*:
 * @plugindesc (v.1.0)[BASIC] Fonts Manager - custom fonts and colors
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url http://kdworkshop.net/plugins/fonts-manager
 *
 * @help
 * ---------------------------------------------------------------------------
 * Help content: (below)
 * 1. How add and use custom font
 * 2. Font to Item name or Actor name
 * 3. Global fonts
 * 4. Global colors
 * 5. Global font and color both
 * 6. Custom pallete
 * 7. Extra palletes and switch between
 * ---------------------------------------------------------------------------
 * 1. How add and use custom font
 *
 *  Copy font file to project directory/fonts folder
 *  Open Plugin Parameters -> Fonts to load and add filename
 *  You should write full filname, with extension
 *  Example: myCoolFont.tff
 *
 *  Use control character \FF[X] for use your font in messages
 *      X - font index in Fonts to load list
 *  \FF[0] - return to default font
 *
 *  Alternative way \FF[myCoolFont]
 *  (supports only font names without spaces)
 * ---------------------------------------------------------------------------
 * 2. Font to Item name or Actor name
 *
 * Add to Note or Item\Weapon\Armor or Actor
 *
 * <FF:X>
 * <FF:name>
 *
 * ---------------------------------------------------------------------------
 * 3. Global fonts
 *  ! This future is expremental...not works always
 *  
 *  Set Plugin Parameter Fonts to load -> Is Global? to ON
 *
 *  Add |fX| to any text (in end) in database for change this text font
 *
 * RPG Maker will change font for any text with |fX|, where X - font index.
 * Example: Sword|f2|
 *
 * You can use this with third party plugins
 *
 * ---------------------------------------------------------------------------
 * 4. Global colors
 * ! This future is expremental...not works always
 *
 *  Same as Gloal fonts but for Colors
 *
 * Set Plugin Parameter Custom pallete -> Is Global? to ON
 *
 * Add |cX| to any text (in end) in database for change this text color
 *
 * Will change color for any text with |cX|, where X - color index.
 * Example: Sword|c2|
 *
 * You can use this with third party plugins
 * ---------------------------------------------------------------------------
 * 5. Global font and color both
 *
 * If you want change font and color in global level, use |fXcX|
 * Example: Sword|f3c1|
 *
 * ---------------------------------------------------------------------------
 * 6. Custom pallete
 * 
 * You can change default colors for character codes \C[X] to you own
 * See Plugin Parameters -> Custom pallete
 *
 * ---------------------------------------------------------------------------
 * 7. Extra palletes and switch between
 *
 *  Add more color palletes via Plugin Parameter -> More palletes
 * 
 *  And switch between then during game using script call:
 *  switchColorPallete(index);
 *
 *  index = 0 -> return to default one
 *
 * ===========================================================================

 * This is BASIC plugin version and have some restrictions:
 *    - Max. 5 custom fonts to load
 *    - Max. 1 custom user color pallete
 *    - Obfuscated code
 *    - Plugin updates with new features
 *    - Plugin usage allowed only in Non-Commercial project
 * 
 *  PRO version of plugin don't have this restrictions!
 
 * ---------------------------------------------------------------------------
 * If you like my Plugins, want more and offten updates,
 * please support me on Boosty (and get extra plugins)!
 * 
 * Boosty Page:
 *      https://boosty.to/kagedesu
 * YouTube Channel:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 *
 * You can use this plugin in your game thanks to all who supports me!
 * 

 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 *
 * @param fontsToLoad:strA
 * @type text[]
 * @text Fonts to load
 * @default []
 * @desc Filename+.ext (in fonts folder). Are available by name (\\FF[test]) (without ext.) and Index (\\FF[2], |f2|)
 * 
 * @param isGlobal:b
 * @parent fontsToLoad:strA
 * @text Is Global?
 * @type boolean
 * @on Yes, |fX| available
 * @off No
 * @default true
 * @desc RPG Maker will change font for any text with |fX|, where X - font index. Example: Sword|f2|
 * 
 * @param isAutoLoad:b
 * @parent fontsToLoad:strA
 * @text Is Auto Load?
 * @type boolean
 * @on Auto
 * @off No
 * @default false
 * @desc [PC, MAC, LINUX] Auto load fonts (fonts folder). Available only by names (uses filename without ext as font name)
 * 
 * @param spacer|defaultFonts @text‏‏‎ ‎@desc ===============================================
 * 
 * @param defaultSetup
 * @text Default Fonts
 * 
 * @param allItemsFont
 * @parent defaultSetup
 * @text Items
 * @default
 * @desc Font name for all Items (names) in game. For all default Windows.
 * 
 * @param allArmorsFont
 * @parent defaultSetup
 * @text Armors
 * @default
 * @desc Font name for all Armors (names) in game. For all default Windows.
 * 
 * @param allWeaponsFont
 * @parent defaultSetup
 * @text Weapons
 * @default
 * @desc Font name for all Weapons (names) in game. For all default Windows.
 * 
 * @param allSkillsFont
 * @parent defaultSetup
 * @text Skills
 * @default
 * @desc Font name for all Skills (names) in game. For all default Windows.
 * 
 * @param allActorNamesFont
 * @parent defaultSetup
 * @text Actor name
 * @default
 * @desc Font name for all names (Actors names) in game. For all default Windows.
 * 
 * @param allActorClassFont
 * @parent defaultSetup
 * @text Actor class
 * @default
 * @desc Font name for all classes in game. For all default Windows.
 * 
 * @param allActorNickFont
 * @parent defaultSetup
 * @text Actor nickname
 * @default
 * @desc Font name for nicknames in game. For all default Windows.
 * 
 * @param allActorLevelFont
 * @parent defaultSetup
 * @text Actor level
 * @default
 * @desc Font name for level in game. For all default Windows.
 * 
 * @param spacer|colors @text‏‏‎ ‎@desc ===============================================
 * 
 * @param pallete:strA
 * @type text[]
 * @text Custom pallete
 * @default []
 * @desc Colors (hex) for replace \C[X]. Availble by Index. Example: #ba1a8f
 * 
 * @param userPalletes:structA
 * @parent pallete:strA
 * @type struct<Pallete>[]
 * @text More palletes
 * @default []
 * @desc You can switch palletes in game, script call: switchColorPallete(index);
 * 
 * @param isGlobalColors:b
 * @parent pallete:strA
 * @text Is Global?
 * @type boolean
 * @on Yes, |cX| available
 * @off No
 * @default true
 * @desc Will change color for any text with |cX|, where X - color index. Example: Sword|c2|
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 */
/*:ru
 * @plugindesc (v.1.0)[BASIC] Использование разных шрифтов
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url http://kdworkshop.net/plugins/fonts-manager
 *
 * @help
 * ---------------------------------------------------------------------------
 * Разделы помощи: (ниже)
 * 1. Как добавить свой шрифт
 * 2. Задать шрифт через заметку
 * 3. Глобальный символ
 * 4. Глобальные цвета
 * 5. Глобальная пара (цвет и шрифт)
 * 6. Палитры цветов
 * 7. Доп. палитры и переключение между ними
 * ---------------------------------------------------------------------------
 * 1. Как добавить свой шрифт
 *
 *  Поместите файл шрифта в папку fonts    
 *  Откройте параметры плагина -> Fonts to load и добавьте ваши файлы
 *  Вписывать нужно полное имя файла с расширением
 *  Пример: myCoolFont.tff
 *
 *  Исп. символ \FF[X] для активации шрифта в сообщении
 *      X - номер шрифта из параметра Fonts to load
 *  \FF[0] - переключиться на стандартный шрифт
 *
 *  Альтернативый вариант: \FF[myCoolFont]
 *  (поддерживает только имена шрифтов без пробелов)
 * ---------------------------------------------------------------------------
 * 2. Задать шрифт через заметку
 *
 * Заметки для оружия, брони, предметов или персонажа (имя)
 *
 * <FF:номер шрифта>
 * <FF:имя шрифта>
 *
 * ---------------------------------------------------------------------------
 * 3. Глобальный символ
 *  ! Возможны сбои в работе в некоторых местах или плагинах
 *  
 *  Установите параметр плагина Fonts to load -> Is Global? на ВКЛ.
 *
 *  Добавьте |fX| к любому слову (в конец) в базе данных для смены шрифта
 *
 * RPG Maker будет везде менять шрифта текста с символом |fX|, где X - номер шрифта.
 * Пример: Меч|f2|
 *
 * Данный метод может работать и со сторонними плагинами
 *
 * ---------------------------------------------------------------------------
 * 4. Глобальные цвета
 * ! Возможны сбои в работе в некоторых местах или плагинах
 *
 *  Аналогично глобальному символу шрифтов, только для цвета
 *
 * Установите параметр плагина Custom pallete -> Is Global? на ВКЛ.
 *
 * Добавьте |cX| к любому слову (в конец) в базе данных для смены цвета
 *
 * RPG Maker будет везде менять цвет текста с символом |cX|, где X - номер цвета.
 * Пример: Меч|c2|
 *
 * Данный метод может работать и со сторонними плагинами
 * ---------------------------------------------------------------------------
 * 5. Глобальная пара (цвет и шрифт)
 *
 * Если хотите совместить шрифт и цвет, исп. |fXcX|
 * Пример: Меч|f3c1|
 *
 * ---------------------------------------------------------------------------
 * 6. Палитры цветов
 * 
 * Можно заменить стандартные цвета, исп. при символе \C[X] на собственные
 * См. параметры плагина -> Custom pallete
 *
 * ---------------------------------------------------------------------------
 * 7. Доп. палитры и переключение между ними
 *
 *  Можно добавить палитры через параметр плагина -> More palletes
 * 
 *  Для смены цветовых палитр во время игры, исп. вызов скрипта:
 *  switchColorPallete(индекс);
 *
 *  индекс = 0 -> стандартная цветовая палитра
 *
 * ===========================================================================

 * Это [BASIC] (базовая) версия плагина и имеет некоторые ограничения:
 *    - Макс. количество шрифтов: 5
 *    - Макс. количество цветовых палитр: 1
 *    - Обфусцированный код
 *    - Обновления плагина с новыми функциями и контентом
 *    - ЗАПРЕЩЕНО использовать плагин в коммерческих проектах
 * 
 *  [PRO] версия плагина не имеет данных ограничений!
 
 * ---------------------------------------------------------------------------
 * Если Вам нравятся мои плагины, поддержите меня на Boosty!
 * 
 * Boosty Page:
 *      https://boosty.to/kagedesu
 * YouTube Channel:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 * 

 * Лицензия: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 *
 * @param fontsToLoad:strA
 * @type text[]
 * @text Fonts to load
 * @default []
 * @desc Имя файла полностью (из папки fonts). Исп. (\\FF[имя]) (без разр.) или по индексу (\\FF[2], |f2|)
 * 
 * @param isGlobal:b
 * @parent fontsToLoad:strA
 * @text Is Global?
 * @type boolean
 * @on Да
 * @off Нет
 * @default true
 * @desc Использовать символ для смены шрифта |fX|, где X - номер шрифта. Пример: Sword|f2|
 * 
 * @param isAutoLoad:b
 * @parent fontsToLoad:strA
 * @text Is Auto Load?
 * @type boolean
 * @on Авто
 * @off Нет
 * @default false
 * @desc [PC, MAC, LINUX] Автозагрузка шрифтов (из папки fonts). Доступность по именам.
 * 
 * @param spacer|defaultFonts @text‏‏‎ ‎@desc ===============================================
 * 
 * @param defaultSetup
 * @text Default Fonts
 * 
 * @param allItemsFont
 * @parent defaultSetup
 * @text Items
 * @default
 * @desc Имя шрифта для всех предметов в игре. Для всех стандартных окон.
 * 
 * @param allArmorsFont
 * @parent defaultSetup
 * @text Armors
 * @default
 * @desc Имя шрифта для всей брони в игре. Для всех стандартных окон.
 * 
 * @param allWeaponsFont
 * @parent defaultSetup
 * @text Weapons
 * @default
 * @desc Имя шрифта для всего оружия в игре. Для всех стандартных окон.
 * 
 * @param allSkillsFont
 * @parent defaultSetup
 * @text Skills
 * @default
 * @desc Имя шрифта для всех навыков в игре. Для всех стандартных окон.
 * 
 * @param allActorNamesFont
 * @parent defaultSetup
 * @text Actor name
 * @default
 * @desc Имя шрифта для имён персонажей в игре. Для всех стандартных окон.
 * 
 * @param allActorClassFont
 * @parent defaultSetup
 * @text Actor class
 * @default
 * @desc Имя шрифта для названия классов в игре. Для всех стандартных окон.
 * 
 * @param allActorNickFont
 * @parent defaultSetup
 * @text Actor nickname
 * @default
 * @desc Имя шрифта для псевдонимов персонажей в игре. Для всех стандартных окон.
 * 
 * @param allActorLevelFont
 * @parent defaultSetup
 * @text Actor level
 * @default
 * @desc Имя шрифта для текста уровня персонажей в игре. Для всех стандартных окон.
 * 
 * @param spacer|colors @text‏‏‎ ‎@desc ===============================================
 * 
 * @param pallete:strA
 * @type text[]
 * @text Custom pallete
 * @default []
 * @desc Цвета (HEX формат) на замену станадртных номеров \C[X]. Пример: #ba1a8f
 * 
 * @param userPalletes:structA
 * @parent pallete:strA
 * @type struct<Pallete>[]
 * @text More palletes
 * @default []
 * @desc Можно менять палитры в игре, вызов скрипта: switchColorPallete(index);
 * 
 * @param isGlobalColors:b
 * @parent pallete:strA
 * @text Is Global?
 * @type boolean
 * @on Да
 * @off Нет
 * @default true
 * @desc Разрешить смену цвета символом |cX|, где X - номер цвета. Пример: Sword|c2|
 * 
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 */
/*~struct~Pallete:
* @param pallete:strA
* @type text[]
* @text Pallete
* @default []
* @desc Colors (hex) for replace \\C[X]. Availble by Index. Example: #ba1a8f
*/



var Imported = Imported || {};
Imported.PKD_FontsManager = true;

window.PKD_FTSM = {};

var PKD_FTSM = {};
PKD_FTSM.Version = 100;

//?VERSION
PKD_FTSM.isPro = function() { return false; };

// * For parameters
PKD_FTSM.PP = {};
PKD_FTSM.Utils = {};

// * Загрзука параметров
PKD_FTSM.LoadPluginSettings = () => {
    PKD_FTSM.PP._loader = new KDParamLoaderLite("PKD_FontsManager");
};

PKD_FTSM.LoadAllFonts = () => {
    try {
        let list = PKD_FTSM.PP.fontsToLoad();
        for (const i of list) {
            PKD_FTSM.Utils.loadFont(i);
        }
    } catch (e) {
        console.warn(e);
    }
};



//------------------------------------------------------------------------------
//FontLoader_NWJS

//[ENCODE]

var FontLoader_NWJS = function () {
    throw new Error('This is a static class');
};
FontLoader_NWJS.init = function () {
    var fs = require('fs');
    this._files = fs.readdirSync(this.localFileDirectoryPath());
    this._ready = false;
};

FontLoader_NWJS.isReady = function () {
    return (this._ready == true);
};

FontLoader_NWJS.loadAll = function () {
    if (FontLoader_NWJS.isReady()) return;
    for (var i = 0; i < this._files.length; i++) {
        let filename  = this._files[i];
        console.log("[Auto] Try load font file: " + filename);
        PKD_FTSM.Utils.loadFont(filename);
    }
    this._ready = true;
};

FontLoader_NWJS._localFileDirectoryPath = null;
FontLoader_NWJS.localFileDirectoryPath = function () {
    if (this._localFileDirectoryPath == null) {
        const path = require('path');
        const base = path.dirname(process.mainModule.filename);
        this._localFileDirectoryPath = path.join(base, 'fonts/');
    }
    return this._localFileDirectoryPath;
};

window.FontLoader_NWJS = FontLoader_NWJS;

//END FontLoader_NWJS
//------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ FontManager.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    // * RPG Maker MV not have FontManager (from MZ)
    
    //[ENCODE]

    if(window.FontManager || !Utils.RPGMAKER_NAME.contains("MV")) {
        return;
    }

    function FontManager() {
        throw new Error("This is a static class");
    }

    FontManager._urls = {};
    FontManager._states = {};

    FontManager.load = function(family, filename) {
        if (this._states[family] !== "loaded") {
            if (filename) {
                const url = this.makeUrl(filename);
                this.startLoading(family, url);
            } else {
                this._urls[family] = "";
                this._states[family] = "loaded";
            }
        }
    };

    FontManager.isReady = function() {
        for (const family in this._states) {
            const state = this._states[family];
            if (state === "loading") {
                return false;
            }
            if (state === "error") {
                this.throwLoadError(family);
            }
        }
        return true;
    };

    FontManager.startLoading = function(family, url) {
        const source = "url(" + url + ")";
        const font = new FontFace(family, source);
        this._urls[family] = url;
        this._states[family] = "loading";
        font.load()
            .then(() => {
                document.fonts.add(font);
                this._states[family] = "loaded";
                return 0;
            })
            .catch(() => {
                this._states[family] = "error";
            });
    };

    FontManager.throwLoadError = function(family) {
        const url = this._urls[family];
        const retry = () => this.startLoading(family, url);
        throw ["LoadError", url, retry];
    };

    FontManager.makeUrl = function(filename) {
        return "fonts/" + Utils.encodeURI(filename);
    };

    Utils.encodeURI = function(str) {
        return encodeURIComponent(str).replace(/%2F/g, "/");
    };

    window.FontManager = FontManager;

})();
// ■ END FontManager.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////

function _0x183b() {
    var _0x2f2d52 = [
        '\x41\x51\x67\x4b\x6b',
        '\x69\x73\x47\x6c\x6f\x62\x61\x6c',
        '\x39\x31\x30\x39\x36\x38\x76\x72\x61\x67\x68\x63',
        '\x5f\x5f\x70\x72\x65\x76\x43\x6f\x6c\x6f\x72',
        '\x66\x61\x63\x65',
        '\x55\x43\x56\x6a\x51',
        '\x67\x65\x74\x50\x72\x6f\x70\x65\x72\x43\x6f\x6c\x6f\x72\x42\x79\x49\x6e\x64\x65\x78',
        '\x68\x77\x49\x41\x4a',
        '\x6f\x70\x52\x53\x6e',
        '\x31\x39\x34\x33\x32\x30\x4d\x70\x70\x4e\x64\x58',
        '\x70\x45\x78\x74\x72\x61\x63\x74\x43\x6f\x6c\x6f\x72\x49\x6e\x64\x65\x78',
        '\x42\x67\x64\x5a\x42',
        '\x66\x6f\x6e\x74\x46\x61\x63\x65',
        '\x62\x70\x4b\x59\x53',
        '\x70\x47\x65\x74\x4e\x65\x77\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61',
        '\x53\x56\x64\x66\x6f',
        '\x77\x61\x72\x6e',
        '\x73\x54\x6d\x75\x6e',
        '\x6d\x61\x74\x63\x68',
        '\x5f\x5f\x70\x72\x65\x76\x46\x6f\x6e\x74',
        '\x70\x43\x68\x65\x63\x6b\x47\x6c\x6f\x62\x61\x6c\x43\x6f\x6c\x6f\x72',
        '\x70\x47\x65\x74\x46\x6f\x6e\x74\x4e\x61\x6d\x65',
        '\x32\x32\x38\x36\x30\x74\x6d\x53\x67\x63\x61',
        '\x64\x72\x61\x77\x54\x65\x78\x74',
        '\x73\x76\x78\x70\x4e',
        '\x70\x43\x68\x61\x6e\x67\x65\x46\x6f\x6e\x74\x46\x6f\x72\x63\x65',
        '\x77\x77\x7a\x6f\x59',
        '\x66\x75\x6a\x53\x6c',
        '\x65\x51\x69\x78\x57',
        '\x6f\x44\x65\x4e\x6b',
        '\x67\x65\x74\x46\x6f\x6e\x74\x4e\x61\x6d\x65\x42\x79\x49\x6e\x64\x65\x78',
        '\x72\x65\x70\x6c\x61\x63\x65',
        '\x63\x6f\x6c\x6f\x72',
        '\x70\x43\x68\x65\x63\x6b\x47\x6c\x6f\x62\x61\x6c\x50\x61\x69\x72',
        '\x59\x57\x57\x51\x4f',
        '\x31\x33\x33\x36\x36\x34\x30\x66\x69\x68\x41\x57\x4c',
        '\x33\x39\x38\x35\x37\x33\x4c\x75\x42\x7a\x67\x51',
        '\x45\x45\x6b\x6a\x70',
        '\x75\x53\x57\x71\x72',
        '\x31\x30\x30\x32\x31\x32\x51\x50\x6b\x73\x46\x63',
        '\x31\x37\x35\x50\x42\x71\x54\x56\x44',
        '\x67\x64\x57\x6d\x6f',
        '\x74\x6f\x53\x74\x72\x69\x6e\x67',
        '\x37\x36\x34\x33\x37\x30\x63\x66\x62\x6c\x45\x6a',
        '\x70\x43\x68\x65\x63\x6b\x47\x6c\x6f\x62\x61\x6c\x46\x6f\x6e\x74',
        '\x6c\x65\x67\x61\x63\x79',
        '\x70\x43\x68\x61\x6e\x67\x65\x43\x6f\x6c\x6f\x72\x46\x6f\x72\x63\x65',
        '\x74\x65\x78\x74',
        '\x33\x4c\x4a\x69\x59\x75\x59',
        '\x70\x45\x78\x74\x72\x61\x63\x74\x46\x6f\x6e\x74\x49\x6e\x64\x65\x78',
        '\x69\x6e\x63\x6c\x75\x64\x65\x73',
        '\x74\x65\x78\x74\x43\x6f\x6c\x6f\x72',
        '\x67\x73\x45\x79\x71',
        '\x63\x65\x63\x46\x56',
        '\x70\x43\x68\x65\x63\x6b\x47\x6c\x6f\x62\x61\x6c\x73',
        '\x70\x42\x65\x66\x6f\x72\x65\x47\x6c\x6f\x62\x61\x6c',
        '\x55\x74\x69\x6c\x73',
        '\x69\x73\x47\x6c\x6f\x62\x61\x6c\x43\x6f\x6c\x6f\x72\x73',
        '\x70\x41\x66\x74\x65\x72\x47\x6c\x6f\x62\x61\x6c',
        '\x44\x4d\x77\x66\x46',
        '\x65\x49\x69\x44\x6d'
    ];
    _0x183b = function () {
        return _0x2f2d52;
    };
    return _0x183b();
}
function _0x1abc(_0x58d23e, _0x49a78f) {
    var _0x183bb8 = _0x183b();
    return _0x1abc = function (_0x1abc50, _0x4f49f4) {
        _0x1abc50 = _0x1abc50 - 0x112;
        var _0x5aa77a = _0x183bb8[_0x1abc50];
        return _0x5aa77a;
    }, _0x1abc(_0x58d23e, _0x49a78f);
}
(function (_0x2edbaa, _0x2c5296) {
    var _0x4781df = _0x1abc, _0x445fe7 = _0x2edbaa();
    while (!![]) {
        try {
            var _0x5ac5c1 = parseInt(_0x4781df(0x147)) / 0x1 + parseInt(_0x4781df(0x128)) / 0x2 + parseInt(_0x4781df(0x131)) / 0x3 * (-parseInt(_0x4781df(0x140)) / 0x4) + -parseInt(_0x4781df(0x129)) / 0x5 * (-parseInt(_0x4781df(0x117)) / 0x6) + parseInt(_0x4781df(0x125)) / 0x7 + -parseInt(_0x4781df(0x124)) / 0x8 + parseInt(_0x4781df(0x12c)) / 0x9;
            if (_0x5ac5c1 === _0x2c5296)
                break;
            else
                _0x445fe7['push'](_0x445fe7['shift']());
        } catch (_0x39825f) {
            _0x445fe7['push'](_0x445fe7['shift']());
        }
    }
}(_0x183b, 0x1e797), (function () {
    var _0x29f6f0 = _0x1abc, _0x232c61, _0x4fa25e;
    _0x4fa25e = Bitmap['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'], _0x232c61 = _0x4fa25e[_0x29f6f0(0x118)], _0x4fa25e[_0x29f6f0(0x118)] = function (_0x387795, _0x2e0cdd, _0x6cbb61, _0x1928e1, _0x5cf1f7, _0x170986) {
        var _0x28c0d0 = _0x29f6f0;
        this[_0x28c0d0(0x138)](), _0x387795 = this[_0x28c0d0(0x137)](_0x387795), _0x232c61['\x63\x61\x6c\x6c'](this, _0x387795, _0x2e0cdd, _0x6cbb61, _0x1928e1, _0x5cf1f7, _0x170986), this[_0x28c0d0(0x13b)]();
    }, _0x4fa25e[_0x29f6f0(0x137)] = function (_0x4a55d1) {
        var _0x1f8764 = _0x29f6f0, _0x9c0e7a;
        try {
            if (_0x1f8764(0x126) !== '\x64\x6d\x6e\x6e\x74') {
                if (PKD_FTSM[_0x1f8764(0x12e)]) {
                    if (_0x1f8764(0x146) !== _0x1f8764(0x149))
                        return _0x4a55d1;
                    else {
                        var _0x55b888, _0x5818f3, _0x1e3004;
                        try {
                            _0x1e3004 = this[_0x1f8764(0x148)](_0x2f2b0b), _0x55b888 = _0x542bd5[_0x1f8764(0x139)]['\x67\x65\x74\x50\x72\x6f\x70\x65\x72\x43\x6f\x6c\x6f\x72\x42\x79\x49\x6e\x64\x65\x78'](_0x1e3004);
                            if (_0x55b888 != null)
                                return _0x4e6ba7 = _0xb3793e[_0x1f8764(0x120)](/\|c\d+\|/, ''), {
                                    '\x63\x6f\x6c\x6f\x72': _0x55b888,
                                    '\x74\x65\x78\x74': _0x3d430e
                                };
                        } catch (_0x400ebe) {
                            _0x5818f3 = _0x400ebe, _0x118618[_0x1f8764(0x14e)](_0x5818f3);
                        }
                        return null;
                    }
                }
                PKD_FTSM['\x50\x50'][_0x1f8764(0x13f)]() && PKD_FTSM['\x50\x50'][_0x1f8764(0x13a)]() && (_0x4a55d1 = this[_0x1f8764(0x122)](_0x4a55d1)), PKD_FTSM['\x50\x50'][_0x1f8764(0x13f)]() && (_0x4a55d1 = this[_0x1f8764(0x12d)](_0x4a55d1)), PKD_FTSM['\x50\x50'][_0x1f8764(0x13a)]() && (_0x4a55d1 = this[_0x1f8764(0x115)](_0x4a55d1));
            } else
                _0x552285 = _0x2573ac, _0x26a439[_0x1f8764(0x14e)](_0x24e768);
        } catch (_0x48f81a) {
            if (_0x1f8764(0x119) === '\x73\x76\x78\x70\x4e')
                _0x9c0e7a = _0x48f81a, console[_0x1f8764(0x14e)](_0x9c0e7a);
            else {
                var _0x45d68f, _0x4e4bdf;
                try {
                    this[_0x1f8764(0x114)] = this[_0x1f8764(0x14a)], _0x4e4bdf = this[_0x1f8764(0x116)](_0x26d8c2), _0x4e4bdf != null && (this[_0x1f8764(0x14a)] = _0x4e4bdf['\x66\x61\x63\x65'], _0xb4cfa6 = _0x4e4bdf[_0x1f8764(0x130)]);
                } catch (_0x4b9e2a) {
                    _0x45d68f = _0x4b9e2a, _0x3438e2[_0x1f8764(0x14e)](_0x45d68f);
                }
                return _0x4df9ef;
            }
        }
        return _0x4a55d1;
    }, _0x4fa25e[_0x29f6f0(0x138)] = function () {
        var _0x4ef147 = _0x29f6f0;
        '\x55\x5a\x64\x69\x43' !== '\x49\x4a\x61\x52\x53' ? (this['\x5f\x5f\x70\x72\x65\x76\x46\x6f\x6e\x74'] = null, this[_0x4ef147(0x141)] = null) : (this['\x5f\x5f\x70\x72\x65\x76\x46\x6f\x6e\x74'] && (this[_0x4ef147(0x14a)] = this[_0x4ef147(0x114)]), this[_0x4ef147(0x141)] && (this[_0x4ef147(0x134)] = this[_0x4ef147(0x141)]));
    }, _0x4fa25e[_0x29f6f0(0x13b)] = function () {
        var _0x280556 = _0x29f6f0;
        if (_0x280556(0x11e) !== '\x44\x43\x51\x74\x6a') {
            if (this[_0x280556(0x114)]) {
                if (_0x280556(0x12a) === _0x280556(0x12a))
                    this[_0x280556(0x14a)] = this[_0x280556(0x114)];
                else
                    return _0x225b42;
            }
            this[_0x280556(0x141)] && (this[_0x280556(0x134)] = this['\x5f\x5f\x70\x72\x65\x76\x43\x6f\x6c\x6f\x72']);
        } else
            _0x4738c4 = this[_0x280556(0x12d)](_0x5b6413);
    }, _0x4fa25e[_0x29f6f0(0x122)] = function (_0xcb3fc9) {
        var _0x1ec456 = _0x29f6f0;
        if ('\x62\x70\x4b\x59\x53' !== _0x1ec456(0x14b))
            this[_0x1ec456(0x141)] = this[_0x1ec456(0x134)], _0x5b6b3a = this[_0x1ec456(0x14c)](_0x22fdd5), _0x9d208e != null && (this[_0x1ec456(0x134)] = _0x34f47b['\x63\x6f\x6c\x6f\x72'], _0x18a337 = _0x2adead['\x74\x65\x78\x74']);
        else {
            var _0x415fd2, _0x1d3d7c, _0x8748d8;
            return _0xcb3fc9 != null && _0xcb3fc9[_0x1ec456(0x12b)]()[_0x1ec456(0x133)]('\x7c\x66') && _0xcb3fc9[_0x1ec456(0x12b)]()[_0x1ec456(0x133)]('\x63') && (_0x8748d8 = _0xcb3fc9['\x6d\x61\x74\x63\x68'](/\|f(\d+)c(\d+)\|/), _0x8748d8 != null && (_0x1d3d7c = _0x8748d8[0x1], _0x415fd2 = _0x8748d8[0x2], _0xcb3fc9 = _0xcb3fc9[_0x1ec456(0x120)](/\|f(\d+)c(\d+)\|/, ''), _0xcb3fc9 += '\x7c\x66' + _0x1d3d7c + '\x7c', _0xcb3fc9 = this[_0x1ec456(0x11a)](_0xcb3fc9), _0xcb3fc9 += '\x7c\x63' + _0x415fd2 + '\x7c', _0xcb3fc9 = this[_0x1ec456(0x12f)](_0xcb3fc9))), _0xcb3fc9;
        }
    }, _0x4fa25e[_0x29f6f0(0x12d)] = function (_0x1d2c66) {
        var _0xb85215 = _0x29f6f0;
        return _0x1d2c66 != null && _0x1d2c66[_0xb85215(0x12b)]()[_0xb85215(0x133)]('\x7c\x66') && (_0x1d2c66 = this['\x70\x43\x68\x61\x6e\x67\x65\x46\x6f\x6e\x74\x46\x6f\x72\x63\x65'](_0x1d2c66)), _0x1d2c66;
    }, _0x4fa25e[_0x29f6f0(0x11a)] = function (_0x1006af) {
        var _0x119d4d = _0x29f6f0;
        if ('\x47\x50\x4d\x4d\x62' !== _0x119d4d(0x13c)) {
            var _0x20274f, _0x1cf26e;
            try {
                this[_0x119d4d(0x114)] = this[_0x119d4d(0x14a)], _0x1cf26e = this[_0x119d4d(0x116)](_0x1006af), _0x1cf26e != null && (this[_0x119d4d(0x14a)] = _0x1cf26e[_0x119d4d(0x142)], _0x1006af = _0x1cf26e[_0x119d4d(0x130)]);
            } catch (_0x55529f) {
                _0x20274f = _0x55529f, console[_0x119d4d(0x14e)](_0x20274f);
            }
            return _0x1006af;
        } else {
            var _0x3bb0c8, _0x49b432, _0x440595;
            try {
                return _0x440595 = _0x43af[_0x119d4d(0x113)](/\|f(\d+)\|/), _0x49b432 = _0x5e6f15(_0x440595[0x1]), _0x49b432;
            } catch (_0x3c62db) {
                _0x3bb0c8 = _0x3c62db, _0x2fad3e[_0x119d4d(0x14e)](_0x3bb0c8);
            }
            return 0x0;
        }
    }, _0x4fa25e[_0x29f6f0(0x115)] = function (_0x32aa09) {
        var _0x313c20 = _0x29f6f0;
        if (_0x313c20(0x13e) !== _0x313c20(0x13e))
            _0x3bad0a = _0x2af8c4[_0x313c20(0x113)](/\|f(\d+)c(\d+)\|/), _0x1650b8 != null && (_0x4f59cf = _0x565215[0x1], _0x2eb384 = _0x1a0e69[0x2], _0xed05b1 = _0x1675c4['\x72\x65\x70\x6c\x61\x63\x65'](/\|f(\d+)c(\d+)\|/, ''), _0x2e1d02 += '\x7c\x66' + _0x52988a + '\x7c', _0x24b499 = this[_0x313c20(0x11a)](_0x504f08), _0x9dd375 += '\x7c\x63' + _0x196208 + '\x7c', _0x3c7e13 = this[_0x313c20(0x12f)](_0x45420b));
        else
            return _0x32aa09 != null && _0x32aa09[_0x313c20(0x12b)]()[_0x313c20(0x133)]('\x7c\x63') && (_0x32aa09 = this[_0x313c20(0x12f)](_0x32aa09)), _0x32aa09;
    }, _0x4fa25e[_0x29f6f0(0x12f)] = function (_0x2fb2cf) {
        var _0x281119 = _0x29f6f0;
        if ('\x68\x77\x49\x41\x4a' !== _0x281119(0x145))
            _0x1d9590 = this[_0x281119(0x12f)](_0x71d9);
        else {
            var _0x1f4277, _0x48f70e;
            try {
                if (_0x281119(0x127) === _0x281119(0x143)) {
                    _0x4421b2 = this[_0x281119(0x148)](_0x355397), _0x2300cb = _0x27c69c[_0x281119(0x139)]['\x67\x65\x74\x50\x72\x6f\x70\x65\x72\x43\x6f\x6c\x6f\x72\x42\x79\x49\x6e\x64\x65\x78'](_0x50669b);
                    if (_0x4f89fe != null)
                        return _0x2e4dc3 = _0x2b5168[_0x281119(0x120)](/\|c\d+\|/, ''), {
                            '\x63\x6f\x6c\x6f\x72': _0x34012b,
                            '\x74\x65\x78\x74': _0x4663f9
                        };
                } else
                    this[_0x281119(0x141)] = this['\x74\x65\x78\x74\x43\x6f\x6c\x6f\x72'], _0x1f4277 = this['\x70\x47\x65\x74\x4e\x65\x77\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61'](_0x2fb2cf), _0x1f4277 != null && (this[_0x281119(0x134)] = _0x1f4277[_0x281119(0x121)], _0x2fb2cf = _0x1f4277[_0x281119(0x130)]);
            } catch (_0x485c51) {
                _0x281119(0x123) !== _0x281119(0x123) ? (_0x22cf51 = _0xe8271b, _0x51cb32[_0x281119(0x14e)](_0x2ff278)) : (_0x48f70e = _0x485c51, console[_0x281119(0x14e)](_0x48f70e));
            }
            return _0x2fb2cf;
        }
    }, _0x4fa25e['\x70\x47\x65\x74\x46\x6f\x6e\x74\x4e\x61\x6d\x65'] = function (_0x1ab6c3) {
        var _0x5f295e = _0x29f6f0;
        if (_0x5f295e(0x11b) === _0x5f295e(0x112))
            _0x1f34bf = _0xc63e65, _0x2ff561[_0x5f295e(0x14e)](_0x49a33d);
        else {
            var _0x2f10a7, _0x26f4d2, _0x459a28;
            try {
                if (_0x5f295e(0x14d) !== _0x5f295e(0x14d))
                    this[_0x5f295e(0x14a)] = _0x1d7138['\x66\x61\x63\x65'], _0x23e1bb = _0x46566d[_0x5f295e(0x130)];
                else {
                    _0x459a28 = this[_0x5f295e(0x132)](_0x1ab6c3);
                    if (_0x459a28 > 0x0) {
                        if (_0x5f295e(0x135) === _0x5f295e(0x135)) {
                            _0x26f4d2 = PKD_FTSM['\x50\x50'][_0x5f295e(0x11f)](_0x459a28);
                            if (_0x26f4d2 != null)
                                return _0x1ab6c3 = _0x1ab6c3[_0x5f295e(0x120)](/\|f\d+\|/, ''), {
                                    '\x66\x61\x63\x65': _0x26f4d2,
                                    '\x74\x65\x78\x74': _0x1ab6c3
                                };
                        } else
                            _0x2d4702 = _0x470d32, _0x2666bc[_0x5f295e(0x14e)](_0x518f9e);
                    }
                }
            } catch (_0x93a2ff) {
                if (_0x5f295e(0x136) !== _0x5f295e(0x136))
                    return _0x355402 != null && _0x5f4160[_0x5f295e(0x12b)]()[_0x5f295e(0x133)]('\x7c\x63') && (_0x43f660 = this[_0x5f295e(0x12f)](_0x36d0a3)), _0x49bae2;
                else
                    _0x2f10a7 = _0x93a2ff, console[_0x5f295e(0x14e)](_0x2f10a7);
            }
            return null;
        }
    }, _0x4fa25e[_0x29f6f0(0x14c)] = function (_0x534cd2) {
        var _0x3bd3ba = _0x29f6f0;
        if (_0x3bd3ba(0x11d) === _0x3bd3ba(0x13d)) {
            var _0x5a88f8, _0x2e5fc0;
            try {
                this['\x5f\x5f\x70\x72\x65\x76\x43\x6f\x6c\x6f\x72'] = this['\x74\x65\x78\x74\x43\x6f\x6c\x6f\x72'], _0x5a88f8 = this[_0x3bd3ba(0x14c)](_0x38c745), _0x5a88f8 != null && (this[_0x3bd3ba(0x134)] = _0x5a88f8[_0x3bd3ba(0x121)], _0x15ca75 = _0x5a88f8[_0x3bd3ba(0x130)]);
            } catch (_0x276407) {
                _0x2e5fc0 = _0x276407, _0x21152b[_0x3bd3ba(0x14e)](_0x2e5fc0);
            }
            return _0x3de5de;
        } else {
            var _0x18585a, _0x8559ef, _0xf09919;
            try {
                _0xf09919 = this[_0x3bd3ba(0x148)](_0x534cd2), _0x18585a = PKD_FTSM[_0x3bd3ba(0x139)][_0x3bd3ba(0x144)](_0xf09919);
                if (_0x18585a != null)
                    return _0x534cd2 = _0x534cd2['\x72\x65\x70\x6c\x61\x63\x65'](/\|c\d+\|/, ''), {
                        '\x63\x6f\x6c\x6f\x72': _0x18585a,
                        '\x74\x65\x78\x74': _0x534cd2
                    };
            } catch (_0x7fe44f) {
                _0x8559ef = _0x7fe44f, console[_0x3bd3ba(0x14e)](_0x8559ef);
            }
            return null;
        }
    }, _0x4fa25e[_0x29f6f0(0x148)] = function (_0x25693e) {
        var _0x30edbe = _0x29f6f0, _0x55ed12, _0x5e7558, _0x1a3dd7;
        try {
            return _0x1a3dd7 = _0x25693e[_0x30edbe(0x113)](/\|c(\d+)\|/), _0x5e7558 = parseInt(_0x1a3dd7[0x1]), _0x5e7558;
        } catch (_0x56a221) {
            _0x55ed12 = _0x56a221, console['\x77\x61\x72\x6e'](_0x55ed12);
        }
        return 0x0;
    }, _0x4fa25e['\x70\x45\x78\x74\x72\x61\x63\x74\x46\x6f\x6e\x74\x49\x6e\x64\x65\x78'] = function (_0x3488eb) {
        var _0x1adddc = _0x29f6f0, _0x496b68, _0x4d807e, _0xe30b5d;
        try {
            if ('\x42\x59\x62\x54\x54' !== '\x42\x59\x62\x54\x54')
                _0x2a5a33 = _0x25c252[0x1], _0x3f5e54 = _0x508e95[0x2], _0x5f29ae = _0x278c7f[_0x1adddc(0x120)](/\|f(\d+)c(\d+)\|/, ''), _0x55cbe4 += '\x7c\x66' + _0x2cff75 + '\x7c', _0x3ddc6d = this['\x70\x43\x68\x61\x6e\x67\x65\x46\x6f\x6e\x74\x46\x6f\x72\x63\x65'](_0x29ee63), _0x4168ea += '\x7c\x63' + _0x278660 + '\x7c', _0x2929ca = this[_0x1adddc(0x12f)](_0x40ae34);
            else
                return _0xe30b5d = _0x3488eb['\x6d\x61\x74\x63\x68'](/\|f(\d+)\|/), _0x4d807e = parseInt(_0xe30b5d[0x1]), _0x4d807e;
        } catch (_0x42bdcb) {
            _0x1adddc(0x11c) === '\x66\x75\x6a\x53\x6c' ? (_0x496b68 = _0x42bdcb, console[_0x1adddc(0x14e)](_0x496b68)) : this[_0x1adddc(0x14a)] = this[_0x1adddc(0x114)];
        }
        return 0x0;
    };
}()));

// Generated by CoffeeScript 2.6.1
// * Класс аналог KDCore.ParamLoader, но упрощённый, чтобы всю библиотеку не тащить
var KDParamLoaderLite;

KDParamLoaderLite = (function() {
  class KDParamLoaderLite {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this.paramsRaw = PluginManager.pParametersUnsafe(this.pluginName);
      if (!this.isLoaded()) {
        return;
      }
      this.params = this.parseParameters(this.paramsRaw);
      return;
    }

    isLoaded() {
      return this.paramsRaw != null;
    }

    parseParameters(paramSet) {
      var clearKey, key, params, typeKey, value;
      params = {};
      for (key in paramSet) {
        value = paramSet[key];
        clearKey = this.parseKey(key);
        typeKey = this.parseKeyType(key);
        params[clearKey] = this.parseParamItem(typeKey, value);
      }
      return params;
    }

    parseKey(keyRaw) {
      return keyRaw.split(":")[0];
    }

    parseKeyType(keyRaw) {
      return keyRaw.split(":")[1];
    }

    // * Имя параметра без ключа
    isHasParameter(paramName) {
      if (!this.isLoaded()) {
        return false;
      } else {
        return this.params[paramName] != null;
      }
    }

    // * Возвращает значение параметра (def - по умолчанию, если не найден)
    getParam(paramName, def) {
      var value;
      if (this.isHasParameter(paramName)) {
        value = this.params[paramName];
        if (value != null) {
          return value;
        }
      }
      return def;
    }

    parseParamItem(type, item) {
      var e;
      try {
        if (type == null) {
          return item;
        }
        switch (type) {
          case "int":
          case "i":
            return Number(item);
          case "intA":
            return this.parseArray(item, "int");
          case "bool":
          case "b":
          case "e":
            return eval(item);
          case "struct":
          case "s":
            return this.parseStruct(item);
          case "structA":
            return this.parseStructArray(item);
          case "str":
            return item;
          case "strA":
            return this.parseArray(item, "str");
          case "note":
            return this.parseNote(item);
          case "css":
            if (window.KDCore != null) {
              return item.toCss();
            } else {
              return item;
            }
            return item.toCss();
          case "color":
            if (window.KDCore != null) {
              return KDCore.Color.FromHex(item);
            } else {
              return item;
            }
            break;
          default:
            return item;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        return item;
      }
    }

    parseArray(items, type) {
      var e, elements, i, len, p, parsed;
      try {
        elements = [];
        parsed = JsonEx.parse(items);
        for (i = 0, len = parsed.length; i < len; i++) {
          p = parsed[i];
          try {
            elements.push(this.parseParamItem(type, p));
          } catch (error) {
            e = error;
            console.warn(e);
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return elements;
    }

    parseStruct(item) {
      var e, parsed;
      try {
        parsed = JsonEx.parse(item);
        if (parsed != null) {
          return this.parseParameters(parsed);
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return null;
    }

    parseStructArray(items) {
      var e, elements, i, len, p, parsed;
      try {
        elements = [];
        parsed = JsonEx.parse(items);
        for (i = 0, len = parsed.length; i < len; i++) {
          p = parsed[i];
          try {
            elements.push(this.parseStruct(p));
          } catch (error) {
            e = error;
            console.warn(e);
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return elements;
    }

    parseNote(item) {
      var e, parsed;
      try {
        parsed = JsonEx.parse(item);
        if (parsed != null) {
          return parsed;
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return item;
    }

  };

  KDParamLoaderLite.Version = 100;

  return KDParamLoaderLite;

}).call(this);

(function() {  //╒═════════════════════════════════════════════════════════════════════════╛
  // ■ PluginManager.coffee
  //╒═════════════════════════════════════════════════════════════════════════╛
  //---------------------------------------------------------------------------
  var _;
  //@[DEFINES]
  _ = PluginManager;
  // * Не возвращает {}, а возвращает null, чтобы можно было проверить isLoaded
  _.pParametersUnsafe = function(name) {
    return this._parameters[name.toLowerCase()];
  };
})();

// ■ END PluginManager.coffee
//---------------------------------------------------------------------------


function _0x5cbd() {
    var _0x1fbfe8 = [
        '\x67\x65\x74\x50\x61\x72\x61\x6d',
        '\x47\x49\x72\x4d\x4f',
        '\x53\x74\x49\x52\x61',
        '\x67\x65\x74\x50\x72\x6f\x70\x65\x72\x43\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65',
        '\x38\x76\x48\x4e\x45\x53\x49',
        '\x68\x73\x71\x69\x72',
        '\x4a\x75\x6c\x42\x47',
        '\x4c\x54\x72\x67\x77',
        '\x61\x6c\x6c\x41\x72\x6d\x6f\x72\x73\x46\x6f\x6e\x74',
        '\x61\x6c\x6c\x57\x65\x61\x70\x6f\x6e\x73\x46\x6f\x6e\x74',
        '\x69\x73\x4e\x77\x6a\x73',
        '\x34\x36\x39\x38\x38\x30\x35\x35\x69\x41\x45\x41\x75\x62',
        '\x61\x58\x4b\x6a\x56',
        '\x61\x6c\x6c\x41\x63\x74\x6f\x72\x43\x6c\x61\x73\x73\x46\x6f\x6e\x74',
        '\x69\x73\x47\x6c\x6f\x62\x61\x6c',
        '\x36\x39\x39\x30\x35\x36\x30\x4e\x5a\x61\x61\x76\x46',
        '\x39\x38\x38\x39\x36\x30\x37\x6e\x46\x6c\x6f\x62\x6e',
        '\x67\x65\x74\x4e\x61\x6d\x65\x57\x69\x74\x68\x6f\x75\x74\x45\x78\x74',
        '\x38\x34\x34\x70\x78\x43\x64\x4a\x4f',
        '\x61\x6c\x6c\x41\x63\x74\x6f\x72\x4e\x69\x63\x6b\x46\x6f\x6e\x74',
        '\x63\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x55\x74\x69\x6c\x73',
        '\x57\x6f\x62\x58\x79',
        '\x67\x65\x74\x46\x6f\x6e\x74\x4e\x61\x6d\x65\x42\x79\x49\x6e\x64\x65\x78',
        '\x56\x7a\x55\x66\x66',
        '\x31\x32\x31\x30\x38\x66\x74\x77\x6b\x76\x64',
        '\x70\x61\x6c\x6c\x65\x74\x65',
        '\x61\x6c\x6c\x49\x74\x65\x6d\x73\x46\x6f\x6e\x74',
        '\x52\x4a\x54\x6f\x50',
        '\x61\x6c\x6c\x53\x6b\x69\x6c\x6c\x73\x46\x6f\x6e\x74',
        '\x67\x65\x74\x55\x73\x65\x72\x43\x6f\x6c\x6f\x72\x49\x6e\x64\x65\x78',
        '\x61\x6c\x6c\x41\x63\x74\x6f\x72\x4e\x61\x6d\x65\x73\x46\x6f\x6e\x74',
        '\x61\x6c\x6c\x41\x63\x74\x6f\x72\x4c\x65\x76\x65\x6c\x46\x6f\x6e\x74',
        '\x69\x73\x47\x6c\x6f\x62\x61\x6c\x43\x6f\x6c\x6f\x72\x73',
        '\x5f\x6c\x6f\x61\x64\x65\x72',
        '\x4b\x58\x74\x6d\x53',
        '\x66\x6f\x6e\x74\x73\x54\x6f\x4c\x6f\x61\x64',
        '\x79\x42\x56\x76\x45',
        '\x31\x37\x37\x32\x34\x50\x6e\x6e\x6b\x6c\x68',
        '\x69\x73\x41\x75\x74\x6f\x4c\x6f\x61\x64',
        '\x48\x61\x49\x73\x69',
        '\x49\x63\x66\x6a\x72',
        '\x77\x61\x72\x6e',
        '\x55\x48\x48\x59\x47',
        '\x34\x39\x31\x31\x30\x35\x36\x44\x55\x73\x59\x5a\x4e',
        '\x31\x33\x35\x37\x34\x36\x33\x72\x7a\x4d\x6f\x61\x69'
    ];
    _0x5cbd = function () {
        return _0x1fbfe8;
    };
    return _0x5cbd();
}
function _0x2bd0(_0x502c09, _0x537dc4) {
    var _0x2bd042 = _0x5cbd();
    return _0x2bd0 = function (_0xd887fa, _0x52a260) {
        _0xd887fa = _0xd887fa - 0x1b6;
        var _0x5bb9e4 = _0x2bd042[_0xd887fa];
        return _0x5bb9e4;
    }, _0x2bd0(_0x502c09, _0x537dc4);
}
(function (_0x1a07f, _0x20c6dc) {
    var _0x3b9747 = _0x2bd0, _0x4d7186 = _0x1a07f();
    while (!![]) {
        try {
            var _0x4bd21d = -parseInt(_0x3b9747(0x1d7)) / 0x1 + parseInt(_0x3b9747(0x1bb)) / 0x2 * (-parseInt(_0x3b9747(0x1c3)) / 0x3) + -parseInt(_0x3b9747(0x1d6)) / 0x4 + -parseInt(_0x3b9747(0x1b8)) / 0x5 + parseInt(_0x3b9747(0x1d0)) / 0x6 + parseInt(_0x3b9747(0x1b9)) / 0x7 * (parseInt(_0x3b9747(0x1dc)) / 0x8) + parseInt(_0x3b9747(0x1e3)) / 0x9;
            if (_0x4bd21d === _0x20c6dc)
                break;
            else
                _0x4d7186['push'](_0x4d7186['shift']());
        } catch (_0x20fcfb) {
            _0x4d7186['push'](_0x4d7186['shift']());
        }
    }
}(_0x5cbd, 0xe7f67), (function () {
    var _0xe09c67 = _0x2bd0, _0x1696ba;
    _0x1696ba = PKD_FTSM['\x50\x50'], _0x1696ba[_0xe09c67(0x1d1)] = function () {
        var _0x40e199 = _0xe09c67;
        return _0x40e199(0x1d5) === _0x40e199(0x1d5) ? Utils[_0x40e199(0x1e2)]() && this[_0x40e199(0x1cc)][_0x40e199(0x1d8)](_0x40e199(0x1d1), ![]) : this[_0x40e199(0x1cc)][_0x40e199(0x1d8)](_0x40e199(0x1bc), null);
    }, _0x1696ba[_0xe09c67(0x1ce)] = function () {
        return [];
    }, _0x1696ba[_0xe09c67(0x1b7)] = function () {
        var _0x3c4017 = _0xe09c67;
        return this[_0x3c4017(0x1cc)]['\x67\x65\x74\x50\x61\x72\x61\x6d'](_0x3c4017(0x1b7), !![]);
    }, _0x1696ba[_0xe09c67(0x1c5)] = function () {
        var _0x129a1d = _0xe09c67;
        return '\x61\x58\x4b\x6a\x56' === _0x129a1d(0x1e4) ? this[_0x129a1d(0x1cc)][_0x129a1d(0x1d8)](_0x129a1d(0x1c5), null) : this[_0x129a1d(0x1cc)][_0x129a1d(0x1d8)](_0x129a1d(0x1ca), null);
    }, _0x1696ba['\x61\x6c\x6c\x41\x72\x6d\x6f\x72\x73\x46\x6f\x6e\x74'] = function () {
        var _0x9c690e = _0xe09c67;
        return _0x9c690e(0x1c0) === '\x74\x7a\x6b\x42\x6b' ? null : this[_0x9c690e(0x1cc)][_0x9c690e(0x1d8)](_0x9c690e(0x1e0), null);
    }, _0x1696ba[_0xe09c67(0x1e1)] = function () {
        var _0x337e1a = _0xe09c67;
        return '\x79\x42\x56\x76\x45' !== _0x337e1a(0x1cf) ? null : this[_0x337e1a(0x1cc)][_0x337e1a(0x1d8)](_0x337e1a(0x1e1), null);
    }, _0x1696ba[_0xe09c67(0x1c7)] = function () {
        var _0x5beeae = _0xe09c67;
        return this[_0x5beeae(0x1cc)][_0x5beeae(0x1d8)](_0x5beeae(0x1c7), null);
    }, _0x1696ba[_0xe09c67(0x1c9)] = function () {
        var _0x283ce9 = _0xe09c67;
        return this['\x5f\x6c\x6f\x61\x64\x65\x72'][_0x283ce9(0x1d8)](_0x283ce9(0x1c9), null);
    }, _0x1696ba[_0xe09c67(0x1b6)] = function () {
        var _0x2d8736 = _0xe09c67;
        return '\x73\x4b\x4b\x4d\x4f' === '\x51\x6a\x4e\x46\x61' ? this[_0x2d8736(0x1cc)]['\x67\x65\x74\x50\x61\x72\x61\x6d']('\x61\x6c\x6c\x49\x74\x65\x6d\x73\x46\x6f\x6e\x74', null) : this[_0x2d8736(0x1cc)][_0x2d8736(0x1d8)](_0x2d8736(0x1b6), null);
    }, _0x1696ba['\x61\x6c\x6c\x41\x63\x74\x6f\x72\x4e\x69\x63\x6b\x46\x6f\x6e\x74'] = function () {
        var _0x5ed391 = _0xe09c67;
        return _0x5ed391(0x1de) !== '\x67\x4a\x70\x64\x42' ? this[_0x5ed391(0x1cc)][_0x5ed391(0x1d8)]('\x61\x6c\x6c\x41\x63\x74\x6f\x72\x4e\x69\x63\x6b\x46\x6f\x6e\x74', null) : this[_0x5ed391(0x1cc)]['\x67\x65\x74\x50\x61\x72\x61\x6d']('\x61\x6c\x6c\x57\x65\x61\x70\x6f\x6e\x73\x46\x6f\x6e\x74', null);
    }, _0x1696ba[_0xe09c67(0x1ca)] = function () {
        var _0x2a26f8 = _0xe09c67;
        if (_0x2a26f8(0x1c6) !== _0x2a26f8(0x1d9))
            return this['\x5f\x6c\x6f\x61\x64\x65\x72'][_0x2a26f8(0x1d8)](_0x2a26f8(0x1ca), null);
        else
            _0xf4e311 = _0x58019c, _0x385f20[_0x2a26f8(0x1d4)](_0x82824a);
    }, _0x1696ba[_0xe09c67(0x1bd)] = function () {
        var _0xb97922 = _0xe09c67;
        return this['\x5f\x6c\x6f\x61\x64\x65\x72'][_0xb97922(0x1d8)](_0xb97922(0x1c4), []);
    }, _0x1696ba['\x63\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65\x73'] = function () {
        var _0x4455ec = _0xe09c67;
        return _0x4455ec(0x1c2) === _0x4455ec(0x1cd) ? this['\x5f\x6c\x6f\x61\x64\x65\x72'][_0x4455ec(0x1d8)](_0x4455ec(0x1e0), null) : [];
    }, _0x1696ba[_0xe09c67(0x1cb)] = function () {
        var _0x568002 = _0xe09c67;
        return _0x568002(0x1df) !== _0x568002(0x1d3) ? this[_0x568002(0x1cc)][_0x568002(0x1d8)](_0x568002(0x1cb), !![]) : [];
    }, _0x1696ba[_0xe09c67(0x1c1)] = function (_0x1112a8) {
        var _0x2e9bc5 = _0xe09c67, _0x4cbb8d, _0x790cf2;
        try {
            if (_0x1112a8 <= 0x0)
                return _0x2e9bc5(0x1d2) === _0x2e9bc5(0x1d2) ? null : this[_0x2e9bc5(0x1cc)][_0x2e9bc5(0x1d8)](_0x2e9bc5(0x1c4), []);
            _0x790cf2 = this[_0x2e9bc5(0x1ce)]()[_0x1112a8 - 0x1];
            if (_0x790cf2 != null)
                return PKD_FTSM[_0x2e9bc5(0x1bf)]['\x67\x65\x74\x4e\x61\x6d\x65\x57\x69\x74\x68\x6f\x75\x74\x45\x78\x74'](_0x790cf2);
        } catch (_0x118c8f) {
            _0x4cbb8d = _0x118c8f, console[_0x2e9bc5(0x1d4)](_0x4cbb8d);
        }
        return null;
    }, _0x1696ba[_0xe09c67(0x1c8)] = function (_0x3196ef) {
        var _0x1e1937 = _0xe09c67, _0x371895, _0x4db908, _0x4a6e66;
        try {
            if (_0x1e1937(0x1da) !== '\x53\x74\x49\x52\x61')
                return _0x583101;
            else {
                if (_0x3196ef <= 0x0)
                    return null;
                _0x4a6e66 = this['\x67\x65\x74\x50\x72\x6f\x70\x65\x72\x43\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65']();
                if (_0x4a6e66 == null)
                    return null;
                if (_0x4a6e66['\x6c\x65\x6e\x67\x74\x68'] === 0x0)
                    return _0x1e1937(0x1dd) === _0x1e1937(0x1dd) ? null : _0x2e09de[_0x1e1937(0x1bf)][_0x1e1937(0x1ba)](_0x2bcc1a);
                _0x4db908 = _0x4a6e66[_0x3196ef - 0x1];
                if (_0x4db908 != null && _0x4db908 !== '' && _0x4db908[_0x1e1937(0x1be)]('\x23'))
                    return _0x4db908;
            }
        } catch (_0x2036be) {
            _0x371895 = _0x2036be, console[_0x1e1937(0x1d4)](_0x371895);
        }
        return null;
    }, _0x1696ba[_0xe09c67(0x1db)] = function () {
        return this['\x63\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65']();
    };
}()));

// Generated by CoffeeScript 2.6.1
(function() {
  window.switchColorPallete = function(index) {
    var e;
    try {
      return $gameSystem.switchColorPallete(index);
    } catch (error) {
      e = error;
      return console.warn(e);
    }
  };
})();


function _0x37cf() {
    var _0x5b9982 = [
        '\x31\x33\x33\x37\x32\x39\x4e\x65\x71\x54\x77\x76',
        '\x32\x31\x36\x39\x38\x37\x35\x4b\x77\x68\x4a\x4b\x52',
        '\x69\x73\x4d\x56',
        '\x4e\x4e\x7a\x4f\x43',
        '\x32\x33\x37\x39\x39\x30\x33\x32\x49\x71\x43\x74\x64\x59',
        '\x69\x6e\x63\x6c\x75\x64\x65\x73',
        '\x69\x73\x47\x6c\x6f\x62\x61\x6c\x43\x6f\x6c\x6f\x72\x73',
        '\x77\x61\x72\x6e',
        '\x6c\x6f\x61\x64\x53\x79\x73\x74\x65\x6d',
        '\x59\x4d\x7a\x74\x5a',
        '\x6c\x6f\x61\x64',
        '\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x6c\x6f\x61\x64\x20\x66\x6f\x6e\x74\x20\x66\x69\x6c\x65\x3a\x20',
        '\x74\x65\x78\x74\x43\x6f\x6c\x6f\x72',
        '\x42\x6d\x42\x61\x50',
        '\x69\x49\x61\x51\x77',
        '\x6c\x6f\x61\x64\x46\x6f\x6e\x74',
        '\x69\x73\x47\x6c\x6f\x62\x61\x6c',
        '\x38\x30\x33\x31\x33\x35\x39\x43\x65\x7a\x55\x69\x5a',
        '\x34\x33\x30\x38\x37\x31\x31\x50\x5a\x50\x75\x48\x51',
        '\x66\x6c\x6f\x6f\x72',
        '\x35\x35\x39\x30\x35\x30\x30\x70\x52\x75\x57\x54\x76',
        '\x63\x6f\x6e\x76\x65\x72\x74\x47\x6c\x6f\x62\x61\x6c\x41\x6c\x6c',
        '\x32\x39\x30\x33\x38\x36\x38\x4a\x49\x57\x45\x48\x4b',
        '\x4a\x48\x71\x76\x44',
        '\x67\x65\x74\x50\x72\x6f\x70\x65\x72\x43\x6f\x6c\x6f\x72\x42\x79\x49\x6e\x64\x65\x78',
        '\x36\x57\x59\x73\x75\x54\x4e',
        '\x67\x65\x74\x55\x73\x65\x72\x43\x6f\x6c\x6f\x72\x49\x6e\x64\x65\x78',
        '\x72\x65\x70\x6c\x61\x63\x65',
        '\x63\x6f\x6e\x76\x65\x72\x74\x47\x6c\x6f\x62\x61\x6c\x50\x61\x69\x72',
        '\x5c\x46\x46\x5b\x24\x32\x5d\x24\x31\x5c\x46\x46\x5b\x30\x5d',
        '\x63\x6f\x6e\x76\x65\x72\x74\x47\x6c\x6f\x62\x61\x6c\x43\x6f\x6c\x6f\x72\x73',
        '\x63\x4b\x57\x76\x61',
        '\x57\x69\x6e\x64\x6f\x77',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x5c\x43\x5b\x24\x31\x5d\x24\x32\x5c\x43\x5b\x30\x5d'
    ];
    _0x37cf = function () {
        return _0x5b9982;
    };
    return _0x37cf();
}
function _0xd51c(_0x2f5821, _0x5cbcee) {
    var _0x37cfef = _0x37cf();
    return _0xd51c = function (_0xd51c2a, _0x167746) {
        _0xd51c2a = _0xd51c2a - 0x194;
        var _0x114a9f = _0x37cfef[_0xd51c2a];
        return _0x114a9f;
    }, _0xd51c(_0x2f5821, _0x5cbcee);
}
(function (_0xd480c2, _0x708262) {
    var _0x23ef11 = _0xd51c, _0x3808e4 = _0xd480c2();
    while (!![]) {
        try {
            var _0x2016dc = -parseInt(_0x23ef11(0x1a8)) / 0x1 + parseInt(_0x23ef11(0x19b)) / 0x2 + -parseInt(_0x23ef11(0x197)) / 0x3 + -parseInt(_0x23ef11(0x199)) / 0x4 + parseInt(_0x23ef11(0x1a9)) / 0x5 + -parseInt(_0x23ef11(0x19e)) / 0x6 * (parseInt(_0x23ef11(0x196)) / 0x7) + parseInt(_0x23ef11(0x1ac)) / 0x8;
            if (_0x2016dc === _0x708262)
                break;
            else
                _0x3808e4['push'](_0x3808e4['shift']());
        } catch (_0x177487) {
            _0x3808e4['push'](_0x3808e4['shift']());
        }
    }
}(_0x37cf, 0xb6184), (function () {
    var _0x3c4582 = _0xd51c, _0x5292e6;
    _0x5292e6 = PKD_FTSM['\x55\x74\x69\x6c\x73'], _0x5292e6['\x69\x73\x4d\x56'] = function () {
        var _0x58bee2 = _0xd51c;
        return Utils['\x52\x50\x47\x4d\x41\x4b\x45\x52\x5f\x4e\x41\x4d\x45'][_0x58bee2(0x1a6)]('\x4d\x56');
    }, _0x5292e6['\x67\x65\x74\x4e\x61\x6d\x65\x57\x69\x74\x68\x6f\x75\x74\x45\x78\x74'] = function (_0xe8955b) {
        return _0xe8955b['\x72\x65\x70\x6c\x61\x63\x65'](/\.[^\/.]+$/, '');
    }, _0x5292e6[_0x3c4582(0x194)] = function (_0x1b6f09) {
        var _0x383e56 = _0x3c4582, _0x4a230e, _0x1e8682;
        try {
            if (_0x1b6f09 == null) {
                if (_0x383e56(0x1ab) !== '\x4e\x4e\x7a\x4f\x43') {
                    var _0x44c7e8;
                    try {
                        _0x5da038 != null && _0x3be3bb[_0x383e56(0x1ad)]('\x7c\x66') && (_0xdd80b7 = _0x4482a5['\x72\x65\x70\x6c\x61\x63\x65'](/\b([a-zA-Z0-9_]+)\b\|f(\d+)\|/gm, _0x383e56(0x1a2)));
                    } catch (_0x4390ee) {
                        _0x44c7e8 = _0x4390ee, _0x3d9308[_0x383e56(0x1af)](_0x44c7e8);
                    }
                    return _0x1151ee;
                } else
                    return;
            }
            if (_0x1b6f09 === '')
                return;
            return _0x1e8682 = this['\x67\x65\x74\x4e\x61\x6d\x65\x57\x69\x74\x68\x6f\x75\x74\x45\x78\x74'](_0x1b6f09), FontManager[_0x383e56(0x1b2)](_0x1e8682, _0x1b6f09);
        } catch (_0x5a51d7) {
            return _0x4a230e = _0x5a51d7, console[_0x383e56(0x1af)](_0x383e56(0x1b3) + _0x1b6f09 + '\x20' + _0x4a230e);
        }
    }, _0x5292e6[_0x3c4582(0x19a)] = function (_0x56567c) {
        var _0x41f58b = _0x3c4582;
        if (_0x41f58b(0x1b5) === '\x42\x6d\x42\x61\x50') {
            var _0x566466;
            try {
                if (_0x56567c == null)
                    return _0x56567c;
                if (PKD_FTSM['\x50\x50'][_0x41f58b(0x195)]() && PKD_FTSM['\x50\x50'][_0x41f58b(0x1ae)]()) {
                    if (_0x41f58b(0x1a4) !== _0x41f58b(0x1a4))
                        return;
                    else
                        _0x56567c = this[_0x41f58b(0x1a1)](_0x56567c);
                }
                PKD_FTSM['\x50\x50'][_0x41f58b(0x195)]() && (_0x56567c = this[_0x41f58b(0x1a3)](_0x56567c)), PKD_FTSM['\x50\x50'][_0x41f58b(0x1ae)]() && (_0x56567c = this['\x63\x6f\x6e\x76\x65\x72\x74\x47\x6c\x6f\x62\x61\x6c\x46\x6f\x6e\x74\x73'](_0x56567c));
            } catch (_0x36ea12) {
                _0x566466 = _0x36ea12, console[_0x41f58b(0x1af)](_0x566466);
            }
            return _0x56567c;
        } else
            return _0x345eb6 = _0xaf81b5[_0x41f58b(0x1b0)](_0x41f58b(0x1a5)), _0x19f98b = 0x60 + _0x426eac % 0x8 * 0xc + 0x6, _0x3f4c8e = 0x90 + _0x439ec3[_0x41f58b(0x198)](_0x2d044c / 0x8) * 0xc + 0x6, _0x1e2dec['\x67\x65\x74\x50\x69\x78\x65\x6c'](_0x2498ce, _0x11910c);
    }, _0x5292e6[_0x3c4582(0x1a1)] = function (_0xdc0046) {
        var _0x1608f5 = _0x3c4582, _0x6a0561;
        try {
            _0xdc0046 != null && _0xdc0046[_0x1608f5(0x1ad)]('\x7c\x66') && _0xdc0046['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x63') && (_0xdc0046 = _0xdc0046[_0x1608f5(0x1a0)](/\b([a-zA-Z0-9_]+)\b\|f(\d+)c(\d+)\|/gm, '\x5c\x43\x5b\x24\x33\x5d\x5c\x46\x46\x5b\x24\x32\x5d\x24\x31\x5c\x46\x46\x5b\x30\x5d\x5c\x43\x5b\x30\x5d'));
        } catch (_0x56eb8b) {
            if (_0x1608f5(0x1b1) === '\x49\x6e\x57\x71\x43')
                return _0x36afe7;
            else
                _0x6a0561 = _0x56eb8b, console[_0x1608f5(0x1af)](_0x6a0561);
        }
        return _0xdc0046;
    }, _0x5292e6['\x63\x6f\x6e\x76\x65\x72\x74\x47\x6c\x6f\x62\x61\x6c\x46\x6f\x6e\x74\x73'] = function (_0x1f3545) {
        var _0x5c961a = _0x3c4582, _0x2f77f5;
        try {
            _0x1f3545 != null && _0x1f3545['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x7c\x66') && (_0x5c961a(0x1b6) !== _0x5c961a(0x1b6) ? (_0x50e56e = _0x2c3bc7, _0x42f854[_0x5c961a(0x1af)](_0x258563)) : _0x1f3545 = _0x1f3545[_0x5c961a(0x1a0)](/\b([a-zA-Z0-9_]+)\b\|f(\d+)\|/gm, _0x5c961a(0x1a2)));
        } catch (_0x4cecec) {
            _0x2f77f5 = _0x4cecec, console[_0x5c961a(0x1af)](_0x2f77f5);
        }
        return _0x1f3545;
    }, _0x5292e6[_0x3c4582(0x1a3)] = function (_0x16cfe5) {
        var _0x25c3ce = _0x3c4582, _0x3e6f3a;
        try {
            _0x16cfe5 != null && _0x16cfe5['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x7c\x63') && (_0x16cfe5 = _0x16cfe5[_0x25c3ce(0x1a0)](/\b([a-zA-Z0-9_]+)\b\|c(\d+)\|/gm, _0x25c3ce(0x1a7)));
        } catch (_0x3743fc) {
            _0x3e6f3a = _0x3743fc, console[_0x25c3ce(0x1af)](_0x3e6f3a);
        }
        return _0x16cfe5;
    }, _0x5292e6[_0x3c4582(0x19d)] = function (_0x1fd80b) {
        var _0x1c6f25 = _0x3c4582, _0x19bd8a, _0x3000ad, _0x3637b2, _0x43af6f, _0x1610b5;
        try {
            _0x1610b5 = PKD_FTSM['\x50\x50'][_0x1c6f25(0x19f)](_0x1fd80b);
            if (_0x1610b5 != null && _0x1610b5 !== '')
                return _0x1610b5;
            else {
                if (this[_0x1c6f25(0x1aa)]()) {
                    if (_0x1c6f25(0x19c) === _0x1c6f25(0x19c))
                        return _0x43af6f = ImageManager['\x6c\x6f\x61\x64\x53\x79\x73\x74\x65\x6d'](_0x1c6f25(0x1a5)), _0x3000ad = 0x60 + _0x1fd80b % 0x8 * 0xc + 0x6, _0x3637b2 = 0x90 + Math['\x66\x6c\x6f\x6f\x72'](_0x1fd80b / 0x8) * 0xc + 0x6, _0x43af6f['\x67\x65\x74\x50\x69\x78\x65\x6c'](_0x3000ad, _0x3637b2);
                    else
                        _0x33cfff = this[_0x1c6f25(0x1a3)](_0xaf901a);
                } else
                    return ColorManager[_0x1c6f25(0x1b4)](_0x1fd80b);
            }
        } catch (_0x18733b) {
            _0x19bd8a = _0x18733b, console[_0x1c6f25(0x1af)](_0x19bd8a);
        }
        return null;
    };
}()));

function _0x4f95(_0x12ca25, _0x15dd72) {
    var _0x2a6658 = _0x2a66();
    return _0x4f95 = function (_0x4f956f, _0x304262) {
        _0x4f956f = _0x4f956f - 0xb0;
        var _0x3dfbb1 = _0x2a6658[_0x4f956f];
        return _0x3dfbb1;
    }, _0x4f95(_0x12ca25, _0x15dd72);
}
function _0x2a66() {
    var _0x385225 = [
        '\x75\x73\x65\x72\x50\x61\x6c\x6c\x65\x74\x65\x73',
        '\x5f\x6c\x6f\x61\x64\x65\x72',
        '\x63\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65\x73',
        '\x31\x33\x38\x35\x30\x32\x74\x76\x63\x59\x6a\x79',
        '\x37\x4b\x5a\x43\x6e\x4e\x55',
        '\x67\x65\x74\x50\x72\x6f\x70\x65\x72\x43\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65',
        '\x70\x61\x6c\x6c\x65\x74\x65',
        '\x38\x76\x62\x56\x58\x56\x54',
        '\x31\x30\x39\x33\x37\x37\x32\x62\x58\x45\x52\x75\x6a',
        '\x34\x34\x33\x36\x32\x36\x34\x5a\x77\x58\x79\x73\x57',
        '\x73\x6c\x69\x63\x65',
        '\x33\x37\x39\x30\x36\x6e\x4d\x54\x67\x59\x53',
        '\x31\x32\x30\x38\x30\x43\x42\x57\x55\x58\x46',
        '\x67\x65\x74\x50\x61\x72\x61\x6d',
        '\x70\x43\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65\x49\x6e\x64\x65\x78',
        '\x66\x6f\x6e\x74\x73\x54\x6f\x4c\x6f\x61\x64',
        '\x50\x41\x48\x48\x42',
        '\x36\x30\x37\x35\x33\x30\x36\x56\x53\x4a\x45\x51\x78',
        '\x48\x52\x44\x4c\x43',
        '\x31\x39\x31\x38\x33\x38\x36\x72\x51\x48\x53\x53\x45',
        '\x34\x32\x71\x63\x5a\x67\x54\x6a',
        '\x33\x34\x34\x30\x39\x38\x35\x7a\x45\x6d\x72\x41\x66'
    ];
    _0x2a66 = function () {
        return _0x385225;
    };
    return _0x2a66();
}
(function (_0x597c36, _0x19632a) {
    var _0x2b17fa = _0x4f95, _0x2a5032 = _0x597c36();
    while (!![]) {
        try {
            var _0x56ade9 = -parseInt(_0x2b17fa(0xb0)) / 0x1 + parseInt(_0x2b17fa(0xc1)) / 0x2 * (-parseInt(_0x2b17fa(0xbc)) / 0x3) + -parseInt(_0x2b17fa(0xb1)) / 0x4 + parseInt(_0x2b17fa(0xbd)) / 0x5 + -parseInt(_0x2b17fa(0xbb)) / 0x6 * (parseInt(_0x2b17fa(0xc2)) / 0x7) + parseInt(_0x2b17fa(0xc5)) / 0x8 * (-parseInt(_0x2b17fa(0xb9)) / 0x9) + parseInt(_0x2b17fa(0xb4)) / 0xa * (parseInt(_0x2b17fa(0xb3)) / 0xb);
            if (_0x56ade9 === _0x19632a)
                break;
            else
                _0x2a5032['push'](_0x2a5032['shift']());
        } catch (_0x4e49c0) {
            _0x2a5032['push'](_0x2a5032['shift']());
        }
    }
}(_0x2a66, 0xa6f48), (function () {
    var _0x367a0e = _0x4f95, _0x1236dd;
    _0x1236dd = PKD_FTSM['\x50\x50'], _0x1236dd['\x66\x6f\x6e\x74\x73\x54\x6f\x4c\x6f\x61\x64'] = function () {
        var _0x520d17 = _0x4f95, _0x207705;
        return _0x207705 = this[_0x520d17(0xbf)]['\x67\x65\x74\x50\x61\x72\x61\x6d'](_0x520d17(0xb7), []), _0x207705[_0x520d17(0xb2)](0x0, 0x5);
    }, _0x1236dd[_0x367a0e(0xc0)] = function () {
        var _0x2b722d = _0x367a0e, _0xeb6d6e;
        return _0xeb6d6e = this[_0x2b722d(0xbf)][_0x2b722d(0xb5)](_0x2b722d(0xbe), []), _0xeb6d6e[_0x2b722d(0xb2)](0x0, 0x1);
    }, _0x1236dd[_0x367a0e(0xc3)] = function () {
        var _0xdc465 = _0x367a0e;
        if (_0xdc465(0xb8) === _0xdc465(0xb8)) {
            var _0x1013f0, _0x40d84b, _0x383cb3, _0x29202a;
            try {
                _0x40d84b = $gameSystem[_0xdc465(0xb6)];
                if (_0x40d84b > 0x0) {
                    _0x29202a = this[_0xdc465(0xc0)](), _0x383cb3 = _0x29202a[0x0];
                    if (_0x383cb3 != null) {
                        if (_0xdc465(0xba) !== _0xdc465(0xba)) {
                            _0x553d22 = _0x7fc36f[_0xdc465(0xb6)];
                            if (_0x361fd1 > 0x0) {
                                _0x5d8a22 = this[_0xdc465(0xc0)](), _0xbbe2e6 = _0x52cbbb[0x0];
                                if (_0x359b7e != null)
                                    return _0x498f3f[_0xdc465(0xc4)];
                            }
                        } else
                            return _0x383cb3[_0xdc465(0xc4)];
                    }
                }
            } catch (_0x231968) {
                _0x1013f0 = _0x231968, console['\x77\x61\x72\x6e'](_0x1013f0);
            }
            return this['\x63\x6f\x6c\x6f\x72\x50\x61\x6c\x6c\x65\x74\x65']();
        } else {
            var _0x4d081d;
            return _0x4d081d = this[_0xdc465(0xbf)][_0xdc465(0xb5)](_0xdc465(0xb7), []), _0x4d081d[_0xdc465(0xb2)](0x0, 0x5);
        }
    };
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
  _.switchColorPallete = function(index) {
    if (index <= 0) {
      this.pColorPalleteIndex = null;
    } else {
      this.pColorPalleteIndex = index;
    }
  };
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Boot.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, _;
  //@[DEFINES]
  _ = Scene_Boot.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    var e;
    ALIAS__start.call(this, ...arguments);
    PKD_FTSM.LoadPluginSettings();
    if (PKD_FTSM.PP.isAutoLoad()) {
      try {
        FontLoader_NWJS.init();
        FontLoader_NWJS.loadAll();
      } catch (error) {
        e = error;
        console.warn(e);
      }
    }
    PKD_FTSM.LoadAllFonts();
  };
})();

// ■ END Scene_Boot.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__convertEscapeCharacters, ALIAS__drawItemName, ALIAS__drawTextEx, ALIAS__processColorChange, ALIAS__processEscapeCharacter, ALIAS__textColor, _;
  //@[DEFINES]
  _ = Window_Base.prototype;
  //@[ALIAS]
  ALIAS__drawTextEx = _.drawTextEx;
  _.drawTextEx = function(text, x, y) {
    PKD_FTSM.legacy = true;
    if (text != null) {
      text = PKD_FTSM.Utils.convertGlobalAll(text);
    }
    ALIAS__drawTextEx.call(this, text, x, y);
    PKD_FTSM.legacy = null;
  };
  //@[ALIAS]
  ALIAS__convertEscapeCharacters = _.convertEscapeCharacters;
  _.convertEscapeCharacters = function(text) {
    if (text != null) {
      text = PKD_FTSM.Utils.convertGlobalAll(text);
    }
    return ALIAS__convertEscapeCharacters.call(this, text);
  };
  //@[ALIAS]
  ALIAS__processEscapeCharacter = _.processEscapeCharacter;
  _.processEscapeCharacter = function(code, textState) {
    if (code === 'FF') {
      this.pApplyFontSettings(this.pObtainEscapeParamPlus(textState));
    }
    return ALIAS__processEscapeCharacter.call(this, ...arguments);
  };
  
  //@[ALIAS]
  ALIAS__drawItemName = _.drawItemName;
  _.drawItemName = function(item, x, y, width) {
    var __prevFont, e, fontName;
    try {
      fontName = this.pGetFontForItem(item);
      if (fontName !== null) {
        if (isFinite(fontName)) {
          fontName = PKD_FTSM.PP.getFontNameByIndex(parseInt(fontName));
        }
        __prevFont = this.contents.fontFace;
        this.pApplyFontByName(fontName);
      }
    } catch (error) {
      e = error;
      console.warn(e);
    }
    ALIAS__drawItemName.call(this, ...arguments);
    if (fontName != null) {
      this.contents.fontFace = __prevFont;
    }
  };
  //?MZ only
  //@[ALIAS]
  ALIAS__processColorChange = _.processColorChange;
  _.processColorChange = function(colorIndex) {
    var userColor;
    userColor = PKD_FTSM.PP.getUserColorIndex(colorIndex);
    if (userColor != null) {
      this.changeTextColor(userColor);
    } else {
      ALIAS__processColorChange.call(this, colorIndex);
    }
  };
  //?MV only
  //@[ALIAS]
  ALIAS__textColor = _.textColor;
  _.textColor = function(colorIndex) {
    var userColor;
    if (colorIndex > 0) {
      userColor = PKD_FTSM.PP.getUserColorIndex(colorIndex);
      if (userColor != null) {
        return userColor;
      }
    }
    return ALIAS__textColor.call(this, ...arguments);
  };
})();

// ■ END Window_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Base.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Base.prototype;
  _.pApplyFontSettings = function(fontSymbol) {
    var e, font;
    try {
      if (isFinite(fontSymbol)) {
        font = PKD_FTSM.PP.getFontNameByIndex(Number(fontSymbol));
      } else {
        font = fontSymbol;
      }
      this.pApplyFontByName(font);
    } catch (error) {
      e = error;
      console.warn(e);
      this.contents.fontFace = this.pDefaultFontFace();
    }
  };
  _.pApplyFontByName = function(font) {
    var e;
    try {
      if (!((font != null) || font === "")) {
        this.contents.fontFace = this.pDefaultFontFace();
      } else {
        this.contents.fontFace = font;
      }
    } catch (error) {
      e = error;
      console.warn(e);
      this.contents.fontFace = this.pDefaultFontFace();
    }
  };
  _.pDefaultFontFace = function() {
    if (PKD_FTSM.Utils.isMV()) {
      return this.standardFontFace();
    } else {
      return $gameSystem.mainFontFace();
    }
  };
  _.pGetFontForItem = function(item) {
    var e;
    if (item == null) {
      return null;
    }
    try {
      if ((item.meta != null) && (item.meta.FF != null)) {
        return item.meta.FF;
      } else {
        if (DataManager.isItem(item)) {
          return PKD_FTSM.PP.allItemsFont();
        } else if (DataManager.isArmor(item)) {
          return PKD_FTSM.PP.allArmorsFont();
        } else if (DataManager.isWeapon(item)) {
          return PKD_FTSM.PP.allWeaponsFont();
        } else if (DataManager.isSkill(item)) {
          return PKD_FTSM.PP.allSkillsFont();
        }
      }
    } catch (error) {
      e = error;
      console.warn(e);
    }
    return null;
  };
  _.pObtainEscapeParamPlus = function(textState) {
    var e, param;
    try {
      param = this.obtainEscapeParam(textState);
      if (param !== '') {
        return param;
      } else {
        return this.pObtainEscapeParamText(textState);
      }
    } catch (error) {
      e = error;
      console.warn(e);
    }
    return '';
  };
  _.pObtainEscapeParamText = function(textState) {
    var arr, e, regExp;
    try {
      regExp = /^\[([a-zA-Z0-9_]+)\]/;
      arr = regExp.exec(textState.text.slice(textState.index));
      if (arr != null) {
        textState.index += arr[0].length;
        return arr[1];
      } else {
        return '';
      }
    } catch (error) {
      e = error;
      console.warn(e);
    }
    return '';
  };
})();

// ■ END Window_Base.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_StatusBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__drawActorClass, ALIAS__drawActorLevel, ALIAS__drawActorName, ALIAS__drawActorNickname, _;
  //@[DEFINES]
  if (PKD_FTSM.Utils.isMV()) {
    _ = Window_Base.prototype;
  } else {
    _ = Window_StatusBase.prototype;
  }
  //@[ALIAS]
  ALIAS__drawActorName = _.drawActorName;
  _.drawActorName = function(actor, x, y, width) {
    var __prevFont, fontName;
    fontName = this.pGetFontForActorState(actor, 'name');
    if (fontName !== null) {
      __prevFont = this.contents.fontFace;
      this.pApplyFontByName(fontName);
    }
    ALIAS__drawActorName.call(this, ...arguments);
    if (fontName != null) {
      this.contents.fontFace = __prevFont;
    }
  };
  
  //@[ALIAS]
  ALIAS__drawActorClass = _.drawActorClass;
  _.drawActorClass = function(actor, x, y, width) {
    var __prevFont, fontName;
    fontName = this.pGetFontForActorState(actor, 'class');
    if (fontName !== null) {
      __prevFont = this.contents.fontFace;
      this.pApplyFontByName(fontName);
    }
    ALIAS__drawActorClass.call(this, ...arguments);
    if (fontName != null) {
      this.contents.fontFace = __prevFont;
    }
  };
  
  //@[ALIAS]
  ALIAS__drawActorNickname = _.drawActorNickname;
  _.drawActorNickname = function(actor, x, y, width) {
    var __prevFont, fontName;
    fontName = this.pGetFontForActorState(actor, 'nickname');
    if (fontName !== null) {
      __prevFont = this.contents.fontFace;
      this.pApplyFontByName(fontName);
    }
    ALIAS__drawActorNickname.call(this, ...arguments);
    if (fontName != null) {
      this.contents.fontFace = __prevFont;
    }
  };
  
  //@[ALIAS]
  ALIAS__drawActorLevel = _.drawActorLevel;
  _.drawActorLevel = function(actor, x, y) {
    var __prevFont, fontName;
    fontName = this.pGetFontForActorState(actor, 'level');
    if (fontName !== null) {
      __prevFont = this.contents.fontFace;
      this.pApplyFontByName(fontName);
    }
    ALIAS__drawActorLevel.call(this, ...arguments);
    if (fontName != null) {
      this.contents.fontFace = __prevFont;
    }
  };
})();

// ■ END Window_StatusBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_StatusBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  if (PKD_FTSM.Utils.isMV()) {
    _ = Window_Base.prototype;
  } else {
    _ = Window_StatusBase.prototype;
  }
  _.pGetFontForActorState = function(actor, state) {
    var e, fontName, fontSymbol;
    try {
      fontSymbol = this.pGetFontSymbolForActorState(actor, state);
      if (fontSymbol != null) {
        if (isFinite(fontSymbol)) {
          fontName = PKD_FTSM.PP.getFontNameByIndex(parseInt(fontSymbol));
        } else {
          fontName = fontSymbol;
        }
        return fontName;
      }
    } catch (error) {
      e = error;
      console.warn(e);
    }
    return null;
  };
  _.pGetFontSymbolForActorState = function(actor, state) {
    var e;
    if (actor == null) {
      return null;
    }
    try {
      if (state === 'name' && (actor.actor().meta != null) && (actor.actor().meta.FF != null)) {
        return actor.actor().meta.FF;
      } else {
        switch (state) {
          case 'name':
            return PKD_FTSM.PP.allActorNamesFont();
          case 'class':
            return PKD_FTSM.PP.allActorClassFont();
          case 'nickname':
            return PKD_FTSM.PP.allActorNickFont();
          case 'level':
            return PKD_FTSM.PP.allActorLevelFont();
        }
      }
    } catch (error) {
      e = error;
      console.warn(e);
    }
    return null;
  };
})();

// ■ END Window_StatusBase.coffee
//---------------------------------------------------------------------------

//Plugin PKD_FontsManager builded by PKD PluginBuilder 2.1 - 31.08.2022