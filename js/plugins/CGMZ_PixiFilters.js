/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/pixifilters/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Adds additional PIXI filters to RPG Maker
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
 * Made for RPG Maker MZ 1.6.0
 * ----------------------------------------------------------------------------
 * Description: This plugin adds additional PIXI filters to your game, such as
 * godrays, crt, glitch, and many more. Plugin commands are provided to use
 * these filters as is, or they may be used by other plugins.
 * ----------------------------------------------------------------------------
 * Documentation:
 * You can find documentation and a demo on the additional filters at:
 * https://filters.pixijs.download/main/docs/index.html
 *
 * These filters are licensed under MIT license and not made by Casper Gaming.
 * CGMZ PIXI Filters only provides a user friendly way to access these filters 
 * within RPG Maker since they are not built-in for RPG Maker.
 * --------------------------Filter Target-------------------------------------
 * For the target property, by default only Spriteset_Map and Spriteset_Battle
 * are supported. If you use any other plugins which create their own
 * Spritesets, this plugin should also work with those custom spritesets.
 * The target determines in which scenes the filter will display.
 *
 * Limitations:
 * - You can only have 1 filter per unique identifier assigned to the filter.
 * - You can only have 1 filter of the same type per scene (no 2 godray
 *   filters on the map but you can have 1 godray on the map and a different
 *   one on the battle scene).
 *
 * Performance Note: Using too many filters may lead to drops in FPS.
 * -----------------------------Filters----------------------------------------
 * Currently this plugin supports the following filters:
 * - Adjustment Filter
 * - Advanced Bloom Filter
 * - Ascii Filter
 * - CrossHatch Filter
 * - CRT Filter
 * - Dot Filter
 * - Emboss Filter
 * - Glitch Filter
 * - Godray Filter
 * - Grayscale Filter
 * - Kawase Blur Filter
 * - Old Film Filter
 * - Pixelate Filter
 *
 * Additional filters will be added over time
 * ---------------------------Saved Games--------------------------------------
 * This plugin fully supports saved games.
 * ✓ You should be able to add this  plugin to a saved game and add new mail
 * ✓ You can modify parameters and it will reflect accurately in game
 * ✓ You can remove this plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename of this plugin's JS file MUST be CGMZ_PixiFilters.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * 1.0.0 - Initial release
 * -------------------------Filters License------------------------------------
 * The MIT License - Pixi Filters
 * Copyright (c) 2013-2017 Mathew Groves, Chad Engler
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * @command createGodrayFilter
 * @text Create Godray Filter
 * @desc Creates a new godray filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the godray should animate or not
 *
 * @arg animationSpeed
 * @text Animation Speed
 * @type number
 * @min 0.001
 * @max 1.000
 * @decimals 3
 * @default 0.01
 * @desc Speed at which the animation will play
 *
 * @arg time
 * @text Time
 * @type number
 * @min 0
 * @default 0
 * @desc The time position. This is not used if animating.
 *
 * @arg gain
 * @text Gain
 * @type number
 * @min 0.00
 * @max 1.00
 * @decimals 2
 * @default 0.50
 * @desc General intensity of the effect
 *
 * @arg lacunarity
 * @text Lacunarity
 * @type number
 * @min 0.0
 * @max 5.0
 * @decimals 1
 * @default 2.5
 * @desc Density of fractal noise
 *
 * @arg parallel
 * @text Parallel
 * @type boolean
 * @default true
 * @desc True to use angle, False to use center
 *
 * @arg angle
 * @text Angle
 * @type number
 * @min -60
 * @max 60
 * @default 30
 * @decimals 0
 * @desc Angle / Light source of rays (if using parallel)
 *
 * @arg x
 * @text x
 * @type number
 * @default 0
 * @desc x origin of light rays (if not using parallel)
 *
 * @arg y
 * @text y
 * @type number
 * @default 0
 * @desc y origin of light rays (if not using parallel)
 *
 * @command editGodrayFilter
 * @text Edit Godray Filter
 * @desc Edits an existing godray filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier set for the filter
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the godray should animate or not
 *
 * @arg animationSpeed
 * @text Animation Speed
 * @type number
 * @min 0.001
 * @max 1.000
 * @decimals 3
 * @default 0.01
 * @desc Speed at which the animation will play
 *
 * @arg gain
 * @text Gain
 * @type number
 * @min 0.00
 * @max 1.00
 * @decimals 2
 * @default 0.50
 * @desc General intensity of the effect
 *
 * @arg lacunarity
 * @text Lacunarity
 * @type number
 * @min 0.0
 * @max 5.0
 * @decimals 1
 * @default 2.5
 * @desc Density of fractal noise
 *
 * @arg angle
 * @text Angle
 * @type number
 * @min -60
 * @max 60
 * @default 30
 * @decimals 0
 * @desc Angle / Light source of rays (if using parallel)
 *
 * @arg x
 * @text x
 * @type number
 * @default 0
 * @desc x origin of light rays (if not using parallel)
 *
 * @arg y
 * @text y
 * @type number
 * @default 0
 * @desc y origin of light rays (if not using parallel)
 *
 * @command createCRTFilter
 * @text Create CRT Filter
 * @desc Creates a new CRT filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the crt should animate or not
 *
 * @arg animationSpeed
 * @text Animation Speed
 * @type number
 * @min 0.001
 * @max 1.000
 * @decimals 3
 * @default 0.3
 * @desc Speed at which the animation will play
 *
 * @arg time
 * @text Time
 * @type number
 * @min 0
 * @default 0
 * @desc The time position. This is not used if animating.
 *
 * @arg curvature
 * @text Curvature
 * @type number
 * @min 0
 * @decimals 1
 * @default 1.0
 * @desc The amount of curvature to give the lines.
 *
 * @arg lineWidth
 * @text Line Width
 * @type number
 * @min 0
 * @decimals 1
 * @default 1.0
 * @desc The width of the lines
 *
 * @arg lineContrast
 * @text Line Contrast
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0.25
 * @desc The contrast of the lines
 *
 * @arg noise
 * @text Noise
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity/intensity of the noise pixels
 *
 * @arg noiseSize
 * @text Noise Size
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1
 * @desc The size of the noise pixels
 *
 * @arg verticalLine
 * @text Vertical Line
 * @type boolean
 * @default false
 * @desc Whether lines should be vertical (true) or horizontal (false)
 *
 * @arg seed
 * @text Seed
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The seed to use for random pixel generation
 *
 * @arg vignetting
 * @text Vignetting
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The radius of vignette effect. Smaller value = smaller effect
 *
 * @arg vignettingAlpha
 * @text Vignetting Alpha
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity of the vignette effect
 *
 * @arg vignettingBlur
 * @text Vignetting Blur
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The intensity of the blur effect on the vignette
 *
 * @command editCRTFilter
 * @text Edit CRT Filter
 * @desc Edit an existing CRT filter by identifier
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier that refers to the filter to edit
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the crt should animate or not
 *
 * @arg animationSpeed
 * @text Animation Speed
 * @type number
 * @min 0.001
 * @max 1.000
 * @decimals 3
 * @default 0.3
 * @desc Speed at which the animation will play
 *
 * @arg curvature
 * @text Curvature
 * @type number
 * @min 0
 * @decimals 1
 * @default 1.0
 * @desc The amount of curvature to give the lines.
 *
 * @arg lineWidth
 * @text Line Width
 * @type number
 * @min 0
 * @decimals 1
 * @default 1.0
 * @desc The width of the lines
 *
 * @arg lineContrast
 * @text Line Contrast
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0.25
 * @desc The contrast of the lines
 *
 * @arg noise
 * @text Noise
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity/intensity of the noise pixels
 *
 * @arg noiseSize
 * @text Noise Size
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1
 * @desc The size of the noise pixels
 *
 * @arg vignetting
 * @text Vignetting
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The radius of vignette effect. Smaller value = smaller effect
 *
 * @arg vignettingAlpha
 * @text Vignetting Alpha
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity of the vignette effect
 *
 * @arg vignettingBlur
 * @text Vignetting Blur
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The intensity of the blur effect on the vignette
 *
 * @command createOldFilmFilter
 * @text Create Old Film Filter
 * @desc Creates a new Old Film filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the old film filter should animate or not
 *
 * @arg sepia
 * @text Sepia
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0.30
 * @desc The amount of saturation on the sepia effect.
 *
 * @arg scratch
 * @text Scratch
 * @type number
 * @min -1
 * @max 1
 * @decimals 2
 * @default 0.50
 * @desc How often scratches appear
 *
 * @arg scratchDensity
 * @text Scratch Density
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0.30
 * @desc The density of scratch lines, higher number = more lines
 *
 * @arg scratchWidth
 * @text Scratch Width
 * @type number
 * @min 0
 * @max 20
 * @decimals 1
 * @default 1.0
 * @desc The width of the scratch lines
 *
 * @arg noise
 * @text Noise
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity/intensity of the noise pixels
 *
 * @arg noiseSize
 * @text Noise Size
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1
 * @desc The size of the noise pixels
 *
 * @arg seed
 * @text Seed
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The seed to use for random pixel generation
 *
 * @arg vignetting
 * @text Vignetting
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The radius of vignette effect. Smaller value = smaller effect
 *
 * @arg vignettingAlpha
 * @text Vignetting Alpha
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity of the vignette effect
 *
 * @arg vignettingBlur
 * @text Vignetting Blur
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The intensity of the blur effect on the vignette
 *
 * @command editOldFilmFilter
 * @text Edit Old Film Filter
 * @desc Edits an existing Old Film filter by identifier
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier of the filter to edit
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the old film filter should animate or not
 *
 * @arg sepia
 * @text Sepia
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0.30
 * @desc The amount of saturation on the sepia effect.
 *
 * @arg scratch
 * @text Scratch
 * @type number
 * @min -1
 * @max 1
 * @decimals 2
 * @default 0.50
 * @desc How often scratches appear
 *
 * @arg scratchDensity
 * @text Scratch Density
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0.30
 * @desc The density of scratch lines, higher number = more lines
 *
 * @arg scratchWidth
 * @text Scratch Width
 * @type number
 * @min 0
 * @max 20
 * @decimals 1
 * @default 1.0
 * @desc The width of the scratch lines
 *
 * @arg noise
 * @text Noise
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity/intensity of the noise pixels
 *
 * @arg noiseSize
 * @text Noise Size
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1
 * @desc The size of the noise pixels
 *
 * @arg vignetting
 * @text Vignetting
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The radius of vignette effect. Smaller value = smaller effect
 *
 * @arg vignettingAlpha
 * @text Vignetting Alpha
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The opacity of the vignette effect
 *
 * @arg vignettingBlur
 * @text Vignetting Blur
 * @type number
 * @min 0
 * @max 1
 * @decimals 2
 * @default 0
 * @desc The intensity of the blur effect on the vignette
 *
 * @command createGlitchFilter
 * @text Create Glitch Filter
 * @desc Creates a new Glitch filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the old film filter should animate or not
 *
 * @arg average
 * @text Average
 * @type boolean
 * @default false
 * @desc True divides the bands roughly equally, false makes them more random looking
 *
 * @arg slices
 * @text Slices
 * @type number
 * @min 2
 * @max 20
 * @default 5
 * @desc Number of glitch slices
 *
 * @arg offset
 * @text Offset
 * @type number
 * @min -400
 * @max 400
 * @default 100
 * @desc The max offset of the slices
 *
 * @arg direction
 * @text Direction
 * @type number
 * @min -180
 * @max 180
 * @default 0
 * @desc Angle of offset of the slices
 *
 * @arg fillMode
 * @text Fill Mode
 * @type select
 * @option Transparent
 * @option Original
 * @option Loop
 * @option Clamp
 * @option Mirror
 * @default Loop
 * @desc The fill mode of the glitch slices
 *
 * @arg minSize
 * @text Min Size
 * @type number
 * @min 1
 * @max 512
 * @default 8
 * @desc The minimum size of individual slice, as a segment of sample size
 *
 * @arg sampleSize
 * @text Sample Size
 * @type number
 * @min 1
 * @max 2048
 * @default 512
 * @desc The resolution of the displacement map texture
 *
 * @arg redX
 * @text Red X
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color red (x axis)
 *
 * @arg redY
 * @text Red Y
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color red (y axis)
 *
 * @arg blueX
 * @text Blue X
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color blue (x axis)
 *
 * @arg blueY
 * @text Blue Y
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color blue (y axis)
 *
 * @arg greenX
 * @text Green X
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color green (x axis)
 *
 * @arg greenY
 * @text Green Y
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color green (y axis)
 *
 * @command editGlitchFilter
 * @text Edit Glitch Filter
 * @desc Edit an existing Glitch filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg animating
 * @text Animating
 * @type boolean
 * @default true
 * @desc Determine whether the old film filter should animate or not
 *
 * @arg average
 * @text Average
 * @type boolean
 * @default false
 * @desc True divides the bands roughly equally, false makes them more random looking
 *
 * @arg refresh
 * @text Refresh
 * @type boolean
 * @default false
 * @desc True refreshes the filter with new slices. False has no effect.
 *
 * @arg slices
 * @text Slices
 * @type number
 * @min 2
 * @max 20
 * @default 5
 * @desc Number of glitch slices
 *
 * @arg offset
 * @text Offset
 * @type number
 * @min -400
 * @max 400
 * @default 100
 * @desc The max offset of the slices
 *
 * @arg direction
 * @text Direction
 * @type number
 * @min -180
 * @max 180
 * @default 0
 * @desc Angle of offset of the slices
 *
 * @arg fillMode
 * @text Fill Mode
 * @type select
 * @option Transparent
 * @option Original
 * @option Loop
 * @option Clamp
 * @option Mirror
 * @default Loop
 * @desc The fill mode of the glitch slices
 *
 * @arg minSize
 * @text Min Size
 * @type number
 * @min 1
 * @max 512
 * @default 8
 * @desc The minimum size of individual slice, as a segment of sample size
 *
 * @arg sampleSize
 * @text Sample Size
 * @type number
 * @min 1
 * @max 2048
 * @default 512
 * @desc The resolution of the displacement map texture
 *
 * @arg redX
 * @text Red X
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color red (x axis)
 *
 * @arg redY
 * @text Red Y
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color red (y axis)
 *
 * @arg blueX
 * @text Blue X
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color blue (x axis)
 *
 * @arg blueY
 * @text Blue Y
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color blue (y axis)
 *
 * @arg greenX
 * @text Green X
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color green (x axis)
 *
 * @arg greenY
 * @text Green Y
 * @type number
 * @min -200
 * @max 200
 * @default 0
 * @desc The offset of the color green (y axis)
 *
 * @command createAsciiFilter
 * @text Create Ascii Filter
 * @desc Creates a new Ascii filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg size
 * @text Size
 * @type number
 * @min 1
 * @max 24
 * @default 8
 * @desc Speed at which the animation will play
 *
 * @command editAsciiFilter
 * @text Edit Ascii Filter
 * @desc Edits an existing Ascii filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg size
 * @text Size
 * @type number
 * @min 1
 * @max 24
 * @default 8
 * @desc Speed at which the animation will play
 *
 * @command createCrossHatchFilter
 * @text Create CrossHatch Filter
 * @desc Creates a new CrossHatch filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @command createKawaseBlurFilter
 * @text Create Kawase Blur Filter
 * @desc Creates a new Kawase Blur filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg blur
 * @text Blur
 * @type number
 * @min 0
 * @max 20
 * @decimals 1
 * @default 4.0
 * @desc The intensity of the blur effect
 *
 * @arg quality
 * @text Quality
 * @type number
 * @min 1
 * @max 20
 * @decimals 1
 * @default 4.0
 * @desc The quality of the blur effect
 *
 * @arg pixelSizeX
 * @text Pixel Size X
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1.0
 * @desc The pixel size of the filter (x-axis)
 *
 * @arg pixelSizeY
 * @text Pixel Size Y
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1.0
 * @desc The pixel size of the filter (y-axis)
 *
 * @arg clamp
 * @text Clamp
 * @type boolean
 * @default false
 * @desc Clamp edges, useful for removing dark edges from fullscreen filters or bleeding to the edge of filterArea.
 *
 * @command editKawaseBlurFilter
 * @text Edit Kawase Blur Filter
 * @desc Edits an existing Kawase Blur filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier referring to this filter
 *
 * @arg blur
 * @text Blur
 * @type number
 * @min 0
 * @max 20
 * @decimals 1
 * @default 4.0
 * @desc The intensity of the blur effect
 *
 * @arg quality
 * @text Quality
 * @type number
 * @min 1
 * @max 20
 * @decimals 1
 * @default 4.0
 * @desc The quality of the blur effect
 *
 * @arg pixelSizeX
 * @text Pixel Size X
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1.0
 * @desc The pixel size of the filter (x-axis)
 *
 * @arg pixelSizeY
 * @text Pixel Size Y
 * @type number
 * @min 0
 * @max 10
 * @decimals 1
 * @default 1.0
 * @desc The pixel size of the filter (y-axis)
 *
 * @command createDotFilter
 * @text Create Dot Filter
 * @desc Creates a new Dot filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg scale
 * @text Scale
 * @type number
 * @min 0
 * @max 1
 * @decimals 1
 * @default 1.0
 * @desc The scale of the effect
 *
 * @arg angle
 * @text Angle
 * @type number
 * @min 0
 * @max 5
 * @decimals 1
 * @default 5.0
 * @desc The angle of the effect
 *
 * @command editDotFilter
 * @text Edit Dot Filter
 * @desc Edits an existing Dot filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier referring to this filter
 *
 * @arg scale
 * @text Scale
 * @type number
 * @min 0
 * @max 1
 * @decimals 1
 * @default 1.0
 * @desc The scale of the effect
 *
 * @arg angle
 * @text Angle
 * @type number
 * @min 0
 * @max 5
 * @decimals 1
 * @default 5.0
 * @desc The angle of the effect
 *
 * @command createPixelateFilter
 * @text Create Pixelate Filter
 * @desc Creates a new Pixelate filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg sizeX
 * @text Size X
 * @type number
 * @min 1
 * @max 40
 * @default 4
 * @desc The size of the pixel blocks (x-axis)
 *
 * @arg sizeY
 * @text Size Y
 * @type number
 * @min 1
 * @max 40
 * @default 4
 * @desc The size of the pixel blocks (y-axis)
 *
 * @command editPixelateFilter
 * @text Edit Pixelate Filter
 * @desc Edits an existing Pixelate filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier referring to this filter
 *
 * @arg sizeX
 * @text Size X
 * @type number
 * @min 1
 * @max 40
 * @default 4
 * @desc The size of the pixel blocks (x-axis)
 *
 * @arg sizeY
 * @text Size Y
 * @type number
 * @min 1
 * @max 40
 * @default 4
 * @desc The size of the pixel blocks (y-axis)
 *
 * @command createAdvancedBloomFilter
 * @text Create Advanced Bloom Filter
 * @desc Creates a new Advanced Bloom filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg threshold
 * @text Threshold
 * @type number
 * @decimals 4
 * @min 0.1
 * @max 0.9
 * @default 0.5
 * @desc The threshold of the filter
 *
 * @arg bloomScale
 * @text Bloom Scale
 * @type number
 * @decimals 3
 * @min 0.5
 * @max 1.5
 * @default 1.0
 * @desc The bloom scale of the filter
 *
 * @arg brightness
 * @text Brightness
 * @type number
 * @decimals 3
 * @min 0.5
 * @max 1.5
 * @default 1.0
 * @desc The brightness of the filter
 *
 * @arg blur
 * @text Blur
 * @type number
 * @decimals 3
 * @min 0
 * @max 20
 * @default 8
 * @desc The blur of the filter
 *
 * @arg quality
 * @text Quality
 * @type number
 * @min 1
 * @max 20
 * @default 4
 * @desc The blur of the filter
 *
 * @command editAdvancedBloomFilter
 * @text Edit Advanced Bloom Filter
 * @desc Edits an existing Advanced Bloom filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier referring to this filter
 *
 * @arg threshold
 * @text Threshold
 * @type number
 * @decimals 4
 * @min 0.1
 * @max 0.9
 * @default 0.5
 * @desc The threshold of the filter
 *
 * @arg bloomScale
 * @text Bloom Scale
 * @type number
 * @decimals 3
 * @min 0.5
 * @max 1.5
 * @default 1.0
 * @desc The bloom scale of the filter
 *
 * @arg brightness
 * @text Brightness
 * @type number
 * @decimals 3
 * @min 0.5
 * @max 1.5
 * @default 1.0
 * @desc The brightness of the filter
 *
 * @arg blur
 * @text Blur
 * @type number
 * @decimals 3
 * @min 0
 * @max 20
 * @default 8
 * @desc The blur of the filter
 *
 * @arg quality
 * @text Quality
 * @type number
 * @min 1
 * @max 20
 * @default 4
 * @desc The blur of the filter
 *
 * @command createGrayscaleFilter
 * @text Create Grayscale Filter
 * @desc Creates a new Grayscale filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @command createAdjustmentFilter
 * @text Create Adjustment Filter
 * @desc Creates a new Adjustment filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg gamma
 * @text Gamma
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The gamma of the filter
 *
 * @arg saturation
 * @text Saturation
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The saturation of the filter
 *
 * @arg contrast
 * @text Contrast
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The contrast of the filter
 *
 * @arg brightness
 * @text Brightness
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The brightness of the filter
 *
 * @arg red
 * @text Red
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The red of the filter
 *
 * @arg green
 * @text Green
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The green of the filter
 *
 * @arg blue
 * @text Blue
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The blue of the filter
 *
 * @arg alpha
 * @text Alpha
 * @type number
 * @decimals 3
 * @min 0
 * @max 1
 * @default 1.000
 * @desc The alpha of the filter
 *
 * @command editAdjustmentFilter
 * @text Edit Adjustment Filter
 * @desc Edits an existing Adjustment filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier referring to this filter
 *
 * @arg gamma
 * @text Gamma
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The gamma of the filter
 *
 * @arg saturation
 * @text Saturation
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The saturation of the filter
 *
 * @arg contrast
 * @text Contrast
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The contrast of the filter
 *
 * @arg brightness
 * @text Brightness
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The brightness of the filter
 *
 * @arg red
 * @text Red
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The red of the filter
 *
 * @arg green
 * @text Green
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The green of the filter
 *
 * @arg blue
 * @text Blue
 * @type number
 * @decimals 3
 * @min 0
 * @max 5
 * @default 1.000
 * @desc The blue of the filter
 *
 * @arg alpha
 * @text Alpha
 * @type number
 * @decimals 3
 * @min 0
 * @max 1
 * @default 1.000
 * @desc The alpha of the filter
 *
 * @command createEmbossFilter
 * @text Create Emboss Filter
 * @desc Creates a new Emboss filter
 *
 * @arg target
 * @text Target
 * @type text[]
 * @desc The target to add the filter onto, for example Spriteset_Map or Spriteset_Battle. Cannot be empty.
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg strength
 * @text Strength
 * @type number
 * @decimals 2
 * @min 0
 * @max 20
 * @default 5.00
 * @desc Strength of the filter
 *
 * @command editEmbossFilter
 * @text Edit Emboss Filter
 * @desc Edits an existing Emboss filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier to refer to this filter (for changing options later)
 *
 * @arg strength
 * @text Strength
 * @type number
 * @decimals 2
 * @min 0
 * @max 20
 * @default 5.00
 * @desc Strength of the filter
 *
 * @command removeFilter
 * @text Removes Filter
 * @desc Removes a filter
 *
 * @arg identifier
 * @text Identifier
 * @desc Unique identifier of the filter to remove
*/
var Imported = Imported || {};
Imported.CGMZ_PIXIFilters = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Pixi Filters"] = "Alpha";
CGMZ.PixiFilters = CGMZ.PixiFilters || {};
CGMZ.PixiFilters.parameters = PluginManager.parameters('CGMZ_PixiFilters');
CGMZ.PixiFilters.FilterNames = {
	godrayFilter: "godrayFilter",
	crtFilter: "crtFilter",
	oldFilmFilter: "oldFilmFilter",
	glitchFilter: "glitchFilter",
	asciiFilter: "asciiFilter",
	crossHatchFilter: "crossHatchFilter",
	kawaseBlurFilter: "kawaseBlurFilter",
	dotFilter: "dotFilter",
	pixelateFilter: "pixelateFilter",
	advancedBloomFilter: "advancedBloomFilter",
	grayscaleFilter: "grayscaleFilter",
	adjustmentFilter: "adjustmentFilter",
	embossFilter: "embossFilter"
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Plugin Commands for filters
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also add check for if pixi filter has changed
//-----------------------------------------------------------------------------
const alias_CGMZ_PixiFilters_CGMZ_Temp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_PixiFilters_CGMZ_Temp_createPluginData.call(this);
	this._pixiFilterChanged = false;
	this._pixiFiltersEdited = false;
};
//-----------------------------------------------------------------------------
// Check if pixi filter added / removed
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.isPixiFiltersChanged = function() {
	return this._pixiFilterChanged;
};
//-----------------------------------------------------------------------------
// Set pixi filter added / removed
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.setPixiFilterChanged = function(value) {
	this._pixiFilterChanged = value;
};
//-----------------------------------------------------------------------------
// Check if pixi filter edited
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.isPixiFiltersEdited = function() {
	return this._pixiFiltersEdited;
};
//-----------------------------------------------------------------------------
// Set pixi filter edited status
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.setPixiFilterEdited = function(value) {
	this._pixiFiltersEdited = value;
};
//-----------------------------------------------------------------------------
// Alias. Also register Filter Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_PixiFilters_CGMZ_Temp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_PixiFilters_CGMZ_Temp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createGodrayFilter", this.pluginCommandPixiFiltersCreateGodrayFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editGodrayFilter", this.pluginCommandPixiFiltersEditGodrayFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createCRTFilter", this.pluginCommandPixiFiltersCreateCRTFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editCRTFilter", this.pluginCommandPixiFiltersEditCRTFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createOldFilmFilter", this.pluginCommandPixiFiltersCreateOldFilmFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editOldFilmFilter", this.pluginCommandPixiFiltersEditOldFilmFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createGlitchFilter", this.pluginCommandPixiFiltersCreateGlitchFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editGlitchFilter", this.pluginCommandPixiFiltersEditGlitchFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createAsciiFilter", this.pluginCommandPixiFiltersCreateAsciiFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editAsciiFilter", this.pluginCommandPixiFiltersEditAsciiFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createKawaseBlurFilter", this.pluginCommandPixiFiltersCreateKawaseBlurFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editKawaseBlurFilter", this.pluginCommandPixiFiltersEditKawaseBlurFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createDotFilter", this.pluginCommandPixiFiltersCreateDotFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editDotFilter", this.pluginCommandPixiFiltersEditDotFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createPixelateFilter", this.pluginCommandPixiFiltersCreatePixelateFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editPixelateFilter", this.pluginCommandPixiFiltersEditPixelateFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createCrossHatchFilter", this.pluginCommandPixiFiltersCreateCrossHatchFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createAdvancedBloomFilter", this.pluginCommandPixiFiltersCreateAdvancedBloomFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editAdvancedBloomFilter", this.pluginCommandPixiFiltersEditAdvancedBloomFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createAdjustmentFilter", this.pluginCommandPixiFiltersCreateAdjustmentFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editAdjustmentFilter", this.pluginCommandPixiFiltersEditAdjustmentFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createEmbossFilter", this.pluginCommandPixiFiltersCreateEmbossFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "editEmbossFilter", this.pluginCommandPixiFiltersEditEmbossFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "createGrayscaleFilter", this.pluginCommandPixiFiltersCreateGrayscaleFilter);
	PluginManager.registerCommand("CGMZ_PixiFilters", "removeFilter", this.pluginCommandPixiFiltersRemoveFilter);
};
//-----------------------------------------------------------------------------
// Plugin Command - Create godray filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateGodrayFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_GodrayFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.godrayFilter, filter)) {
		filter.gain = parseFloat(args.gain);
		filter.lacunarity = parseFloat(args.lacunarity);
		filter.angle = Number(args.angle);
		filter.center = new Point(Number(args.x), Number(args.y));
		filter.parallel = (args.parallel === "true");
		filter.animating = (args.animating === "true");
		filter.animationSpeed = parseFloat(args.animationSpeed);
		filter.time = parseFloat(args.time);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.godrayFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit godray filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditGodrayFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.godrayFilter, args.identifier);
	if(filter) {
		filter.gain = parseFloat(args.gain);
		filter.lacunarity = parseFloat(args.lacunarity);
		filter.angle = Number(args.angle);
		filter.center = new Point(Number(args.x), Number(args.y));
		filter.animating = (args.animating === "true");
		filter.animationSpeed = parseFloat(args.animationSpeed);
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create CRT filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateCRTFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_CRTFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.crtFilter, filter)) {
		filter.animating = (args.animating === "true");
		filter.animationSpeed = parseFloat(args.animationSpeed);
		filter.time = parseFloat(args.time);
		filter.seed = parseFloat(args.seed);
		filter.curvature = parseFloat(args.curvature);
		filter.lineWidth = parseFloat(args.lineWidth);
		filter.lineContrast = parseFloat(args.lineContrast);
		filter.verticalLine = (args.verticalLine === 'true');
		filter.noise = parseFloat(args.noise);
		filter.noiseSize = parseFloat(args.noiseSize);
		filter.vignetting = parseFloat(args.vignetting);
		filter.vignettingAlpha = parseFloat(args.vignettingAlpha);
		filter.vignettingBlur = parseFloat(args.vignettingBlur);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.crtFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit CRT filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditCRTFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.crtFilter, args.identifier);
	if(filter) {
		filter.curvature = parseFloat(args.curvature);
		filter.lineWidth = parseFloat(args.lineWidth);
		filter.lineContrast = parseFloat(args.lineContrast);
		filter.noise = parseFloat(args.noise);
		filter.noiseSize = parseFloat(args.noiseSize);
		filter.vignetting = parseFloat(args.vignetting);
		filter.vignettingAlpha = parseFloat(args.vignettingAlpha);
		filter.vignettingBlur = parseFloat(args.vignettingBlur);
		filter.animating = (args.animating === "true");
		filter.animationSpeed = parseFloat(args.animationSpeed);
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create Old Film filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateOldFilmFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_OldFilmFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.oldFilmFilter, filter)) {
		filter.animating = (args.animating === "true");
		filter.seed = parseFloat(args.seed);
		filter.sepia = parseFloat(args.sepia);
		filter.scratch = parseFloat(args.scratch);
		filter.scratchDensity = parseFloat(args.scratchDensity);
		filter.scratchWidth = parseFloat(args.scratchWidth);
		filter.noise = parseFloat(args.noise);
		filter.noiseSize = parseFloat(args.noiseSize);
		filter.vignetting = parseFloat(args.vignetting);
		filter.vignettingAlpha = parseFloat(args.vignettingAlpha);
		filter.vignettingBlur = parseFloat(args.vignettingBlur);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.oldFilmFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit Old Film filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditOldFilmFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.oldFilmFilter, args.identifier);
	if(filter) {
		filter.sepia = parseFloat(args.sepia);
		filter.scratch = parseFloat(args.scratch);
		filter.scratchDensity = parseFloat(args.scratchDensity);
		filter.scratchWidth = parseFloat(args.scratchWidth);
		filter.noise = parseFloat(args.noise);
		filter.noiseSize = parseFloat(args.noiseSize);
		filter.vignetting = parseFloat(args.vignetting);
		filter.vignettingAlpha = parseFloat(args.vignettingAlpha);
		filter.vignettingBlur = parseFloat(args.vignettingBlur);
		filter.animating = (args.animating === "true");
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create Glitch filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateGlitchFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_GlitchFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.glitchFilter, filter)) {
		const mode = {"Transparent": 0,
					  "Original": 1,
					  "Loop": 2,
					  "Clamp": 3,
					  "Mirror": 4
		};
		filter.animating = (args.animating === "true");
		filter.seed = parseFloat(args.seed);
		filter.slices = Number(args.slices);
		filter.offset = Number(args.offset);
		filter.direction = Number(args.direction);
		filter.average = (args.average === "true");
		filter.minSize = Number(args.minSize);
		filter.sampleSize = Number(args.sampleSize);
		filter.fillMode = mode[args.fillMode];
		filter.red = [Number(args.redX), Number(args.redY)];
		filter.blue = [Number(args.blueX), Number(args.blueY)];
		filter.green = [Number(args.greenX), Number(args.greenY)];
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.glitchFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit Glitch filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditGlitchFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.glitchFilter, args.identifier);
	if(filter) {
		const mode = {"Transparent": 0,
					  "Original": 1,
					  "Loop": 2,
					  "Clamp": 3,
					  "Mirror": 4
		};
		filter.animating = (args.animating === "true");
		filter.refresh = (args.refresh === "true");
		filter.seed = parseFloat(args.seed);
		filter.slices = Number(args.slices);
		filter.offset = Number(args.offset);
		filter.direction = Number(args.direction);
		filter.average = (args.average === "true");
		filter.minSize = Number(args.minSize);
		filter.sampleSize = Number(args.sampleSize);
		filter.fillMode = mode[args.fillMode];
		filter.red = [Number(args.redX), Number(args.redY)];
		filter.blue = [Number(args.blueX), Number(args.blueY)];
		filter.green = [Number(args.greenX), Number(args.greenY)];
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create ascii filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateAsciiFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_AsciiFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.asciiFilter, filter)) {
		filter.size = Number(args.size);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.asciiFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit ascii filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditAsciiFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.asciiFilter, args.identifier);
	if(filter) {
		filter.size = Number(args.size);
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create crosshatch filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateCrossHatchFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_CrossHatchFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.crossHatchFilter, filter)) {
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.crossHatchFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create kawase blur filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateKawaseBlurFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_KawaseBlurFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.kawaseBlurFilter, filter)) {
		filter.blur = parseFloat(args.blur);
		filter.quality = parseFloat(args.quality);
		filter.clamp = (args.clamp === "true");
		filter.pixelSize = [parseFloat(args.pixelSizeX), parseFloat(args.pixelSizeY)];
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.kawaseBlurFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit kawase blur filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditKawaseBlurFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.kawaseBlurFilter, args.identifier);
	if(filter) {
		filter.blur = parseFloat(args.blur);
		filter.quality = parseFloat(args.quality);
		filter.pixelSize = [parseFloat(args.pixelSizeX), parseFloat(args.pixelSizeY)];
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create dot filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateDotFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_DotFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.dotFilter, filter)) {
		filter.scale = parseFloat(args.scale);
		filter.angle = parseFloat(args.angle);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.dotFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit dot filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditDotFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.dotFilter, args.identifier);
	if(filter) {
		filter.scale = parseFloat(args.scale);
		filter.angle = parseFloat(args.angle);
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create pixelate filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreatePixelateFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_PixelateFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.pixelateFilter, filter)) {
		filter.size = new Point(Number(args.sizeX), Number(args.sizeY));
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.pixelateFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit pixelate filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditPixelateFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.pixelateFilter, args.identifier);
	if(filter) {
		filter.size = new Point(Number(args.sizeX), Number(args.sizeY));
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create advanced bloom filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateAdvancedBloomFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_AdvancedBloomFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.advancedBloomFilter, filter)) {
		filter.threshold = parseFloat(args.threshold);
		filter.bloomScale = parseFloat(args.bloomScale);
		filter.brightness = parseFloat(args.brightness);
		filter.blur = parseFloat(args.blur);
		filter.quality = Number(args.quality);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.advancedBloomFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit advanced bloom filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditAdvancedBloomFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.advancedBloomFilter, args.identifier);
	if(filter) {
		filter.threshold = parseFloat(args.threshold);
		filter.bloomScale = parseFloat(args.bloomScale);
		filter.brightness = parseFloat(args.brightness);
		filter.blur = parseFloat(args.blur);
		filter.quality = Number(args.quality);
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create grayscale filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateGrayscaleFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_GrayscaleFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.grayscaleFilter, filter)) {
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.grayscaleFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create adjustment filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateAdjustmentFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_AdjustmentFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.adjustmentFilter, filter)) {
		filter.gamma = parseFloat(args.gamma);
		filter.saturation = parseFloat(args.saturation);
		filter.contrast = parseFloat(args.contrast);
		filter.brightness = parseFloat(args.brightness);
		filter.red = parseFloat(args.red);
		filter.green = parseFloat(args.green);
		filter.blue = parseFloat(args.blue);
		filter.alpha = parseFloat(args.alpha);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.adjustmentFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit adjustment filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditAdjustmentFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.adjustmentFilter, args.identifier);
	if(filter) {
		filter.gamma = parseFloat(args.gamma);
		filter.saturation = parseFloat(args.saturation);
		filter.contrast = parseFloat(args.contrast);
		filter.brightness = parseFloat(args.brightness);
		filter.red = parseFloat(args.red);
		filter.green = parseFloat(args.green);
		filter.blue = parseFloat(args.blue);
		filter.alpha = parseFloat(args.alpha);
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Create emboss filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersCreateEmbossFilter = function(args) {
	const targets = JSON.parse(args.target);
	const identifier = args.identifier;
	const filter = new CGMZ_EmbossFilter(targets, identifier);
	if($cgmz.canAddPixiFilter(CGMZ.PixiFilters.FilterNames.embossFilter, filter)) {
		filter.strength = parseFloat(args.strength);
		$cgmz.addPixiFilter(CGMZ.PixiFilters.FilterNames.embossFilter, filter);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Edit emboss filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersEditEmbossFilter = function(args) {
	const filter = $cgmz.getPixiFilterById(CGMZ.PixiFilters.FilterNames.embossFilter, args.identifier);
	if(filter) {
		filter.strength = parseFloat(args.strength);
		$cgmzTemp.setPixiFilterEdited(true);
	}
};
//-----------------------------------------------------------------------------
// Remove a filter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPixiFiltersRemoveFilter = function(args) {
	$cgmz.removePixiFilterById(args.identifier);
};
//=============================================================================
// CGMZ_GodrayFilter
//-----------------------------------------------------------------------------
// Store data for godray filters
//=============================================================================
function CGMZ_GodrayFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_GodrayFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.animating = false;
	this.animationSpeed = 0.01;
	this.gain = 0.5;
	this.lacunarity = 2.5;
	this.angle = 30;
	this.parallel = true;
	this.time = 0;
	this.center = new Point(0, 0);
};
//=============================================================================
// CGMZ_CRTFilter
//-----------------------------------------------------------------------------
// Store data for CRT filters
//=============================================================================
function CGMZ_CRTFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_CRTFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.animating = false;
	this.animationSpeed = 0.01;
	this.seed = 0;
	this.time = 0;
	this.curvature = 1;
	this.lineContrast = 0.25;
	this.lineWidth = 1;
	this.verticalLine = false;
	this.noise = 0;
	this.noiseSize = 0;
	this.vignetting = 0;
	this.vignettingAlpha = 0;
	this.vignettingBlur = 0;
};
//=============================================================================
// CGMZ_OldFilmFilter
//-----------------------------------------------------------------------------
// Store data for Old Film filters
//=============================================================================
function CGMZ_OldFilmFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_OldFilmFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.animating = false;
	this.animationSpeed = 0.01;
	this.seed = 0;
	this.sepia = 0.3;
	this.noise = 0.3;
	this.noiseSize = 1.0;
	this.scratch = 0.5;
	this.scratchDensity = 0.3;
	this.scratchWidth = 1.0;
	this.vignetting = 0.3;
	this.vignettingAlpha = 1.0;
	this.vignettingBlur = 0.3;
};
//=============================================================================
// CGMZ_GlitchFilter
//-----------------------------------------------------------------------------
// Store data for Glitch filters
//=============================================================================
function CGMZ_GlitchFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_GlitchFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.animating = false;
	this.refresh = false;
	this.seed = 0;
	this.slices = 5;
	this.offset = 100;
	this.direction = 180;
	this.fillMode = 0;
	this.average = false;
	this.minSize = 8;
	this.sampleSize = 512;
	this.red = [0,0];
	this.blue = [0,0];
	this.green = [0,0];
};
//=============================================================================
// CGMZ_AsciiFilter
//-----------------------------------------------------------------------------
// Store data for Ascii filters
//=============================================================================
function CGMZ_AsciiFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_AsciiFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.size = 8;
};
//=============================================================================
// CGMZ_CrossHatchFilter
//-----------------------------------------------------------------------------
// Store data for CrossHatch filters
//=============================================================================
function CGMZ_CrossHatchFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_CrossHatchFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
};
//=============================================================================
// CGMZ_KawaseBlurFilter
//-----------------------------------------------------------------------------
// Store data for Kawase Blur filters
//=============================================================================
function CGMZ_KawaseBlurFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_KawaseBlurFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.blur = 4.0;
	this.quality = 3.0;
	this.clamp = false; // readonly
	this.pixelSize = [1.0,1.0];
};
//=============================================================================
// CGMZ_DotFilter
//-----------------------------------------------------------------------------
// Store data for Dot filters
//=============================================================================
function CGMZ_DotFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_DotFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.scale = 1.0;
	this.angle = 5.0;
};
//=============================================================================
// CGMZ_PixelateFilter
//-----------------------------------------------------------------------------
// Store data for Pixelate filters
//=============================================================================
function CGMZ_PixelateFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_PixelateFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.size = new Point(4,4);
};
//=============================================================================
// CGMZ_AdvancedBloomFilter
//-----------------------------------------------------------------------------
// Store data for Advanced Bloom filters
//=============================================================================
function CGMZ_AdvancedBloomFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_AdvancedBloomFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.threshold = 0.5;
	this.bloomScale = 1.0;
	this.brightness = 1.0;
	this.blur = 8;
	this.quality = 4;
};
//=============================================================================
// CGMZ_GrayscaleFilter
//-----------------------------------------------------------------------------
// Store data for Grayscale filters
//=============================================================================
function CGMZ_GrayscaleFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_GrayscaleFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
};
//=============================================================================
// CGMZ_AdjustmentFilter
//-----------------------------------------------------------------------------
// Store data for Adjustment filters
//=============================================================================
function CGMZ_AdjustmentFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_AdjustmentFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.gamma = 1.000;
	this.saturation = 1.000;
	this.contrast = 1.000;
	this.brightness = 1.000;
	this.red = 1.000;
	this.green = 1.000;
	this.blue = 1.000;
	this.alpha = 1.000;
};
//=============================================================================
// CGMZ_EmbossFilter
//-----------------------------------------------------------------------------
// Store data for Emboss filters
//=============================================================================
function CGMZ_EmbossFilter() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize filter
//-----------------------------------------------------------------------------
CGMZ_EmbossFilter.prototype.initialize = function(targets, identifier) {
	this.targets = targets;
	this.identifier = identifier;
	this.strength = 5.00;
};
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Store filter data
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also create filter data
//-----------------------------------------------------------------------------
const alias_CGMZ_PixiFilters_CGMZ_Core_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_PixiFilters_CGMZ_Core_createPluginData.call(this);
	this.initializePixiFilters();
};
//-----------------------------------------------------------------------------
// Initialize Pixi Filter Data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializePixiFilters = function() {
	this.filters = {
		godrayFilter: [],
		crtFilter: [],
		oldFilmFilter: [],
		glitchFilter: [],
		asciiFilter: [],
		crossHatchFilter: [],
		kawaseBlurFilter: [],
		dotFilter: [],
		pixelateFilter: [],
		advancedBloomFilter: [],
		grayscaleFilter: [],
		adjustmentFilter: [],
		embossFilter: []
	};
};
//-----------------------------------------------------------------------------
// Check if new filter arrays need to be created
//-----------------------------------------------------------------------------
const alias_CGMZ_PixiFilters_CGMZ_Core_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZ_PixiFilters_CGMZ_Core_onAfterLoad.call(this);
	if(!this.filters.godrayFilter) this.filters.godrayFilter = [];
	if(!this.filters.crtFilter) this.filters.crtFilter = [];
	if(!this.filters.oldFilmFilter) this.filters.oldFilmFilter = [];
	if(!this.filters.glitchFilter) this.filters.glitchFilter = [];
	if(!this.filters.asciiFilter) this.filters.asciiFilter = [];
	if(!this.filters.crossHatchFilter) this.filters.crossHatchFilter = [];
	if(!this.filters.kawaseBlurFilter) this.filters.kawaseBlurFilter = [];
	if(!this.filters.dotFilter) this.filters.dotFilter = [];
	if(!this.filters.pixelateFilter) this.filters.pixelateFilter = [];
	if(!this.filters.advancedBloomFilter) this.filters.advancedBloomFilter = [];
	if(!this.filters.grayscaleFilter) this.filters.grayscaleFilter = [];
	if(!this.filters.adjustmentFilter) this.filters.adjustmentFilter = [];
	if(!this.filters.embossFilter) this.filters.embossFilter = [];
};
//-----------------------------------------------------------------------------
// Determine if unique identifier is not in use and other filters do not have
// same target
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.canAddPixiFilter = function(filterType, filter) {
	const existingFilters = this.filters[filterType];
	for(let i = 0; i < existingFilters.length; i++) {
		if(filter._identifier === existingFilters[i]._identifier) {
			console.warn("Could not create PIXI Filter: Filter already exists!");
			return false;
		}
		for(let j = 0; j < existingFilters[i]._targets.length; j++) {
			if(filter._targets.includes(existingFilters[i]._targets[j])) {
				console.warn("Could not create PIXI Filter: Similar Filter already exists!");
				return false;
			}
		}
	}
	return true;
};
//-----------------------------------------------------------------------------
// Add a Pixi Filter
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.addPixiFilter = function(filterType, filter) {
	this.filters[filterType].push(filter);
	$cgmzTemp.setPixiFilterChanged(true);
};
//-----------------------------------------------------------------------------
// Get a Pixi Filter by target
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getPixiFilter = function(filterType, target) {
	const filterList = this.filters[filterType];
	for(let i = 0; i < filterList.length; i++) {
		if(filterList[i].targets.includes(target)) {
			return filterList[i];
		}
	}
	return null;
};
//-----------------------------------------------------------------------------
// Get a Pixi Filter by Id within a filter type
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getPixiFilterById = function(filterType, identifier) {
	const filterList = this.filters[filterType];
	for(let i = 0; i < filterList.length; i++) {
		if(filterList[i].identifier === identifier) {
			return filterList[i];
		}
	}
	return null;
};
//-----------------------------------------------------------------------------
// Remove a filter by id
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.removePixiFilterById = function(identifier) {
	for(const [key, filterList] of Object.entries(this.filters)) {
		for(let i = 0; i < filterList.length; i++) {
			if(filterList[i].identifier === identifier) {
				filterList.splice(i, 1);
				$cgmzTemp.setPixiFilterChanged(true);
			}
		}
	}
};
//=============================================================================
// Spriteset_Base
//-----------------------------------------------------------------------------
// Apply new filters
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also create CGMZ Filters while preserving other filters
//-----------------------------------------------------------------------------
const alias_CGMZ_PixiFilters_Spriteset_Base_createLowerLayer = Spriteset_Base.prototype.createLowerLayer;
Spriteset_Base.prototype.createLowerLayer = function() {
	alias_CGMZ_PixiFilters_Spriteset_Base_createLowerLayer.call(this);
	this._CGMZ_originalFilters = this._baseSprite.filters;
    this.CGMZ_createPixiFilters();
};
//-----------------------------------------------------------------------------
// Create CGMZ Filters
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_createPixiFilters = function() {
	const filters = $cgmz.filters;
	this._CGMZ_GodrayFilter = null;
	this._CGMZ_CRTFilter = null;
	this._CGMZ_OldFilmFilter = null;
	this._CGMZ_GlitchFilter = null;
	this._CGMZ_AsciiFilter = null;
	this._CGMZ_CrossHatchFilter = null;
	this._CGMZ_KawaseBlurFilter = null;
	this._CGMZ_DotFilter = null;
	this._CGMZ_PixelateFilter = null;
	this._CGMZ_AdvancedBloomFilter = null;
	this._CGMZ_GrayscaleFilter = null;
	this._CGMZ_AdjustmentFilter = null;
	this._CGMZ_EmbossFilter = null;
	for(let i = 0; i < filters.godrayFilter.length; i++) {
		if(filters.godrayFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addGodrayFilter(filters.godrayFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.crtFilter.length; i++) {
		if(filters.crtFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addCRTFilter(filters.crtFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.oldFilmFilter.length; i++) {
		if(filters.oldFilmFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addOldFilmFilter(filters.oldFilmFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.glitchFilter.length; i++) {
		if(filters.glitchFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addGlitchFilter(filters.glitchFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.asciiFilter.length; i++) {
		if(filters.asciiFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addAsciiFilter(filters.asciiFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.crossHatchFilter.length; i++) {
		if(filters.crossHatchFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addCrossHatchFilter(filters.crossHatchFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.kawaseBlurFilter.length; i++) {
		if(filters.kawaseBlurFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addKawaseBlurFilter(filters.kawaseBlurFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.dotFilter.length; i++) {
		if(filters.dotFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addDotFilter(filters.dotFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.pixelateFilter.length; i++) {
		if(filters.pixelateFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addPixelateFilter(filters.pixelateFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.advancedBloomFilter.length; i++) {
		if(filters.advancedBloomFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addAdvancedBloomFilter(filters.advancedBloomFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.grayscaleFilter.length; i++) {
		if(filters.grayscaleFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addGrayscaleFilter(filters.grayscaleFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.adjustmentFilter.length; i++) {
		if(filters.adjustmentFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addAdjustmentFilter(filters.adjustmentFilter[i]);
			break;
		}
	}
	for(let i = 0; i < filters.embossFilter.length; i++) {
		if(filters.embossFilter[i].targets.includes(this.constructor.name)) {
			this.CGMZ_addEmbossFilter(filters.embossFilter[i]);
			break;
		}
	}
};
//-----------------------------------------------------------------------------
// Add a new GodrayFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addGodrayFilter = function(filter) {
    this._CGMZ_GodrayFilter = new PIXI.filters.GodrayFilter();
	this._CGMZ_GodrayFilter.time = filter.time;
	this._CGMZ_GodrayFilter.gain = filter.gain;
	this._CGMZ_GodrayFilter.lacunarity = filter.lacunarity;
	this._CGMZ_GodrayFilter.parallel = filter.parallel;
	this._CGMZ_GodrayFilter.angle = filter.angle;
	this._CGMZ_GodrayFilter.center = filter.center;
	this._CGMZ_GodrayFilter.animating = filter.animating;
	this._CGMZ_GodrayFilter.animationSpeed = filter.animationSpeed;
	this._CGMZ_GodrayFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_GodrayFilter);
};
//-----------------------------------------------------------------------------
// Add a new CRTFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addCRTFilter = function(filter) {
    this._CGMZ_CRTFilter = new PIXI.filters.CRTFilter();
	this._CGMZ_CRTFilter.time = filter.time;
	this._CGMZ_CRTFilter.seed = filter.seed;
	this._CGMZ_CRTFilter.curvature = filter.curvature;
	this._CGMZ_CRTFilter.lineWidth = filter.lineWidth;
	this._CGMZ_CRTFilter.lineContrast = filter.lineContrast;
	this._CGMZ_CRTFilter.verticalLine = filter.verticalLine;
	this._CGMZ_CRTFilter.noise = filter.noise;
	this._CGMZ_CRTFilter.noiseSize = filter.noiseSize;
	this._CGMZ_CRTFilter.vignetting = filter.vignetting;
	this._CGMZ_CRTFilter.vignettingAlpha = filter.vignettingAlpha;
	this._CGMZ_CRTFilter.vignettingBlur = filter.vignettingBlur;
	this._CGMZ_CRTFilter.animating = filter.animating;
	this._CGMZ_CRTFilter.animationSpeed = filter.animationSpeed;
	this._CGMZ_CRTFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_CRTFilter);
};
//-----------------------------------------------------------------------------
// Add a new OldFilmFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addOldFilmFilter = function(filter) {
    this._CGMZ_OldFilmFilter = new PIXI.filters.OldFilmFilter();
	this._CGMZ_OldFilmFilter.seed = filter.seed;
	this._CGMZ_OldFilmFilter.sepia = filter.sepia;
	this._CGMZ_OldFilmFilter.scratch = filter.scratch;
	this._CGMZ_OldFilmFilter.scratchDensity = filter.scratchDensity;
	this._CGMZ_OldFilmFilter.scratchWidth = filter.scratchWidth;
	this._CGMZ_OldFilmFilter.noise = filter.noise;
	this._CGMZ_OldFilmFilter.noiseSize = filter.noiseSize;
	this._CGMZ_OldFilmFilter.vignetting = filter.vignetting;
	this._CGMZ_OldFilmFilter.vignettingAlpha = filter.vignettingAlpha;
	this._CGMZ_OldFilmFilter.vignettingBlur = filter.vignettingBlur;
	this._CGMZ_OldFilmFilter.animating = filter.animating;
	this._CGMZ_OldFilmFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_OldFilmFilter);
};
//-----------------------------------------------------------------------------
// Add a new GlitchFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addGlitchFilter = function(filter) {
    this._CGMZ_GlitchFilter = new PIXI.filters.GlitchFilter();
	this._CGMZ_GlitchFilter.seed = filter.seed;
	this._CGMZ_GlitchFilter.slices = filter.slices;
	this._CGMZ_GlitchFilter.offset = filter.offset;
	this._CGMZ_GlitchFilter.direction = filter.direction;
	this._CGMZ_GlitchFilter.fillMode = filter.fillMode;
	this._CGMZ_GlitchFilter.average = filter.average;
	this._CGMZ_GlitchFilter.minSize = filter.minSize;
	this._CGMZ_GlitchFilter.sampleSize = filter.sampleSize;
	this._CGMZ_GlitchFilter.red = filter.red;
	this._CGMZ_GlitchFilter.blue = filter.blue;
	this._CGMZ_GlitchFilter.green = filter.green;
	this._CGMZ_GlitchFilter.animating = filter.animating;
	this._CGMZ_GlitchFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_GlitchFilter);
};
//-----------------------------------------------------------------------------
// Add a new AsciiFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addAsciiFilter = function(filter) {
    this._CGMZ_AsciiFilter = new PIXI.filters.AsciiFilter();
	this._CGMZ_AsciiFilter.size = filter.size;
	this._CGMZ_AsciiFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_AsciiFilter);
};
//-----------------------------------------------------------------------------
// Add a new CrossHatchFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addCrossHatchFilter = function(filter) {
    this._CGMZ_CrossHatchFilter = new PIXI.filters.CrossHatchFilter();
	this._CGMZ_CrossHatchFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_CrossHatchFilter);
};
//-----------------------------------------------------------------------------
// Add a new KawaseBlurFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addKawaseBlurFilter = function(filter) {
    this._CGMZ_KawaseBlurFilter = new PIXI.filters.KawaseBlurFilter(filter.blur, filter.quality, filter.clamp);
	this._CGMZ_KawaseBlurFilter.pixelSize = filter.pixelSize;
	this._CGMZ_KawaseBlurFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_KawaseBlurFilter);
};
//-----------------------------------------------------------------------------
// Add a new DotFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addDotFilter = function(filter) {
    this._CGMZ_DotFilter = new PIXI.filters.DotFilter(filter.scale, filter.angle);
	this._CGMZ_DotFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_DotFilter);
};
//-----------------------------------------------------------------------------
// Add a new PixelateFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addPixelateFilter = function(filter) {
    this._CGMZ_PixelateFilter = new PIXI.filters.PixelateFilter(filter.size);
	this._CGMZ_PixelateFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_PixelateFilter);
};
//-----------------------------------------------------------------------------
// Add a new AdvancedBloomFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addAdvancedBloomFilter = function(filter) {
    this._CGMZ_AdvancedBloomFilter = new PIXI.filters.AdvancedBloomFilter();
	this._CGMZ_AdvancedBloomFilter.identifier = filter.identifier;
	this._CGMZ_AdvancedBloomFilter.threshold = filter.threshold;
	this._CGMZ_AdvancedBloomFilter.bloomScale = filter.bloomScale;
	this._CGMZ_AdvancedBloomFilter.brightness = filter.brightness;
	this._CGMZ_AdvancedBloomFilter.blur = filter.blur;
	this._CGMZ_AdvancedBloomFilter.quality = filter.quality;
	this._baseSprite.filters.push(this._CGMZ_AdvancedBloomFilter);
};
//-----------------------------------------------------------------------------
// Add a new GrayscaleFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addGrayscaleFilter = function(filter) {
    this._CGMZ_GrayscaleFilter = new PIXI.filters.GrayscaleFilter();
	this._CGMZ_GrayscaleFilter.identifier = filter.identifier;
	this._baseSprite.filters.push(this._CGMZ_GrayscaleFilter);
};
//-----------------------------------------------------------------------------
// Add a new AdjustmentFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addAdjustmentFilter = function(filter) {
    this._CGMZ_AdjustmentFilter = new PIXI.filters.AdjustmentFilter();
	this._CGMZ_AdjustmentFilter.gamma = filter.gamma;
	this._CGMZ_AdjustmentFilter.saturation = filter.saturation;
	this._CGMZ_AdjustmentFilter.contrast = filter.contrast;
	this._CGMZ_AdjustmentFilter.brightness = filter.brightness;
	this._CGMZ_AdjustmentFilter.red = filter.red;
	this._CGMZ_AdjustmentFilter.green = filter.green;
	this._CGMZ_AdjustmentFilter.blue = filter.blue;
	this._CGMZ_AdjustmentFilter.alpha = filter.alpha;
	this._baseSprite.filters.push(this._CGMZ_AdjustmentFilter);
};
//-----------------------------------------------------------------------------
// Add a new EmbossFilter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_addEmbossFilter = function(filter) {
    this._CGMZ_EmbossFilter = new PIXI.filters.EmbossFilter();
	this._CGMZ_EmbossFilter.strength = filter.strength;
	this._baseSprite.filters.push(this._CGMZ_EmbossFilter);
};
//-----------------------------------------------------------------------------
// Alias. Also update CGMZ filters if they are animated
//-----------------------------------------------------------------------------
const alias_CGMZ_PixiFilters_Spriteset_Base_update = Spriteset_Base.prototype.update;
Spriteset_Base.prototype.update = function() {
    alias_CGMZ_PixiFilters_Spriteset_Base_update.call(this);
	this.CGMZ_updatePixiFilters();
};
//-----------------------------------------------------------------------------
// Update CGMZ Pixi Filters
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updatePixiFilters = function() {
    this.CGMZ_updateGodrayFilter();
	this.CGMZ_updateCRTFilter();
	this.CGMZ_updateOldFilmFilter();
	this.CGMZ_updateGlitchFilter();
	this.CGMZ_updateAsciiFilter();
	this.CGMZ_updateKawaseBlurFilter();
	this.CGMZ_updateDotFilter();
	this.CGMZ_updatePixelateFilter();
	this.CGMZ_updateAdvancedBloomFilter();
	this.CGMZ_updateAdjustmentFilter();
	this.CGMZ_updateEmbossFilter();
	$cgmzTemp.setPixiFilterEdited(false);
	this._CGMZ_checkAddedRemovedFilters();
	$cgmzTemp.setPixiFilterChanged(false);
};
//-----------------------------------------------------------------------------
// Check for added or removed CGMZ Pixi Filters
//-----------------------------------------------------------------------------
Spriteset_Base.prototype._CGMZ_checkAddedRemovedFilters = function() {
    if($cgmzTemp.isPixiFiltersChanged()) {
		this.CGMZ_checkAddRemoveGodrayFilter();
		this.CGMZ_checkAddRemoveCRTFilter();
		this.CGMZ_checkAddRemoveOldFilmFilter();
		this.CGMZ_checkAddRemoveGlitchFilter();
		this.CGMZ_checkAddRemoveAsciiFilter();
		this.CGMZ_checkAddRemoveCrossHatchFilter();
		this.CGMZ_checkAddRemoveKawaseBlurFilter();
		this.CGMZ_checkAddRemoveDotFilter();
		this.CGMZ_checkAddRemovePixelateFilter();
		this.CGMZ_checkAddRemoveAdvancedBloomFilter();
		this.CGMZ_checkAddRemoveGrayscaleFilter();
		this.CGMZ_checkAddRemoveAdjustmentFilter();
		this.CGMZ_checkAddRemoveEmbossFilter();
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Godray Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveGodrayFilter = function() {
	const godrayFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.godrayFilter, this.constructor.name);
	if(this._CGMZ_GodrayFilter && !godrayFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_GodrayFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_GodrayFilter = null;
			}
		}
	} else if(!this._CGMZ_GodrayFilter && godrayFilter) {
		this.CGMZ_addGodrayFilter(godrayFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed CRT Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveCRTFilter = function() {
	const crtFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.crtFilter, this.constructor.name);
	if(this._CGMZ_CRTFilter && !crtFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_CRTFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_CRTFilter = null;
			}
		}
	} else if(!this._CGMZ_CRTFilter && crtFilter) {
		this.CGMZ_addCRTFilter(crtFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Old Film Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveOldFilmFilter = function() {
	const oldFilmFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.oldFilmFilter, this.constructor.name);
	if(this._CGMZ_OldFilmFilter && !oldFilmFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_OldFilmFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_OldFilmFilter = null;
			}
		}
	} else if(!this._CGMZ_OldFilmFilter && oldFilmFilter) {
		this.CGMZ_addOldFilmFilter(oldFilmFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Glitch Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveGlitchFilter = function() {
	const glitchFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.glitchFilter, this.constructor.name);
	if(this._CGMZ_GlitchFilter && !glitchFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_GlitchFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_GlitchFilter = null;
			}
		}
	} else if(!this._CGMZ_GlitchFilter && glitchFilter) {
		this.CGMZ_addGlitchFilter(glitchFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Ascii Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveAsciiFilter = function() {
	const asciiFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.asciiFilter, this.constructor.name);
	if(this._CGMZ_AsciiFilter && !asciiFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_AsciiFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_AsciiFilter = null;
			}
		}
	} else if(!this._CGMZ_AsciiFilter && asciiFilter) {
		this.CGMZ_addAsciiFilter(asciiFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed CrossHatch Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveCrossHatchFilter = function() {
	const crossHatchFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.crossHatchFilter, this.constructor.name);
	if(this._CGMZ_CrossHatchFilter && !crossHatchFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_CrossHatchFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_CrossHatchFilter = null;
			}
		}
	} else if(!this._CGMZ_CrossHatchFilter && crossHatchFilter) {
		this.CGMZ_addCrossHatchFilter(crossHatchFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Kawase Blur Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveKawaseBlurFilter = function() {
	const kawaseBlurFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.kawaseBlurFilter, this.constructor.name);
	if(this._CGMZ_KawaseBlurFilter && !kawaseBlurFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_KawaseBlurFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_KawaseBlurFilter = null;
			}
		}
	} else if(!this._CGMZ_KawaseBlurFilter && kawaseBlurFilter) {
		this.CGMZ_addKawaseBlurFilter(kawaseBlurFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Dot Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveDotFilter = function() {
	const dotFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.dotFilter, this.constructor.name);
	if(this._CGMZ_DotFilter && !dotFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_DotFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_DotFilter = null;
			}
		}
	} else if(!this._CGMZ_DotFilter && dotFilter) {
		this.CGMZ_addDotFilter(dotFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Pixelate Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemovePixelateFilter = function() {
	const pixelateFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.pixelateFilter, this.constructor.name);
	if(this._CGMZ_PixelateFilter && !pixelateFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_PixelateFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_PixelateFilter = null;
			}
		}
	} else if(!this._CGMZ_PixelateFilter && pixelateFilter) {
		this.CGMZ_addPixelateFilter(pixelateFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Advanced Bloom Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveAdvancedBloomFilter = function() {
	const advancedBloomFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.advancedBloomFilter, this.constructor.name);
	if(this._CGMZ_AdvancedBloomFilter && !advancedBloomFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_AdvancedBloomFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_AdvancedBloomFilter = null;
			}
		}
	} else if(!this._CGMZ_AdvancedBloomFilter && advancedBloomFilter) {
		this.CGMZ_addAdvancedBloomFilter(advancedBloomFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Grayscale Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveGrayscaleFilter = function() {
	const grayscaleFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.grayscaleFilter, this.constructor.name);
	if(this._CGMZ_GrayscaleFilter && !grayscaleFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_GrayscaleFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_GrayscaleFilter = null;
			}
		}
	} else if(!this._CGMZ_GrayscaleFilter && grayscaleFilter) {
		this.CGMZ_addGrayscaleFilter(grayscaleFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Adjustment Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveAdjustmentFilter = function() {
	const adjustmentFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.adjustmentFilter, this.constructor.name);
	if(this._CGMZ_AdjustmentFilter && !adjustmentFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_AdjustmentFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_AdjustmentFilter = null;
			}
		}
	} else if(!this._CGMZ_AdjustmentFilter && adjustmentFilter) {
		this.CGMZ_addAdjustmentFilter(adjustmentFilter);
	}
};
//-----------------------------------------------------------------------------
// Check for added or removed Emboss Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_checkAddRemoveEmbossFilter = function() {
	const embossFilter = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.embossFilter, this.constructor.name);
	if(this._CGMZ_EmbossFilter && !embossFilter) {
		for(let i = 0; i < this._baseSprite.filters.length; i++) {
			if(this._baseSprite.filters[i] === this._CGMZ_EmbossFilter) {
				this._baseSprite.filters.splice(i, 1);
				this._CGMZ_EmbossFilter = null;
			}
		}
	} else if(!this._CGMZ_EmbossFilter && embossFilter) {
		this.CGMZ_addEmbossFilter(embossFilter);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Godray Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateGodrayFilter = function() {
    if(this._CGMZ_GodrayFilter) {
		this._CGMZ_GodrayFilter.time += this._CGMZ_GodrayFilter.animationSpeed * (this._CGMZ_GodrayFilter.animating);
		if($cgmzTemp.isPixiFiltersEdited()) {
			const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.godrayFilter, this.constructor.name);
			this.CGMZ_updateGodrayFilterSettings(filterData);
		}
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ CRT Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateCRTFilter = function() {
    if(this._CGMZ_CRTFilter) {
		this._CGMZ_CRTFilter.time += this._CGMZ_CRTFilter.animationSpeed * (this._CGMZ_CRTFilter.animating);
		this._CGMZ_CRTFilter.seed = Math.random() * (this._CGMZ_CRTFilter.animating);
		if($cgmzTemp.isPixiFiltersEdited()) {
			const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.crtFilter, this.constructor.name);
			this.CGMZ_updateCRTFilterSettings(filterData);
		}
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Old Film Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateOldFilmFilter = function() {
    if(this._CGMZ_OldFilmFilter) {
		this._CGMZ_OldFilmFilter.seed = Math.random() * (this._CGMZ_OldFilmFilter.animating);
		if($cgmzTemp.isPixiFiltersEdited()) {
			const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.oldFilmFilter, this.constructor.name);
			this.CGMZ_updateOldFilmFilterSettings(filterData);
		}
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Glitch Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateGlitchFilter = function() {
    if(this._CGMZ_GlitchFilter) {
		this._CGMZ_GlitchFilter.seed = Math.random() * (this._CGMZ_GlitchFilter.animating);
		if($cgmzTemp.isPixiFiltersEdited()) {
			const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.glitchFilter, this.constructor.name);
			this.CGMZ_updateGlitchFilterSettings(filterData);
		}
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Ascii Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateAsciiFilter = function() {
    if(this._CGMZ_AsciiFilter && $cgmzTemp.isPixiFiltersEdited()) {
		const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.asciiFilter, this.constructor.name);
		this.CGMZ_updateAsciiFilterSettings(filterData);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ KawaseBlur Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateKawaseBlurFilter = function() {
    if(this._CGMZ_KawaseBlurFilter && $cgmzTemp.isPixiFiltersEdited()) {
		const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.kawaseBlurFilter, this.constructor.name);
		this.CGMZ_updateKawaseBlurFilterSettings(filterData);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Dot Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateDotFilter = function() {
    if(this._CGMZ_DotFilter && $cgmzTemp.isPixiFiltersEdited()) {
		const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.dotFilter, this.constructor.name);
		this.CGMZ_updateDotFilterSettings(filterData);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Pixelate Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updatePixelateFilter = function() {
    if(this._CGMZ_PixelateFilter && $cgmzTemp.isPixiFiltersEdited()) {
		const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.pixelateFilter, this.constructor.name);
		this.CGMZ_updatePixelateFilterSettings(filterData);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Advanced Bloom Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateAdvancedBloomFilter = function() {
    if(this._CGMZ_AdvancedBloomFilter && $cgmzTemp.isPixiFiltersEdited()) {
		const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.advancedBloomFilter, this.constructor.name);
		this.CGMZ_updateAdvancedBloomFilterSettings(filterData);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Adjustment Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateAdjustmentFilter = function() {
    if(this._CGMZ_AdjustmentFilter && $cgmzTemp.isPixiFiltersEdited()) {
		const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.adjustmentFilter, this.constructor.name);
		this.CGMZ_updateAdjustmentFilterSettings(filterData);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Emboss Filter
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateEmbossFilter = function() {
    if(this._CGMZ_EmbossFilter && $cgmzTemp.isPixiFiltersEdited()) {
		const filterData = $cgmz.getPixiFilter(CGMZ.PixiFilters.FilterNames.embossFilter, this.constructor.name);
		this.CGMZ_updateEmbossFilterSettings(filterData);
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Godray Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateGodrayFilterSettings = function(filterData) {
	this._CGMZ_GodrayFilter.gain = filterData.gain;
	this._CGMZ_GodrayFilter.lacunarity = filterData.lacunarity;
	this._CGMZ_GodrayFilter.angle = filterData.angle;
	this._CGMZ_GodrayFilter.center = filterData.center;
	this._CGMZ_GodrayFilter.animating = filterData.animating;
	this._CGMZ_GodrayFilter.animationSpeed = filterData.animationSpeed;
};
//-----------------------------------------------------------------------------
// Update CGMZ CRT Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateCRTFilterSettings = function(filterData) {
	this._CGMZ_CRTFilter.curvature = filterData.curvature;
	this._CGMZ_CRTFilter.lineWidth = filterData.lineWidth;
	this._CGMZ_CRTFilter.lineContrast = filterData.lineContrast;
	this._CGMZ_CRTFilter.noise = filterData.noise;
	this._CGMZ_CRTFilter.noiseSize = filterData.noiseSize;
	this._CGMZ_CRTFilter.vignetting = filterData.vignetting;
	this._CGMZ_CRTFilter.vignettingAlpha = filterData.vignettingAlpha;
	this._CGMZ_CRTFilter.vignettingBlur = filterData.vignettingBlur;
	this._CGMZ_CRTFilter.animating = filterData.animating;
	this._CGMZ_CRTFilter.animationSpeed = filterData.animationSpeed;
};
//-----------------------------------------------------------------------------
// Update CGMZ Old Film Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateOldFilmFilterSettings = function(filterData) {
	this._CGMZ_OldFilmFilter.sepia = filterData.sepia;
	this._CGMZ_OldFilmFilter.scratch = filterData.scratch;
	this._CGMZ_OldFilmFilter.scratchWidth = filterData.scratchWidth;
	this._CGMZ_OldFilmFilter.scratchDensity = filterData.scratchDensity;
	this._CGMZ_OldFilmFilter.noise = filterData.noise;
	this._CGMZ_OldFilmFilter.noiseSize = filterData.noiseSize;
	this._CGMZ_OldFilmFilter.vignetting = filterData.vignetting;
	this._CGMZ_OldFilmFilter.vignettingAlpha = filterData.vignettingAlpha;
	this._CGMZ_OldFilmFilter.vignettingBlur = filterData.vignettingBlur;
	this._CGMZ_OldFilmFilter.animating = filterData.animating;
};
//-----------------------------------------------------------------------------
// Update CGMZ Glitch Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateGlitchFilterSettings = function(filterData) {
	this._CGMZ_GlitchFilter.slices = filterData.slices;
	this._CGMZ_GlitchFilter.offset = filterData.offset;
	this._CGMZ_GlitchFilter.direction = filterData.direction;
	this._CGMZ_GlitchFilter.fillMode = filterData.fillMode;
	this._CGMZ_GlitchFilter.average = filterData.average;
	this._CGMZ_GlitchFilter.minSize = filterData.minSize;
	this._CGMZ_GlitchFilter.sampleSize = filterData.sampleSize;
	this._CGMZ_GlitchFilter.red = filterData.red;
	this._CGMZ_GlitchFilter.blue = filterData.blue;
	this._CGMZ_GlitchFilter.green = filterData.green;
	if(filterData.refresh) {
		filterData.refresh = false;
		this._CGMZ_GlitchFilter.refresh();
	}
};
//-----------------------------------------------------------------------------
// Update CGMZ Ascii Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateAsciiFilterSettings = function(filterData) {
	this._CGMZ_AsciiFilter.size = filterData.size;
};
//-----------------------------------------------------------------------------
// Update CGMZ Kawase Blur Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateKawaseBlurFilterSettings = function(filterData) {
	this._CGMZ_KawaseBlurFilter.blur = filterData.blur;
	this._CGMZ_KawaseBlurFilter.quality = filterData.quality;
	this._CGMZ_KawaseBlurFilter.pixelSize = filterData.pixelSize;
};
//-----------------------------------------------------------------------------
// Update CGMZ Dot Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateDotFilterSettings = function(filterData) {
	this._CGMZ_DotFilter.scale = filterData.scale;
	this._CGMZ_DotFilter.angle = filterData.angle;
};
//-----------------------------------------------------------------------------
// Update CGMZ Pixelate Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updatePixelateFilterSettings = function(filterData) {
	this._CGMZ_PixelateFilter.size = filterData.size;
};
//-----------------------------------------------------------------------------
// Update CGMZ Advanced Bloom Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateAdvancedBloomFilterSettings = function(filterData) {
	this._CGMZ_AdvancedBloomFilter.threshold = filterData.threshold;
	this._CGMZ_AdvancedBloomFilter.bloomScale = filterData.bloomScale;
	this._CGMZ_AdvancedBloomFilter.brightness = filterData.brightness;
	this._CGMZ_AdvancedBloomFilter.blur = filterData.blur;
	this._CGMZ_AdvancedBloomFilter.quality = filterData.quality;
};
//-----------------------------------------------------------------------------
// Update CGMZ Adjustment Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateAdjustmentFilterSettings = function(filterData) {
	this._CGMZ_AdjustmentFilter.gamma = filterData.gamma;
	this._CGMZ_AdjustmentFilter.saturation = filterData.saturation;
	this._CGMZ_AdjustmentFilter.contrast = filterData.contrast;
	this._CGMZ_AdjustmentFilter.brightness = filterData.brightness;
	this._CGMZ_AdjustmentFilter.red = filterData.red;
	this._CGMZ_AdjustmentFilter.green = filterData.green;
	this._CGMZ_AdjustmentFilter.blue = filterData.blue;
	this._CGMZ_AdjustmentFilter.alpha = filterData.alpha;
};
//-----------------------------------------------------------------------------
// Update CGMZ Adjustment Filter configurable Settings
//-----------------------------------------------------------------------------
Spriteset_Base.prototype.CGMZ_updateEmbossFilterSettings = function(filterData) {
	this._CGMZ_EmbossFilter.strength = filterData.strength;
};
/*!
 * pixi-filters - v5.2.1
 * Compiled Fri, 24 Mar 2023 22:12:11 UTC
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
*/
var __filters=function(e,t,r,n){"use strict";class i extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n"),this.gamma=1,this.saturation=1,this.contrast=1,this.brightness=1,this.red=1,this.green=1,this.blue=1,this.alpha=1,Object.assign(this,e)}apply(e,t,r,n){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,r,n)}}class o extends t.Filter{constructor(e=4,r=3,n=!1){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",n?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}"),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new t.Point,this.pixelSize=1,this._clamp=n,Array.isArray(e)?this.kernels=e:(this._blur=e,this.quality=r)}apply(e,t,r,n){const i=this._pixelSize.x/t._frame.width,o=this._pixelSize.y/t._frame.height;let s;if(1===this._quality||0===this._blur)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*o,e.applyFilter(this,t,r,n);else{const a=e.getFilterTexture();let l,u=t,c=a;const f=this._quality-1;for(let t=0;t<f;t++)s=this._kernels[t]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*o,e.applyFilter(this,u,c,1),l=u,u=c,c=l;s=this._kernels[f]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*o,e.applyFilter(this,u,r,n),e.returnFilterTexture(a)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce(((e,t)=>e+t+.5),0))}_generateKernels(){const e=this._blur,t=this._quality,r=[e];if(e>0){let n=e;const i=e/t;for(let e=1;e<t;e++)n-=i,r.push(n)}this._kernels=r,this._updatePadding()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof t.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get blur(){return this._blur}set blur(e){this._blur=e,this._generateKernels()}}var s="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";class a extends t.Filter{constructor(e=.5){super(s,"\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n"),this.threshold=e}get threshold(){return this.uniforms.threshold}set threshold(e){this.uniforms.threshold=e}}const l=class extends t.Filter{constructor(e){super(s,"uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n"),this.bloomScale=1,this.brightness=1,this._resolution=t.settings.FILTER_RESOLUTION,"number"==typeof e&&(e={threshold:e});const r=Object.assign(l.defaults,e);this.bloomScale=r.bloomScale,this.brightness=r.brightness;const{kernels:n,blur:i,quality:u,pixelSize:c,resolution:f}=r;this._extractFilter=new a(r.threshold),this._extractFilter.resolution=f,this._blurFilter=n?new o(n):new o(i,u),this.pixelSize=c,this.resolution=f}apply(e,t,r,n,i){const o=e.getFilterTexture();this._extractFilter.apply(e,t,o,1,i);const s=e.getFilterTexture();this._blurFilter.apply(e,o,s,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=s,e.applyFilter(this,t,r,n),e.returnFilterTexture(s),e.returnFilterTexture(o)}get resolution(){return this._resolution}set resolution(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.blur}set blur(e){this._blurFilter.blur=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){this._blurFilter.pixelSize=e}};let u=l;u.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:t.settings.FILTER_RESOLUTION};class c extends t.Filter{constructor(e=8){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor(coord / size) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod(coord, size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, 4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the grid position\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    // sample the color at grid position\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // brightness of the color as it's perceived by the human eye\n    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;\n\n    // determine the character to use\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n"),this.size=e}get size(){return this.uniforms.pixelSize}set size(e){this.uniforms.pixelSize=e}}class f extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n"),this._thickness=2,this._angle=0,this.uniforms.lightColor=new Float32Array(3),this.uniforms.shadowColor=new Float32Array(3),Object.assign(this,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},e),this.padding=1}_updateTransform(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)}get rotation(){return this._angle/t.DEG_TO_RAD}set rotation(e){this._angle=e*t.DEG_TO_RAD,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return t.utils.rgb2hex(this.uniforms.lightColor)}set lightColor(e){t.utils.hex2rgb(e,this.uniforms.lightColor)}get lightAlpha(){return this.uniforms.lightAlpha}set lightAlpha(e){this.uniforms.lightAlpha=e}get shadowColor(){return t.utils.rgb2hex(this.uniforms.shadowColor)}set shadowColor(e){t.utils.hex2rgb(e,this.uniforms.shadowColor)}get shadowAlpha(){return this.uniforms.shadowAlpha}set shadowAlpha(e){this.uniforms.shadowAlpha=e}}class d extends t.Filter{constructor(e=2,i=4,o=t.settings.FILTER_RESOLUTION,s=5){let a,l;super(),"number"==typeof e?(a=e,l=e):e instanceof t.Point?(a=e.x,l=e.y):Array.isArray(e)&&(a=e[0],l=e[1]),this.blurXFilter=new n.BlurFilterPass(!0,a,i,o,s),this.blurYFilter=new n.BlurFilterPass(!1,l,i,o,s),this.blurYFilter.blendMode=t.BLEND_MODES.SCREEN,this.defaultFilter=new r.AlphaFilter}apply(e,t,r,n){const i=e.getFilterTexture();this.defaultFilter.apply(e,t,r,n),this.blurXFilter.apply(e,t,i,1),this.blurYFilter.apply(e,i,r,0),e.returnFilterTexture(i)}get blur(){return this.blurXFilter.blur}set blur(e){this.blurXFilter.blur=this.blurYFilter.blur=e}get blurX(){return this.blurXFilter.blur}set blurX(e){this.blurXFilter.blur=e}get blurY(){return this.blurYFilter.blur}set blurY(e){this.blurYFilter.blur=e}}const h=class extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n"),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,h.defaults,e)}apply(e,t,r,n){const{width:i,height:o}=t.filterFrame;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,r,n)}get radius(){return this.uniforms.radius}set radius(e){this.uniforms.radius=e}get strength(){return this.uniforms.strength}set strength(e){this.uniforms.strength=e}get center(){return this.uniforms.center}set center(e){this.uniforms.center=e}};let m=h;m.defaults={center:[.5,.5],radius:100,strength:1};var g,v;(v=v||{}).stringify=(g={"visit_linear-gradient":function(e){return g.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return g.visit_gradient(e)},"visit_radial-gradient":function(e){return g.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return g.visit_gradient(e)},visit_gradient:function(e){var t=g.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+g.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,r=g.visit(e.at),n=g.visit(e.style);return n&&(t+=" "+n),r&&(t+=" at "+r),t},"visit_default-radial":function(e){var t="",r=g.visit(e.at);return r&&(t+=r),t},"visit_extent-keyword":function(e){var t=e.value,r=g.visit(e.at);return r&&(t+=" at "+r),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return g.visit(e.value.x)+" "+g.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return g.visit_color(e.value,e)},visit_hex:function(e){return g.visit_color("#"+e.value,e)},visit_rgb:function(e){return g.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return g.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var r=e,n=g.visit(t.length);return n&&(r+=" "+n),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",r=e.length;return e.forEach((function(e,n){t+=g.visit(e),n<r-1&&(t+=", ")})),t},visit:function(e){if(!e)return"";if(e instanceof Array)return g.visit_array(e,"");if(e.type){var t=g["visit_"+e.type];if(t)return t(e);throw Error("Missing visitor visit_"+e.type)}throw Error("Invalid node.")}},function(e){return g.visit(e)}),(v=v||{}).parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function r(e){var r=new Error(t+": "+e);throw r.source=t,r}function n(){var e=h(i);return t.length>0&&r("Invalid input not EOF"),e}function i(){return o("linear-gradient",e.linearGradient,a)||o("repeating-linear-gradient",e.repeatingLinearGradient,a)||o("radial-gradient",e.radialGradient,l)||o("repeating-radial-gradient",e.repeatingRadialGradient,l)}function o(t,n,i){return s(n,(function(n){var o=i();return o&&(y(e.comma)||r("Missing comma before color stops")),{type:t,orientation:o,colorStops:h(m)}}))}function s(t,n){var i=y(t);if(i){y(e.startCall)||r("Missing (");var o=n(i);return y(e.endCall)||r("Missing )"),o}}function a(){return x("directional",e.sideOrCorner,1)||x("angular",e.angleValue,1)}function l(){var r,n,i=u();return i&&((r=[]).push(i),n=t,y(e.comma)&&((i=u())?r.push(i):t=n)),r}function u(){var e=function(){var e=x("shape",/^(circle)/i,0);return e&&(e.style=p()||c()),e}()||function(){var e=x("shape",/^(ellipse)/i,0);return e&&(e.style=v()||c()),e}();if(e)e.at=f();else{var t=c();if(t){e=t;var r=f();r&&(e.at=r)}else{var n=d();n&&(e={type:"default-radial",at:n})}}return e}function c(){return x("extent-keyword",e.extentKeywords,1)}function f(){if(x("position",/^at/,0)){var e=d();return e||r("Missing positioning value"),e}}function d(){var e={x:v(),y:v()};if(e.x||e.y)return{type:"position",value:e}}function h(t){var n=t(),i=[];if(n)for(i.push(n);y(e.comma);)(n=t())?i.push(n):r("One extra comma");return i}function m(){var t=x("hex",e.hexColor,1)||s(e.rgbaColor,(function(){return{type:"rgba",value:h(g)}}))||s(e.rgbColor,(function(){return{type:"rgb",value:h(g)}}))||x("literal",e.literalColor,0);return t||r("Expected color definition"),t.length=v(),t}function g(){return y(e.number)[1]}function v(){return x("%",e.percentageValue,1)||x("position-keyword",e.positionKeywords,1)||p()}function p(){return x("px",e.pixelValue,1)||x("em",e.emValue,1)}function x(e,t,r){var n=y(t);if(n)return{type:e,value:n[r]}}function y(e){var r,n;return(n=/^[\n\r\t\s]+/.exec(t))&&C(n[0].length),(r=e.exec(t))&&C(r[0].length),r}function C(e){t=t.substr(e)}return function(e){return t=e.toString(),n()}}();var p=v.parse;v.stringify;var x={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},y={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var C={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},_={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t,r,n,i,o,s=e[0]/360,a=e[1]/100,l=e[2]/100;if(0===a)return[o=255*l,o,o];t=2*l-(r=l<.5?l*(1+a):l+a-l*a),i=[0,0,0];for(var u=0;u<3;u++)(n=s+1/3*-(u-1))<0?n++:n>1&&n--,o=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,i[u]=255*o;return i}};function b(e){Array.isArray(e)&&e.raw&&(e=String.raw(...arguments));var t,r=function(e){var t,r,n=[],i=1;if("string"==typeof e)if(x[e])n=x[e].slice(),r="rgb";else if("transparent"===e)i=0,r="rgb",n=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var o=e.slice(1);i=1,(l=o.length)<=4?(n=[parseInt(o[0]+o[0],16),parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16)],4===l&&(i=parseInt(o[3]+o[3],16)/255)):(n=[parseInt(o[0]+o[1],16),parseInt(o[2]+o[3],16),parseInt(o[4]+o[5],16)],8===l&&(i=parseInt(o[6]+o[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),r="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=t[1],a="rgb"===s;r=o=s.replace(/a$/,"");var l="cmyk"===o?4:"gray"===o?1:3;n=t[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,t){if(/%$/.test(e))return t===l?parseFloat(e)/100:"rgb"===o?255*parseFloat(e)/100:parseFloat(e);if("h"===o[t]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==y[e])return y[e]}return parseFloat(e)})),s===o&&n.push(1),i=a||void 0===n[l]?1:n[l],n=n.slice(0,l)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(n=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),r=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(n=[e[0],e[1],e[2]],r="rgb",i=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(r="rgb",n=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",n=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),i=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(i/=100)):(r="rgb",n=[e>>>16,(65280&e)>>>8,255&e]);return{space:r,values:n,alpha:i}}(e);if(!r.space)return[];const n="h"===r.space[0]?_.min:C.min,i="h"===r.space[0]?_.max:C.max;return(t=Array(3))[0]=Math.min(Math.max(r.values[0],n[0]),i[0]),t[1]=Math.min(Math.max(r.values[1],n[1]),i[1]),t[2]=Math.min(Math.max(r.values[2],n[2]),i[2]),"h"===r.space[0]&&(t=_.rgb(t)),t.push(Math.min(Math.max(r.alpha,0),1)),t}function S(e){switch(typeof e){case"string":return function(e){const t=b(e);if(!t)throw new Error(`Unable to parse color "${e}" as RGBA.`);return[t[0]/255,t[1]/255,t[2]/255,t[3]]}(e);case"number":return t.utils.hex2rgb(e);default:return e}}function T(e){const t=p(function(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}(e));if(0===t.length)throw new Error("Invalid CSS gradient.");if(1!==t.length)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const r=t[0],n=function(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}(r.type),i=function(e){const t=function(e){const t=[];for(let r=0;r<e.length;r++){const n=e[r];let i=-1;"literal"===n.type&&n.length&&"type"in n.length&&"%"===n.length.type&&"value"in n.length&&(i=parseFloat(n.length.value)/100),t.push(i)}const r=e=>{for(let r=e;r<t.length;r++)if(-1!==t[r])return{indexDelta:r-e,offset:t[r]};return{indexDelta:t.length-1-e,offset:1}};let n=0;for(let e=0;e<t.length;e++){const i=t[e];if(-1!==i)n=i;else if(0===e)t[e]=0;else if(e+1===t.length)t[e]=1;else{const i=r(e),o=(i.offset-n)/(1+i.indexDelta);for(let r=0;r<=i.indexDelta;r++)t[e+r]=n+(r+1)*o;e+=i.indexDelta,n=t[e]}}return t.map(A)}(e),r=[];for(let n=0;n<e.length;n++){const i=F(e[n]);r.push({offset:t[n],color:i.slice(0,3),alpha:i[3]})}return r}(r.colorStops),o=function(e){if(void 0===e)return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return function(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}(e.value)}return 0}(r.orientation);return{type:n,stops:i,angle:o}}function F(e){return S(function(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}(e))}function A(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}C.hsl=function(e){var t,r,n=e[0]/255,i=e[1]/255,o=e[2]/255,s=Math.min(n,i,o),a=Math.max(n,i,o),l=a-s;return a===s?t=0:n===a?t=(i-o)/l:i===a?t=2+(o-n)/l:o===a&&(t=4+(n-i)/l),(t=Math.min(60*t,360))<0&&(t+=360),r=(s+a)/2,[t,100*(a===s?0:r<=.5?l/(a+s):l/(2-a-s)),100*r]};var z=Object.defineProperty,w=Object.defineProperties,P=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&O(e,r,t[r]);if(M)for(var r of M(t))k.call(t,r)&&O(e,r,t[r]);return e};const E=class extends t.Filter{constructor(e){e&&"css"in e&&(e=((e,t)=>w(e,P(t)))(R({},T(e.css||"")),{alpha:e.alpha,maxColors:e.maxColors}));const t=R(R({},E.defaults),e);if(!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vFilterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;\n}\n","const float PI = 3.1415926538;\nconst float PI_2 = PI*2.;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nuniform sampler2D uSampler;\n\nconst int TYPE_LINEAR = 0;\nconst int TYPE_RADIAL = 1;\nconst int TYPE_CONIC = 2;\nconst int MAX_STOPS = 32;\n\nuniform int uNumStops;\nuniform float uAlphas[3*MAX_STOPS];\nuniform vec3 uColors[MAX_STOPS];\nuniform float uOffsets[MAX_STOPS];\nuniform int uType;\nuniform float uAngle;\nuniform float uAlpha;\nuniform int uMaxColors;\n\nstruct ColorStop {\n    float offset;\n    vec3 color;\n    float alpha;\n};\n\nmat2 rotate2d(float angle){\n    return mat2(cos(angle), -sin(angle),\n    sin(angle), cos(angle));\n}\n\nfloat projectLinearPosition(vec2 pos, float angle){\n    vec2 center = vec2(0.5);\n    vec2 result = pos - center;\n    result = rotate2d(angle) * result;\n    result = result + center;\n    return clamp(result.x, 0., 1.);\n}\n\nfloat projectRadialPosition(vec2 pos) {\n    float r = distance(vFilterCoord, vec2(0.5));\n    return clamp(2.*r, 0., 1.);\n}\n\nfloat projectAnglePosition(vec2 pos, float angle) {\n    vec2 center = pos - vec2(0.5);\n    float polarAngle=atan(-center.y, center.x);\n    return mod(polarAngle + angle, PI_2) / PI_2;\n}\n\nfloat projectPosition(vec2 pos, int type, float angle) {\n    if (type == TYPE_LINEAR) {\n        return projectLinearPosition(pos, angle);\n    } else if (type == TYPE_RADIAL) {\n        return projectRadialPosition(pos);\n    } else if (type == TYPE_CONIC) {\n        return projectAnglePosition(pos, angle);\n    }\n\n    return pos.y;\n}\n\nvoid main(void) {\n    // current/original color\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n\n    // skip calculations if gradient alpha is 0\n    if (0.0 == uAlpha) {\n        gl_FragColor = currentColor;\n        return;\n    }\n\n    // project position\n    float y = projectPosition(vFilterCoord, uType, radians(uAngle));\n\n    // check gradient bounds\n    float offsetMin = uOffsets[0];\n    float offsetMax = 0.0;\n\n    for (int i = 0; i < MAX_STOPS; i++) {\n        if (i == uNumStops-1){ // last index\n            offsetMax = uOffsets[i];\n        }\n    }\n\n    if (y  < offsetMin || y > offsetMax) {\n        gl_FragColor = currentColor;\n        return;\n    }\n\n    // limit colors\n    if (uMaxColors > 0) {\n        float stepSize = 1./float(uMaxColors);\n        float stepNumber = float(floor(y/stepSize));\n        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment\n    }\n\n    // find color stops\n    ColorStop from;\n    ColorStop to;\n\n    for (int i = 0; i < MAX_STOPS; i++) {\n        if (y >= uOffsets[i]) {\n            from = ColorStop(uOffsets[i], uColors[i], uAlphas[i]);\n            to = ColorStop(uOffsets[i+1], uColors[i+1], uAlphas[i+1]);\n        }\n\n        if (i == uNumStops-1){ // last index\n            break;\n        }\n    }\n\n    // mix colors from stops\n    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);\n    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);\n\n    float segmentHeight = to.offset - from.offset;\n    float relativePos = y - from.offset;// position from 0 to [segmentHeight]\n    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].\n\n    float gradientAlpha = uAlpha * currentColor.a;\n    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;\n\n    // mix resulting color with current color\n    gl_FragColor = gradientColor + currentColor*(1.-gradientColor.a);\n}\n"),this._stops=[],this.autoFit=!1,Object.assign(this,t)}get stops(){return this._stops}set stops(e){const t=function(e){return[...e].sort(((e,t)=>e.offset-t.offset))}(e),r=new Float32Array(3*t.length);for(let e=0;e<t.length;e++){const n=S(t[e].color),i=3*e;r[i+0]=n[0],r[i+1]=n[1],r[i+2]=n[2]}this.uniforms.uColors=r,this.uniforms.uOffsets=t.map((e=>e.offset)),this.uniforms.uAlphas=t.map((e=>e.alpha)),this.uniforms.uNumStops=t.length,this._stops=t}set type(e){this.uniforms.uType=e}get type(){return this.uniforms.uType}set angle(e){this.uniforms.uAngle=e-90}get angle(){return this.uniforms.uAngle+90}set alpha(e){this.uniforms.uAlpha=e}get alpha(){return this.uniforms.uAlpha}set maxColors(e){this.uniforms.uMaxColors=e}get maxColors(){return this.uniforms.uMaxColors}};let j=E;j.LINEAR=0,j.RADIAL=1,j.CONIC=2,j.defaults={type:E.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0};class I extends t.Filter{constructor(e,t=!1,r=1){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}"),this.mix=1,this._size=0,this._sliceSize=0,this._slicePixelSize=0,this._sliceInnerSize=0,this._nearest=!1,this._scaleMode=null,this._colorMap=null,this._scaleMode=null,this.nearest=t,this.mix=r,this.colorMap=e}apply(e,t,r,n){this.uniforms._mix=this.mix,e.applyFilter(this,t,r,n)}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){!e||(e instanceof t.Texture||(e=t.Texture.from(e)),null!=e&&e.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=t.MIPMAP_MODES.OFF,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e)}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?t.SCALE_MODES.NEAREST:t.SCALE_MODES.LINEAR;const r=this._colorMap;r&&r.baseTexture&&(r.baseTexture._glTextures={},r.baseTexture.scaleMode=this._scaleMode,r.baseTexture.mipmap=t.MIPMAP_MODES.OFF,r._updateID++,r.baseTexture.emit("update",r.baseTexture))}updateColorMap(){const e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)}destroy(e=!1){this._colorMap&&this._colorMap.destroy(e),super.destroy()}}class L extends t.Filter{constructor(e=0,t=1){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n"),this._color=0,this._alpha=1,this.uniforms.color=new Float32Array(3),this.color=e,this.alpha=t}set color(e){const r=this.uniforms.color;"number"==typeof e?(t.utils.hex2rgb(e,r),this._color=e):(r[0]=e[0],r[1]=e[1],r[2]=e[2],this._color=t.utils.rgb2hex(r))}get color(){return this._color}set alpha(e){this.uniforms.alpha=e,this._alpha=e}get alpha(){return this._alpha}}class V extends t.Filter{constructor(e=16711680,t=0,r=.4){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n"),this._originalColor=16711680,this._newColor=0,this.uniforms.originalColor=new Float32Array(3),this.uniforms.newColor=new Float32Array(3),this.originalColor=e,this.newColor=t,this.epsilon=r}set originalColor(e){const r=this.uniforms.originalColor;"number"==typeof e?(t.utils.hex2rgb(e,r),this._originalColor=e):(r[0]=e[0],r[1]=e[1],r[2]=e[2],this._originalColor=t.utils.rgb2hex(r))}get originalColor(){return this._originalColor}set newColor(e){const r=this.uniforms.newColor;"number"==typeof e?(t.utils.hex2rgb(e,r),this._newColor=e):(r[0]=e[0],r[1]=e[1],r[2]=e[2],this._newColor=t.utils.rgb2hex(r))}get newColor(){return this._newColor}set epsilon(e){this.uniforms.epsilon=e}get epsilon(){return this.uniforms.epsilon}}class N extends t.Filter{constructor(e,t=200,r=200){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n"),this.uniforms.texelSize=new Float32Array(2),this.uniforms.matrix=new Float32Array(9),void 0!==e&&(this.matrix=e),this.width=t,this.height=r}get matrix(){return this.uniforms.matrix}set matrix(e){e.forEach(((e,t)=>{this.uniforms.matrix[t]=e}))}get width(){return 1/this.uniforms.texelSize[0]}set width(e){this.uniforms.texelSize[0]=1/e}get height(){return 1/this.uniforms.texelSize[1]}set height(e){this.uniforms.texelSize[1]=1/e}}class G extends t.Filter{constructor(){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")}}const B=class extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));\n    \n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n"),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,B.defaults,e)}apply(e,t,r,n){const{width:i,height:o}=t.filterFrame;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=o,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,r,n)}set curvature(e){this.uniforms.curvature=e}get curvature(){return this.uniforms.curvature}set lineWidth(e){this.uniforms.lineWidth=e}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(e){this.uniforms.lineContrast=e}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(e){this.uniforms.verticalLine=e}get verticalLine(){return this.uniforms.verticalLine}set noise(e){this.uniforms.noise=e}get noise(){return this.uniforms.noise}set noiseSize(e){this.uniforms.noiseSize=e}get noiseSize(){return this.uniforms.noiseSize}set vignetting(e){this.uniforms.vignetting=e}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(e){this.uniforms.vignettingAlpha=e}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(e){this.uniforms.vignettingBlur=e}get vignettingBlur(){return this.uniforms.vignettingBlur}};let X=B;X.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};class q extends t.Filter{constructor(e=1,t=5,r=!0){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\nuniform bool grayscale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   vec3 colorRGB = vec3(color);\n\n   if (grayscale)\n   {\n       colorRGB = vec3(color.r + color.g + color.b) / 3.0;\n   }\n\n   gl_FragColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);\n}\n"),this.scale=e,this.angle=t,this.grayscale=r}get scale(){return this.uniforms.scale}set scale(e){this.uniforms.scale=e}get angle(){return this.uniforms.angle}set angle(e){this.uniforms.angle=e}get grayscale(){return this.uniforms.grayscale}set grayscale(e){this.uniforms.grayscale=e}}var K=Object.defineProperty,W=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))Y.call(t,r)&&Z(e,r,t[r]);if(W)for(var r of W(t))$.call(t,r)&&Z(e,r,t[r]);return e};const H=class extends t.Filter{constructor(e){super(),this.angle=45,this._distance=5,this._resolution=t.settings.FILTER_RESOLUTION;const r=e?U(U({},H.defaults),e):H.defaults,{kernels:n,blur:i,quality:s,pixelSize:a,resolution:l}=r;this._offset=new t.ObservablePoint(this._updatePadding,this),this._tintFilter=new t.Filter("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=l,this._blurFilter=n?new o(n):new o(i,s),this.pixelSize=a,this.resolution=l;const{shadowOnly:u,rotation:c,distance:f,offset:d,alpha:h,color:m}=r;this.shadowOnly=u,void 0!==c&&void 0!==f?(this.rotation=c,this.distance=f):this.offset=d,this.alpha=h,this.color=m}apply(e,t,r,n){const i=e.getFilterTexture();this._tintFilter.apply(e,t,i,1),this._blurFilter.apply(e,i,r,n),!0!==this.shadowOnly&&e.applyFilter(this,t,r,0),e.returnFilterTexture(i)}_updatePadding(){const e=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=e+2*this.blur}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(e){this._offset.copyFrom(e),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)}get distance(){return this._distance}set distance(e){t.utils.deprecation("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=e,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/t.DEG_TO_RAD}set rotation(e){t.utils.deprecation("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=e*t.DEG_TO_RAD,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(e){this._tintFilter.uniforms.alpha=e}get color(){return t.utils.rgb2hex(this._tintFilter.uniforms.color)}set color(e){t.utils.hex2rgb(e,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.blur}set blur(e){this._blurFilter.blur=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){this._blurFilter.pixelSize=e}};let Q=H;Q.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:t.settings.FILTER_RESOLUTION};class J extends t.Filter{constructor(e=5){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n"),this.strength=e}get strength(){return this.uniforms.strength}set strength(e){this.uniforms.strength=e}}const ee=class extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n"),this.offset=100,this.fillMode=ee.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=t.Texture.from(this._canvas,{scaleMode:t.SCALE_MODES.NEAREST}),Object.assign(this,ee.defaults,e)}apply(e,t,r,n){const{width:i,height:o}=t.filterFrame;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=o,this.uniforms.aspect=o/i,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,r,n)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,r=this.sampleSize,n=Math.min(this.minSize/r,.9/this._slices);if(this.average){const r=this._slices;let i=1;for(let o=0;o<t;o++){const t=i/(r-o),s=Math.max(t*(1-.6*Math.random()),n);e[o]=s,i-=s}e[t]=i}else{let r=1;const i=Math.sqrt(1/this._slices);for(let o=0;o<t;o++){const t=Math.max(i*r*Math.random(),n);e[o]=t,r-=t}e[t]=r}this.shuffle()}shuffle(){const e=this._sizes;for(let t=this._slices-1;t>0;t--){const r=Math.random()*t>>0,n=e[t];e[t]=e[r],e[r]=n}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let n,i=0;for(let t=0;t<this._slices;t++){n=Math.floor(256*this._offsets[t]);const o=this._sizes[t]*e,s=n>0?n:0,a=n<0?-n:0;r.fillStyle=`rgba(${s}, ${a}, 0, 1)`,r.fillRect(0,i>>0,e,o+1>>0),i+=o}t.baseTexture.update(),this.uniforms.displacementMap=t}set sizes(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())}get direction(){return this._direction}set direction(e){if(this._direction===e)return;this._direction=e;const r=e*t.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(r),this.uniforms.cosDir=Math.cos(r)}get red(){return this.uniforms.red}set red(e){this.uniforms.red=e}get green(){return this.uniforms.green}set green(e){this.uniforms.green=e}get blue(){return this.uniforms.blue}set blue(e){this.uniforms.blue=e}destroy(){var e;null==(e=this.texture)||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let te=ee;te.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},te.TRANSPARENT=0,te.ORIGINAL=1,te.LOOP=2,te.CLAMP=3,te.MIRROR=4;var re="varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\nuniform float alpha;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    if (knockout) {\n      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n";const ne=class extends t.Filter{constructor(e){const t=Object.assign({},ne.defaults,e),{outerStrength:r,innerStrength:n,color:i,knockout:o,quality:s,alpha:a}=t,l=Math.round(t.distance);super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",re.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/s/l).toFixed(7)}`).replace(/__DIST__/gi,`${l.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:i,outerStrength:r,innerStrength:n,padding:l,knockout:o,alpha:a})}get color(){return t.utils.rgb2hex(this.uniforms.glowColor)}set color(e){t.utils.hex2rgb(e,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength(e){this.uniforms.outerStrength=e}get innerStrength(){return this.uniforms.innerStrength}set innerStrength(e){this.uniforms.innerStrength=e}get knockout(){return this.uniforms.knockout}set knockout(e){this.uniforms.knockout=e}get alpha(){return this.uniforms.alpha}set alpha(e){this.uniforms.alpha=e}};let ie=ne;ie.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var oe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n";const se=class extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",oe.replace("${perlin}","vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n")),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const r=Object.assign(se.defaults,e);this._angleLight=new t.Point,this.angle=r.angle,this.gain=r.gain,this.lacunarity=r.lacunarity,this.alpha=r.alpha,this.parallel=r.parallel,this.center=r.center,this.time=r.time}apply(e,t,r,n){const{width:i,height:o}=t.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=o,this.uniforms.aspect=o/i,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,r,n)}get angle(){return this._angle}set angle(e){this._angle=e;const r=e*t.DEG_TO_RAD;this._angleLight.x=Math.cos(r),this._angleLight.y=Math.sin(r)}get gain(){return this.uniforms.gain}set gain(e){this.uniforms.gain=e}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(e){this.uniforms.lacunarity=e}get alpha(){return this.uniforms.alpha}set alpha(e){this.uniforms.alpha=e}};let ae=se;ae.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};class le extends t.Filter{constructor(){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\n// https://en.wikipedia.org/wiki/Luma_(video)\nconst vec3 weight = vec3(0.299, 0.587, 0.114);\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(\n        vec3(color.r * weight.r + color.g * weight.g  + color.b * weight.b),\n        color.a\n    );\n}\n")}}const ue=class extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float uHue;\nuniform float uAlpha;\nuniform bool uColorize;\nuniform float uSaturation;\nuniform float uLightness;\n\n// https://en.wikipedia.org/wiki/Luma_(video)\nconst vec3 weight = vec3(0.299, 0.587, 0.114);\n\nfloat getWeightedAverage(vec3 rgb) {\n    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;\n}\n\n// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243\nconst vec3 k = vec3(0.57735, 0.57735, 0.57735);\n\nvec3 hueShift(vec3 color, float angle) {\n    float cosAngle = cos(angle);\n    return vec3(\n    color * cosAngle +\n    cross(k, color) * sin(angle) +\n    k * dot(k, color) * (1.0 - cosAngle)\n    );\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    vec4 result = color;\n\n    // colorize\n    if (uColorize) {\n        result.rgb = vec3(getWeightedAverage(result.rgb), 0., 0.);\n    }\n\n    // hue\n    result.rgb = hueShift(result.rgb, uHue);\n\n    // saturation\n    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js\n    float average = (result.r + result.g + result.b) / 3.0;\n\n    if (uSaturation > 0.) {\n        result.rgb += (average - result.rgb) * (1. - 1. / (1.001 - uSaturation));\n    } else {\n        result.rgb -= (average - result.rgb) * uSaturation;\n    }\n\n    // lightness\n    result.rgb = mix(result.rgb, vec3(ceil(uLightness)) * color.a, abs(uLightness));\n\n    // alpha\n    gl_FragColor = mix(color, result, uAlpha);\n}\n"),this._hue=0;const t=Object.assign({},ue.defaults,e);Object.assign(this,t)}get hue(){return this._hue}set hue(e){this._hue=e,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get colorize(){return this.uniforms.uColorize}set colorize(e){this.uniforms.uColorize=e}get lightness(){return this.uniforms.uLightness}set lightness(e){this.uniforms.uLightness=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}};let ce=ue;ce.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};class fe extends t.Filter{constructor(e=[0,0],r=5,n=0){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n"),this.kernelSize=5,this.uniforms.uVelocity=new Float32Array(2),this._velocity=new t.ObservablePoint(this.velocityChanged,this),this.setVelocity(e),this.kernelSize=r,this.offset=n}apply(e,t,r,n){const{x:i,y:o}=this.velocity;this.uniforms.uKernelSize=0!==i||0!==o?this.kernelSize:0,e.applyFilter(this,t,r,n)}set velocity(e){this.setVelocity(e)}get velocity(){return this._velocity}setVelocity(e){if(Array.isArray(e)){const[t,r]=e;this._velocity.set(t,r)}else this._velocity.copyFrom(e)}velocityChanged(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=1+(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)}set offset(e){this.uniforms.uOffset=e}get offset(){return this.uniforms.uOffset}}var de="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n";class he extends t.Filter{constructor(e,t=.05,r=e.length){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",de.replace(/%maxColors%/g,r.toFixed(0))),this._replacements=[],this._maxColors=0,this.epsilon=t,this._maxColors=r,this.uniforms.originalColors=new Float32Array(3*r),this.uniforms.targetColors=new Float32Array(3*r),this.replacements=e}set replacements(e){const r=this.uniforms.originalColors,n=this.uniforms.targetColors,i=e.length;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);r[3*i]=-1;for(let o=0;o<i;o++){const i=e[o];let s=i[0];"number"==typeof s?s=t.utils.hex2rgb(s):i[0]=t.utils.rgb2hex(s),r[3*o]=s[0],r[3*o+1]=s[1],r[3*o+2]=s[2];let a=i[1];"number"==typeof a?a=t.utils.hex2rgb(a):i[1]=t.utils.rgb2hex(a),n[3*o]=a[0],n[3*o+1]=a[1],n[3*o+2]=a[2]}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}set epsilon(e){this.uniforms.epsilon=e}get epsilon(){return this.uniforms.epsilon}}const me=class extends t.Filter{constructor(e,t=0){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n"),this.seed=0,this.uniforms.dimensions=new Float32Array(2),"number"==typeof e?(this.seed=e,e=void 0):this.seed=t,Object.assign(this,me.defaults,e)}apply(e,t,r,n){var i,o;this.uniforms.dimensions[0]=null==(i=t.filterFrame)?void 0:i.width,this.uniforms.dimensions[1]=null==(o=t.filterFrame)?void 0:o.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,r,n)}set sepia(e){this.uniforms.sepia=e}get sepia(){return this.uniforms.sepia}set noise(e){this.uniforms.noise=e}get noise(){return this.uniforms.noise}set noiseSize(e){this.uniforms.noiseSize=e}get noiseSize(){return this.uniforms.noiseSize}set scratch(e){this.uniforms.scratch=e}get scratch(){return this.uniforms.scratch}set scratchDensity(e){this.uniforms.scratchDensity=e}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(e){this.uniforms.scratchWidth=e}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(e){this.uniforms.vignetting=e}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(e){this.uniforms.vignettingAlpha=e}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(e){this.uniforms.vignettingBlur=e}get vignettingBlur(){return this.uniforms.vignettingBlur}};let ge=me;ge.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var ve="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterClamp;\n\nuniform float uAlpha;\nuniform vec2 uThickness;\nuniform vec4 uColor;\nuniform bool uKnockout;\n\nconst float DOUBLE_PI = 2. * 3.14159265358979323846264;\nconst float ANGLE_STEP = ${angleStep};\n\nfloat outlineMaxAlphaAtPos(vec2 pos) {\n    if (uThickness.x == 0. || uThickness.y == 0.) {\n        return 0.;\n    }\n\n    vec4 displacedColor;\n    vec2 displacedPos;\n    float maxAlpha = 0.;\n\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {\n        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);\n        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);\n        displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, displacedColor.a);\n    }\n\n    return maxAlpha;\n}\n\nvoid main(void) {\n    vec4 sourceColor = texture2D(uSampler, vTextureCoord);\n    vec4 contentColor = sourceColor * float(!uKnockout);\n    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);\n    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);\n    gl_FragColor = contentColor + outlineColor;\n}\n";const pe=class extends t.Filter{constructor(e=1,t=0,r=.1,n=1,i=!1){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",ve.replace(/\$\{angleStep\}/,pe.getAngleStep(r))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=n,this.uniforms.uKnockout=i,Object.assign(this,{thickness:e,color:t,quality:r,alpha:n,knockout:i})}static getAngleStep(e){const t=Math.max(e*pe.MAX_SAMPLES,pe.MIN_SAMPLES);return(2*Math.PI/t).toFixed(7)}apply(e,t,r,n){this.uniforms.uThickness[0]=this._thickness/t._frame.width,this.uniforms.uThickness[1]=this._thickness/t._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,e.applyFilter(this,t,r,n)}get alpha(){return this._alpha}set alpha(e){this._alpha=e}get color(){return t.utils.rgb2hex(this.uniforms.uColor)}set color(e){t.utils.hex2rgb(e,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(e){this._knockout=e}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this.padding=e}};let xe=pe;xe.MIN_SAMPLES=1,xe.MAX_SAMPLES=100;class ye extends t.Filter{constructor(e=10){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n"),this.size=e}get size(){return this.uniforms.size}set size(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e}}class Ce extends t.Filter{constructor(e=0,t=[0,0],r=5,n=-1){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n"),this._angle=0,this.angle=e,this.center=t,this.kernelSize=r,this.radius=n}apply(e,t,r,n){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,t,r,n)}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180}get angle(){return this._angle}get center(){return this.uniforms.uCenter}set center(e){this.uniforms.uCenter=e}get radius(){return this.uniforms.uRadius}set radius(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e}}const _e=class extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n"),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,_e.defaults,e)}apply(e,t,r,n){var i,o;this.uniforms.dimensions[0]=null==(i=t.filterFrame)?void 0:i.width,this.uniforms.dimensions[1]=null==(o=t.filterFrame)?void 0:o.height,this.uniforms.time=this.time,e.applyFilter(this,t,r,n)}set mirror(e){this.uniforms.mirror=e}get mirror(){return this.uniforms.mirror}set boundary(e){this.uniforms.boundary=e}get boundary(){return this.uniforms.boundary}set amplitude(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]}get waveLength(){return this.uniforms.waveLength}set alpha(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]}get alpha(){return this.uniforms.alpha}};let be=_e;be.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};class Se extends t.Filter{constructor(e=[-10,0],t=[0,10],r=[0,0]){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n"),this.red=e,this.green=t,this.blue=r}get red(){return this.uniforms.red}set red(e){this.uniforms.red=e}get green(){return this.uniforms.green}set green(e){this.uniforms.green=e}get blue(){return this.uniforms.blue}set blue(e){this.uniforms.blue=e}}const Te=class extends t.Filter{constructor(e=[0,0],t,r=0){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n"),this.center=e,Object.assign(this,Te.defaults,t),this.time=r}apply(e,t,r,n){this.uniforms.time=this.time,e.applyFilter(this,t,r,n)}get center(){return this.uniforms.center}set center(e){this.uniforms.center=e}get amplitude(){return this.uniforms.amplitude}set amplitude(e){this.uniforms.amplitude=e}get wavelength(){return this.uniforms.wavelength}set wavelength(e){this.uniforms.wavelength=e}get brightness(){return this.uniforms.brightness}set brightness(e){this.uniforms.brightness=e}get speed(){return this.uniforms.speed}set speed(e){this.uniforms.speed=e}get radius(){return this.uniforms.radius}set radius(e){this.uniforms.radius=e}};let Fe=Te;Fe.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};class Ae extends t.Filter{constructor(e,t=0,r=1){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n"),this._color=0,this.uniforms.dimensions=new Float32Array(2),this.uniforms.ambientColor=new Float32Array([0,0,0,r]),this.texture=e,this.color=t}apply(e,t,r,n){var i,o;this.uniforms.dimensions[0]=null==(i=t.filterFrame)?void 0:i.width,this.uniforms.dimensions[1]=null==(o=t.filterFrame)?void 0:o.height,e.applyFilter(this,t,r,n)}get texture(){return this.uniforms.uLightmap}set texture(e){this.uniforms.uLightmap=e}set color(e){const r=this.uniforms.ambientColor;"number"==typeof e?(t.utils.hex2rgb(e,r),this._color=e):(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],this._color=t.utils.rgb2hex(r))}get color(){return this._color}get alpha(){return this.uniforms.ambientColor[3]}set alpha(e){this.uniforms.ambientColor[3]=e}}class ze extends t.Filter{constructor(e){var r,n;super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n"),this.uniforms.blur=e.blur,this.uniforms.gradientBlur=e.gradientBlur,this.uniforms.start=null!=(r=e.start)?r:new t.Point(0,window.innerHeight/2),this.uniforms.end=null!=(n=e.end)?n:new t.Point(600,window.innerHeight/2),this.uniforms.delta=new t.Point(30,30),this.uniforms.texSize=new t.Point(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(e){this.uniforms.blur=e}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(e){this.uniforms.gradientBlur=e}get start(){return this.uniforms.start}set start(e){this.uniforms.start=e,this.updateDelta()}get end(){return this.uniforms.end}set end(e){this.uniforms.end=e,this.updateDelta()}}class we extends ze{updateDelta(){const e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,r=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/r,this.uniforms.delta.y=t/r}}class Pe extends ze{updateDelta(){const e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,r=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/r,this.uniforms.delta.y=e/r}}const Me=class extends t.Filter{constructor(e,r,n,i){super(),"number"==typeof e&&(t.utils.deprecation("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),e={blur:e,gradientBlur:r,start:n,end:i}),e=Object.assign({},Me.defaults,e),this.tiltShiftXFilter=new we(e),this.tiltShiftYFilter=new Pe(e)}apply(e,t,r,n){const i=e.getFilterTexture();this.tiltShiftXFilter.apply(e,t,i,1),this.tiltShiftYFilter.apply(e,i,r,n),e.returnFilterTexture(i)}get blur(){return this.tiltShiftXFilter.blur}set blur(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e}get start(){return this.tiltShiftXFilter.start}set start(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e}get end(){return this.tiltShiftXFilter.end}set end(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e}};let De=Me;De.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};const ke=class extends t.Filter{constructor(e){super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n"),Object.assign(this,ke.defaults,e)}get offset(){return this.uniforms.offset}set offset(e){this.uniforms.offset=e}get radius(){return this.uniforms.radius}set radius(e){this.uniforms.radius=e}get angle(){return this.uniforms.angle}set angle(e){this.uniforms.angle=e}};let Oe=ke;Oe.defaults={radius:200,angle:4,padding:20,offset:new t.Point};var Re="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Ee=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;const Le=class extends t.Filter{constructor(e){const t=Object.assign(Le.defaults,e),{maxKernelSize:r}=t,n=((e,t)=>{var r={};for(var n in e)je.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Ee)for(var n of Ee(e))t.indexOf(n)<0&&Ie.call(e,n)&&(r[n]=e[n]);return r})(t,["maxKernelSize"]);super("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",Re.replace("${maxKernelSize}",r.toFixed(1))),Object.assign(this,n)}get center(){return this.uniforms.uCenter}set center(e){this.uniforms.uCenter=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius(e){this.uniforms.uInnerRadius=e}get radius(){return this.uniforms.uRadius}set radius(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e}};let Ve=Le;return Ve.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},e.AdjustmentFilter=i,e.AdvancedBloomFilter=u,e.AsciiFilter=c,e.BevelFilter=f,e.BloomFilter=d,e.BulgePinchFilter=m,e.CRTFilter=X,e.ColorGradientFilter=j,e.ColorMapFilter=I,e.ColorOverlayFilter=L,e.ColorReplaceFilter=V,e.ConvolutionFilter=N,e.CrossHatchFilter=G,e.DotFilter=q,e.DropShadowFilter=Q,e.EmbossFilter=J,e.GlitchFilter=te,e.GlowFilter=ie,e.GodrayFilter=ae,e.GrayscaleFilter=le,e.HslAdjustmentFilter=ce,e.KawaseBlurFilter=o,e.MotionBlurFilter=fe,e.MultiColorReplaceFilter=he,e.OldFilmFilter=ge,e.OutlineFilter=xe,e.PixelateFilter=ye,e.RGBSplitFilter=Se,e.RadialBlurFilter=Ce,e.ReflectionFilter=be,e.ShockwaveFilter=Fe,e.SimpleLightmapFilter=Ae,e.TiltShiftAxisFilter=ze,e.TiltShiftFilter=De,e.TiltShiftXFilter=we,e.TiltShiftYFilter=Pe,e.TwistFilter=Oe,e.ZoomBlurFilter=Ve,Object.defineProperty(e,"__esModule",{value:!0}),e}({},PIXI,PIXI.filters,PIXI.filters);Object.assign(PIXI.filters,__filters);
//# sourceMappingURL=pixi-filters.js.map
