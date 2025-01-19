/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/vehicleinteriors/
 * @target MZ
 * @plugindesc Allows you to enter vehicle interior with button input
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.1.2
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * Description: Allows you to enter the interior of the boat, ship, or airship
 * which is another map the player will be transferred to. It supports
 * keyboard and touch input.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ---------------------------------General------------------------------------
 * The interior key is case sensitive, it is recommended to use a lowercase
 * character.
 *
 * For touch UI button, you can get a "home" icon button to use from my website
 * and add it to your button sheet:
 * https://www.caspergaming.com/resources/
 * You will need to add this icon to the right side of your existing button
 * sheet. Alternatively, you can get a ready-made button sheet from the demo.
 * ----------------------------Interior Options--------------------------------
 * To have no interior for that vehicle, set the map to 0.
 *
 * For direction, it goes by number with each number corresponding to a
 * direction. The directions and their corresponding numbers are as follows:
 * 0 = retain
 * 2 = down
 * 4 = left
 * 6 = right
 * 8 = up
 * -----------------------------Plugin Commands--------------------------------
 * This plugin supports the following plugin commands:
 * • Exit Vehicle
 * This will cause the player to exit the vehicle interior
 * 
 * • Enter Vehicle
 * This will force the player into the vehicle interior they are currently
 * driving
 * 
 * • Change Vehicle
 * Changes the map/x/y/direction values used when entering the given vehicle
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_VehicleInteriors.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -----------------------------Version History--------------------------------
 * 1.1.0:
 * - Added ability to change which map the interior points to for each vehicle
 *
 * 1.1.1:
 * - Chinese translation fix
 * - Added Spanish language help documentation
 *
 * 1.1.2:
 * - Added handling for when no interior exists
 *
 * @command Enter Vehicle
 * @desc Enters the vehicle the player is currently in
 *
 * @command Exit Vehicle
 * @desc Exits the vehicle interior the player is currently inside
 *
 * @command Change Vehicle
 * @desc Changes the vehicle interior settings for a vehicle
 *
 * @arg Vehicle
 * @type select
 * @option boat
 * @option ship
 * @option airship
 * @default boat
 * @desc The vehicle to change
 *
 * @arg Map
 * @type number
 * @default 1
 * @min 1
 * @desc The new map ID to use
 *
 * @arg X
 * @type number
 * @default 1
 * @min 0
 * @desc The new x value to use
 *
 * @arg Y
 * @type number
 * @default 1
 * @min 0
 * @desc The new y value to use
 *
 * @arg Direction
 * @type number
 * @default 2
 * @min 0
 * @desc The new direction value to use
 * 
 * @param General Options
 * @param Boat Options
 * @param Ship Options
 * @param Airship Options
 *
 * @param Interior Key
 * @parent General Options
 * @default a
 * @desc Key that will trigger entering the vehicle's interior.
 *
 * @param Interior Button Offset
 * @parent General Options
 * @type number
 * @min 0
 * @default 11
 * @desc Vehicle Interior Button index on the button sheet
 *
 * @param Interior Button Width
 * @parent General Options
 * @type number
 * @min 1
 * @default 1
 * @desc Vehicle Interior Button width (in multiple of 48 pixels)
 *
 * @param Interior Enable Switch
 * @parent General Options
 * @type switch
 * @default 1
 * @desc Switch which enables/disables ability to enter vehicle interiors.
 *
 * @param Boat Interior Map
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Map to transport player to when visit interior button is pressed.
 *
 * @param Boat Interior X
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc X coordinate of interior map
 *
 * @param Boat Interior Y
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Y coordinate of interior map
 *
 * @param Boat Interior Direction
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Starting direction for interior map
 *
 * @param Ship Interior Map
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Map to transport player to when visit interior button is pressed.
 *
 * @param Ship Interior X
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc X coordinate of interior map
 *
 * @param Ship Interior Y
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Y coordinate of interior map
 *
 * @param Ship Interior Direction
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Starting direction for interior map
 *
 * @param Airship Interior Map
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Map to transport player to when visit interior button is pressed.
 *
 * @param Airship Interior X
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc X coordinate of interior map
 *
 * @param Airship Interior Y
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Y coordinate of interior map
 *
 * @param Airship Interior Direction
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Starting direction for interior map
*/
/*:zh-CN
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/vehicleinteriors/
 * @target MZ
 * @plugindesc 船舱系统（设置可以进入的载具内部空间）
 * @help
 * ============================================================================
 * 【使用条款】
 * 1、本插件可作商用或非商用。
 * 2、须注明插件作者"Casper Gaming"。
 * 3、须提供该插件的作者网站链接。
 * 4、最终使用条款以作者官网公告为准。https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * 【赞助支持】
 * 您可以登陆以下网站并对作者进行支持和赞助。
 * 然后获得作者和其插件的最新资讯，以及测试版插件的试用。
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * 【插件版本】 V 1.1.2
 * ----------------------------------------------------------------------------
 * 【兼容性】仅测试作者所制作的插件
 * 【RM版本】RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * 【插件描述】
 *  设置三种载具的内部空间（船舱），通过快捷键或点击界面图标进入。
 *  并可以通过插件命令进出或切换载具。
 * ----------------------------------------------------------------------------
 * 【使用说明】
 *
 * 一、常规设置
 * 1、需要设置开关来启用或关闭船舱系统。
 *    进入船舱的默认快捷键为a，修改快捷键需区分大小写。
 * 2、在界面进行点击进入船舱的图标，
 *    需要添加在“工程\img\system\ButtonSet.png”的右边。
 *    图标规格是 48*48 像素。设置中的默认路径是 X 11, Y 1。
 * 3、您可以在作者网站获取这个图标，
 *    https://www.caspergaming.com/resources/
 *    也可以在作者的演示工程内获取已经做好的图标文件用来替换。
 *
 * 二、插件指令
 * 本插件可以通过事件设置使用以下插件指令：
 * 1、进入船舱：进入到载具指定的内部空间。（设置地图ID指定）
 * 2、离开船舱：离开载具内部空间，回到驾驶该载具的状态和载具所在地图。
 * 3、更换载具空间：为载具重新指定一个内部空间地图。
 *
 * ----------------------------Interior Options--------------------------------
 * To have no interior for that vehicle, set the map to 0.
 *
 * For direction, it goes by number with each number corresponding to a
 * direction. The directions and their corresponding numbers are as follows:
 * 0 = retain
 * 2 = down
 * 4 = left
 * 6 = right
 * 8 = up
 * ----------------------------------------------------------------------------
 * 【版本历史】
 * V 1.1.0 - 增加功能：切换载具时可以指定角色的位置和朝向。
 * V 1.1.1:
 * - Chinese translation fix
 * - Added Spanish language help documentation
 * 1.1.2:
 * - Added handling for when no interior exists
 *
 * @command Enter Vehicle
 * @text 进入船舱
 * @desc 进入正在搭乘的载具的内部空间。
 *
 * @command Exit Vehicle
 * @text 离开船舱
 * @desc 离开载具内部空间，回到驾驶该载具的状态和地图。
 *
 * @command Change Vehicle
 * @text 更换载具空间
 * @desc 为载具重新指定一个内部空间地图。
 *
 * @arg Vehicle
 * @text 载具
 * @type select
 * @option boat
 * @option ship
 * @option airship
 * @default boat
 * @desc 切换到选择的载具。
 *
 * @arg Map
 * @text 地图ID
 * @type number
 * @default 1
 * @min 1
 * @desc 指定地图的ID
 *
 * @arg X
 * @text X轴坐标
 * @type number
 * @default 1
 * @min 0
 * @desc 指定X轴坐标的参数
 *
 * @arg Y
 * @text Y轴坐标
 * @type number
 * @default 1
 * @min 0
 * @desc 指定Y轴坐标的参数
 *
 * @arg Direction
 * @text 朝向
 * @type number
 * @default 2
 * @min 0
 * @desc 指定角色的朝向。
 * 
 * @param General Options
 * @text 常规设置
 * @param Boat Options
 * @text 小舟设置
 * @param Ship Options
 * @text 大船设置
 * @param Airship Options
 * @text 飞艇设置
 *
 * @param Interior Key
 * @text 快捷键
 * @parent General Options
 * @default a
 * @desc 设置一个快捷键来快速进入船舱。默认a，按键区分大小写。
 *
 * @param Interior Button Offset
 * @text 按键图标的位置（列）
 * @parent General Options
 * @type number
 * @min 0
 * @default 11
 * @desc 按键图标在“ButtonSet.png”中的第N列，图标规格48*48像素。默认11。须手动添加图标。
 *
 * @param Interior Button Width
 * @text 按键图标的位置（行）
 * @parent General Options
 * @type number
 * @min 1
 * @default 1
 * @desc 按键图标在“ButtonSet.png”中的第N行，图标规格48*48像素。默认1。须手动添加图标。
 *
 * @param Interior Enable Switch
 * @text 船舱系统开关
 * @parent General Options
 * @type switch
 * @default 1
 * @desc 设置一个开关ID以控制船舱系统的打开或关闭。
 *
 * @param Boat Interior Map
 * @text 内部地图
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc 指定一个地图ID作为小舟的内部空间（船舱）。
 *
 * @param Boat Interior X
 * @text 进入位置X
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc 设置角色进入后的位置（X轴坐标）。
 *
 * @param Boat Interior Y
 * @text 进入位置Y
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc 设置角色进入后的位置（Y轴坐标）。
 *
 * @param Boat Interior Direction
 * @text 角色朝向
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc 设置角色进入后的朝向。默认2面朝下。
 *
 * @param Ship Interior Map
 * @text 内部地图
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc 指定一个地图ID作为大船的内部空间（船舱）。
 *
 * @param Ship Interior X
 * @text 进入位置X
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc 设置角色进入后的位置（X轴坐标）。
 *
 * @param Ship Interior Y
 * @text 进入位置Y
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc 设置角色进入后的位置（Y轴坐标）。
 *
 * @param Ship Interior Direction
 * @text 角色朝向
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc 设置角色进入后的朝向。默认2面朝下。
 *
 * @param Airship Interior Map
 * @text 内部地图
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc 指定一个地图ID作为飞艇的内部空间（船舱）。
 *
 * @param Airship Interior X
 * @text 进入位置X
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc 设置角色进入后的位置（X轴坐标）。
 *
 * @param Airship Interior Y
 * @text 进入位置Y
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc 设置角色进入后的位置（Y轴坐标）。
 *
 * @param Airship Interior Direction
 * @text 角色朝向
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc 设置角色进入后的朝向。默认2面朝下。
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/vehicleinteriors/
 * @target MZ
 * @plugindesc Te permite ingresar al interior del vehículo con la entrada de botón.
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
 * Versión: 1.1.2
 * ----------------------------------------------------------------------------
 * Compatibilidad: Sólo probado con mis CGMZ plugins.
 * Hecho para RPG Maker MZ 1.7.0
 * ----------------------------------------------------------------------------
 * Descripción: Te permite ingresar al interior del bote, nave o aeronave, 
 * que es otro mapa al que será transferido el jugador. Admite teclado y
 * entrada táctil.
 * ----------------------------------------------------------------------------
 * Documentación:
 * ---------------------------------General------------------------------------
 * La tecla interior distingue entre mayúsculas y minúsculas, se recomienda
 * utilizar un carácter en minúsculas.
 *
 * Para el botón de IU táctil, puede obtener un botón de icono de "inicio"
 * para usar desde mi sitio web  y agregarlo a su hoja de botones:
 * https://www.caspergaming.com/resources/
 * Deberá agregar este ícono al lado derecho de su hoja de botones existente. 
 * Alternativamente, puede obtener una hoja de botones lista para usar de la
 * demostración.
 * ----------------------------Interior Options--------------------------------
 * To have no interior for that vehicle, set the map to 0.
 *
 * For direction, it goes by number with each number corresponding to a
 * direction. The directions and their corresponding numbers are as follows:
 * 0 = retain
 * 2 = down
 * 4 = left
 * 6 = right
 * 8 = up
 * ---------------------------Comandos de Plugin-------------------------------
 * Este plugin admite los siguientes comandos de plugin:
 * • Salir del vehículo
 * Esto hará que el jugador salga del interior del vehículo.
 * 
 * • Entrar en el vehículo
 * Esto obligará al jugador a entrar en el interior del vehículo que están
 * conduciendo actualmente
 * 
 * • Cambiar vehículo
 * cambia los valores de mapa/x/y/dirección utilizados al ingresar el vehiculo
 * dado
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_VehicleInteriors.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Historial de Versiones-----------------------------
 * 1.1.0:
 * - Se agregó la posibilidad de cambiar a qué mapa apunta el interior para
 * cada vehículo
 *
 * 1.1.1:
 * - Chinese translation fix
 * - Added Spanish language help documentation
 *
 * 1.1.2:
 * - Added handling for when no interior exists
 *
 * @command Enter Vehicle
 * @text Entrar en el Vehículo
 * @desc Enters the vehicle the player is currently in.
 *
 * @command Exit Vehicle
 * @text Salir del Vehículo
 * @desc Exits the vehicle interior the player is currently inside.
 *
 * @command Change Vehicle
 * @text Cambiar Vehículo
 * @desc Changes the vehicle interior settings for a vehicle.
 *
 * @arg Vehicle
 * @text Vehículo
 * @type select
 * @option boat
 * @option ship
 * @option airship
 * @default boat
 * @desc El vehículo a cambiar.
 *
 * @arg Map
 * @text Mapa
 * @type number
 * @default 1
 * @min 1
 * @descEl nuevo ID de mapa a usar.
 *
 * @arg X
 * @text Coordenadas del eje X
 * @type number
 * @default 1
 * @min 0
 * @desc El nuevo valor x a usar.
 *
 * @arg Y
 * @text Coordenadas del eje Y
 * @type number
 * @default 1
 * @min 0
 * @desc El nuevo valor y a usar.
 *
 * @arg Direction
 * @text Dirección
 * @type number
 * @default 2
 * @min 0
 * @desc El nuevo valor de dirección a usar.
 * 
 * @param General Options
 * @text Opciones generales
 * @param Boat Options
 * @text Opciones de Bote
 * @param Ship Options
 * @text Opciones de Barco
 * @param Airship Options
 * @text Opciones de Dirigible
 *
 * @param Interior Key
 * @text Llave interior
 * @parent General Options
 * @default a
 * @desc Llave que activará el ingreso al interior del vehículo.
 *
 * @param Interior Button Offset
 * @text Desplazamiento del botón interior
 * @parent General Options
 * @type number
 * @min 0
 * @default 11
 * @desc Interior del vehículo Índice de botones en la hoja de botones.
 *
 * @param Interior Button Width
 * @text Ancho interior del botón
 * @parent General Options
 * @type number
 * @min 1
 * @default 1
 * @desc Ancho del botón del interior del vehículo (en múltiplos de 48 píxeles).
 *
 * @param Interior Enable Switch
 * text Interruptor de habilitación interior
 * @parent General Options
 * @type switch
 * @default 1
 * @desc Interruptor que habilita/deshabilita la capacidad de ingresar al interior del vehículo.
 *
 * @param Boat Interior Map
 * @text Mapa interior del barco
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Mapa para transportar al jugador cuando se presiona el botón de visita interior.
 *
 * @param Boat Interior X
 * @text Interior del barco X
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Coordenada X del mapa interior.
 *
 * @param Boat Interior Y
 * @text Interior del barco Y
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Coordenada Y del mapa interior.
 *
 * @param Boat Interior Direction
 * @text Dirección interior del bote
 * @type number
 * @min 0
 * @default 0
 * @parent Boat Options
 * @desc Dirección inicial del mapa interior.
 *
 * @param Ship Interior Map
 * @text Mapa del Interior del Barco
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Mapa para transportar al jugador cuando se presiona el botón de visita interior.
 *
 * @param Ship Interior X
 * @text Interior del barco X
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Coordenada X del mapa interior.
 *
 * @param Ship Interior Y
 * @text Interior del barco Y
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Coordenada Y del mapa interior.
 *
 * @param Ship Interior Direction
 * @text Dirección interior del barco
 * @type number
 * @min 0
 * @default 0
 * @parent Ship Options
 * @desc Dirección inicial del mapa interior.
 *
 * @param Airship Interior Map
 * @text Mapa interior del dirigible
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Mapa para transportar al jugador cuando se presiona el botón de visita interior.
 *
 * @param Airship Interior X
 * @text Interior del dirigible X
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Coordenada X del mapa interior.
 *
 * @param Airship Interior Y
 * @text Interior del dirigible Y
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Coordenada Y del mapa interior.
 *
 * @param Airship Interior Direction
 * @text Dirección interior del dirigible
 * @type number
 * @min 0
 * @default 0
 * @parent Airship Options
 * @desc Dirección inicial del mapa interior.
*/
var Imported = Imported || {};
Imported.CGMZ_VehicleInteriors = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Vehicle Interiors"] = "1.1.2";
CGMZ.VehicleInteriors = {};
CGMZ.VehicleInteriors.parameters = PluginManager.parameters('CGMZ_VehicleInteriors');
CGMZ.VehicleInteriors.InteriorKey = CGMZ.VehicleInteriors.parameters["Interior Key"];
CGMZ.VehicleInteriors.BoatInteriorMapId = Number(CGMZ.VehicleInteriors.parameters["Boat Interior Map"]);
CGMZ.VehicleInteriors.BoatInteriorMapX = Number(CGMZ.VehicleInteriors.parameters["Boat Interior X"]);
CGMZ.VehicleInteriors.BoatInteriorMapY = Number(CGMZ.VehicleInteriors.parameters["Boat Interior Y"]);
CGMZ.VehicleInteriors.BoatInteriorMapDir = Number(CGMZ.VehicleInteriors.parameters["Boat Interior Direction"]);
CGMZ.VehicleInteriors.ShipInteriorMapId = Number(CGMZ.VehicleInteriors.parameters["Ship Interior Map"]);
CGMZ.VehicleInteriors.ShipInteriorMapX = Number(CGMZ.VehicleInteriors.parameters["Ship Interior X"]);
CGMZ.VehicleInteriors.ShipInteriorMapY = Number(CGMZ.VehicleInteriors.parameters["Ship Interior Y"]);
CGMZ.VehicleInteriors.ShipInteriorMapDir = Number(CGMZ.VehicleInteriors.parameters["Ship Interior Direction"]);
CGMZ.VehicleInteriors.AirshipInteriorMapId = Number(CGMZ.VehicleInteriors.parameters["Airship Interior Map"]);
CGMZ.VehicleInteriors.AirshipInteriorMapX = Number(CGMZ.VehicleInteriors.parameters["Airship Interior X"]);
CGMZ.VehicleInteriors.AirshipInteriorMapY = Number(CGMZ.VehicleInteriors.parameters["Airship Interior Y"]);
CGMZ.VehicleInteriors.AirshipInteriorMapDir = Number(CGMZ.VehicleInteriors.parameters["Airship Interior Direction"]);
CGMZ.VehicleInteriors.InteriorButtonOffset = Number(CGMZ.VehicleInteriors.parameters["Interior Button Offset"]);
CGMZ.VehicleInteriors.InteriorButtonWidth = Number(CGMZ.VehicleInteriors.parameters["Interior Button Width"]);
CGMZ.VehicleInteriors.InteriorSwitch = Number(CGMZ.VehicleInteriors.parameters["Interior Enable Switch"]);
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// New plugin commands for enter / exit vehicles
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_VehicleInteriors_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_VehicleInteriors", "Enter Vehicle", this.pluginCommandVehicleInteriorsEnter);
	PluginManager.registerCommand("CGMZ_VehicleInteriors", "Exit Vehicle", this.pluginCommandVehicleInteriorsExit);
	PluginManager.registerCommand("CGMZ_VehicleInteriors", "Change Vehicle", this.pluginCommandVehicleInteriorsChange);
};
//-----------------------------------------------------------------------------
// Processing for the enter vehicle plugin command
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandVehicleInteriorsEnter = function() {
	$gamePlayer.CGMZ_forceVehicleInteriorEnter();
};
//-----------------------------------------------------------------------------
// Processing for the exit vehicle plugin command
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandVehicleInteriorsExit = function() {
	$gamePlayer.CGMZ_vehicleInteriorExit();
};
//-----------------------------------------------------------------------------
// Processing for the change vehicle plugin command
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandVehicleInteriorsChange = function(args) {
	const vehicle = args.Vehicle;
	const mapId = Number(args.Map);
	const x = Number(args.X);
	const y = Number(args.Y);
	const dir = Number(args.Direction);
	$cgmz.changeVehicleInterior(vehicle, mapId, x, y, dir);
};
//=============================================================================
// CGMZ
//-----------------------------------------------------------------------------
// Add vehicle interior to save data
//=============================================================================
//-----------------------------------------------------------------------------
// Method used by CGMZ for creating plugin data
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_VehicleInteriors_createPluginData.call(this);
	this.initializeVehicleInteriors();
};
//-----------------------------------------------------------------------------
// Load new vehicle interiors with saved game
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZ_VehicleInteriors_onAfterLoad.call(this);
	this.initializeVehicleInteriors();
};
//-----------------------------------------------------------------------------
// Initialize the vehicle interiors
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeVehicleInteriors = function() {
	if(!this._vehicleInteriors) {
		this._vehicleInteriors = {};
		this._vehicleInteriors.boat = {mapId: CGMZ.VehicleInteriors.BoatInteriorMapId, x: CGMZ.VehicleInteriors.BoatInteriorMapX, y: CGMZ.VehicleInteriors.BoatInteriorMapY, dir: CGMZ.VehicleInteriors.BoatInteriorMapDir};
		this._vehicleInteriors.ship = {mapId: CGMZ.VehicleInteriors.ShipInteriorMapId, x: CGMZ.VehicleInteriors.ShipInteriorMapX, y: CGMZ.VehicleInteriors.ShipInteriorMapY, dir: CGMZ.VehicleInteriors.ShipInteriorMapDir};
		this._vehicleInteriors.airship = {mapId: CGMZ.VehicleInteriors.AirshipInteriorMapId, x: CGMZ.VehicleInteriors.AirshipInteriorMapX, y: CGMZ.VehicleInteriors.AirshipInteriorMapY, dir: CGMZ.VehicleInteriors.AirshipInteriorMapDir};
	}
};
//-----------------------------------------------------------------------------
// Change Vehicle Interior
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.changeVehicleInterior = function(vehicle, mapId, x, y, dir) {
	if(this._vehicleInteriors[vehicle]) {
		this._vehicleInteriors[vehicle].mapId = mapId;
		this._vehicleInteriors[vehicle].x = x;
		this._vehicleInteriors[vehicle].y = y;
		this._vehicleInteriors[vehicle].dir = dir;
	}
};
//-----------------------------------------------------------------------------
// Get Vehicle Interior
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getVehicleInterior = function(vehicle) {
	return this._vehicleInteriors[vehicle];
};
//=============================================================================
// Game_Vehicle
//-----------------------------------------------------------------------------
// Modify the vehicle object for additional options
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Do not save BGM if in interior
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_getOn = Game_Vehicle.prototype.getOn;
Game_Vehicle.prototype.getOn = function() {
	if($gamePlayer.CGMZ_VehicleInteriors_isInInterior()) {
		this._driving = true;
		this.setWalkAnime(true);
		this.setStepAnime(true);
		this.playBgm();
	}
	else {
		alias_CGMZ_VehicleInteriors_getOn.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Do not replay BGM if in interior
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_getOff = Game_Vehicle.prototype.getOff;
Game_Vehicle.prototype.getOff = function() {
	if($gamePlayer.CGMZ_VehicleInteriors_isInInterior()) {
		this._driving = false;
		this.setWalkAnime(false);
		this.setStepAnime(false);
		this.resetDirection();
	}
    else {
		alias_CGMZ_VehicleInteriors_getOff.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Do not land Airship if going to interior
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_updateAirshipAltitude = Game_Vehicle.prototype.updateAirshipAltitude;
Game_Vehicle.prototype.updateAirshipAltitude = function() {
    if(!$gamePlayer.CGMZ_VehicleInteriors_isInInterior()) {
		alias_CGMZ_VehicleInteriors_updateAirshipAltitude.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Hide shadow if inside vehicle interior
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_shadowOpacity = Game_Vehicle.prototype.shadowOpacity;
Game_Vehicle.prototype.shadowOpacity = function() {
	if(!$gamePlayer.CGMZ_VehicleInteriors_isInInterior()) {
		return alias_CGMZ_VehicleInteriors_shadowOpacity.call(this);
	}
	return 0;
};
//-----------------------------------------------------------------------------
// Check if the vehicle has an interior
//-----------------------------------------------------------------------------
Game_Vehicle.prototype.hasInterior = function() {
	switch(this._type) {
		case "boat": return CGMZ.VehicleInteriors.BoatInteriorMapId > 0;
		case "ship": return CGMZ.VehicleInteriors.ShipInteriorMapId > 0;
		case "airship": return CGMZ.VehicleInteriors.AirshipInteriorMapId > 0;
	}
	return false;
};
//=============================================================================
// Game_Player
//-----------------------------------------------------------------------------
// Update to check if vehicle interior map should be called, encounters in vehicle
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Set some interior variables to defaultt values
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
    alias_CGMZ_VehicleInteriors_initMembers.call(this);
	this._CGMZ_vehicleInteriorRecall = '';
	this._CGMZ_isInInterior = false;
	this._CGMZ_vehicleRecallX = 0;
	this._CGMZ_vehicleRecallY = 0;
	this._CGMZ_vehicleRecallD = 0;
	this._CGMZ_transferringToInterior = false;
};
//-----------------------------------------------------------------------------
// Alias. Check for vehicle interior input
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_updateVehicle = Game_Player.prototype.updateVehicle;
Game_Player.prototype.updateVehicle = function() {
	alias_CGMZ_VehicleInteriors_updateVehicle.call(this);
    if(this.CGMZ_VehicleInteriors_canEnterVehicle()) {
        this.CGMZ_updateVehicleInterior(false);
    }
};
//-----------------------------------------------------------------------------
// Determine if the player is currently in a vehicle interior
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_VehicleInteriors_isInInterior = function() {
	return this._CGMZ_isInInterior;
};
//-----------------------------------------------------------------------------
// Determine if the player can enter a vehicle interior
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_VehicleInteriors_canEnterVehicle = function() {
	if(this.vehicle() && !this.vehicle().hasInterior()) return false;
	if(this._CGMZ_transferringToInterior) return false;
	if(CGMZ.VehicleInteriors.InteriorSwitch > 0 && !$gameSwitches.value(CGMZ.VehicleInteriors.InteriorSwitch)) return false;
	if(this.CGMZ_VehicleInteriors_isInInterior()) return false;
	if(!this.isInVehicle()) return false;
	if(this.areFollowersGathering()) return false;
	if(this._vehicleGettingOn) return false;
	if(this._vehicleGettingOff) return false;
	return true;
};
//-----------------------------------------------------------------------------
// Check for vehicle interior input, execute transfer if input detected
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_updateVehicleInterior = function(usingEventCommand) {
    if(($cgmzTemp.isKeyPressed(CGMZ.VehicleInteriors.InteriorKey) || usingEventCommand)) {
        this._CGMZ_transferringToInterior = true;
		this._CGMZ_vehicleRecallX = this.x;
		this._CGMZ_vehicleRecallY = this.y;
		this._CGMZ_vehicleRecallD = this.direction();
		this._vehicleRecallMap = $gameMap.mapId();
		this._CGMZ_vehicleInteriorRecall = this.CGMZ_getVehicleInteriorRecallType();
		const vehicleInteriorData = $cgmz.getVehicleInterior(this._CGMZ_vehicleInteriorRecall);
		const mapId = vehicleInteriorData.mapId;
		const x = vehicleInteriorData.x;
		const y = vehicleInteriorData.y;
		const dir = vehicleInteriorData.dir;
		this._CGMZ_isInInterior = true;
		this._vehicleGettingOff = true;
		this.vehicle().getOff();
		this.setMoveSpeed(4);
        this.setThrough(false);
		this.reserveTransfer(mapId, x, y, dir, 0);
		this._CGMZ_transferringToInterior = false;
    }
};
//-----------------------------------------------------------------------------
// Check for vehicle interior input, execute transfer if input detected
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_getVehicleInteriorRecallType = function() {
	if(this.isInBoat()) return 'boat';
	if(this.isInShip()) return 'ship';
	if(this.isInAirship()) return 'airship';
	return 'walk';
};
//-----------------------------------------------------------------------------
// Force Enter Interior of Vehicle
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_forceVehicleInteriorEnter = function() {
	if(this.CGMZ_VehicleInteriors_canEnterVehicle()) {
		this.CGMZ_updateVehicleInterior(true);
	}
};
//-----------------------------------------------------------------------------
// Exit Interior of Vehicle
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_vehicleInteriorExit = function() {
	if(this._CGMZ_isInInterior) {
		this.gatherFollowers();
		this._vehicleType = this._CGMZ_vehicleInteriorRecall;
		const x  = this._CGMZ_vehicleRecallX;
		const y  = this._CGMZ_vehicleRecallY;
		const dir = this._CGMZ_vehicleRecallD;
		const mapId = this._vehicleRecallMap;
		this._vehicleGettingOn = true;
		this.reserveTransfer(mapId, x, y, dir, 0);
	}
};
//-----------------------------------------------------------------------------
// Alias. Clear vehicle interior flag only after vehicle is boarded
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_updateVehicleGetOn = Game_Player.prototype.updateVehicleGetOn;
Game_Player.prototype.updateVehicleGetOn = function() {
	alias_CGMZ_VehicleInteriors_updateVehicleGetOn.call(this);
    if (!this.areFollowersGathering() && !this.isMoving()) {
        this._CGMZ_isInInterior = false;
    }
	this.makeEncounterCount();
};
//-----------------------------------------------------------------------------
// Alias. No need for checking altitude for airship interior
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_updateVehicleGetOff = Game_Player.prototype.updateVehicleGetOff;
Game_Player.prototype.updateVehicleGetOff = function() {
	if(this.CGMZ_VehicleInteriors_isInInterior()) {
		this._vehicleGettingOff = false;
        this._vehicleType = 'walk';
	}
    else {
		alias_CGMZ_VehicleInteriors_updateVehicleGetOff.call(this);
	}
	this.makeEncounterCount();
};
//-----------------------------------------------------------------------------
// Alias. Set transparency after transfer to vehicle interior
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_performTransfer = Game_Player.prototype.performTransfer;
Game_Player.prototype.performTransfer = function() {
    alias_CGMZ_VehicleInteriors_performTransfer.call(this);
	if(this.CGMZ_VehicleInteriors_isInInterior()) {
		this.setTransparent(false);
	}
};
//=============================================================================
// Scene_Map
//-----------------------------------------------------------------------------
// Also add vehicle interior touch UI + handling
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also create vehicle interior button if touch UI
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_SceneMap_createButtons = Scene_Map.prototype.createButtons;
Scene_Map.prototype.createButtons = function() {
	alias_CGMZ_VehicleInteriors_SceneMap_createButtons.call(this);
    if (ConfigManager.touchUI) {
        this.CGMZ_VehicleInteriors_createVehicleInteriorButton();
    }
};
//-----------------------------------------------------------------------------
// Create the vehicle interior button
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_VehicleInteriors_createVehicleInteriorButton = function() {
	this._CGMZ_vehicleInteriorButton = new Sprite_Button("cgmzVehicleInterior");
    this._CGMZ_vehicleInteriorButton.x = Graphics.boxWidth - (this._CGMZ_vehicleInteriorButton.width + 4) * 2;
    this._CGMZ_vehicleInteriorButton.y = this.buttonY();
    this._CGMZ_vehicleInteriorButton.visible = false;
	this._CGMZ_vehicleInteriorButton.setClickHandler(this.CGMZ_VehicleInteriorButtonOnClick);
    this.addWindow(this._CGMZ_vehicleInteriorButton);
};
//-----------------------------------------------------------------------------
// Vehicle Interior Button click handler method
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_VehicleInteriorButtonOnClick = function() {
	$gamePlayer.CGMZ_forceVehicleInteriorEnter();
};
//-----------------------------------------------------------------------------
// Alias. Vehicle interior button might be touched
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_SceneMap_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
Scene_Map.prototype.isAnyButtonPressed = function() {
    return alias_CGMZ_VehicleInteriors_SceneMap_isAnyButtonPressed.call(this) || (this._CGMZ_vehicleInteriorButton && this._CGMZ_vehicleInteriorButton.isPressed());
};
//-----------------------------------------------------------------------------
// Alias. Also update vehicle interior button
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_SceneMap_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    alias_CGMZ_VehicleInteriors_SceneMap_update.call(this);
	this.CGMZ_updateVehicleInteriorButton();
};
//-----------------------------------------------------------------------------
// Update vehicle interior button
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_updateVehicleInteriorButton = function() {
    if (this._CGMZ_vehicleInteriorButton) {
        const buttonEnabled = this.CGMZ_isVehicleInteriorButtonEnabled();
        if (buttonEnabled !== this._CGMZ_vehicleInteriorButton.visible) {
            this._CGMZ_vehicleInteriorButton.visible = buttonEnabled;
        }
    }
};
//-----------------------------------------------------------------------------
// Check if vehicle interior button should display
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_isVehicleInteriorButtonEnabled = function() {
    return this._CGMZ_vehicleInteriorButton && !$gameMap.isEventRunning() && $gamePlayer.CGMZ_VehicleInteriors_canEnterVehicle();
};
//-----------------------------------------------------------------------------
// Alias. Also hide vehicle interior button if not battle scene next
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_SceneMap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	this.CGMZ_hideVehicleInteriorButton();
    alias_CGMZ_VehicleInteriors_SceneMap_terminate.call(this);
};
//-----------------------------------------------------------------------------
// Hide the vehicle interior button
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_hideVehicleInteriorButton = function() {
    if(this._CGMZ_vehicleInteriorButton) {
        this._CGMZ_vehicleInteriorButton.visible = false;
    }
};
//=============================================================================
// Sprite_Button
//-----------------------------------------------------------------------------
// Add vehicle interior button
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. If undefined, check if vehicle interior button and return expected results
//-----------------------------------------------------------------------------
const alias_CGMZ_VehicleInteriors_SpriteButton_buttonData = Sprite_Button.prototype.buttonData;
Sprite_Button.prototype.buttonData = function() {
    const data = alias_CGMZ_VehicleInteriors_SpriteButton_buttonData.call(this);
	if(data) return data;
	const vehicleInteriorButtonTable = {
		cgmzVehicleInterior: { x: CGMZ.VehicleInteriors.InteriorButtonOffset, w: CGMZ.VehicleInteriors.InteriorButtonWidth }
	};
	return vehicleInteriorButtonTable[this._buttonType];
};