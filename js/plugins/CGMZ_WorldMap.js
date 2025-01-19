/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/worldmap/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Show a world map with icons and other markers on top
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Alpha
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Description: Show a world map with icons and other markers on top. You can
 * cause icons to appear over the world map when needed, and hide them when
 * not needed. This allows a world map that can give the player location info
 * for important quest objective locations and other info. You can also show
 * the player's current location on the map.
 * ----------------------------------------------------------------------------
 * Documentation:
 * -----------------------------Alpha Notes------------------------------------
 * Planned features to be added:
 * 1) Animated maps and animations above the map
 * 2) Fast Travel integration
 * 3) Fog of war system to cover up undiscovered parts of the maps
 * 4) Map legends
 * 5) Placeable markers
 * 6) Marker tooltips
 * 7) Marker that are not just iconset icons
 * 8) Animated markers
 * 9) Map links to browse various maps within the scene
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post, Itch.io Page, or in my discord under the #suggestions
 * channel!
 * https://discord.gg/Gbx7JXP
 * -----------------------------Main Features----------------------------------
 * MAP SCENE
 * Open a scene with a world map that can display icons and other important
 * information in a way that can easily convey location-based info. Show where
 * the player is on the map. Change what displays on the map over time as the
 * story progresses.
 * -----------------------------Minor Features---------------------------------
 * MAP TRACKING
 * Where should the player icon be positioned while walking around the world
 * map? Introducing the map tracking feature! Each world map parameter comes 
 * with the option to have a corresponding RPG Maker Map ID that will instead
 * cause the player icon to be positioned by their x/y coordinates on the map.
 *
 * So, for example, if the player is standing right in the middle of the world
 * map in game, when they open the world map scene it will show their icon
 * right in the middle of the map. You can also set bounds for the map, such as
 * minimum X/Y and maximum X/Y in case your map includes details outside the
 * playable area.
 *
 * While not on the map in game, the player's icon will instead be positioned
 * on the map scene by map data via note tag.
 * --------------------------------Note Tags-----------------------------------
 * To determine which map displays (other than when forced to show a map via
 * plugin command or script call), use the following note tag in map
 * properties:
 * <cgmzwm:id>
 * You would replace id with the World Map id. For example if you wanted to
 * show your map with id "world" you would do:
 * <cgmzwm:world>
 *
 * To determine which player icon display is used (the location of the player
 * icon on the map), you can use a similar note tag in the map properties:
 * <cgmzwmpos:id>
 * You would replace id with the Player Icon Display id, for example if your
 * id for the player icon display you wanted to use was "outside" you would
 * do:
 * <cgmzwmpos:outside>
 * -------------------------------JavaScript-----------------------------------
 * To call the world map scene using JavaScript, use the following code:
 * SceneManager.push(CGMZ_Scene_WorldMap);
 *
 * You can also force the scene to show a specific map by adding a second line:
 * SceneManager.prepareNextScene("YourMapIdHere");
 * Note that the map id is the id set in the plugin parameters, not the
 * numerical id assigned to a map within the RPG Maker editor.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin has the following plugin commands:
 *
 * • Call Map Scene
 * Opens the world map
 *
 * • Change Player Visibility
 * Show or hide the player icon on the world map
 *
 * • Change Player Icon
 * Change the player's icon
 *
 * • Create Marker
 * Creates a new world map marker
 *
 * • Edit Marker - Position
 * Edits an existing marker's position
 *
 * • Edit Marker - Visibility
 * Edits an existing marker's visibility
 *
 * • Delete Marker
 * Removes an existing marker from game data
 * ------------------------------Integrations----------------------------------
 * [CGMZ] Actor Upgrade
 * This plugin makes use of the icon associated with an actor via this plugin,
 * to set it up make sure you have [CGMZ] Actor Upgrade installed and set the
 * player icon to 0. Then, it will use the icon of the lead actor.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is partially compatible with saved games
 *
 * This means the following will work in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify most* plugin parameters
 * ✓ Remove this plugin from your game
 * 
 * * Note that you cannot edit some parameters as they are added to save data.
 * This includes map markers and map data, but not player icon display data.
 * This includes removing certain data, but adding new data should work.
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_WorldMap.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * ----------------------------Version History---------------------------------
 * Alpha - Initial Release
 *
 * @command Call Scene
 * @desc Call the world map scene
 *
 * @arg id
 * @desc The map id to show in the scene
 *
 * @command Change Player Visibility
 * @desc Set the player icon to show or hide on the world map
 *
 * @arg visible
 * @type boolean
 * @default true
 * @desc If true, the player icon will be shown on the world map (if possible)
 *
 * @command Change Player Icon
 * @desc Change the player's icon on the world map
 *
 * @arg Icon
 * @type icon
 * @default 0
 * @desc The new player icon to use
 *
 * @command Create Marker
 * @desc Create a new map marker
 *
 * @arg info
 * @type struct<MarkerInfo>
 * @desc Set up for the map marker
 *
 * @command Edit Marker - Position
 * @desc Change a map marker's position
 *
 * @arg id
 * @desc The id of the marker to move
 *
 * @arg x
 * @type number
 * @default 0
 * @desc The new x value of the marker
 *
 * @arg y
 * @type number
 * @default 0
 * @desc The new y value of the marker
 *
 * @command Edit Marker - Visibility
 * @desc Change a map marker's visibility
 *
 * @arg id
 * @desc The id of the marker to change
 *
 * @arg visible
 * @type boolean
 * @default true
 * @desc true = show marker, false = hide marker
 *
 * @command Delete Marker
 * @desc Remove a map marker from game data that is no longer needed
 *
 * @arg id
 * @desc The id of the marker to delete
 *
 * @param Map Setup
 *
 * @param Maps
 * @parent Map Setup
 * @type struct<MapInfo>[]
 * @default []
 * @desc Set up maps here.
 *
 * @param Default World Map
 * @parent Map Setup
 * @desc The default map to show when no other map is set to display (should match a world map id)
 *
 * @param Initial Settings
 *
 * @param Show Player
 * @parent Initial Settings
 * @type boolean
 * @default true
 * @desc If true, the game will start with the player shown on the world map
 *
 * @param Player Icon
 * @parent Initial Settings
 * @type icon
 * @default 0
 * @desc The icon for the player's location on the map at the start of the game
 *
 * @param Map Markers
 * @parent Initial Settings
 * @type struct<MarkerInfo>[]
 * @default []
 * @desc Set up initial map markers here.
 *
 * @param Map Settings
 *
 * @param Player Layer
 * @parent Map Settings
 * @type number
 * @default 5
 * @desc The layer to place the player on the map, higher = above other sprites
 *
 * @param Player Icon Displays
 * @parent Map Settings
 * @type struct<PlayerDisplay>[]
 * @default []
 * @desc Set up where the player icon appears on maps here
*/
/*~struct~MapInfo:
 * @param id
 * @desc The id of the map
 *
 * @param Map Base
 * @type file
 * @dir img/
 * @desc The base map image
 *
 * @param Map Border
 * @type file
 * @dir img/
 * @desc A border image to draw around the map
 *
 * @param Tracking Settings
 * 
 * @param Map ID
 * @parent Tracking Settings
 * @type number
 * @default 0
 * @desc RPG Maker Map ID that tracks the player's x/y coordinates while on the map
 *
 * @param Min X
 * @parent Tracking Settings
 * @type number
 * @default 0
 * @desc The minimum X value the player icon can be while tracking
 *
 * @param Min Y
 * @parent Tracking Settings
 * @type number
 * @default 0
 * @desc The minimum Y value the player icon can be while tracking
 *
 * @param Max X
 * @parent Tracking Settings
 * @type number
 * @default 784
 * @desc The maximum X value the player icon can be while tracking
 *
 * @param Max Y
 * @parent Tracking Settings
 * @type number
 * @default 784
 * @desc The maximum X value the player icon can be while tracking
*/
/*~struct~PlayerDisplay:
 * @param id
 * @desc The id to enter in map note tags
 * 
 * @param Map Settings
 * @type struct<PlayerMapIconSetting>[]
 * @default []
 * @desc The Set up maps and positioning for the player icon here
*/
/*~struct~PlayerMapIconSetting:
 * @param Map Id
 * @desc The map id (world map id NOT RPG Maker Map Id)
 * 
 * @param X
 * @type number
 * @default 0
 * @desc The X value to show the player icon on the map
 * 
 * @param Y
 * @type number
 * @default 0
 * @desc The Y value to show the player icon on the map
*/
/*~struct~MarkerInfo:
 * @param id
 * @desc The id of the marker
 * 
 * @param Map Id
 * @desc The id of the map the marker displays on (NOT the RPG Maker Map ID)
 *
 * @param Icon
 * @type icon
 * @default 0
 * @desc The marker icon
 * 
 * @param Visible
 * @type boolean
 * @default true
 * @desc If the marker is visible
 *
 * @param X
 * @type number
 * @default 0
 * @desc The marker X
 *
 * @param Y
 * @type number
 * @default 0
 * @desc The marker Y
 *
 * @param Layer
 * @type number
 * @default 3
 * @desc The marker layer (higher = appear above other sprites)
*/
Imported.CGMZ_WorldMap = true;
CGMZ.Versions["World Map"] = "Alpha";
CGMZ.WorldMap = {};
CGMZ.WorldMap.parameters = PluginManager.parameters('CGMZ_WorldMap');
CGMZ.WorldMap.PlayerIcon = Number(CGMZ.WorldMap.parameters["Player Icon"]);
CGMZ.WorldMap.PlayerLayer = Number(CGMZ.WorldMap.parameters["Player Layer"]);
CGMZ.WorldMap.ShowPlayer = (CGMZ.WorldMap.parameters["Show Player"] === 'true');
CGMZ.WorldMap.DefaultWorldMap = CGMZ.WorldMap.parameters["Default World Map"];
CGMZ.WorldMap.Maps = CGMZ_Utils.parseJSON(CGMZ.WorldMap.parameters["Maps"], [], "[CGMZ] World Map", "Your Maps parameter was set up incorrectly and could not be read.");
CGMZ.WorldMap.MapMarkers = CGMZ_Utils.parseJSON(CGMZ.WorldMap.parameters["Map Markers"], [], "[CGMZ] World Map", "Your Map Markers parameter was set up incorrectly and could not be read.");
CGMZ.WorldMap.PlayerIconDisplays = CGMZ_Utils.parseJSON(CGMZ.WorldMap.parameters["Player Icon Displays"], [], "[CGMZ] World Map", "Your Player Icon Displays parameter was set up incorrectly and could not be read.");
//=============================================================================
// CGMZ_WorldMapMarker
//-----------------------------------------------------------------------------
// Data class used to store world map markers (saved)
//=============================================================================
function CGMZ_WorldMapMarker() {
	this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_WorldMapMarker.prototype.initialize = function(info) {
	this.id = info.id;
	this.map = info["Map Id"];
	this.icon = Number(info.Icon);
	this.visible = (info.Visible === 'true');
	this.location = new Point(Number(info.X), Number(info.Y));
	this.layer = Number(info.Layer);
};
//-----------------------------------------------------------------------------
// Change marker visibility
//-----------------------------------------------------------------------------
CGMZ_WorldMapMarker.prototype.changeVisibility = function(visibility) {
	this.visible = visibility;
};
//-----------------------------------------------------------------------------
// Set marker location
//-----------------------------------------------------------------------------
CGMZ_WorldMapMarker.prototype.setLocation = function(x, y) {
	this.location.x = x;
	this.location.y = y;
};
//=============================================================================
// CGMZ_WorldMap
//-----------------------------------------------------------------------------
// Data class used to store map info (saved)
//=============================================================================
function CGMZ_WorldMap() {
	this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_WorldMap.prototype.initialize = function(info) {
	this.id = info.id;
	this.base = CGMZ_Utils.getImageData(info["Map Base"], "img");
	this.border = CGMZ_Utils.getImageData(info["Map Border"], "img");
	this.mapId = Number(info["Map ID"]);
	this.bounds = new Rectangle(Number(info["Min X"]), Number(info["Min Y"]), Number(info["Max X"]), Number(info["Max Y"]));
};
//=============================================================================
// CGMZ_WorldMapPlayerIconSetting
//-----------------------------------------------------------------------------
// Data class used to store player icon settings for linking note tag to maps (not saved)
//=============================================================================
function CGMZ_WorldMapPlayerIconSetting() {
	this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_WorldMapPlayerIconSetting.prototype.initialize = function(info) {
	this.id = info.id;
	this.mapInfos = {};
	const mapSettingArray = CGMZ_Utils.parseJSON(info["Map Settings"], [], "[CGMZ] World Map", `Your Player Icon Display with id ${this.id} was set up incorrectly and could not read the Map Settings parameter`);
	for(const mapSettingJSON of mapSettingArray) {
		const mapSettingObj = CGMZ_Utils.parseJSON(mapSettingJSON, null, "[CGMZ] World Map", `Your Player Icon Display with id ${this.id} was set up incorrectly and could not read a Map Settings parameter`);
		if(!mapSettingObj) continue;
		this.mapInfos[mapSettingObj["Map Id"]] = {
			x: Number(mapSettingObj.X),
			y: Number(mapSettingObj.Y)
		}
	}
};
//-----------------------------------------------------------------------------
// Find coordinates by map id
//-----------------------------------------------------------------------------
CGMZ_WorldMapPlayerIconSetting.prototype.findCoordinates = function(mapId) {
	const info = this.mapInfos[mapId];
	return (info) ? new Point(info.x, info.y) : null;
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add world map data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize map data
//-----------------------------------------------------------------------------
const alias_CGMZWorldMap_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZWorldMap_CGMZTemp_createPluginData.call(this);
	this.initializeWorldMapData();
};
//-----------------------------------------------------------------------------
// Initialize world map data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeWorldMapData = function() {
	this.worldMapData = {};
	this.worldMapData.playerIconDisplays = {};
	for(const playerIconJSON of CGMZ.WorldMap.PlayerIconDisplays) {
		const playerIconObj = CGMZ_Utils.parseJSON(playerIconJSON, null, "[CGMZ] World Map", "One of your player icon displays was set up incorrectly and could not be read.");
		if(!playerIconObj) continue;
		const playerIconSetting = new CGMZ_WorldMapPlayerIconSetting(playerIconObj);
		this.worldMapData.playerIconDisplays[playerIconSetting.id] = playerIconSetting;
	}
};
//-----------------------------------------------------------------------------
// Get a player icon position by map notetag and world map id
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getWorldMapPlayerIconPos = function(notetag, worldMapId) {
	const mapData = this.worldMapData.playerIconDisplays[notetag];
	if(!mapData) return null;
	return mapData.findCoordinates(worldMapId);
};
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZWorldMap_CGMZ_Temp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZWorldMap_CGMZ_Temp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_WorldMap", "Call Scene", this.pluginCommandWorldMapCallScene);
	PluginManager.registerCommand("CGMZ_WorldMap", "Change Player Visibility", this.pluginCommandWorldMapChangePlayerVisibility);
	PluginManager.registerCommand("CGMZ_WorldMap", "Change Player Icon", this.pluginCommandWorldMapChangePlayerIcon);
	PluginManager.registerCommand("CGMZ_WorldMap", "Create Marker", this.pluginCommandWorldMapCreateMarker);
	PluginManager.registerCommand("CGMZ_WorldMap", "Edit Marker - Position", this.pluginCommandWorldMapEditMarkerPosition);
	PluginManager.registerCommand("CGMZ_WorldMap", "Edit Marker - Visibility", this.pluginCommandWorldMapEditMarkerVisibility);
	PluginManager.registerCommand("CGMZ_WorldMap", "Delete Marker", this.pluginCommandWorldMapDeleteMarker);
};
//-----------------------------------------------------------------------------
// Plugin Command - Call Scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandWorldMapCallScene = function(args) {
	SceneManager.push(CGMZ_Scene_WorldMap);
	SceneManager.prepareNextScene(args.id);
};
//-----------------------------------------------------------------------------
// Plugin Command - Change Player Icon
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandWorldMapChangePlayerIcon = function(args) {
	$cgmz.worldMapSetPlayerIcon(Number(args.Icon));
};
//-----------------------------------------------------------------------------
// Plugin Command - Change Player Visibility
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandWorldMapChangePlayerVisibility = function(args) {
	$cgmz.worldMapSetPlayerVisibility(args.visible === 'true');
};
//-----------------------------------------------------------------------------
// Plugin Command - Create Marker
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandWorldMapCreateMarker = function(args) {
	const info = CGMZ_Utils.parseJSON(args.info, null, "[CGMZ] World Map", "Error creating map marker - invalid setup in plugin command detected");
	if(!info) return;
	const marker = new CGMZ_WorldMapMarker(info);
	$cgmz.addWorldMapMarker(marker);
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit Marker Position
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandWorldMapEditMarkerPosition = function(args) {
	const marker = $cgmz.getWorldMapMarkerByMarkerId(args.id);
	if(marker) {
		marker.setLocation(Number(args.x), Number(args.y));
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit Marker Visibility
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandWorldMapEditMarkerVisibility = function(args) {
	const marker = $cgmz.getWorldMapMarkerByMarkerId(args.id);
	if(marker) {
		marker.changeVisibility(args.visible === 'true');
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Delete Marker
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandWorldMapDeleteMarker = function(args) {
	$cgmz.deleteWorldMapMarker(args.id);
};
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Handle saved world map data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize world map data
//-----------------------------------------------------------------------------
const alias_CGMZWorldMap_CGMZCore_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZWorldMap_CGMZCore_createPluginData.call(this);
	this.initializeWorldMapData();
};
//-----------------------------------------------------------------------------
// Initialize world map data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeWorldMapData = function(reinitialize = false) {
	if(!this._worldMapData || reinitialize) {
		this._worldMapData = {};
		this._worldMapData.maps = {};
		this._worldMapData.markers = {};
		this._worldMapData.player = {
			show: CGMZ.WorldMap.ShowPlayer,
			icon: CGMZ.WorldMap.PlayerIcon
		}
	}
	for(const mapJSON of CGMZ.WorldMap.Maps) {
		const mapObj = CGMZ_Utils.parseJSON(mapJSON, null, "[CGMZ] World Map", "One of your maps was set up incorrectly and could not be read.");
		if(!mapObj) continue;
		const map = new CGMZ_WorldMap(mapObj);
		this._worldMapData.maps[map.id] = map;
	}
	for(const markerJSON of CGMZ.WorldMap.MapMarkers) {
		const markerObj = CGMZ_Utils.parseJSON(markerJSON, null, "[CGMZ] World Map", "One of your map markers was set up incorrectly and could not be read.");
		if(!markerObj) continue;
		const marker = new CGMZ_WorldMapMarker(markerObj);
		this._worldMapData.markers[marker.id] = marker;
	}
};
//-----------------------------------------------------------------------------
// Check if new world map data has been added after load
//-----------------------------------------------------------------------------
const alias_CGMZWorldMap_CGMZCore_createAfterLoad = CGMZ_Core.prototype.createAfterLoad;
CGMZ_Core.prototype.createAfterLoad = function() {
	alias_CGMZWorldMap_CGMZCore_createAfterLoad.call(this);
	this.initializeWorldMapData();
};
//-----------------------------------------------------------------------------
// Change the player icon's visibility on the world map
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.worldMapSetPlayerVisibility = function(visibility) {
	this._worldMapData.player.show = visibility;
};
//-----------------------------------------------------------------------------
// Change the player icon's visibility on the world map
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.worldMapSetPlayerIcon = function(iconIndex) {
	this._worldMapData.player.icon = iconIndex;
};
//-----------------------------------------------------------------------------
// Get player world map data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getWorldMapPlayer = function() {
	return this._worldMapData.player;
};
//-----------------------------------------------------------------------------
// Get a single world map marker. Usually used for changing marker properties
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getWorldMapMarkerByMarkerId = function(id) {
	return this._worldMapData.markers[id];
};
//-----------------------------------------------------------------------------
// Add a world map marker, will fail if marker with that id already exists
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.addWorldMapMarker = function(marker) {
	if(!marker.id || this._worldMapData.markers[marker.id]) return;
	this._worldMapData.markers[marker.id] = marker;
};
//-----------------------------------------------------------------------------
// Remove a world map marker from game data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.deleteWorldMapMarker = function(id) {
	delete this._worldMapData.markers[id];
};
//-----------------------------------------------------------------------------
// Get world map by id
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getWorldMap = function(id) {
	return this._worldMapData.maps[id];
};
//-----------------------------------------------------------------------------
// Get world map markers by map id
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getMarkersForWorldMap = function(id) {
	return Object.values(this._worldMapData.markers).filter(mark => mark.map === id);
};
//=============================================================================
// CGMZ_Scene_WorldMap
//-----------------------------------------------------------------------------
// Handle the world map scene
//=============================================================================
function CGMZ_Scene_WorldMap() {
    this.initialize.apply(this, arguments);
}
CGMZ_Scene_WorldMap.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_WorldMap.prototype.constructor = CGMZ_Scene_WorldMap;
//-----------------------------------------------------------------------------
// Prepare the world map scene
//-----------------------------------------------------------------------------
CGMZ_Scene_WorldMap.prototype.prepare = function(mapId) {
	this._mapId = mapId;
};
//-----------------------------------------------------------------------------
// Create world map scene objects
//-----------------------------------------------------------------------------
CGMZ_Scene_WorldMap.prototype.create = function() {
	if(!this._mapId) this.createMapId();
	this.createSpriteset();
    Scene_MenuBase.prototype.create.call(this);
	this.createWorldMapWindow();
};
//-----------------------------------------------------------------------------
// Create world map id
//-----------------------------------------------------------------------------
CGMZ_Scene_WorldMap.prototype.createMapId = function() {
	const meta = CGMZ_Utils.readMeta($dataMap, "cgmzwm");
	this._mapId = (meta) ? meta : CGMZ.WorldMap.DefaultWorldMap;
};
//-----------------------------------------------------------------------------
// Create world map window
//-----------------------------------------------------------------------------
CGMZ_Scene_WorldMap.prototype.createWorldMapWindow = function() {
	const rect = this.worldMapWindowRect();
    this._worldMapWindow = new CGMZ_Window_WorldMap(rect, this._mapId);
	this._worldMapWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._worldMapWindow);
};
//-----------------------------------------------------------------------------
// Get the world map window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_WorldMap.prototype.worldMapWindowRect = function() {
	const x = y = 0;
	const width = Graphics.boxWidth;
	const height = Graphics.boxHeight;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the world map spriteset
//-----------------------------------------------------------------------------
CGMZ_Scene_WorldMap.prototype.createSpriteset = function() {
    this._spriteset = new CGMZ_Spriteset_WorldMap(this._mapId);
	this.addChild(this._spriteset);
};
//-----------------------------------------------------------------------------
// Do not create a background
//-----------------------------------------------------------------------------
CGMZ_Scene_WorldMap.prototype.createBackground = function() {
    return;
};
//=============================================================================
// CGMZ_Window_WorldMap
//-----------------------------------------------------------------------------
// Window to show the world map in
//=============================================================================
function CGMZ_Window_WorldMap(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_WorldMap.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_WorldMap.prototype.constructor = CGMZ_Window_WorldMap;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.initialize = function(rect, mapId) {
    Window_Selectable.prototype.initialize.call(this, rect);
	this._mapId = mapId;
	this._map = null;
	this.setBackgroundType(2);
	this.margin = 0;
	this.padding = 0;
	this.refresh();
	this.activate();
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.item = function() {
    return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Determine if marker is enabled
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.isEnabled = function(item) {
	return true;
};
//-----------------------------------------------------------------------------
// Determine if current selected item is enabled
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.isCurrentItemEnabled = function() {
	return this.isEnabled(this.item());
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.refresh = function() {
	this._map = $cgmz.getWorldMap(this._mapId);
    this.makeItemList();
    Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.makeItemList = function() {
	this._data = []
};
//-----------------------------------------------------------------------------
// Draw item in list
//-----------------------------------------------------------------------------
CGMZ_Window_WorldMap.prototype.drawItem = function(index) {
	const item = this._data[index];
};
//=============================================================================
// CGMZ_Spriteset_WorldMap
//-----------------------------------------------------------------------------
// World Map Spriteset, inherit from spriteset_base for convenience even though
// it has some unnecessary elements
//=============================================================================
function CGMZ_Spriteset_WorldMap(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Spriteset_WorldMap.prototype = Object.create(Spriteset_Base.prototype);
CGMZ_Spriteset_WorldMap.prototype.constructor = CGMZ_Spriteset_WorldMap;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype.initialize = function(mapId) {
	this._mapId = mapId;
	this._mapInfo = $cgmz.getWorldMap(this._mapId);
	this._playerInfo = $cgmz.getWorldMapPlayer();
	this._mapMarkerInfo = $cgmz.getMarkersForWorldMap(this._mapId);
	this._markerContainer = [];
    Spriteset_Base.prototype.initialize.call(this);
};
//-----------------------------------------------------------------------------
// Do not create pictures
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype.createPictures = function() {
	//
};
//-----------------------------------------------------------------------------
// Do not create timer
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype.createTimer = function() {
	//
};
//-----------------------------------------------------------------------------
// Create Lower Layer
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    this.createMap();
	this.createPlayerIcon();
	this.createMapMarkers();
	this._sortBaseSprite();
};
//-----------------------------------------------------------------------------
// Create Map
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype.createMap = function() {
    this._map = new CGMZ_Sprite_WorldMap(this._mapInfo.base, "base");
	this._mapBorder = new CGMZ_Sprite_WorldMap(this._mapInfo.border, "border");
	this._baseSprite.addChild(this._map);
	this._baseSprite.addChild(this._mapBorder);
};
//-----------------------------------------------------------------------------
// Create Player Icon
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype.createPlayerIcon = function() {
	if(this._playerInfo.show && $dataMap) {
		this._player = new CGMZ_Sprite_WorldMapPlayer(this._playerInfo, this._mapInfo);
		this._baseSprite.addChild(this._player);
	}
};
//-----------------------------------------------------------------------------
// Create Map Markers
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype.createMapMarkers = function() {
	for(const markerInfo of this._mapMarkerInfo) {
		const marker = new CGMZ_Sprite_WorldMapMarker(markerInfo);
		this._markerContainer.push(marker);
		this._baseSprite.addChild(marker);
	}
};
//-----------------------------------------------------------------------------
// Sort base sprite children
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype._sortBaseSprite = function() {
	this._baseSprite.children.sort(this._compareChildOrder.bind(this))
};
//-----------------------------------------------------------------------------
// Compare child order
//-----------------------------------------------------------------------------
CGMZ_Spriteset_WorldMap.prototype._compareChildOrder = function(a, b) {
    return a.z - b.z;
};
//=============================================================================
// CGMZ_Sprite_WorldMap
//-----------------------------------------------------------------------------
// World Map Sprite, basic sprite taking up entire screen - handles both map
// and map border
//=============================================================================
function CGMZ_Sprite_WorldMap() {
    this.initialize(...arguments);
}
CGMZ_Sprite_WorldMap.prototype = Object.create(Sprite.prototype);
CGMZ_Sprite_WorldMap.prototype.constructor = CGMZ_Sprite_WorldMap;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMap.prototype.initialize = function(url, type) {
    Sprite.prototype.initialize.call(this);
    this.bitmap = ImageManager.loadBitmap(url.folder, url.filename);
	this.z = 1;
	this._type = type;
};
//=============================================================================
// CGMZ_Sprite_WorldMapPlayer
//-----------------------------------------------------------------------------
// World Map Player sprite, handles showing the player icon on the map
//=============================================================================
function CGMZ_Sprite_WorldMapPlayer() {
    this.initialize(...arguments);
}
CGMZ_Sprite_WorldMapPlayer.prototype = Object.create(Sprite.prototype);
CGMZ_Sprite_WorldMapPlayer.prototype.constructor = CGMZ_Sprite_WorldMapPlayer;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapPlayer.prototype.initialize = function(info, mapInfo) {
    Sprite.prototype.initialize.call(this);
	this._mapId = mapInfo.id;
	this._isMaptracking = (mapInfo.mapId === $gameMap.mapId());
	this._mapBounds = mapInfo.bounds;
	this.z = CGMZ.WorldMap.PlayerLayer;
	this.anchor.x = 0;
	this.anchor.y = 0;
	const iconIndex = info.icon;
	if(!info.show) this.hide();
	this.bitmap = ImageManager.loadSystem('IconSet');
	this.adjustFrame(iconIndex);
	this.adjustPosition();
};
//-----------------------------------------------------------------------------
// Set proper bitmap frame for icon
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapPlayer.prototype.adjustFrame = function(icon) {
	let iconIndex = icon;
	if(!icon && Imported.CGMZ_ActorUpgrade) {
		iconIndex = $gameParty.leader().CGMZ_actorUpgradeData('icon');
		if(!iconIndex) {
			this.setFrame(0, 0, 0, 0);
			this.hide();
			return;
		}
	}
	const w = ImageManager.iconWidth;
	const h = ImageManager.iconHeight;
	const x = (iconIndex % 16) * w;
	const y = Math.floor(iconIndex / 16) * h;
	this.setFrame(x, y, w, h);
};
//-----------------------------------------------------------------------------
// Adjust player icon position
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapPlayer.prototype.adjustPosition = function() {
	if(this._isMaptracking) {
		this.adjustPositionByPlayerPos();
	} else {
		this.adjustPositionByMapInfo();
	}
};
//-----------------------------------------------------------------------------
// Adjust player icon position by player position
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapPlayer.prototype.adjustPositionByPlayerPos = function() {
    const px = $gamePlayer.x * $gameMap.tileWidth();
	const py = $gamePlayer.y * $gameMap.tileHeight();
	const pmx = $gameMap.width() * $gameMap.tileWidth();
	const pmy = $gameMap.height() * $gameMap.tileHeight();
	const playerPercentX = (px / pmx);
	const playerPercentY = (py / pmy);
	const displayX = (this._mapBounds.width - this._mapBounds.x) * playerPercentX;
	const displayY = (this._mapBounds.height - this._mapBounds.y) * playerPercentY;
	this.move(displayX, displayY);
};
//-----------------------------------------------------------------------------
// Adjust player icon position by map info
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapPlayer.prototype.adjustPositionByMapInfo = function() {
    const meta = CGMZ_Utils.readMeta($dataMap, "cgmzwmpos");
	if(meta) {
		const coordinates = $cgmzTemp.getWorldMapPlayerIconPos(meta, this._mapId);
		if(coordinates) {
			this.move(coordinates.x, coordinates.y);
		} else {
			this.hide();
		}
	} else {
		this.hide();
	}
};
//=============================================================================
// CGMZ_Sprite_WorldMapMarker
//-----------------------------------------------------------------------------
// World Map Marker sprite, handles showing the map markers
//=============================================================================
function CGMZ_Sprite_WorldMapMarker() {
    this.initialize(...arguments);
}
CGMZ_Sprite_WorldMapMarker.prototype = Object.create(Sprite.prototype);
CGMZ_Sprite_WorldMapMarker.prototype.constructor = CGMZ_Sprite_WorldMapMarker;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapMarker.prototype.initialize = function(marker) {
    Sprite.prototype.initialize.call(this);
	this._marker = marker;
	this.anchor.x = 0;
	this.anchor.y = 0;
	this.z = marker.layer;
	if(!marker.visible) this.hide();
	this.bitmap = ImageManager.loadSystem('IconSet');
	this.adjustFrame();
	this.adjustPosition();
};
//-----------------------------------------------------------------------------
// Set proper bitmap frame for icon
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapMarker.prototype.adjustFrame = function() {
	const iconIndex = this._marker.icon;
	const w = ImageManager.iconWidth;
	const h = ImageManager.iconHeight;
	const x = (iconIndex % 16) * w;
	const y = Math.floor(iconIndex / 16) * h;
	this.setFrame(x, y, w, h);
};
//-----------------------------------------------------------------------------
// Adjust marker position
//-----------------------------------------------------------------------------
CGMZ_Sprite_WorldMapMarker.prototype.adjustPosition = function() {
	this.move(this._marker.location.x, this._marker.location.y);
};