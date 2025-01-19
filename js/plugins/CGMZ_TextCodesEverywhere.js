/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/textcodeseverywhere/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Allows the use of text codes in all* text
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Alpha R2
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * Description: Allows the use of text codes in all* text. By all, I mean any
 * text both built-in and in 3rd party plugins that use the default function
 * for drawing text (Window_Base.prototype.drawText). You can also disable
 * text codes in case they would cause any issues by using a new text code.
 * ----------------------------------------------------------------------------
 * Documentation:
 * This plugin should mostly be plug and play.
 * ------------------------------Alpha Notes-----------------------------------
 * This plugin is in *ALPHA* stage, which means it is not feature complete.
 * I plan to add the following features before it reaches *BETA* stage:
 * 1) Compatibility checking with other plugins
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post or in my discord under the #suggestions channel!
 * https://discord.gg/Gbx7JXP
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not have any plugin commands.
 * ---------------------------Default Text Type--------------------------------
 * This determines which text type will be the default (when no text codes are
 * present). This is provided so you can change the default draw text behavior
 * without needing to type long text codes in everywhere.
 *
 * Because most text is expected to fit within 1 line, it is highly recommended
 * to only use Normal, TextCode, or TextCodeFullWidth types as the default and
 * NOT to use TextCodeParagraph as the default. TextCodeParagraph is provided
 * as an option in case there is some edge case where it is needed as the
 * default.
 * -------------------------------Text Codes-----------------------------------
 * Any text codes set up in this plugin will be removed from the text before
 * draw if they are discovered. The text codes can be present anywhere in the
 * text.
 *
 * You can configure the text code to use for each text type. But, by default:
 * <CG_TCE_Normal> - will draw text as Text Type: Normal
 * 
 * <CG_TCE_TextCode> - will draw text as Text Type: TextCode
 * 
 * <CG_TCE_TextCodeFullWidth> - will draw text as Text Type: TextCodeFullWidth
 * 
 * <CG_TCE_TextCodeParagraph> - will draw text as Text Type: TextCodeParagraph
 * -------------------------------Text Types-----------------------------------
 * By default, there are a few different text types this plugin supports:
 * 
 * Normal - This is the default text which does not support text codes.
 * 
 * TextCode - This is just normal text but with text code support. It should
 * automatically adjust the horizontal width of the text if it would not fit
 * in the text area. This text will only appear on ONE line.
 *
 * TextCodeFullWidth - This is the TextCode type but without auto adjustment
 * for cases where the text is too long for the text area. This text will
 * appear on ONE line only.
 *
 * TextCodeParagraph - This is text that supports multiple lines and does not
 * auto-adjust. If the text is too wide to fit in the provided line, it will
 * word wrap to the next line (and so on) until the text is done drawing.
 * -------------------------------Parameters-----------------------------------
 * Please be aware of the following parameters and make special care when
 * using them:
 *
 * • Allow In Actor Name
 * This parameter will enable text code use in Actor names. Due to how the
 * actor name is displayed by default in the battle status window, turning this
 * ON may introduce some compatibility issues with other plugins that change
 * how the actor name is displayed in battle. Also, this will remove the color
 * changes that occur when actors hp changes. It is recommended to leave this
 * OFF, but if you really want to use text codes in your actors' names, it is
 * provided here.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_TextCodesEverywhere.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.0.0 - Initial Release
 *
 * @param Default Text Type
 * @type select
 * @option Normal
 * @option TextCode
 * @option TextCodeFullWidth
 * @option TextCodeParagraph
 * @desc See plugin documentation for what the options mean
 * @default Normal
 *
 * @param Normal Text Code
 * @desc Text Code to search for to draw Text Type: Normal
 * @default <CG_TCE_Normal>
 *
 * @param TextCode Text Code
 * @desc Text Code to search for to draw Text Type: Normal
 * @default <CG_TCE_TextCode>
 *
 * @param TextCodeFullWidth Text Code
 * @desc Text Code to search for to draw Text Type: Normal
 * @default <CG_TCE_TextCodeFullWidth>
 *
 * @param TextCodeParagraph Text Code
 * @desc Text Code to search for to draw Text Type: Normal
 * @default <CG_TCE_TextCodeParagraph>
 *
 * @param Allow In Actor Name
 * @type boolean
 * @desc Turning this on will allow text code use in Actor Names.
 * @default false
*/
var Imported = Imported || {};
Imported.CGMZ_TextCodesEverywhere = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Text Codes Everywhere"] = "Alpha R2";
CGMZ.TextCodesEverywhere = {};
CGMZ.TextCodesEverywhere.parameters = PluginManager.parameters('CGMZ_TextCodesEverywhere');
CGMZ.TextCodesEverywhere.DefaultTextType = CGMZ.TextCodesEverywhere.parameters["Default Text Type"];
CGMZ.TextCodesEverywhere.TextTypeNormalCode = CGMZ.TextCodesEverywhere.parameters["Normal Text Code"];
CGMZ.TextCodesEverywhere.TextTypeTextCodeCode = CGMZ.TextCodesEverywhere.parameters["TextCode Text Code"];
CGMZ.TextCodesEverywhere.TextTypeTextCodeFullWidthCode = CGMZ.TextCodesEverywhere.parameters["TextCodeFullWidth Text Code"];
CGMZ.TextCodesEverywhere.TextTypeTextCodeParagraphCode = CGMZ.TextCodesEverywhere.parameters["TextCodeParagraph Text Code"];
CGMZ.TextCodesEverywhere.AllowInActorName = (CGMZ.TextCodesEverywhere.parameters["Allow In Actor Name"] === 'true');
//=============================================================================
// Window_Base
//-----------------------------------------------------------------------------
// Adds support for text codes in all text (optional). Does so by routing the
// drawText function to CGMZ text-code supported functions in CGMZ Core based
// on detected text-codes (or lack thereof) in the text.
//=============================================================================
//-----------------------------------------------------------------------------
// Handle routing of text to proper draw text function
//-----------------------------------------------------------------------------
const CGMZ_TextCodesEverywhere_WindowBase_drawText = Window_Base.prototype.drawText;
Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
	const textType = this.CGMZ_determineTextType(text);
	switch(textType) {
		case 0:
			newText = text.replace(CGMZ.TextCodesEverywhere.TextTypeNormalCode,"");
			CGMZ_TextCodesEverywhere_WindowBase_drawText.call(this, newText, x, y, maxWidth, align);
			break;
		case 1:
			newText = text.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeCode,"");
			this.CGMZ_drawTextLine(newText, x, y, maxWidth, align);
			break;
		case 2:
			newText = text.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeFullWidthCode,"");
			this.CGMZ_drawTextLineNoResize(newText, x, y, maxWidth, align);
			break;
		case 3:
			newText = text.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeParagraphCode,"");
			this.CGMZ_drawText(newText, x, x, y, maxWidth, align);
			break;
		default: CGMZ_TextCodesEverywhere_WindowBase_drawText.call(this, text, x, y, maxWidth, align);
	}
};
//-----------------------------------------------------------------------------
// Determine text type.
// -1 = Error. Not a string (cannot use string functions) or empty string
// 0  = Normal
// 1  = TextCode
// 2  = TextCodeFullWidth
// 3  = TextCodeParagraph
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_determineTextType = function(text) {
	if(!text || typeof text !== "string") return -1;
	const types = ["Normal", "TextCode", "TextCodeFullWidth", "TextCodeParagraph"];
	let textType = types.indexOf(CGMZ.TextCodesEverywhere.DefaultTextType);
	if(text.includes(CGMZ.TextCodesEverywhere.TextTypeNormalCode)) {
		textType = 0;
	} else if(text.includes(CGMZ.TextCodesEverywhere.TextTypeTextCodeCode)) {
		textType = 1;
	} else if(text.includes(CGMZ.TextCodesEverywhere.TextTypeTextCodeFullWidthCode)) {
		textType = 2;
	} else if(text.includes(CGMZ.TextCodesEverywhere.TextTypeTextCodeParagraphCode)) {
		textType = 3;
	}
	return textType;
};
//-----------------------------------------------------------------------------
// Alias. Replace CGMZ TCE Text Codes if found.
//-----------------------------------------------------------------------------
const alias_CGMZ_TextCodeEverywhere_WindowBase_CGMZ_drawText = Window_Base.prototype.CGMZ_drawText;
Window_Base.prototype.CGMZ_drawText = function(string, x, firstLineX, y, width, alignment = "left") {
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeNormalCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeFullWidthCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeParagraphCode,"");
	return alias_CGMZ_TextCodeEverywhere_WindowBase_CGMZ_drawText.call(this, string, x, firstLineX, y, width, alignment);
};
//-----------------------------------------------------------------------------
// Alias. Replace CGMZ TCE Text Codes if found.
//-----------------------------------------------------------------------------
const alias_CGMZ_TextCodeEverywhere_WindowBase_CGMZ_drawTextLine = Window_Base.prototype.CGMZ_drawTextLine;
Window_Base.prototype.CGMZ_drawTextLine = function(string, x, y, width, alignment = "left") {
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeNormalCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeFullWidthCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeParagraphCode,"");
	return alias_CGMZ_TextCodeEverywhere_WindowBase_CGMZ_drawTextLine.call(this, string, x, y, width, alignment);
};
//-----------------------------------------------------------------------------
// Alias. Replace CGMZ TCE Text Codes if found.
//-----------------------------------------------------------------------------
const alias_CGMZ_TextCodeEverywhere_WindowBase_CGMZ_drawTextLineNoResize = Window_Base.prototype.CGMZ_drawTextLineNoResize;
Window_Base.prototype.CGMZ_drawTextLineNoResize = function(string, x, y, width, alignment = "left", scale = 1) {
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeNormalCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeFullWidthCode,"");
	string = string.replace(CGMZ.TextCodesEverywhere.TextTypeTextCodeParagraphCode,"");
	return alias_CGMZ_TextCodeEverywhere_WindowBase_CGMZ_drawTextLineNoResize.call(this, string, x, y, width, alignment, scale);
};
//=============================================================================
// Sprite_Name
//-----------------------------------------------------------------------------
// Adds support for text codes in actor names - used during battle
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. If actor has text codes, draw text codes
//-----------------------------------------------------------------------------
const alias_CGMZ_TextCodeEverywhere_SpriteName_redraw = Sprite_Name.prototype.redraw;
Sprite_Name.prototype.redraw = function() {
	if(CGMZ.TextCodesEverywhere.AllowInActorName) {
		const name = this.name();
		const width = this.bitmapWidth();
		this.bitmap.clear();
		this.contents = this.bitmap;
		this.drawTextEx(name, 0, 0, width);
	} else {
		alias_CGMZ_TextCodeEverywhere_SpriteName_redraw.apply(this, arguments);
	}
};
//-----------------------------------------------------------------------------
// Code below is only present if Allow In Actor Name is ON
// Call Window_Base draw text functions as needed to draw text codes
//-----------------------------------------------------------------------------
if(CGMZ.TextCodesEverywhere.AllowInActorName) {
Sprite_Name.prototype.lineHeight = function() {
    return 24;
};
Sprite_Name.prototype.resetFontSettings = function() {
    Window_Base.prototype.resetFontSettings.call(this);
};
Sprite_Name.prototype.resetTextColor = function() {
    Window_Base.prototype.resetTextColor.call(this);
};
Sprite_Name.prototype.changeTextColor = function(color) {
    Window_Base.prototype.changeTextColor.call(this, color);
};
Sprite_Name.prototype.changeOutlineColor = function(color) {
    Window_Base.prototype.changeOutlineColor.call(this, color);
};
Sprite_Name.prototype.textWidth = function(text) {
    return Window_Base.prototype.textWidth.call(this, text);
};
Sprite_Name.prototype.drawTextEx = function(text, x, y, width) {
    return Window_Base.prototype.drawTextEx.call(this, text, x, y, width);
};
Sprite_Name.prototype.textSizeEx = function(text) {
    return Window_Base.prototype.textSizeEx.call(this, text);
};
Sprite_Name.prototype.createTextState = function(text, x, y, width) {
    return Window_Base.prototype.createTextState.call(this, text, x, y, width);
};
Sprite_Name.prototype.processAllText = function(textState) {
    Window_Base.prototype.processAllText.call(this, textState);
};
Sprite_Name.prototype.flushTextState = function(textState) {
    Window_Base.prototype.flushTextState.call(this, textState);
};
Sprite_Name.prototype.createTextBuffer = function(rtl) {
    return Window_Base.prototype.createTextBuffer.call(this, rtl);
};
Sprite_Name.prototype.convertEscapeCharacters = function(text) {
	try {
		return Window_Base.prototype.convertEscapeCharacters.call(this, text);
	} catch(e) {
		return text;
	}
};
Sprite_Name.prototype.actorName = function(n) {
    return Window_Base.prototype.actorName.call(this, n);
};
Sprite_Name.prototype.partyMemberName = function(n) {
    return Window_Base.prototype.partyMemberName.call(this, n);
};
Sprite_Name.prototype.processCharacter = function(textState) {
    Window_Base.prototype.processCharacter.call(this, textState);
};
Sprite_Name.prototype.processControlCharacter = function(textState, c) {
    Window_Base.prototype.processControlCharacter.call(this, textState, c);
};
Sprite_Name.prototype.processNewLine = function(textState) {
    Window_Base.prototype.processNewLine.call(this, textState);
};
Sprite_Name.prototype.obtainEscapeCode = function(textState) {
    return Window_Base.prototype.obtainEscapeCode.call(this, textState);
};
Sprite_Name.prototype.obtainEscapeParam = function(textState) {
    return Window_Base.prototype.obtainEscapeParam.call(this, textState);
};
Sprite_Name.prototype.processEscapeCharacter = function(code, textState) {
    Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
};
Sprite_Name.prototype.processColorChange = function(colorIndex) {
    Window_Base.prototype.processColorChange.call(this, colorIndex);
};
Sprite_Name.prototype.processDrawIcon = function(iconIndex, textState) {
    Window_Base.prototype.processDrawIcon.call(this, iconIndex, textState);
};
Sprite_Name.prototype.makeFontBigger = function() {
    Window_Base.prototype.makeFontBigger.call(this);
};
Sprite_Name.prototype.makeFontSmaller = function() {
    Window_Base.prototype.makeFontSmaller.call(this);
};
Sprite_Name.prototype.calcTextHeight = function(textState) {
    return Window_Base.prototype.calcTextHeight.call(this, textState);
};
Sprite_Name.prototype.maxFontSizeInLine = function(line) {
    return Window_Base.prototype.maxFontSizeInLine.call(this, line);
};
Sprite_Name.prototype.drawIcon = function(iconIndex, x, y) {
    Window_Base.prototype.drawIcon.call(this, iconIndex, x, y);
};
Sprite_Name.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
    Window_Base.prototype.drawCurrencyValue.call(this, value, unit, x, y, width);
};
Sprite_Name.prototype.CGMZ_difficultyTextCode = function() {
	return Window_Base.prototype.CGMZ_difficultyTextCode.call(this);
};
} // end if CGMZ.TextCodesEverywhere.AllowInActorName