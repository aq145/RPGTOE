/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/infinitecolors/
 * @target MZ
 * @plugindesc Define your own colors for use in messages
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.0.1
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * Description: This plugin allows you to define your own colors for use in
 * messages or anywhere else they are supported. It uses the same color escape
 * code \c[x] where x is the id of the color you want to access.
 * ----------------------------------------------------------------------------
 * Documentation:
 * The name attribute has no function in the plugin. It is simply there to
 * help you remember what the color is.
 *
 * Colors support hex format. You can google any hex color picker and it will
 * be the code shown with a # before it. For example, #ffffff is white.
 *
 * Colors support rgb format. Most color pickers provide red, blue, green
 * values which you will put in the form rgb(x, y, z) where x, y, and z are
 * the amounts of red, blue, and green the color has.
 *
 * The color ID provided is what number you type in the \c[x] code to switch
 * color. It begins at 32 since there are 31 colors available by default.
 * This plugin preserves the original 31 colors.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_InfiniteColors.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.0.1
 * - Added Spanish language help documentation
 * - This plugin now warns instead of crash on invalid JSON
 *
 * @param Color Options
 *
 * @param Colors
 * @parent Color Options
 * @type struct<Color>[]
 * @desc Set up additional colors here
 * @default []
*/
/*~struct~Color:
 * @param Name
 * @type text
 * @default 
 * @desc Give a name to your color to more easily remember it.
 *
 * @param Color Value
 * @type text
 * @default #ffffff
 * @desc The color value of the color you want. Supports Hex and rgb. Hex format: #ffffff, RGB format: rgb(255, 255, 255)
 *
 * @param ID
 * @type number
 * @min 32
 * @default 32
 * @desc the ID of the color. This will be what you type for x when typing \c[x] into a message
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/infinitecolors/
 * @target MZ
 * @plugindesc Define tus propios colores para usar en los mensajes
 * @help
 * ============================================================================
 * Para términos y condiciones de uso de este pluging en tu juego, por favor
 * visita:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * ¡Conviértete en un Patrocinador para obtener acceso a los plugings beta y
 * alfa, ademas de otras cosas geniales!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Versión: 1.0.1
 * ----------------------------------------------------------------------------
 * Compatibilidad: Sólo probado con mis CGMZ plugins.
 * Hecho para RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * Descripción: Este plugin le permite definir sus propios colores para usar en 
 * mensajes o en cualquier otro lugar donde sean compatibles. Utiliza el mismo 
 * código de escape de color \c[x] donde x es la identificación del color al
 * que desea acceder.
 * ----------------------------------------------------------------------------
 * Documentación:
 * El atributo de nombre no tiene ninguna función en el plugin. Simplemente
 * está ahí para ayudarte a recordar cuál es el color.
 *
 * Los colores admiten el formato hexadecimal. Puede buscar en Google cualquier 
 * selector de color hexadecimal y será el código que se muestra con un #  
 * antes. Por ejemplo, #ffffff es blanco.
 *
 * Los colores admiten el formato rgb. La mayoría de los selectores de color 
 * proporcionan valores de rojo, azul y verde que pondrás en la forma rgb(x, 
 * y, z) donde x, y y z son las cantidades de rojo, azul y verde que tiene el
 * color.
 *
 * La identificación de color proporcionada es el número que ingresa en el  
 * código \c[x] para cambiar de color. Comienza en 32 ya que hay 31 colores 
 * disponibles por defecto. Este plugin conserva los 31 colores originales.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_InfiniteColors.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------Historial de actualizaciones-----------------------------
 * Versión 1.0.1
 * - Added Spanish language help documentation
 * - This plugin now warns instead of crash on invalid JSON
 *
 * @param Color Options
 * @text Opciones de color
 *
 * @param Colors
 * @text Colores
 * @parent Color Options
 * @type struct<Color>[]
 * @desc Configura colores adicionales aquí.
 * @default []
*/
/*~struct~Color:es
 * @param Name
 * @text Nombre
 * @type text
 * @default 
 * @desc Dale un nombre a tu color para recordarlo más fácilmente.
 *
 * @param Color Value
 * @text Valor del Color
 * @type text
 * @default #ffffff
 * @desc El valor de color del color que desea. Soporta hexadecimal y rgb. Formato hexadecimal: #ffffff, formato RGB: rgb (255, 255, 255).
 *
 * @param ID
 * @text ID del color
 * @type number
 * @min 32
 * @default 32
 * @desc la ID del color. Esto será lo que escriba para x cuando escriba \c[x] en un mensaje.
 */
var Imported = Imported || {};
Imported.CGMZ_InfiniteColors = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Infinite Colors"] = "1.0.1";
CGMZ.InfiniteColors = {};
CGMZ.InfiniteColors.parameters = PluginManager.parameters('CGMZ_InfiniteColors');
CGMZ.InfiniteColors.Colors = CGMZ_Utils.parseJSON(CGMZ.InfiniteColors.parameters["Colors"], [], "CGMZ Infinite Colors", "Your Colors parameter had invalid JSON and could not be read.");
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Manage Color Data. Use temp class since this info doesn't need to be saved.
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also initialize color data
//-----------------------------------------------------------------------------
const alias_CGMZ_InfiniteColors_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_InfiniteColors_createPluginData.call(this);
	this.initializeInfiniteColorsData();
};
//-----------------------------------------------------------------------------
// Initialize color data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeInfiniteColorsData = function() {
	this._infiniteColors = {};
	for(const colorJSON of CGMZ.InfiniteColors.Colors) {
		const colorParse = CGMZ_Utils.parseJSON(colorJSON, null, "CGMZ Infinite Colors", "One of your colors had invalid JSON and could not be parsed.")
		if(!colorParse) continue;
		const colorValue = colorParse["Color Value"];
		this._infiniteColors[Number(colorParse.ID)] = colorValue;
	}
};
//-----------------------------------------------------------------------------
// Get Infinite Color
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getInfiniteColor = function(id) {
	return this._infiniteColors[id];
};
//=============================================================================
// Color Manager
//-----------------------------------------------------------------------------
// Load additional text colors
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Return CGMZ color data if n > 31
//-----------------------------------------------------------------------------
const alias_CGMZ_InfiniteColors_textColor = ColorManager.textColor;
ColorManager.textColor = function(n) {
	if(n > 31) {
		return $cgmzTemp.getInfiniteColor(n);
	}
	return alias_CGMZ_InfiniteColors_textColor.call(this, n);
};