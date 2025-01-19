/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/extrastats/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Tracks additional game data not otherwise easily available
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.2.0
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Description: Tracks additional game data such as gold spent at shops,
 * damage taken, items used, and many more. This data is stored in variables
 * so it is easy to access in events. Turn tracking on/off any time.
 * ----------------------------------------------------------------------------
 * Documentation:
 * --------------------------Stats Tracked-------------------------------------
 * The following stats are tracked for the entire party:
 * • Gold spent at shops
 * • Gold earned at shops
 * • Items bought from shops
 * • Items sold to shops
 * • Damage taken
 * • Damage dealt
 * • Items used
 * • Gold looted from battle
 * • Amount of each individual item bought/sold
 * • Amount of each enemy defeated
 *
 * The following stats are tracked per actor:
 * • Times attacked
 * • Times attacked with
 * • Times used skills
 * • Amount of deaths
 * --------------------------Script Calls--------------------------------------
 * These stats are also always stored in CGMZ data separate from the in-game
 * variables. To access these values, use the following javascript in any
 * "script" command (script, command variables->script, etc):
 *
 * $cgmz.getExtraStats("itemsBought")
 * $cgmz.getExtraStats("itemsSold")
 * $cgmz.getExtraStats("itemsUsed")
 * $cgmz.getExtraStats("goldSpent")
 * $cgmz.getExtraStats("goldProfit")
 * $cgmz.getExtraStats("goldLooted")
 * $cgmz.getExtraStats("damageDealt")
 * $cgmz.getExtraStats("damageTaken")
 *
 * This can help track these stats without needing to dedicate in-game
 * variables to them as you can always look them up on the fly.
 * ----------------------------Plugin Commands---------------------------------
 * • Initialize
 * This command will re-initialize all CGMZ Extra Stats data. Does not affect
 * in-game variables, only internal CGMZ data.
 *
 * • Tracking
 * This command will turn all tracking ON or OFF. Tracking is ON by default.
 * When tracking is OFF, both in-game variables and internal CGMZ extra stat
 * data is not tracked.
 *
 * • Get Party Stat
 * Sets a game variable to the selected party stat.
 *
 * • Get Actor Stat
 * Sets a game variable to the selected actor-specific stat.
 *
 * • Get Enemies Killed
 * Sets a game variable to the selected enemy's defeated count
 *
 * • Get Item Stat
 * Sets a game variable to the selected item-specific stat
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 * 
 * ✓ Add plugin to a saved game and stats will start being tracked
 * ✓ Modify parameters and updates will be reflected in saved games
 * ✓ Remove the plugin with no issues to save data
 * ------------------------Legacy Stat Info------------------------------------
 * Legacy stats are the first 8 stats tracked via this plugin.
 *
 * These stats were automatically tracked by variables set up in parameters.
 * New stats do not have the ability to be tracked automatically by variable,
 * as this approach has several issues for per-actor stats. Instead, it is
 * recommended to use the plugin command to get these stats into variables.
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_ExtraStats.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.1.0
 * - Added tracking for actor-specific stats (times attacked, times attacked
 *   with, times used skills).
 * - Added plugin command to get party stats
 * - Added plugin command to get actor stats
 * - This plugin now works in saved games from before this plugin was added
 * - Documentation update
 *
 * Version 1.1.1
 * - Added Spanish language help documentation
 * - This plugin now warns instead of crashes on invalid JSON parameter
 *
 * Version 1.2.0
 * - Added tracking fow how many times each item was bought/sold/used
 * - Added tracking fow how many times each enemy has been defeated
 * - Added tracking fow how many times each actor has died
 * - Fixed bug with some stats returning undefined in rare cases
 * - Fixed bug with updated plugin in saved games
 *
 * @command Initialize
 * @desc Re-initializes CGMZ extra stat data. Only call this if you know what you are doing.
 * Will reset all CGMZ extra stat data as if you started a new game.
 *
 * @command Tracking
 * @desc Turns tracking of extra stats on/off
 *
 * @arg track
 * @type boolean
 * @desc Turns tracking for all extra stats on/off.
 * @default true
 *
 * @command Get Party Stat
 * @desc Get a party-wide stat into a variable
 *
 * @arg stat
 * @type select
 * @option Items Bought
 * @value itemsBought
 * @option Items Sold
 * @value itemsSold
 * @option Gold Profit
 * @value goldProfit
 * @option Gold Spent
 * @value goldSpent
 * @option Items Used
 * @value itemsUsed
 * @option Gold Looted
 * @value goldLooted
 * @option Damage Taken
 * @value damageTaken
 * @option Damage Dealt
 * @value damageDealt
 * @desc The stat to get
 *
 * @arg variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @command Get Actor Stat
 * @desc Get an actor-specific stat into a variable
 *
 * @arg stat
 * @type select
 * @option Times Attacked
 * @value PAtimesAttacked
 * @option Times Attacked With
 * @value PAtimesAttackedWith
 * @option Times Used Skills
 * @value PAtimesUsedSkills
 * @option Times Died
 * @value PAtimesDied
 * @desc The stat to get
 *
 * @arg variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @arg actor
 * @type actor
 * @desc Actor to get the tracked stat from
 * @default 0
 *
 * @command Get Enemies Killed
 * @desc Get the amount of an enemy killed
 *
 * @arg variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @arg Enemy
 * @type enemy
 * @desc The enemy to get the info for
 * @default 0
 *
 * @command Get Item Stat
 * @desc Get an item-specific stat into a variable
 *
 * @arg stat
 * @type select
 * @option Times Used
 * @value Times Used
 * @option Times Bought
 * @value Times Bought
 * @option Times Sold
 * @value Times Sold
 * @default Times Bought
 * @desc The stat to get
 *
 * @arg Variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @arg Item
 * @type item
 * @desc Item to get the tracked stat from. If using this, do not set weapon/armor
 * @default 0
 *
 * @arg Weapon
 * @type weapon
 * @desc Weapon to get the tracked stat from. If using this, do not set item/armor
 * @default 0
 *
 * @arg Armor
 * @type armor
 * @desc Armor to get the tracked stat from. If using this, do not set weapon/item
 * @default 0
 *
 * @param Variable Options
 *
 * @param Items Bought
 * @parent Variable Options
 * @type variable
 * @desc Variable to store items bought from shop count
 * @default 0
 *
 * @param Items Sold
 * @parent Variable Options
 * @type variable
 * @desc Variable to store items sold from shop count
 * @default 0
 *
 * @param Gold Profit
 * @parent Variable Options
 * @type variable
 * @desc Variable to store gold gained from shop sales
 * @default 0
 *
 * @param Gold Spent
 * @parent Variable Options
 * @type variable
 * @desc Variable to store gold lost from shop buy
 * @default 0
 *
 * @param Items Used
 * @parent Variable Options
 * @type variable
 * @desc Variable to store items used from menu or from battle
 * @default 0
 *
 * @param Gold Looted
 * @parent Variable Options
 * @type variable
 * @desc Variable to store gold looted from battle
 * @default 0
 *
 * @param Damage Taken
 * @parent Variable Options
 * @type variable
 * @desc Variable to store damage taken
 * @default 0
 *
 * @param Damage Dealt
 * @parent Variable Options
 * @type variable
 * @desc Variable to store damage dealt
 * @default 0
 *
 * @param Ignored Skills
 * @type skill[]
 * @desc Skills that, when used, do not add to actor's Times Used Skills
 * @default []
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/extrastats/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Rastrea datos adicionales del juego que de otro modo no estarían fácilmente disponibles
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
 * Versión: 1.2.0
 * ----------------------------------------------------------------------------
 * Compatibilidad: Sólo probado con mis CGMZ plugins.
 * Hecho para RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Descripción: Realiza un seguimiento de los datos adicionales del juego,
 * como el oro gastado en las tiendas, el daño recibido, los elementos
 * utilizados y muchos más. Estos datos se almacenan en variables, por lo que
 * es fácil acceder a ellos en los eventos. Activa o desactiva el seguimiento
 * en cualquier momento.
 * ----------------------------------------------------------------------------
 * Documentación:
 * ------------------------Estadísticas rastreadas-----------------------------
 * Las siguientes estadísticas se registran para todo el grupo:
 * • Oro gastado en tiendas
 * • Oro ganado en las tiendas
 * • Artículos comprados en tiendas
 * • Artículos vendidos a tiendas
 * • Daño recibido
 * • Daño infligido
 * • Elementos utilizados
 * • Oro saqueado de la batalla
 * • Amount of each individual item bought/sold
 * • Amount of each enemy defeated
 *
 * Las siguientes estadísticas se rastrean por actor:
 * • Tiempos atacados
 * • Tiempos atacados con
 * • Habilidades veces utilizadas
 * • Amount of deaths
 * -------------------------Llamadas de guión----------------------------------
 * Estas estadísticas también se almacenan siempre en datos CGMZ separados de 
 * las variables del juego. Para acceder a estos valores, use el siguiente 
 * javascript en cualquier comando "guión" (guión, variables de comando->guión,
 * etc.):
 *
 * $cgmz.getExtraStats("itemsBought") > Articulos comprados
 * $cgmz.getExtraStats("itemsSold")   > Articulos vendidos
 * $cgmz.getExtraStats("itemsUsed")   > Articulos usados
 * $cgmz.getExtraStats("goldSpent")   > Oro gastado
 * $cgmz.getExtraStats("goldProfit")  > Ganancia de oro
 * $cgmz.getExtraStats("goldLooted")  > Oro saqueado
 * $cgmz.getExtraStats("damageDealt") > Daño inflingido
 * $cgmz.getExtraStats("damageTaken") > Daño recibido
 *
 * Esto puede ayudar a rastrear estas estadísticas sin necesidad de dedicarles 
 * variables en el juego, ya que siempre puedes buscarlas sobre la marcha.
 * ------------------------Comandos de Plugin----------------------------------
 * • Inicializar
 * Este plugin reiniciará todos los datos de CGMZ Extra Stats. No afecta las 
 * variables del juego, solo los datos internos de CGMZ.
 *
 * • Seguimiento
 * Este plugin activará o desactivará todo el seguimiento. El seguimiento está 
 * activado de forma predeterminada. Cuando el seguimiento está desactivadp, no 
 * se realiza el seguimiento de las variables del juego ni de las estadísticas 
 * adicionales internas de CGMZ.
 *
 * • Obtener estadísticas de grupo
 * Establece una variable de juego a la estadística del grupo seleccionado.
 *
 * • Obtener estadísticas de actor
 * Establece una variable de juego a la estadística específica del actor
 * seleccionado.
 *
 * • Get Enemies Killed
 * Sets a game variable to the selected enemy's defeated count
 *
 * • Get Item Stat
 * Sets a game variable to the selected item-specific stat
 * -------------------------Juegos Gardados------------------------------------
 * Este plugin es totalmente compatible con juegos guardados. Esto significa
 * que puedes:
 *
 * ✓ Agregue un plugin a un juego guardado y las estadísticas comenzarán a
 *   rastrearse.
 * ✓ Modificar parámetros y actualizaciones se reflejarán en partidas
 *   guardadas.
 * ✓ Eliminar el plugin sin problemas para guardar datos
 * -----------------Información de estadísticas heredadas----------------------
 * Las estadísticas heredadas son las primeras 8 estadísticas rastreadas a
 * través de este complemento.
 *
 * Estas estadísticas fueron rastreadas automáticamente por variables 
 * configuradas en parámetros.
 * Las nuevas estadísticas no tienen la capacidad de ser rastreadas
 * automáticamente por variable, ya que este enfoque tiene varios problemas
 * para las estadísticas por actor. En su lugar, se recomienda usar el comando
 * del complemento para convertir estas estadísticas en variables.
 * -------------------------Nombre de Archivo----------------------------------
 * El nombre de archivo de este plugin DEBE seguir siendo CGMZ_ExtraStats.js
 * Esto es lo que se obtiene cuando se descarga. El nombre de archivo se usa 
 * para cargar parámetros y ejecutar comandos de plugin. Si lo cambias, las 
 * cosas comenzarán a comportarse incorrectamente y tu juego probablemente se 
 * bloquee. Por favor no cambies el nombre del archivo js.
 * -----------------------Historial de Versiones-------------------------------
 * Versión 1.1.0
 * - Seguimiento agregado para estadísticas específicas del actor (veces 
 *   atacado, veces atacado con, veces usado habilidades).
 * - Se agregó un comando de complemento para obtener estadísticas de la
 *   fiesta.
 * - Comando de complemento agregado para obtener estadísticas de actores.
 * - Este complemento ahora funciona en juegos guardados antes de que se 
 *   agregara este complemento.
 * - Actualización de la documentación.
 *
 * Versión 1.1.1
 * - Added Spanish language help documentation
 * - This plugin now warns instead of crashes on invalid JSON parameter
 *
 * Versión 1.2.0
 * - Added tracking fow how many times each item was bought/sold/used
 * - Added tracking fow how many times each enemy has been defeated
 * - Added tracking fow how many times each actor has died
 * - Fixed bug with some stats returning undefined in rare cases
 * - Fixed bug with updated plugin in saved games
 *
 * @command Initialize
 * @desc Re-initializes CGMZ extra stat data. Only call this if you know what you are doing.
 * Will reset all CGMZ extra stat data as if you started a new game.
 *
 * @command Tracking
 * @text Seguimiento
 * @desc Activa o desactiva el seguimiento de estadísticas adicionales.
 *
 * @arg track
 * @text Activar/desactivar seguimiento
 * @type boolean
 * @desc Activa o desactiva el seguimiento de todas las estadísticas adicionales.
 * @default true
 *
 * @command Get Party Stat
 * @text Obtener estadísticas de partido
 * @desc Obtener una estadística de todo el partido en una variable.
 *
 * @arg stat
 * @text Estadística
 * @type select
 * @option Items Bought
 * @value itemsBought
 * @option Items Sold
 * @value itemsSold
 * @option Gold Profit
 * @value goldProfit
 * @option Gold Spent
 * @value goldSpent
 * @option Items Used
 * @value itemsUsed
 * @option Gold Looted
 * @value goldLooted
 * @option Damage Taken
 * @value damageTaken
 * @option Damage Dealt
 * @value damageDealt
 * @desc La estadística para obtener.
 *
 * @arg variable
 * @text Variable
 * @type variable
 * @desc Variable en la cual almacenar la estadística.
 * @default 0
 *
 * @command Get Actor Stat
 * @text Obtener estadísticas de actor
 * @desc Obtener una estadística específica del actor en una variable.
 *
 * @arg stat
 * @text Estadística
 * @type select
 * @option Times Attacked
 * @value PAtimesAttacked
 * @option Times Attacked With
 * @value PAtimesAttackedWith
 * @option Times Used Skills
 * @value PAtimesUsedSkills
 * @option Times Died
 * @value PAtimesDied
 * @desc La estadística para obtener.
 *
 * @arg variable
 * @text Varible
 * @type variable
 * @desc Variable en la cual almacenar la estadística.
 * @default 0
 *
 * @arg actor
 * @text Actor 
 * @type actor
 * @desc Actor desde el cual obtener la estadística rastreada.
 * @default 0
 *
 * @command Get Enemies Killed
 * @desc Get the amount of an enemy killed
 *
 * @arg variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @arg Enemy
 * @type enemy
 * @desc The enemy to get the info for
 * @default 0
 *
 * @command Get Item Stat
 * @desc Get an item-specific stat into a variable
 *
 * @arg stat
 * @type select
 * @option Times Used
 * @value Times Used
 * @option Times Bought
 * @value Times Bought
 * @option Times Sold
 * @value Times Sold
 * @default Times Bought
 * @desc The stat to get
 *
 * @arg Variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @arg Item
 * @type item
 * @desc Item to get the tracked stat from. If using this, do not set weapon/armor
 * @default 0
 *
 * @arg Weapon
 * @type weapon
 * @desc Weapon to get the tracked stat from. If using this, do not set item/armor
 * @default 0
 *
 * @arg Armor
 * @type armor
 * @desc Armor to get the tracked stat from. If using this, do not set weapon/item
 * @default 0
 *
 * @param Variable Options
 * @text Opciones de Variable
 *
 * @param Items Bought
 * @text Artículos comprados
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar artículos comprados en la tienda
 * @default 0
 *
 * @param Items Sold
 * @text Artículos vendidos
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar artículos vendidos del recuento de tiendas.
 * @default 0
 *
 * @param Gold Profit
 * @text Ganancias de oro
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar oro obtenido de las ventas en tiendas.
 * @default 0
 *
 * @param Gold Spent
 * @text Oro gastado
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar oro perdido por compra en tienda.
 * @default 0
 *
 * @param Items Used
 * @text Artículos usados
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar elementos utilizados desde el menú o desde la batalla.
 * @default 0
 *
 * @param Gold Looted
 * @text Oro saqueado
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar el oro saqueado de la batalla.
 * @default 0
 *
 * @param Damage Taken
 * @text Daño recibido
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar el daño recibido.
 * @default 0
 *
 * @param Damage Dealt
 * @text Daño infligido
 * @parent Variable Options
 * @type variable
 * @desc Variable para almacenar el daño infligido.
 * @default 0
 *
 * @param Ignored Skills
 * @text Habilidades ignoradas
 * @type skill[]
 * @desc Habilidades que, cuando se usan, no se suman a las habilidades usadas por el actor.
 * @default []
*/
Imported.CGMZ_ExtraStats = true;
CGMZ.Versions["Extra Stats"] = "1.2.0";
CGMZ.ExtraStats = {};
CGMZ.ExtraStats.parameters = PluginManager.parameters('CGMZ_ExtraStats');
CGMZ.ExtraStats.ItemsBought = Number(CGMZ.ExtraStats.parameters["Items Bought"]);
CGMZ.ExtraStats.ItemsSold = Number(CGMZ.ExtraStats.parameters["Items Sold"]);
CGMZ.ExtraStats.GoldProfit = Number(CGMZ.ExtraStats.parameters["Gold Profit"]);
CGMZ.ExtraStats.GoldSpent = Number(CGMZ.ExtraStats.parameters["Gold Spent"]);
CGMZ.ExtraStats.ItemsUsed = Number(CGMZ.ExtraStats.parameters["Items Used"]);
CGMZ.ExtraStats.GoldLooted = Number(CGMZ.ExtraStats.parameters["Gold Looted"]);
CGMZ.ExtraStats.DamageTaken = Number(CGMZ.ExtraStats.parameters["Damage Taken"]);
CGMZ.ExtraStats.DamageDealt = Number(CGMZ.ExtraStats.parameters["Damage Dealt"]);
CGMZ.ExtraStats.IgnoredSkills = CGMZ_Utils.parseJSON(CGMZ.ExtraStats.parameters["Ignored Skills"], [], "CGMZ Extra Stats", "Your Ignored Skills parameter is set up incorrectly.").map(x => Number(x));
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add plugin commands for CGMZ Extra Stats
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_ExtraStats_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Initialize", this.pluginCommandExtraStatsReinitialize);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Tracking", this.pluginCommandExtraStatsTracking);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Get Party Stat", this.pluginCommandExtraStatsGetPartyStat);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Get Actor Stat", this.pluginCommandExtraStatsGetActorStat);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Get Enemies Killed", this.pluginCommandExtraStatsGetEnemiesKilled);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Get Item Stat", this.pluginCommandExtraStatsGetItemStat);
};
//-----------------------------------------------------------------------------
// Reinitializes the extra stats plugin data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsReinitialize = function(args) {
	$cgmz.initExtraStatsVars(true);
};
//-----------------------------------------------------------------------------
// Turn tracking ON/OFF
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsTracking = function(args) {
	$cgmz.setExtraStatsTracking(args.track === "true");
};
//-----------------------------------------------------------------------------
// Get a Party Stat into a game variable
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsGetPartyStat = function(args) {
	const variable = Number(args.variable);
	const value = $cgmz.getExtraStats(args.stat);
	$gameVariables.setValue(variable, value);
};
//-----------------------------------------------------------------------------
// Get an Actor Stat into a game variable
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsGetActorStat = function(args) {
	const variable = Number(args.variable);
	const actorId = Number(args.actor);
	const value = $cgmz.getExtraStatsActor(args.stat, actorId);
	$gameVariables.setValue(variable, value);
};
//-----------------------------------------------------------------------------
// Get an Actor Stat into a game variable
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsGetEnemiesKilled = function(args) {
	const variable = Number(args.variable);
	const enemyId = Number(args.Enemy);
	const value = $cgmz.getExtraStatsActor('individualEnemiesKilled', enemyId);
	$gameVariables.setValue(variable, value);
};
//-----------------------------------------------------------------------------
// Get an Actor Stat into a game variable
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsGetItemStat = function(args) {
	const variable = Number(args.Variable);
	const stat = args.stat;
	let id, key;
	if(Number(args.Item)) {
		id = Number(args.Item);
		key = (stat === 'Times Used') ? 'individualItemsUsed' : (stat === 'Times Bought') ? 'individualItemsBought' : 'individualItemsSold';
	}
	if(Number(args.Weapon)) {
		id = Number(args.Weapon);
		key = (stat === 'Times Bought') ? 'individualWeaponsBought' : 'individualWeaponsSold';
	}
	if(Number(args.Armor)) {
		id = Number(args.Armor);
		key = (stat === 'Times Bought') ? 'individualArmorsBought' : 'individualArmorsSold';
	}
	if(!key) return;
	const value = $cgmz.getExtraStatsActor(key, id);
	$gameVariables.setValue(variable, value);
};
//=============================================================================
// CGMZ
//-----------------------------------------------------------------------------
// Add new tracked stats to the save data
// Modifies: createPluginData
//=============================================================================
//-----------------------------------------------------------------------------
// Method used by CGMZ for creating plugin data
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_ExtraStats_createPluginData.call(this);
	this.initExtraStatsVars();
};
//-----------------------------------------------------------------------------
// Check for new data after game load
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_CGMZ_Core_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZ_ExtraStats_CGMZ_Core_onAfterLoad.call(this);
	this.initExtraStatsVars();
};
//-----------------------------------------------------------------------------
// Initialize Extra Stats variables
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initExtraStatsVars = function(reinitialize = false) {
	if(!this._extraStats || reinitialize) {
		this._extraStatsVersion = '1.2.0';
		this._extraStatsTracking = true;
		this._extraStats = {
			'itemsBought': 0,
			'itemsSold': 0,
			'goldProfit': 0,
			'goldSpent': 0,
			'itemsUsed': 0,
			'goldLooted': 0,
			'damageTaken': 0,
			'damageDealt': 0,
			'PAtimesAttacked': {},
			'PAtimesAttackedWith': {},
			'PAtimesUsedSkills': {},
			'PAtimesDied': {},
			'individualItemsBought': {},
			'individualItemsSold': {},
			'individualWeaponsBought': {},
			'individualWeaponsSold': {},
			'individualArmorsBought': {},
			'individualArmorsSold': {},
			'individualItemsUsed': {},
			'individualEnemiesKilled': {}
		};
	}
	if(!this._extraStatsVersion) { // Patch version 1.0 to 1.1.0
		this._extraStatsVersion = '1.1.0';
		this._extraStats.PAtimesAttacked = {};
		this._extraStats.PAtimesAttackedWith = {};
		this._extraStats.PAtimesUsedSkills = {};
	} // End patch version 1.0 to 1.1.0
	if(this._extraStatsVersion === '1.1.0') { // Patch version 1.1.0 to 1.2.0
		this._extraStatsVersion = '1.2.0';
		this._extraStats.PAtimesDied = {};
		this._extraStats.individualItemsBought = {};
		this._extraStats.individualItemsSold = {};
		this._extraStats.individualWeaponsBought = {};
		this._extraStats.individualWeaponsSold = {};
		this._extraStats.individualArmorsBought = {};
		this._extraStats.individualArmorsSold = {};
		this._extraStats.individualItemsUsed = {};
		this._extraStats.individualEnemiesKilled = {};
	} // End patch version 1.1.0 to 1.2.0
};
//-----------------------------------------------------------------------------
// Getter for whether to track stats or not
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.isTrackingExtraStats = function() {
	return this._extraStatsTracking;
};
//-----------------------------------------------------------------------------
// Setter for whether to track stats or not
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setExtraStatsTracking = function(tracking) {
	this._extraStatsTracking = tracking;
};
//-----------------------------------------------------------------------------
// Getter for party extra stats
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getExtraStats = function(key) {
	return this._extraStats[key];
};
//-----------------------------------------------------------------------------
// Setter for party extra stats.
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setExtraStats = function(key, num) {
	this._extraStats[key] = num;
};
//-----------------------------------------------------------------------------
// Add method for party extra stats
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.addExtraStats = function(key, num) {
	const value = this.getExtraStats(key);
	this.setExtraStats(key, num + value);
};
//-----------------------------------------------------------------------------
// Getter for actor extra stats
// These functions also handle individual stats (such as enemies)
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getExtraStatsActor = function(key, actorId) {
	return this.getExtraStats(key)[actorId] || 0;
};
//-----------------------------------------------------------------------------
// Setter for actor extra stats
// These functions also handle individual stats (such as enemies)
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setExtraStatsActor = function(key, actorId, num) {
	this._extraStats[key][actorId] = num;
};
//-----------------------------------------------------------------------------
// Add method for actor extra stats
// These functions also handle individual stats (such as enemies)
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.addExtraStatsActor = function(key, actorId, num) {
	const value = this.getExtraStatsActor(key, actorId);
	this.setExtraStatsActor(key, actorId, num + value);
};
//=============================================================================
// Scene_Shop
//-----------------------------------------------------------------------------
// Automatic tracking for items bought, sold, and gold gained from sell, lost from buy
// modified functions: doBuy, doSell
//=============================================================================
//-----------------------------------------------------------------------------
// Alias: Track items bought, gold spent on items.
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_SceneShop_doBuy = Scene_Shop.prototype.doBuy;
Scene_Shop.prototype.doBuy = function(number) {
	alias_CGMZ_ExtraStats_SceneShop_doBuy.call(this, number);
	if($cgmz.isTrackingExtraStats()) {
		const oldItemBuyCount = $gameVariables.value(CGMZ.ExtraStats.ItemsBought);
		$gameVariables.setValue(CGMZ.ExtraStats.ItemsBought, oldItemBuyCount + number);
		$cgmz.addExtraStats('itemsBought', number);
		const oldSpentCount = $gameVariables.value(CGMZ.ExtraStats.GoldSpent);
		const amount = number * this.buyingPrice();
		$gameVariables.setValue(CGMZ.ExtraStats.GoldSpent, oldSpentCount + amount);
		$cgmz.addExtraStats("goldSpent", amount);
		if(DataManager.isItem(this._item)) {
			$cgmz.addExtraStatsActor('individualItemsBought', this._item.id, number);
		} else if(DataManager.isWeapon(this._item)) {
			$cgmz.addExtraStatsActor('individualWeaponsBought', this._item.id, number);
		} else if(DataManager.isArmor(this._item)) {
			$cgmz.addExtraStatsActor('individualArmorsBought', this._item.id, number);
		}
	}
};
//-----------------------------------------------------------------------------
// Alias: Track items sold, gold gained from sale
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_SceneShop_doSell = Scene_Shop.prototype.doSell;
Scene_Shop.prototype.doSell = function(number) {
	alias_CGMZ_ExtraStats_SceneShop_doSell.call(this, number);
	if($cgmz.isTrackingExtraStats()) {
		const oldItemSellCount = $gameVariables.value(CGMZ.ExtraStats.ItemsSold);
		$gameVariables.setValue(CGMZ.ExtraStats.ItemsSold, oldItemSellCount + number);
		$cgmz.addExtraStats("itemsSold", number);
		const oldProfitCount = $gameVariables.value(CGMZ.ExtraStats.GoldProfit);
		const amount = number * this.sellingPrice();
		$gameVariables.setValue(CGMZ.ExtraStats.GoldProfit, oldProfitCount + amount);
		$cgmz.addExtraStats("goldProfit", amount);
		if(DataManager.isItem(this._item)) {
			$cgmz.addExtraStatsActor('individualItemsSold', this._item.id, number);
		} else if(DataManager.isWeapon(this._item)) {
			$cgmz.addExtraStatsActor('individualWeaponsSold', this._item.id, number);
		} else if(DataManager.isArmor(this._item)) {
			$cgmz.addExtraStatsActor('individualArmorsSold', this._item.id, number);
		}
	}
};
//=============================================================================
// Game_Party
//-----------------------------------------------------------------------------
// Automatic tracking for items used
//=============================================================================
//-----------------------------------------------------------------------------
// Alias: Track items used
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_GameParty_consumeItem = Game_Party.prototype.consumeItem;
Game_Party.prototype.consumeItem = function(item) {
	alias_CGMZ_ExtraStats_GameParty_consumeItem.call(this, item);
	if(DataManager.isItem(item) && $cgmz.isTrackingExtraStats()) {
		const oldItemsUsed = $gameVariables.value(CGMZ.ExtraStats.ItemsUsed);
		$gameVariables.setValue(CGMZ.ExtraStats.ItemsUsed, oldItemsUsed + 1);
		$cgmz.addExtraStats("itemsUsed", 1);
		$cgmz.addExtraStatsActor('individualItemsUsed', item.id, 1);
	}
};
//=============================================================================
// Game_Actor
//-----------------------------------------------------------------------------
// Automatic tracking for actor deaths
//=============================================================================
//-----------------------------------------------------------------------------
// Track amount of deaths for actor
//-----------------------------------------------------------------------------
const alias_CGMZExtraStats_GameActor_performCollapse = Game_Actor.prototype.performCollapse;
Game_Actor.prototype.performCollapse = function() {
	alias_CGMZExtraStats_GameActor_performCollapse.call(this);
	const id = this.actorId();
	$cgmz.addExtraStatsActor('PAtimesDied', id, 1);
};
//=============================================================================
// Game_Enemy
//-----------------------------------------------------------------------------
// Automatic tracking for enemy defeated
//=============================================================================
//-----------------------------------------------------------------------------
// Track amount of enemies of this type defeated
//-----------------------------------------------------------------------------
const alias_CGMZExtraStats_GameEnemy_performCollapse = Game_Enemy.prototype.performCollapse;
Game_Enemy.prototype.performCollapse = function() {
	alias_CGMZExtraStats_GameEnemy_performCollapse.call(this);
	const id = this.enemyId();
	$cgmz.addExtraStatsActor('individualEnemiesKilled', id, 1);
};
//=============================================================================
// BattleManager
//-----------------------------------------------------------------------------
// Automatic tracking for gold looted from battle
// modified functions: gainGold
//=============================================================================
//-----------------------------------------------------------------------------
// Alias: Track gold looted
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_BattleManager_gainGold = BattleManager.gainGold;
BattleManager.gainGold = function() {
	alias_CGMZ_ExtraStats_BattleManager_gainGold.call(this);
	if($cgmz.isTrackingExtraStats()) {
		const oldGoldLooted = $gameVariables.value(CGMZ.ExtraStats.GoldLooted);
		$gameVariables.setValue(CGMZ.ExtraStats.GoldLooted, oldGoldLooted + this._rewards.gold);
		$cgmz.addExtraStats("goldLooted", this._rewards.gold);
	}
};
//=============================================================================
// Game_Action
//-----------------------------------------------------------------------------
// Automatic tracking for damage taken/dealt
//=============================================================================
//-----------------------------------------------------------------------------
// Alias - Track damage taken/dealt
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_GameAction_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
	alias_CGMZ_ExtraStats_GameAction_executeHpDamage.call(this, target, value);
	if(target.isActor() && value > 0 && $cgmz.isTrackingExtraStats()) {
		const oldDamageTaken = $gameVariables.value(CGMZ.ExtraStats.DamageTaken);
		$gameVariables.setValue(CGMZ.ExtraStats.DamageTaken, oldDamageTaken + value);
		$cgmz.addExtraStats("damageTaken", value);
	}
	else if(target.isEnemy() && value > 0 && $cgmz.isTrackingExtraStats()) {
		const oldDamageDealt = $gameVariables.value(CGMZ.ExtraStats.DamageDealt);
		$gameVariables.setValue(CGMZ.ExtraStats.DamageDealt, oldDamageDealt + value);
		$cgmz.addExtraStats("damageDealt", value);
	}
};
//-----------------------------------------------------------------------------
// Alias - Track damage taken/dealt
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_GameAction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	alias_CGMZ_ExtraStats_GameAction_apply.call(this, target);
	if($cgmz.isTrackingExtraStats()) {
		if(target.isActor() && this.subject().isEnemy()) {
			$cgmz.addExtraStatsActor('PAtimesAttacked', target.actorId(), 1);
		} else if(target.isEnemy() && this.subject().isActor()) {
			$cgmz.addExtraStatsActor('PAtimesAttackedWith', this.subject().actorId(), 1);
			if(this.isSkill() && !CGMZ.ExtraStats.IgnoredSkills.includes(this.item().id)) {
				$cgmz.addExtraStatsActor('PAtimesUsedSkills', this.subject().actorId(), 1);
			}
		} else if(this.subject().isActor() && this.isSkill() && !CGMZ.ExtraStats.IgnoredSkills.includes(this.item().id)) {
			$cgmz.addExtraStatsActor('PAtimesUsedSkills', this.subject().actorId(), 1);
		}
	}
};