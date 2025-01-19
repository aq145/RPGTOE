/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/vehiclelandingrestrictions/
 * @target MZ
 * @plugindesc Allows you to restrict where a vehicle can dock by region
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
 * Description: This plugin allows you to restrict where vehicles can land/dock
 * based on a region. There are separate restrictions on a per-vehicle basis.
 * ----------------------------------------------------------------------------
 * Documentation:
 * This plugin adds additional requirements for landing a vehicle, it still
 * obeys the default landing restrictions.
 *
 * The region IDs specified for each vehicle stop it from being able to land
 * while it is currently on that region ID. To stop boat/ship from landing
 * somewhere, put the region on the sea tiles rather than the land tiles.
 * -------------------------Plugin Commands------------------------------------
 * This plugin does not have any plugin commands.
 * ---------------------------Saved Games--------------------------------------
 * This plugin fully supports saved games.
 * ✓ You should be able to add this plugin to a saved game
 * ✓ You can modify plugin parameters and have them reflected in saved games
 * ✓ You can remove this plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * This plugin's JS filename MUST remain CGMZ_VehicleLandingRestrictions.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.0.1:
 * - Documentation update
 * - Added Spanish documentation language
 * - This plugin no longer crashes if your JSON parameters are invalid
 * 
 * @param Boat Options
 * @param Ship Options
 * @param Airship Options
 *
 * @param Boat Landing Regions
 * @type number[]
 * @min 1
 * @default []
 * @parent Boat Options
 * @desc Region IDs that disallow the vehicle to dock. Leaving this empty means it can dock anywhere.
 *
 * @param Ship Landing Regions
 * @type number[]
 * @min 1
 * @default []
 * @parent Ship Options
 * @desc Region IDs that disallow the vehicle to dock. Leaving this empty means it can dock anywhere.
 *
 * @param Airship Landing Regions
 * @type number[]
 * @min 1
 * @default []
 * @parent Airship Options
 * @desc Region IDs that disallow the vehicle to land. Leaving this empty means it can land anywhere.
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/vehiclelandingrestrictions/
 * @target MZ
 * @plugindesc Te permite restringir dónde puede atracar o aterrizar un vehículo por región.
 * @help
 * ============================================================================
 * Para terminos y condiciones de uso de este pluging en tu juego, por favor
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
 * Descripción: Este plugin te permite restringir dónde pueden
 * aterrizar/atracar los vehículos basado en una región. Hay restricciones
 * separadas por vehículo.
 * ----------------------------------------------------------------------------
 * Documentación:
 * Este plugin agrega requisitos adicionales para aterrizar un vehículo, aún
 * obedece las restricciones de aterrizaje predeterminadas.
 *
 * Los ID de región especificados para cada vehículo impiden que pueda
 * aterrizar mientras se encuentra actualmente en ese ID de región. Para evitar
 * que el barco/barco aterrice en algún lugar, coloca la región en las fichas
 * de mar en lugar de las fichas de tierra.
 * -------------------------Plugin Commands------------------------------------
 * This plugin does not have any plugin commands.
 * ---------------------------Saved Games--------------------------------------
 * This plugin fully supports saved games.
 * ✓ You should be able to add this plugin to a saved game
 * ✓ You can modify plugin parameters and have them reflected in saved games
 * ✓ You can remove this plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * This plugin's JS filename MUST remain CGMZ_VehicleLandingRestrictions.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * ------------------------Historial de Versiones------------------------------
 * Versión 1.0.1:
 * - Documentation update
 * - Added Spanish documentation language
 * - This plugin no longer crashes if your JSON parameters are invalid
 * 
 * @param Boat Options
 * @text Opciones de Bote
 * @param Ship Options
 * @text Opciones de Barco
 * @param Airship Options
 * @text Opciones de Dirigible
 *
 * @param Boat Landing Regions
 * @text Regiones de aterrizaje de botes
 * @type number[]
 * @min 1
 * @default []
 * @parent Boat Options
 * @desc ID de región que no permiten que el vehículo se acople. Dejar esto vacío significa que puede acoplarse en cualquier lugar.
 *
 * @param Ship Landing Regions
 * @text Regiones de aterrizaje de barcos
 * @type number[]
 * @min 1
 * @default []
 * @parent Ship Options
 * @desc ID de región que no permiten que el vehículo se acople. Dejar esto vacío significa que puede acoplarse en cualquier lugar
 *
 * @param Airship Landing Regions
 * @text Regiones de aterrizaje de dirigibles
 * @type number[]
 * @min 1
 * @default []
 * @parent Airship Options
 * @desc ID de región que impiden que el vehículo aterrice. Dejar esto vacío significa que puede aterrizar en cualquier lugar.
*/
var Imported = Imported || {};
Imported.CGMZ_VehicleLandingRestrictions = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Vehicle Landing Restrictions"] = "1.0.1";
CGMZ.VehicleLandingRestrictions = {};
CGMZ.VehicleLandingRestrictions.parameters = PluginManager.parameters('CGMZ_VehicleLandingRestrictions');
CGMZ.VehicleLandingRestrictions.BoatDockRegions = CGMZ_Utils.parseJSON(CGMZ.VehicleLandingRestrictions.parameters["Boat Landing Regions"], [], "CGMZ Vehicle Landing Restrictions", "Your Boat restrictions had invalid JSON");
CGMZ.VehicleLandingRestrictions.ShipDockRegions = CGMZ_Utils.parseJSON(CGMZ.VehicleLandingRestrictions.parameters["Ship Landing Regions"], [], "CGMZ Vehicle Landing Restrictions", "Your Ship restrictions had invalid JSON");
CGMZ.VehicleLandingRestrictions.AirshipDockRegions = CGMZ_Utils.parseJSON(CGMZ.VehicleLandingRestrictions.parameters["Airship Landing Regions"], [], "CGMZ Vehicle Landing Restrictions", "Your Airship restrictions had invalid JSON");
//=============================================================================
// Game_Vehicle
//-----------------------------------------------------------------------------
// Modify the vehicle object for additional options
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also check for landing regions
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleLandingRestrictions_isLandOk = Game_Vehicle.prototype.isLandOk;
Game_Vehicle.prototype.isLandOk = function(x, y, d) {
    return alias_CGMZ_VehicleLandingRestrictions_isLandOk.call(this, x, y, d) && this.CGMZ_VehicleLandingRestrictions_canLand(x, y, d);
};
//-----------------------------------------------------------------------------
// Check the region the player is in for a no-land region
//-----------------------------------------------------------------------------
Game_Vehicle.prototype.CGMZ_VehicleLandingRestrictions_canLand = function(x, y, d) {
    const currentRegionId = $gameMap.regionId(x, y);
	if(this.isBoat()) {
		for(const region of CGMZ.VehicleLandingRestrictions.BoatDockRegions) {
			if(currentRegionId === Number(region)) return false;
		}
	}
	else if (this.isShip()) {
		for(const region of CGMZ.VehicleLandingRestrictions.ShipDockRegions) {
			if(currentRegionId === Number(region)) return false;
		}
	}
	else if (this.isAirship()) {
		for(const region of CGMZ.VehicleLandingRestrictions.AirshipDockRegions) {
			if(currentRegionId === Number(region)) return false;
		}
	}
	return true;
};