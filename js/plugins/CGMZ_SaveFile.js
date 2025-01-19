/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/savefile/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Changes the default save / load screens
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.3.1
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Description: This plugin modifies the save / load screens to show more
 * game information as well as providing additional customization options.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ---------------------------Save Images--------------------------------------
 * If using a save image:
 * Image Dimensions (default resolution) are 582 x 160
 * Image height can be changed in parameters below
 * Images should be placed in the "pictures" folder
 * ----------------------------Note Tags---------------------------------------
 * To set location, use note tag <cgmzname:yourName>
 * To set the save image for each map, use note tag <cgmzsaveimg:yourImage>
 * These note tags go in the map properties note box.
 * ------------------------Custom Save Data------------------------------------
 * The custom save data are game variables. To assign a game variable to store
 * text, use the script call:
 * $gameVariables.setValue(13, "The Hero Returns");
 * where 13 would be the variable id, and the string would be what shows up on
 * the save screen.
 * --------------------------Integrations--------------------------------------
 * This plugin can display New Game Plus text from [CGMZ] New Game Plus. To 
 * set this up, add New Game Plus as a line item in the Display Info parameter.
 * This option in the Display Info parameter will have no effect if not using
 * [CGMZ] New Game Plus.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_SaveFile.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.0.1
 * - Added ability to change the color of header / label text
 * - Added ability to change opacity of the black rectangle behind location
 *	 info
 * - Now compatible with VS core
 * - Fix for location overlapping when no image
 * - Fix for image height ignoring height parameter
 *
 * Version 1.0.2
 * - Fix for image height being stuck at 160px
 *
 * Version 1.0.3
 * - Fix for autosave after battle not displaying correct info
 * - Updated documentation
 *
 * Version 1.0.4
 * - Updated color parameter to use RMMZ 1.6.0 new color picker UI
 *
 * Version 1.1.0
 * - Added drag and drop control over each item drawn in Save File Display
 * - Added option to display CGMZ achievement/achievement pts in save file
 * - Added option to hide touch UI space when touch UI is disabled
 * - Added text code support
 * - Added Spanish language help documentation
 * - Images no longer limited to the Pictures subfolder
 * - Moved Show Image/Show Faces params to new Display Info parameter
 * - Fix crash when using Event Test
 * - This plugin now reports JSON errors in the console instead of crashing
 *
 * Version 1.1.1
 * - Fix crash when an old save from before this plugin is loaded
 *
 * Version 1.2.0
 * - Added option to delete save files
 * - Added option to rename save files
 * - Added ability to show a confirm window before save
 * - Added option to show step animation for character sprites
 * - Icon parameters now use icon selector ui
 * - You can now manually set character vertical space for larger sprites
 *
 * Version 1.2.1
 * - Added support for [CGMZ] New Game Plus
 *
 * Version 1.3.0
 * - Added confirmation window option for delete save file
 * - Added save and load scene background image options
 * - Added options to change the windowskin for each window
 * - Added option to change list window width
 * - Added option to have transparent windows
 * - Added option to hide autosave option in load mode
 * - Fix bug with Blank Line option in Display Info parameter
 * - Fix bug with Autosave losing renamed name after autosave occurs
 * - Save File Display window now scrolls if needed
 *
 * Version 1.3.1
 * - Added option to stretch the save file image
 * - Removed Image, Gold from display info parameter default
 *
 * @param Autosave Options
 * 
 * @param Show Autosave in Save Mode
 * @parent Autosave Options
 * @type boolean
 * @desc Show autosave in the save screen?
 * @default false
 * 
 * @param Show Autosave in Load Mode
 * @parent Autosave Options
 * @type boolean
 * @desc Show autosave in the load screen?
 * @default false
 *
 * @param File Options
 *
 * @param Max Save Files
 * @parent File Options
 * @type number
 * @min 1
 * @desc Change the number of files the player can select
 * @default 20
 *
 * @param Max Filename Length
 * @parent File Options
 * @type number
 * @min 1
 * @desc The number of characters possible to use in a file name
 * @default 20
 *
 * @param File Icon Unused
 * @parent File Options
 * @type icon
 * @desc Icon ID to show next to a File that has no save data. Set to 0 for no icon
 * @default 229
 *
 * @param File Icon Used
 * @parent File Options
 * @type icon
 * @desc Icon ID to show next to a File that hassave data. Set to 0 for no icon
 * @default 230
 *
 * @param Image Options
 *
 * @param Default Image
 * @parent Image Options
 * @type file
 * @dir img
 * @desc Default image to show (if showing images) if no other image exists
 *
 * @param Image Height
 * @parent Image Options
 * @type number
 * @desc Height of the image to display
 * @default 160
 *
 * @param Stretch Image
 * @parent Image Options
 * @type boolean
 * @desc If true, will stretch the width to fit the window width
 * @default false
 *
 * @param Location Fade Opacity
 * @parent Image Options
 * @type number
 * @desc Opacity (0-255) of the black rectangle behind the location
 * @default 120
 * 
 * @param Custom Options
 * 
 * @param Custom Save Variables
 * @parent Custom Options
 * @type struct<CustomSaveInfo>[]
 * @desc Set up custom save variables here
 * @default []
 * 
 * @param Window Options
 *
 * @param Show Delete Option
 * @parent Window Options
 * @type boolean
 * @desc If true, will allow the player to delete save files
 * @default false
 *
 * @param Show Rename Option
 * @parent Window Options
 * @type boolean
 * @desc If true, will allow the player to rename save files
 * @default false
 *
 * @param Show Confirm Window
 * @parent Window Options
 * @type boolean
 * @desc If true, will ask the player to confirm they want to save over that file
 * @default false
 *
 * @param Show Delete Confirm Window
 * @parent Window Options
 * @type boolean
 * @desc If true, will ask the player to confirm they want to delete that file
 * @default true
 * 
 * @param Display Options
 *
 * @param Header Color
 * @parent Display Options
 * @default 16
 * @type color
 * @desc The color to use for information headers (example - location: or gold:)
 *
 * @param Disable Touch UI Space
 * @parent Display Options
 * @type boolean
 * @desc If true, will not leave space for Touch UI buttons if Touch UI is disabled
 * @default false
 *
 * @param List Window Width
 * @parent Display Options
 * @type number
 * @min 0
 * @max 100
 * @desc The width (as a percentage of screen width) to make the List Window
 * @default 25
 *
 * @param Transparent Windows
 * @parent Display Options
 * @type boolean
 * @desc If true, windows will be transparent
 * @default false
 *
 * @param Load Background Image
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The image to show as the scene background in the Load scene
 *
 * @param Save Background Image
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The image to show as the scene background in the Save scene
 *
 * @param List Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the list window
 *
 * @param Display Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the display window
 *
 * @param Help Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the help window
 *
 * @param Option Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the option window (delete/rename/etc)
 *
 * @param Confirm Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the confirm window
 *
 * @param Name Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the name input/edit windows
 *
 * @param Scroll Speed
 * @parent Display Options
 * @type number
 * @min 0
 * @desc Speed at which the save display window scrolls (if needed)
 * @default 1
 *
 * @param Scroll Wait
 * @parent Display Options
 * @type number
 * @min 0
 * @desc Amount of time (in frames) to wait before beginning to scroll
 * @default 300
 *
 * @param Scroll Deceleration
 * @parent Display Options
 * @type number
 * @min 0.01
 * @max 0.99
 * @decimals 2
 * @desc Rate of deceleration after letting go of touch
 * @default 0.92
 *
 * @param Auto Scroll
 * @parent Display Options
 * @type boolean
 * @desc Determine if the display window should automatically scroll after so long of no user input
 * @default true
 *
 * @param Show Step Anim
 * @parent Display Options
 * @type boolean
 * @desc If true, will show step animation for characters display item
 * @default true
 *
 * @param Character Height
 * @parent Display Options
 * @type number
 * @min 0
 * @desc The vertical space to give the characters on the save file window
 * @default 72
 *
 * @param Display Info
 * @parent Display Options
 * @type select[]
 * @option Image
 * @option Location
 * @option Image And Location
 * @option Date
 * @option Playtime
 * @option Gold
 * @option Custom Info
 * @option Faces
 * @option Characters
 * @option Achievements
 * @option Achievement Points
 * @option Blank Line
 * @option New Game Plus
 * @desc Determines the order and what info the display window shows.
 * @default ["Date","Playtime","Faces"]
 *
 * @param Text Options
 * 
 * @param Empty Text
 * @parent Text Options
 * @desc Text to show when no save file information exists
 * @default No save data exists.
 * 
 * @param Location Text
 * @parent Text Options
 * @desc Text to describe the "location" string
 * @default Location: 
 * 
 * @param Playtime Text
 * @parent Text Options
 * @desc Text to describe the "playtime" string
 * @default Playtime: 
 * 
 * @param Gold Text
 * @parent Text Options
 * @desc Text to describe the "gold" string
 * @default Gold: 
 * 
 * @param Achievement Text
 * @parent Text Options
 * @desc Text to describe the "achievement" string. Requires CGMZ Achievements
 * @default Achievements: 
 * 
 * @param Achievement Point Text
 * @parent Text Options
 * @desc Text to describe the "achievement points" string. Requires CGMZ Achievements
 * @default Achievement Points: 
 * 
 * @param Level Text
 * @parent Text Options
 * @desc Text to describe the "level" string
 * @default Lv. 
 * 
 * @param Confirm Window Text
 * @parent Text Options
 * @desc Text at the top of the confirm window
 * @default Are You Sure?
 * 
 * @param Confirm Option Text
 * @parent Text Options
 * @desc Text to describe the "Confirm" string
 * @default Confirm
 * 
 * @param Cancel Option Text
 * @parent Text Options
 * @desc Text to describe the "Cancel" string
 * @default Cancel
 * 
 * @param Delete Option Text
 * @parent Text Options
 * @desc Text to describe the "Delete" string
 * @default Delete
 * 
 * @param Rename Option Text
 * @parent Text Options
 * @desc Text to describe the "Rename" string
 * @default Rename
 * 
 * @param Save Text
 * @parent Text Options
 * @desc Text to describe the "Save" string
 * @default Save
 * 
 * @param Load Text
 * @parent Text Options
 * @desc Text to describe the "Load" string
 * @default Load
*/
/*~struct~CustomSaveInfo:
 * @param Variable
 * @type variable
 * @desc The variable value to show as a custom option in the save screen
 *
 * @param Description
 * @desc The text to describe the variable (ex: Chapter: )
 *
 * @param Trailing Text
 * @desc Text to show after the variable (ex: %)
 *
 * @param Icon
 * @type number
 * @min -1
 * @desc The icon to show next to the variable. Set to -1 to not use
 * @default -1
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/savefile/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Cambia las pantallas predeterminadas de guardar/cargar
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
 * Versión: 1.3.1
 * ----------------------------------------------------------------------------
 * Compatibilidad: Sólo probado con mis CGMZ plugins.
 * Hecho para RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Descripción: este complemento modifica las pantallas de guardar/cargar para 
 * mostrar más información del juego, además de proporcionar opciones de 
 * personalización adicionales.
 * ----------------------------------------------------------------------------
 * Documentación:
 * -------------------------Guardar Imágenes-----------------------------------
 * Si usas una imagen guardada:
 * Las dimensiones de la imagen (resolución predeterminada) son 582 x 160
 * La altura de la imagen se puede cambiar en los parámetros a continuación
 * Las imágenes deben colocarse en la carpeta "imágenes"
 * ------------------------Etiquetas de nota-----------------------------------
 * Para establecer la ubicación, use la etiqueta de nota  <cgmzname:tuNombre>
 * Para configurar la imagen guardada para cada mapa, use la etiqueta de nota
 * <cgmzsaveimg:tuImagen>
 * Estas etiquetas de notas van en el cuadro de notas de propiedades del mapa.
 * --------------------Guardar datos personalizados----------------------------
 * Los datos guardados personalizados son variables del juego. Para asignar una 
 * variable de juego para almacenar texto, utilice la llamada de secuencia de
 * comandos:
 * $gameVariables.setValue(13, "El Heroe regresa");
 * donde 13 sería el id de la variable y la cadena sería lo que aparece en
 * la pantalla de guardar.
 * --------------------------Integrations--------------------------------------
 * This plugin can display New Game Plus text from [CGMZ] New Game Plus. To 
 * set this up, add New Game Plus as a line item in the Display Info parameter.
 * This option in the Display Info parameter will have no effect if not using
 * [CGMZ] New Game Plus.
 * ----------------------Historial de Versiones--------------------------------
 *	Versión 1.0.1
 * - Se agregó la capacidad de cambiar el color del texto del
 *	 encabezado / etiqueta
 * - Se agregó la capacidad de cambiar la opacidad del rectángulo negro detrás
 *	 de la información de ubicación
 * - Ahora compatible con VS core
 * - Solución para la superposición de ubicaciones cuando no hay imagen
 * - Corrección para la altura de la imagen ignorando el parámetro de altura
 *
 * Versión 1.0.2
 * - Solución de la altura de la imagen atascada en 160px
 *
 * Versión 1.0.3
 * - Solución para el guardado automático después de la batalla que no muestra
 *	 la información correcta
 * - Documentación actualizada
 *
 * Versión 1.0.4
 * - Updated color parameter to use RMMZ 1.6.0 new color picker UI
 *
 * Versión 1.1.0
 * - Added drag and drop control over each item drawn in Save File Display
 * - Added option to display CGMZ achievement/achievement pts in save file
 * - Added option to hide touch UI space when touch UI is disabled
 * - Added text code support
 * - Added Spanish language help documentation
 * - Images no longer limited to the Pictures subfolder
 * - Moved Show Image/Show Faces params to new Display Info parameter
 * - Fix crash when using Event Test
 * - This plugin now reports JSON errors in the console instead of crashing
 *
 * Versión 1.1.1
 * - Fix crash when an old save from before this plugin is loaded
 *
 * Versión 1.2.0
 * - Added option to delete save files
 * - Added option to rename save files
 * - Added ability to show a confirm window before save
 * - Added option to show step animation for character sprites
 * - Icon parameters now use icon selector ui
 * - You can now manually set character vertical space for larger sprites
 *
 * Versión 1.2.1
 * - Added support for [CGMZ] New Game Plus
 *
 * Versión 1.3.0
 * - Added confirmation window option for delete save file
 * - Added save and load scene background image options
 * - Added options to change the windowskin for each window
 * - Added option to change list window width
 * - Added option to have transparent windows
 * - Added option to hide autosave option in load mode
 * - Fix bug with Blank Line option in Display Info parameter
 * - Fix bug with Autosave losing renamed name after autosave occurs
 * - Save File Display window now scrolls if needed
 *
 * Versión 1.3.1
 * - Added option to stretch the save file image
 * - Removed Image, Gold from display info parameter default
 *
 * @param Autosave Options
 * @text Opciones de autoguardado
 * 
 * @param Show Autosave in Save Mode
 * @text Mostrar guardado automático en el modo Guardar
 * @parent Autosave Options
 * @type boolean
 * @desc Mostrar guardado automático en la pantalla de guardar.
 * @default false
 * 
 * @param Show Autosave in Load Mode
 * @parent Autosave Options
 * @type boolean
 * @desc Show autosave in the load screen?
 * @default false
 *
 * @param File Options
 * @text Opciones de archivo
 *
 * @param Max Save Files
 * @text Máximo de archivos guardados
 * @parent File Options
 * @type number
 * @min 1
 * @desc Cambiar la cantidad de archivos que el jugador puede seleccionar.
 * @default 20
 *
 * @param Max Filename Length
 * @parent File Options
 * @type number
 * @min 1
 * @desc The number of characters possible to use in a file name
 * @default 20
 *
 * @param File Icon Unused
 * @text Icono de archivo sin usar
 * @parent File Options
 * @type icon
 * @desc ID de icono para mostrar junto a un archivo que no tiene datos guardados. Establecer en 0 para ningún icono.
 * @default 229
 *
 * @param File Icon Used
 * @text Icono de archivo utilizado
 * @parent File Options
 * @type icon
 * @desc ID de icono para mostrar junto a un archivo que tiene datos guardados. Establecer en 0 para ningún icono.
 * @default 230
 *
 * @param Image Options
 * @text Opciones de Imagen
 *
 * @param Default Image
 * @text Imagen por defecto
 * @parent Image Options
 * @type file
 * @dir img
 * @desc Imagen predeterminada para mostrar (si se muestran imágenes) si no existe otra imagen.
 *
 * @param Image Height
 * @text Altura de Imagen
 * @parent Image Options
 * @type number
 * @desc Altura de la imagen a mostrar.
 * @default 160
 *
 * @param Stretch Image
 * @parent Image Options
 * @type boolean
 * @desc If true, will stretch the width to fit the window width
 * @default false
 *
 * @param Location Fade Opacity
 * @text Ubicación Desvanecimiento de Opacidad
 * @parent Image Options
 * @type number
 * @desc Opacidad (0-255) del rectángulo negro detrás de la ubicación.
 * @default 120
 * 
 * @param Custom Options
 * @text Opciones personalizadas
 * 
 * @param Custom Save Variables
 * @text Variables de guardado personalizadas
 * @parent Custom Options
 * @type struct<CustomSaveInfo>[]
 * @desc Configure las variables de guardado personalizadas aquí.
 * @default []
 * 
 * @param Window Options
 *
 * @param Show Delete Option
 * @parent Window Options
 * @type boolean
 * @desc If true, will allow the player to delete save files
 * @default false
 *
 * @param Show Rename Option
 * @parent Window Options
 * @type boolean
 * @desc If true, will allow the player to rename save files
 * @default false
 *
 * @param Show Confirm Window
 * @parent Window Options
 * @type boolean
 * @desc If true, will ask the player to confirm they want to save over that file
 * @default false
 *
 * @param Show Delete Confirm Window
 * @parent Window Options
 * @type boolean
 * @desc If true, will ask the player to confirm they want to delete that file
 * @default true
 * 
 * @param Display Options
 * @text Opciones de pantalla
 *
 * @param Header Color
 * @text Color del encabezado
 * @parent Display Options
 * @type number
 * @default 16
 * @min 0
 * @desc El color que se usará para los encabezados de información (ejemplo: ubicación: u oro:).
 *
 * @param Disable Touch UI Space
 * @parent Display Options
 * @type boolean
 * @desc If true, will not leave space for Touch UI buttons if Touch UI is disabled
 * @default false
 *
 * @param List Window Width
 * @parent Display Options
 * @type number
 * @min 0
 * @max 100
 * @desc The width (as a percentage of screen width) to make the List Window
 * @default 25
 *
 * @param Transparent Windows
 * @parent Display Options
 * @type boolean
 * @desc If true, windows will be transparent
 * @default false
 *
 * @param Load Background Image
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The image to show as the scene background in the Load scene
 *
 * @param Save Background Image
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The image to show as the scene background in the Save scene
 *
 * @param List Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the list window
 *
 * @param Display Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the display window
 *
 * @param Help Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the help window
 *
 * @param Option Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the option window (delete/rename/etc)
 *
 * @param Confirm Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the confirm window
 *
 * @param Name Windowskin
 * @parent Display Options
 * @type file
 * @dir img
 * @desc The windowskin to use for the name input/edit windows
 *
 * @param Scroll Speed
 * @parent Display Options
 * @type number
 * @min 0
 * @desc Speed at which the save display window scrolls (if needed)
 * @default 1
 *
 * @param Scroll Wait
 * @parent Display Options
 * @type number
 * @min 0
 * @desc Amount of time (in frames) to wait before beginning to scroll
 * @default 300
 *
 * @param Scroll Deceleration
 * @parent Display Options
 * @type number
 * @min 0.01
 * @max 0.99
 * @decimals 2
 * @desc Rate of deceleration after letting go of touch
 * @default 0.92
 *
 * @param Auto Scroll
 * @parent Display Options
 * @type boolean
 * @desc Determine if the display window should automatically scroll after so long of no user input
 * @default true
 *
 * @param Show Step Anim
 * @parent Display Options
 * @type boolean
 * @desc If true, will show step animation for characters display item
 * @default true
 *
 * @param Character Height
 * @parent Display Options
 * @type number
 * @min 0
 * @desc The vertical space to give the characters on the save file window
 * @default 72
 *
 * @param Display Info
 * @parent Display Options
 * @type select[]
 * @option Image
 * @option Location
 * @option Image And Location
 * @option Date
 * @option Playtime
 * @option Gold
 * @option Custom Info
 * @option Faces
 * @option Characters
 * @option Achievements
 * @option Achievement Points
 * @option Blank Line
 * @option New Game Plus
 * @desc Determines the order and what info the display window shows.
 * @default ["Date","Playtime","Faces"]
 *
 * @param Text Options
 * @text Opciones de texto
 * 
 * @param Empty Text
 * @text Texto Vacío
 * @parent Text Options
 * @desc Texto para mostrar cuando no existe información de archivo guardado.
 * @default No save data exists.
 * 
 * @param Location Text
 * @text Texto de Ubicación
 * @parent Text Options
 * @desc Texto para describir la cadena de "ubicación".
 * @default Location: 
 * 
 * @param Playtime Text
 * @text Texto de tiempo de juego
 * @parent Text Options
 * @desc Texto para describir la cadena "tiempo de juego".
 * @default Playtime: 
 * 
 * @param Gold Text
 * @text Texto Oro
 * @parent Text Options
 * @desc Texto para describir la cadena "oro".
 * @default Gold: 
 * 
 * @param Achievement Text
 * @parent Text Options
 * @desc Text to describe the "achievement" string. Requires CGMZ Achievements
 * @default Achievements: 
 * 
 * @param Achievement Point Text
 * @parent Text Options
 * @desc Text to describe the "achievement points" string. Requires CGMZ Achievements
 * @default Achievement Points: 
 * 
 * @param Level Text
 * @text Texto de nivel
 * @parent Text Options
 * @desc Texto para describir la cadena de "nivel".
 * @default Lv. 
 * 
 * @param Confirm Window Text
 * @parent Text Options
 * @desc Text at the top of the confirm window
 * @default Are You Sure?
 * 
 * @param Confirm Option Text
 * @parent Text Options
 * @desc Text to describe the "Confirm" string
 * @default Confirm
 * 
 * @param Cancel Option Text
 * @parent Text Options
 * @desc Text to describe the "Cancel" string
 * @default Cancel
 * 
 * @param Delete Option Text
 * @parent Text Options
 * @desc Text to describe the "Delete" string
 * @default Delete
 * 
 * @param Rename Option Text
 * @parent Text Options
 * @desc Text to describe the "Rename" string
 * @default Rename
 * 
 * @param Save Text
 * @parent Text Options
 * @desc Text to describe the "Save" string
 * @default Save
 * 
 * @param Load Text
 * @parent Text Options
 * @desc Text to describe the "Load" string
 * @default Load
*/
/*~struct~CustomSaveInfo:es
 * @param Variable
 * @text Variable
 * @type variable
 * @desc El valor de la variable para mostrar como una opción personalizada en la pantalla de guardar.
 *
 * @param Description
 * @text Descripción
 * @desc El texto para describir la variable (ej: Capítulo: ).
 *
 * @param Trailing Text
 * @text Texto final
 * @desc Texto a mostrar después de la variable (ej: %).
 *
 * @param Icon
 * @text Icono
 * @type number
 * @min -1
 * @desc El icono que se muestra junto a la variable. Establecer en -1 para no usar.
 * @default -1
*/
Imported.CGMZ_SaveFile = true;
CGMZ.Versions["Save File"] = "1.3.1";
CGMZ.SaveFile = {};
CGMZ.SaveFile.parameters = PluginManager.parameters('CGMZ_SaveFile');
CGMZ.SaveFile.CustomSaveInfo = CGMZ_Utils.parseJSON(CGMZ.SaveFile.parameters["Custom Save Variables"], [], "CGMZ Save File", "Your Custom Save Variables had incorrect JSON and could not be loaded.");
CGMZ.SaveFile.DisplayInfo = CGMZ_Utils.parseJSON(CGMZ.SaveFile.parameters["Display Info"], [], "CGMZ Save File", "Your display info JSON was invalid and could not be loaded.");
CGMZ.SaveFile.ShowAutosaveInSaveMode = (CGMZ.SaveFile.parameters["Show Autosave in Save Mode"] === "true");
CGMZ.SaveFile.ShowAutosaveInLoadMode = (CGMZ.SaveFile.parameters["Show Autosave in Load Mode"] === "true");
CGMZ.SaveFile.DisableTouchUISpace = (CGMZ.SaveFile.parameters["Disable Touch UI Space"] === "true");
CGMZ.SaveFile.ShowStepAnim = (CGMZ.SaveFile.parameters["Show Step Anim"] === "true");
CGMZ.SaveFile.ShowConfirmWindow = (CGMZ.SaveFile.parameters["Show Confirm Window"] === "true");
CGMZ.SaveFile.ShowDeleteConfirmWindow = (CGMZ.SaveFile.parameters["Show Delete Confirm Window"] === "true");
CGMZ.SaveFile.ShowDeleteOption = (CGMZ.SaveFile.parameters["Show Delete Option"] === "true");
CGMZ.SaveFile.ShowRenameOption = (CGMZ.SaveFile.parameters["Show Rename Option"] === "true");
CGMZ.SaveFile.TransparentWindows = (CGMZ.SaveFile.parameters["Transparent Windows"] === "true");
CGMZ.SaveFile.AutoScroll = (CGMZ.SaveFile.parameters["Auto Scroll"] === "true");
CGMZ.SaveFile.StretchImage = (CGMZ.SaveFile.parameters["Stretch Image"] === "true");
CGMZ.SaveFile.MaxSaveFiles = Number(CGMZ.SaveFile.parameters["Max Save Files"]);
CGMZ.SaveFile.MaxFilenameLength = Number(CGMZ.SaveFile.parameters["Max Filename Length"]);
CGMZ.SaveFile.SaveIconUsed = Number(CGMZ.SaveFile.parameters["File Icon Used"]);
CGMZ.SaveFile.SaveIconUnused = Number(CGMZ.SaveFile.parameters["File Icon Unused"]);
CGMZ.SaveFile.ImageHeight = Number(CGMZ.SaveFile.parameters["Image Height"]);
CGMZ.SaveFile.FadeSpriteOpacity = Number(CGMZ.SaveFile.parameters["Location Fade Opacity"]);
CGMZ.SaveFile.HeaderColor = Number(CGMZ.SaveFile.parameters["Header Color"]);
CGMZ.SaveFile.CharHeight = Number(CGMZ.SaveFile.parameters["Character Height"]);
CGMZ.SaveFile.ListWindowWidth = Number(CGMZ.SaveFile.parameters["List Window Width"]);
CGMZ.SaveFile.ScrollSpeed = Number(CGMZ.SaveFile.parameters["Scroll Speed"]);
CGMZ.SaveFile.ScrollWait = Number(CGMZ.SaveFile.parameters["Scroll Wait"]);
CGMZ.SaveFile.ScrollDeceleration = parseFloat(CGMZ.SaveFile.parameters["Scroll Deceleration"]);
CGMZ.SaveFile.DefaultImage = CGMZ.SaveFile.parameters["Default Image"];
CGMZ.SaveFile.LoadBackgroundImage = CGMZ.SaveFile.parameters["Load Background Image"];
CGMZ.SaveFile.SaveBackgroundImage = CGMZ.SaveFile.parameters["Save Background Image"];
CGMZ.SaveFile.ListWindowskin = CGMZ.SaveFile.parameters["List Windowskin"];
CGMZ.SaveFile.DisplayWindowskin = CGMZ.SaveFile.parameters["Display Windowskin"];
CGMZ.SaveFile.HelpWindowskin = CGMZ.SaveFile.parameters["Help Windowskin"];
CGMZ.SaveFile.ConfirmWindowskin = CGMZ.SaveFile.parameters["Confirm Windowskin"];
CGMZ.SaveFile.OptionWindowskin = CGMZ.SaveFile.parameters["Option Windowskin"];
CGMZ.SaveFile.NameWindowskin = CGMZ.SaveFile.parameters["Name Windowskin"];
CGMZ.SaveFile.EmptyText = CGMZ.SaveFile.parameters["Empty Text"];
CGMZ.SaveFile.LocationText = CGMZ.SaveFile.parameters["Location Text"];
CGMZ.SaveFile.PlaytimeText = CGMZ.SaveFile.parameters["Playtime Text"];
CGMZ.SaveFile.GoldText = CGMZ.SaveFile.parameters["Gold Text"];
CGMZ.SaveFile.AchievementText = CGMZ.SaveFile.parameters["Achievement Text"];
CGMZ.SaveFile.AchievementPointText = CGMZ.SaveFile.parameters["Achievement Point Text"];
CGMZ.SaveFile.LevelText = CGMZ.SaveFile.parameters["Level Text"];
CGMZ.SaveFile.ConfirmWindowText = CGMZ.SaveFile.parameters["Confirm Window Text"];
CGMZ.SaveFile.ConfirmText = CGMZ.SaveFile.parameters["Confirm Option Text"];
CGMZ.SaveFile.CancelText = CGMZ.SaveFile.parameters["Cancel Option Text"];
CGMZ.SaveFile.DeleteText = CGMZ.SaveFile.parameters["Delete Option Text"];
CGMZ.SaveFile.RenameText = CGMZ.SaveFile.parameters["Rename Option Text"];
CGMZ.SaveFile.SaveText = CGMZ.SaveFile.parameters["Save Text"];
CGMZ.SaveFile.LoadText = CGMZ.SaveFile.parameters["Load Text"];
//=============================================================================
// CGMZ Temp
//-----------------------------------------------------------------------------
// Create plugin data. Not saved.
//=============================================================================
//-----------------------------------------------------------------------------
// Create (unsaved) plugin data
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_SaveFile_CGMZTemp_createPluginData.call(this);
	this._saveFileTempImageURL = "";
	this._saveFileTempMapName = "Unknown";
	this.saveFileAutosaveFlag = false;
};
//-----------------------------------------------------------------------------
// Get the save file's filename
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getSaveFileFilename = function() {
	if(this.saveFileAutosaveFlag) {
		const info = DataManager._globalInfo[0];
		if(info && info.cgmz_savefileName) return info.cgmz_savefileName;
	}
	const id = $gameSystem.savefileId();
	if(id) {
		const info = DataManager._globalInfo[id];
		if(info && info.cgmz_savefileName) return info.cgmz_savefileName;
	}
	return "";
};
//=============================================================================
// Game_Map
//-----------------------------------------------------------------------------
// Add function for getting map save file image
//=============================================================================
//-----------------------------------------------------------------------------
// Get CGMZ Save File Image url
//-----------------------------------------------------------------------------
Game_Map.prototype.CGMZ_SaveFile_getImage = function() {
	let url = "";
	if($dataMap && $dataMap.meta && $dataMap.meta.cgmzsaveimg) url = $dataMap.meta.cgmzsaveimg;
	if(url === "" && $cgmzTemp._saveFileTempImageURL) url = $cgmzTemp._saveFileTempImageURL;
	return url;
};
//-----------------------------------------------------------------------------
// Temporarily store cgmz meta for save file on map load. Needed because
// map data is not yet loaded when autosave occurs after battle, so dataMap
// meta tags cannot be read after battle during autosave
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_GameMap_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	alias_CGMZ_SaveFile_GameMap_setup.call(this, mapId);
	$cgmzTemp._saveFileTempImageURL = this.CGMZ_SaveFile_getImage();
	$cgmzTemp._saveFileTempMapName = this.CGMZ_getMapName();
};
//-----------------------------------------------------------------------------
// Alias. Check if data map is null, if so return temp saved map name
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_GameMap_CGMZ_getMapName = Game_Map.prototype.CGMZ_getMapName;
Game_Map.prototype.CGMZ_getMapName = function() {
	if(!$dataMap) return $cgmzTemp._saveFileTempMapName;
	return alias_CGMZ_SaveFile_GameMap_CGMZ_getMapName.call(this);
};
//=============================================================================
// Game_Party
//-----------------------------------------------------------------------------
// Add more to each actor's save info
//=============================================================================
//-----------------------------------------------------------------------------
// Get CGMZ Save File actor info
//-----------------------------------------------------------------------------
Game_Party.prototype.CGMZ_SaveFile_actorInfoForSavefile = function() {
	return this.battleMembers().map(actor => [
		actor.name(),
		actor._level
	]);
};
//=============================================================================
// Scene_Base
//-----------------------------------------------------------------------------
// Add tracking for autosaves
//=============================================================================
//-----------------------------------------------------------------------------
// Set CGMZ flag before autosave
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneBase_executeAutosave = Scene_Base.prototype.executeAutosave;
Scene_Base.prototype.executeAutosave = function() {
	$cgmzTemp.saveFileAutosaveFlag = true;
    alias_CGMZ_SaveFile_SceneBase_executeAutosave.call(this);
};
//-----------------------------------------------------------------------------
// Clear CGMZ flag after autosave
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneBase_onAutosaveSuccess = Scene_Base.prototype.onAutosaveSuccess;
Scene_Base.prototype.onAutosaveSuccess = function() {
	alias_CGMZ_SaveFile_SceneBase_onAutosaveSuccess.call(this);
    $cgmzTemp.saveFileAutosaveFlag = false;
};
//-----------------------------------------------------------------------------
// Clear CGMZ flag after autosave
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneBase_onAutosaveFailure = Scene_Base.prototype.onAutosaveFailure;
Scene_Base.prototype.onAutosaveFailure = function() {
	alias_CGMZ_SaveFile_SceneBase_onAutosaveFailure.call(this);
    $cgmzTemp.saveFileAutosaveFlag = false;
};
//=============================================================================
// DataManager
//-----------------------------------------------------------------------------
// Change max save file count and save file info
//=============================================================================
//-----------------------------------------------------------------------------
// OVERWRITE. Change max save files
//-----------------------------------------------------------------------------
DataManager.maxSavefiles = function() {
	return CGMZ.SaveFile.MaxSaveFiles;
};
//-----------------------------------------------------------------------------
// Alias. Add additional save file info
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
DataManager.makeSavefileInfo = function() {
	const info = alias_CGMZ_SaveFile_DataManager_makeSavefileInfo.call(this);
	info.cgmz_savefileName = $cgmzTemp.getSaveFileFilename();
	info.cgmz_mapName = $gameMap.CGMZ_getMapName();
	info.cgmz_gold = $gameParty.gold();
	info.cgmz_image = $gameMap.CGMZ_SaveFile_getImage();
	info.cgmz_actor = $gameParty.CGMZ_SaveFile_actorInfoForSavefile();
	if(Imported.CGMZ_Achievements) {
		info.cgmz_achievements = $cgmz.countEarnedAchievements();
		info.cgmz_achievementPts = $cgmz.countEarnedAchievementPoints();
	}
	info.cgmz_custom = {};
	for(const customInfo of CGMZ.SaveFile.CustomSaveInfo) {
		const data = CGMZ_Utils.parseJSON(customInfo, null, "CGMZ Save File", "A custom save info property could not be read due to invalid JSON");
		if(!data) continue;
		const variable = Number(data.Variable);
		info.cgmz_custom[variable] = $gameVariables.value(variable);
	}
	return info;
};
//=============================================================================
// Window_SavefileList
//-----------------------------------------------------------------------------
// Do not include autosave if save mode and option disabled
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Set window transparency
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_WindowSavefileList_initialize = Window_SavefileList.prototype.initialize;
Window_SavefileList.prototype.initialize = function(rect) {
	alias_CGMZ_SaveFile_WindowSavefileList_initialize.call(this, rect);
	this.setBackgroundType(2 * (CGMZ.SaveFile.TransparentWindows));
};
//-----------------------------------------------------------------------------
// Load the list windowskin if needed
//-----------------------------------------------------------------------------
Window_SavefileList.prototype.loadWindowskin = function() {
	if(CGMZ.SaveFile.ListWindowskin) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.ListWindowskin, "img");
		this.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	} else {
		Window_Selectable.prototype.loadWindowskin.call(this);
	}
};
//-----------------------------------------------------------------------------
// Alias. Do not include autosave if in save mode (optional)
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_WindowSavefileList_setMode = Window_SavefileList.prototype.setMode;
Window_SavefileList.prototype.setMode = function(mode, autosave) {
	if(mode === "save" && !CGMZ.SaveFile.ShowAutosaveInSaveMode) autosave = false;
	if(mode === "load" && !CGMZ.SaveFile.ShowAutosaveInLoadMode) autosave = false;
	alias_CGMZ_SaveFile_WindowSavefileList_setMode.call(this, mode, autosave);
};
//-----------------------------------------------------------------------------
// OVERWRITE. Draw the item
//-----------------------------------------------------------------------------
Window_SavefileList.prototype.drawItem = function(index) {
	const savefileId = this.indexToSavefileId(index);
	const rect = this.itemRectWithPadding(index);
	this.resetTextColor();
	this.changePaintOpacity(this.isEnabled(savefileId));
	if(!!DataManager.savefileInfo(savefileId) && CGMZ.SaveFile.SaveIconUsed > 0) {
		this.drawIcon(CGMZ.SaveFile.SaveIconUsed, rect.x, rect.y + 4);
		rect.x += ImageManager.iconWidth + 4;
	} else if(!DataManager.savefileInfo(savefileId) && CGMZ.SaveFile.SaveIconUnused > 0) {
		this.drawIcon(CGMZ.SaveFile.SaveIconUnused, rect.x, rect.y + 4);
		rect.x += ImageManager.iconWidth + 4;
	}
	this.drawTitle(savefileId, rect.x, rect.y + 4);
};
//-----------------------------------------------------------------------------
// Check for custom title first. Otherwise, draw the default title
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_WindowSavefileList_drawTitle = Window_SavefileList.prototype.drawTitle;
Window_SavefileList.prototype.drawTitle = function(savefileId, x, y) {
	const info = DataManager.savefileInfo(savefileId);
	if(info && info.cgmz_savefileName) {
		this.drawText(info.cgmz_savefileName, x, y, this.contents.width - x - this.padding);
	} else {
		alias_CGMZ_SaveFile_WindowSavefileList_drawTitle.apply(this, arguments);
	}
};
//-----------------------------------------------------------------------------
// OVERWRITE. Change item height back to default
//-----------------------------------------------------------------------------
Window_SavefileList.prototype.itemHeight = function() {
	return Window_Selectable.prototype.itemHeight.call(this);
};
//-----------------------------------------------------------------------------
// Set Help Window
//-----------------------------------------------------------------------------
Window_SavefileList.prototype.CGMZ_SaveFile_setDisplayWindow = function(displayWindow) {
	this._CGMZ_SaveFile_displayWindow = displayWindow;
	this.callUpdateHelp();
};
//-----------------------------------------------------------------------------
// Update display window if exists
//-----------------------------------------------------------------------------
Window_SavefileList.prototype.callUpdateHelp = function() {
	if(this._CGMZ_SaveFile_displayWindow) {
		const savefileId = this.indexToSavefileId(this.index());
		const info = DataManager.savefileInfo(savefileId);
		this._CGMZ_SaveFile_displayWindow.setInfo(info);
	}
};
//=============================================================================
// Scene_File
//-----------------------------------------------------------------------------
// Shrink list window and display new display window
//=============================================================================
const alias_CGMZ_SaveFile_SceneFile_initialize = Scene_File.prototype.initialize;
Scene_File.prototype.initialize = function() {
	alias_CGMZ_SaveFile_SceneFile_initialize.call(this);
	this._cgmz_needsRefresh = false;
};
//-----------------------------------------------------------------------------
// Alias. Also create save file display window
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneFile_create = Scene_File.prototype.create;
Scene_File.prototype.create = function() {
	alias_CGMZ_SaveFile_SceneFile_create.call(this);
	this.CGMZ_createDisplayWindow();
	this.CGMZ_createConfirmWindow();
	this.CGMZ_createDeleteConfirmWindow();
	this.CGMZ_createDeleteRenameOptionWindow();
	this.CGMZ_createFilenameEditWindow();
	this.CGMZ_createFilenameInputWindow();
	if(this._helpWindow) {
		this._helpWindow.setBackgroundType(2 * (CGMZ.SaveFile.TransparentWindows));
		if(CGMZ.SaveFile.HelpWindowskin) {
			const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.HelpWindowskin, "img");
			this._helpWindow.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		}
	}
	if(this._cgmz_filenameInputWindow) {
		if(CGMZ.SaveFile.NameWindowskin) {
			const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.NameWindowskin, "img");
			this._cgmz_filenameInputWindow.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		}
	}
};
//-----------------------------------------------------------------------------
// Alias. Change help window y if no touch ui
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneFile_helpWindowRect = Scene_File.prototype.helpWindowRect;
Scene_File.prototype.helpWindowRect = function() {
	const rect = alias_CGMZ_SaveFile_SceneFile_helpWindowRect.apply(this, arguments);
	if(CGMZ.SaveFile.DisableTouchUISpace && !ConfigManager.touchUI) rect.y = 0;
	if(this.CGMZ_needsDeleteRenameOptionWindow()) rect.height = this.calcWindowHeight(1, true);
	return rect;
};
//-----------------------------------------------------------------------------
// Alias. Change width of save file select window
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneFile_listWindowRect = Scene_File.prototype.listWindowRect;
Scene_File.prototype.listWindowRect = function() {
	const rect = alias_CGMZ_SaveFile_SceneFile_listWindowRect.call(this);
	rect.width = Graphics.boxWidth * (CGMZ.SaveFile.ListWindowWidth / 100.0);
	rect.y = this._helpWindow.height + this._helpWindow.y;
	rect.height = Graphics.boxHeight - rect.y;
	return rect;
};
//-----------------------------------------------------------------------------
// VS compatibility. Seems their core doesn't call above default function ¯\_(ツ)_/¯
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneFile_createListWindow = Scene_File.prototype.createListWindow;
Scene_File.prototype.createListWindow = function() {
	alias_CGMZ_SaveFile_SceneFile_createListWindow.call(this);
	this._listWindow.width = Graphics.boxWidth * (CGMZ.SaveFile.ListWindowWidth / 100.0);
};
//-----------------------------------------------------------------------------
// Create display window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_createDisplayWindow = function() {
	const rect = this.CGMZ_displayWindowRect();
	this._cgmz_displayWindow = new CGMZ_Window_SaveFileDisplay(rect);
	this.addWindow(this._cgmz_displayWindow);
	this._listWindow.CGMZ_SaveFile_setDisplayWindow(this._cgmz_displayWindow);
};
//-----------------------------------------------------------------------------
// Display window rect
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_displayWindowRect = function() {
	const x = this._listWindow.width;
	const y = this._listWindow.y;
	const width = Graphics.boxWidth - this._listWindow.width;
	const height = this._listWindow.height;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create confirm window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_createConfirmWindow = function() {
	const rect = this.CGMZ_confirmWindowRect();
	this._cgmz_confirmWindow = new CGMZ_Window_SaveFileConfirm(rect);
	this._cgmz_confirmWindow.setHandler("confirm", this.CGMZ_onSaveConfirmConfirm.bind(this));
	this._cgmz_confirmWindow.setHandler("cancel", this.CGMZ_onSaveConfirmCancel.bind(this));
	this._cgmz_confirmWindow.deactivate();
	this._cgmz_confirmWindow.hide();
	this.addWindow(this._cgmz_confirmWindow);
};
//-----------------------------------------------------------------------------
// Confirm window rect
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_confirmWindowRect = function() {
	const width = Graphics.boxWidth * (50 / 100.0);
	const height = this.calcWindowHeight(2, true);
	const x = Graphics.boxWidth / 2 - width / 2;
	const y = Graphics.boxHeight / 2 - height / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create delete confirm window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_createDeleteConfirmWindow = function() {
	const rect = this.CGMZ_deleteConfirmWindowRect();
	this._cgmz_deleteConfirmWindow = new CGMZ_Window_SaveFileConfirm(rect);
	this._cgmz_deleteConfirmWindow.setHandler("confirm", this.CGMZ_onDeleteConfirm.bind(this));
	this._cgmz_deleteConfirmWindow.setHandler("cancel", this.CGMZ_onDeleteCancel.bind(this));
	this._cgmz_deleteConfirmWindow.deactivate();
	this._cgmz_deleteConfirmWindow.hide();
	this.addWindow(this._cgmz_deleteConfirmWindow);
};
//-----------------------------------------------------------------------------
// Delete confirm window rect
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_deleteConfirmWindowRect = function() {
	const width = this._cgmz_confirmWindow.width;
	const height = this._cgmz_confirmWindow.height;
	const x = this._cgmz_confirmWindow.x;
	const y = this._cgmz_confirmWindow.y;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create delete/rename option window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_createDeleteRenameOptionWindow = function() {
	const rect = this.CGMZ_deleteRenameWindowRect();
	this._cgmz_deleteRenameWindow = new CGMZ_Window_SaveFileDeleteRename(rect, this.mode());
	this._cgmz_deleteRenameWindow.setHandler("main", this.CGMZ_postDROnSaveFileOk.bind(this));
	this._cgmz_deleteRenameWindow.setHandler("delete", this.CGMZ_onDeleteOption.bind(this));
	this._cgmz_deleteRenameWindow.setHandler("rename", this.CGMZ_onRenameOption.bind(this));
	this._cgmz_deleteRenameWindow.setHandler("cancel", this.CGMZ_onDRCancel.bind(this));
	this._cgmz_deleteRenameWindow.deactivate();
	this._cgmz_deleteRenameWindow.hide();
	this.addWindow(this._cgmz_deleteRenameWindow);
};
//-----------------------------------------------------------------------------
// Copy help window rect for the delete/rename window rect
// Need to re-set the height to prevent scrolling because VS changes it back
// for the actual help window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_deleteRenameWindowRect = function() {
	const rect = this.helpWindowRect();
	rect.height = this.calcWindowHeight(1, true);
	return rect;
};
//-----------------------------------------------------------------------------
// Create name edit window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_createFilenameEditWindow = function() {
	const rect = this.CGMZ_filenameEditWindowRect();
	this._cgmz_filenameEditWindow = new CGMZ_SaveFile_Window_NameEdit(rect);
	this._cgmz_filenameEditWindow.setup(CGMZ.SaveFile.MaxFilenameLength);
	this._cgmz_filenameEditWindow.hide();
	this.addWindow(this._cgmz_filenameEditWindow);
};
//-----------------------------------------------------------------------------
// Get the name edit window rect
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_filenameEditWindowRect = function() {
	const inputWindowHeight = this.calcWindowHeight(9, true);
	const ww = 600;
	const wh = this.calcWindowHeight(1, true);
	const wx = (Graphics.boxWidth - ww) / 2;
	const wy = (Graphics.boxHeight - (wh + inputWindowHeight + 4)) / 2;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create name input window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_createFilenameInputWindow = function() {
	const rect = this.CGMZ_filenameInputWindowRect();
	this._cgmz_filenameInputWindow = new Window_NameInput(rect);
	this._cgmz_filenameInputWindow.setEditWindow(this._cgmz_filenameEditWindow);
	this._cgmz_filenameInputWindow.setHandler("ok", this.CGMZ_onFilenameInputOk.bind(this));
	this._cgmz_filenameInputWindow.hide();
	this._cgmz_filenameInputWindow.deactivate();
	this._cgmz_filenameInputWindow.setBackgroundType(2 * (CGMZ.SaveFile.TransparentWindows));
	this.addWindow(this._cgmz_filenameInputWindow);
};
//-----------------------------------------------------------------------------
// Get the name input window rect
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_filenameInputWindowRect = function() {
	const wx = this._cgmz_filenameEditWindow.x;
	const wy = this._cgmz_filenameEditWindow.y + this._cgmz_filenameEditWindow.height + 8;
	const ww = this._cgmz_filenameEditWindow.width;
	const wh = this.calcWindowHeight(9, true);
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Check if this scene needs the delete/rename option window
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_needsDeleteRenameOptionWindow = function() {
	return CGMZ.SaveFile.ShowDeleteOption || CGMZ.SaveFile.ShowRenameOption;
};
//-----------------------------------------------------------------------------
// Handling for confirm window confirm
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onSaveConfirmConfirm = function() {
	this.CGMZ_postConfirmOnSaveFileOk();
};
//-----------------------------------------------------------------------------
// Implemented by children
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_postConfirmOnSaveFileOk = function() {
	//
};
//-----------------------------------------------------------------------------
// Handling for confirm window cancel
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onSaveConfirmCancel = function() {
	this._cgmz_confirmWindow.deactivate();
	this._cgmz_confirmWindow.hide();
	this._listWindow.activate();
};
//-----------------------------------------------------------------------------
// Also deactivate and hide the confirm window
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneFile_activateListWindow = Scene_File.prototype.activateListWindow;
Scene_File.prototype.activateListWindow = function() {
	if(this._cgmz_confirmWindow) {
		this._cgmz_confirmWindow.deactivate();
		this._cgmz_confirmWindow.hide();
	}
	alias_CGMZ_SaveFile_SceneFile_activateListWindow.call(this);
};
//-----------------------------------------------------------------------------
// Handling for delete/rename window cancel
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onDRCancel = function() {
	this._cgmz_deleteRenameWindow.deactivate();
	this._cgmz_deleteRenameWindow.hide();
	this._helpWindow.show();
	this._listWindow.activate();
};
//-----------------------------------------------------------------------------
// Implemented by children
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_postDROnSaveFileOk = function() {
	//
};
//-----------------------------------------------------------------------------
// Handle when delete option is selected
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onDeleteOption = function() {
	if(CGMZ.SaveFile.ShowDeleteConfirmWindow) {
		this._cgmz_deleteRenameWindow.deactivate();
		this._cgmz_deleteConfirmWindow.activate();
		this._cgmz_deleteConfirmWindow.show();
	} else {
		this.CGMZ_deleteFile();
	}
};
//-----------------------------------------------------------------------------
// Handle when delete is canceled
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onDeleteCancel = function() {
	this._cgmz_deleteConfirmWindow.deactivate();
	this._cgmz_deleteConfirmWindow.hide();
	this._cgmz_deleteRenameWindow.activate();
};
//-----------------------------------------------------------------------------
// Handle when delete is confirmed
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onDeleteConfirm = function() {
	this.CGMZ_deleteFile();
};
//-----------------------------------------------------------------------------
// Handle deleting the save file
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_deleteFile = function() {
	if(DataManager.savefileExists(this.savefileId())) {
		const saveName = DataManager.makeSavename(this.savefileId());
		StorageManager.remove(saveName);
		DataManager.removeInvalidGlobalInfo();
		const savefileId = this.savefileId();
		const info = DataManager.savefileInfo(savefileId);
		this._listWindow.refresh();
		this._cgmz_displayWindow.setInfo(info);
	}
	this._cgmz_deleteRenameWindow.deactivate();
	this._cgmz_deleteRenameWindow.hide();
	this._cgmz_deleteConfirmWindow.deactivate();
	this._cgmz_deleteConfirmWindow.hide();
	this._helpWindow.show();
	this._listWindow.activate();
};
//-----------------------------------------------------------------------------
// Handle rename option
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onRenameOption = function() {
	this._listWindow.hide();
	this._cgmz_displayWindow.hide();
	this._cgmz_deleteRenameWindow.hide();
	this._cgmz_deleteRenameWindow.deactivate();
	this._cgmz_filenameEditWindow.setSaveFileId(this.savefileId());
	this._cgmz_filenameEditWindow.refresh();
	this._cgmz_filenameEditWindow.show();
	this._cgmz_filenameInputWindow.show();
	this._cgmz_filenameInputWindow.activate();
};
//-----------------------------------------------------------------------------
// Handle filename input accept
//-----------------------------------------------------------------------------
Scene_File.prototype.CGMZ_onFilenameInputOk = function() {
	const savefileId = this.savefileId();
	const info = DataManager.savefileInfo(savefileId);
	const name = this._cgmz_filenameEditWindow.name();
	if(name && info) {
		info.cgmz_savefileName = name;
		DataManager.saveGlobalInfo();
	}
	this._cgmz_filenameEditWindow.hide();
	this._cgmz_filenameInputWindow.hide();
	this._cgmz_filenameInputWindow.deactivate();
	this._listWindow.refresh();
	this._listWindow.show();
	this._cgmz_displayWindow.show();
	this._cgmz_deleteRenameWindow.show();
	this._cgmz_deleteRenameWindow.activate();
};
//=============================================================================
// Scene_Save
//-----------------------------------------------------------------------------
// Different handling to show confirm window if configured
//=============================================================================
//-----------------------------------------------------------------------------
// Handle save file ok in case of confirm window
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneSave_onSavefileOk = Scene_Save.prototype.onSavefileOk;
Scene_Save.prototype.onSavefileOk = function() {
	const savefileId = this.savefileId();
	if(this.CGMZ_needsDeleteRenameOptionWindow()) {
		if(this.isSavefileEnabled(savefileId)) {
			SoundManager.playOk();
			this._helpWindow.hide();
			this._cgmz_deleteRenameWindow.activate();
			this._cgmz_deleteRenameWindow.show();
		} else {
			SoundManager.playBuzzer();
			this._listWindow.activate();
		}
	} else if(CGMZ.SaveFile.ShowConfirmWindow) {
		if(this.isSavefileEnabled(savefileId)) {
			SoundManager.playOk();
			this._listWindow.deactivate();
			this._cgmz_confirmWindow.activate();
			this._cgmz_confirmWindow.show();
		} else {
			SoundManager.playBuzzer();
			this._listWindow.activate();
		}
	} else {
		alias_CGMZ_SaveFile_SceneSave_onSavefileOk.call(this);
	}
};
//-----------------------------------------------------------------------------
// Same save file processing for after save confirmation
//-----------------------------------------------------------------------------
Scene_Save.prototype.CGMZ_postConfirmOnSaveFileOk = function() {
	alias_CGMZ_SaveFile_SceneSave_onSavefileOk.call(this);
};
//-----------------------------------------------------------------------------
// Call original load function
//-----------------------------------------------------------------------------
Scene_Save.prototype.CGMZ_postDROnSaveFileOk = function() {
	if(CGMZ.SaveFile.ShowConfirmWindow) {
		const savefileId = this.savefileId();
		if(this.isSavefileEnabled(savefileId)) {
			SoundManager.playOk();
			this._listWindow.deactivate();
			this._cgmz_confirmWindow.activate();
			this._cgmz_confirmWindow.show();
		} else {
			SoundManager.playBuzzer();
			this._listWindow.activate();
		}
	} else {
		alias_CGMZ_SaveFile_SceneSave_onSavefileOk.call(this);
	}
};
//-----------------------------------------------------------------------------
// Create the Save scene background image
//-----------------------------------------------------------------------------
Scene_Save.prototype.createBackground = function() {
	Scene_File.prototype.createBackground.call(this);
	if(CGMZ.SaveFile.SaveBackgroundImage) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.SaveBackgroundImage, "img");
		this._backgroundCustomSprite = new Sprite();
		this._backgroundCustomSprite.bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		this.addChild(this._backgroundCustomSprite);
	}
};
//=============================================================================
// Scene_Load
//-----------------------------------------------------------------------------
// Different handling to show delete/rename option window if needed
//=============================================================================
//-----------------------------------------------------------------------------
// Handle save file ok in case of delete/rename option window
//-----------------------------------------------------------------------------
const alias_CGMZ_SaveFile_SceneLoad_onSavefileOk = Scene_Load.prototype.onSavefileOk;
Scene_Load.prototype.onSavefileOk = function() {
	if(this.CGMZ_needsDeleteRenameOptionWindow()) {
		const savefileId = this.savefileId();
		if(this.isSavefileEnabled(savefileId)) {
			SoundManager.playOk();
			this._helpWindow.hide();
			this._cgmz_deleteRenameWindow.activate();
			this._cgmz_deleteRenameWindow.show();
		} else {
			SoundManager.playBuzzer();
			this._listWindow.activate();
		}
	} else {
		alias_CGMZ_SaveFile_SceneLoad_onSavefileOk.call(this);
	}
};
//-----------------------------------------------------------------------------
// Call original load function
//-----------------------------------------------------------------------------
Scene_Load.prototype.CGMZ_postDROnSaveFileOk = function() {
	alias_CGMZ_SaveFile_SceneLoad_onSavefileOk.call(this);
};
//-----------------------------------------------------------------------------
// Create the Load scene background image
//-----------------------------------------------------------------------------
Scene_Load.prototype.createBackground = function() {
	Scene_File.prototype.createBackground.call(this);
	if(CGMZ.SaveFile.LoadBackgroundImage) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.LoadBackgroundImage, "img");
		this._backgroundCustomSprite = new Sprite();
		this._backgroundCustomSprite.bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		this.addChild(this._backgroundCustomSprite);
	}
};
//=============================================================================
// CGMZ_Window_SaveFileDisplay
//-----------------------------------------------------------------------------
// Display save file info
//=============================================================================
function CGMZ_Window_SaveFileDisplay(rect) {
	this.initialize.apply(this, arguments);
}
CGMZ_Window_SaveFileDisplay.prototype = Object.create(CGMZ_Window_Scrollable.prototype);
CGMZ_Window_SaveFileDisplay.prototype.constructor = CGMZ_Window_SaveFileDisplay;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.initialize = function(rect) {
	const heightMultiplier = 10;
	CGMZ_Window_Scrollable.prototype.initialize.call(this, rect, heightMultiplier, CGMZ.SaveFile.ScrollWait, CGMZ.SaveFile.ScrollSpeed, CGMZ.SaveFile.AutoScroll, CGMZ.SaveFile.ScrollDeceleration);
	this.setBackgroundType(2 * (CGMZ.SaveFile.TransparentWindows));
	this._info = null;
	this._characterXOffset = 0;
	this._characterHeight = -1;
	this._isNegativeCharacter = false;
	this._charStepAnimTimer = 0;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Load the list windowskin if needed
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.loadWindowskin = function() {
	if(CGMZ.SaveFile.DisplayWindowskin) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.DisplayWindowskin, "img");
		this.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	} else {
		CGMZ_Window_Scrollable.prototype.loadWindowskin.call(this);
	}
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.refresh = function() {
	this.contents.clear();
	this.contentsBack.clear();
	if(this._info) {
		this.loadSaveImage();
	} else {
		this.drawEmptyInfo();
	}
};
//-----------------------------------------------------------------------------
// Set save file info object (might also be null if save file not exists)
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.setInfo = function(info) {
	this._info = info;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Draw empty save file information
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawEmptyInfo = function() {
	this.setupWindowForNewEntry();
	this.drawText(CGMZ.SaveFile.EmptyText, 0, 0, this.contents.width, 'center');
	this._neededHeight = this.lineHeight() + $gameSystem.windowPadding() * 2;
	this.checkForScroll();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.loadSaveImage = function() {
	let url = this._info.cgmz_image || CGMZ.SaveFile.DefaultImage;
	if(!url) {
		this.drawSaveFileInfo();
		return;
	}
	if(!url.includes("/")) url = "pictures/" + url; // backwards compatibility with pre-1.1.0 where pictures folder was mandatory; if no folder detected chances are it's the pictures folder
	const imgData = CGMZ_Utils.getImageData(url, "img");
	const bitmap = ImageManager.loadBitmap(imgData.folder, imgData.filename);
	bitmap.addLoadListener(this.drawSaveFileInfo.bind(this, bitmap));
};
//-----------------------------------------------------------------------------
// Draw save file information
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawSaveFileInfo = function(bitmap) {
	this.setupWindowForNewEntry();
	let y = 0;
	let customInfoIndex = 0;
	for(const infoType of CGMZ.SaveFile.DisplayInfo) {
		this.resetFontSettings();
		switch(infoType) {
			case "Image":
				this.drawSaveBitmap(y, bitmap);
				y += CGMZ.SaveFile.ImageHeight;
				break;
			case "Image And Location": 
				this.drawSaveBitmap(y, bitmap);
				y += CGMZ.SaveFile.ImageHeight - this.lineHeight();
				this.drawLocationInfo(4, y, true);
				y += this.lineHeight();
				break;
			case "Date":
				this.drawTimestamp(y);
				break;
			case "Location":
				this.drawLocationInfo(0, y, false);
				y += this.lineHeight();
				break;
			case "Playtime":
				this.drawPlaytime(y);
				y += this.lineHeight();
				break;
			case "Gold":
				this.drawGoldInfo(y);
				y += this.lineHeight();
				break;
			case "Achievements":
				y += this.lineHeight() * this.drawAchievements(y);
				break;
			case "Achievement Points":
				y += this.lineHeight() * this.drawAchievementPoints(y);
				break;
			case "Custom Info":
				y += this.lineHeight() * this.drawCustomInfo(y, customInfoIndex++);
				break;
			case "Faces":
				this.drawFaces(y);
				y += ImageManager.faceHeight;
				break;
			case "Characters":
				this.drawChars(y);
				this._characterHeight = y;
				y += CGMZ.SaveFile.CharHeight;
				break;
			case "New Game Plus":
				y += this.lineHeight() * this.drawNewGamePlus(y);
				break;
		}
	}
	this._neededHeight = y + $gameSystem.windowPadding() * 2;
	this.checkForScroll();
};
//-----------------------------------------------------------------------------
// Draw save bitmap
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawSaveBitmap = function(y, bitmap) {
	const sw = bitmap.width;
	const sh = bitmap.height;
	const sx = sy = 0;
	const dw = (CGMZ.SaveFile.StretchImage) ? this.contents.width : bitmap.width;
	const dh = CGMZ.SaveFile.ImageHeight;
	const dx = 0;
	const dy = 0;
	this.contentsBack.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
};
//-----------------------------------------------------------------------------
// Draw location info
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawLocationInfo = function(x, y, drawFadeSprite) {
	const string = '\\c[' + CGMZ.SaveFile.HeaderColor + ']' + CGMZ.SaveFile.LocationText + '\\c[0]' + this._info.cgmz_mapName;
	this.CGMZ_drawTextLine(string, x, y, this.contents.width);
	if(drawFadeSprite) {
		const width = this.textSizeEx(string).width;
		const fadeBitmap = new Bitmap(width + x + 4, this.lineHeight());
		fadeBitmap.paintOpacity = CGMZ.SaveFile.FadeSpriteOpacity;
		fadeBitmap.fillRect(0, 0, fadeBitmap.width, fadeBitmap.height, "#000000");
		const sx = sy = 0;
		const sw = fadeBitmap.width;
		const sh = fadeBitmap.height;
		const dx = 0;
		const dy = y;
		this.contentsBack.blt(fadeBitmap, sx, sy, sw, sh, dx, dy, sw, sh);
	}
};
//-----------------------------------------------------------------------------
// Draw timestamp
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawTimestamp = function(y) {
	const date = new Date(this._info.timestamp);
	this.drawText(date.toLocaleDateString(), 0, y, this.contents.width, 'right');
};
//-----------------------------------------------------------------------------
// Draw playtime
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawPlaytime = function(y) {
	const x = 0;
	const string = '\\c[' + CGMZ.SaveFile.HeaderColor + ']' + CGMZ.SaveFile.PlaytimeText + '\\c[0]' + this._info.playtime;
	this.CGMZ_drawTextLine(string, x, y, this.contents.width);
};
//-----------------------------------------------------------------------------
// Draw gold info
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawGoldInfo = function(y) {
	const x = 0;
	const string = (this._info.cgmz_gold) ? '\\c[' + CGMZ.SaveFile.HeaderColor + ']' + CGMZ.SaveFile.GoldText + '\\c[0]' + this._info.cgmz_gold.toLocaleString() : '\\c[' + CGMZ.SaveFile.HeaderColor + ']' + CGMZ.SaveFile.GoldText + '\\c[0]' + this._info.cgmz_gold;
	this.CGMZ_drawTextLine(string, x, y, this.contents.width);
};
//-----------------------------------------------------------------------------
// Draw achievements
// Returns false if nothing drawn, true if was able to draw the info
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawAchievements = function(y) {
	if(!this._info.cgmz_achievements) return false;
	const x = 0;
	const string = '\\c[' + CGMZ.SaveFile.HeaderColor + ']' + CGMZ.SaveFile.AchievementText + '\\c[0]' + this._info.cgmz_achievements.toLocaleString();
	this.CGMZ_drawTextLine(string, x, y, this.contents.width);
	return true;
};
//-----------------------------------------------------------------------------
// Draw achievement points
// Returns false if nothing drawn, true if was able to draw the info
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawAchievementPoints = function(y) {
	if(!this._info.cgmz_achievementPts) return false;
	const x = 0;
	const string = '\\c[' + CGMZ.SaveFile.HeaderColor + ']' + CGMZ.SaveFile.AchievementPointText + '\\c[0]' + this._info.cgmz_achievementPts.toLocaleString();
	this.CGMZ_drawTextLine(string, x, y, this.contents.width);
	return true;
};
//-----------------------------------------------------------------------------
// Draw custom save info. Returns false if nothing drawn, else true
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawCustomInfo = function(y, index) {
	if(!this._info.cgmz_custom) return false;
	const x = 0;
	const customInfo = CGMZ.SaveFile.CustomSaveInfo[index];
	const info = CGMZ_Utils.parseJSON(customInfo, null, "CGMZ Save File", "A custom save info line could not be loaded due to invalid JSON.");
	if(!info) return false;
	const variable = Number(info.Variable);
	if(typeof(this._info.cgmz_custom[variable]) === 'undefined') return false;
	let string = '\\c[' + CGMZ.SaveFile.HeaderColor + ']' + info.Description + '\\c[0]';
	if(Number(info.Icon) >= 0) string += '\\i[' + Number(info.Icon) + ']';
	string += this._info.cgmz_custom[variable].toString() + info["Trailing Text"];
	this.CGMZ_drawTextLine(string, x, y, this.contents.width);
	return true;
};
//-----------------------------------------------------------------------------
// Draw new game plus (if using [CGMZ] New Game Plus)
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawNewGamePlus = function(y) {
	if(!Imported.CGMZ_NewGamePlus) return false;
	if(!this._info.cgmz_newGamePlus) return false;
	this.CGMZ_drawTextLine(CGMZ.NewGamePlus.NewGamePlusText, 0, y, this.contents.width, "left");
	return true;
};
//-----------------------------------------------------------------------------
// Load face and info
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawFaces = function(y) {
	let x = 0;
	const width = this.contents.width / 4;
	for(let i = 0; i < this._info.faces.length; i++) {
		const faceName = this._info.faces[i][0];
		const faceIndex = this._info.faces[i][1];
		const bitmap = ImageManager.loadFace(faceName);
		const args = {"name": faceName, "index": faceIndex, "x": x, "y": y, "width": width};
		if(this._info.cgmz_actor && this._info.cgmz_actor[i]) {
			args.actorName = this._info.cgmz_actor[i][0];
			args.actorLevel = this._info.cgmz_actor[i][1];
		}
		bitmap.addLoadListener(this.onFaceLoaded.bind(this, args));
		x += width;
	}
};
//-----------------------------------------------------------------------------
// Draw face & info after loaded
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.onFaceLoaded = function(args) {
	this.drawFace(args.name, args.index, args.x, args.y, args.width);
	const y = args.y + ImageManager.faceHeight - this.lineHeight();
	this.contents.fontBold = true;
	this.contents.outlineWidth = 6;
	this.drawText(args.actorName, args.x, args.y, args.width, "center");
	this.drawText(CGMZ.SaveFile.LevelText + args.actorLevel, args.x, y, args.width, "right");
	this.contents.fontBold = false;
	this.contents.outlineWidth = 3;
};
//-----------------------------------------------------------------------------
// Load characters and info
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.drawChars = function(y) {
	let x = 0;
	const width = this.contents.width / 4;
	for(let i = 0; i < this._info.characters.length; i++) {
		const charName = this._info.characters[i][0];
		const charIndex = this._info.characters[i][1];
		const bitmap = ImageManager.loadCharacter(charName);
		const args = {"name": charName, "index": charIndex, "x": x, "y": y, "width": width};
		if(this._info.cgmz_actor && this._info.cgmz_actor[i]) {
			args.actorName = this._info.cgmz_actor[i][0];
			args.actorLevel = this._info.cgmz_actor[i][1];
		}
		bitmap.addLoadListener(this.onCharLoaded.bind(this, args));
		x += width;
	}
};
//-----------------------------------------------------------------------------
// Draw character & info after loaded
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.onCharLoaded = function(args) {
	this.CGMZ_drawCharacter(args.name, args.index, args.x + args.width / 2, args.y + CGMZ.SaveFile.CharHeight, this._characterXOffset);
	this.makeFontSmaller();
	this.contents.outlineWidth = 4;
	this.drawText(args.actorName, args.x, args.y, args.width, "center");
	this.drawText(CGMZ.SaveFile.LevelText + args.actorLevel, args.x, args.y + CGMZ.SaveFile.CharHeight - 18, args.width, "center");
	this.contents.outlineWidth = 3;
	this.makeFontBigger();
};
//-----------------------------------------------------------------------------
// Update window if needed
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.update = function() {
	CGMZ_Window_Scrollable.prototype.update.call(this);
	if(CGMZ.SaveFile.ShowStepAnim && this._characterHeight > 0 && this._info) {
		this.updateCharacterSprite();
	}
};
//-----------------------------------------------------------------------------
// Update character sprites for step animation
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.updateCharacterSprite = function() {
	this._charStepAnimTimer++;
	if(this._charStepAnimTimer > 15) {
		this.clearCharacterSpriteRect();
		this._charStepAnimTimer = 0;
		const modifier = (this._isNegativeCharacter) ? -1 : 1;
		this._characterXOffset += modifier;
		if(this._characterXOffset >= 1) {
			this._isNegativeCharacter = true;
		}
		else if(this._characterXOffset <= -1) {
			this._isNegativeCharacter = false;
		}
		this.drawChars(this._characterHeight);
	}
};
//-----------------------------------------------------------------------------
// Update character sprites for step animation
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDisplay.prototype.clearCharacterSpriteRect = function() {
	const x = 0;
	const width = this.contents.width;
	const y = this._characterHeight;
	const height = CGMZ.SaveFile.CharHeight;
	this.contents.clearRect(x, y, width, height);
};
//=============================================================================
// CGMZ_Window_SaveFileConfirm
//-----------------------------------------------------------------------------
// Display save file confirm
//=============================================================================
function CGMZ_Window_SaveFileConfirm() {
	this.initialize(...arguments);
}
CGMZ_Window_SaveFileConfirm.prototype = Object.create(Window_HorzCommand.prototype);
CGMZ_Window_SaveFileConfirm.prototype.constructor = CGMZ_Window_SaveFileConfirm;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileConfirm.prototype.initialize = function(rect) {
	Window_HorzCommand.prototype.initialize.call(this, rect);
	this.setBackgroundType(2 * (CGMZ.SaveFile.TransparentWindows));
};
//-----------------------------------------------------------------------------
// Load the confirm windowskin if needed
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileConfirm.prototype.loadWindowskin = function() {
	if(CGMZ.SaveFile.ConfirmWindowskin) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.ConfirmWindowskin, "img");
		this.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	} else {
		Window_HorzCommand.prototype.loadWindowskin.call(this);
	}
};
//-----------------------------------------------------------------------------
// Get max columns
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileConfirm.prototype.maxCols = function() {
	return 2;
};
//-----------------------------------------------------------------------------
// Make the command list
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileConfirm.prototype.makeCommandList = function() {
	this.addCommand(CGMZ.SaveFile.ConfirmText, "confirm");
	this.addCommand(CGMZ.SaveFile.CancelText, "cancel");
};
//-----------------------------------------------------------------------------
// Adjust the item rect down 1 line
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileConfirm.prototype.itemRect = function(index) {
	const rect = Window_HorzCommand.prototype.itemRect.call(this, index);
	rect.y += this.lineHeight() + 8;
	return rect;
};
//-----------------------------------------------------------------------------
// Refresh the window
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileConfirm.prototype.refresh = function() {
	Window_HorzCommand.prototype.refresh.call(this);
	this.CGMZ_drawTextLine(CGMZ.SaveFile.ConfirmWindowText, 0, 0, this.contents.width, "center");
};
//-----------------------------------------------------------------------------
// Refresh the window
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileConfirm.prototype.drawItem = function(index) {
	const rect = this.itemLineRect(index);
	const align = this.itemTextAlign();
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	this.CGMZ_drawTextLine(this.commandName(index), rect.x, rect.y, rect.width, align);
};
//=============================================================================
// CGMZ_Window_SaveFileDeleteRename
//-----------------------------------------------------------------------------
// Display save file load/save, delete, and rename options
//=============================================================================
function CGMZ_Window_SaveFileDeleteRename() {
	this.initialize(...arguments);
}
CGMZ_Window_SaveFileDeleteRename.prototype = Object.create(Window_HorzCommand.prototype);
CGMZ_Window_SaveFileDeleteRename.prototype.constructor = CGMZ_Window_SaveFileDeleteRename;
//-----------------------------------------------------------------------------
// Get max columns
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDeleteRename.prototype.initialize = function(rect, mode) {
	Window_HorzCommand.prototype.initialize.call(this, rect);
	this._saveMode = mode;
	this.setBackgroundType(2 * (CGMZ.SaveFile.TransparentWindows));
	this.refresh();
};
//-----------------------------------------------------------------------------
// Load the option windowskin if needed
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDeleteRename.prototype.loadWindowskin = function() {
	if(CGMZ.SaveFile.OptionWindowskin) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.OptionWindowskin, "img");
		this.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	} else {
		Window_HorzCommand.prototype.loadWindowskin.call(this);
	}
};
//-----------------------------------------------------------------------------
// Get max columns
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDeleteRename.prototype.maxCols = function() {
	return 2 + 1 * (CGMZ.SaveFile.ShowDeleteOption) + 1 * (CGMZ.SaveFile.ShowRenameOption);
};
//-----------------------------------------------------------------------------
// Make the command list
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDeleteRename.prototype.makeCommandList = function() {
	this.addCommand(this.getConfirmOptionText(), "main");
	if(CGMZ.SaveFile.ShowDeleteOption) this.addCommand(CGMZ.SaveFile.DeleteText, "delete");
	if(CGMZ.SaveFile.ShowRenameOption) this.addCommand(CGMZ.SaveFile.RenameText, "rename");
	this.addCommand(CGMZ.SaveFile.CancelText, "cancel");
};

//-----------------------------------------------------------------------------
// Get the confirm option text depending on mode
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDeleteRename.prototype.getConfirmOptionText = function() {
	if(this._saveMode === "save") {
		return CGMZ.SaveFile.SaveText;
	}
	return CGMZ.SaveFile.LoadText;
};
//-----------------------------------------------------------------------------
// Refresh the window
//-----------------------------------------------------------------------------
CGMZ_Window_SaveFileDeleteRename.prototype.drawItem = function(index) {
	const rect = this.itemLineRect(index);
	const align = this.itemTextAlign();
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	this.CGMZ_drawTextLine(this.commandName(index), rect.x, rect.y, rect.width, align);
};
//=============================================================================
// CGMZ_SaveFile_Window_NameEdit
//-----------------------------------------------------------------------------
// Display save file name
//=============================================================================
function CGMZ_SaveFile_Window_NameEdit() {
	this.initialize(...arguments);
}
CGMZ_SaveFile_Window_NameEdit.prototype = Object.create(Window_NameEdit.prototype);
CGMZ_SaveFile_Window_NameEdit.prototype.constructor = Window_NameEdit;
//-----------------------------------------------------------------------------
// Do not need to set up actor
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.initialize = function(rect) {
	Window_NameEdit.prototype.initialize.call(this, rect);
	this.setBackgroundType(2 * (CGMZ.SaveFile.TransparentWindows));
};
//-----------------------------------------------------------------------------
// Load the name windowskin if needed
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.loadWindowskin = function() {
	if(CGMZ.SaveFile.NameWindowskin) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.SaveFile.NameWindowskin, "img");
		this.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	} else {
		Window_NameEdit.prototype.loadWindowskin.call(this);
	}
};
//-----------------------------------------------------------------------------
// Do not need to set up actor
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.setup = function(maxLength) {
	this._saveFileId = 0;
	this._maxLength = maxLength;
	this._name = "";
	this._index = this._name.length;
	this._defaultName = "";
};
//-----------------------------------------------------------------------------
// Set the save file for rename
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.setSaveFileId = function(savefileId) {
	this._saveFileId = savefileId;
	const info = DataManager.savefileInfo(this._saveFileId);
	if(info && info.cgmz_savefileName) {
		this._name = info.cgmz_savefileName;
		this._defaultName = this._name;
		this._index = this._name.length;
	} else {
		this.makeDefaultName();
	}
};
//-----------------------------------------------------------------------------
// Make the default filename
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.makeDefaultName = function() {
	if(this._saveFileId === 0) {
		this._name = TextManager.autosave;
	} else {
		this._name = TextManager.file + " " + this._saveFileId;
	}
	this._defaultName = this._name;
	this._index = this._name.length;
};
//-----------------------------------------------------------------------------
// Get the left most item
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.left = function() {
	const nameCenter = (this.innerWidth) / 2;
	const nameWidth = (this._maxLength + 1) * this.charWidth();
	return Math.min(nameCenter - nameWidth / 2, this.innerWidth - nameWidth);
};
//-----------------------------------------------------------------------------
// Get the item rect
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.itemRect = function(index) {
	const x = this.left() + index * this.charWidth();
	const y = 0;
	const width = this.charWidth();
	const height = this.lineHeight();
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Refresh the window
//-----------------------------------------------------------------------------
CGMZ_SaveFile_Window_NameEdit.prototype.refresh = function() {
	this.contents.clear();
	for (let i = 0; i < this._maxLength; i++) {
		this.drawUnderline(i);
	}
	for (let j = 0; j < this._name.length; j++) {
		this.drawChar(j);
	}
	const rect = this.itemRect(this._index);
	this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};