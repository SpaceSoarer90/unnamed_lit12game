//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.54;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.54] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 * 
 * <Conserve: x%>
 * 
 * - Used for: Item
 * - Gives the item a percent chance when used to not consume the item.
 * - Replace 'x' with a number representing the percent chance to successfully
 *   conserve the item.
 * - If an item cannot be consumed, conserve chance will be 100% regardless.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *   option (only when selling).
 * - Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 *   - Default priority level is '50'.
 * - Items, weapons, and armors with higher priority values will be sorted
 *   higher up on the list while lower values will be lower on the list.
 * 
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 * 
 * <Added EType: x>
 * <Added ETypes: x, x, x>
 * 
 * - Used for: Armor Notetags
 * - This is for armors only and does NOT work with weapons!
 * - Allows a piece of armor to belong to multiple ETypes. This means a glove
 *   can be equipped as "Armgear" or as an "Accessory" if you so choose.
 * - Replace 'x' with a number representing the ID of the EType you wish to add
 *   to the list of ETypes.
 *   - Insert multiple 'x' entries to add more than one EType ID.
 * 
 * ---
 * 
 * <Cursed>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this weapon or armor is equipped, it cannot manually be removed by the
 *   player until it is purified.
 * - To remove it, it must be done by event commands, script calls, or through
 *   the Purify-related Plugin Commands provided by this plugin.
 * - Once purified, the weapon or armor will become unequipped unless it has a
 *   purify transformation.
 *   - If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * - If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become cursed
 *   in order to allow free weapon swapping. Weaponry will not be cursed
 *   if VisuMZ_2_WeaponSwapSystem is installed.
 * 
 * ---
 * 
 * <Purify Transform: id>
 * <Purify Transform: name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this notetag is present on a <Cursed> weapon or armor, then upon the
 *   actor receiving purification, the weapon or armor will transform into a
 *   different item.
 * - Replace 'id' with a number representing the transformed weapon/armor's ID.
 * - Replace 'name' with text representing the transformed weapon/armor's name.
 * - Weapons can only transform into weapons.
 * - Armors can only transform into armors.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 * 
 * '''WARNING!''' If you are trying to calculate a value based off a full
 * parameter value, such as "ATK = user.atk * 0.10", it's going to break and
 * will cause an infinite loop. Use base parameter values instead.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 * 
 * <Buy Turn On Switch: x>
 * <Buy Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon buying.
 * 
 * ---
 * 
 * <Buy Turn Off Switch: x>
 * <Buy Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon buying.
 * 
 * ---
 * 
 * <Sell Turn On Switch: x>
 * <Sell Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon selling.
 * 
 * ---
 * 
 * <Sell Turn Off Switch: x>
 * <Sell Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon selling.
 * 
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Purify Plugin Commands ===
 * 
 * ---
 * 
 * Purify: Target Actor(s)
 * - Purifies target actor(s) of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 * ---
 * 
 * Purify: Whole Party
 * - Purifies whole party of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 * 
 *     Sort By:
 *     - Sort this category (in Scene_Item and Scene_Shop only) this way.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *   Cursed Equip Popup:
 *   - Text popup appears when an actor equips a cursed weapon/armor.
 *   - Text codes allowed.
 *   - Requires VisuMZ_0_CoreEngine!
 *   - Empty to not use.
 *   -  %1 - Actor, %2 - Equip, %3 - Icon.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes for equips only.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.54: October 17, 2024
 * * Feature Update!
 * ** If "Modern Controls" is selected while "Remove Equip" and "Optimize" are
 *    gone from the Equip Menu, right click will exit the menu. Feature added
 *    by Arisu.
 * 
 * Version 1.53: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added warning to <JS Parameters>:
 * *** If you are trying to calculate a value based off a full parameter value,
 *     such as "ATK = user.atk * 0.10", it's going to break and will cause an
 *     infinite loop. Use base parameter values instead.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *      option (only when selling).
 * **** Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 * **** Default priority level is '50'.
 * **** Items, weapons, and armors with higher priority values will be sorted
 *      higher up on the list while lower values will be lower on the list.
 * 
 * Version 1.52: May 16, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Item Categories > Category List > Category > Sorted By:
 * **** You can now sort specific item categories by ID or Name.
 * **** Only usable within Scene_Item and Scene_Shop.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.51: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where if an item is unequipped, it may cause a crash. Fix
 *    made by Arisu.
 * ** Fixed a bug where <Proxy: id> did not properly give the proxy item. Fix
 *    made by Arisu.
 * 
 * Version 1.50: November 16, 2023
 * * Bug Fixes!
 * ** <JS Buy Price> and <JS Sell Price> was not working properly. Fix made
 *    by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Cursed>
 * **** If this weapon or armor is equipped, it cannot manually be removed by
 *      the player until it is purified.
 * **** To remove it, it must be done by event commands, script calls, or
 *     through the Purify-related Plugin Commands provided by this plugin.
 * **** Once purified, the weapon or armor will become unequipped unless it has
 *     a purify transformation.
 * **** If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * **** If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become
 *      cursed in order to allow free weapon swapping. Weaponry will not be
 *      cursed if VisuMZ_2_WeaponSwapSystem is installed.
 * *** <Purify Transform: id>
 * *** <Purify Transform: name>
 * **** If this notetag is present on a <Cursed> weapon or armor, then upon the
 *      actor receiving purification, the weapon or armor will transform into a
 *      different item.
 * ** New Plugin Commands added by Arisu:
 * *** Purify: Target Actor(s)
 * **** Purifies target actor(s) of any cursed weapons or armors.
 * *** Purify: Whole Party
 * **** Purifies whole party of any cursed weapons or armors.
 * ** Added "Cursed Equip Popup" to Equip Scene Plugin Parameters.
 * *** Text popup appears when an actor equips a cursed weapon/armor.
 * ** Added "Ally or Enemy" or "Enemy or Ally" scopes to Shop Status Window
 *    Plugin Parameters.
 * *** If unused, will default to "1 Ally" or "1 Enemy" like usual.
 *     Added by Irina.
 * 
 * Version 1.49: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a problem where for weapon types, all weapon types are listed in
 *    the equip menu even when the actor cannot equip them (though they would
 *    be disabled). Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia and sponsored by AndyL:
 * *** <Added EType: x>
 * *** <Added ETypes: x, x, x>
 * **** This is for armors only and does NOT work with weapons!
 * **** Allows a piece of armor to belong to multiple ETypes. This means a
 *      glove can be equipped as "Armgear" or as an "Accessory" if you so
 *      choose.
 * 
 * Version 1.48: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help window position of the non-updated layout
 *    would appear in the wrong position. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized when weapons and armors exceed 2000
 *    in database quantity.
 * 
 * Version 1.47: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the shop status window to display incorrect
 *    removed buffs and debuffs. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Changes made to dynamic shop listings in order to update upon listing
 *    changes rather than having to enter and exit the shop again. Update made
 *    by Arisu.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by AndyL:
 * *** <Conserve: x%>
 * **** Gives the item a percent chance when used to not consume the item.
 * *** <Buy Turn On Switches: x, x, x>
 * *** <Buy Turn Off Switches: x, x, x>
 * *** <Sell Turn On Switches: x, x, x>
 * *** <Sell Turn Off Switches: x, x, x>
 * **** When buying/selling an item, weapon, or armor with these notetags,
 *      turn on/off switch(es) 'x'.
 * *** New Plugin Parameters added by Arisu:
 * **** Params > Settings > Shop Status Window > Equipment Data > Delay MS:
 * ***** How many milliseconds (MS) to delay the preview update?
 * ***** This is to prevent lag spikes for equips only.
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Purify
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyActors
 * @text Purify: Target Actor(s)
 * @desc Purifies target actor(s) of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyParty
 * @text Purify: Whole Party
 * @desc Purifies whole party of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","CursedTextPopup:json":"\"%1 is cursed by %3%2!\"","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","equipCmdDesc:json":"\"Pick and choose equipment to change.\"","CommandAddOptimize:eval":"true","optimizeCmdDesc:json":"\"Equip the strongest available equipment.\"","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","clearCmdDesc:json":"\"Remove all available equipment.\"","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","EquipDelayMS:num":"240","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","ScopeAllyOrEnemy:str":"Ally/Enemy","ScopeEnemyOrAlly:str":"Enemy/Ally","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 * @param SortBy:str
 * @text Sorted By
 * @type select
 * @option ID
 * @option Name
 * @desc Sort this category (in Scene_Item and Scene_Shop only) this way.
 * @default ID
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param CursedTextPopup:json
 * @text Cursed Equip Popup
 * @parent General
 * @type note
 * @desc %1 - Actor, %2 - Equip, %3 - Icon. Text codes allowed.
 * Requires VisuMZ_0_CoreEngine! Empty to not use.
 * @default "%1 is cursed by %3%2!"
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param EquipDelayMS:num
 * @text Delay MS
 * @parent EquipData
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes for equips only.
 * @default 240
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 * @text Data Settings
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param ScopeAllyOrEnemy:str
 * @text Ally or Enemy
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Ally or Enemy> notetag.
 * @default Ally/Enemy
 *
 * @param ScopeEnemyOrAlly:str
 * @text Enemy or Ally
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Enemy or Ally> notetag.
 * @default Enemy/Ally
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

const _0x28fd0f=_0x4a54;(function(_0x218299,_0x55ce4d){const _0x5822a3=_0x4a54,_0x30bffb=_0x218299();while(!![]){try{const _0x5a6c8c=parseInt(_0x5822a3(0x274))/0x1+parseInt(_0x5822a3(0x36b))/0x2+-parseInt(_0x5822a3(0x34d))/0x3*(parseInt(_0x5822a3(0x279))/0x4)+-parseInt(_0x5822a3(0x2c4))/0x5*(-parseInt(_0x5822a3(0x16d))/0x6)+-parseInt(_0x5822a3(0x2b7))/0x7+parseInt(_0x5822a3(0x2d8))/0x8*(-parseInt(_0x5822a3(0x3fe))/0x9)+parseInt(_0x5822a3(0xdb))/0xa;if(_0x5a6c8c===_0x55ce4d)break;else _0x30bffb['push'](_0x30bffb['shift']());}catch(_0x1d8288){_0x30bffb['push'](_0x30bffb['shift']());}}}(_0x2f78,0x2c4c0));function _0x2f78(){const _0x4fcc92=['drawItemHitType','addOptimizeCommand','ShopListingRegExp','activateItemWindow','162yStCPP','equipSlotIndex','updatedLayoutStyle','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','drawUpdatedParamName','tpGain','SellTurnSwitchOff','getItemEffectsMpDamageLabel','allowCreateStatusWindow','getItemSuccessRateText','updateMoneyAmount','commandSellItemsEquipsCore','MaxWeapons','CheckCursedItemMsg','getItemHitTypeText','CannotEquipMarker','ItemMenuStatusRect','loadCharacter','trim','isVisuMzLocalizationEnabled','HP\x20DAMAGE','optKeyItemsNumber','hasItem','_itemWindow','numItems','isEquipCommandEnabled','commandNameWindowDrawText','+%1%','Scene_Shop_doSell','BorderRegExp','253186brHcJE','addInnerChild','HIT\x20TYPE','innerHeight','addShopTrackingItemSell','drawItemActorMenuImage','getNextAvailableEtypeId','processCursorHomeEndTrigger','item','isPartyArtifact','ExtDisplayedParams','ItemSceneAdjustItemList','isTriggered','Scene_Item_createItemWindow','artifactIDs','getItemEffectsTpDamageText','Scene_Shop_onCategoryCancel','formula','createSlotWindow','getShopTrackingItemSell','limitedPageUpDownSceneCheck','gainItem','smoothScrollTo','canEquipArmor','Window_Selectable_refresh','object','ADDED\x20EFFECTS','drawItemCustomEntries','hitType','sellingPrice','loadSystem','move','_helpWindow','callUpdateHelp','removeStateBuffChanges','param','BuyPriceJS','AllItems','removeBuff','Text','ShiftShortcutKey','_item','Scene_Equip_helpWindowRect','_calculatingJSParameters','Game_Party_gainItem_artifact','fill','postCreateSlotWindowItemsEquipsCore','iconText','getItemEffects','_weaponIDs','categoryWindowRect','slotWindowRect','Scene_Equip_statusWindowRect','sellPriceRate','onCategoryCancel','Parse_Notetags_ParamValues','createBitmap','setHp','setNewItem','money','\x5cI[%1]','fontFace','mainFontFace','constructor','activate','value1','getItemSuccessRateLabel','Parse_Notetags_EnableJS','addEquipCommand','every','statusWidth','Speed1000','CursedTextPopup','Scene_Equip_onSlotOk','maxVisibleItems','AGI','_itemData','cursorDown','meetsEquipRequirement','actorId','commandEquip','tradeItemWithParty','smallParamFontSize','baseSellingPrice','getPrototypeOf','bind','armor-%1','Scene_Equip','damageColor','BatchShop','parameters','updateCommandNameWindow','SpeedNeg1999','cursorPagedown','getItemEffectsHpDamageText','Game_BattlerBase_param','systemColor','Scene_Shop_create','_shopStatusMenuAlly','IconSet','removeDebuff','FontFace','Scene_Shop_createCategoryWindow','ARRAYNUM','Step1End','hpRate','_bypassReleaseUnequippableItemsItemsEquipsCore','isClicked','goodsToItem','paramJS','sell','deselect','ItemQuantityFmt','ParamChangeFontSize','Scene_Item_create','getItemOccasionText','Window_ItemList_colSpacing','onSlotCancel','drawCustomShopGraphicLoad','fillRect','sortListItemScene','isGoodShown','getItemEffectsTpDamageLabel','WEAPON','statusWindowRectItemsEquipsCore','getItemEffectsHpRecoveryText','canUse','VisuMZ_0_CoreEngine','processTouchModernControls','createStatusWindow','Game_Actor_forceChangeEquip','_statusWindow','setMp','commandWindowRectItemsEquipsCore','getItemConsumableLabel','HideAnySwitches','drawParamName','addWindow','onDatabaseLoaded','defaultItemMax','Actors','_goods','EquipParams','index','drawItemDamage','Window_Selectable_setHelpWindowItem','proxyItem','138015KvUfFt','_numberWindow','colSpacing','helpWindowRectItemsEquipsCore','isHovered','getItemsEquipsCoreBackColor1','Scene_Equip_createCommandWindow','elements','start','middle','items','note','NUM','W%1','buttonAssistText3','ParseWeaponNotetags','KeyItemProtect','revertGlobalNamespaceVariables','ParseArmorNotetags','alterSkillName','FieldUsable','auto','RemoveEquipIcon','optimizeEquipments','Scene_Shop_onSellOk','itemTextAlign','Speed0','getMenuImage','includes','(%1)','DrawIcons','resetFontSettings','EVAL','mainAreaHeight','mainAreaTop','Scene_Shop_categoryWindowRect','DAMAGE\x20MULTIPLIER','Damage\x20Formula\x20Error\x20for\x20%1','filter','armor','_armorIDs','Game_Actor_changeEquip','allMembers','itemLineRect','_forcedSlots','Scene_Battle','DrawPortraitJS','ItemQuantityFontSize','prepareRefreshItemsEquipsCoreLayout','isArtifact','postCreateItemWindowModernControls','Window_EquipItem_isEnabled','Game_Actor_paramPlus','mainCommandWidth','ARMOR','maxCols','convertInitEquipsToItems','troopArtifactIDs','REPEAT','setObject','onTouchOk','equips','MAT','initNewItemsList','isDrawItemNumber','CmdIconOptimize','_buyWindow','PurifyActors','categories','_allowArtifactTraitObjects','ElementNone','mainAreaBottom','buyWindowRect','RegExp','_money','parse','isOpen','LabelSelfGainTP','cancel','getItemEffectsMpDamageText','itypeId','STRUCT','some','optimizeCmdDesc','Window_ItemList_maxCols','getInputMultiButtonStrings','ScopeRandomEnemies','map','processCursorMove','BattleUsable','addClearCommand','drawActorParamDifference','_tempActorA','isEquipItem','Scene_Shop_commandWindowRect','LabelDamageMP','maxBattleMembers','hideNewLabelSprites','refreshDelay','_scrollDuration','innerWidth','Scene_Item_itemWindowRect','DamageType%1','onCategoryCancelItemsEquipsCore','setItem','Scene_Shop_commandBuy','drawUpdatedParamValueDiff','drawItemOccasion','exit','canConsumeItem','onCategoryOk','isOptimizeEquipOk','ParseItemNotetags','TP\x20DAMAGE','sort','contentsBack','Window_ShopSell_isEnabled','drawText','getItemEffectsRemovedStatesBuffsLabel','actorParams','categoryItemTypes','isUseModernControls','?????','bestEquipItem','_goodsCount','needsNewTempActor','addItemCategory','getTextColor','NeverUsable','clear','isShiftRemoveShortcutEnabled','changeEquipById','Game_BattlerBase_paramPlus_artifact','drawItemEffectsRemovedStatesBuffs','cursorRight','getItemEffectsMpRecoveryLabel','Game_Party_numItems','scope','MaxIcons','random','Parse_Notetags_EquipSlots','contents','getItemHitTypeLabel','getMatchingInitEquip','getItemRepeatsText','Game_Actor_discardEquip','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Scene_Equip_onSlotCancel','uiInputPosition','isEquipped','updateCategoryNameWindow','isPlaytest','_buyWindowLastIndex','Game_Actor_equips_artifacts','_bypassNewLabel','onSlotOkAutoSelect','getEtypeIDs','isPageChangeRequested','_skillIDs','Scene_Shop_goldWindowRect','clearNewItem','maxItemAmount','text','makeItemList','Scene_Shop_buyingPrice','newLabelEnabled','getPurifyTransformation','isUseItemsEquipsCoreUpdatedLayout','getItemDamageAmountTextOriginal','Scene_Shop_numberWindowRect','refreshActorEquipSlotsIfUpdated','uiHelpPosition','left','Width','fontSizeRatio','process_VisuMZ_ItemsEquipsCore_Notetags','SwitchID','Scene_Equip_createSlotWindow','clamp','nonRemovableEtypes','drawItemStyleIcon','drawItem','price','previousActor','windowPadding','lineHeight','format','hasOwnProperty','AllArmors','_checkEquipRequirements','setHelpWindow','_shopStatusMenuMode','getClassRequirements','RegularItems','buyWindowRectItemsEquipsCore','_list','buttonAssistLargeIncrement','getItemDamageAmountTextBattleCore','_newLabelOpacityChange','push','rateHP','drawItemDamageAmount','select','isUseParamNamesWithIcons','VisuMZ_1_SkillsStatesCore','isProxyItem','SetupArtifactItemIDs','addBuyCommand','playOkSound','getColor','partyArtifacts','isCancelled','mainFontSize','isBattleTest','buttonAssistSmallIncrement','adjustHiddenShownGoods','onSellOk','textWidth','registerCommand','_getClassRequirements','geUpdatedLayoutStatusWidth','background','addLoadListener','MANUAL','Game_Party_consumeItem','CmdHideDisabled','_bypassProxy','slotWindowRectItemsEquipsCore','EFFECT_ADD_STATE','drawItemNumber','isDualWield','Scene_Shop_helpWindowRect','createSellWindow','getItemSpeedText','VisuMZ_1_BattleCore','smoothSelect','EQUIP_DELAY_MS','3493960YPMdLE','BackRectColor','_handlers','×%1','SortByIDandPriority','releaseUnequippableItems','atk','categoryNameWindowDrawText','getArmorIdWithName','playEquip','elementId','DrawParamJS','hideDisabledCommands','members','processDrawIcon','onMenuImageLoad','getProxyItem','isItem','isNewItem','+%1','drawItemQuantity','isEnabled','weaponTypes','inBattle','getItemDamageElementText','getItemEffectsSelfTpGainText','discardEquip','ITEMS_EQUIPS_CORE','BuyTurnSwitchOn','commandWindowRect','Scene_Equip_commandEquip','meetsItemConditions','SellPriceRate','drawUpdatedBeforeParamValue','loadFaceImages','getShopTrackingItemBuy','ItemScene','switchProxyItem','possession','values','isBuyCommandEnabled','getItemQuantityText','_resetFontColor','onTouchSelect','SpeedNeg999','updateHelp','user','numberWindowRect','setItemDelay','getShopTrackingGoldBuy','_sellWindow','weapon-%1','etypeId','equipCmdDesc','setText','createCommandNameWindow','drawItemEffectsHpRecovery','onTouchCancel','ParamValueFontSize','itemDataFontSize','addState','processCursorSpecialCheckModernControls','mpRate','canSortListItemScene','buy','isArray','AlwaysUsable','getClassIdWithName','value','addShopTrackingGoldSell','_commandNameWindow','keyItem','active','isClearCommandEnabled','Window_ItemList_item','paramValueByName','isEquipTypeSealed','categoryList','buffIconIndex','getItemIdWithName','shift','ConvertParams','Scene_Boot_onDatabaseLoaded','onTouchSelectModernControls','pagedown','getEtypeIDsCache','CommandAddOptimize','center','show','Scene_Equip_itemWindowRect','createCategoryNameWindow','normalColor','USER\x20TP\x20GAIN','_getEquipRequirements','createNewLabelSprite','_cache_etypeIDs','JSON','optimize','actor','Game_BattlerBase_param_artifact','HiddenItemA','resetTextColor','drawItemEffectsTpDamage','EquipAdjustHpMp','refresh','gainTP','onSlotOk','process_VisuMZ_ItemsEquipsCore_RegExp','refreshItemsEquipsCoreNoMenuImage','calcEquipItemPerformance','buttonAssistText1','Settings','cursorPageup','Game_Party_initialize','addShopTrackingItem','popScene','REMOVED\x20EFFECTS','getItemEffectsMpRecoveryText','ParseAllNotetags','paramValueFontSize','equipSlots','OffsetX','test','forceChangeEquip','playCancel','onBuyOk','initialize','LabelDamageTP','Scene_Item','ScopeAlliesButUser','goldWindowRectItemsEquipsCore','%1%','checkItemConditionsSwitchNotetags','addShopTrackingItemBuy','SetupProxyItemGroup','_shopTrackingData','EnableLayout','isCommandEnabled','calcWindowHeight','MP\x20DAMAGE','isShowNew','blt','Categories','_newItemsList','drawActorCharacter','params','400884haQsTc','_etypeIDs','makeItemData','initShopTrackingData','ELEMENT','isEquipWtypeOk','dataId','Game_Party_setupBattleTestItems_artifact','drawItemEffects','length','buttonAssistItemListRequirement','scrollTo','prepare','_paramPlus','battleMembers','drawItemEffectsMpRecovery','consumable','Window_EquipItem_includes','postCreateCategoryWindowItemsEquipsCore','LabelRemove','occasion','round','ARRAYJSON','Window_ItemList_updateHelp','drawItemEffectsSelfTpGain','getItemEffectsAddedStatesBuffsLabel','buttonAssistSlotWindowShift','def','Game_Enemy_traitObjects_artifact','replace','A%1','anyEmptyEquipSlotsOfSameEtype','currentExt','numberWindowRectItemsEquipsCore','code','EFFECT_RECOVER_MP','postCreateItemsEquipsCore','isSoleArmorType','ShowAnySwitches','Game_Actor_isEquipChangeOk','parseLocalizedText','ARRAYFUNC','_category','Scene_Equip_create','consumeItem','getShopTrackingItem','powerUpColor','New','_scene','Window_ItemCategory_initialize','commandName','LabelHitType','reloadMapIfUpdated','drawItemConsumable','getItemEffectsTpRecoveryText','checkShiftRemoveShortcut','ShopScene','drawItemEquipType','paramBase','SwitchBuy','equip2','FontColor','determineBaseSellingPrice','cursorUp','paramPlusItemsEquipsCoreCustomJS','allowCommandWindowCursorUp','name','itemWindowRect','onBuyItem','process_VisuMZ_ItemsEquipsCore_EquipSlots','getItemRepeatsLabel','commandStyle','_customItemInfo','getItemDamageElementLabel','changeBuff','paramPlus','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Window_EquipStatus_refresh','isStackableArtifact','buttonAssistCategory','status','LabelRepeats','drawItemKeyData','prototype','sellWindowRect','modifiedBuyPriceItemsEquipsCore','getItemDamageAmountLabelOriginal','isMainMenuCoreMenuImageOptionAvailable','onActorChange','isEquipCommandAdded','getItemSpeedLabel','getItemDamageAmountLabelBattleCore','type','_slotId','Step3Start','isRepeated','drawNewLabelIcon','CmdStyle','Parse_Notetags_Category','_itemIDs','mdf','EFFECT_ADD_DEBUFF','FUNC','activateSellWindow','processHandling','drawParamsItemsEquipsCore','\x5cb%1\x5cb','isClearEquipOk','Window_ShopStatus_setItem','partyArtifactIDs','DrawItemData','_newLabelOpacityUpperLimit','hitIndex','EFFECT_REMOVE_STATE','isSoleWeaponType','getItemEffectsRemovedStatesBuffsText','ActorChangeEquipSlots','split','setBackgroundType','troopArtifacts','FadeLimit','buttonAssistKey2','drawItemScope','NAME','drawItemCost','drawUpdatedAfterParamValue','processShopCondListingOnBuyItem','QoL','ItemsEquipsCore','0000','(+%1)','categoryWindowRectItemsEquipsCore','drawItemEffectsMpDamage','_newLabelOpacity','changeEquipBase','maxItems','_doubleTouch','CmdIconEquip','Game_Actor_artifact','MP\x20RECOVERY','SPEED','ConvertNumberToString','getItemScopeText','nonOptimizeEtypes','visible','setTempActor','drawItemStyleIconText','DEF','isShiftShortcutKeyForRemove','StatusWindowWidth','processShiftRemoveShortcut','changePaintOpacity','VisuMZ_2_WeaponSwapSystem','playCursorSound','canEquip','drawRemoveItem','CmdIconCancel','iconHeight','purifyCursedEquips','flatHP','toUpperCase','commandSell','STR','category','_commandWindow','_actor','Scope%1','Scene_Shop_commandSell','forceResetEquipSlots','getItemEffectsTpRecoveryLabel','equipAdjustHpMp','boxWidth','sellWindowRectItemsEquipsCore','processDownCursorSpecialCheckModernControls','_categoryWindow','equip','AllWeapons','getShopTrackingData','setHandler','remove','agi','meetsItemConditionsJS','Parse_Notetags_Batch','itemEnableJS','setupBattleTestItems','getWeaponIdWithName','Param','foreground','isTroopArtifact','commandBuyItemsEquipsCore','maxmp','_classIDs','clearNewLabelFromItem','description','isCursedItem','LabelSpeed','effects','setItemWindow','Scene_Shop_activateSellWindow','isOptimizeCommandAdded','doSell','IncludeShopItem','CmdTextAlign','traitObjects','Step2End','drawItemDarkRect','Window_ShopBuy_item','isCursorMovable','HP\x20RECOVERY','icon','CommandAddClear','createItemWindow','addCancelCommand','StatusWindow','changeTextColor','isPressed','call','getItemColor','EFFECT_REMOVE_BUFF','width','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','create','isBottomHelpMode','Scene_Equip_commandWindowRect','Window_ShopBuy_goodsToItem','concat','drawItemEffectsAddedStatesBuffs','SwitchSell','Scene_Equip_onActorChange','Game_BattlerBase_canEquip_artifact','Step3End','log','Occasion%1','commandBuy','EquipScene','_dummyWindow','ActorResetEquipSlots','cursorLeft','height','indexOf','setShopStatusWindowMode','Scene_Shop_sellWindowRect','_categoryNameWindow','rateMP','categoryNameWindowCenter','version','isSceneShop','onBuyCancelItemsEquipsCore','isHoverEnabled','ElementWeapon','categoryNameWindowDrawBackground','isOpenAndActive','getItemDamageAmountLabel','Scene_Shop_onBuyOk','LayoutStyle','_newLabelSprites','UNDEFINED!','\x5cI[%1]%2','mat','Parse_Notetags_ParamJS','HitType%1','item-%1','EFFECT_GAIN_TP','58253nyoBvd','match','speed','Consumable','initNewLabelSprites','5492vgBXxZ','isEquipChangeOk','textLocale','TP\x20RECOVERY','allowShiftScrolling','CmdIconClear','max','isSellCommandEnabled','gold','placeNewLabel','itemWindowRectItemsEquipsCore','drawEquipData','NonRemoveETypes','NoChangeMarker','onSellOkItemsEquipsCore','equipItems','SellPriceJS','LabelSuccessRate','loadPicture','prepareNextScene','splice','isOptimizeCommandEnabled','===','equipTypes','LabelRecoverTP','HideAllSwitches','ScopeEnemyOrAlly','goldWindowRect','addShopTrackingGoldBuy','_tempActorB','damage','atypeId','right','placeItemNewLabel','Nonconsumable','Scene_Load_reloadMapIfUpdated','Pick\x20and\x20choose\x20equipment\x20to\x20change.','_tempActor','Window_Selectable_update','value2','isRightInputMode','ParseClassNotetags','Icon','Step1Start','ARRAYSTR','Game_Actor_tradeItemWithParty','meetsShopListingConditions','CoreEngine','addSellCommand','updateNewLabelOpacity','nextActor','helpDesc','makeDeepCopy','Scene_Shop_onBuyCancel','changeEquip','Parse_Notetags_Prices','uiMenuStyle','Translucent','Window_ItemList_makeItemList','toLowerCase','Window_ShopCommand_initialize','List','1528849TJMuRl','currentClass','KeyItems','Window_ShopBuy_price','floor','forceChangeEquipSlots','drawItemEffectsHpDamage','deepCopy','LabelConsume','getItemEffectsAddedStatesBuffsText','setCategory','createTempActorEquips','buttonAssistKey1','15BYmaHG','bitmap','categoryStyleCheck','createCommandWindow','prepareNewEquipSlotsOnLoad','iconWidth','_resetFontSize','fontSize','#%1','isEquipAtypeOk','ItemMenuStatusBgType','drawItemName','addChild','pageup','ARRAYSTRUCT','update','selfTP','isHandled','textSizeEx','drawParamText','136eItSrk','versionId','opacity','ATK','buyingPrice','weapon','DrawFaceJS','MDF','updateChangedSlots','buttonAssistRemove','Remove\x20all\x20available\x20equipment.','_allowArtifactParamBase','wtypeId','getShopTrackingGoldSell','Scene_Shop_createSellWindow','Window_Selectable_initialize','Scene_Item_createCategoryWindow','makeCommandList','artifacts','Window_ItemList_drawItem','commandNameWindowCenter','loseItem','flatMP','getDamageStyle','paramId','Scene_Shop_statusWindowRect','Game_BattlerBase_meetsItemConditions','removeBattleTestArtifacts','getItemsEquipsCoreBackColor2','resetShopSwitches','Scene_Item_helpWindowRect','_purchaseOnly','processShopCondListingOnSellItem','onSellItem','adjustItemWidthByStatus','Window_ShopBuy_refresh','Parse_Notetags_Sorting','isKeyItem','_buttonAssistWindow','addCommand','doBuy','itemPadding','ShopMenuStatusStandard','ScopeAllyOrEnemy','drawItemData','categoryStyle','removeState','getItemEffectsSelfTpGainLabel','addStateBuffChanges','paintOpacity','drawIcon','getEquipRequirements','Scene_Shop_buyWindowRect','itemHasEquipLimit','setStatusWindow','onTouchSelectModern','Step2Start','isArmor','statusWindowRect','helpAreaHeight','drawCustomShopGraphic','PurifyParty','paramchangeTextColor','Type','setValue','shouldCommandWindowExist','commandNameWindowDrawBackground','deactivate','getItemEffectsHpDamageLabel','hide','level','drawTextEx','isWeapon','Scene_ItemBase_activateItemWindow','getSkillIdWithName','getItemDamageAmountText','sortPriority','helpWindowRect','meetsItemConditionsNotetags','itemAt','textColor','CmdCancelRename','onSellCancel','getEmptyEquipSlotOfSameEtype','ceil','Scene_Item_categoryWindowRect','armorTypes','createCategoryWindow','powerDownColor','LabelRecoverHP','setupItemDamageTempActors','Blacklist','meetsClassRequirements','%1-%2','down','refreshCursor','_slotWindow','_data','getItemEffectsHpRecoveryLabel','helpDescriptionText','BuyTurnSwitchOff','sellPriceOfItem','isClearCommandAdded','top','commandStyleCheck','pop','processCursorMoveModernControls','Game_Item_setObject','onBuyCancel','_equips','iconIndex','drawItemEffectsTpRecovery','armors'];_0x2f78=function(){return _0x4fcc92;};return _0x2f78();}function _0x4a54(_0x31ff74,_0x20c3ac){const _0x2f7875=_0x2f78();return _0x4a54=function(_0x4a54b5,_0x59f62d){_0x4a54b5=_0x4a54b5-0x9f;let _0x46e4fc=_0x2f7875[_0x4a54b5];return _0x46e4fc;},_0x4a54(_0x31ff74,_0x20c3ac);}var label=_0x28fd0f(0x1ed),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x28fd0f(0x424)](function(_0x393bbe){const _0x131e13=_0x28fd0f;return _0x393bbe[_0x131e13(0x1bd)]&&_0x393bbe['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x28fd0f(0x14a)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0xdc532b,_0x2df48a){const _0xe842bd=_0x28fd0f;for(const _0x37f3b7 in _0x2df48a){if(_0x37f3b7[_0xe842bd(0x275)](/(.*):(.*)/i)){const _0x351853=String(RegExp['$1']),_0x32b6b9=String(RegExp['$2'])[_0xe842bd(0x20d)]()[_0xe842bd(0x35f)]();let _0xd960b,_0x14918d,_0x1ef4c2;switch(_0x32b6b9){case _0xe842bd(0x40a):_0xd960b=_0x2df48a[_0x37f3b7]!==''?Number(_0x2df48a[_0x37f3b7]):0x0;break;case _0xe842bd(0x3d2):_0x14918d=_0x2df48a[_0x37f3b7]!==''?JSON[_0xe842bd(0x449)](_0x2df48a[_0x37f3b7]):[],_0xd960b=_0x14918d['map'](_0x2319b4=>Number(_0x2319b4));break;case _0xe842bd(0x41e):_0xd960b=_0x2df48a[_0x37f3b7]!==''?eval(_0x2df48a[_0x37f3b7]):null;break;case'ARRAYEVAL':_0x14918d=_0x2df48a[_0x37f3b7]!==''?JSON[_0xe842bd(0x449)](_0x2df48a[_0x37f3b7]):[],_0xd960b=_0x14918d[_0xe842bd(0x455)](_0x683bf4=>eval(_0x683bf4));break;case _0xe842bd(0x13b):_0xd960b=_0x2df48a[_0x37f3b7]!==''?JSON[_0xe842bd(0x449)](_0x2df48a[_0x37f3b7]):'';break;case _0xe842bd(0x183):_0x14918d=_0x2df48a[_0x37f3b7]!==''?JSON[_0xe842bd(0x449)](_0x2df48a[_0x37f3b7]):[],_0xd960b=_0x14918d['map'](_0x5eaa0e=>JSON[_0xe842bd(0x449)](_0x5eaa0e));break;case _0xe842bd(0x1d3):_0xd960b=_0x2df48a[_0x37f3b7]!==''?new Function(JSON['parse'](_0x2df48a[_0x37f3b7])):new Function('return\x200');break;case _0xe842bd(0x196):_0x14918d=_0x2df48a[_0x37f3b7]!==''?JSON[_0xe842bd(0x449)](_0x2df48a[_0x37f3b7]):[],_0xd960b=_0x14918d[_0xe842bd(0x455)](_0x18d5a8=>new Function(JSON[_0xe842bd(0x449)](_0x18d5a8)));break;case _0xe842bd(0x20f):_0xd960b=_0x2df48a[_0x37f3b7]!==''?String(_0x2df48a[_0x37f3b7]):'';break;case _0xe842bd(0x2a5):_0x14918d=_0x2df48a[_0x37f3b7]!==''?JSON['parse'](_0x2df48a[_0x37f3b7]):[],_0xd960b=_0x14918d[_0xe842bd(0x455)](_0x4083f0=>String(_0x4083f0));break;case _0xe842bd(0x44f):_0x1ef4c2=_0x2df48a[_0x37f3b7]!==''?JSON['parse'](_0x2df48a[_0x37f3b7]):{},_0xdc532b[_0x351853]={},VisuMZ[_0xe842bd(0x12c)](_0xdc532b[_0x351853],_0x1ef4c2);continue;case _0xe842bd(0x2d2):_0x14918d=_0x2df48a[_0x37f3b7]!==''?JSON[_0xe842bd(0x449)](_0x2df48a[_0x37f3b7]):[],_0xd960b=_0x14918d['map'](_0x17f1c5=>VisuMZ['ConvertParams']({},JSON[_0xe842bd(0x449)](_0x17f1c5)));break;default:continue;}_0xdc532b[_0x351853]=_0xd960b;}}return _0xdc532b;},(_0x749b67=>{const _0x477f9f=_0x28fd0f,_0x6fa6b3=_0x749b67[_0x477f9f(0x1af)];for(const _0x39fc24 of dependencies){if(!Imported[_0x39fc24]){alert(_0x477f9f(0x490)[_0x477f9f(0xa8)](_0x6fa6b3,_0x39fc24)),SceneManager[_0x477f9f(0x46a)]();break;}}const _0x59ada4=_0x749b67[_0x477f9f(0x22e)];if(_0x59ada4['match'](/\[Version[ ](.*?)\]/i)){const _0x16e0de=Number(RegExp['$1']);_0x16e0de!==VisuMZ[label]['version']&&(alert(_0x477f9f(0x1b9)['format'](_0x6fa6b3,_0x16e0de)),SceneManager[_0x477f9f(0x46a)]());}if(_0x59ada4[_0x477f9f(0x275)](/\[Tier[ ](\d+)\]/i)){const _0x3a62b7=Number(RegExp['$1']);_0x3a62b7<tier?(alert(_0x477f9f(0x249)[_0x477f9f(0xa8)](_0x6fa6b3,_0x3a62b7,tier)),SceneManager[_0x477f9f(0x46a)]()):tier=Math[_0x477f9f(0x27f)](_0x3a62b7,tier);}VisuMZ[_0x477f9f(0x12c)](VisuMZ[label][_0x477f9f(0x14a)],_0x749b67[_0x477f9f(0x3c5)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x28fd0f(0x1af)],_0x28fd0f(0x1e1),_0x278a1d=>{const _0x48b05d=_0x28fd0f;VisuMZ[_0x48b05d(0x12c)](_0x278a1d,_0x278a1d);const _0x177aa4=_0x278a1d['Actors'][_0x48b05d(0x455)](_0x472640=>$gameActors[_0x48b05d(0x13d)](_0x472640)),_0x3129ad=_0x278a1d['Slots']['map'](_0x10c15e=>$dataSystem[_0x48b05d(0x290)][_0x48b05d(0x25c)](_0x10c15e[_0x48b05d(0x35f)]()));for(const _0xb2de59 of _0x177aa4){if(!_0xb2de59)continue;_0xb2de59[_0x48b05d(0x2bc)](_0x3129ad);}}),PluginManager[_0x28fd0f(0xc8)](pluginData[_0x28fd0f(0x1af)],_0x28fd0f(0x259),_0x374361=>{const _0x5c5667=_0x28fd0f;VisuMZ[_0x5c5667(0x12c)](_0x374361,_0x374361);const _0x49d20e=_0x374361[_0x5c5667(0x3f7)][_0x5c5667(0x455)](_0x3f2d42=>$gameActors[_0x5c5667(0x13d)](_0x3f2d42));for(const _0x5785bf of _0x49d20e){if(!_0x5785bf)continue;_0x5785bf[_0x5c5667(0x215)]();}}),PluginManager['registerCommand'](pluginData['name'],_0x28fd0f(0x441),_0x80d770=>{const _0x152c6c=_0x28fd0f;if($gameParty[_0x152c6c(0xf2)]())return;VisuMZ[_0x152c6c(0x12c)](_0x80d770,_0x80d770);const _0x3d57e1=_0x80d770[_0x152c6c(0x3f7)]['map'](_0x29be4c=>$gameActors[_0x152c6c(0x13d)](_0x29be4c));for(const _0x4260d5 of _0x3d57e1){if(!_0x4260d5)continue;_0x4260d5[_0x152c6c(0x20b)]();}}),PluginManager[_0x28fd0f(0xc8)](pluginData['name'],_0x28fd0f(0x315),_0x5164b8=>{const _0x4f31f4=_0x28fd0f;if($gameParty['inBattle']())return;$gameParty[_0x4f31f4(0x20b)]();}),PluginManager[_0x28fd0f(0xc8)](pluginData['name'],_0x28fd0f(0x3c4),_0x1abf2f=>{const _0x92cc7c=_0x28fd0f;VisuMZ[_0x92cc7c(0x12c)](_0x1abf2f,_0x1abf2f);const _0x1e4102=[],_0x4b8e25=_0x1abf2f[_0x92cc7c(0x333)][_0x92cc7c(0x455)](_0x46d9d9=>_0x46d9d9[_0x92cc7c(0x20d)]()[_0x92cc7c(0x35f)]()),_0x20149c=_0x1abf2f['Whitelist']['map'](_0x7a287d=>_0x7a287d[_0x92cc7c(0x20d)]()['trim']()),_0x2dd1a0=_0x1abf2f[_0x92cc7c(0x3d3)]>=_0x1abf2f[_0x92cc7c(0x2a4)]?_0x1abf2f['Step1Start']:_0x1abf2f[_0x92cc7c(0x3d3)],_0x222fb2=_0x1abf2f[_0x92cc7c(0x3d3)]>=_0x1abf2f[_0x92cc7c(0x2a4)]?_0x1abf2f['Step1End']:_0x1abf2f[_0x92cc7c(0x2a4)],_0x2a40e8=Array(_0x222fb2-_0x2dd1a0+0x1)[_0x92cc7c(0x398)]()[_0x92cc7c(0x455)]((_0x540077,_0x2aa8c8)=>_0x2dd1a0+_0x2aa8c8);for(const _0x5e6bd0 of _0x2a40e8){const _0x5db376=$dataItems[_0x5e6bd0];if(!_0x5db376)continue;if(!VisuMZ['ItemsEquipsCore'][_0x92cc7c(0x236)](_0x5db376,_0x4b8e25,_0x20149c))continue;_0x1e4102['push']([0x0,_0x5e6bd0,0x0,_0x5db376[_0x92cc7c(0xa4)]]);}const _0x27548e=_0x1abf2f['Step2End']>=_0x1abf2f['Step2Start']?_0x1abf2f['Step2Start']:_0x1abf2f['Step2End'],_0x481945=_0x1abf2f[_0x92cc7c(0x239)]>=_0x1abf2f['Step2Start']?_0x1abf2f[_0x92cc7c(0x239)]:_0x1abf2f[_0x92cc7c(0x310)],_0x5773b8=Array(_0x481945-_0x27548e+0x1)[_0x92cc7c(0x398)]()['map']((_0x2b9705,_0x458c11)=>_0x27548e+_0x458c11);for(const _0x32a7a6 of _0x5773b8){const _0x187c8d=$dataWeapons[_0x32a7a6];if(!_0x187c8d)continue;if(!VisuMZ[_0x92cc7c(0x1ed)][_0x92cc7c(0x236)](_0x187c8d,_0x4b8e25,_0x20149c))continue;_0x1e4102[_0x92cc7c(0xb5)]([0x1,_0x32a7a6,0x0,_0x187c8d['price']]);}const _0x14c894=_0x1abf2f['Step3End']>=_0x1abf2f[_0x92cc7c(0x1cb)]?_0x1abf2f[_0x92cc7c(0x1cb)]:_0x1abf2f[_0x92cc7c(0x253)],_0x370666=_0x1abf2f[_0x92cc7c(0x253)]>=_0x1abf2f[_0x92cc7c(0x1cb)]?_0x1abf2f[_0x92cc7c(0x253)]:_0x1abf2f[_0x92cc7c(0x1cb)],_0x44f20b=Array(_0x370666-_0x14c894+0x1)['fill']()[_0x92cc7c(0x455)]((_0x50d02f,_0x3f5189)=>_0x14c894+_0x3f5189);for(const _0x4c0c22 of _0x44f20b){const _0x50d3e1=$dataArmors[_0x4c0c22];if(!_0x50d3e1)continue;if(!VisuMZ[_0x92cc7c(0x1ed)][_0x92cc7c(0x236)](_0x50d3e1,_0x4b8e25,_0x20149c))continue;_0x1e4102[_0x92cc7c(0xb5)]([0x2,_0x4c0c22,0x0,_0x50d3e1[_0x92cc7c(0xa4)]]);}SceneManager['push'](Scene_Shop),SceneManager[_0x92cc7c(0x28c)](_0x1e4102,_0x1abf2f['PurchaseOnly']);}),VisuMZ[_0x28fd0f(0x1ed)]['IncludeShopItem']=function(_0x35b716,_0x151d81,_0x35fe99){const _0x5eeee4=_0x28fd0f;if(_0x35b716[_0x5eeee4(0x1af)][_0x5eeee4(0x35f)]()==='')return![];if(_0x35b716[_0x5eeee4(0x1af)][_0x5eeee4(0x275)](/-----/i))return![];const _0x5ee231=_0x35b716[_0x5eeee4(0x442)];if(_0x151d81[_0x5eeee4(0x176)]>0x0)for(const _0x46a4eb of _0x151d81){if(!_0x46a4eb)continue;if(_0x5ee231[_0x5eeee4(0x41a)](_0x46a4eb))return![];}if(_0x35fe99[_0x5eeee4(0x176)]>0x0){for(const _0x2488fd of _0x35fe99){if(!_0x2488fd)continue;if(_0x5ee231[_0x5eeee4(0x41a)](_0x2488fd))return!![];}return![];}return!![];},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x12d)]=Scene_Boot[_0x28fd0f(0x1c0)][_0x28fd0f(0x3f5)],Scene_Boot[_0x28fd0f(0x1c0)][_0x28fd0f(0x3f5)]=function(){const _0x405025=_0x28fd0f;this[_0x405025(0x146)](),VisuMZ[_0x405025(0x1ed)][_0x405025(0x12d)][_0x405025(0x245)](this),this[_0x405025(0x4ad)](),VisuMZ[_0x405025(0x1ed)]['SetupProxyItemGroups'](),VisuMZ[_0x405025(0x1ed)][_0x405025(0xbc)]();},Scene_Boot[_0x28fd0f(0x1c0)]['process_VisuMZ_ItemsEquipsCore_RegExp']=function(){const _0x4e9f33=_0x28fd0f;VisuMZ['ItemsEquipsCore'][_0x4e9f33(0x447)]={},VisuMZ[_0x4e9f33(0x1ed)]['RegExp']['EquipParams']=[],VisuMZ[_0x4e9f33(0x1ed)][_0x4e9f33(0x447)][_0x4e9f33(0x36a)]=[];const _0x531385=['MaxHP','MaxMP',_0x4e9f33(0x2db),_0x4e9f33(0x200),_0x4e9f33(0x43c),_0x4e9f33(0x2df),_0x4e9f33(0x3b6),'LUK'];for(const _0x2e87e9 of _0x531385){const _0x100136='<%1:[\x20]([\x5c+\x5c-]\x5cd+)>'['format'](_0x2e87e9);VisuMZ['ItemsEquipsCore'][_0x4e9f33(0x447)][_0x4e9f33(0x3f9)]['push'](new RegExp(_0x100136,'i'));const _0x370970=_0x4e9f33(0x1d7)[_0x4e9f33(0xa8)](_0x2e87e9);VisuMZ[_0x4e9f33(0x1ed)]['RegExp'][_0x4e9f33(0x36a)][_0x4e9f33(0xb5)](new RegExp(_0x370970,'g'));}},Scene_Boot[_0x28fd0f(0x1c0)][_0x28fd0f(0x4ad)]=function(){const _0xb07f35=_0x28fd0f;if(VisuMZ[_0xb07f35(0x151)])return;this[_0xb07f35(0x1b2)]();const _0x3dd70d=[$dataItems,$dataWeapons,$dataArmors];for(const _0x4283f6 of _0x3dd70d){for(const _0x47be75 of _0x4283f6){if(!_0x47be75)continue;VisuMZ['ItemsEquipsCore'][_0xb07f35(0x1cf)](_0x47be75,_0x4283f6),VisuMZ[_0xb07f35(0x1ed)][_0xb07f35(0x2b0)](_0x47be75,_0x4283f6),VisuMZ[_0xb07f35(0x1ed)][_0xb07f35(0x3a2)](_0x47be75,_0x4283f6),VisuMZ[_0xb07f35(0x1ed)][_0xb07f35(0x270)](_0x47be75,_0x4283f6),VisuMZ[_0xb07f35(0x1ed)][_0xb07f35(0x3ae)](_0x47be75,_0x4283f6);}}},Scene_Boot['prototype'][_0x28fd0f(0x1b2)]=function(){const _0x471aca=_0x28fd0f;for(const _0x358d5a of $dataClasses){if(!_0x358d5a)continue;VisuMZ[_0x471aca(0x1ed)][_0x471aca(0x48a)](_0x358d5a);}},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2a2)]=VisuMZ[_0x28fd0f(0x2a2)],VisuMZ[_0x28fd0f(0x2a2)]=function(_0x204ad5){const _0xd461e2=_0x28fd0f;VisuMZ[_0xd461e2(0x1ed)]['ParseClassNotetags'][_0xd461e2(0x245)](this,_0x204ad5),VisuMZ['ItemsEquipsCore']['Parse_Notetags_EquipSlots'](_0x204ad5);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x46e)]=VisuMZ['ParseItemNotetags'],VisuMZ['ParseItemNotetags']=function(_0x49c1af){const _0xdc3b48=_0x28fd0f;VisuMZ[_0xdc3b48(0x1ed)]['ParseItemNotetags'][_0xdc3b48(0x245)](this,_0x49c1af),VisuMZ[_0xdc3b48(0x1ed)][_0xdc3b48(0x223)](_0x49c1af,$dataItems);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x40d)]=VisuMZ[_0x28fd0f(0x40d)],VisuMZ[_0x28fd0f(0x40d)]=function(_0xdc2b54){const _0x4dafb1=_0x28fd0f;VisuMZ[_0x4dafb1(0x1ed)][_0x4dafb1(0x40d)][_0x4dafb1(0x245)](this,_0xdc2b54),VisuMZ[_0x4dafb1(0x1ed)][_0x4dafb1(0x223)](_0xdc2b54,$dataWeapons);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x410)]=VisuMZ[_0x28fd0f(0x410)],VisuMZ['ParseArmorNotetags']=function(_0x3d73d1){const _0x184cdf=_0x28fd0f;VisuMZ[_0x184cdf(0x1ed)][_0x184cdf(0x410)][_0x184cdf(0x245)](this,_0x3d73d1),VisuMZ[_0x184cdf(0x1ed)]['Parse_Notetags_Batch'](_0x3d73d1,$dataArmors);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x48a)]=function(_0x246627){const _0x51acbe=_0x28fd0f;_0x246627[_0x51acbe(0x153)]=[];const _0x3c1aa6=$dataSystem[_0x51acbe(0x290)][_0x51acbe(0x455)](_0x4498dc=>_0x4498dc?_0x4498dc['trim']():'');if(!BattleManager[_0x51acbe(0xc3)]()&&_0x246627[_0x51acbe(0x409)]['match'](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x498c1a=String(RegExp['$1'])[_0x51acbe(0x1e2)](/[\r\n]+/);for(const _0x332e38 of _0x498c1a){const _0x47a2ee=_0x3c1aa6[_0x51acbe(0x25c)](_0x332e38[_0x51acbe(0x35f)]());if(_0x47a2ee>0x0)_0x246627[_0x51acbe(0x153)][_0x51acbe(0xb5)](_0x47a2ee);}}else for(const _0x3af872 of _0x3c1aa6){const _0x59266f=_0x3c1aa6[_0x51acbe(0x25c)](_0x3af872[_0x51acbe(0x35f)]());if(_0x59266f>0x0)_0x246627[_0x51acbe(0x153)][_0x51acbe(0xb5)](_0x59266f);}},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x223)]=function(_0x670702,_0x4e6784){const _0x292511=_0x28fd0f;VisuMZ[_0x292511(0x1ed)][_0x292511(0x1cf)](_0x670702,_0x4e6784),VisuMZ[_0x292511(0x1ed)][_0x292511(0x2b0)](_0x670702,_0x4e6784),VisuMZ[_0x292511(0x1ed)]['Parse_Notetags_ParamValues'](_0x670702,_0x4e6784),VisuMZ[_0x292511(0x1ed)][_0x292511(0x270)](_0x670702,_0x4e6784),VisuMZ[_0x292511(0x1ed)][_0x292511(0x3ae)](_0x670702,_0x4e6784);},VisuMZ[_0x28fd0f(0x1ed)]['Parse_Notetags_Category']=function(_0x373437,_0x812954){const _0x1ca946=_0x28fd0f;_0x373437[_0x1ca946(0x442)]=[];const _0x452b77=_0x373437['note']||'',_0x17d45c=_0x452b77[_0x1ca946(0x275)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x17d45c)for(const _0x2ccd2d of _0x17d45c){_0x2ccd2d[_0x1ca946(0x275)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x4e7753=String(RegExp['$1'])[_0x1ca946(0x20d)]()[_0x1ca946(0x35f)]()[_0x1ca946(0x1e2)](',');for(const _0x3927b4 of _0x4e7753){_0x373437['categories'][_0x1ca946(0xb5)](_0x3927b4['trim']());}}if(_0x452b77[_0x1ca946(0x275)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x1a5f82=RegExp['$1']['split'](/[\r\n]+/);for(const _0x3139a1 of _0x1a5f82){_0x373437[_0x1ca946(0x442)][_0x1ca946(0xb5)](_0x3139a1[_0x1ca946(0x20d)]()[_0x1ca946(0x35f)]());}}},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2fc)]=function(_0x18c407,_0xa08a14){const _0x1456ce=_0x28fd0f;if(!_0x18c407)return;_0x18c407[_0x1456ce(0x324)]=0x32;const _0x57cac1=_0x18c407[_0x1456ce(0x409)]||'';_0x57cac1['match'](/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)&&(_0x18c407['sortPriority']=Number(RegExp['$1']));},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2b0)]=function(_0x334060,_0x51f226){const _0x505c87=_0x28fd0f;_0x334060[_0x505c87(0x409)][_0x505c87(0x275)](/<PRICE:[ ](\d+)>/i)&&(_0x334060[_0x505c87(0xa4)]=Number(RegExp['$1']));},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x3a2)]=function(_0x5f3769,_0x4a1140){const _0x4aad06=_0x28fd0f;if(_0x4a1140===$dataItems)return;for(let _0x1e6d96=0x0;_0x1e6d96<0x8;_0x1e6d96++){const _0x1c23e9=VisuMZ['ItemsEquipsCore'][_0x4aad06(0x447)][_0x4aad06(0x3f9)][_0x1e6d96];_0x5f3769[_0x4aad06(0x409)]['match'](_0x1c23e9)&&(_0x5f3769[_0x4aad06(0x16c)][_0x1e6d96]=parseInt(RegExp['$1']));}},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x3d8)]={},VisuMZ['ItemsEquipsCore']['Parse_Notetags_ParamJS']=function(_0x181489,_0xab9141){const _0x6479ea=_0x28fd0f;if(_0xab9141===$dataItems)return;if(_0x181489[_0x6479ea(0x409)][_0x6479ea(0x275)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x3a05f2=String(RegExp['$1']),_0x1eee71=(_0xab9141===$dataWeapons?_0x6479ea(0x40b):_0x6479ea(0x18b))[_0x6479ea(0xa8)](_0x181489['id']),_0x409b6d=_0x6479ea(0x350)[_0x6479ea(0xa8)](_0x3a05f2);for(let _0x31a716=0x0;_0x31a716<0x8;_0x31a716++){if(_0x3a05f2[_0x6479ea(0x275)](VisuMZ[_0x6479ea(0x1ed)]['RegExp'][_0x6479ea(0x36a)][_0x31a716])){const _0x1d9588=_0x6479ea(0x335)[_0x6479ea(0xa8)](_0x1eee71,_0x31a716);VisuMZ['ItemsEquipsCore'][_0x6479ea(0x3d8)][_0x1d9588]=new Function(_0x6479ea(0x373),_0x6479ea(0x2f0),_0x409b6d);}}}},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x224)]={},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x3ae)]=function(_0x5b1004,_0x1a7a65){const _0x20215d=_0x28fd0f;if(_0x1a7a65!==$dataItems)return;if(_0x5b1004[_0x20215d(0x409)][_0x20215d(0x275)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x3a348f=String(RegExp['$1']),_0x1c4f0c='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x20215d(0xa8)](_0x3a348f);VisuMZ[_0x20215d(0x1ed)][_0x20215d(0x224)][_0x5b1004['id']]=new Function('item',_0x1c4f0c);}},DataManager[_0x28fd0f(0x2fd)]=function(_0x2a84e1){const _0x58f5ad=_0x28fd0f;return this[_0x58f5ad(0xec)](_0x2a84e1)&&_0x2a84e1[_0x58f5ad(0x44e)]===0x2;},DataManager[_0x28fd0f(0x49f)]=function(_0x10d127){const _0x49e87b=_0x28fd0f;if(!_0x10d127)return 0x63;else return _0x10d127[_0x49e87b(0x409)]['match'](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0x49e87b(0x3f6)](_0x10d127);},DataManager[_0x28fd0f(0x3f6)]=function(_0x513fe0){const _0x1026f8=_0x28fd0f;if(this[_0x1026f8(0xec)](_0x513fe0))return VisuMZ[_0x1026f8(0x1ed)][_0x1026f8(0x14a)][_0x1026f8(0xff)]['MaxItems'];else{if(this[_0x1026f8(0x320)](_0x513fe0))return VisuMZ['ItemsEquipsCore'][_0x1026f8(0x14a)][_0x1026f8(0xff)][_0x1026f8(0x359)];else{if(this[_0x1026f8(0x311)](_0x513fe0))return VisuMZ['ItemsEquipsCore']['Settings'][_0x1026f8(0xff)]['MaxArmors'];}}},DataManager[_0x28fd0f(0x11e)]=function(_0x7e1c6d){const _0x19eefe=_0x28fd0f;_0x7e1c6d=_0x7e1c6d[_0x19eefe(0x20d)]()[_0x19eefe(0x35f)](),this[_0x19eefe(0x22c)]=this[_0x19eefe(0x22c)]||{};if(this['_classIDs'][_0x7e1c6d])return this['_classIDs'][_0x7e1c6d];for(const _0x4de177 of $dataClasses){if(!_0x4de177)continue;let _0x2b0a83=_0x4de177['name'];_0x2b0a83=_0x2b0a83[_0x19eefe(0x18a)](/\x1I\[(\d+)\]/gi,''),_0x2b0a83=_0x2b0a83[_0x19eefe(0x18a)](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x2b0a83[_0x19eefe(0x20d)]()[_0x19eefe(0x35f)]()]=_0x4de177['id'];}return this[_0x19eefe(0x22c)][_0x7e1c6d]||0x0;},DataManager[_0x28fd0f(0x322)]=function(_0x3ed0fd){const _0xd951e4=_0x28fd0f;_0x3ed0fd=_0x3ed0fd[_0xd951e4(0x20d)]()[_0xd951e4(0x35f)](),this['_skillIDs']=this['_skillIDs']||{};if(this['_skillIDs'][_0x3ed0fd])return this[_0xd951e4(0x49c)][_0x3ed0fd];for(const _0x48aec4 of $dataSkills){if(!_0x48aec4)continue;this[_0xd951e4(0x49c)][_0x48aec4[_0xd951e4(0x1af)]['toUpperCase']()[_0xd951e4(0x35f)]()]=_0x48aec4['id'];}return this[_0xd951e4(0x49c)][_0x3ed0fd]||0x0;},DataManager[_0x28fd0f(0x12a)]=function(_0x487c5b){const _0x477a08=_0x28fd0f;_0x487c5b=_0x487c5b[_0x477a08(0x20d)]()[_0x477a08(0x35f)](),this['_itemIDs']=this[_0x477a08(0x1d0)]||{};if(this['_itemIDs'][_0x487c5b])return this[_0x477a08(0x1d0)][_0x487c5b];for(const _0x429267 of $dataItems){if(!_0x429267)continue;this[_0x477a08(0x1d0)][_0x429267[_0x477a08(0x1af)]['toUpperCase']()[_0x477a08(0x35f)]()]=_0x429267['id'];}return this[_0x477a08(0x1d0)][_0x487c5b]||0x0;},DataManager[_0x28fd0f(0x226)]=function(_0x37c9c6){const _0x2bee34=_0x28fd0f;_0x37c9c6=_0x37c9c6[_0x2bee34(0x20d)]()['trim'](),this[_0x2bee34(0x39c)]=this[_0x2bee34(0x39c)]||{};if(this[_0x2bee34(0x39c)][_0x37c9c6])return this['_weaponIDs'][_0x37c9c6];for(const _0x3009f6 of $dataWeapons){if(!_0x3009f6)continue;this[_0x2bee34(0x39c)][_0x3009f6[_0x2bee34(0x1af)][_0x2bee34(0x20d)]()[_0x2bee34(0x35f)]()]=_0x3009f6['id'];}return this[_0x2bee34(0x39c)][_0x37c9c6]||0x0;},DataManager['getArmorIdWithName']=function(_0x413b6b){const _0x51a3ee=_0x28fd0f;_0x413b6b=_0x413b6b[_0x51a3ee(0x20d)]()[_0x51a3ee(0x35f)](),this[_0x51a3ee(0x426)]=this['_armorIDs']||{};if(this[_0x51a3ee(0x426)][_0x413b6b])return this[_0x51a3ee(0x426)][_0x413b6b];for(const _0x2cda5c of $dataArmors){if(!_0x2cda5c)continue;this[_0x51a3ee(0x426)][_0x2cda5c[_0x51a3ee(0x1af)]['toUpperCase']()[_0x51a3ee(0x35f)]()]=_0x2cda5c['id'];}return this[_0x51a3ee(0x426)][_0x413b6b]||0x0;},DataManager['getEtypeIdWithName']=function(_0x22378f){const _0x4a45ce=_0x28fd0f;_0x22378f=_0x22378f[_0x4a45ce(0x20d)]()[_0x4a45ce(0x35f)](),this['_etypeIDs']=this['_etypeIDs']||{};if(this[_0x4a45ce(0x16e)][_0x22378f])return this[_0x4a45ce(0x16e)][_0x22378f];for(const _0x5368d1 of $dataSystem['equipTypes']){this[_0x4a45ce(0x16e)][_0x5368d1['toUpperCase']()['trim']()]=$dataSystem[_0x4a45ce(0x290)][_0x4a45ce(0x25c)](_0x5368d1);}return this['_etypeIDs'][_0x22378f]||0x0;},VisuMZ['ItemsEquipsCore']['SetupProxyItemGroups']=function(){const _0x8e0677=_0x28fd0f;VisuMZ['ItemsEquipsCore']['SetupProxyItemGroup']($dataItems),VisuMZ[_0x8e0677(0x1ed)][_0x8e0677(0x161)]($dataWeapons),VisuMZ['ItemsEquipsCore'][_0x8e0677(0x161)]($dataArmors);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x161)]=function(_0x407aba){const _0x24b836=_0x28fd0f;for(const _0x1ee8a2 of _0x407aba){if(!_0x1ee8a2)continue;if(!DataManager[_0x24b836(0xbb)](_0x1ee8a2))continue;const _0x5e6909=DataManager[_0x24b836(0xeb)](_0x1ee8a2),_0x3a220b=[_0x24b836(0x1af),_0x24b836(0x346),_0x24b836(0x22e)];for(const _0x22b51b of _0x3a220b){_0x1ee8a2[_0x22b51b]=_0x5e6909[_0x22b51b];}}},DataManager['isProxyItem']=function(_0x4aa462){const _0x41c2d8=_0x28fd0f;if(!_0x4aa462)return![];if(!_0x4aa462[_0x41c2d8(0x409)])return![];return _0x4aa462&&_0x4aa462[_0x41c2d8(0x409)][_0x41c2d8(0x275)](/<PROXY:[ ](.*)>/i);},DataManager[_0x28fd0f(0xeb)]=function(_0x5ef971){const _0x2cd3e5=_0x28fd0f;return this[_0x2cd3e5(0xbb)](_0x5ef971)?this[_0x2cd3e5(0x100)](_0x5ef971)||_0x5ef971:_0x5ef971;},DataManager['switchProxyItem']=function(_0x11a2c0){const _0x2c87b7=_0x28fd0f;_0x11a2c0[_0x2c87b7(0x409)][_0x2c87b7(0x275)](/<PROXY:[ ](.*)>/i);const _0x3d8cb2=RegExp['$1'][_0x2c87b7(0x35f)](),_0x10c7b7=/^\d+$/[_0x2c87b7(0x155)](_0x3d8cb2);if(this[_0x2c87b7(0xec)](_0x11a2c0)){const _0x4aa4ae=_0x10c7b7?Number(_0x3d8cb2):DataManager['getItemIdWithName'](_0x3d8cb2);return $dataItems[_0x4aa4ae]||_0x11a2c0;}else{if(this['isWeapon'](_0x11a2c0)){const _0x41dfdf=_0x10c7b7?Number(_0x3d8cb2):DataManager[_0x2c87b7(0x226)](_0x3d8cb2);return $dataWeapons[_0x41dfdf]||_0x11a2c0;}else{if(this[_0x2c87b7(0x311)](_0x11a2c0)){const _0x1ff6bb=_0x10c7b7?Number(_0x3d8cb2):DataManager[_0x2c87b7(0xe3)](_0x3d8cb2);return $dataArmors[_0x1ff6bb]||_0x11a2c0;}}}return _0x11a2c0;},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x125)]=Window_ItemList[_0x28fd0f(0x1c0)]['item'],Window_ItemList[_0x28fd0f(0x1c0)]['item']=function(){const _0x44cfc2=_0x28fd0f;if($gameTemp[_0x44cfc2(0xd0)])return VisuMZ[_0x44cfc2(0x1ed)][_0x44cfc2(0x125)][_0x44cfc2(0x245)](this);return DataManager[_0x44cfc2(0xeb)](VisuMZ['ItemsEquipsCore'][_0x44cfc2(0x125)][_0x44cfc2(0x245)](this));},Window_ItemList[_0x28fd0f(0x1c0)]['proxyItem']=function(){const _0x3cdd46=_0x28fd0f;return VisuMZ[_0x3cdd46(0x1ed)][_0x3cdd46(0x125)][_0x3cdd46(0x245)](this);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x23b)]=Window_ShopBuy[_0x28fd0f(0x1c0)]['item'],Window_ShopBuy[_0x28fd0f(0x1c0)][_0x28fd0f(0x373)]=function(){const _0x1b5808=_0x28fd0f;if($gameTemp[_0x1b5808(0xd0)])return VisuMZ[_0x1b5808(0x1ed)][_0x1b5808(0x23b)][_0x1b5808(0x245)](this);return DataManager[_0x1b5808(0xeb)](VisuMZ[_0x1b5808(0x1ed)][_0x1b5808(0x23b)][_0x1b5808(0x245)](this));},Window_ShopBuy[_0x28fd0f(0x1c0)][_0x28fd0f(0x3fd)]=function(){const _0x65bc58=_0x28fd0f;return VisuMZ[_0x65bc58(0x1ed)]['Window_ShopBuy_item']['call'](this);},VisuMZ[_0x28fd0f(0x1ed)]['Game_Item_setObject']=Game_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x439)],Game_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x439)]=function(_0x162dd2){const _0x2b31cf=_0x28fd0f;if(DataManager[_0x2b31cf(0xbb)](_0x162dd2))return;VisuMZ[_0x2b31cf(0x1ed)][_0x2b31cf(0x343)][_0x2b31cf(0x245)](this,_0x162dd2);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0xbc)]=function(){const _0x1d8486=_0x28fd0f;this[_0x1d8486(0x379)]={'partyArtifactIDs':[],'troopArtifactIDs':[]};for(const _0x2ea02c of $dataArmors){if(!_0x2ea02c)continue;if(!DataManager[_0x1d8486(0x42f)](_0x2ea02c))continue;DataManager[_0x1d8486(0x374)](_0x2ea02c)&&this[_0x1d8486(0x379)][_0x1d8486(0x1da)][_0x1d8486(0xb5)](_0x2ea02c['id']),DataManager['isTroopArtifact'](_0x2ea02c)&&this[_0x1d8486(0x379)][_0x1d8486(0x437)]['push'](_0x2ea02c['id']);}},DataManager['isArtifact']=function(_0x2ca60e){const _0xc17b2e=_0x28fd0f;if(!this[_0xc17b2e(0x311)](_0x2ca60e))return![];const _0x23259d=_0x2ca60e[_0xc17b2e(0x409)];if(!_0x23259d)return![];if(_0x23259d[_0xc17b2e(0x275)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x23259d[_0xc17b2e(0x275)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x23259d[_0xc17b2e(0x275)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x23259d[_0xc17b2e(0x275)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x28fd0f(0x1bb)]=function(_0x52d320){const _0x37d5ff=_0x28fd0f;if(!this['isArtifact'](_0x52d320))return![];const _0x323574=_0x52d320[_0x37d5ff(0x409)];if(!_0x323574)return![];if(_0x323574[_0x37d5ff(0x275)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x323574[_0x37d5ff(0x275)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x28fd0f(0x374)]=function(_0x3e3f15){const _0x2c723e=_0x28fd0f;if(!this[_0x2c723e(0x42f)](_0x3e3f15))return![];const _0x5ced50=_0x3e3f15['note'];if(!_0x5ced50)return![];if(_0x5ced50[_0x2c723e(0x275)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x5ced50[_0x2c723e(0x275)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x28fd0f(0x229)]=function(_0x5472b2){const _0xaafb91=_0x28fd0f;if(!this[_0xaafb91(0x42f)](_0x5472b2))return![];const _0x539e54=_0x5472b2[_0xaafb91(0x409)];if(!_0x539e54)return![];if(_0x539e54['match'](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x539e54[_0xaafb91(0x275)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x28fd0f(0x1ed)]['Game_BattlerBase_canEquip_artifact']=Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0x207)],Game_BattlerBase['prototype'][_0x28fd0f(0x207)]=function(_0x596227){const _0x201d1c=_0x28fd0f;if(DataManager[_0x201d1c(0x42f)](_0x596227))return![];if(!DataManager['meetsClassRequirements'](this,_0x596227))return![];if(!DataManager['meetsEquipRequirements'](this,_0x596227))return![];return VisuMZ['ItemsEquipsCore'][_0x201d1c(0x252)][_0x201d1c(0x245)](this,_0x596227);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x13e)]=Game_BattlerBase[_0x28fd0f(0x1c0)]['param'],Game_BattlerBase[_0x28fd0f(0x1c0)]['param']=function(_0x118d16){const _0x247930=_0x28fd0f;this[_0x247930(0x2e3)]=!![];const _0x1c553=VisuMZ[_0x247930(0x1ed)][_0x247930(0x13e)][_0x247930(0x245)](this,_0x118d16);return this['_allowArtifactParamBase']=undefined,_0x1c553;},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x1f7)]=Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x238)],Game_Actor['prototype'][_0x28fd0f(0x238)]=function(){const _0x28f53e=_0x28fd0f;this[_0x28f53e(0x443)]=!![];const _0x4260b9=VisuMZ['ItemsEquipsCore'][_0x28f53e(0x1f7)][_0x28f53e(0x245)](this);return this[_0x28f53e(0x443)]=undefined,_0x4260b9;},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x497)]=Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x43b)],Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x43b)]=function(){const _0x21a41e=_0x28fd0f,_0x163914=VisuMZ[_0x21a41e(0x1ed)][_0x21a41e(0x497)][_0x21a41e(0x245)](this);if(this[_0x21a41e(0x443)]||this[_0x21a41e(0x2e3)]){const _0x4430dc=_0x163914[_0x21a41e(0x24e)]($gameParty[_0x21a41e(0xc0)]());return _0x4430dc;}else return _0x163914;},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x482)]=Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b8)],Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b8)]=function(_0x3a868b){const _0x47eb44=_0x28fd0f;let _0x5437f9=VisuMZ[_0x47eb44(0x1ed)][_0x47eb44(0x482)][_0x47eb44(0x245)](this,_0x3a868b);if(this['constructor']===Game_Enemy)for(const _0x393ae0 of $gameParty['troopArtifacts']()){if(_0x393ae0)_0x5437f9+=_0x393ae0[_0x47eb44(0x16c)][_0x3a868b];}return _0x5437f9;},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x189)]=Game_Enemy[_0x28fd0f(0x1c0)]['traitObjects'],Game_Enemy[_0x28fd0f(0x1c0)][_0x28fd0f(0x238)]=function(){const _0x25881b=_0x28fd0f;let _0x113e84=VisuMZ[_0x25881b(0x1ed)]['Game_Enemy_traitObjects_artifact'][_0x25881b(0x245)](this);return _0x113e84[_0x25881b(0x24e)]($gameParty['troopArtifacts']());},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x397)]=Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x380)],Game_Party[_0x28fd0f(0x1c0)]['gainItem']=function(_0x17cf13,_0x13c55d,_0x3e33ad){const _0x455aba=_0x28fd0f;VisuMZ[_0x455aba(0x1ed)][_0x455aba(0x397)][_0x455aba(0x245)](this,_0x17cf13,_0x13c55d,_0x3e33ad);if(DataManager[_0x455aba(0x42f)](_0x17cf13)){let _0x4a7226=$gameParty[_0x455aba(0x428)]();if($gameParty['inBattle']())_0x4a7226=_0x4a7226[_0x455aba(0x24e)]($gameTroop['members']());for(const _0x12ec5a of _0x4a7226){if(!_0x12ec5a)continue;_0x12ec5a['_cache']={};}}},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0xc0)]=function(){const _0x3b5cd0=_0x28fd0f;let _0x1ddd42=[];const _0x3f1907=VisuMZ[_0x3b5cd0(0x1ed)][_0x3b5cd0(0x379)][_0x3b5cd0(0x1da)];if(_0x3f1907)for(const _0x164585 of _0x3f1907){const _0x3b071c=$dataArmors[_0x164585];if(!_0x3b071c)continue;if(!this['hasItem'](_0x3b071c))continue;let _0x383921=0x1;if(DataManager['isStackableArtifact'](_0x3b071c))_0x383921=this[_0x3b5cd0(0x365)](_0x3b071c);while(_0x383921--)_0x1ddd42['push'](_0x3b071c);}return _0x1ddd42;},Game_Party['prototype'][_0x28fd0f(0x1e4)]=function(){const _0x19e409=_0x28fd0f;let _0x37acd1=[];const _0x353015=VisuMZ[_0x19e409(0x1ed)][_0x19e409(0x379)][_0x19e409(0x437)];if(_0x353015)for(const _0x2a4487 of _0x353015){const _0x32207e=$dataArmors[_0x2a4487];if(!_0x32207e)continue;if(!this[_0x19e409(0x363)](_0x32207e))continue;let _0x56df81=0x1;if(DataManager[_0x19e409(0x1bb)](_0x32207e))_0x56df81=this[_0x19e409(0x365)](_0x32207e);while(_0x56df81--)_0x37acd1[_0x19e409(0xb5)](_0x32207e);}return _0x37acd1;},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x2ea)]=function(){const _0x1e1d96=_0x28fd0f;return this[_0x1e1d96(0xc0)]()[_0x1e1d96(0x24e)](this[_0x1e1d96(0x1e4)]());},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x174)]=Game_Party[_0x28fd0f(0x1c0)]['setupBattleTestItems'],Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x225)]=function(){const _0x2b5732=_0x28fd0f;VisuMZ[_0x2b5732(0x1ed)][_0x2b5732(0x174)]['call'](this),this[_0x2b5732(0x2f3)]();},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x2f3)]=function(){const _0x25b379=_0x28fd0f,_0x37facc=$gameParty[_0x25b379(0x348)]()[_0x25b379(0x424)](_0xfaa765=>DataManager[_0x25b379(0x42f)](_0xfaa765));for(const _0x55102a of _0x37facc){const _0x54e032=this[_0x25b379(0x365)](_0x55102a);if(_0x54e032)this[_0x25b379(0x2ed)](_0x55102a,_0x54e032);}},DataManager[_0x28fd0f(0x334)]=function(_0x11c514,_0x191a18){const _0x2f6da3=_0x28fd0f;if(this[_0x2f6da3(0xec)](_0x191a18))return![];if(!_0x11c514)return![];if($gameTemp['_checkEquipRequirements'])return!![];if(BattleManager[_0x2f6da3(0xc3)]())return!![];const _0x77502a=this[_0x2f6da3(0xae)](_0x191a18);if(_0x77502a[_0x2f6da3(0x176)]<=0x0)return!![];return _0x77502a[_0x2f6da3(0x41a)](_0x11c514[_0x2f6da3(0x2b8)]()['id']);},DataManager['getClassRequirements']=function(_0x131f50){const _0x4923ce=_0x28fd0f;if(!_0x131f50)return[];this[_0x4923ce(0xc9)]=this['_getClassRequirements']||{};const _0x36690f=_0x4923ce(0x335)['format'](this[_0x4923ce(0x320)](_0x131f50)?_0x4923ce(0x3e6):_0x4923ce(0x434),_0x131f50['id']);if(this[_0x4923ce(0xc9)][_0x36690f]!==undefined)return this['_getClassRequirements'][_0x36690f];let _0xa336e=[];const _0x39b6b5=_0x131f50[_0x4923ce(0x409)]||'';if(_0x39b6b5['match'](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0x433577=String(RegExp['$1'])['split'](',')['map'](_0x3608b3=>_0x3608b3[_0x4923ce(0x35f)]());for(const _0x22e405 of _0x433577){const _0x24e367=/^\d+$/[_0x4923ce(0x155)](_0x22e405);_0x24e367?_0xa336e[_0x4923ce(0xb5)](Number(_0x22e405)):_0xa336e[_0x4923ce(0xb5)](DataManager[_0x4923ce(0x11e)](_0x22e405));}}return this['_getClassRequirements'][_0x36690f]=_0xa336e,this[_0x4923ce(0xc9)][_0x36690f];},DataManager['meetsEquipRequirements']=function(_0x4c8986,_0x77da3f){const _0x2671ab=_0x28fd0f;if(this[_0x2671ab(0xec)](_0x77da3f))return![];if(!_0x4c8986)return![];if($gameTemp[_0x2671ab(0xab)])return!![];if(BattleManager[_0x2671ab(0xc3)]())return!![];const _0x2819bd=this[_0x2671ab(0x30b)](_0x77da3f);for(const _0xdda769 of _0x2819bd){if(!this[_0x2671ab(0x3b9)](_0x4c8986,_0xdda769))return![];}return!![];},DataManager['getEquipRequirements']=function(_0x26f57c){const _0x22f119=_0x28fd0f;if(!_0x26f57c)return[];this[_0x22f119(0x138)]=this[_0x22f119(0x138)]||{};const _0x28655a=_0x22f119(0x335)[_0x22f119(0xa8)](this[_0x22f119(0x320)](_0x26f57c)?'WEAPON':'ARMOR',_0x26f57c['id']);if(this[_0x22f119(0x138)][_0x28655a]!==undefined)return this[_0x22f119(0x138)][_0x28655a];let _0x37c246=[];const _0x5789e6=_0x26f57c[_0x22f119(0x409)]||'';return _0x5789e6[_0x22f119(0x275)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x37c246=String(RegExp['$1'])[_0x22f119(0x1e2)](/[\r\n]+/)),this[_0x22f119(0x138)][_0x28655a]=_0x37c246,this['_getEquipRequirements'][_0x28655a];},DataManager[_0x28fd0f(0x3b9)]=function(_0x3404e8,_0xdad50e){const _0x193f27=_0x28fd0f;if(_0xdad50e[_0x193f27(0x275)](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x567898=String(RegExp['$1'])[_0x193f27(0x35f)](),_0x39be91=Number(RegExp['$2']);switch(_0x567898){case'>':return _0x3404e8['level']>_0x39be91;case'>=':return _0x3404e8[_0x193f27(0x31e)]>=_0x39be91;case _0x193f27(0x28f):return _0x3404e8[_0x193f27(0x31e)]===_0x39be91;case'<=':return _0x3404e8[_0x193f27(0x31e)]<=_0x39be91;case'<':return _0x3404e8[_0x193f27(0x31e)]<_0x39be91;}return![];}if(_0xdad50e['match'](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x228daa=String(RegExp['$1'])[_0x193f27(0x2b4)]()[_0x193f27(0x35f)](),_0x264e9e=String(RegExp['$2'])[_0x193f27(0x35f)](),_0x17143f=Number(RegExp['$3']);let _0x3c3a2d=0x0;if([_0x193f27(0x22b),'mmp'][_0x193f27(0x41a)](_0x228daa))_0x3c3a2d=0x1;const _0x2caa9f=_0x3404e8[_0x193f27(0x17a)][_0x3c3a2d]||0x0;switch(_0x264e9e){case'>':return _0x3404e8['paramBase'](_0x3c3a2d)+_0x2caa9f>_0x17143f;case'>=':return _0x3404e8[_0x193f27(0x1a7)](_0x3c3a2d)+_0x2caa9f>=_0x17143f;case _0x193f27(0x28f):return _0x3404e8[_0x193f27(0x1a7)](_0x3c3a2d)+_0x2caa9f===_0x17143f;case'<=':return _0x3404e8[_0x193f27(0x1a7)](_0x3c3a2d)+_0x2caa9f<=_0x17143f;case'<':return _0x3404e8[_0x193f27(0x1a7)](_0x3c3a2d)+_0x2caa9f<_0x17143f;}return![];}if(_0xdad50e[_0x193f27(0x275)](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x411710=String(RegExp['$1'])[_0x193f27(0x2b4)]()[_0x193f27(0x35f)](),_0x420d0d=String(RegExp['$2'])['trim'](),_0x14ee2f=Number(RegExp['$3']),_0x91c885=['atk',_0x193f27(0x188),_0x193f27(0x26f),_0x193f27(0x1d1),_0x193f27(0x221),'luk'];let _0x122329=_0x91c885[_0x193f27(0x25c)](_0x411710)+0x2;if(_0x122329<0x2)return![];const _0x2804fd=_0x3404e8[_0x193f27(0x17a)][_0x122329]||0x0;switch(_0x420d0d){case'>':return _0x3404e8[_0x193f27(0x1a7)](_0x122329)+_0x2804fd>_0x14ee2f;case'>=':return _0x3404e8[_0x193f27(0x1a7)](_0x122329)+_0x2804fd>=_0x14ee2f;case _0x193f27(0x28f):return _0x3404e8[_0x193f27(0x1a7)](_0x122329)+_0x2804fd===_0x14ee2f;case'<=':return _0x3404e8[_0x193f27(0x1a7)](_0x122329)+_0x2804fd<=_0x14ee2f;case'<':return _0x3404e8[_0x193f27(0x1a7)](_0x122329)+_0x2804fd<_0x14ee2f;}return![];}if(_0xdad50e[_0x193f27(0x275)](/LEARNED SKILL:[ ](\d+)/i)){const _0x3e0e75=Number(RegExp['$1']);return _0x3404e8['isLearnedSkill'](_0x3e0e75);}else{if(_0xdad50e[_0x193f27(0x275)](/LEARNED SKILL:[ ](.*)/i)){const _0x207b60=String(RegExp['$1']),_0x2bdb14=this['getSkillIdWithName'](_0x207b60);return _0x3404e8['isLearnedSkill'](_0x2bdb14);}}if(_0xdad50e[_0x193f27(0x275)](/SWITCH:[ ](\d+)/i)){const _0xd8cbc3=Number(RegExp['$1']);return $gameSwitches[_0x193f27(0x11f)](_0xd8cbc3);}return!![];},DataManager[_0x28fd0f(0x49a)]=function(_0x47afdd){const _0x47f814=_0x28fd0f;return this[_0x47f814(0x311)](_0x47afdd)?this[_0x47f814(0x130)](_0x47afdd):[_0x47afdd[_0x47f814(0x10f)]||0x0];},DataManager['getEtypeIDsCache']=function(_0x174a52){const _0xaa091e=_0x28fd0f;this[_0xaa091e(0x13a)]=this[_0xaa091e(0x13a)]||{};if(this['_cache_etypeIDs'][_0x174a52['id']]!==undefined)return this[_0xaa091e(0x13a)][_0x174a52['id']];this['_cache_etypeIDs'][_0x174a52['id']]=[_0x174a52[_0xaa091e(0x10f)]||0x0];const _0x4c889a=_0x174a52[_0xaa091e(0x409)]||'';if(_0x4c889a['match'](/<ADDED ETYPE(?:|S):[ ](.*)>/i)){const _0x7de260=String(RegExp['$1'])['split'](',')['map'](_0x11b7f4=>_0x11b7f4[_0xaa091e(0x35f)]());for(const _0x887e1b of _0x7de260){const _0x3ca3ea=/^\d+$/[_0xaa091e(0x155)](_0x887e1b);let _0xa3812b=0x0;_0x3ca3ea?_0xa3812b=Number(_0x887e1b):_0xa3812b=this['getEtypeIdWithName'](_0x887e1b),_0xa3812b>0x1&&this['_cache_etypeIDs'][_0x174a52['id']][_0xaa091e(0xb5)](_0xa3812b);}}return this[_0xaa091e(0x13a)][_0x174a52['id']];},Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0x382)]=function(_0x1e9b41){const _0x5cbd35=_0x28fd0f;return this[_0x5cbd35(0x2cd)](_0x1e9b41[_0x5cbd35(0x298)])&&!this[_0x5cbd35(0x127)](_0x1e9b41[_0x5cbd35(0x10f)])&&DataManager[_0x5cbd35(0x49a)](_0x1e9b41)[_0x5cbd35(0x3b0)](_0x1280bd=>!this[_0x5cbd35(0x127)](_0x1280bd));},DataManager['isCursedItem']=function(_0x16bc25){const _0x59cdf6=_0x28fd0f;if(!this['isWeapon'](_0x16bc25)&&!this[_0x59cdf6(0x311)](_0x16bc25))return![];if(Imported[_0x59cdf6(0x205)]&&this[_0x59cdf6(0x320)](_0x16bc25))return![];if(!_0x16bc25[_0x59cdf6(0x409)])return![];return _0x16bc25[_0x59cdf6(0x409)][_0x59cdf6(0x275)](/<CURSED>/i);},DataManager[_0x28fd0f(0x4a4)]=function(_0x12d043){const _0x123ad0=_0x28fd0f;if(!_0x12d043)return _0x12d043;if(!this[_0x123ad0(0x320)](_0x12d043)&&!this[_0x123ad0(0x311)](_0x12d043))return _0x12d043;if(_0x12d043[_0x123ad0(0x409)]['match'](/<PURIFY TRANSFORM:[ ](.*)>/i)){const _0x303b2c=String(RegExp['$1'])['trim'](),_0x30330f=/^\d+$/[_0x123ad0(0x155)](_0x303b2c);if(_0x30330f){if(this[_0x123ad0(0x320)](_0x12d043))return $dataWeapons[Number(_0x303b2c)];if(this[_0x123ad0(0x311)](_0x12d043))return $dataArmors[Number(_0x303b2c)];}else{if(this[_0x123ad0(0x320)](_0x12d043))return $dataWeapons[this[_0x123ad0(0x226)](_0x303b2c)];if(this[_0x123ad0(0x311)](_0x12d043))return $dataArmors[this['getArmorIdWithName'](_0x303b2c)];}}return _0x12d043;},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x20b)]=function(){const _0x43c3ab=_0x28fd0f,_0x6d17b=this[_0x43c3ab(0x428)]();for(const _0x37a005 of _0x6d17b){if(!_0x37a005)continue;_0x37a005[_0x43c3ab(0x20b)]();}},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x20b)]=function(){const _0x392b55=_0x28fd0f,_0x427dfa=this[_0x392b55(0x153)]()['length'];for(let _0x68ea1=0x0;_0x68ea1<_0x427dfa;_0x68ea1++){const _0x2d1e67=this[_0x392b55(0x345)][_0x68ea1];if(!_0x2d1e67)continue;const _0x2178b2=_0x2d1e67['object']();if(!DataManager[_0x392b55(0x22f)](_0x2178b2))continue;let _0x2b1a8f=DataManager[_0x392b55(0x4a4)](_0x2178b2);this['isPurifyItemSwapOk'](_0x2178b2,_0x2b1a8f)?(this[_0x392b55(0x345)][_0x68ea1]['setObject'](_0x2b1a8f),this[_0x392b55(0x143)]()):this['changeEquip'](_0x68ea1,null);}},Game_Actor[_0x28fd0f(0x1c0)]['isPurifyItemSwapOk']=function(_0x13d75c,_0x3f4163){const _0x10c3fe=_0x28fd0f;if(_0x13d75c===_0x3f4163)return![];const _0x4d53b7=DataManager['getEtypeIDs'](_0x3f4163);if(!_0x4d53b7[_0x10c3fe(0x41a)](_0x13d75c[_0x10c3fe(0x10f)]))return![];if(DataManager[_0x10c3fe(0x320)](_0x3f4163))return this[_0x10c3fe(0x172)](_0x3f4163[_0x10c3fe(0x2e4)]);else{if(DataManager[_0x10c3fe(0x311)](_0x3f4163))return this[_0x10c3fe(0x2cd)](_0x3f4163[_0x10c3fe(0x298)]);}return![];},TextManager[_0x28fd0f(0xf6)]={'helpDesc':{'equip':VisuMZ[_0x28fd0f(0x1ed)]['Settings'][_0x28fd0f(0x257)][_0x28fd0f(0x110)]??_0x28fd0f(0x29d),'optimize':VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x14a)]['EquipScene'][_0x28fd0f(0x451)]??'Equip\x20the\x20strongest\x20available\x20equipment.','clear':VisuMZ[_0x28fd0f(0x1ed)]['Settings'][_0x28fd0f(0x257)]['clearCmdDesc']??_0x28fd0f(0x2e2)}},ColorManager[_0x28fd0f(0x246)]=function(_0x1b65a8){const _0x2a401b=_0x28fd0f;if(!_0x1b65a8)return this['normalColor']();else{if(_0x1b65a8[_0x2a401b(0x409)][_0x2a401b(0x275)](/<COLOR:[ ](\d+)>/i))return this[_0x2a401b(0x328)](Number(RegExp['$1'])['clamp'](0x0,0x1f));else return _0x1b65a8[_0x2a401b(0x409)][_0x2a401b(0x275)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this[_0x2a401b(0x136)]();}},ColorManager[_0x28fd0f(0xbf)]=function(_0x13b01e){const _0x16b89c=_0x28fd0f;return _0x13b01e=String(_0x13b01e),_0x13b01e['match'](/#(.*)/i)?_0x16b89c(0x2cc)[_0x16b89c(0xa8)](String(RegExp['$1'])):this[_0x16b89c(0x328)](Number(_0x13b01e));},SceneManager[_0x28fd0f(0x263)]=function(){const _0x3f57de=_0x28fd0f;return this[_0x3f57de(0x19d)]&&this['_scene'][_0x3f57de(0x3aa)]===Scene_Shop;},Game_Temp[_0x28fd0f(0x1c0)][_0x28fd0f(0x4a3)]=function(){const _0x1087b0=_0x28fd0f;if(this[_0x1087b0(0x498)])return![];return VisuMZ['ItemsEquipsCore']['Settings'][_0x1087b0(0x19c)]['Enable'];},VisuMZ['ShopMenuStatusStandard']=VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x14a)]['StatusWindow']['MultiplierStandard'],VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x3ca)]=Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0x38e)],Game_BattlerBase['prototype']['param']=function(_0x18a772){const _0x593e6f=_0x28fd0f;return this[_0x593e6f(0xad)]?this['_shopStatusMenuAlly']?VisuMZ[_0x593e6f(0x302)]:0x1:VisuMZ['ItemsEquipsCore']['Game_BattlerBase_param'][_0x593e6f(0x245)](this,_0x18a772);},VisuMZ[_0x28fd0f(0x1ed)]['Game_BattlerBase_meetsItemConditions']=Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0xfa)],Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0xfa)]=function(_0x4a289b){const _0x482829=_0x28fd0f;if(!_0x4a289b)return![];if(!VisuMZ['ItemsEquipsCore'][_0x482829(0x2f2)][_0x482829(0x245)](this,_0x4a289b))return![];if(!this[_0x482829(0x326)](_0x4a289b))return![];if(!this[_0x482829(0x222)](_0x4a289b))return![];return!![];},Game_BattlerBase[_0x28fd0f(0x1c0)][_0x28fd0f(0x326)]=function(_0x4f7483){const _0x1db849=_0x28fd0f;if(!this[_0x1db849(0x15f)](_0x4f7483))return![];return!![];},Game_BattlerBase['prototype'][_0x28fd0f(0x15f)]=function(_0x7b129f){const _0x25ea91=_0x28fd0f,_0x2b8192=_0x7b129f[_0x25ea91(0x409)];if(_0x2b8192[_0x25ea91(0x275)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x198db4=JSON[_0x25ea91(0x449)]('['+RegExp['$1'][_0x25ea91(0x275)](/\d+/g)+']');for(const _0x581ff3 of _0x198db4){if(!$gameSwitches[_0x25ea91(0x11f)](_0x581ff3))return![];}return!![];}if(_0x2b8192[_0x25ea91(0x275)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1b31b4=JSON[_0x25ea91(0x449)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x17cb52 of _0x1b31b4){if(!$gameSwitches[_0x25ea91(0x11f)](_0x17cb52))return![];}return!![];}if(_0x2b8192[_0x25ea91(0x275)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1d7ed7=JSON[_0x25ea91(0x449)]('['+RegExp['$1'][_0x25ea91(0x275)](/\d+/g)+']');for(const _0x12d050 of _0x1d7ed7){if($gameSwitches['value'](_0x12d050))return!![];}return![];}if(_0x2b8192[_0x25ea91(0x275)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1ec101=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x80febd of _0x1ec101){if(!$gameSwitches[_0x25ea91(0x11f)](_0x80febd))return!![];}return![];}if(_0x2b8192['match'](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5f1ac1=JSON[_0x25ea91(0x449)]('['+RegExp['$1'][_0x25ea91(0x275)](/\d+/g)+']');for(const _0x5987cb of _0x5f1ac1){if(!$gameSwitches[_0x25ea91(0x11f)](_0x5987cb))return!![];}return![];}if(_0x2b8192['match'](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5372b0=JSON[_0x25ea91(0x449)]('['+RegExp['$1'][_0x25ea91(0x275)](/\d+/g)+']');for(const _0x2dcbaf of _0x5372b0){if($gameSwitches[_0x25ea91(0x11f)](_0x2dcbaf))return![];}return!![];}return!![];},Game_BattlerBase['prototype'][_0x28fd0f(0x222)]=function(_0x29736e){const _0x178707=_0x28fd0f,_0x179460=_0x29736e[_0x178707(0x409)],_0x480ce0=VisuMZ[_0x178707(0x1ed)][_0x178707(0x224)];return _0x480ce0[_0x29736e['id']]?_0x480ce0[_0x29736e['id']][_0x178707(0x245)](this,_0x29736e):!![];},Game_Actor[_0x28fd0f(0x1c0)]['initEquips']=function(_0x4c838c){const _0x451783=_0x28fd0f;_0x4c838c=this[_0x451783(0x436)](_0x4c838c);const _0x1c4c71=this[_0x451783(0x153)]();this['_equips']=[];for(let _0x3d272f=0x0;_0x3d272f<_0x1c4c71[_0x451783(0x176)];_0x3d272f++){this[_0x451783(0x345)][_0x3d272f]=new Game_Item();}for(let _0x3e3857=0x0;_0x3e3857<_0x1c4c71[_0x451783(0x176)];_0x3e3857++){const _0x2f6dd3=_0x1c4c71[_0x3e3857],_0x23eb45=this[_0x451783(0x48d)](_0x4c838c,_0x2f6dd3);if(this['canEquip'](_0x23eb45))this[_0x451783(0x345)][_0x3e3857]['setObject'](_0x23eb45);}this[_0x451783(0xe0)](!![]),this[_0x451783(0x143)]();},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x436)]=function(_0x2d26e5){const _0x3fc278=_0x28fd0f,_0x49069b=[];for(let _0x5cd944=0x0;_0x5cd944<_0x2d26e5[_0x3fc278(0x176)];_0x5cd944++){const _0x39bd7a=_0x2d26e5[_0x5cd944];if(_0x39bd7a<=0x0)continue;const _0x4ca79c=$dataSystem['equipTypes'][_0x5cd944+0x1];if(_0x4ca79c===$dataSystem[_0x3fc278(0x290)][0x1]||_0x5cd944===0x1&&this['isDualWield']())_0x49069b[_0x3fc278(0xb5)]($dataWeapons[_0x39bd7a]);else{if(BattleManager[_0x3fc278(0xc3)]()){const _0x50e9b0=$dataArmors[_0x39bd7a];_0x50e9b0&&_0x50e9b0[_0x3fc278(0x10f)]===_0x5cd944+0x1&&_0x49069b[_0x3fc278(0xb5)](_0x50e9b0);}else{const _0x3f90d5=$dataArmors[_0x39bd7a];_0x3f90d5&&_0x3f90d5[_0x3fc278(0x10f)]===_0x5cd944+0x1&&_0x49069b[_0x3fc278(0xb5)](_0x3f90d5);}}}return _0x49069b;},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x48d)]=function(_0x461a8b,_0x24664a){const _0x595610=_0x28fd0f;for(const _0x49d721 of _0x461a8b){if(!_0x49d721)continue;if(_0x49d721[_0x595610(0x10f)]===_0x24664a)return _0x461a8b[_0x595610(0x28d)](_0x461a8b[_0x595610(0x25c)](_0x49d721),0x1),_0x49d721;}return null;},Game_Actor['prototype'][_0x28fd0f(0x153)]=function(){const _0x38ee61=_0x28fd0f,_0x5827bd=VisuMZ[_0x38ee61(0x1ed)][_0x38ee61(0x2be)](this[_0x38ee61(0x42a)]||this['currentClass']()[_0x38ee61(0x153)]);if(_0x5827bd[_0x38ee61(0x176)]>=0x2&&this[_0x38ee61(0xd4)]())_0x5827bd[0x1]=0x1;return _0x5827bd;},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x2bc)]=function(_0xd6679){const _0x583f4a=_0x28fd0f;_0xd6679[_0x583f4a(0x220)](0x0),_0xd6679[_0x583f4a(0x220)](-0x1),this['_forcedSlots']=_0xd6679,this['refresh'](),this[_0x583f4a(0x2e0)]();},Game_Actor[_0x28fd0f(0x1c0)]['forceResetEquipSlots']=function(){const _0xc005dc=_0x28fd0f;this['_forcedSlots']=undefined,this[_0xc005dc(0x143)](),this[_0xc005dc(0x2e0)]();},Game_Actor[_0x28fd0f(0x1c0)]['updateChangedSlots']=function(){const _0x3b6cd7=_0x28fd0f;let _0x5739e9=this[_0x3b6cd7(0x153)]()[_0x3b6cd7(0x176)];while(this[_0x3b6cd7(0x345)]['length']>_0x5739e9){const _0x5f04a6=this[_0x3b6cd7(0x345)][this[_0x3b6cd7(0x345)][_0x3b6cd7(0x176)]-0x1];_0x5f04a6&&_0x5f04a6[_0x3b6cd7(0x384)]()&&$gameParty[_0x3b6cd7(0x380)](_0x5f04a6[_0x3b6cd7(0x384)](),0x1),this['_equips'][_0x3b6cd7(0x341)]();}while(_0x5739e9>this[_0x3b6cd7(0x345)]['length']){this[_0x3b6cd7(0x345)][_0x3b6cd7(0xb5)](new Game_Item());}},Game_Actor[_0x28fd0f(0x1c0)]['prepareNewEquipSlotsOnLoad']=function(){const _0x94d0e7=_0x28fd0f,_0x58de6e=this[_0x94d0e7(0x153)]();for(let _0x483cea=0x0;_0x483cea<_0x58de6e[_0x94d0e7(0x176)];_0x483cea++){if(!this[_0x94d0e7(0x345)][_0x483cea])this[_0x94d0e7(0x345)][_0x483cea]=new Game_Item();}this[_0x94d0e7(0xe0)](![]),this['refresh']();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x427)]=Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x2af)],Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x2af)]=function(_0x5f4216,_0xf98fb3){const _0x4c5b55=_0x28fd0f;if(!this[_0x4c5b55(0x29e)]){const _0x5c882d=JsonEx['makeDeepCopy'](this);_0x5c882d[_0x4c5b55(0x29e)]=!![],this[_0x4c5b55(0x1f3)](_0x5f4216,_0xf98fb3),this[_0x4c5b55(0x217)](_0x5c882d);}else this[_0x4c5b55(0x1f3)](_0x5f4216,_0xf98fb3);},Game_Actor['prototype'][_0x28fd0f(0x1f3)]=function(_0x5638ef,_0x18e94c){const _0x24c210=_0x28fd0f;if(!this[_0x24c210(0x3bc)](_0x18e94c,this[_0x24c210(0x43b)]()[_0x5638ef]))return;if(_0x18e94c){const _0x38b35d=DataManager['getEtypeIDs'](_0x18e94c);if(!_0x38b35d['includes'](this[_0x24c210(0x153)]()[_0x5638ef]))return;}this[_0x24c210(0x345)][_0x5638ef][_0x24c210(0x439)](_0x18e94c);if(VisuMZ[_0x24c210(0x1ed)][_0x24c210(0x35a)](_0x18e94c)){const _0x35afa1=VisuMZ[_0x24c210(0x1ed)][_0x24c210(0x14a)][_0x24c210(0x257)][_0x24c210(0x3b3)]||'',_0x3a3d72=this['name'](),_0x31c9ab=_0x24c210(0x3a7)['format'](_0x18e94c[_0x24c210(0x346)]),_0x36fe96=_0x18e94c[_0x24c210(0x1af)]||'';let _0x13c6e6=_0x35afa1['format'](_0x3a3d72,_0x31c9ab,_0x36fe96);if(VisuMZ[_0x24c210(0x2a8)][_0x24c210(0x262)]>=1.79&&_0x13c6e6[_0x24c210(0x176)]>0x0)$textPopup(_0x13c6e6);}this['refresh']();},VisuMZ['ItemsEquipsCore']['CheckCursedItemMsg']=function(_0x18b4d1){const _0x2a6681=_0x28fd0f;if(!_0x18b4d1)return![];if(!Imported['VisuMZ_0_CoreEngine'])return![];if(VisuMZ[_0x2a6681(0x2a8)][_0x2a6681(0x262)]<1.79)return![];return DataManager[_0x2a6681(0x22f)](_0x18b4d1);},VisuMZ[_0x28fd0f(0x1ed)]['Game_Actor_forceChangeEquip']=Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x156)],Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x156)]=function(_0x370d2a,_0xd645e7){const _0x42f7cd=_0x28fd0f;if(!this[_0x42f7cd(0x29e)]){const _0x4784a8=JsonEx[_0x42f7cd(0x2ad)](this);_0x4784a8[_0x42f7cd(0x29e)]=!![],VisuMZ[_0x42f7cd(0x1ed)]['Game_Actor_forceChangeEquip'][_0x42f7cd(0x245)](this,_0x370d2a,_0xd645e7),this['equipAdjustHpMp'](_0x4784a8);}else VisuMZ[_0x42f7cd(0x1ed)][_0x42f7cd(0x3ed)]['call'](this,_0x370d2a,_0xd645e7);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x48f)]=Game_Actor['prototype'][_0x28fd0f(0xf5)],Game_Actor[_0x28fd0f(0x1c0)]['discardEquip']=function(_0xc1b8cc){const _0x4d6702=_0x28fd0f;if(!this[_0x4d6702(0x29e)]){const _0x36803e=JsonEx[_0x4d6702(0x2ad)](this);_0x36803e[_0x4d6702(0x29e)]=!![],VisuMZ[_0x4d6702(0x1ed)][_0x4d6702(0x48f)][_0x4d6702(0x245)](this,_0xc1b8cc),this[_0x4d6702(0x217)](_0x36803e);}else VisuMZ[_0x4d6702(0x1ed)]['Game_Actor_discardEquip'][_0x4d6702(0x245)](this,_0xc1b8cc);},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0xe0)]=function(_0x157674){const _0x205420=_0x28fd0f;if(this['_bypassReleaseUnequippableItemsItemsEquipsCore'])return;let _0x3f5095=0x0;for(;;){_0x3f5095++;if(_0x3f5095>0x3)break;const _0x33906c=this[_0x205420(0x153)](),_0x5b7ac0=this[_0x205420(0x43b)](),_0x20061f=_0x5b7ac0[_0x205420(0x176)];let _0x436345=![];for(let _0x3aed9d=0x0;_0x3aed9d<_0x20061f;_0x3aed9d++){const _0x533763=_0x5b7ac0[_0x3aed9d];if(!_0x533763)continue;const _0x3c97aa=DataManager[_0x205420(0x49a)](_0x533763);if(!this[_0x205420(0x207)](_0x533763)||!_0x3c97aa['includes'](_0x33906c[_0x3aed9d])){!_0x157674&&this['tradeItemWithParty'](null,_0x533763);if(!this[_0x205420(0x29e)]){const _0x352e02=JsonEx['makeDeepCopy'](this);_0x352e02[_0x205420(0x29e)]=!![],this['_equips'][_0x3aed9d]['setObject'](null),this[_0x205420(0x3d5)]=!![],this[_0x205420(0x217)](_0x352e02),this[_0x205420(0x3d5)]=undefined;}else{if(this[_0x205420(0x345)][_0x3aed9d])this['_equips'][_0x3aed9d][_0x205420(0x439)](null);else continue;}_0x436345=!![];}}if(!_0x436345)break;}},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x217)]=function(_0x4ac0a6){const _0x51fc3b=_0x28fd0f;if(this[_0x51fc3b(0x29e)])return;if(!VisuMZ['ItemsEquipsCore'][_0x51fc3b(0x14a)][_0x51fc3b(0x257)][_0x51fc3b(0x142)])return;const _0x55c563=Math[_0x51fc3b(0x182)](_0x4ac0a6[_0x51fc3b(0x3d4)]()*this['mhp']),_0x273c16=Math[_0x51fc3b(0x182)](_0x4ac0a6[_0x51fc3b(0x119)]()*this['mmp']);if(this['hp']>0x0)this[_0x51fc3b(0x3a4)](_0x55c563);if(this['mp']>0x0)this[_0x51fc3b(0x3ef)](_0x273c16);},Game_Actor[_0x28fd0f(0x1c0)]['clearEquipments']=function(){const _0x2cc8ee=_0x28fd0f,_0x1e0928=this['equipSlots']()[_0x2cc8ee(0x176)];for(let _0x22e02c=0x0;_0x22e02c<_0x1e0928;_0x22e02c++){if(this[_0x2cc8ee(0x1d8)](_0x22e02c))this[_0x2cc8ee(0x2af)](_0x22e02c,null);}},Game_Actor['prototype'][_0x28fd0f(0x1d8)]=function(_0x6bf191){const _0x471a9e=_0x28fd0f;return this[_0x471a9e(0xa1)]()['includes'](this[_0x471a9e(0x153)]()[_0x6bf191])?![]:this[_0x471a9e(0x27a)](_0x6bf191);},Game_Actor[_0x28fd0f(0x1c0)]['nonRemovableEtypes']=function(){const _0x59fe8d=_0x28fd0f;return VisuMZ[_0x59fe8d(0x1ed)][_0x59fe8d(0x14a)][_0x59fe8d(0x257)][_0x59fe8d(0x285)];},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x415)]=function(){const _0x16ac2e=_0x28fd0f,_0x5e1ee6=this[_0x16ac2e(0x153)]()['length'];for(let _0x141b97=0x0;_0x141b97<_0x5e1ee6;_0x141b97++){if(this[_0x16ac2e(0x46d)](_0x141b97))this[_0x16ac2e(0x2af)](_0x141b97,null);}for(let _0x506bf1=0x0;_0x506bf1<_0x5e1ee6;_0x506bf1++){if(this[_0x16ac2e(0x46d)](_0x506bf1))this[_0x16ac2e(0x2af)](_0x506bf1,this[_0x16ac2e(0x479)](_0x506bf1));}},Game_Actor['prototype'][_0x28fd0f(0x479)]=function(_0x5f2b82){const _0xd6e51c=_0x28fd0f,_0x4cae15=this[_0xd6e51c(0x153)]()[_0x5f2b82],_0x559617=$gameParty[_0xd6e51c(0x288)]()['filter'](_0x1a3ece=>DataManager[_0xd6e51c(0x49a)](_0x1a3ece)[_0xd6e51c(0x41a)](_0x4cae15)&&this[_0xd6e51c(0x207)](_0x1a3ece)&&!DataManager[_0xd6e51c(0x22f)](_0x1a3ece));let _0x5addc5=null,_0x5e6dca=-0x3e8;for(let _0x4ae062=0x0;_0x4ae062<_0x559617[_0xd6e51c(0x176)];_0x4ae062++){const _0x5c23da=this[_0xd6e51c(0x148)](_0x559617[_0x4ae062]);_0x5c23da>_0x5e6dca&&(_0x5e6dca=_0x5c23da,_0x5addc5=_0x559617[_0x4ae062]);}return _0x5addc5;},Game_Actor[_0x28fd0f(0x1c0)]['isOptimizeEquipOk']=function(_0x23145e){const _0x34848d=_0x28fd0f;return this[_0x34848d(0x1fc)]()['includes'](this['equipSlots']()[_0x23145e])?![]:this[_0x34848d(0x27a)](_0x23145e);},VisuMZ[_0x28fd0f(0x1ed)]['Game_Actor_isEquipChangeOk']=Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x27a)],Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x27a)]=function(_0xd320c9){const _0x4bb8ac=_0x28fd0f,_0x38114e=this[_0x4bb8ac(0x345)][_0xd320c9];if(_0x38114e){const _0x2913ba=_0x38114e[_0x4bb8ac(0x384)]();if(DataManager[_0x4bb8ac(0x22f)](_0x2913ba))return![];}return VisuMZ[_0x4bb8ac(0x1ed)][_0x4bb8ac(0x194)][_0x4bb8ac(0x245)](this,_0xd320c9);},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x1fc)]=function(){const _0x138b17=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x138b17(0x14a)]['EquipScene']['NonOptimizeETypes'];},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x2a6)]=Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x3bc)],Game_Actor[_0x28fd0f(0x1c0)]['tradeItemWithParty']=function(_0x4e6004,_0x2bc966){const _0x13649a=_0x28fd0f;if(this['_tempActor'])return![];$gameTemp[_0x13649a(0x498)]=!![];const _0x335701=VisuMZ[_0x13649a(0x1ed)]['Game_Actor_tradeItemWithParty'][_0x13649a(0x245)](this,_0x4e6004,_0x2bc966);return $gameTemp[_0x13649a(0x498)]=![],_0x335701;},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x481)]=function(_0x362e54,_0x58898b){const _0x43405c=_0x28fd0f,_0x2110af=this[_0x43405c(0x371)](_0x362e54);if(_0x2110af<0x0)return;const _0x1b70d5=_0x362e54===0x1?$dataWeapons[_0x58898b]:$dataArmors[_0x58898b];this[_0x43405c(0x2af)](_0x2110af,_0x1b70d5);},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x371)]=function(_0x47420b){const _0x173144=_0x28fd0f;let _0x5ef55a=0x0;const _0x198447=this[_0x173144(0x153)](),_0x541883=this['equips']();for(let _0xd59680=0x0;_0xd59680<_0x198447[_0x173144(0x176)];_0xd59680++){if(_0x198447[_0xd59680]===_0x47420b){_0x5ef55a=_0xd59680;if(!_0x541883[_0xd59680])return _0x5ef55a;}}return _0x5ef55a;},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x432)]=Game_Actor['prototype'][_0x28fd0f(0x1b8)],Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b8)]=function(_0x9810d6){const _0x5e9cc9=_0x28fd0f;let _0x7fd5a7=VisuMZ[_0x5e9cc9(0x1ed)]['Game_Actor_paramPlus'][_0x5e9cc9(0x245)](this,_0x9810d6);for(const _0xd08a64 of this[_0x5e9cc9(0x43b)]()){if(_0xd08a64)_0x7fd5a7+=this[_0x5e9cc9(0x1ad)](_0xd08a64,_0x9810d6);}return _0x7fd5a7;},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x1ad)]=function(_0x464056,_0x1b8910){const _0x31ef9c=_0x28fd0f;if(this[_0x31ef9c(0x396)])return 0x0;const _0x4a4225=(DataManager[_0x31ef9c(0x320)](_0x464056)?_0x31ef9c(0x40b):_0x31ef9c(0x18b))[_0x31ef9c(0xa8)](_0x464056['id']),_0x32accf=_0x31ef9c(0x335)['format'](_0x4a4225,_0x1b8910);if(VisuMZ[_0x31ef9c(0x1ed)][_0x31ef9c(0x3d8)][_0x32accf]){this[_0x31ef9c(0x396)]=!![];const _0x40ee98=VisuMZ[_0x31ef9c(0x1ed)]['paramJS'][_0x32accf]['call'](this,_0x464056,_0x1b8910);return this[_0x31ef9c(0x396)]=![],_0x40ee98;}else return 0x0;},Game_Actor['prototype'][_0x28fd0f(0x25d)]=function(_0x1cc2d8){const _0x52006b=_0x28fd0f;this[_0x52006b(0xad)]=!![],this[_0x52006b(0x3cd)]=_0x1cc2d8;},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x14c)]=Game_Party['prototype']['initialize'],Game_Party['prototype'][_0x28fd0f(0x159)]=function(){const _0x388c5e=_0x28fd0f;VisuMZ[_0x388c5e(0x1ed)][_0x388c5e(0x14c)]['call'](this),this[_0x388c5e(0x43d)](),this[_0x388c5e(0x170)]();},Game_Party['prototype'][_0x28fd0f(0x43d)]=function(){const _0x3df97a=_0x28fd0f;this[_0x3df97a(0x16a)]=[];},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0xed)]=function(_0x399832){const _0x1c6773=_0x28fd0f;if(!$gameTemp['newLabelEnabled']())return![];if(this[_0x1c6773(0x16a)]===undefined)this[_0x1c6773(0x43d)]();let _0x4f3fe8='';if(DataManager['isItem'](_0x399832))_0x4f3fe8=_0x1c6773(0x272)[_0x1c6773(0xa8)](_0x399832['id']);else{if(DataManager[_0x1c6773(0x320)](_0x399832))_0x4f3fe8=_0x1c6773(0x10e)[_0x1c6773(0xa8)](_0x399832['id']);else{if(DataManager[_0x1c6773(0x311)](_0x399832))_0x4f3fe8=_0x1c6773(0x3c1)[_0x1c6773(0xa8)](_0x399832['id']);else return;}}return this[_0x1c6773(0x16a)][_0x1c6773(0x41a)](_0x4f3fe8);},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x3a5)]=function(_0x4bbaf2){const _0x1fbdb1=_0x28fd0f;if(!$gameTemp[_0x1fbdb1(0x4a3)]())return;if(this[_0x1fbdb1(0x16a)]===undefined)this[_0x1fbdb1(0x43d)]();let _0x49d2ad='';if(DataManager[_0x1fbdb1(0xec)](_0x4bbaf2))_0x49d2ad='item-%1'[_0x1fbdb1(0xa8)](_0x4bbaf2['id']);else{if(DataManager[_0x1fbdb1(0x320)](_0x4bbaf2))_0x49d2ad=_0x1fbdb1(0x10e)[_0x1fbdb1(0xa8)](_0x4bbaf2['id']);else{if(DataManager[_0x1fbdb1(0x311)](_0x4bbaf2))_0x49d2ad=_0x1fbdb1(0x3c1)['format'](_0x4bbaf2['id']);else return;}}if(!this[_0x1fbdb1(0x16a)][_0x1fbdb1(0x41a)](_0x49d2ad))this['_newItemsList'][_0x1fbdb1(0xb5)](_0x49d2ad);},Game_Party[_0x28fd0f(0x1c0)]['clearNewItem']=function(_0x549cb4){const _0x5ce15f=_0x28fd0f;if(!$gameTemp[_0x5ce15f(0x4a3)]())return;if(this[_0x5ce15f(0x16a)]===undefined)this['initNewItemsList']();let _0x24cc03='';if(DataManager[_0x5ce15f(0xec)](_0x549cb4))_0x24cc03=_0x5ce15f(0x272)['format'](_0x549cb4['id']);else{if(DataManager[_0x5ce15f(0x320)](_0x549cb4))_0x24cc03=_0x5ce15f(0x10e)[_0x5ce15f(0xa8)](_0x549cb4['id']);else{if(DataManager[_0x5ce15f(0x311)](_0x549cb4))_0x24cc03=_0x5ce15f(0x3c1)['format'](_0x549cb4['id']);else return;}}this[_0x5ce15f(0x16a)][_0x5ce15f(0x41a)](_0x24cc03)&&this[_0x5ce15f(0x16a)][_0x5ce15f(0x28d)](this[_0x5ce15f(0x16a)][_0x5ce15f(0x25c)](_0x24cc03),0x1);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x486)]=Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x365)],Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x365)]=function(_0x3d03a6){const _0x10d92b=_0x28fd0f;if(DataManager[_0x10d92b(0xbb)](_0x3d03a6))_0x3d03a6=DataManager[_0x10d92b(0xeb)](_0x3d03a6);return VisuMZ[_0x10d92b(0x1ed)]['Game_Party_numItems'][_0x10d92b(0x245)](this,_0x3d03a6);},VisuMZ[_0x28fd0f(0x1ed)]['Game_Party_gainItem']=Game_Party[_0x28fd0f(0x1c0)]['gainItem'],Game_Party[_0x28fd0f(0x1c0)]['gainItem']=function(_0x2482ee,_0x7f9ab9,_0x4025a0){const _0xfcd056=_0x28fd0f;if(DataManager[_0xfcd056(0xbb)](_0x2482ee))_0x2482ee=null;const _0x1781a3=this[_0xfcd056(0x365)](_0x2482ee);VisuMZ['ItemsEquipsCore']['Game_Party_gainItem'][_0xfcd056(0x245)](this,_0x2482ee,_0x7f9ab9,_0x4025a0);if(this[_0xfcd056(0x365)](_0x2482ee)>_0x1781a3)this[_0xfcd056(0x3a5)](_0x2482ee);},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x1f4)]=function(_0x5318de){const _0x167965=_0x28fd0f;if(DataManager[_0x167965(0xbb)](_0x5318de))_0x5318de=DataManager[_0x167965(0xeb)](_0x5318de);return DataManager[_0x167965(0x49f)](_0x5318de);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0xce)]=Game_Party['prototype'][_0x28fd0f(0x199)],Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x199)]=function(_0x423772){const _0x17c7f5=_0x28fd0f;if(_0x423772){const _0xf5c2d3=_0x423772[_0x17c7f5(0x409)]||'';if(_0xf5c2d3[_0x17c7f5(0x275)](/<(?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i)){const _0x3a533e=Number(RegExp['$1'])*0.01;if(Math[_0x17c7f5(0x489)]()<_0x3a533e)return;}}VisuMZ[_0x17c7f5(0x1ed)][_0x17c7f5(0xce)][_0x17c7f5(0x245)](this,_0x423772);},Game_Party['prototype']['initShopTrackingData']=function(){const _0x39b73b=_0x28fd0f;this[_0x39b73b(0x162)]={'buy':{'gold':0x0,'items':{}},'sell':{'gold':0x0,'items':{}}};},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x21e)]=function(){const _0x2debd1=_0x28fd0f;return this[_0x2debd1(0x162)]===undefined&&this[_0x2debd1(0x170)](),this['_shopTrackingData'];},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x19a)]=function(_0x5ddd8a,_0x3e2a45){const _0x38a114=_0x28fd0f;if(!_0x3e2a45)return 0x0;this[_0x38a114(0x162)]===undefined&&this[_0x38a114(0x170)]();const _0x21773a=this[_0x38a114(0x21e)]();if(!_0x21773a[_0x5ddd8a])return 0x0;if(_0x3e2a45===_0x38a114(0x281))return _0x21773a[_0x5ddd8a][_0x38a114(0x281)]=_0x21773a[_0x5ddd8a][_0x38a114(0x281)]||0x0,_0x21773a[_0x5ddd8a][_0x38a114(0x281)];else{if(DataManager[_0x38a114(0xec)](_0x3e2a45))key='item-%1'[_0x38a114(0xa8)](_0x3e2a45['id']);else{if(DataManager['isWeapon'](_0x3e2a45))key='weapon-%1'['format'](_0x3e2a45['id']);else{if(DataManager[_0x38a114(0x311)](_0x3e2a45))key=_0x38a114(0x3c1)[_0x38a114(0xa8)](_0x3e2a45['id']);else return 0x0;}}}return _0x21773a[_0x5ddd8a]['items'][key]=_0x21773a[_0x5ddd8a][_0x38a114(0x408)][key]||0x0,_0x21773a[_0x5ddd8a][_0x38a114(0x408)][key];},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0xfe)]=function(_0x3dd309){const _0x4976ef=_0x28fd0f;return this[_0x4976ef(0x19a)](_0x4976ef(0x11b),_0x3dd309);},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x37e)]=function(_0xbc99cb){const _0x538776=_0x28fd0f;return this[_0x538776(0x19a)](_0x538776(0x3d9),_0xbc99cb);},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x10c)]=function(){const _0x470584=_0x28fd0f;return this[_0x470584(0x19a)](_0x470584(0x11b),_0x470584(0x281));},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x2e5)]=function(){const _0x2e3071=_0x28fd0f;return this['getShopTrackingItem']('sell',_0x2e3071(0x281));},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x14d)]=function(_0x4f738a,_0x28f326,_0x4b4181){const _0x57e75b=_0x28fd0f;if(!_0x28f326)return;if(_0x4b4181<=0x0)return;this[_0x57e75b(0x162)]===undefined&&this[_0x57e75b(0x170)]();const _0x2da633=this[_0x57e75b(0x21e)]();if(!_0x2da633[_0x4f738a])return;if(_0x28f326===_0x57e75b(0x281)){_0x2da633[_0x4f738a][_0x57e75b(0x281)]=_0x2da633[_0x4f738a][_0x57e75b(0x281)]||0x0,_0x2da633[_0x4f738a][_0x57e75b(0x281)]+=_0x4b4181;return;}else{if(DataManager[_0x57e75b(0xec)](_0x28f326))key=_0x57e75b(0x272)[_0x57e75b(0xa8)](_0x28f326['id']);else{if(DataManager[_0x57e75b(0x320)](_0x28f326))key=_0x57e75b(0x10e)[_0x57e75b(0xa8)](_0x28f326['id']);else{if(DataManager[_0x57e75b(0x311)](_0x28f326))key=_0x57e75b(0x3c1)[_0x57e75b(0xa8)](_0x28f326['id']);else return;}}}_0x2da633[_0x4f738a][_0x57e75b(0x408)][key]=_0x2da633[_0x4f738a][_0x57e75b(0x408)][key]||0x0,_0x2da633[_0x4f738a]['items'][key]+=_0x4b4181;},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x160)]=function(_0x24c960,_0x1e9faa){const _0x32223d=_0x28fd0f;this[_0x32223d(0x14d)](_0x32223d(0x11b),_0x24c960,_0x1e9faa);},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x36f)]=function(_0x5668bc,_0x58a039){const _0x20dbbb=_0x28fd0f;this[_0x20dbbb(0x14d)](_0x20dbbb(0x3d9),_0x5668bc,_0x58a039);},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x295)]=function(_0x4fd195){const _0x3c5788=_0x28fd0f;this[_0x3c5788(0x14d)](_0x3c5788(0x11b),_0x3c5788(0x281),_0x4fd195);},Game_Party[_0x28fd0f(0x1c0)][_0x28fd0f(0x120)]=function(_0x50f572){const _0xd85e4a=_0x28fd0f;this['addShopTrackingItem']('sell',_0xd85e4a(0x281),_0x50f572);},VisuMZ[_0x28fd0f(0x1ed)]['Scene_ItemBase_activateItemWindow']=Scene_ItemBase[_0x28fd0f(0x1c0)][_0x28fd0f(0x34c)],Scene_ItemBase['prototype'][_0x28fd0f(0x34c)]=function(){const _0x278e27=_0x28fd0f;VisuMZ[_0x278e27(0x1ed)][_0x278e27(0x321)][_0x278e27(0x245)](this),this['_itemWindow'][_0x278e27(0x38c)]();},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x24b)]=function(){const _0x2b8003=_0x28fd0f;if(ConfigManager[_0x2b8003(0x2b1)]&&ConfigManager[_0x2b8003(0x4a9)]!==undefined)return ConfigManager[_0x2b8003(0x4a9)];else return this[_0x2b8003(0x4a5)]()?this[_0x2b8003(0x34f)]()[_0x2b8003(0x275)](/LOWER/i):Scene_ItemBase[_0x2b8003(0x1c0)][_0x2b8003(0x24b)][_0x2b8003(0x245)](this);},Scene_Item['prototype'][_0x28fd0f(0x2a1)]=function(){const _0x4a4068=_0x28fd0f;if(ConfigManager[_0x4a4068(0x2b1)]&&ConfigManager[_0x4a4068(0x492)]!==undefined)return ConfigManager[_0x4a4068(0x492)];else return this[_0x4a4068(0x4a5)]()?this['updatedLayoutStyle']()['match'](/RIGHT/i):Scene_ItemBase['prototype']['isRightInputMode'][_0x4a4068(0x245)](this);},Scene_Item['prototype'][_0x28fd0f(0x34f)]=function(){const _0x2cff0a=_0x28fd0f;return VisuMZ[_0x2cff0a(0x1ed)][_0x2cff0a(0x14a)]['ItemScene'][_0x2cff0a(0x26b)];},Scene_Item['prototype'][_0x28fd0f(0x477)]=function(){const _0xe9d42f=_0x28fd0f;return this[_0xe9d42f(0x21b)]&&this[_0xe9d42f(0x21b)]['isUseModernControls']();},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x4a5)]=function(){const _0x557b6b=_0x28fd0f;return VisuMZ[_0x557b6b(0x1ed)][_0x557b6b(0x14a)][_0x557b6b(0xff)][_0x557b6b(0x163)];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x3dd)]=Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x24a)],Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x24a)]=function(){const _0xdd4932=_0x28fd0f;VisuMZ[_0xdd4932(0x1ed)][_0xdd4932(0x3dd)][_0xdd4932(0x245)](this),this['isUseModernControls']()&&this[_0xdd4932(0x46c)]();},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Item_helpWindowRect']=Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x325)],Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x325)]=function(){const _0x6e3274=_0x28fd0f;return this[_0x6e3274(0x4a5)]()?this[_0x6e3274(0x401)]():VisuMZ[_0x6e3274(0x1ed)][_0x6e3274(0x2f6)][_0x6e3274(0x245)](this);},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x401)]=function(){const _0x4a7a6f=_0x28fd0f,_0x517ea4=0x0,_0x53e444=this['helpAreaTop'](),_0x137912=Graphics[_0x4a7a6f(0x218)],_0x43e6b3=this[_0x4a7a6f(0x313)]();return new Rectangle(_0x517ea4,_0x53e444,_0x137912,_0x43e6b3);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2e8)]=Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x32f)],Scene_Item[_0x28fd0f(0x1c0)]['createCategoryWindow']=function(){const _0x294748=_0x28fd0f;VisuMZ[_0x294748(0x1ed)][_0x294748(0x2e8)][_0x294748(0x245)](this),this[_0x294748(0x477)]()&&this[_0x294748(0x17f)]();},Scene_Item['prototype'][_0x28fd0f(0x17f)]=function(){const _0x1d29bf=_0x28fd0f;delete this[_0x1d29bf(0x21b)][_0x1d29bf(0xdd)]['ok'],delete this['_categoryWindow'][_0x1d29bf(0xdd)][_0x1d29bf(0x44c)];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x32d)]=Scene_Item['prototype']['categoryWindowRect'],Scene_Item['prototype']['categoryWindowRect']=function(){const _0x3663d0=_0x28fd0f;return this[_0x3663d0(0x4a5)]()?this[_0x3663d0(0x1f0)]():VisuMZ[_0x3663d0(0x1ed)][_0x3663d0(0x32d)][_0x3663d0(0x245)](this);},Scene_Item['prototype'][_0x28fd0f(0x1f0)]=function(){const _0x5a73ae=_0x28fd0f,_0x3bcd8d=0x0,_0x1818e3=this[_0x5a73ae(0x420)](),_0xc8e65a=Graphics[_0x5a73ae(0x218)],_0x2bb7de=this[_0x5a73ae(0x165)](0x1,!![]);return new Rectangle(_0x3bcd8d,_0x1818e3,_0xc8e65a,_0x2bb7de);},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Item_createItemWindow']=Scene_Item[_0x28fd0f(0x1c0)]['createItemWindow'],Scene_Item['prototype'][_0x28fd0f(0x240)]=function(){const _0x4c93c1=_0x28fd0f;VisuMZ[_0x4c93c1(0x1ed)][_0x4c93c1(0x378)][_0x4c93c1(0x245)](this),this['isUseModernControls']()&&this[_0x4c93c1(0x430)](),this[_0x4c93c1(0x355)]()&&this[_0x4c93c1(0x3ec)]();},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Item_itemWindowRect']=Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b0)],Scene_Item['prototype'][_0x28fd0f(0x1b0)]=function(){const _0x1b2c32=_0x28fd0f;if(this[_0x1b2c32(0x4a5)]())return this[_0x1b2c32(0x283)]();else{const _0xbec476=VisuMZ['ItemsEquipsCore'][_0x1b2c32(0x463)][_0x1b2c32(0x245)](this);return this[_0x1b2c32(0x355)]()&&this['adjustItemWidthByStatus']()&&(_0xbec476[_0x1b2c32(0x248)]-=this['statusWidth']()),_0xbec476;}},Scene_Item['prototype'][_0x28fd0f(0x283)]=function(){const _0xf496ad=_0x28fd0f,_0x4d82d3=this[_0xf496ad(0x2a1)]()?this['statusWidth']():0x0,_0x436981=this[_0xf496ad(0x21b)]['y']+this[_0xf496ad(0x21b)][_0xf496ad(0x25b)],_0x3715e7=Graphics[_0xf496ad(0x218)]-this[_0xf496ad(0x3b1)](),_0x488e16=this[_0xf496ad(0x445)]()-_0x436981;return new Rectangle(_0x4d82d3,_0x436981,_0x3715e7,_0x488e16);},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x430)]=function(){const _0x5441ef=_0x28fd0f;this['_itemWindow'][_0x5441ef(0x21f)](_0x5441ef(0x44c),this['popScene'][_0x5441ef(0x3c0)](this));},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x355)]=function(){const _0x518939=_0x28fd0f;return this[_0x518939(0x4a5)]()?!![]:VisuMZ[_0x518939(0x1ed)][_0x518939(0x14a)][_0x518939(0xff)]['ShowShopStatus'];},Scene_Item['prototype'][_0x28fd0f(0x2fa)]=function(){const _0x311355=_0x28fd0f;return VisuMZ[_0x311355(0x1ed)][_0x311355(0x14a)][_0x311355(0xff)][_0x311355(0x376)];},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x3ec)]=function(){const _0x2f4a7c=_0x28fd0f,_0x2e52cd=this[_0x2f4a7c(0x312)]();this[_0x2f4a7c(0x3ee)]=new Window_ShopStatus(_0x2e52cd),this[_0x2f4a7c(0x3f4)](this['_statusWindow']),this[_0x2f4a7c(0x364)][_0x2f4a7c(0x30e)](this[_0x2f4a7c(0x3ee)]);const _0x451201=VisuMZ[_0x2f4a7c(0x1ed)]['Settings']['ItemScene'][_0x2f4a7c(0x2ce)];this[_0x2f4a7c(0x3ee)][_0x2f4a7c(0x1e3)](_0x451201||0x0);},Scene_Item['prototype'][_0x28fd0f(0x312)]=function(){const _0x3d4630=_0x28fd0f;return this[_0x3d4630(0x4a5)]()?this[_0x3d4630(0x3e7)]():VisuMZ[_0x3d4630(0x1ed)][_0x3d4630(0x14a)]['ItemScene'][_0x3d4630(0x35d)][_0x3d4630(0x245)](this);},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x3e7)]=function(){const _0x33b6d2=_0x28fd0f,_0x5c4a11=this[_0x33b6d2(0x3b1)](),_0xa71ba7=this[_0x33b6d2(0x364)][_0x33b6d2(0x25b)],_0x217062=this[_0x33b6d2(0x2a1)]()?0x0:Graphics[_0x33b6d2(0x218)]-this['statusWidth'](),_0x3f0be1=this[_0x33b6d2(0x364)]['y'];return new Rectangle(_0x217062,_0x3f0be1,_0x5c4a11,_0xa71ba7);},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x3b1)]=function(){const _0x52248c=_0x28fd0f;return Scene_Shop[_0x52248c(0x1c0)]['statusWidth']();},Scene_Item[_0x28fd0f(0x1c0)][_0x28fd0f(0x177)]=function(){const _0x3a8aa6=_0x28fd0f;if(!this['updatedLayoutStyle']())return![];if(!this[_0x3a8aa6(0x477)]())return![];if(!this['_itemWindow'])return![];if(!this[_0x3a8aa6(0x364)][_0x3a8aa6(0x123)])return![];return this[_0x3a8aa6(0x34f)]()&&this[_0x3a8aa6(0x477)]();},Scene_Item[_0x28fd0f(0x1c0)]['buttonAssistKey1']=function(){const _0x27222b=_0x28fd0f;if(this[_0x27222b(0x177)]())return this[_0x27222b(0x364)][_0x27222b(0x435)]()===0x1?TextManager[_0x27222b(0x453)](_0x27222b(0x4aa),_0x27222b(0x299)):TextManager[_0x27222b(0x453)](_0x27222b(0x2d1),_0x27222b(0x12f));return Scene_ItemBase[_0x27222b(0x1c0)][_0x27222b(0x2c3)][_0x27222b(0x245)](this);},Scene_Item['prototype'][_0x28fd0f(0x149)]=function(){const _0x588f62=_0x28fd0f;if(this[_0x588f62(0x177)]())return VisuMZ[_0x588f62(0x1ed)][_0x588f62(0x14a)][_0x588f62(0xff)][_0x588f62(0x1bc)];return Scene_ItemBase[_0x588f62(0x1c0)]['buttonAssistText1']['call'](this);},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x406)]=function(){const _0x1bcf66=_0x28fd0f;Scene_ItemBase[_0x1bcf66(0x1c0)][_0x1bcf66(0x406)][_0x1bcf66(0x245)](this),this['refreshActor']();},Scene_Equip[_0x28fd0f(0x1c0)]['isBottomHelpMode']=function(){const _0xf2148c=_0x28fd0f;if(ConfigManager[_0xf2148c(0x2b1)]&&ConfigManager[_0xf2148c(0x4a9)]!==undefined)return ConfigManager['uiHelpPosition'];else{if(this[_0xf2148c(0x4a5)]())return this[_0xf2148c(0x34f)]()['match'](/LOWER/i);else Scene_MenuBase['prototype'][_0xf2148c(0x2a1)][_0xf2148c(0x245)](this);}},Scene_Equip['prototype']['isRightInputMode']=function(){const _0x50d9bb=_0x28fd0f;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x50d9bb(0x492)]!==undefined)return ConfigManager[_0x50d9bb(0x492)];else{if(this[_0x50d9bb(0x4a5)]())return this[_0x50d9bb(0x34f)]()[_0x50d9bb(0x275)](/RIGHT/i);else Scene_MenuBase[_0x50d9bb(0x1c0)][_0x50d9bb(0x2a1)][_0x50d9bb(0x245)](this);}},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x34f)]=function(){const _0x1dc620=_0x28fd0f;return VisuMZ[_0x1dc620(0x1ed)]['Settings']['EquipScene'][_0x1dc620(0x26b)];},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x477)]=function(){const _0x3abd70=_0x28fd0f;return this[_0x3abd70(0x211)]&&this[_0x3abd70(0x211)][_0x3abd70(0x477)]();},Scene_Equip[_0x28fd0f(0x1c0)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x246e91=_0x28fd0f;return VisuMZ[_0x246e91(0x1ed)][_0x246e91(0x14a)][_0x246e91(0x257)][_0x246e91(0x163)];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x198)]=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x24a)],Scene_Equip[_0x28fd0f(0x1c0)]['create']=function(){const _0x45c680=_0x28fd0f;VisuMZ[_0x45c680(0x1ed)][_0x45c680(0x198)][_0x45c680(0x245)](this),this['isUseModernControls']()&&this[_0x45c680(0x3bb)]();},VisuMZ['ItemsEquipsCore']['Scene_Equip_helpWindowRect']=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x325)],Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x325)]=function(){const _0x1f75e9=_0x28fd0f;return this[_0x1f75e9(0x4a5)]()?this[_0x1f75e9(0x401)]():VisuMZ[_0x1f75e9(0x1ed)][_0x1f75e9(0x395)][_0x1f75e9(0x245)](this);},Scene_Equip[_0x28fd0f(0x1c0)]['helpWindowRectItemsEquipsCore']=function(){const _0x36f775=_0x28fd0f,_0x53a63c=0x0,_0x33340e=this['helpAreaTop'](),_0x221fb8=Graphics[_0x36f775(0x218)],_0x5fd4bf=this[_0x36f775(0x313)]();return new Rectangle(_0x53a63c,_0x33340e,_0x221fb8,_0x5fd4bf);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x39f)]=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x312)],Scene_Equip[_0x28fd0f(0x1c0)]['statusWindowRect']=function(){const _0x33aaa3=_0x28fd0f;return this[_0x33aaa3(0x4a5)]()?this[_0x33aaa3(0x3e7)]():VisuMZ[_0x33aaa3(0x1ed)][_0x33aaa3(0x39f)][_0x33aaa3(0x245)](this);},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x3e7)]=function(){const _0x4c16e5=_0x28fd0f,_0x542f30=this['isRightInputMode']()?0x0:Graphics[_0x4c16e5(0x218)]-this[_0x4c16e5(0x3b1)](),_0x162633=this['mainAreaTop'](),_0x8ed267=this[_0x4c16e5(0x3b1)](),_0x27f919=this[_0x4c16e5(0x41f)]();return new Rectangle(_0x542f30,_0x162633,_0x8ed267,_0x27f919);},VisuMZ['ItemsEquipsCore']['Scene_Equip_createCommandWindow']=Scene_Equip[_0x28fd0f(0x1c0)]['createCommandWindow'],Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x2c7)]=function(){const _0xd0fc4c=_0x28fd0f;VisuMZ[_0xd0fc4c(0x1ed)][_0xd0fc4c(0x404)][_0xd0fc4c(0x245)](this);if(this[_0xd0fc4c(0x38b)])this['_commandWindow'][_0xd0fc4c(0xac)](this['_helpWindow']);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x24c)]=Scene_Equip['prototype'][_0x28fd0f(0xf8)],Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0xf8)]=function(){const _0xf3d9ae=_0x28fd0f;return this[_0xf3d9ae(0x4a5)]()?this[_0xf3d9ae(0x3f0)]():VisuMZ[_0xf3d9ae(0x1ed)][_0xf3d9ae(0x24c)]['call'](this);},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x319)]=function(){const _0x1dfd94=_0x28fd0f,_0x4c2660=VisuMZ[_0x1dfd94(0x1ed)][_0x1dfd94(0x14a)]['EquipScene'];return _0x4c2660['CommandAddOptimize']||_0x4c2660[_0x1dfd94(0x23f)];},Scene_Equip['prototype'][_0x28fd0f(0x3f0)]=function(){const _0x1a8c40=_0x28fd0f,_0x22dc8b=this[_0x1a8c40(0x319)](),_0x34d76b=this[_0x1a8c40(0x2a1)]()?this[_0x1a8c40(0x3b1)]():0x0,_0x10f14c=this[_0x1a8c40(0x420)](),_0x3ebb2a=Graphics['boxWidth']-this[_0x1a8c40(0x3b1)](),_0x45f2ca=_0x22dc8b?this[_0x1a8c40(0x165)](0x1,!![]):0x0;return new Rectangle(_0x34d76b,_0x10f14c,_0x3ebb2a,_0x45f2ca);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x9f)]=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x37d)],Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x37d)]=function(){const _0x1f64e8=_0x28fd0f;VisuMZ['ItemsEquipsCore'][_0x1f64e8(0x9f)][_0x1f64e8(0x245)](this),this[_0x1f64e8(0x477)]()&&this['postCreateSlotWindowItemsEquipsCore']();},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Equip_slotWindowRect']=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x39e)],Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x39e)]=function(){const _0x5d5800=_0x28fd0f;return this[_0x5d5800(0x4a5)]()?this['slotWindowRectItemsEquipsCore']():VisuMZ[_0x5d5800(0x1ed)]['Scene_Equip_slotWindowRect'][_0x5d5800(0x245)](this);},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0xd1)]=function(){const _0x5c1cd8=_0x28fd0f,_0x19c600=this[_0x5c1cd8(0xf8)](),_0x2c2d74=this['isRightInputMode']()?this[_0x5c1cd8(0x3b1)]():0x0,_0x547077=_0x19c600['y']+_0x19c600['height'],_0x504c6f=Graphics[_0x5c1cd8(0x218)]-this[_0x5c1cd8(0x3b1)](),_0x2114f5=this['mainAreaHeight']()-_0x19c600['height'];return new Rectangle(_0x2c2d74,_0x547077,_0x504c6f,_0x2114f5);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x134)]=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b0)],Scene_Equip['prototype'][_0x28fd0f(0x1b0)]=function(){const _0x301b6b=_0x28fd0f;return this[_0x301b6b(0x4a5)]()?this[_0x301b6b(0x39e)]():VisuMZ[_0x301b6b(0x1ed)]['Scene_Equip_itemWindowRect'][_0x301b6b(0x245)](this);},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x3b1)]=function(){const _0x36fa7c=_0x28fd0f;return this[_0x36fa7c(0x4a5)]()?this[_0x36fa7c(0xca)]():VisuMZ[_0x36fa7c(0x1ed)][_0x36fa7c(0x14a)]['EquipScene'][_0x36fa7c(0x202)];},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0xca)]=function(){const _0x2014fd=_0x28fd0f;return Math[_0x2014fd(0x2bb)](Graphics['boxWidth']/0x2);},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x399)]=function(){const _0x12eee9=_0x28fd0f;this[_0x12eee9(0x338)][_0x12eee9(0x21f)](_0x12eee9(0x44c),this[_0x12eee9(0x14e)][_0x12eee9(0x3c0)](this)),this[_0x12eee9(0x338)][_0x12eee9(0x21f)](_0x12eee9(0x12f),this[_0x12eee9(0x2ab)]['bind'](this)),this[_0x12eee9(0x338)][_0x12eee9(0x21f)](_0x12eee9(0x2d1),this[_0x12eee9(0xa5)]['bind'](this));},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0xf9)]=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x3bb)],Scene_Equip[_0x28fd0f(0x1c0)]['commandEquip']=function(){const _0x23f036=_0x28fd0f;this[_0x23f036(0x477)]()&&(this[_0x23f036(0x211)][_0x23f036(0x3da)](),this[_0x23f036(0x211)][_0x23f036(0x31b)]()),VisuMZ['ItemsEquipsCore'][_0x23f036(0xf9)][_0x23f036(0x245)](this);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x3b4)]=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x145)],Scene_Equip['prototype'][_0x28fd0f(0x145)]=function(){const _0x14aa8d=_0x28fd0f;this[_0x14aa8d(0x338)][_0x14aa8d(0x3fa)]()>=0x0?(VisuMZ[_0x14aa8d(0x1ed)][_0x14aa8d(0x3b4)][_0x14aa8d(0x245)](this),this[_0x14aa8d(0x499)]()):(this[_0x14aa8d(0x338)][_0x14aa8d(0xd9)](0x0),this[_0x14aa8d(0x338)]['activate']());},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x499)]=function(){const _0x157974=_0x28fd0f;this[_0x157974(0x364)][_0x157974(0x143)]();const _0x5d6405=this[_0x157974(0x338)][_0x157974(0x373)](),_0xc151c=this[_0x157974(0x364)][_0x157974(0x339)][_0x157974(0x25c)](_0x5d6405),_0x105b06=Math['floor'](this[_0x157974(0x364)][_0x157974(0x3b5)]()/0x2)-0x1;this['_itemWindow'][_0x157974(0xd9)](_0xc151c>=0x0?_0xc151c:0x0),this[_0x157974(0x364)][_0x157974(0x461)]>0x1&&(this[_0x157974(0x364)][_0x157974(0x461)]=0x1,this[_0x157974(0x364)]['updateSmoothScroll']()),this[_0x157974(0x364)]['setTopRow'](this[_0x157974(0x364)][_0x157974(0x3fa)]()-_0x105b06);},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Equip_onSlotCancel']=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x3e0)],Scene_Equip['prototype']['onSlotCancel']=function(){const _0x340281=_0x28fd0f;VisuMZ['ItemsEquipsCore'][_0x340281(0x491)][_0x340281(0x245)](this),this[_0x340281(0x477)]()&&(this[_0x340281(0x211)][_0x340281(0xd9)](0x0),this[_0x340281(0x338)][_0x340281(0x31b)]());},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Equip_onActorChange']=Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x1c5)],Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x1c5)]=function(){const _0x17864e=_0x28fd0f;VisuMZ[_0x17864e(0x1ed)][_0x17864e(0x251)]['call'](this),this[_0x17864e(0x477)]()&&(this[_0x17864e(0x211)][_0x17864e(0x31b)](),this['_commandWindow'][_0x17864e(0x3da)](),this[_0x17864e(0x338)][_0x17864e(0xd9)](0x0),this[_0x17864e(0x338)][_0x17864e(0x3ab)]());},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x187)]=function(){const _0x45e236=_0x28fd0f;if(!this[_0x45e236(0x338)])return![];if(!this[_0x45e236(0x338)]['active'])return![];return this[_0x45e236(0x338)][_0x45e236(0x480)]();},Scene_Equip['prototype']['buttonAssistKey3']=function(){const _0x16920b=_0x28fd0f;if(this[_0x16920b(0x187)]())return TextManager['getInputButtonString'](_0x16920b(0x12b));return Scene_MenuBase[_0x16920b(0x1c0)]['buttonAssistKey3'][_0x16920b(0x245)](this);},Scene_Equip['prototype'][_0x28fd0f(0x40c)]=function(){const _0x3997f3=_0x28fd0f;if(this[_0x3997f3(0x187)]())return VisuMZ[_0x3997f3(0x1ed)][_0x3997f3(0x14a)][_0x3997f3(0x257)][_0x3997f3(0x2e1)];return Scene_MenuBase[_0x3997f3(0x1c0)][_0x3997f3(0x40c)][_0x3997f3(0x245)](this);},Scene_Equip[_0x28fd0f(0x1c0)]['buttonAssistOffset3']=function(){const _0x304a37=_0x28fd0f;if(this[_0x304a37(0x187)]())return this[_0x304a37(0x2fe)][_0x304a37(0x248)]/0x5/-0x3;return Scene_MenuBase[_0x304a37(0x1c0)]['buttonAssistOffset3']['call'](this);},Scene_Equip[_0x28fd0f(0x1c0)][_0x28fd0f(0x14e)]=function(){const _0xe49460=_0x28fd0f;SceneManager[_0xe49460(0x341)]();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x29c)]=Scene_Load['prototype']['reloadMapIfUpdated'],Scene_Load['prototype'][_0x28fd0f(0x1a1)]=function(){const _0x1e8485=_0x28fd0f;VisuMZ[_0x1e8485(0x1ed)][_0x1e8485(0x29c)][_0x1e8485(0x245)](this),this['refreshActorEquipSlotsIfUpdated']();},Scene_Load[_0x28fd0f(0x1c0)][_0x28fd0f(0x4a8)]=function(){const _0x557d40=_0x28fd0f;if($gameSystem['versionId']()!==$dataSystem[_0x557d40(0x2d9)])for(const _0x18f016 of $gameActors[_0x557d40(0x339)]){if(_0x18f016)_0x18f016[_0x557d40(0x2c8)]();}},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x24b)]=function(){const _0x411754=_0x28fd0f;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x411754(0x4a9)]!==undefined)return ConfigManager['uiHelpPosition'];else{if(this[_0x411754(0x4a5)]())return this['updatedLayoutStyle']()[_0x411754(0x275)](/LOWER/i);else Scene_MenuBase[_0x411754(0x1c0)][_0x411754(0x2a1)][_0x411754(0x245)](this);}},Scene_Shop[_0x28fd0f(0x1c0)]['isRightInputMode']=function(){const _0x488025=_0x28fd0f;if(ConfigManager[_0x488025(0x2b1)]&&ConfigManager[_0x488025(0x492)]!==undefined)return ConfigManager['uiInputPosition'];else{if(this[_0x488025(0x4a5)]())return this['updatedLayoutStyle']()[_0x488025(0x275)](/RIGHT/i);else Scene_MenuBase['prototype'][_0x488025(0x2a1)][_0x488025(0x245)](this);}},Scene_Shop['prototype']['updatedLayoutStyle']=function(){const _0x1dbf5f=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x1dbf5f(0x14a)][_0x1dbf5f(0x1a5)][_0x1dbf5f(0x26b)];},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x477)]=function(){const _0x52dba2=_0x28fd0f;return this[_0x52dba2(0x21b)]&&this[_0x52dba2(0x21b)][_0x52dba2(0x477)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x4a5)]=function(){const _0x2d5be1=_0x28fd0f;return VisuMZ['ItemsEquipsCore']['Settings']['ShopScene'][_0x2d5be1(0x163)];},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Shop_prepare']=Scene_Shop[_0x28fd0f(0x1c0)]['prepare'],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x179)]=function(_0x84ab16,_0x55db9b){const _0xdba2b8=_0x28fd0f;_0x84ab16=VisuMZ[_0xdba2b8(0x1ed)]['deepCopy'](_0x84ab16),VisuMZ['ItemsEquipsCore']['Scene_Shop_prepare'][_0xdba2b8(0x245)](this,_0x84ab16,_0x55db9b),this[_0xdba2b8(0xc5)]();},Scene_Shop[_0x28fd0f(0x1c0)]['adjustHiddenShownGoods']=function(){const _0x498346=_0x28fd0f;this[_0x498346(0x47a)]=0x0;const _0x2249dc=[];for(const _0x4b559f of this['_goods']){this[_0x498346(0x3e4)](_0x4b559f)?this[_0x498346(0x47a)]++:_0x2249dc[_0x498346(0xb5)](_0x4b559f);}for(const _0x437898 of _0x2249dc){this[_0x498346(0x3f8)][_0x498346(0x220)](_0x437898);}},Scene_Shop['prototype'][_0x28fd0f(0x3e4)]=function(_0x576348){if(_0x576348[0x0]>0x2||_0x576348[0x0]<0x0)return![];const _0x2a1870=[$dataItems,$dataWeapons,$dataArmors][_0x576348[0x0]][_0x576348[0x1]];if(!_0x2a1870)return![];return!![];},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x3cc)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x24a)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x24a)]=function(){const _0x21d778=_0x28fd0f;VisuMZ[_0x21d778(0x1ed)][_0x21d778(0x3cc)][_0x21d778(0x245)](this),this[_0x21d778(0x4a5)]()&&this[_0x21d778(0x191)](),this[_0x21d778(0x2f5)]();},Scene_Shop[_0x28fd0f(0x1c0)]['postCreateItemsEquipsCore']=function(){const _0x557fd9=_0x28fd0f;this[_0x557fd9(0x258)][_0x557fd9(0x31d)](),this[_0x557fd9(0x440)]['show'](),this[_0x557fd9(0x440)][_0x557fd9(0x3da)](),this[_0x557fd9(0x3ee)]['show']();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0xd5)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x325)],Scene_Shop[_0x28fd0f(0x1c0)]['helpWindowRect']=function(){const _0xda0dd9=_0x28fd0f;return this[_0xda0dd9(0x4a5)]()?this['helpWindowRectItemsEquipsCore']():VisuMZ[_0xda0dd9(0x1ed)]['Scene_Shop_helpWindowRect'][_0xda0dd9(0x245)](this);},Scene_Shop['prototype'][_0x28fd0f(0x401)]=function(){const _0x370a07=_0x28fd0f,_0x171d89=0x0,_0x573277=this['helpAreaTop'](),_0x39b352=Graphics[_0x370a07(0x218)],_0x327149=this[_0x370a07(0x313)]();return new Rectangle(_0x171d89,_0x573277,_0x39b352,_0x327149);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x49d)]=Scene_Shop['prototype']['goldWindowRect'],Scene_Shop['prototype'][_0x28fd0f(0x294)]=function(){const _0x2e40ba=_0x28fd0f;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x2e40ba(0x15d)]():VisuMZ[_0x2e40ba(0x1ed)][_0x2e40ba(0x49d)][_0x2e40ba(0x245)](this);},Scene_Shop[_0x28fd0f(0x1c0)]['goldWindowRectItemsEquipsCore']=function(){const _0x5a9b2e=_0x28fd0f,_0x154d32=this[_0x5a9b2e(0x433)](),_0x2a30fa=this[_0x5a9b2e(0x165)](0x1,!![]),_0xcf2d07=this[_0x5a9b2e(0x2a1)]()?0x0:Graphics[_0x5a9b2e(0x218)]-_0x154d32,_0x5a686f=this[_0x5a9b2e(0x420)]();return new Rectangle(_0xcf2d07,_0x5a686f,_0x154d32,_0x2a30fa);},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x45c)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0xf8)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0xf8)]=function(){const _0xcd9161=_0x28fd0f;return this[_0xcd9161(0x4a5)]()?this[_0xcd9161(0x3f0)]():VisuMZ[_0xcd9161(0x1ed)]['Scene_Shop_commandWindowRect'][_0xcd9161(0x245)](this);},Scene_Shop[_0x28fd0f(0x1c0)]['commandWindowRectItemsEquipsCore']=function(){const _0x40979a=_0x28fd0f,_0x48f15e=this[_0x40979a(0x2a1)]()?this[_0x40979a(0x433)]():0x0,_0x16a65e=this[_0x40979a(0x420)](),_0x4db6de=Graphics['boxWidth']-this[_0x40979a(0x433)](),_0x2e1f19=this['calcWindowHeight'](0x1,!![]);return new Rectangle(_0x48f15e,_0x16a65e,_0x4db6de,_0x2e1f19);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x4a7)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x10a)],Scene_Shop['prototype'][_0x28fd0f(0x10a)]=function(){const _0x8f1121=_0x28fd0f;return this[_0x8f1121(0x4a5)]()?this[_0x8f1121(0x18e)]():VisuMZ['ItemsEquipsCore'][_0x8f1121(0x4a7)]['call'](this);},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x18e)]=function(){const _0x22fa0c=_0x28fd0f,_0x4c5ea5=this['_commandWindow']['y']+this[_0x22fa0c(0x211)][_0x22fa0c(0x25b)],_0x4c6dad=Graphics['boxWidth']-this[_0x22fa0c(0x3b1)](),_0x55c3fa=this['isRightInputMode']()?Graphics[_0x22fa0c(0x218)]-_0x4c6dad:0x0,_0x2fe8c1=this[_0x22fa0c(0x41f)]()-this[_0x22fa0c(0x211)][_0x22fa0c(0x25b)];return new Rectangle(_0x55c3fa,_0x4c5ea5,_0x4c6dad,_0x2fe8c1);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2f1)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x312)],Scene_Shop['prototype'][_0x28fd0f(0x312)]=function(){const _0x5d12de=_0x28fd0f;return this[_0x5d12de(0x4a5)]()?this[_0x5d12de(0x3e7)]():VisuMZ[_0x5d12de(0x1ed)]['Scene_Shop_statusWindowRect'][_0x5d12de(0x245)](this);},Scene_Shop['prototype']['statusWindowRectItemsEquipsCore']=function(){const _0x37e303=_0x28fd0f,_0x4671e5=this[_0x37e303(0x3b1)](),_0x795f21=this[_0x37e303(0x41f)]()-this[_0x37e303(0x211)]['height'],_0x3ecf41=this[_0x37e303(0x2a1)]()?0x0:Graphics['boxWidth']-_0x4671e5,_0x39afa4=this[_0x37e303(0x211)]['y']+this['_commandWindow'][_0x37e303(0x25b)];return new Rectangle(_0x3ecf41,_0x39afa4,_0x4671e5,_0x795f21);},VisuMZ['ItemsEquipsCore']['Scene_Shop_buyWindowRect']=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x446)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x446)]=function(){const _0x5d422f=_0x28fd0f;return this[_0x5d422f(0x4a5)]()?this[_0x5d422f(0xb0)]():VisuMZ['ItemsEquipsCore'][_0x5d422f(0x30c)][_0x5d422f(0x245)](this);},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0xb0)]=function(){const _0x55f20a=_0x28fd0f,_0x39be1a=this[_0x55f20a(0x211)]['y']+this[_0x55f20a(0x211)][_0x55f20a(0x25b)],_0x427b46=Graphics[_0x55f20a(0x218)]-this[_0x55f20a(0x3b1)](),_0x2d2b24=this[_0x55f20a(0x41f)]()-this['_commandWindow'][_0x55f20a(0x25b)],_0x365c55=this[_0x55f20a(0x2a1)]()?Graphics['boxWidth']-_0x427b46:0x0;return new Rectangle(_0x365c55,_0x39be1a,_0x427b46,_0x2d2b24);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x3d1)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x32f)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x32f)]=function(){const _0x20dec7=_0x28fd0f;VisuMZ[_0x20dec7(0x1ed)][_0x20dec7(0x3d1)]['call'](this),this[_0x20dec7(0x477)]()&&this['postCreateCategoryWindowItemsEquipsCore']();},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x421)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x39d)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x39d)]=function(){const _0x41ac97=_0x28fd0f;return this[_0x41ac97(0x4a5)]()?this['categoryWindowRectItemsEquipsCore']():VisuMZ[_0x41ac97(0x1ed)][_0x41ac97(0x421)][_0x41ac97(0x245)](this);},Scene_Shop[_0x28fd0f(0x1c0)]['categoryWindowRectItemsEquipsCore']=function(){const _0x323fd4=_0x28fd0f,_0x537c48=this[_0x323fd4(0x211)]['y'],_0x4e6961=this[_0x323fd4(0x211)][_0x323fd4(0x248)],_0x325a27=this[_0x323fd4(0x165)](0x1,!![]),_0x300dd0=this[_0x323fd4(0x2a1)]()?Graphics[_0x323fd4(0x218)]-_0x4e6961:0x0;return new Rectangle(_0x300dd0,_0x537c48,_0x4e6961,_0x325a27);},Scene_Shop['prototype'][_0x28fd0f(0x17f)]=function(){const _0x11a9d2=_0x28fd0f;delete this[_0x11a9d2(0x21b)][_0x11a9d2(0xdd)]['ok'],delete this['_categoryWindow']['_handlers'][_0x11a9d2(0x44c)];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2e6)]=Scene_Shop['prototype'][_0x28fd0f(0xd6)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0xd6)]=function(){const _0xe6230e=_0x28fd0f;VisuMZ[_0xe6230e(0x1ed)][_0xe6230e(0x2e6)][_0xe6230e(0x245)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this['postCreateSellWindowItemsEquipsCore']();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x25e)]=Scene_Shop['prototype']['sellWindowRect'],Scene_Shop['prototype'][_0x28fd0f(0x1c1)]=function(){const _0x3e655c=_0x28fd0f;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x3e655c(0x219)]():VisuMZ[_0x3e655c(0x1ed)][_0x3e655c(0x25e)]['call'](this);},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x219)]=function(){const _0x87b703=_0x28fd0f,_0x3a1cb5=this['_categoryWindow']['y']+this[_0x87b703(0x21b)][_0x87b703(0x25b)],_0xe6c22c=Graphics[_0x87b703(0x218)]-this['statusWidth'](),_0x1b6097=this[_0x87b703(0x41f)]()-this[_0x87b703(0x21b)][_0x87b703(0x25b)],_0x29d3e7=this['isRightInputMode']()?Graphics[_0x87b703(0x218)]-_0xe6c22c:0x0;return new Rectangle(_0x29d3e7,_0x3a1cb5,_0xe6c22c,_0x1b6097);},Scene_Shop[_0x28fd0f(0x1c0)]['postCreateSellWindowItemsEquipsCore']=function(){const _0x3e2dec=_0x28fd0f;this[_0x3e2dec(0x10d)][_0x3e2dec(0x30e)](this[_0x3e2dec(0x3ee)]);},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x3b1)]=function(){const _0x4c127f=_0x28fd0f;return VisuMZ[_0x4c127f(0x1ed)][_0x4c127f(0x14a)][_0x4c127f(0x242)][_0x4c127f(0x4ab)];},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Shop_activateSellWindow']=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x1d4)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x1d4)]=function(){const _0x1a2520=_0x28fd0f;VisuMZ[_0x1a2520(0x1ed)][_0x1a2520(0x233)][_0x1a2520(0x245)](this),this[_0x1a2520(0x4a5)]()&&this[_0x1a2520(0x3ee)][_0x1a2520(0x133)](),this[_0x1a2520(0x10d)][_0x1a2520(0x108)]();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x467)]=Scene_Shop['prototype'][_0x28fd0f(0x256)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x256)]=function(){const _0x58125e=_0x28fd0f;VisuMZ[_0x58125e(0x1ed)][_0x58125e(0x467)][_0x58125e(0x245)](this),this[_0x58125e(0x4a5)]()&&this[_0x58125e(0x22a)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x22a)]=function(){const _0x15aecb=_0x28fd0f;this[_0x15aecb(0x496)]=this['_buyWindowLastIndex']||0x0,this[_0x15aecb(0x440)][_0x15aecb(0xd9)](this[_0x15aecb(0x496)]);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x214)]=Scene_Shop['prototype'][_0x28fd0f(0x20e)],Scene_Shop[_0x28fd0f(0x1c0)]['commandSell']=function(){const _0x47d72c=_0x28fd0f;VisuMZ[_0x47d72c(0x1ed)][_0x47d72c(0x214)][_0x47d72c(0x245)](this),this[_0x47d72c(0x4a5)]()&&this[_0x47d72c(0x358)](),this['isUseModernControls']()&&(this[_0x47d72c(0x21b)][_0x47d72c(0xd9)](0x0),this[_0x47d72c(0x46c)]());},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x358)]=function(){const _0x5ebd64=_0x28fd0f;this['_buyWindow'][_0x5ebd64(0x31d)](),this['_commandWindow'][_0x5ebd64(0x31d)]();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2ae)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x344)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x344)]=function(){const _0x5ce99e=_0x28fd0f;VisuMZ[_0x5ce99e(0x1ed)][_0x5ce99e(0x2ae)][_0x5ce99e(0x245)](this),this[_0x5ce99e(0x4a5)]()&&this[_0x5ce99e(0x264)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x264)]=function(){const _0x286875=_0x28fd0f;this[_0x286875(0x496)]=this[_0x286875(0x440)][_0x286875(0x3fa)](),this[_0x286875(0x440)]['show'](),this['_buyWindow']['deselect'](),this[_0x286875(0x440)][_0x286875(0x381)](0x0,0x0),this[_0x286875(0x3ee)][_0x286875(0x133)](),this[_0x286875(0x258)][_0x286875(0x31d)]();},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x37b)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x3a1)],Scene_Shop[_0x28fd0f(0x1c0)]['onCategoryCancel']=function(){const _0x172c1c=_0x28fd0f;VisuMZ['ItemsEquipsCore']['Scene_Shop_onCategoryCancel'][_0x172c1c(0x245)](this),this[_0x172c1c(0x4a5)]()&&this[_0x172c1c(0x465)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x465)]=function(){const _0x292c5b=_0x28fd0f;this[_0x292c5b(0x440)][_0x292c5b(0x133)](),this[_0x292c5b(0x211)][_0x292c5b(0x133)]();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x26a)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x158)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x158)]=function(){const _0x171bac=_0x28fd0f;$gameTemp['_bypassProxy']=!![],VisuMZ[_0x171bac(0x1ed)]['Scene_Shop_onBuyOk']['call'](this),$gameTemp['_bypassProxy']=![],this['_item']=this['_buyWindow'][_0x171bac(0x373)]();},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Shop_buyingPrice']=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x2dc)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x2dc)]=function(){const _0x251b51=_0x28fd0f;$gameTemp[_0x251b51(0xd0)]=!![],this[_0x251b51(0x394)]=this[_0x251b51(0x440)][_0x251b51(0x373)]();const _0x4322ce=VisuMZ['ItemsEquipsCore'][_0x251b51(0x4a2)][_0x251b51(0x245)](this);return $gameTemp[_0x251b51(0xd0)]=![],this[_0x251b51(0x394)]=this[_0x251b51(0x440)]['item'](),_0x4322ce;},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x416)]=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0xc6)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0xc6)]=function(){const _0x3cef29=_0x28fd0f;VisuMZ[_0x3cef29(0x1ed)][_0x3cef29(0x416)][_0x3cef29(0x245)](this),this[_0x3cef29(0x4a5)]()&&this[_0x3cef29(0x287)]();},Scene_Shop['prototype'][_0x28fd0f(0x287)]=function(){const _0x442827=_0x28fd0f;this[_0x442827(0x21b)]['show']();},VisuMZ['ItemsEquipsCore']['Scene_Shop_onSellCancel']=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x32a)],Scene_Shop[_0x28fd0f(0x1c0)]['onSellCancel']=function(){const _0x5edb25=_0x28fd0f;VisuMZ['ItemsEquipsCore']['Scene_Shop_onSellCancel'][_0x5edb25(0x245)](this),this[_0x5edb25(0x477)]()&&this[_0x5edb25(0x3a1)](),this[_0x5edb25(0x4a5)]()&&this['_dummyWindow'][_0x5edb25(0x31d)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x33d)]=function(_0x413d6f){const _0x1f1d39=_0x28fd0f,_0x2941b2=this[_0x1f1d39(0x394)];this[_0x1f1d39(0x394)]=_0x413d6f;const _0x3e3be0=this[_0x1f1d39(0x388)]();return this[_0x1f1d39(0x394)]=_0x2941b2,_0x3e3be0;},VisuMZ[_0x28fd0f(0x1ed)]['Scene_Shop_sellingPrice']=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x388)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x388)]=function(){const _0x587fbb=_0x28fd0f;let _0x109cda=this[_0x587fbb(0x1ab)]();const _0x4413de=this[_0x587fbb(0x394)];return _0x109cda=VisuMZ[_0x587fbb(0x1ed)][_0x587fbb(0x14a)][_0x587fbb(0x1a5)][_0x587fbb(0x289)][_0x587fbb(0x245)](this,_0x4413de,_0x109cda),_0x109cda;},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x1ab)]=function(){const _0x46c959=_0x28fd0f;let _0x36a80d=this[_0x46c959(0x394)][_0x46c959(0xa4)];if(!this[_0x46c959(0x394)])return 0x0;else{if(this[_0x46c959(0x394)][_0x46c959(0x409)][_0x46c959(0x275)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x270ac0=String(RegExp['$1']);window[_0x46c959(0x373)]=this[_0x46c959(0x394)],window[_0x46c959(0xa4)]=_0x36a80d*this[_0x46c959(0x3a0)]();try{eval(_0x270ac0);}catch(_0x157914){if($gameTemp[_0x46c959(0x495)]())console['log'](_0x157914);}let _0x3e42b2=window[_0x46c959(0xa4)];window[_0x46c959(0x373)]=undefined,window[_0x46c959(0xa4)]=undefined;if(isNaN(_0x3e42b2))_0x3e42b2=0x0;return Math['floor'](_0x3e42b2);}else return this[_0x46c959(0x394)][_0x46c959(0x409)][_0x46c959(0x275)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math[_0x46c959(0x2bb)](this[_0x46c959(0x3be)]());}},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x3be)]=function(){const _0xfb9f54=_0x28fd0f;return this[_0xfb9f54(0x394)][_0xfb9f54(0xa4)]*this[_0xfb9f54(0x3a0)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x3a0)]=function(){const _0x23a178=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x23a178(0x14a)][_0x23a178(0x1a5)][_0x23a178(0xfb)];},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x177)]=function(){const _0xccdf14=_0x28fd0f;if(!this['updatedLayoutStyle']())return![];if(!this[_0xccdf14(0x477)]())return![];if(!this[_0xccdf14(0x10d)])return![];if(!this[_0xccdf14(0x10d)][_0xccdf14(0x123)])return![];return this[_0xccdf14(0x34f)]()&&this['isUseModernControls']();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x2c3)]=function(){const _0x112a6c=_0x28fd0f;if(this[_0x112a6c(0x177)]())return this[_0x112a6c(0x10d)]['maxCols']()===0x1?TextManager['getInputMultiButtonStrings'](_0x112a6c(0x4aa),_0x112a6c(0x299)):TextManager[_0x112a6c(0x453)](_0x112a6c(0x2d1),_0x112a6c(0x12f));else{if(this[_0x112a6c(0x3ff)]&&this['_numberWindow'][_0x112a6c(0x123)])return TextManager['getInputMultiButtonStrings']('left',_0x112a6c(0x299));}return Scene_MenuBase[_0x112a6c(0x1c0)][_0x112a6c(0x2c3)][_0x112a6c(0x245)](this);},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x1e6)]=function(){const _0x2e2d70=_0x28fd0f;if(this[_0x2e2d70(0x3ff)]&&this['_numberWindow'][_0x2e2d70(0x123)])return TextManager['getInputMultiButtonStrings']('up','down');return Scene_MenuBase[_0x2e2d70(0x1c0)][_0x2e2d70(0x1e6)][_0x2e2d70(0x245)](this);},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x149)]=function(){const _0x22b445=_0x28fd0f;if(this[_0x22b445(0x177)]())return VisuMZ[_0x22b445(0x1ed)][_0x22b445(0x14a)][_0x22b445(0xff)]['buttonAssistCategory'];else{if(this[_0x22b445(0x3ff)]&&this[_0x22b445(0x3ff)][_0x22b445(0x123)])return VisuMZ[_0x22b445(0x1ed)][_0x22b445(0x14a)]['ShopScene'][_0x22b445(0xc4)];}return Scene_MenuBase[_0x22b445(0x1c0)]['buttonAssistText1'][_0x22b445(0x245)](this);},Scene_Shop[_0x28fd0f(0x1c0)]['buttonAssistText2']=function(){const _0x69df2c=_0x28fd0f;if(this[_0x69df2c(0x3ff)]&&this['_numberWindow'][_0x69df2c(0x123)])return VisuMZ[_0x69df2c(0x1ed)][_0x69df2c(0x14a)]['ShopScene'][_0x69df2c(0xb2)];return Scene_MenuBase[_0x69df2c(0x1c0)]['buttonAssistText2'][_0x69df2c(0x245)](this);},Scene_Shop['prototype']['resetShopSwitches']=function(){const _0x1cb139=_0x28fd0f;if(!SceneManager[_0x1cb139(0x263)]())return;const _0x2f34c4=VisuMZ['ItemsEquipsCore'][_0x1cb139(0x14a)][_0x1cb139(0x1a5)];_0x2f34c4[_0x1cb139(0x1a8)]&&$gameSwitches[_0x1cb139(0x318)](_0x2f34c4['SwitchBuy'],![]),_0x2f34c4[_0x1cb139(0x250)]&&$gameSwitches[_0x1cb139(0x318)](_0x2f34c4['SwitchSell'],![]);},VisuMZ['ItemsEquipsCore']['Scene_Shop_doBuy']=Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x300)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x300)]=function(_0x5791f4){const _0x409f2d=_0x28fd0f;VisuMZ[_0x409f2d(0x1ed)]['Scene_Shop_doBuy'][_0x409f2d(0x245)](this,_0x5791f4),this[_0x409f2d(0x1b1)](this[_0x409f2d(0x394)],_0x5791f4);if(_0x5791f4<=0x0)return;const _0x4bdee8=VisuMZ[_0x409f2d(0x1ed)][_0x409f2d(0x14a)][_0x409f2d(0x1a5)];_0x4bdee8['SwitchBuy']&&$gameSwitches[_0x409f2d(0x318)](_0x4bdee8['SwitchBuy'],!![]),this['_buyWindow'][_0x409f2d(0x143)](),this[_0x409f2d(0x10d)][_0x409f2d(0x143)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b1)]=function(_0xf4cbb7,_0x52260d){const _0x413796=_0x28fd0f;this[_0x413796(0x1eb)](_0xf4cbb7,_0x52260d),$gameParty['addShopTrackingItemBuy'](_0xf4cbb7,_0x52260d),$gameParty[_0x413796(0x295)](_0x52260d*this['buyingPrice']());},Scene_Shop['prototype'][_0x28fd0f(0x1eb)]=function(_0x3fadea,_0x565180){const _0x1f8f92=_0x28fd0f;if(!_0x3fadea)return;if(!_0x565180)return;const _0x304b60=VisuMZ['ItemsEquipsCore']['ShopListingRegExp'],_0x5b0f89=_0x3fadea[_0x1f8f92(0x409)]||'';if(_0x5b0f89[_0x1f8f92(0x275)](_0x304b60[_0x1f8f92(0xf7)])){const _0x277482=String(RegExp['$1'])['split'](',')[_0x1f8f92(0x455)](_0x45a1fa=>Number(_0x45a1fa));for(const _0x419c9f of _0x277482){$gameSwitches['setValue'](_0x419c9f,!![]);}}if(_0x5b0f89[_0x1f8f92(0x275)](_0x304b60[_0x1f8f92(0x33c)])){const _0x54de10=String(RegExp['$1'])[_0x1f8f92(0x1e2)](',')[_0x1f8f92(0x455)](_0x606eca=>Number(_0x606eca));for(const _0x3db215 of _0x54de10){$gameSwitches[_0x1f8f92(0x318)](_0x3db215,![]);}}},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x369)]=Scene_Shop['prototype'][_0x28fd0f(0x235)],Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x235)]=function(_0x22c5f3){const _0x511b97=_0x28fd0f;VisuMZ[_0x511b97(0x1ed)]['Scene_Shop_doSell']['call'](this,_0x22c5f3),this[_0x511b97(0x2f9)](this[_0x511b97(0x394)],_0x22c5f3);if(_0x22c5f3<=0x0)return;const _0x38834a=VisuMZ['ItemsEquipsCore']['Settings'][_0x511b97(0x1a5)];_0x38834a['SwitchBuy']&&$gameSwitches['setValue'](_0x38834a[_0x511b97(0x250)],!![]),this['_buyWindow'][_0x511b97(0x143)](),this[_0x511b97(0x10d)][_0x511b97(0x143)]();},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x2f9)]=function(_0x492c64,_0x149fc6){const _0x34f5c2=_0x28fd0f;this['processShopCondListingOnSellItem'](_0x492c64,_0x149fc6),$gameParty['addShopTrackingItemSell'](_0x492c64,_0x149fc6),$gameParty[_0x34f5c2(0x120)](_0x149fc6*this['sellingPrice']());},Scene_Shop[_0x28fd0f(0x1c0)][_0x28fd0f(0x2f8)]=function(_0x1b7b43,_0x415812){const _0x14d8bc=_0x28fd0f;if(!_0x1b7b43)return;if(!_0x415812)return;const _0x1d5056=VisuMZ[_0x14d8bc(0x1ed)][_0x14d8bc(0x34b)],_0xc46e0e=_0x1b7b43[_0x14d8bc(0x409)]||'';if(_0xc46e0e[_0x14d8bc(0x275)](_0x1d5056['SellTurnSwitchOn'])){const _0x20b839=String(RegExp['$1'])[_0x14d8bc(0x1e2)](',')[_0x14d8bc(0x455)](_0x3d6cec=>Number(_0x3d6cec));for(const _0x215807 of _0x20b839){$gameSwitches[_0x14d8bc(0x318)](_0x215807,!![]);}}if(_0xc46e0e['match'](_0x1d5056[_0x14d8bc(0x353)])){const _0xf81b8b=String(RegExp['$1'])['split'](',')[_0x14d8bc(0x455)](_0x18a3fb=>Number(_0x18a3fb));for(const _0x48f2cc of _0xf81b8b){$gameSwitches[_0x14d8bc(0x318)](_0x48f2cc,![]);}}};function Sprite_NewLabel(){const _0x46f001=_0x28fd0f;this[_0x46f001(0x159)](...arguments);}Sprite_NewLabel['prototype']=Object[_0x28fd0f(0x24a)](Sprite['prototype']),Sprite_NewLabel['prototype'][_0x28fd0f(0x3aa)]=Sprite_NewLabel,Sprite_NewLabel[_0x28fd0f(0x1c0)][_0x28fd0f(0x159)]=function(){const _0xc4202=_0x28fd0f;Sprite[_0xc4202(0x1c0)][_0xc4202(0x159)][_0xc4202(0x245)](this),this[_0xc4202(0x3a3)]();},Sprite_NewLabel['prototype'][_0x28fd0f(0x3a3)]=function(){const _0x2e5980=_0x28fd0f,_0x5b61fd=ImageManager[_0x2e5980(0x2c9)],_0x2b6628=ImageManager[_0x2e5980(0x20a)];this['bitmap']=new Bitmap(_0x5b61fd,_0x2b6628),this[_0x2e5980(0x1cd)](),this['drawNewLabelText']();},Sprite_NewLabel['prototype'][_0x28fd0f(0x1cd)]=function(){const _0x4bfd71=_0x28fd0f,_0x1c28a9=VisuMZ[_0x4bfd71(0x1ed)][_0x4bfd71(0x14a)]['New'][_0x4bfd71(0x2a3)];if(_0x1c28a9<=0x0)return;const _0x4ff8f7=ImageManager[_0x4bfd71(0x389)]('IconSet'),_0x50c3e4=ImageManager['iconWidth'],_0x301ef9=ImageManager['iconHeight'],_0xa8e136=_0x1c28a9%0x10*_0x50c3e4,_0x11e762=Math[_0x4bfd71(0x2bb)](_0x1c28a9/0x10)*_0x301ef9;this[_0x4bfd71(0x2c5)][_0x4bfd71(0x168)](_0x4ff8f7,_0xa8e136,_0x11e762,_0x50c3e4,_0x301ef9,0x0,0x0);},Sprite_NewLabel['prototype']['drawNewLabelText']=function(){const _0x540b41=_0x28fd0f,_0x3ad17c=VisuMZ[_0x540b41(0x1ed)][_0x540b41(0x14a)]['New'],_0xa02ef8=_0x3ad17c[_0x540b41(0x392)];if(_0xa02ef8==='')return;const _0x21e48a=ImageManager[_0x540b41(0x2c9)],_0x5c765f=ImageManager[_0x540b41(0x20a)];this[_0x540b41(0x2c5)][_0x540b41(0x3a8)]=_0x3ad17c[_0x540b41(0x3d0)]||$gameSystem[_0x540b41(0x3a9)](),this['bitmap'][_0x540b41(0x328)]=this[_0x540b41(0x47d)](),this['bitmap']['fontSize']=_0x3ad17c['FontSize'],this[_0x540b41(0x2c5)][_0x540b41(0x473)](_0xa02ef8,0x0,_0x5c765f/0x2,_0x21e48a,_0x5c765f/0x2,_0x540b41(0x132));},Sprite_NewLabel[_0x28fd0f(0x1c0)][_0x28fd0f(0x47d)]=function(){const _0x50155f=_0x28fd0f,_0x4d2a26=VisuMZ[_0x50155f(0x1ed)][_0x50155f(0x14a)][_0x50155f(0x19c)][_0x50155f(0x1aa)];return _0x4d2a26[_0x50155f(0x275)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x50155f(0x328)](_0x4d2a26);},Window_Base[_0x28fd0f(0x1c0)][_0x28fd0f(0x2cf)]=function(_0x51ced0,_0x15c99a,_0x37c4e0,_0x1f5825){const _0x40c8bf=_0x28fd0f;if(_0x51ced0){const _0x2f6769=_0x37c4e0+(this['lineHeight']()-ImageManager['iconHeight'])/0x2,_0x2b684e=ImageManager[_0x40c8bf(0x2c9)]+0x4,_0x865f2f=Math['max'](0x0,_0x1f5825-_0x2b684e);this[_0x40c8bf(0x243)](ColorManager[_0x40c8bf(0x246)](_0x51ced0)),this['drawIcon'](_0x51ced0[_0x40c8bf(0x346)],_0x15c99a,_0x2f6769),this[_0x40c8bf(0x473)](_0x51ced0[_0x40c8bf(0x1af)],_0x15c99a+_0x2b684e,_0x37c4e0,_0x865f2f),this[_0x40c8bf(0x140)]();}},Window_Base[_0x28fd0f(0x1c0)]['drawItemNumber']=function(_0x560e39,_0x55b06e,_0x1135bd,_0xcce4bb){const _0x5628bd=_0x28fd0f;if(this[_0x5628bd(0x43e)](_0x560e39)){this['resetFontSettings']();const _0x4fc482=VisuMZ[_0x5628bd(0x1ed)][_0x5628bd(0x14a)][_0x5628bd(0xff)],_0x296169=_0x4fc482[_0x5628bd(0x3db)],_0x2a7953=_0x296169[_0x5628bd(0xa8)]($gameParty[_0x5628bd(0x365)](_0x560e39));this[_0x5628bd(0x48b)][_0x5628bd(0x2cb)]=_0x4fc482[_0x5628bd(0x42d)],this['drawText'](_0x2a7953,_0x55b06e,_0x1135bd,_0xcce4bb,_0x5628bd(0x299)),this[_0x5628bd(0x41d)]();}},Window_Base['prototype'][_0x28fd0f(0x43e)]=function(_0x44c814){const _0x1aca2f=_0x28fd0f;if(DataManager[_0x1aca2f(0x2fd)](_0x44c814))return $dataSystem['optKeyItemsNumber'];return!![];},Window_Base[_0x28fd0f(0x1c0)][_0x28fd0f(0x23a)]=function(_0x58d93e,_0x171913,_0x2c84f9,_0x2dfd7d,_0x52141d){const _0x3e55fe=_0x28fd0f;_0x52141d=Math['max'](_0x52141d||0x1,0x1);while(_0x52141d--){_0x2dfd7d=_0x2dfd7d||this[_0x3e55fe(0xa7)](),this[_0x3e55fe(0x471)][_0x3e55fe(0x309)]=0xa0;const _0xb3ebe2=ColorManager['gaugeBackColor']();this[_0x3e55fe(0x471)][_0x3e55fe(0x3e2)](_0x58d93e+0x1,_0x171913+0x1,_0x2c84f9-0x2,_0x2dfd7d-0x2,_0xb3ebe2),this['contentsBack']['paintOpacity']=0xff;}},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2e7)]=Window_Selectable[_0x28fd0f(0x1c0)][_0x28fd0f(0x159)],Window_Selectable['prototype']['initialize']=function(_0xe329fd){const _0x5f29c=_0x28fd0f;this[_0x5f29c(0x278)](),VisuMZ[_0x5f29c(0x1ed)][_0x5f29c(0x2e7)]['call'](this,_0xe329fd);},Window_Selectable['prototype'][_0x28fd0f(0x278)]=function(){const _0x174ee7=_0x28fd0f;this[_0x174ee7(0x26c)]={},this[_0x174ee7(0x1f2)]=0xff,this[_0x174ee7(0xb4)]=VisuMZ[_0x174ee7(0x1ed)][_0x174ee7(0x14a)]['New']['FadeSpeed'],this[_0x174ee7(0x1dc)]=VisuMZ[_0x174ee7(0x1ed)]['Settings'][_0x174ee7(0x19c)][_0x174ee7(0x1e5)];},Window_Selectable[_0x28fd0f(0x1c0)]['isShowNew']=function(){return![];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x3fc)]=Window_Selectable['prototype']['setHelpWindowItem'],Window_Selectable[_0x28fd0f(0x1c0)]['setHelpWindowItem']=function(_0x5c994e){const _0x5cb769=_0x28fd0f;VisuMZ[_0x5cb769(0x1ed)][_0x5cb769(0x3fc)][_0x5cb769(0x245)](this,_0x5c994e);if(this[_0x5cb769(0x167)]())this['clearNewLabelFromItem'](_0x5c994e);},Window_Selectable['prototype'][_0x28fd0f(0x22d)]=function(_0x374d12){const _0x2b0062=_0x28fd0f;if(!_0x374d12)return;$gameParty[_0x2b0062(0x49e)](_0x374d12);let _0x4c9ec5='';if(DataManager[_0x2b0062(0xec)](_0x374d12))_0x4c9ec5=_0x2b0062(0x272)['format'](_0x374d12['id']);else{if(DataManager[_0x2b0062(0x320)](_0x374d12))_0x4c9ec5=_0x2b0062(0x10e)['format'](_0x374d12['id']);else{if(DataManager[_0x2b0062(0x311)](_0x374d12))_0x4c9ec5=_0x2b0062(0x3c1)[_0x2b0062(0xa8)](_0x374d12['id']);else return;}}const _0x428537=this['_newLabelSprites'][_0x4c9ec5];if(_0x428537)_0x428537[_0x2b0062(0x31d)]();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x383)]=Window_Selectable[_0x28fd0f(0x1c0)]['refresh'],Window_Selectable[_0x28fd0f(0x1c0)][_0x28fd0f(0x143)]=function(){const _0x5884f2=_0x28fd0f;this[_0x5884f2(0x45f)](),VisuMZ[_0x5884f2(0x1ed)][_0x5884f2(0x383)][_0x5884f2(0x245)](this);},Window_Selectable[_0x28fd0f(0x1c0)][_0x28fd0f(0x45f)]=function(){const _0x159a79=_0x28fd0f;for(const _0x148022 of Object[_0x159a79(0x102)](this[_0x159a79(0x26c)])){_0x148022[_0x159a79(0x31d)]();}},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x29f)]=Window_Selectable['prototype'][_0x28fd0f(0x2d3)],Window_Selectable[_0x28fd0f(0x1c0)][_0x28fd0f(0x2d3)]=function(){const _0x3876d2=_0x28fd0f;this[_0x3876d2(0x2aa)](),VisuMZ['ItemsEquipsCore'][_0x3876d2(0x29f)]['call'](this);},Window_Selectable[_0x28fd0f(0x1c0)][_0x28fd0f(0x2aa)]=function(){const _0x306dfe=_0x28fd0f;if(!this[_0x306dfe(0x167)]())return;const _0xbe6f70=this['_newLabelOpacityUpperLimit'];this[_0x306dfe(0x1f2)]+=this['_newLabelOpacityChange'];(this[_0x306dfe(0x1f2)]>=_0xbe6f70||this['_newLabelOpacity']<=0x0)&&(this['_newLabelOpacityChange']*=-0x1);this[_0x306dfe(0x1f2)]=this[_0x306dfe(0x1f2)][_0x306dfe(0xa0)](0x0,_0xbe6f70);for(const _0x34c002 of Object[_0x306dfe(0x102)](this[_0x306dfe(0x26c)])){_0x34c002[_0x306dfe(0x2da)]=this[_0x306dfe(0x1f2)];}},Window_Selectable[_0x28fd0f(0x1c0)][_0x28fd0f(0x139)]=function(_0x2df023){const _0xfe57e9=_0x28fd0f,_0xde854b=this[_0xfe57e9(0x26c)];if(_0xde854b[_0x2df023])return _0xde854b[_0x2df023];else{const _0x5b823b=new Sprite_NewLabel();return _0xde854b[_0x2df023]=_0x5b823b,this[_0xfe57e9(0x36c)](_0x5b823b),_0x5b823b;}},Window_Selectable[_0x28fd0f(0x1c0)][_0x28fd0f(0x282)]=function(_0x56fb1d,_0x7df6d7,_0x42ba7d){const _0x16d03e=_0x28fd0f;let _0x40c0b4='';if(DataManager[_0x16d03e(0xec)](_0x56fb1d))_0x40c0b4=_0x16d03e(0x272)['format'](_0x56fb1d['id']);else{if(DataManager[_0x16d03e(0x320)](_0x56fb1d))_0x40c0b4=_0x16d03e(0x10e)[_0x16d03e(0xa8)](_0x56fb1d['id']);else{if(DataManager[_0x16d03e(0x311)](_0x56fb1d))_0x40c0b4=_0x16d03e(0x3c1)['format'](_0x56fb1d['id']);else return;}}const _0x1e3db5=this[_0x16d03e(0x139)](_0x40c0b4);_0x1e3db5[_0x16d03e(0x38a)](_0x7df6d7,_0x42ba7d),_0x1e3db5[_0x16d03e(0x133)](),_0x1e3db5[_0x16d03e(0x2da)]=this[_0x16d03e(0x1f2)];},Window_ItemCategory[_0x28fd0f(0x128)]=VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x14a)][_0x28fd0f(0x169)][_0x28fd0f(0x2b6)],Window_ItemCategory[_0x28fd0f(0x476)]=[_0x28fd0f(0x13f),'HiddenItemB',_0x28fd0f(0x29b),_0x28fd0f(0x277),_0x28fd0f(0x11d),_0x28fd0f(0x457),_0x28fd0f(0x412),_0x28fd0f(0x47e)],VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x19e)]=Window_ItemCategory[_0x28fd0f(0x1c0)]['initialize'],Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x159)]=function(_0x5c8b93){const _0x270f55=_0x28fd0f;VisuMZ[_0x270f55(0x1ed)][_0x270f55(0x19e)][_0x270f55(0x245)](this,_0x5c8b93),this[_0x270f55(0x135)](_0x5c8b93);},Window_ItemCategory['prototype'][_0x28fd0f(0x135)]=function(_0x4d8eb1){const _0x389955=_0x28fd0f,_0x599b05=new Rectangle(0x0,0x0,_0x4d8eb1[_0x389955(0x248)],_0x4d8eb1[_0x389955(0x25b)]);this[_0x389955(0x25f)]=new Window_Base(_0x599b05),this['_categoryNameWindow'][_0x389955(0x2da)]=0x0,this[_0x389955(0x2d0)](this[_0x389955(0x25f)]),this[_0x389955(0x494)]();},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x477)]=function(){const _0x2c0034=_0x28fd0f;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x2c0034(0x1c0)]['isUseModernControls'][_0x2c0034(0x245)](this);},Window_ItemCategory['prototype'][_0x28fd0f(0x372)]=function(){},Window_ItemCategory['prototype'][_0x28fd0f(0xbe)]=function(){const _0x5dbd77=_0x28fd0f;if(!this['isUseModernControls']())Window_HorzCommand[_0x5dbd77(0x1c0)]['playOkSound'][_0x5dbd77(0x245)](this);},Window_ItemCategory[_0x28fd0f(0x1c0)]['maxCols']=function(){const _0x3217e5=_0x28fd0f;return this[_0x3217e5(0xb1)]?this[_0x3217e5(0x1f4)]():0x4;},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x2d3)]=function(){const _0x5e8782=_0x28fd0f;Window_HorzCommand[_0x5e8782(0x1c0)]['update'][_0x5e8782(0x245)](this),this['_itemWindow']&&this[_0x5e8782(0x364)][_0x5e8782(0x2c1)](this[_0x5e8782(0x18d)]());},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x342)]=function(){const _0x346ee9=_0x28fd0f;if(this['isCursorMovable']()){const _0x45e93e=this['index']();if(this[_0x346ee9(0x364)]&&this[_0x346ee9(0x364)][_0x346ee9(0x435)]()<=0x1)Input[_0x346ee9(0x1cc)](_0x346ee9(0x299))&&this['cursorRight'](Input[_0x346ee9(0x377)]('right')),Input[_0x346ee9(0x1cc)](_0x346ee9(0x4aa))&&this['cursorLeft'](Input[_0x346ee9(0x377)](_0x346ee9(0x4aa)));else this[_0x346ee9(0x364)]&&this[_0x346ee9(0x364)][_0x346ee9(0x435)]()>0x1&&(Input[_0x346ee9(0x1cc)](_0x346ee9(0x12f))&&!Input[_0x346ee9(0x244)](_0x346ee9(0x12b))&&this[_0x346ee9(0x484)](Input[_0x346ee9(0x377)](_0x346ee9(0x12f))),Input[_0x346ee9(0x1cc)](_0x346ee9(0x2d1))&&!Input[_0x346ee9(0x244)]('shift')&&this[_0x346ee9(0x25a)](Input[_0x346ee9(0x377)]('pageup')));this[_0x346ee9(0x3fa)]()!==_0x45e93e&&this[_0x346ee9(0x206)]();}},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x1d5)]=function(){const _0x183ae1=_0x28fd0f;if(this[_0x183ae1(0x477)]())return;Window_HorzCommand[_0x183ae1(0x1c0)][_0x183ae1(0x1d5)][_0x183ae1(0x245)](this);},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x265)]=function(){const _0x33e52f=_0x28fd0f;return this[_0x33e52f(0x477)]()?![]:Window_HorzCommand[_0x33e52f(0x1c0)]['isHoverEnabled']['call'](this);},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x3eb)]=function(){const _0x5756a5=_0x28fd0f;if(this[_0x5756a5(0x268)]()){TouchInput[_0x5756a5(0x377)]()&&this['onTouchSelect'](!![]);if(TouchInput[_0x5756a5(0x3d6)]())this[_0x5756a5(0x43a)]();else TouchInput['isCancelled']()&&this[_0x5756a5(0x114)]();}},Window_ItemCategory['prototype'][_0x28fd0f(0x106)]=function(_0x5a9d60){const _0x4623d6=_0x28fd0f;this['isUseModernControls']()?this[_0x4623d6(0x30f)](!![]):Window_HorzCommand[_0x4623d6(0x1c0)][_0x4623d6(0x106)][_0x4623d6(0x245)](this,_0x5a9d60);},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x30f)]=function(_0x47ccd3){const _0x59e9f3=_0x28fd0f;this['_doubleTouch']=![];if(this[_0x59e9f3(0x23c)]()){const _0x1d3e5a=this[_0x59e9f3(0x3fa)](),_0x534b20=this[_0x59e9f3(0x1dd)]();_0x534b20>=0x0&&_0x534b20!==this[_0x59e9f3(0x3fa)]()&&this[_0x59e9f3(0xb8)](_0x534b20),_0x47ccd3&&this[_0x59e9f3(0x3fa)]()!==_0x1d3e5a&&this[_0x59e9f3(0x206)]();}},Window_ItemCategory[_0x28fd0f(0x1c0)]['makeCommandList']=function(){const _0x540a81=_0x28fd0f;this['addItemCategories'](),this[_0x540a81(0xb8)](this[_0x540a81(0x3fa)]());},Window_ItemCategory[_0x28fd0f(0x1c0)]['addItemCategories']=function(){const _0x3906e4=_0x28fd0f;for(const _0x4ec738 of Window_ItemCategory[_0x3906e4(0x128)]){this[_0x3906e4(0x47c)](_0x4ec738);}},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x47c)]=function(_0x405466){const _0x472e03=_0x28fd0f,_0x407d5f=_0x405466['Type'],_0x459bd4=_0x405466[_0x472e03(0x2a3)],_0x2af9e0=_0x405466[_0x472e03(0x4ae)]||0x0;if(_0x2af9e0>0x0&&!$gameSwitches[_0x472e03(0x11f)](_0x2af9e0))return;let _0x50d2e4='',_0x54f1aa=_0x472e03(0x210),_0x1502a1=_0x407d5f;if(_0x407d5f[_0x472e03(0x275)](/Category:(.*)/i))_0x50d2e4=String(RegExp['$1'])[_0x472e03(0x35f)]();else{if(Window_ItemCategory[_0x472e03(0x476)][_0x472e03(0x41a)](_0x407d5f))_0x50d2e4=VisuMZ[_0x472e03(0x1ed)][_0x472e03(0x14a)][_0x472e03(0x169)][_0x407d5f];else{if(['AllItems','RegularItems'][_0x472e03(0x41a)](_0x407d5f))_0x50d2e4=TextManager[_0x472e03(0x373)];else{if(_0x407d5f===_0x472e03(0x2b9))_0x50d2e4=TextManager[_0x472e03(0x122)];else{if(_0x407d5f===_0x472e03(0x21d))_0x50d2e4=TextManager[_0x472e03(0x2dd)];else{if(_0x407d5f===_0x472e03(0xaa))_0x50d2e4=TextManager[_0x472e03(0x425)];else{if(_0x407d5f[_0x472e03(0x275)](/WTYPE:(\d+)/i))_0x50d2e4=$dataSystem[_0x472e03(0xf1)][Number(RegExp['$1'])]||'';else{if(_0x407d5f[_0x472e03(0x275)](/ATYPE:(\d+)/i))_0x50d2e4=$dataSystem['armorTypes'][Number(RegExp['$1'])]||'';else _0x407d5f['match'](/ETYPE:(\d+)/i)&&(_0x50d2e4=$dataSystem[_0x472e03(0x290)][Number(RegExp['$1'])]||'');}}}}}}}if(TextManager[_0x472e03(0x195)]&&TextManager[_0x472e03(0x360)]()){const _0x313276=_0x50d2e4[_0x472e03(0x2b4)]()[_0x472e03(0x35f)]();if($dataLocalization[_0x313276]&&_0x313276[_0x472e03(0x176)]>0x0){const _0x173f07=ConfigManager[_0x472e03(0x27b)]||'English';_0x50d2e4=$dataLocalization[_0x313276][_0x173f07]||_0x472e03(0x26d);}}_0x459bd4>0x0&&this[_0x472e03(0x305)]()!==_0x472e03(0x4a0)&&(_0x50d2e4=_0x472e03(0x26e)[_0x472e03(0xa8)](_0x459bd4,_0x50d2e4)),this[_0x472e03(0x2ff)](_0x50d2e4,_0x54f1aa,!![],_0x1502a1);},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x417)]=function(){const _0x5e08f3=_0x28fd0f;return VisuMZ[_0x5e08f3(0x1ed)][_0x5e08f3(0x14a)][_0x5e08f3(0x169)]['TextAlign'];},Window_ItemCategory[_0x28fd0f(0x1c0)]['drawItem']=function(_0x5cf3b7){const _0x2102c3=_0x28fd0f,_0x213a1d=this[_0x2102c3(0x2c6)](_0x5cf3b7);if(_0x213a1d==='iconText')this[_0x2102c3(0x1ff)](_0x5cf3b7);else _0x213a1d===_0x2102c3(0x23e)?this[_0x2102c3(0xa2)](_0x5cf3b7):Window_HorzCommand[_0x2102c3(0x1c0)][_0x2102c3(0xa3)][_0x2102c3(0x245)](this,_0x5cf3b7);},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x305)]=function(){const _0xfb5185=_0x28fd0f;return VisuMZ[_0xfb5185(0x1ed)]['Settings'][_0xfb5185(0x169)]['Style'];},Window_ItemCategory[_0x28fd0f(0x1c0)]['categoryStyleCheck']=function(_0x480448){const _0x1098ee=_0x28fd0f;if(_0x480448<0x0)return _0x1098ee(0x4a0);const _0x45be87=this[_0x1098ee(0x305)]();if(_0x45be87!==_0x1098ee(0x413))return _0x45be87;else{const _0x252d94=this[_0x1098ee(0x19f)](_0x480448);if(_0x252d94['match'](/\\I\[(\d+)\]/i)){const _0x2dbbdc=this['itemLineRect'](_0x480448),_0x1aabc8=this[_0x1098ee(0x2d6)](_0x252d94)[_0x1098ee(0x248)];return _0x1aabc8<=_0x2dbbdc[_0x1098ee(0x248)]?_0x1098ee(0x39a):_0x1098ee(0x23e);}else return _0x1098ee(0x4a0);}},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x1ff)]=function(_0xa3b9a0){const _0x268e23=_0x28fd0f,_0x424d09=this['itemLineRect'](_0xa3b9a0),_0x5a9404=this[_0x268e23(0x19f)](_0xa3b9a0),_0x8dfb9f=this['textSizeEx'](_0x5a9404)['width'];this[_0x268e23(0x204)](this['isCommandEnabled'](_0xa3b9a0));const _0x171e2f=this[_0x268e23(0x417)]();if(_0x171e2f===_0x268e23(0x299))this[_0x268e23(0x31f)](_0x5a9404,_0x424d09['x']+_0x424d09[_0x268e23(0x248)]-_0x8dfb9f,_0x424d09['y'],_0x8dfb9f);else{if(_0x171e2f===_0x268e23(0x132)){const _0x7d0ef1=_0x424d09['x']+Math['floor']((_0x424d09[_0x268e23(0x248)]-_0x8dfb9f)/0x2);this[_0x268e23(0x31f)](_0x5a9404,_0x7d0ef1,_0x424d09['y'],_0x8dfb9f);}else this[_0x268e23(0x31f)](_0x5a9404,_0x424d09['x'],_0x424d09['y'],_0x8dfb9f);}},Window_ItemCategory[_0x28fd0f(0x1c0)]['drawItemStyleIcon']=function(_0xd6072e){const _0x21021b=_0x28fd0f,_0x17a172=this[_0x21021b(0x19f)](_0xd6072e);if(_0x17a172[_0x21021b(0x275)](/\\I\[(\d+)\]/i)){const _0x423dd9=Number(RegExp['$1'])||0x0,_0x4cea2e=this[_0x21021b(0x429)](_0xd6072e),_0x1a35ea=_0x4cea2e['x']+Math[_0x21021b(0x2bb)]((_0x4cea2e[_0x21021b(0x248)]-ImageManager[_0x21021b(0x2c9)])/0x2),_0xb0797f=_0x4cea2e['y']+(_0x4cea2e['height']-ImageManager[_0x21021b(0x20a)])/0x2;this['drawIcon'](_0x423dd9,_0x1a35ea,_0xb0797f);}},VisuMZ[_0x28fd0f(0x1ed)]['Window_ItemCategory_setItemWindow']=Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x232)],Window_ItemCategory['prototype'][_0x28fd0f(0x232)]=function(_0x477ca5){const _0x49614b=_0x28fd0f;VisuMZ['ItemsEquipsCore']['Window_ItemCategory_setItemWindow'][_0x49614b(0x245)](this,_0x477ca5),_0x477ca5[_0x49614b(0x21b)]=this;},Window_ItemCategory[_0x28fd0f(0x1c0)]['callUpdateHelp']=function(){const _0x1f2d49=_0x28fd0f;Window_HorzCommand['prototype'][_0x1f2d49(0x38c)][_0x1f2d49(0x245)](this);if(this[_0x1f2d49(0x25f)])this[_0x1f2d49(0x494)]();},Window_ItemCategory[_0x28fd0f(0x1c0)][_0x28fd0f(0x494)]=function(){const _0x3819d6=_0x28fd0f,_0x3458c2=this['_categoryNameWindow'];_0x3458c2['contents'][_0x3819d6(0x47f)]();const _0x7d7733=this[_0x3819d6(0x2c6)](this[_0x3819d6(0x3fa)]());if(_0x7d7733===_0x3819d6(0x23e)){const _0x362c38=this[_0x3819d6(0x429)](this['index']());let _0x24df30=this[_0x3819d6(0x19f)](this[_0x3819d6(0x3fa)]());_0x24df30=_0x24df30[_0x3819d6(0x18a)](/\\I\[(\d+)\]/gi,''),_0x3458c2[_0x3819d6(0x41d)](),this[_0x3819d6(0x267)](_0x24df30,_0x362c38),this[_0x3819d6(0xe2)](_0x24df30,_0x362c38),this[_0x3819d6(0x261)](_0x24df30,_0x362c38);}},Window_ItemCategory[_0x28fd0f(0x1c0)]['categoryNameWindowDrawBackground']=function(_0x3d2666,_0x2de019){},Window_ItemCategory['prototype'][_0x28fd0f(0xe2)]=function(_0x5995d7,_0x288727){const _0x2180c1=_0x28fd0f,_0x38e7ed=this[_0x2180c1(0x25f)];_0x38e7ed[_0x2180c1(0x473)](_0x5995d7,0x0,_0x288727['y'],_0x38e7ed[_0x2180c1(0x462)],'center');},Window_ItemCategory['prototype']['categoryNameWindowCenter']=function(_0x523c44,_0x22011e){const _0x16491a=_0x28fd0f,_0x5a0781=this[_0x16491a(0x25f)],_0x5b8192=$gameSystem[_0x16491a(0xa6)](),_0x132cd1=_0x22011e['x']+Math[_0x16491a(0x2bb)](_0x22011e[_0x16491a(0x248)]/0x2)+_0x5b8192;_0x5a0781['x']=_0x5a0781['width']/-0x2+_0x132cd1,_0x5a0781['y']=Math[_0x16491a(0x2bb)](_0x22011e[_0x16491a(0x25b)]/0x2);},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x342)]=function(){const _0x386c5a=_0x28fd0f;if(this[_0x386c5a(0x23c)]()){const _0xd98655=this[_0x386c5a(0x3fa)]();if(this[_0x386c5a(0x435)]()<=0x1)!this[_0x386c5a(0x2d5)](_0x386c5a(0x12f))&&Input['isTriggered']('pagedown')&&this[_0x386c5a(0x3c8)](),!this[_0x386c5a(0x2d5)]('pageup')&&Input[_0x386c5a(0x377)](_0x386c5a(0x2d1))&&this[_0x386c5a(0x14b)]();else this['maxCols']()>0x1&&(Input['isRepeated']('right')&&this[_0x386c5a(0x484)](Input[_0x386c5a(0x377)]('right')),Input[_0x386c5a(0x1cc)](_0x386c5a(0x4aa))&&this[_0x386c5a(0x25a)](Input['isTriggered'](_0x386c5a(0x4aa))),this[_0x386c5a(0x37f)]()?(Input['isTriggered']('pagedown')&&Input[_0x386c5a(0x244)](_0x386c5a(0x12b))&&this[_0x386c5a(0x3c8)](),Input[_0x386c5a(0x377)](_0x386c5a(0x2d1))&&Input[_0x386c5a(0x244)](_0x386c5a(0x12b))&&this[_0x386c5a(0x14b)]()):(Input[_0x386c5a(0x377)](_0x386c5a(0x12f))&&this['cursorPagedown'](),Input[_0x386c5a(0x377)](_0x386c5a(0x2d1))&&this[_0x386c5a(0x14b)]()));Input[_0x386c5a(0x1cc)]('down')&&(Input[_0x386c5a(0x244)](_0x386c5a(0x12b))&&this[_0x386c5a(0x27d)]()?this['cursorPagedown']():this[_0x386c5a(0x3b8)](Input['isTriggered'](_0x386c5a(0x336)))),Input[_0x386c5a(0x1cc)]('up')&&(Input[_0x386c5a(0x244)](_0x386c5a(0x12b))&&this['allowShiftScrolling']()?this[_0x386c5a(0x14b)]():this[_0x386c5a(0x1ac)](Input[_0x386c5a(0x377)]('up'))),Imported['VisuMZ_0_CoreEngine']&&this[_0x386c5a(0x372)](),this[_0x386c5a(0x3fa)]()!==_0xd98655&&this['playCursorSound']();}},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x37f)]=function(){const _0x12dc15=_0x28fd0f,_0x4b9213=SceneManager['_scene'],_0x1cbbb3=[Scene_Item,Scene_Shop];return _0x1cbbb3[_0x12dc15(0x41a)](_0x4b9213['constructor']);},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x3ab)]=function(){const _0x114d4e=_0x28fd0f;Window_Selectable[_0x114d4e(0x1c0)][_0x114d4e(0x3ab)][_0x114d4e(0x245)](this),this[_0x114d4e(0x21b)]&&this['_categoryWindow'][_0x114d4e(0x477)]()&&this[_0x114d4e(0x21b)][_0x114d4e(0x3ab)]();},Window_ItemList['prototype'][_0x28fd0f(0x31b)]=function(){const _0x16a83e=_0x28fd0f;Window_Selectable[_0x16a83e(0x1c0)]['deactivate']['call'](this),this[_0x16a83e(0x21b)]&&this[_0x16a83e(0x21b)][_0x16a83e(0x477)]()&&this['_categoryWindow'][_0x16a83e(0x31b)]();},Window_ItemList['prototype'][_0x28fd0f(0x2c1)]=function(_0x4623cc){const _0x20a290=_0x28fd0f;this[_0x20a290(0x197)]!==_0x4623cc&&(this[_0x20a290(0x197)]=_0x4623cc,this[_0x20a290(0x143)](),this[_0x20a290(0x21b)]&&this[_0x20a290(0x21b)]['isUseModernControls']()?this[_0x20a290(0xd9)](0x0):this[_0x20a290(0x178)](0x0,0x0));},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x452)]=Window_ItemList[_0x28fd0f(0x1c0)]['maxCols'],Window_ItemList['prototype']['maxCols']=function(){const _0x58feae=_0x28fd0f;if(SceneManager[_0x58feae(0x19d)][_0x58feae(0x3aa)]===Scene_Battle)return VisuMZ[_0x58feae(0x1ed)][_0x58feae(0x452)][_0x58feae(0x245)](this);else return SceneManager['_scene'][_0x58feae(0x3aa)]===Scene_Map?VisuMZ[_0x58feae(0x1ed)][_0x58feae(0x452)][_0x58feae(0x245)](this):VisuMZ['ItemsEquipsCore'][_0x58feae(0x14a)][_0x58feae(0xff)]['ListWindowCols'];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x3df)]=Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x400)],Window_ItemList['prototype'][_0x28fd0f(0x400)]=function(){const _0x3790c5=_0x28fd0f;return this[_0x3790c5(0x435)]()<=0x1?Window_Selectable[_0x3790c5(0x1c0)]['colSpacing'][_0x3790c5(0x245)](this):VisuMZ['ItemsEquipsCore'][_0x3790c5(0x3df)][_0x3790c5(0x245)](this);},Window_ItemList[_0x28fd0f(0x1c0)]['includes']=function(_0xf12dd2){const _0x3276c4=_0x28fd0f;switch(this['_category']){case _0x3276c4(0x390):return DataManager[_0x3276c4(0xec)](_0xf12dd2);case _0x3276c4(0xaf):return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x44e)]===0x1;case _0x3276c4(0x2b9):return DataManager['isItem'](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x44e)]===0x2;case _0x3276c4(0x13f):return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x44e)]===0x3;case'HiddenItemB':return DataManager['isItem'](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x44e)]===0x4;case'Consumable':return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x17d)];case _0x3276c4(0x29b):return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&!_0xf12dd2[_0x3276c4(0x17d)];case _0x3276c4(0x11d):return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&[0x0]['includes'](_0xf12dd2[_0x3276c4(0x181)]);case _0x3276c4(0x457):return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&[0x0,0x1][_0x3276c4(0x41a)](_0xf12dd2['occasion']);case _0x3276c4(0x412):return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&[0x0,0x2][_0x3276c4(0x41a)](_0xf12dd2[_0x3276c4(0x181)]);case'NeverUsable':return DataManager[_0x3276c4(0xec)](_0xf12dd2)&&[0x3]['includes'](_0xf12dd2['occasion']);case _0x3276c4(0x21d):return DataManager[_0x3276c4(0x320)](_0xf12dd2);case _0x3276c4(0xaa):return DataManager[_0x3276c4(0x311)](_0xf12dd2);default:if(this[_0x3276c4(0x197)][_0x3276c4(0x275)](/WTYPE:(\d+)/i))return DataManager[_0x3276c4(0x320)](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x2e4)]===Number(RegExp['$1']);else{if(this['_category'][_0x3276c4(0x275)](/WTYPE:(.*)/i)){const _0x19da6b=$dataSystem[_0x3276c4(0xf1)][_0x3276c4(0x25c)](String(RegExp['$1'])['trim']());return DataManager[_0x3276c4(0x320)](_0xf12dd2)&&_0xf12dd2['wtypeId']===_0x19da6b;}else{if(this[_0x3276c4(0x197)][_0x3276c4(0x275)](/ATYPE:(\d+)/i))return DataManager[_0x3276c4(0x311)](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x298)]===Number(RegExp['$1']);else{if(this[_0x3276c4(0x197)][_0x3276c4(0x275)](/ATYPE:(.*)/i)){const _0x22a11d=$dataSystem[_0x3276c4(0x32e)][_0x3276c4(0x25c)](String(RegExp['$1'])[_0x3276c4(0x35f)]());return DataManager[_0x3276c4(0x311)](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x298)]===_0x22a11d;}else{if(this['_category'][_0x3276c4(0x275)](/ETYPE:(\d+)/i))return!!_0xf12dd2&&_0xf12dd2[_0x3276c4(0x10f)]===Number(RegExp['$1']);else{if(this[_0x3276c4(0x197)][_0x3276c4(0x275)](/ETYPE:(.*)/i)){const _0x3e5d6c=$dataSystem[_0x3276c4(0x290)][_0x3276c4(0x25c)](String(RegExp['$1'])[_0x3276c4(0x35f)]());return DataManager[_0x3276c4(0x311)](_0xf12dd2)&&_0xf12dd2[_0x3276c4(0x10f)]===_0x3e5d6c;}else{if(this[_0x3276c4(0x197)][_0x3276c4(0x275)](/Category:(.*)/i))return!!_0xf12dd2&&_0xf12dd2[_0x3276c4(0x442)][_0x3276c4(0x41a)](String(RegExp['$1'])[_0x3276c4(0x20d)]()[_0x3276c4(0x35f)]());}}}}}}}return![];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2b3)]=Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x4a1)],Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x4a1)]=function(){const _0x541610=_0x28fd0f;VisuMZ[_0x541610(0x1ed)][_0x541610(0x2b3)]['call'](this);if(this[_0x541610(0x11a)]())this['sortListItemScene']();},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x11a)]=function(){const _0x43cea2=_0x28fd0f,_0x284cf2=[_0x43cea2(0x42b),_0x43cea2(0x15b),_0x43cea2(0x3c2),'Scene_Shop'],_0x451145=SceneManager[_0x43cea2(0x19d)];return _0x284cf2[_0x43cea2(0x41a)](_0x451145[_0x43cea2(0x3aa)]['name']);},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x3e3)]=function(){const _0x23a32f=_0x28fd0f,_0x32e838=Window_ItemCategory[_0x23a32f(0x128)],_0x5ea0a4=_0x32e838['find'](_0x11c50b=>_0x11c50b[_0x23a32f(0x317)]===this[_0x23a32f(0x197)]);if(!_0x5ea0a4){VisuMZ[_0x23a32f(0x1ed)]['SortByIDandPriority'](this['_data']);return;}const _0x25dd10=((_0x5ea0a4['SortBy']??'ID')||'ID')[_0x23a32f(0x20d)]()[_0x23a32f(0x35f)]();_0x25dd10===_0x23a32f(0x1e8)?this[_0x23a32f(0x339)][_0x23a32f(0x470)]((_0x58603e,_0x7e7c6d)=>{const _0x48c525=_0x23a32f;if(!!_0x58603e&&!!_0x7e7c6d)return _0x58603e[_0x48c525(0x1af)]['localeCompare'](_0x7e7c6d[_0x48c525(0x1af)]);return 0x0;}):VisuMZ[_0x23a32f(0x1ed)][_0x23a32f(0xdf)](this[_0x23a32f(0x339)]);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0xdf)]=function(_0x422671){const _0x5d527a=_0x28fd0f;return _0x422671[_0x5d527a(0x470)]((_0x2a6672,_0x39727c)=>{const _0x245e5d=_0x5d527a;if(!!_0x2a6672&&!!_0x39727c){if(_0x2a6672[_0x245e5d(0x324)]===undefined)VisuMZ['ItemsEquipsCore']['Parse_Notetags_Sorting'](_0x2a6672);if(_0x39727c[_0x245e5d(0x324)]===undefined)VisuMZ['ItemsEquipsCore'][_0x245e5d(0x2fc)](_0x39727c);const _0x44d803=_0x2a6672[_0x245e5d(0x324)],_0x3671a1=_0x39727c[_0x245e5d(0x324)];if(_0x44d803!==_0x3671a1)return _0x3671a1-_0x44d803;return _0x2a6672['id']-_0x39727c['id'];}return 0x0;}),_0x422671;},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x167)]=function(){return!![];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2eb)]=Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0xa3)],Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0xa3)]=function(_0x1e53e9){const _0x59c4f7=_0x28fd0f;VisuMZ['ItemsEquipsCore'][_0x59c4f7(0x2eb)]['call'](this,_0x1e53e9),this[_0x59c4f7(0x29a)](_0x1e53e9);},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0xd3)]=function(_0x8babc6,_0x5c63e1,_0x5f357c,_0x63497a){const _0x47399d=_0x28fd0f;Window_Selectable[_0x47399d(0x1c0)]['drawItemNumber'][_0x47399d(0x245)](this,_0x8babc6,_0x5c63e1,_0x5f357c,_0x63497a);},Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x29a)]=function(_0x72076){const _0xbd5262=_0x28fd0f,_0x2e3ad0=this[_0xbd5262(0x327)](_0x72076);if(!_0x2e3ad0||!this[_0xbd5262(0x167)]())return;if(!$gameParty[_0xbd5262(0xed)](_0x2e3ad0))return;const _0x1db641=this['itemLineRect'](_0x72076),_0x11273d=_0x1db641['x'],_0x53fd08=_0x1db641['y']+(this[_0xbd5262(0xa7)]()-ImageManager[_0xbd5262(0x20a)])/0x2,_0x50df61=VisuMZ['ItemsEquipsCore'][_0xbd5262(0x14a)][_0xbd5262(0x19c)][_0xbd5262(0x154)],_0x2d94ba=VisuMZ['ItemsEquipsCore'][_0xbd5262(0x14a)][_0xbd5262(0x19c)]['OffsetY'];this[_0xbd5262(0x282)](_0x2e3ad0,_0x11273d+_0x50df61,_0x53fd08+_0x2d94ba);},Window_ItemList[_0x28fd0f(0x1c0)]['setStatusWindow']=function(_0x9b0a48){const _0x4d850f=_0x28fd0f;this[_0x4d850f(0x3ee)]=_0x9b0a48,this[_0x4d850f(0x38c)]();},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x184)]=Window_ItemList[_0x28fd0f(0x1c0)]['updateHelp'],Window_ItemList[_0x28fd0f(0x1c0)][_0x28fd0f(0x108)]=function(){const _0x3a4cc3=_0x28fd0f;VisuMZ[_0x3a4cc3(0x1ed)][_0x3a4cc3(0x184)][_0x3a4cc3(0x245)](this),this[_0x3a4cc3(0x3ee)]&&this[_0x3a4cc3(0x3ee)][_0x3a4cc3(0x3aa)]===Window_ShopStatus&&this[_0x3a4cc3(0x3ee)][_0x3a4cc3(0x466)](this[_0x3a4cc3(0x373)]());},Window_BattleItem[_0x28fd0f(0x1c0)][_0x28fd0f(0xf0)]=function(_0x1dd093){const _0x3dab91=_0x28fd0f;return BattleManager['actor']()?BattleManager[_0x3dab91(0x13d)]()[_0x3dab91(0x3e9)](_0x1dd093):Window_ItemList['prototype'][_0x3dab91(0xf0)]['call'](this,_0x1dd093);},Window_EventItem[_0x28fd0f(0x1c0)][_0x28fd0f(0x167)]=function(){return![];},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x4a5)]=function(){const _0x222978=_0x28fd0f;return VisuMZ[_0x222978(0x1ed)][_0x222978(0x14a)][_0x222978(0x257)][_0x222978(0x163)];},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x1ba)]=Window_EquipStatus['prototype'][_0x28fd0f(0x143)],Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x143)]=function(){const _0x206143=_0x28fd0f;this['hideAdditionalSprites'](),this[_0x206143(0x41d)]();if(this['_actor'])this['_actor']['refresh']();this['isUseItemsEquipsCoreUpdatedLayout']()?this['prepareRefreshItemsEquipsCoreLayout']():VisuMZ[_0x206143(0x1ed)][_0x206143(0x1ba)]['call'](this);},Window_EquipStatus['prototype'][_0x28fd0f(0x42e)]=function(){const _0xaaa13=_0x28fd0f;this['contents'][_0xaaa13(0x47f)]();if(!this[_0xaaa13(0x212)])return;if(this[_0xaaa13(0x1c4)]()){const _0x172f8f=ImageManager[_0xaaa13(0x28b)](this[_0xaaa13(0x212)][_0xaaa13(0x419)]());_0x172f8f[_0xaaa13(0xcc)](this[_0xaaa13(0xea)][_0xaaa13(0x3c0)](this));}else this['refreshItemsEquipsCoreNoMenuImage']();},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1c4)]=function(){const _0x3c0a41=_0x28fd0f;return Imported['VisuMZ_1_MainMenuCore']&&this[_0x3c0a41(0x212)]['getMenuImage']()!==''&&VisuMZ[_0x3c0a41(0x1ed)][_0x3c0a41(0x14a)][_0x3c0a41(0x257)]['MenuPortraits'];},Window_EquipStatus['prototype'][_0x28fd0f(0xea)]=function(){const _0xbf7291=_0x28fd0f;VisuMZ['ItemsEquipsCore'][_0xbf7291(0x14a)][_0xbf7291(0x257)][_0xbf7291(0x42c)][_0xbf7291(0x245)](this),this[_0xbf7291(0x1d6)]();},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x147)]=function(){const _0x454a29=_0x28fd0f;VisuMZ[_0x454a29(0x1ed)]['Settings']['EquipScene'][_0x454a29(0x2de)][_0x454a29(0x245)](this),this[_0x454a29(0x1d6)]();},Window_EquipStatus['prototype'][_0x28fd0f(0x1d6)]=function(){const _0x5deed1=_0x28fd0f;this[_0x5deed1(0x41d)](),VisuMZ[_0x5deed1(0x1ed)][_0x5deed1(0x14a)][_0x5deed1(0x257)][_0x5deed1(0xe6)][_0x5deed1(0x245)](this);},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x370)]=function(_0x4f7660,_0x53e2cb,_0x128498,_0x4ea20a,_0xa3aed4){const _0x3a019a=_0x28fd0f,_0x143542=ImageManager[_0x3a019a(0x28b)](_0x4f7660['getMenuImage']()),_0x535485=this[_0x3a019a(0x462)]-_0x143542[_0x3a019a(0x248)];_0x53e2cb+=_0x535485/0x2;if(_0x535485<0x0)_0x4ea20a-=_0x535485;Window_StatusBase[_0x3a019a(0x1c0)][_0x3a019a(0x370)][_0x3a019a(0x245)](this,_0x4f7660,_0x53e2cb,_0x128498,_0x4ea20a,_0xa3aed4);},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x475)]=function(){const _0x3800a7=_0x28fd0f;return Imported[_0x3800a7(0x3ea)]?VisuMZ[_0x3800a7(0x2a8)]['Settings'][_0x3800a7(0x227)][_0x3800a7(0x375)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x152)]=function(){const _0x51db19=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x51db19(0x14a)][_0x51db19(0x257)][_0x51db19(0x115)];},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0xb9)]=function(){const _0x3084a6=_0x28fd0f;return Imported[_0x3084a6(0x3ea)]&&VisuMZ[_0x3084a6(0x2a8)][_0x3084a6(0x14a)][_0x3084a6(0x227)][_0x3084a6(0x41c)];},Window_EquipStatus['prototype'][_0x28fd0f(0x351)]=function(_0x5a5ff3,_0x51d42e,_0x4312c7,_0xdd7f0c){const _0x8fe848=_0x28fd0f,_0x1effb4=this['itemPadding']();Imported[_0x8fe848(0x3ea)]?this[_0x8fe848(0x2d7)](_0x51d42e+_0x1effb4,_0x4312c7,_0xdd7f0c,_0x5a5ff3,![]):this[_0x8fe848(0x473)](TextManager[_0x8fe848(0x38e)](_0x5a5ff3),_0x51d42e+_0x1effb4,_0x4312c7,_0xdd7f0c);},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0xfc)]=function(_0x2db57f,_0x40af63,_0x3da579,_0x1deced){const _0x39144c=_0x28fd0f,_0x1848b3=this[_0x39144c(0x301)]();let _0x12ca8c=0x0;Imported['VisuMZ_0_CoreEngine']?_0x12ca8c=this[_0x39144c(0x212)][_0x39144c(0x126)](_0x2db57f,!![]):_0x12ca8c=this[_0x39144c(0x212)][_0x39144c(0x38e)](_0x2db57f);const _0x272d26=_0x12ca8c;this[_0x39144c(0x473)](_0x12ca8c,_0x40af63,_0x3da579,_0x1deced-_0x1848b3,_0x39144c(0x299));},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1ea)]=function(_0x3f9bce,_0x29a823,_0x4ad95e,_0x2c15bf){const _0x72206a=_0x28fd0f,_0x56d60a=this[_0x72206a(0x301)]();let _0x16be9d=0x0,_0x57a372=0x0,_0x4bc484='';if(this[_0x72206a(0x29e)]){Imported[_0x72206a(0x3ea)]?(_0x16be9d=this[_0x72206a(0x212)][_0x72206a(0x126)](_0x3f9bce,![]),_0x57a372=this[_0x72206a(0x29e)][_0x72206a(0x126)](_0x3f9bce,![]),_0x4bc484=this['_tempActor']['paramValueByName'](_0x3f9bce,!![])):(_0x16be9d=this[_0x72206a(0x212)][_0x72206a(0x38e)](_0x3f9bce),_0x57a372=this['_tempActor'][_0x72206a(0x38e)](_0x3f9bce),_0x4bc484=this[_0x72206a(0x29e)][_0x72206a(0x38e)](_0x3f9bce));const _0x12e6c2=_0x16be9d,_0x3643a3=_0x57a372;diffValue=_0x3643a3-_0x12e6c2,this[_0x72206a(0x243)](ColorManager[_0x72206a(0x316)](diffValue)),this['drawText'](_0x4bc484,_0x29a823,_0x4ad95e,_0x2c15bf-_0x56d60a,_0x72206a(0x299));}},Window_EquipStatus['prototype'][_0x28fd0f(0x468)]=function(_0x35261,_0xdeafb,_0x16e16a,_0x53e7d8){const _0x3beb10=_0x28fd0f,_0x2ba973=this[_0x3beb10(0x301)]();let _0x23d4c5=0x0,_0x752137=0x0,_0x5a78d7=![];if(this[_0x3beb10(0x29e)]){Imported[_0x3beb10(0x3ea)]?(_0x23d4c5=this['_actor'][_0x3beb10(0x126)](_0x35261,![]),_0x752137=this[_0x3beb10(0x29e)][_0x3beb10(0x126)](_0x35261,![]),_0x5a78d7=String(this[_0x3beb10(0x212)]['paramValueByName'](_0x35261,!![]))[_0x3beb10(0x275)](/([%％])/i)):(_0x23d4c5=this[_0x3beb10(0x212)][_0x3beb10(0x38e)](_0x35261),_0x752137=this[_0x3beb10(0x29e)][_0x3beb10(0x38e)](_0x35261),_0x5a78d7=_0x23d4c5%0x1!==0x0||_0x752137%0x1!==0x0);const _0x41dfe8=_0x23d4c5,_0x42020f=_0x752137,_0x357f93=_0x42020f-_0x41dfe8;let _0x17e6bd=_0x357f93;if(_0x5a78d7)_0x17e6bd=Math['round'](_0x357f93*0x64)+'%';_0x357f93!==0x0&&(this[_0x3beb10(0x243)](ColorManager[_0x3beb10(0x316)](_0x357f93)),_0x17e6bd=(_0x357f93>0x0?_0x3beb10(0x1ef):_0x3beb10(0x41b))[_0x3beb10(0xa8)](_0x17e6bd),this['drawText'](_0x17e6bd,_0xdeafb+_0x2ba973,_0x16e16a,_0x53e7d8,'left'));}},Window_EquipStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x23a)]=function(_0x3ac113,_0x35df83,_0x5b2354,_0xa3fda3,_0x25e0ff){const _0x10a41b=_0x28fd0f;if(VisuMZ[_0x10a41b(0x1ed)][_0x10a41b(0x14a)][_0x10a41b(0x257)]['DrawBackRect']===![])return;_0x25e0ff=Math[_0x10a41b(0x27f)](_0x25e0ff||0x1,0x1);while(_0x25e0ff--){_0xa3fda3=_0xa3fda3||this['lineHeight'](),this[_0x10a41b(0x48b)][_0x10a41b(0x309)]=0xa0;const _0x507580=ColorManager[_0x10a41b(0x2f4)]();this[_0x10a41b(0x48b)][_0x10a41b(0x3e2)](_0x3ac113+0x1,_0x35df83+0x1,_0x5b2354-0x2,_0xa3fda3-0x2,_0x507580),this[_0x10a41b(0x48b)][_0x10a41b(0x309)]=0xff;}},ColorManager['getItemsEquipsCoreBackColor2']=function(){const _0x218f0d=_0x28fd0f,_0x5968ea=VisuMZ['ItemsEquipsCore']['Settings'][_0x218f0d(0x257)];let _0x30d844=_0x5968ea[_0x218f0d(0xdc)]!==undefined?_0x5968ea['BackRectColor']:0x13;return ColorManager[_0x218f0d(0xbf)](_0x30d844);},VisuMZ[_0x28fd0f(0x1ed)]['Window_EquipCommand_initialize']=Window_EquipCommand[_0x28fd0f(0x1c0)]['initialize'],Window_EquipCommand['prototype']['initialize']=function(_0x2cbc9f){const _0x50c5b4=_0x28fd0f;VisuMZ[_0x50c5b4(0x1ed)]['Window_EquipCommand_initialize']['call'](this,_0x2cbc9f),this[_0x50c5b4(0x112)](_0x2cbc9f);},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x112)]=function(_0x2982b3){const _0xe1e95d=_0x28fd0f,_0x58577c=new Rectangle(0x0,0x0,_0x2982b3[_0xe1e95d(0x248)],_0x2982b3[_0xe1e95d(0x25b)]);this[_0xe1e95d(0x121)]=new Window_Base(_0x58577c),this['_commandNameWindow'][_0xe1e95d(0x2da)]=0x0,this['addChild'](this[_0xe1e95d(0x121)]),this[_0xe1e95d(0x3c6)]();},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x38c)]=function(){const _0x468c07=_0x28fd0f;Window_HorzCommand[_0x468c07(0x1c0)][_0x468c07(0x38c)][_0x468c07(0x245)](this);if(this[_0x468c07(0x121)])this[_0x468c07(0x3c6)]();},Window_EquipCommand[_0x28fd0f(0x1c0)]['updateCommandNameWindow']=function(){const _0x115a52=_0x28fd0f,_0x214792=this[_0x115a52(0x121)];_0x214792['contents'][_0x115a52(0x47f)]();const _0x1708ec=this[_0x115a52(0x340)](this[_0x115a52(0x3fa)]());if(_0x1708ec===_0x115a52(0x23e)){const _0x2f344d=this[_0x115a52(0x429)](this['index']());let _0x67236b=this[_0x115a52(0x19f)](this[_0x115a52(0x3fa)]());_0x67236b=_0x67236b[_0x115a52(0x18a)](/\\I\[(\d+)\]/gi,''),_0x214792[_0x115a52(0x41d)](),this[_0x115a52(0x31a)](_0x67236b,_0x2f344d),this['commandNameWindowDrawText'](_0x67236b,_0x2f344d),this[_0x115a52(0x2ec)](_0x67236b,_0x2f344d);}},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x31a)]=function(_0x110069,_0xe37cf7){},Window_EquipCommand['prototype'][_0x28fd0f(0x367)]=function(_0x183116,_0x589332){const _0x3a214e=_0x28fd0f,_0x5d115d=this[_0x3a214e(0x121)];_0x5d115d[_0x3a214e(0x473)](_0x183116,0x0,_0x589332['y'],_0x5d115d[_0x3a214e(0x462)],'center');},Window_EquipCommand[_0x28fd0f(0x1c0)]['commandNameWindowCenter']=function(_0x37ae09,_0x1a64ce){const _0x5cc67e=_0x28fd0f,_0x42e365=this[_0x5cc67e(0x121)],_0x49dfd8=$gameSystem[_0x5cc67e(0xa6)](),_0x312a0b=_0x1a64ce['x']+Math[_0x5cc67e(0x2bb)](_0x1a64ce['width']/0x2)+_0x49dfd8;_0x42e365['x']=_0x42e365[_0x5cc67e(0x248)]/-0x2+_0x312a0b,_0x42e365['y']=Math[_0x5cc67e(0x2bb)](_0x1a64ce[_0x5cc67e(0x25b)]/0x2);},Window_EquipCommand[_0x28fd0f(0x1c0)]['isUseModernControls']=function(){const _0x13250b=_0x28fd0f;return Imported[_0x13250b(0x3ea)]&&Window_HorzCommand[_0x13250b(0x1c0)][_0x13250b(0x477)][_0x13250b(0x245)](this);},Window_EquipCommand[_0x28fd0f(0x1c0)]['playOkSound']=function(){const _0x347fd9=_0x28fd0f;if(this['currentSymbol']()===_0x347fd9(0x21c))Window_HorzCommand[_0x347fd9(0x1c0)][_0x347fd9(0xbe)]['call'](this);},Window_EquipCommand[_0x28fd0f(0x1c0)]['processCursorMoveModernControls']=function(){const _0x40d28b=_0x28fd0f;!this[_0x40d28b(0x118)]()&&Window_HorzCommand[_0x40d28b(0x1c0)][_0x40d28b(0x342)][_0x40d28b(0x245)](this);},Window_EquipCommand['prototype'][_0x28fd0f(0x118)]=function(){const _0xe8c062=_0x28fd0f;if(!this[_0xe8c062(0x23c)]())return![];if(SceneManager[_0xe8c062(0x19d)][_0xe8c062(0x3aa)]!==Scene_Equip)return![];return Input['isTriggered'](_0xe8c062(0x336))&&this[_0xe8c062(0x21a)](),![];},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x21a)]=function(){const _0x44a5fb=_0x28fd0f;this[_0x44a5fb(0x206)](),SceneManager[_0x44a5fb(0x19d)][_0x44a5fb(0x3bb)](),SceneManager['_scene'][_0x44a5fb(0x338)][_0x44a5fb(0xd9)](-0x1);},Window_EquipCommand['prototype'][_0x28fd0f(0x435)]=function(){const _0x43d41c=_0x28fd0f;return this[_0x43d41c(0xb1)]?this[_0x43d41c(0xb1)][_0x43d41c(0x176)]:0x3;},Window_EquipCommand['prototype'][_0x28fd0f(0x3eb)]=function(){const _0x1369f4=_0x28fd0f;if(this[_0x1369f4(0x44a)]()&&this[_0x1369f4(0x1fd)]&&SceneManager[_0x1369f4(0x19d)]['constructor']===Scene_Equip){if(this[_0x1369f4(0x265)]()&&TouchInput[_0x1369f4(0x402)]())this[_0x1369f4(0x12e)](![]);else TouchInput[_0x1369f4(0x377)]()&&this[_0x1369f4(0x12e)](!![]);TouchInput['isClicked']()&&this[_0x1369f4(0x43a)]();}},Window_EquipCommand['prototype']['onTouchSelectModernControls']=function(_0x11ae3c){const _0x44612b=_0x28fd0f;this[_0x44612b(0x1f5)]=![];const _0xb60d7b=this[_0x44612b(0x3fa)](),_0x55e5b2=this[_0x44612b(0x1dd)](),_0x1bda60=SceneManager[_0x44612b(0x19d)][_0x44612b(0x338)];if(_0x1bda60['isOpen']()&&_0x1bda60[_0x44612b(0x1fd)]){if(_0x55e5b2>=0x0)_0x55e5b2===this[_0x44612b(0x3fa)]()&&(this['_doubleTouch']=!![]),this[_0x44612b(0x3ab)](),this[_0x44612b(0xb8)](_0x55e5b2);else _0x1bda60[_0x44612b(0x1dd)]()>=0x0&&(this[_0x44612b(0x31b)](),this['deselect']());}_0x11ae3c&&this[_0x44612b(0x3fa)]()!==_0xb60d7b&&this[_0x44612b(0x206)]();},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x2e9)]=function(){const _0x1f5303=_0x28fd0f;this[_0x1f5303(0x3af)](),this[_0x1f5303(0x34a)](),this[_0x1f5303(0x458)]();},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x143)]=function(){const _0xbf85d6=_0x28fd0f;Window_HorzCommand[_0xbf85d6(0x1c0)]['refresh'][_0xbf85d6(0x245)](this),this['refreshCursor']();},Window_EquipCommand[_0x28fd0f(0x1c0)]['addEquipCommand']=function(){const _0x3dd968=_0x28fd0f;if(!this[_0x3dd968(0x1c6)]())return;const _0x2db5f2=this[_0x3dd968(0x1b4)](),_0x4c3272=VisuMZ[_0x3dd968(0x1ed)][_0x3dd968(0x14a)][_0x3dd968(0x257)][_0x3dd968(0x1f6)],_0x10720a=_0x2db5f2===_0x3dd968(0x4a0)?TextManager[_0x3dd968(0x1a9)]:_0x3dd968(0x26e)['format'](_0x4c3272,TextManager[_0x3dd968(0x1a9)]),_0x68fa6a=this[_0x3dd968(0x366)]();this[_0x3dd968(0x2ff)](_0x10720a,_0x3dd968(0x21c),_0x68fa6a);},Window_EquipCommand[_0x28fd0f(0x1c0)]['isEquipCommandAdded']=function(){const _0x3055d4=_0x28fd0f;return!this[_0x3055d4(0x477)]();},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x366)]=function(){return!![];},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x34a)]=function(){const _0x2b39e1=_0x28fd0f;if(!this['isOptimizeCommandAdded']())return;const _0x25fef5=this['commandStyle'](),_0x1fae36=VisuMZ[_0x2b39e1(0x1ed)]['Settings'][_0x2b39e1(0x257)][_0x2b39e1(0x43f)],_0x41ee52=_0x25fef5===_0x2b39e1(0x4a0)?TextManager[_0x2b39e1(0x13c)]:_0x2b39e1(0x26e)[_0x2b39e1(0xa8)](_0x1fae36,TextManager[_0x2b39e1(0x13c)]),_0x1437bb=this['isOptimizeCommandEnabled']();this[_0x2b39e1(0x2ff)](_0x41ee52,'optimize',_0x1437bb);},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x234)]=function(){const _0x5cdc8c=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x5cdc8c(0x14a)][_0x5cdc8c(0x257)][_0x5cdc8c(0x131)];},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x28e)]=function(){return!![];},Window_EquipCommand[_0x28fd0f(0x1c0)]['addClearCommand']=function(){const _0x3fdede=_0x28fd0f;if(!this[_0x3fdede(0x33e)]())return;const _0x157842=this[_0x3fdede(0x1b4)](),_0x56f4ec=VisuMZ[_0x3fdede(0x1ed)][_0x3fdede(0x14a)][_0x3fdede(0x257)][_0x3fdede(0x27e)],_0x19f3c3=_0x157842===_0x3fdede(0x4a0)?TextManager['clear']:_0x3fdede(0x26e)[_0x3fdede(0xa8)](_0x56f4ec,TextManager[_0x3fdede(0x47f)]),_0x43722f=this[_0x3fdede(0x124)]();this[_0x3fdede(0x2ff)](_0x19f3c3,'clear',_0x43722f);},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x33e)]=function(){const _0x5e8262=_0x28fd0f;return VisuMZ[_0x5e8262(0x1ed)][_0x5e8262(0x14a)]['EquipScene'][_0x5e8262(0x23f)];},Window_EquipCommand['prototype'][_0x28fd0f(0x124)]=function(){return!![];},Window_EquipCommand[_0x28fd0f(0x1c0)]['itemTextAlign']=function(){const _0x1c9a6a=_0x28fd0f;return VisuMZ[_0x1c9a6a(0x1ed)][_0x1c9a6a(0x14a)][_0x1c9a6a(0x257)][_0x1c9a6a(0x237)];},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0xa3)]=function(_0x434a88){const _0x3d0c7d=_0x28fd0f,_0x364512=this[_0x3d0c7d(0x340)](_0x434a88);if(_0x364512===_0x3d0c7d(0x39a))this['drawItemStyleIconText'](_0x434a88);else _0x364512==='icon'?this[_0x3d0c7d(0xa2)](_0x434a88):Window_HorzCommand['prototype'][_0x3d0c7d(0xa3)][_0x3d0c7d(0x245)](this,_0x434a88);},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b4)]=function(){const _0x4544c4=_0x28fd0f;return VisuMZ[_0x4544c4(0x1ed)]['Settings']['EquipScene'][_0x4544c4(0x1ce)];},Window_EquipCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x340)]=function(_0x42eee4){const _0x2a2308=_0x28fd0f;if(_0x42eee4<0x0)return'text';const _0x5402ae=this['commandStyle']();if(_0x5402ae!==_0x2a2308(0x413))return _0x5402ae;else{if(this[_0x2a2308(0x1f4)]()>0x0){const _0x34a384=this[_0x2a2308(0x19f)](_0x42eee4);if(_0x34a384['match'](/\\I\[(\d+)\]/i)){const _0x193af7=this[_0x2a2308(0x429)](_0x42eee4),_0x4ccc73=this[_0x2a2308(0x2d6)](_0x34a384)[_0x2a2308(0x248)];return _0x4ccc73<=_0x193af7['width']?'iconText':_0x2a2308(0x23e);}}}return _0x2a2308(0x4a0);},Window_EquipCommand['prototype'][_0x28fd0f(0x1ff)]=function(_0x20c60d){const _0x27f611=_0x28fd0f,_0x1ee8f3=this['itemLineRect'](_0x20c60d),_0x53b1e8=this[_0x27f611(0x19f)](_0x20c60d),_0x1728cf=this[_0x27f611(0x2d6)](_0x53b1e8)['width'];this[_0x27f611(0x204)](this['isCommandEnabled'](_0x20c60d));const _0x393ce9=this[_0x27f611(0x417)]();if(_0x393ce9===_0x27f611(0x299))this[_0x27f611(0x31f)](_0x53b1e8,_0x1ee8f3['x']+_0x1ee8f3[_0x27f611(0x248)]-_0x1728cf,_0x1ee8f3['y'],_0x1728cf);else{if(_0x393ce9===_0x27f611(0x132)){const _0x150a55=_0x1ee8f3['x']+Math[_0x27f611(0x2bb)]((_0x1ee8f3['width']-_0x1728cf)/0x2);this[_0x27f611(0x31f)](_0x53b1e8,_0x150a55,_0x1ee8f3['y'],_0x1728cf);}else this['drawTextEx'](_0x53b1e8,_0x1ee8f3['x'],_0x1ee8f3['y'],_0x1728cf);}},Window_EquipCommand[_0x28fd0f(0x1c0)]['drawItemStyleIcon']=function(_0xf5160c){const _0x36e52d=_0x28fd0f;this[_0x36e52d(0x19f)](_0xf5160c)[_0x36e52d(0x275)](/\\I\[(\d+)\]/i);const _0x4844cc=Number(RegExp['$1'])||0x0,_0x3c9030=this[_0x36e52d(0x429)](_0xf5160c),_0x4e9305=_0x3c9030['x']+Math[_0x36e52d(0x2bb)]((_0x3c9030[_0x36e52d(0x248)]-ImageManager[_0x36e52d(0x2c9)])/0x2),_0x4b660c=_0x3c9030['y']+(_0x3c9030[_0x36e52d(0x25b)]-ImageManager[_0x36e52d(0x20a)])/0x2;this[_0x36e52d(0x30a)](_0x4844cc,_0x4e9305,_0x4b660c);},Window_EquipCommand['prototype'][_0x28fd0f(0x13d)]=function(){const _0x20b8a7=_0x28fd0f,_0x451df2=SceneManager['_scene'];if(_0x451df2&&_0x451df2[_0x20b8a7(0x109)])return _0x451df2[_0x20b8a7(0x109)]();return null;},Window_EquipCommand['prototype'][_0x28fd0f(0x108)]=function(){const _0x5e3d21=_0x28fd0f;Window_Command[_0x5e3d21(0x1c0)][_0x5e3d21(0x108)]['call'](this),this[_0x5e3d21(0x38b)][_0x5e3d21(0x111)](this[_0x5e3d21(0x33b)]());},Window_EquipCommand[_0x28fd0f(0x1c0)]['helpDescriptionText']=function(){const _0x1469c6=_0x28fd0f,_0x55c9af=this['currentSymbol']();switch(_0x55c9af){case _0x1469c6(0x21c):return TextManager[_0x1469c6(0xf6)][_0x1469c6(0x2ac)][_0x1469c6(0x21c)];case _0x1469c6(0x13c):return TextManager[_0x1469c6(0xf6)]['helpDesc'][_0x1469c6(0x13c)];case _0x1469c6(0x47f):return TextManager[_0x1469c6(0xf6)]['helpDesc'][_0x1469c6(0x47f)];default:return'';}},Window_EquipSlot['prototype'][_0x28fd0f(0x477)]=function(){const _0x16bcd3=_0x28fd0f;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x16bcd3(0x1c0)][_0x16bcd3(0x477)][_0x16bcd3(0x245)](this);},Window_EquipSlot[_0x28fd0f(0x1c0)][_0x28fd0f(0x3ab)]=function(){const _0x164ef0=_0x28fd0f;Window_StatusBase[_0x164ef0(0x1c0)][_0x164ef0(0x3ab)][_0x164ef0(0x245)](this),this[_0x164ef0(0x38c)]();},Window_EquipSlot[_0x28fd0f(0x1c0)][_0x28fd0f(0x456)]=function(){const _0x1f91b2=_0x28fd0f;Window_StatusBase[_0x1f91b2(0x1c0)]['processCursorMove'][_0x1f91b2(0x245)](this),this['checkShiftRemoveShortcut']();},Window_EquipSlot['prototype'][_0x28fd0f(0x1a4)]=function(){const _0x10587a=_0x28fd0f;if(!this[_0x10587a(0x480)]())return;if(Input['isTriggered']('shift')&&this[_0x10587a(0x373)]()){const _0x274fe6=SceneManager[_0x10587a(0x19d)][_0x10587a(0x212)];_0x274fe6&&(this['canShiftRemoveEquipment'](this[_0x10587a(0x3fa)]())?(this[_0x10587a(0x203)](),this[_0x10587a(0x108)]()):this['playBuzzerSound']());}},Window_EquipSlot[_0x28fd0f(0x1c0)]['canShiftRemoveEquipment']=function(_0x398476){const _0x6bcb1f=_0x28fd0f,_0x30001a=SceneManager[_0x6bcb1f(0x19d)][_0x6bcb1f(0x212)];if(!_0x30001a)return;if(!_0x30001a[_0x6bcb1f(0x27a)](_0x398476))return![];const _0x5734e5=_0x30001a['equipSlots']()[_0x398476];if(_0x30001a[_0x6bcb1f(0xa1)]()[_0x6bcb1f(0x41a)](_0x5734e5))return![];return!![];;},Window_EquipSlot[_0x28fd0f(0x1c0)]['processShiftRemoveShortcut']=function(){const _0x5ed320=_0x28fd0f;SoundManager[_0x5ed320(0xe4)]();const _0x1ebfed=SceneManager['_scene'][_0x5ed320(0x212)];_0x1ebfed[_0x5ed320(0x2af)](this[_0x5ed320(0x3fa)](),null),this[_0x5ed320(0x143)](),this[_0x5ed320(0x364)]['refresh'](),this[_0x5ed320(0x38c)]();const _0x4d3977=SceneManager[_0x5ed320(0x19d)][_0x5ed320(0x3ee)];if(_0x4d3977)_0x4d3977['refresh']();},Window_EquipSlot['prototype'][_0x28fd0f(0x480)]=function(){const _0x4d2597=_0x28fd0f;if(!this['active'])return![];if(!VisuMZ[_0x4d2597(0x1ed)][_0x4d2597(0x14a)][_0x4d2597(0x257)][_0x4d2597(0x393)])return![];return!![];},Window_EquipSlot['prototype'][_0x28fd0f(0x342)]=function(){const _0x347162=_0x28fd0f;!this[_0x347162(0x118)]()&&Window_StatusBase[_0x347162(0x1c0)][_0x347162(0x342)][_0x347162(0x245)](this);},Window_EquipSlot['prototype'][_0x28fd0f(0x118)]=function(){const _0x31436b=_0x28fd0f;if(!this[_0x31436b(0x23c)]())return![];if(SceneManager[_0x31436b(0x19d)]['constructor']!==Scene_Equip)return![];if(this[_0x31436b(0x1ae)]())return this['playCursorSound'](),Input[_0x31436b(0x47f)](),SceneManager[_0x31436b(0x19d)]['onSlotCancel'](),![];else{if(Input[_0x31436b(0x1cc)](_0x31436b(0x336))){const _0x138309=this[_0x31436b(0x3fa)]();return Input[_0x31436b(0x244)](_0x31436b(0x12b))?this[_0x31436b(0x3c8)]():this[_0x31436b(0x3b8)](Input['isTriggered'](_0x31436b(0x336))),this[_0x31436b(0x3fa)]()!==_0x138309&&this[_0x31436b(0x206)](),!![];}else{if(this[_0x31436b(0x201)]()&&Input[_0x31436b(0x377)](_0x31436b(0x12b)))return!![];}}return![];},Window_EquipSlot[_0x28fd0f(0x1c0)]['allowCommandWindowCursorUp']=function(){const _0x8c66a3=_0x28fd0f;if(this[_0x8c66a3(0x3fa)]()!==0x0)return![];const _0x4e8239=VisuMZ['ItemsEquipsCore']['Settings']['EquipScene'];if(!_0x4e8239[_0x8c66a3(0x131)]&&!_0x4e8239[_0x8c66a3(0x23f)])return![];return Input[_0x8c66a3(0x377)]('up');},Window_EquipSlot[_0x28fd0f(0x1c0)][_0x28fd0f(0x201)]=function(){const _0x45e567=_0x28fd0f;return VisuMZ[_0x45e567(0x1ed)][_0x45e567(0x14a)][_0x45e567(0x257)][_0x45e567(0x393)];},Window_EquipSlot[_0x28fd0f(0x1c0)][_0x28fd0f(0x3eb)]=function(){const _0x3afc2f=_0x28fd0f;if(this[_0x3afc2f(0x44a)]()&&this['visible']&&SceneManager[_0x3afc2f(0x19d)][_0x3afc2f(0x3aa)]===Scene_Equip){if(this[_0x3afc2f(0x265)]()&&TouchInput[_0x3afc2f(0x402)]())this[_0x3afc2f(0x12e)](![]);else TouchInput[_0x3afc2f(0x377)]()&&this['onTouchSelectModernControls'](!![]);if(TouchInput['isClicked']())this['onTouchOk']();else{if(TouchInput[_0x3afc2f(0xc1)]()){const _0x20e958=VisuMZ[_0x3afc2f(0x1ed)][_0x3afc2f(0x14a)][_0x3afc2f(0x257)];this['isUseModernControls']()&&this[_0x3afc2f(0x123)]&&!_0x20e958[_0x3afc2f(0x131)]&&!_0x20e958[_0x3afc2f(0x23f)]?(SoundManager[_0x3afc2f(0x157)](),SceneManager[_0x3afc2f(0x341)]()):this[_0x3afc2f(0x114)]();}}}},Window_EquipSlot[_0x28fd0f(0x1c0)][_0x28fd0f(0x12e)]=function(_0xb0124a){const _0x5f8ec7=_0x28fd0f;this[_0x5f8ec7(0x1f5)]=![];const _0x196ae9=this[_0x5f8ec7(0x3fa)](),_0x25623e=this['hitIndex'](),_0x1223ab=SceneManager[_0x5f8ec7(0x19d)]['_commandWindow'];if(_0x1223ab[_0x5f8ec7(0x44a)]()&&_0x1223ab[_0x5f8ec7(0x1fd)]){if(_0x25623e>=0x0)_0x25623e===this[_0x5f8ec7(0x3fa)]()&&(this[_0x5f8ec7(0x1f5)]=!![]),this[_0x5f8ec7(0x3ab)](),this[_0x5f8ec7(0xb8)](_0x25623e),_0x1223ab['deactivate']();else _0x1223ab[_0x5f8ec7(0x1dd)]()>=0x0&&(this['deactivate'](),this[_0x5f8ec7(0x3da)](),_0x1223ab[_0x5f8ec7(0x3ab)]());}_0xb0124a&&this[_0x5f8ec7(0x3fa)]()!==_0x196ae9&&this[_0x5f8ec7(0x206)]();},Window_EquipSlot[_0x28fd0f(0x1c0)][_0x28fd0f(0x34e)]=function(){const _0x5cc1fb=_0x28fd0f;return this[_0x5cc1fb(0x3fa)]();},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x17e)]=Window_EquipItem['prototype'][_0x28fd0f(0x41a)],Window_EquipItem[_0x28fd0f(0x1c0)][_0x28fd0f(0x41a)]=function(_0x290d6c){const _0x4026ca=_0x28fd0f;if(_0x290d6c===null&&this[_0x4026ca(0xa1)]()[_0x4026ca(0x41a)](this[_0x4026ca(0x10f)]()))return![];else{$gameTemp[_0x4026ca(0xab)]=!![];let _0xd0b7db=VisuMZ[_0x4026ca(0x1ed)]['Window_EquipItem_includes'][_0x4026ca(0x245)](this,_0x290d6c);if(!_0xd0b7db&&_0x290d6c&&DataManager[_0x4026ca(0x311)](_0x290d6c)){const _0x323e17=_0x290d6c[_0x4026ca(0x298)]||0x0;if(this[_0x4026ca(0x212)]&&this[_0x4026ca(0x212)][_0x4026ca(0x2cd)](_0x323e17)){const _0x414606=DataManager[_0x4026ca(0x49a)](_0x290d6c);_0x414606[_0x4026ca(0x41a)](this[_0x4026ca(0x10f)]())&&(_0xd0b7db=!![]);}}return $gameTemp[_0x4026ca(0xab)]=undefined,_0xd0b7db;}},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x431)]=Window_EquipItem[_0x28fd0f(0x1c0)][_0x28fd0f(0xf0)],Window_EquipItem[_0x28fd0f(0x1c0)][_0x28fd0f(0xf0)]=function(_0x1e39dd){const _0x59f2c6=_0x28fd0f;if(_0x1e39dd&&this[_0x59f2c6(0x212)]){if(this['itemHasEquipLimit'](_0x1e39dd))return![];if(this[_0x59f2c6(0x1df)](_0x1e39dd))return![];if(this['isSoleArmorType'](_0x1e39dd))return![];if(!this[_0x59f2c6(0x212)][_0x59f2c6(0x207)](_0x1e39dd))return![];}if(!_0x1e39dd)return!this[_0x59f2c6(0xa1)]()[_0x59f2c6(0x41a)](this['etypeId']());return VisuMZ[_0x59f2c6(0x1ed)]['Window_EquipItem_isEnabled']['call'](this,_0x1e39dd);},Window_EquipItem['prototype'][_0x28fd0f(0x30d)]=function(_0x40020d){const _0x2cd258=_0x28fd0f,_0x5328be=_0x40020d['note'];if(_0x5328be[_0x2cd258(0x275)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x23a2af=Number(RegExp['$1'])||0x1;let _0x4d8118=0x0;const _0x3cea5f=this['_actor'][_0x2cd258(0x43b)](),_0x345ebd=SceneManager[_0x2cd258(0x19d)]['_slotWindow'][_0x2cd258(0x34e)]();_0x3cea5f[_0x345ebd]=null;for(const _0x259c55 of _0x3cea5f){if(!_0x259c55)continue;if(DataManager[_0x2cd258(0x320)](_0x40020d)===DataManager[_0x2cd258(0x320)](_0x259c55)){if(_0x40020d['id']===_0x259c55['id'])_0x4d8118+=0x1;}}return _0x4d8118>=_0x23a2af;}else return![];},Window_EquipItem[_0x28fd0f(0x1c0)][_0x28fd0f(0x1df)]=function(_0x582f9c){const _0x2dda3c=_0x28fd0f;if(!DataManager[_0x2dda3c(0x320)](_0x582f9c))return![];const _0x53b5bc=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x1e9c80=0x0;const _0x1c1b9f=this[_0x2dda3c(0x212)]['equips'](),_0x31b454=SceneManager[_0x2dda3c(0x19d)]['_slotWindow']['equipSlotIndex']();_0x1c1b9f[_0x31b454]=null;for(const _0x2e606d of _0x1c1b9f){if(!_0x2e606d)continue;if(!DataManager[_0x2dda3c(0x320)](_0x2e606d))continue;if(_0x582f9c['wtypeId']===_0x2e606d['wtypeId']){_0x1e9c80+=0x1;if(_0x582f9c[_0x2dda3c(0x409)][_0x2dda3c(0x275)](_0x53b5bc)){const _0x4f7007=Number(RegExp['$1'])||0x1;if(_0x1e9c80>=_0x4f7007)return!![];}if(_0x2e606d[_0x2dda3c(0x409)][_0x2dda3c(0x275)](_0x53b5bc)){const _0x798601=Number(RegExp['$1'])||0x1;if(_0x1e9c80>=_0x798601)return!![];}}}return![];},Window_EquipItem['prototype'][_0x28fd0f(0x192)]=function(_0x339571){const _0x2797c6=_0x28fd0f;if(!DataManager[_0x2797c6(0x311)](_0x339571))return![];const _0x3897e1=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0xabe166=0x0;const _0x5ee22f=this[_0x2797c6(0x212)][_0x2797c6(0x43b)](),_0x3d1aa8=SceneManager[_0x2797c6(0x19d)][_0x2797c6(0x338)]['equipSlotIndex']();_0x5ee22f[_0x3d1aa8]=null;for(const _0x4a3590 of _0x5ee22f){if(!_0x4a3590)continue;if(!DataManager['isArmor'](_0x4a3590))continue;if(_0x339571[_0x2797c6(0x298)]===_0x4a3590['atypeId']){_0xabe166+=0x1;if(_0x339571[_0x2797c6(0x409)][_0x2797c6(0x275)](_0x3897e1)){const _0xd6f22=Number(RegExp['$1'])||0x1;if(_0xabe166>=_0xd6f22)return!![];}if(_0x4a3590['note']['match'](_0x3897e1)){const _0x447f2f=Number(RegExp['$1'])||0x1;if(_0xabe166>=_0x447f2f)return!![];}}}return![];},Window_EquipItem['prototype'][_0x28fd0f(0xa1)]=function(){const _0x2e6d04=_0x28fd0f;return VisuMZ[_0x2e6d04(0x1ed)][_0x2e6d04(0x14a)][_0x2e6d04(0x257)][_0x2e6d04(0x285)];},Window_EquipItem[_0x28fd0f(0x1c0)][_0x28fd0f(0xa3)]=function(_0x1379d1){const _0x39fffb=_0x28fd0f,_0x4df33f=this['itemAt'](_0x1379d1);_0x4df33f?Window_ItemList[_0x39fffb(0x1c0)]['drawItem'][_0x39fffb(0x245)](this,_0x1379d1):this['drawRemoveItem'](_0x1379d1);},Window_EquipItem[_0x28fd0f(0x1c0)][_0x28fd0f(0x208)]=function(_0x5ed7b5){const _0x544fd6=_0x28fd0f;this[_0x544fd6(0x204)](this['isEnabled'](null));const _0x2eaa7a=VisuMZ['ItemsEquipsCore'][_0x544fd6(0x14a)]['EquipScene'],_0x4fbb3e=this[_0x544fd6(0x429)](_0x5ed7b5),_0xfab4c5=_0x4fbb3e['y']+(this[_0x544fd6(0xa7)]()-ImageManager[_0x544fd6(0x20a)])/0x2,_0x4fc1c0=ImageManager[_0x544fd6(0x2c9)]+0x4,_0x25d7a8=Math[_0x544fd6(0x27f)](0x0,_0x4fbb3e['width']-_0x4fc1c0);this[_0x544fd6(0x140)](),this['drawIcon'](_0x2eaa7a[_0x544fd6(0x414)],_0x4fbb3e['x'],_0xfab4c5),this['drawText'](_0x2eaa7a['RemoveEquipText'],_0x4fbb3e['x']+_0x4fc1c0,_0x4fbb3e['y'],_0x25d7a8),this[_0x544fd6(0x204)](!![]);},Window_EquipItem[_0x28fd0f(0x1c0)][_0x28fd0f(0x108)]=function(){const _0x4f2de0=_0x28fd0f;Window_ItemList[_0x4f2de0(0x1c0)][_0x4f2de0(0x108)][_0x4f2de0(0x245)](this);if(this[_0x4f2de0(0x212)]&&this[_0x4f2de0(0x3ee)]&&this[_0x4f2de0(0x1ca)]>=0x0){const _0x39534b=JsonEx[_0x4f2de0(0x2ad)](this[_0x4f2de0(0x212)]);_0x39534b[_0x4f2de0(0x29e)]=!![],_0x39534b['forceChangeEquip'](this[_0x4f2de0(0x1ca)],this[_0x4f2de0(0x373)]()),this[_0x4f2de0(0x3ee)][_0x4f2de0(0x1fe)](_0x39534b);}},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x2b5)]=Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x159)],Window_ShopCommand[_0x28fd0f(0x1c0)]['initialize']=function(_0x2af335){const _0x44312f=_0x28fd0f;VisuMZ[_0x44312f(0x1ed)][_0x44312f(0x2b5)][_0x44312f(0x245)](this,_0x2af335),this[_0x44312f(0x112)](_0x2af335);},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x112)]=function(_0x3269ac){const _0x1a2519=_0x28fd0f,_0x3a1831=new Rectangle(0x0,0x0,_0x3269ac[_0x1a2519(0x248)],_0x3269ac['height']);this['_commandNameWindow']=new Window_Base(_0x3a1831),this[_0x1a2519(0x121)]['opacity']=0x0,this['addChild'](this[_0x1a2519(0x121)]),this[_0x1a2519(0x3c6)]();},Window_ShopCommand[_0x28fd0f(0x1c0)]['callUpdateHelp']=function(){const _0x14fe1f=_0x28fd0f;Window_HorzCommand[_0x14fe1f(0x1c0)][_0x14fe1f(0x38c)]['call'](this);if(this[_0x14fe1f(0x121)])this[_0x14fe1f(0x3c6)]();},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x3c6)]=function(){const _0x4242e9=_0x28fd0f,_0x16cf56=this[_0x4242e9(0x121)];_0x16cf56[_0x4242e9(0x48b)][_0x4242e9(0x47f)]();const _0x2bb3a4=this[_0x4242e9(0x340)](this['index']());if(_0x2bb3a4===_0x4242e9(0x23e)){const _0x442aa2=this[_0x4242e9(0x429)](this[_0x4242e9(0x3fa)]());let _0x2e0b57=this['commandName'](this['index']());_0x2e0b57=_0x2e0b57[_0x4242e9(0x18a)](/\\I\[(\d+)\]/gi,''),_0x16cf56[_0x4242e9(0x41d)](),this[_0x4242e9(0x31a)](_0x2e0b57,_0x442aa2),this['commandNameWindowDrawText'](_0x2e0b57,_0x442aa2),this[_0x4242e9(0x2ec)](_0x2e0b57,_0x442aa2);}},Window_ShopCommand[_0x28fd0f(0x1c0)]['commandNameWindowDrawBackground']=function(_0x3feb7e,_0x48561d){},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x367)]=function(_0x10e8b9,_0x5b01b8){const _0x4c8e77=_0x28fd0f,_0x5387fd=this['_commandNameWindow'];_0x5387fd[_0x4c8e77(0x473)](_0x10e8b9,0x0,_0x5b01b8['y'],_0x5387fd[_0x4c8e77(0x462)],_0x4c8e77(0x132));},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x2ec)]=function(_0x5671a4,_0x403226){const _0x5a4db3=_0x28fd0f,_0x1f8149=this['_commandNameWindow'],_0x288eb4=$gameSystem[_0x5a4db3(0xa6)](),_0x4b02e0=_0x403226['x']+Math[_0x5a4db3(0x2bb)](_0x403226['width']/0x2)+_0x288eb4;_0x1f8149['x']=_0x1f8149[_0x5a4db3(0x248)]/-0x2+_0x4b02e0,_0x1f8149['y']=Math[_0x5a4db3(0x2bb)](_0x403226[_0x5a4db3(0x25b)]/0x2);},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x435)]=function(){const _0x14610b=_0x28fd0f;return this[_0x14610b(0xb1)]?this['_list']['length']:0x3;},Window_ShopCommand['prototype'][_0x28fd0f(0xe7)]=function(){const _0xfe6e13=_0x28fd0f;return VisuMZ[_0xfe6e13(0x1ed)]['Settings'][_0xfe6e13(0x1a5)][_0xfe6e13(0xcf)];},Window_ShopCommand['prototype'][_0x28fd0f(0x2e9)]=function(){const _0x4aea13=_0x28fd0f;this[_0x4aea13(0xbd)](),this[_0x4aea13(0x2a9)](),this['addCancelCommand']();},Window_ShopCommand[_0x28fd0f(0x1c0)]['refresh']=function(){const _0x28dc1e=_0x28fd0f;Window_HorzCommand[_0x28dc1e(0x1c0)][_0x28dc1e(0x143)][_0x28dc1e(0x245)](this),this[_0x28dc1e(0x337)]();},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0xbd)]=function(){const _0x4c3b16=_0x28fd0f,_0x374142=this[_0x4c3b16(0x1b4)](),_0x240bc9=VisuMZ[_0x4c3b16(0x1ed)][_0x4c3b16(0x14a)][_0x4c3b16(0x1a5)]['CmdIconBuy'],_0x251226=_0x374142===_0x4c3b16(0x4a0)?TextManager[_0x4c3b16(0x11b)]:_0x4c3b16(0x26e)[_0x4c3b16(0xa8)](_0x240bc9,TextManager[_0x4c3b16(0x11b)]),_0x40e40c=this[_0x4c3b16(0x103)]();if(this[_0x4c3b16(0xe7)]()&&!_0x40e40c)return;this[_0x4c3b16(0x2ff)](_0x251226,'buy',_0x40e40c);},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x103)]=function(){const _0x3b960f=_0x28fd0f;return SceneManager[_0x3b960f(0x19d)][_0x3b960f(0x3aa)]===Scene_Shop?SceneManager['_scene'][_0x3b960f(0x47a)]>0x0:!![];},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x2a9)]=function(){const _0x3e6216=_0x28fd0f,_0x5708ac=this[_0x3e6216(0x1b4)](),_0x14acbe=VisuMZ[_0x3e6216(0x1ed)][_0x3e6216(0x14a)][_0x3e6216(0x1a5)]['CmdIconSell'],_0x4b5cc7=_0x5708ac===_0x3e6216(0x4a0)?TextManager[_0x3e6216(0x3d9)]:_0x3e6216(0x26e)['format'](_0x14acbe,TextManager[_0x3e6216(0x3d9)]),_0x5f4d27=this[_0x3e6216(0x280)]();if(this['hideDisabledCommands']()&&!_0x5f4d27)return;this[_0x3e6216(0x2ff)](_0x4b5cc7,_0x3e6216(0x3d9),_0x5f4d27);},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x280)]=function(){const _0x1a9094=_0x28fd0f;return!this[_0x1a9094(0x2f7)];},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x241)]=function(){const _0x1e0c62=_0x28fd0f,_0x1c7c32=this[_0x1e0c62(0x1b4)](),_0x2e0dbb=VisuMZ[_0x1e0c62(0x1ed)][_0x1e0c62(0x14a)]['ShopScene'][_0x1e0c62(0x209)],_0x9065c3=VisuMZ[_0x1e0c62(0x1ed)]['Settings'][_0x1e0c62(0x1a5)][_0x1e0c62(0x329)],_0x31d606=_0x1c7c32===_0x1e0c62(0x4a0)?_0x9065c3:_0x1e0c62(0x26e)[_0x1e0c62(0xa8)](_0x2e0dbb,_0x9065c3);this['addCommand'](_0x31d606,_0x1e0c62(0x44c));},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x417)]=function(){const _0x2fb6ab=_0x28fd0f;return VisuMZ[_0x2fb6ab(0x1ed)][_0x2fb6ab(0x14a)][_0x2fb6ab(0x1a5)][_0x2fb6ab(0x237)];},Window_ShopCommand['prototype']['drawItem']=function(_0x3b8a24){const _0xe65c78=_0x28fd0f,_0x50306a=this[_0xe65c78(0x340)](_0x3b8a24);if(_0x50306a==='iconText')this['drawItemStyleIconText'](_0x3b8a24);else _0x50306a===_0xe65c78(0x23e)?this[_0xe65c78(0xa2)](_0x3b8a24):Window_HorzCommand['prototype']['drawItem']['call'](this,_0x3b8a24);},Window_ShopCommand['prototype']['commandStyle']=function(){const _0x2cb30d=_0x28fd0f;return VisuMZ[_0x2cb30d(0x1ed)]['Settings']['ShopScene'][_0x2cb30d(0x1ce)];},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x340)]=function(_0x290ff9){const _0x9feb98=_0x28fd0f;if(_0x290ff9<0x0)return _0x9feb98(0x4a0);const _0x45bf79=this[_0x9feb98(0x1b4)]();if(_0x45bf79!==_0x9feb98(0x413))return _0x45bf79;else{if(this[_0x9feb98(0x1f4)]()>0x0){const _0x244348=this[_0x9feb98(0x19f)](_0x290ff9);if(_0x244348[_0x9feb98(0x275)](/\\I\[(\d+)\]/i)){const _0x1060cb=this[_0x9feb98(0x429)](_0x290ff9),_0x411163=this[_0x9feb98(0x2d6)](_0x244348)[_0x9feb98(0x248)];return _0x411163<=_0x1060cb['width']?_0x9feb98(0x39a):'icon';}}}return'text';},Window_ShopCommand[_0x28fd0f(0x1c0)][_0x28fd0f(0x1ff)]=function(_0x7f8e80){const _0x1bfde7=_0x28fd0f,_0x51abe6=this[_0x1bfde7(0x429)](_0x7f8e80),_0x2bc808=this[_0x1bfde7(0x19f)](_0x7f8e80),_0x32d74b=this[_0x1bfde7(0x2d6)](_0x2bc808)[_0x1bfde7(0x248)];this[_0x1bfde7(0x204)](this[_0x1bfde7(0x164)](_0x7f8e80));const _0x5c1764=this[_0x1bfde7(0x417)]();if(_0x5c1764===_0x1bfde7(0x299))this[_0x1bfde7(0x31f)](_0x2bc808,_0x51abe6['x']+_0x51abe6[_0x1bfde7(0x248)]-_0x32d74b,_0x51abe6['y'],_0x32d74b);else{if(_0x5c1764===_0x1bfde7(0x132)){const _0x1be4a3=_0x51abe6['x']+Math[_0x1bfde7(0x2bb)]((_0x51abe6[_0x1bfde7(0x248)]-_0x32d74b)/0x2);this[_0x1bfde7(0x31f)](_0x2bc808,_0x1be4a3,_0x51abe6['y'],_0x32d74b);}else this[_0x1bfde7(0x31f)](_0x2bc808,_0x51abe6['x'],_0x51abe6['y'],_0x32d74b);}},Window_ShopCommand['prototype'][_0x28fd0f(0xa2)]=function(_0x53d5bb){const _0x154114=_0x28fd0f;this[_0x154114(0x19f)](_0x53d5bb)[_0x154114(0x275)](/\\I\[(\d+)\]/i);const _0x4c07b3=Number(RegExp['$1'])||0x0,_0x3bac19=this[_0x154114(0x429)](_0x53d5bb),_0x3601ff=_0x3bac19['x']+Math[_0x154114(0x2bb)]((_0x3bac19['width']-ImageManager['iconWidth'])/0x2),_0x4a20cd=_0x3bac19['y']+(_0x3bac19[_0x154114(0x25b)]-ImageManager[_0x154114(0x20a)])/0x2;this['drawIcon'](_0x4c07b3,_0x3601ff,_0x4a20cd);},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2fb)]=Window_ShopBuy[_0x28fd0f(0x1c0)][_0x28fd0f(0x143)],Window_ShopBuy[_0x28fd0f(0x1c0)][_0x28fd0f(0x143)]=function(){const _0x4a853b=_0x28fd0f;this[_0x4a853b(0x357)](),VisuMZ[_0x4a853b(0x1ed)][_0x4a853b(0x2fb)][_0x4a853b(0x245)](this);},Window_ShopBuy['prototype'][_0x28fd0f(0x357)]=function(){const _0x26adba=_0x28fd0f;SceneManager[_0x26adba(0x19d)][_0x26adba(0x3aa)]===Scene_Shop&&(this[_0x26adba(0x448)]=SceneManager[_0x26adba(0x19d)][_0x26adba(0x3a6)]());},VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x2ba)]=Window_ShopBuy['prototype']['price'],Window_ShopBuy[_0x28fd0f(0x1c0)][_0x28fd0f(0xa4)]=function(_0x567354){const _0x48c95a=_0x28fd0f;if(!_0x567354)return 0x0;let _0x236946=VisuMZ[_0x48c95a(0x1ed)][_0x48c95a(0x2ba)][_0x48c95a(0x245)](this,_0x567354);return Math['max'](0x0,this[_0x48c95a(0x1c2)](_0x567354,_0x236946));},Window_ShopBuy['prototype']['modifiedBuyPriceItemsEquipsCore']=function(_0x168846,_0x5b6acd){const _0x4a05f7=_0x28fd0f,_0xf4f470=_0x168846[_0x4a05f7(0x409)]||'';if(_0xf4f470[_0x4a05f7(0x275)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x35269b=String(RegExp['$1']);window[_0x4a05f7(0xa4)]=_0x5b6acd,window[_0x4a05f7(0x373)]=_0x168846;try{eval(_0x35269b);}catch(_0x3c0b0f){if($gameTemp[_0x4a05f7(0x495)]())console[_0x4a05f7(0x254)](_0x3c0b0f);}_0x5b6acd=window[_0x4a05f7(0xa4)],window[_0x4a05f7(0xa4)]=undefined,window[_0x4a05f7(0x373)]=undefined;}_0x5b6acd=VisuMZ[_0x4a05f7(0x1ed)][_0x4a05f7(0x14a)][_0x4a05f7(0x1a5)][_0x4a05f7(0x38f)][_0x4a05f7(0x245)](this,_0x168846,_0x5b6acd);if(isNaN(_0x5b6acd))_0x5b6acd=0x0;return Math[_0x4a05f7(0x2bb)](_0x5b6acd);},VisuMZ[_0x28fd0f(0x1ed)]['Window_ShopBuy_goodsToItem']=Window_ShopBuy['prototype'][_0x28fd0f(0x3d7)],Window_ShopBuy[_0x28fd0f(0x1c0)][_0x28fd0f(0x3d7)]=function(_0x21bfe7){const _0x52d088=_0x28fd0f,_0x127298=VisuMZ[_0x52d088(0x1ed)][_0x52d088(0x24d)][_0x52d088(0x245)](this,_0x21bfe7);return _0x127298&&!this[_0x52d088(0x2a7)](_0x127298)?null:_0x127298;},VisuMZ[_0x28fd0f(0x1ed)]['ShopListingRegExp']={'ShowAllSwitches':/<SHOW SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'ShowAnySwitches':/<SHOW SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'HideAllSwitches':/<HIDE SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'HideAnySwitches':/<HIDE SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOn':/<BUY TURN ON SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOff':/<BUY TURN OFF SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOn':/<SELL TURN ON SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOff':/<SELL TURN OFF SWITCH(?:|ES):[ ](.*)>/i},Window_ShopBuy[_0x28fd0f(0x1c0)][_0x28fd0f(0x2a7)]=function(_0x29520d){const _0x16721b=_0x28fd0f;if(!_0x29520d)return![];const _0x153732=VisuMZ[_0x16721b(0x1ed)][_0x16721b(0x34b)],_0x1a4255=_0x29520d?_0x29520d[_0x16721b(0x409)]||'':'';if(_0x1a4255[_0x16721b(0x275)](_0x153732['ShowAllSwitches'])){const _0x40c717=String(RegExp['$1'])[_0x16721b(0x1e2)](',')[_0x16721b(0x455)](_0x461122=>Number(_0x461122));if(_0x40c717[_0x16721b(0x450)](_0x34f4f3=>!$gameSwitches[_0x16721b(0x11f)](_0x34f4f3)))return![];}if(_0x1a4255[_0x16721b(0x275)](_0x153732[_0x16721b(0x193)])){const _0xb2646b=String(RegExp['$1'])[_0x16721b(0x1e2)](',')['map'](_0x130e70=>Number(_0x130e70));if(_0xb2646b[_0x16721b(0x3b0)](_0x134365=>!$gameSwitches[_0x16721b(0x11f)](_0x134365)))return![];}if(_0x1a4255['match'](_0x153732[_0x16721b(0x292)])){const _0x178aa7=String(RegExp['$1'])[_0x16721b(0x1e2)](',')['map'](_0xf390f1=>Number(_0xf390f1));if(_0x178aa7[_0x16721b(0x3b0)](_0xb6b280=>$gameSwitches['value'](_0xb6b280)))return![];}if(_0x1a4255['match'](_0x153732[_0x16721b(0x3f2)])){const _0x4b31f6=String(RegExp['$1'])['split'](',')[_0x16721b(0x455)](_0x1aeb7f=>Number(_0x1aeb7f));if(_0x4b31f6[_0x16721b(0x450)](_0x767703=>$gameSwitches[_0x16721b(0x11f)](_0x767703)))return![];}return!![];},Window_ShopBuy[_0x28fd0f(0x1c0)]['drawItem']=function(_0x3ec950){const _0x407263=_0x28fd0f;this['resetFontSettings']();const _0x5e70b0=this[_0x407263(0x327)](_0x3ec950),_0x4723d9=this[_0x407263(0x429)](_0x3ec950),_0xb80487=_0x4723d9[_0x407263(0x248)];this[_0x407263(0x204)](this[_0x407263(0xf0)](_0x5e70b0)),this[_0x407263(0x2cf)](_0x5e70b0,_0x4723d9['x'],_0x4723d9['y'],_0xb80487),this[_0x407263(0x1e9)](_0x5e70b0,_0x4723d9),this['changePaintOpacity'](!![]);},Window_ShopBuy['prototype']['drawItemCost']=function(_0x4ba0fd,_0x507b0d){const _0x386dc6=_0x28fd0f,_0x2c10b0=this[_0x386dc6(0xa4)](_0x4ba0fd);this['drawCurrencyValue'](_0x2c10b0,TextManager['currencyUnit'],_0x507b0d['x'],_0x507b0d['y'],_0x507b0d[_0x386dc6(0x248)]);},Window_ShopSell[_0x28fd0f(0x1c0)]['maxCols']=function(){const _0x5e4191=_0x28fd0f;return SceneManager[_0x5e4191(0x19d)][_0x5e4191(0x4a5)]()?0x1:0x2;},VisuMZ['ItemsEquipsCore'][_0x28fd0f(0x472)]=Window_ShopSell[_0x28fd0f(0x1c0)][_0x28fd0f(0xf0)],Window_ShopSell[_0x28fd0f(0x1c0)][_0x28fd0f(0xf0)]=function(_0x1e16b1){const _0x1331d4=_0x28fd0f;if(!_0x1e16b1)return![];const _0xf240c3=_0x1e16b1[_0x1331d4(0x409)];if(_0xf240c3[_0x1331d4(0x275)](/<CANNOT SELL>/i))return![];if(_0xf240c3[_0x1331d4(0x275)](/<CAN SELL>/i))return!![];if(_0xf240c3['match'](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x43601e=JSON['parse']('['+RegExp['$1'][_0x1331d4(0x275)](/\d+/g)+']');for(const _0x5034b3 of _0x43601e){if(!$gameSwitches[_0x1331d4(0x11f)](_0x5034b3))return![];}}if(_0xf240c3[_0x1331d4(0x275)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2892fb=JSON[_0x1331d4(0x449)]('['+RegExp['$1'][_0x1331d4(0x275)](/\d+/g)+']');for(const _0x564c8f of _0x2892fb){if(!$gameSwitches[_0x1331d4(0x11f)](_0x564c8f))return![];}}if(_0xf240c3['match'](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5d30aa=JSON['parse']('['+RegExp['$1'][_0x1331d4(0x275)](/\d+/g)+']');for(const _0x460f7a of _0x5d30aa){if($gameSwitches[_0x1331d4(0x11f)](_0x460f7a))return![];}}return VisuMZ['ItemsEquipsCore']['Window_ShopSell_isEnabled'][_0x1331d4(0x245)](this,_0x1e16b1);},Window_ShopStatus[_0x28fd0f(0xda)]=VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x14a)][_0x28fd0f(0x242)]['EquipDelayMS']??0xf0,VisuMZ[_0x28fd0f(0x1ed)][_0x28fd0f(0x1d9)]=Window_ShopStatus[_0x28fd0f(0x1c0)]['setItem'],Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x466)]=function(_0x2ca041){const _0x11f35a=_0x28fd0f;_0x2ca041=DataManager[_0x11f35a(0xeb)](_0x2ca041),DataManager[_0x11f35a(0x320)](_0x2ca041)||DataManager[_0x11f35a(0x311)](_0x2ca041)?this[_0x11f35a(0x10b)](_0x2ca041):VisuMZ['ItemsEquipsCore'][_0x11f35a(0x1d9)][_0x11f35a(0x245)](this,_0x2ca041);},Window_ShopStatus[_0x28fd0f(0x1c0)]['setItemDelay']=function(_0x354dc8){const _0x3818f2=_0x28fd0f;this[_0x3818f2(0x394)]=_0x354dc8;const _0x2edf63=Window_ShopStatus[_0x3818f2(0xda)];setTimeout(this[_0x3818f2(0x460)][_0x3818f2(0x3c0)](this,_0x354dc8),_0x2edf63);},Window_ShopStatus[_0x28fd0f(0x1c0)]['refreshDelay']=function(_0x1e118b){const _0x545a41=_0x28fd0f;this[_0x545a41(0x394)]===_0x1e118b&&this[_0x545a41(0x143)]();},Window_ShopStatus['prototype'][_0x28fd0f(0x49b)]=function(){return![];},Window_ShopStatus[_0x28fd0f(0x1c0)]['loadFaceImages']=function(){const _0x5c95c1=_0x28fd0f;Window_StatusBase['prototype'][_0x5c95c1(0xfd)][_0x5c95c1(0x245)](this);for(const _0x23cd15 of $gameParty[_0x5c95c1(0xe8)]()){ImageManager[_0x5c95c1(0x35e)](_0x23cd15['characterName']());}},Window_ShopStatus[_0x28fd0f(0x1c0)]['translucentOpacity']=function(){const _0x57d21b=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x57d21b(0x14a)][_0x57d21b(0x242)][_0x57d21b(0x2b2)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x143)]=function(){const _0x363abd=_0x28fd0f;this[_0x363abd(0x48b)][_0x363abd(0x47f)](),this[_0x363abd(0x471)][_0x363abd(0x47f)](),this[_0x363abd(0x394)]&&(this['resetFontSettings'](),this[_0x363abd(0x204)](!![]),this['prepareItemCustomData'](),this[_0x363abd(0x45b)]()?this[_0x363abd(0x284)]():this[_0x363abd(0x304)](),this[_0x363abd(0x314)]());},Window_ShopStatus[_0x28fd0f(0x1c0)]['drawPossession']=function(_0x1f066c,_0x1d386d){const _0xecac00=_0x28fd0f;if(!this[_0xecac00(0x45b)]()&&!DataManager[_0xecac00(0xec)](this[_0xecac00(0x394)]))return;const _0x1eebca=this[_0xecac00(0x462)]-this['itemPadding']()-_0x1f066c,_0x1ea271=this[_0xecac00(0xc7)](_0xecac00(0x1ee));this[_0xecac00(0x243)](ColorManager[_0xecac00(0x3cb)]()),this['drawText'](TextManager['possession'],_0x1f066c+this['itemPadding'](),_0x1d386d,_0x1eebca-_0x1ea271),this[_0xecac00(0x140)](),this[_0xecac00(0xd3)](this[_0xecac00(0x394)],_0x1f066c,_0x1d386d,_0x1eebca);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x23a)]=function(_0x471538,_0x58c63f,_0x3bf0db,_0x56b59c,_0x28d8fc){const _0x48dc1c=_0x28fd0f;if(VisuMZ[_0x48dc1c(0x1ed)][_0x48dc1c(0x14a)][_0x48dc1c(0x242)]['DrawBackRect']===![])return;_0x28d8fc=Math[_0x48dc1c(0x27f)](_0x28d8fc||0x1,0x1);while(_0x28d8fc--){_0x56b59c=_0x56b59c||this[_0x48dc1c(0xa7)](),this['contentsBack'][_0x48dc1c(0x309)]=0xa0;const _0x367920=ColorManager['getItemsEquipsCoreBackColor1']();this[_0x48dc1c(0x471)][_0x48dc1c(0x3e2)](_0x471538+0x1,_0x58c63f+0x1,_0x3bf0db-0x2,_0x56b59c-0x2,_0x367920),this[_0x48dc1c(0x471)][_0x48dc1c(0x309)]=0xff;}},ColorManager[_0x28fd0f(0x403)]=function(){const _0x999db1=_0x28fd0f,_0x3451dc=VisuMZ['ItemsEquipsCore'][_0x999db1(0x14a)]['StatusWindow'];let _0x48a88c=_0x3451dc['BackRectColor']!==undefined?_0x3451dc['BackRectColor']:0x13;return ColorManager['getColor'](_0x48a88c);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x284)]=function(){const _0x3072bb=_0x28fd0f;this['_tempActor']=null;if(VisuMZ[_0x3072bb(0x1ed)][_0x3072bb(0x14a)]['StatusWindow']['DrawEquipData']){VisuMZ[_0x3072bb(0x1ed)][_0x3072bb(0x14a)]['StatusWindow']['DrawEquipData'][_0x3072bb(0x245)](this);return;}const _0x6dead9=this[_0x3072bb(0xa7)](),_0x45b630=this['gaugeLineHeight']()+0x8;let _0x1be44d=0x0,_0xf9b234=0x0,_0x3a6374=this[_0x3072bb(0x462)],_0x32398b=this[_0x3072bb(0x36e)],_0x3cc75c=Math[_0x3072bb(0x2bb)](_0x3a6374/0x2),_0xda1a39=_0x1be44d+_0x3a6374-_0x3cc75c;this[_0x3072bb(0x2cf)](this[_0x3072bb(0x394)],_0x1be44d+this[_0x3072bb(0x301)](),_0xf9b234,_0x3a6374-this[_0x3072bb(0x301)]()*0x2),this[_0x3072bb(0x23a)](_0x1be44d,_0xf9b234,_0x3a6374),_0xf9b234+=_0x6dead9;if(this[_0x3072bb(0x1a6)](_0x1be44d,_0xf9b234,_0x3cc75c))_0xf9b234+=0x0;if(this[_0x3072bb(0xef)](_0xda1a39,_0xf9b234,_0x3cc75c))_0xf9b234+=_0x6dead9;const _0x436c03=this[_0x3072bb(0x475)](),_0x3fcb35=_0xf9b234;_0xf9b234=_0x32398b-_0x436c03[_0x3072bb(0x176)]*_0x45b630-0x4;let _0x514be8=_0x1be44d,_0x2fa99c=0x0,_0x17986b=_0xf9b234;for(const _0x32553f of _0x436c03){_0x2fa99c=Math['max'](this[_0x3072bb(0x3f3)](_0x32553f,_0x1be44d+0x4,_0xf9b234+0x4,_0x3a6374),_0x2fa99c),_0xf9b234+=_0x45b630;}const _0x2b07c1=$gameParty[_0x3072bb(0x45e)](),_0x153b48=Math[_0x3072bb(0x2bb)]((_0x3a6374-_0x2fa99c)/_0x2b07c1);_0x2fa99c=_0x3a6374-_0x153b48*_0x2b07c1;for(const _0x3b4805 of $gameParty['battleMembers']()){const _0x54f26c=$gameParty[_0x3072bb(0x17b)]()[_0x3072bb(0x25c)](_0x3b4805),_0x430efb=_0x514be8+_0x2fa99c+_0x54f26c*_0x153b48;this['changePaintOpacity'](_0x3b4805[_0x3072bb(0x207)](this[_0x3072bb(0x394)])),this[_0x3072bb(0x16b)](_0x3b4805,_0x430efb+_0x153b48/0x2,_0x17986b);let _0x4ce230=_0x17986b;for(const _0x36a6b7 of _0x436c03){const _0x427703=_0x4ce230-(_0x6dead9-_0x45b630)/0x2;this[_0x3072bb(0x459)](_0x3b4805,_0x36a6b7,_0x430efb,_0x427703,_0x153b48),_0x4ce230+=_0x45b630;}}this[_0x3072bb(0x23a)](_0x514be8,_0x3fcb35,_0x2fa99c,_0x17986b-_0x3fcb35);for(let _0x47bd9f=0x0;_0x47bd9f<_0x2b07c1;_0x47bd9f++){const _0x49d8a2=_0x514be8+_0x2fa99c+_0x47bd9f*_0x153b48;this[_0x3072bb(0x23a)](_0x49d8a2,_0x3fcb35,_0x153b48,_0x17986b-_0x3fcb35);}for(const _0x4add8f of _0x436c03){this[_0x3072bb(0x23a)](_0x514be8,_0x17986b,_0x2fa99c,_0x45b630);for(let _0xa11596=0x0;_0xa11596<_0x2b07c1;_0xa11596++){const _0x5a11c9=_0x514be8+_0x2fa99c+_0xa11596*_0x153b48;this[_0x3072bb(0x23a)](_0x5a11c9,_0x17986b,_0x153b48,_0x45b630);}_0x17986b+=_0x45b630;}},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1a6)]=function(_0x16b406,_0x48c13f,_0x15597f){const _0x482926=_0x28fd0f;if(!this[_0x482926(0x45b)]())return![];const _0x209524=$dataSystem['equipTypes'][this[_0x482926(0x394)]['etypeId']];return this['drawItemKeyData'](_0x209524,_0x16b406,_0x48c13f,_0x15597f,!![]),this[_0x482926(0x23a)](_0x16b406,_0x48c13f,_0x15597f),this[_0x482926(0x41d)](),!![];},Window_ShopStatus['prototype']['getItemQuantityText']=function(){const _0x2e701e=_0x28fd0f,_0x2701b7=VisuMZ[_0x2e701e(0x1ed)][_0x2e701e(0x14a)]['ItemScene'][_0x2e701e(0x3db)];return _0x2701b7[_0x2e701e(0xa8)]($gameParty[_0x2e701e(0x365)](this['_item']));},Window_ShopStatus['prototype'][_0x28fd0f(0x475)]=function(){const _0x23b3f2=_0x28fd0f;let _0x4a90f9=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];return Imported[_0x23b3f2(0x3ea)]&&(_0x4a90f9=VisuMZ['CoreEngine']['Settings'][_0x23b3f2(0x227)][_0x23b3f2(0x375)]),_0x4a90f9=_0x4a90f9[_0x23b3f2(0x455)](_0xa92496=>typeof _0xa92496==='number'?_0xa92496:_0xa92496['toUpperCase']()[_0x23b3f2(0x35f)]()),_0x4a90f9;},Window_ShopStatus[_0x28fd0f(0x1c0)]['smallParamFontSize']=function(){const _0x3eab1=_0x28fd0f;return VisuMZ[_0x3eab1(0x1ed)][_0x3eab1(0x14a)][_0x3eab1(0x242)][_0x3eab1(0x3dc)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x3f3)]=function(_0x318830,_0x466b8d,_0x2a4cb6,_0x2d9b4a){const _0x3dc39b=_0x28fd0f;this['resetFontSettings'](),this[_0x3dc39b(0x48b)]['fontSize']=this[_0x3dc39b(0x3bd)]();let _0x4f9d0a=this[_0x3dc39b(0xc7)](TextManager[_0x3dc39b(0x38e)](_0x318830))+0x4+_0x466b8d;return Imported['VisuMZ_0_CoreEngine']?(this[_0x3dc39b(0x2d7)](_0x466b8d,_0x2a4cb6,_0x2d9b4a,_0x318830,!![]),VisuMZ[_0x3dc39b(0x2a8)][_0x3dc39b(0x14a)][_0x3dc39b(0x227)][_0x3dc39b(0x41c)]&&(_0x4f9d0a+=ImageManager[_0x3dc39b(0x2c9)]+0x4)):(this[_0x3dc39b(0x243)](ColorManager[_0x3dc39b(0x3cb)]()),this[_0x3dc39b(0x473)](TextManager[_0x3dc39b(0x38e)](_0x318830),_0x466b8d,_0x2a4cb6,_0x2d9b4a)),this[_0x3dc39b(0x41d)](),_0x4f9d0a;},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x459)]=function(_0x20adc3,_0x34282a,_0x37e83d,_0x42d697,_0x17dc46){const _0x1f5147=_0x28fd0f;_0x37e83d+=this[_0x1f5147(0x301)](),_0x17dc46-=this[_0x1f5147(0x301)]()*0x2;const _0x451bc0=VisuMZ[_0x1f5147(0x1ed)][_0x1f5147(0x14a)]['StatusWindow'];this['contents'][_0x1f5147(0x2cb)]=_0x451bc0[_0x1f5147(0x3dc)],this['changePaintOpacity'](_0x20adc3[_0x1f5147(0x207)](this['_item']));if(_0x20adc3[_0x1f5147(0x493)](this[_0x1f5147(0x394)])&&!_0x20adc3[_0x1f5147(0x18c)](this['_item'])){const _0x24c1ba=_0x451bc0['AlreadyEquipMarker'];this[_0x1f5147(0x473)](_0x24c1ba,_0x37e83d,_0x42d697,_0x17dc46,_0x1f5147(0x132));}else{if(_0x20adc3[_0x1f5147(0x207)](this[_0x1f5147(0x394)])){const _0x473829=this[_0x1f5147(0x2c2)](_0x20adc3);let _0x3b16ce=0x0,_0x3795cf=0x0,_0x3887c8=0x0;Imported[_0x1f5147(0x3ea)]?(_0x3b16ce=_0x473829[_0x1f5147(0x126)](_0x34282a),_0x3795cf=_0x3b16ce-_0x20adc3['paramValueByName'](_0x34282a),this[_0x1f5147(0x243)](ColorManager[_0x1f5147(0x316)](_0x3795cf)),_0x3887c8=(_0x3795cf>=0x0?'+':'')+VisuMZ[_0x1f5147(0x1fa)](_0x3795cf,0x0,_0x34282a)):(_0x3b16ce=_0x473829[_0x1f5147(0x38e)](_0x34282a),_0x3795cf=_0x3b16ce-_0x20adc3[_0x1f5147(0x38e)](_0x34282a),this[_0x1f5147(0x243)](ColorManager[_0x1f5147(0x316)](_0x3795cf)),_0x3887c8=(_0x3795cf>=0x0?'+':'')+_0x3795cf),_0x3887c8==='+0'&&(_0x3887c8=_0x451bc0[_0x1f5147(0x286)]),this[_0x1f5147(0x473)](_0x3887c8,_0x37e83d,_0x42d697,_0x17dc46,_0x1f5147(0x132));}else{const _0x5994ce=_0x451bc0[_0x1f5147(0x35c)];this['drawText'](_0x5994ce,_0x37e83d,_0x42d697,_0x17dc46,_0x1f5147(0x132));}}this[_0x1f5147(0x41d)](),this['changePaintOpacity'](!![]);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x2c2)]=function(_0x46526e){const _0x548ab1=_0x28fd0f;if(this[_0x548ab1(0x47b)](_0x46526e)){const _0x4c0d83=JsonEx[_0x548ab1(0x2ad)](_0x46526e);_0x4c0d83[_0x548ab1(0x29e)]=!![];const _0x12d0a1=_0x4c0d83[_0x548ab1(0x32b)](this[_0x548ab1(0x394)]);_0x12d0a1>=0x0&&_0x4c0d83['forceChangeEquip'](_0x12d0a1,this['_item']),this[_0x548ab1(0x29e)]=_0x4c0d83;}return this[_0x548ab1(0x29e)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x47b)]=function(_0x277218){const _0x401fff=_0x28fd0f;if(!this[_0x401fff(0x29e)])return!![];return this[_0x401fff(0x29e)]['actorId']()!==_0x277218[_0x401fff(0x3ba)]();},Game_Actor['prototype'][_0x28fd0f(0x18c)]=function(_0x57bae0){const _0x5b9564=_0x28fd0f;if(!_0x57bae0)return![];const _0x215d97=_0x57bae0[_0x5b9564(0x10f)],_0x3c323d=this[_0x5b9564(0x153)]();for(let _0x8e8946=0x0;_0x8e8946<_0x3c323d[_0x5b9564(0x176)];_0x8e8946++){const _0x33e6b8=_0x3c323d[_0x8e8946];if(_0x33e6b8!==_0x215d97)continue;if(!this[_0x5b9564(0x43b)]()[_0x8e8946])return!![];}return![];},Game_Actor[_0x28fd0f(0x1c0)][_0x28fd0f(0x32b)]=function(_0x2063b7){const _0x839bf9=_0x28fd0f;if(!_0x2063b7)return-0x1;const _0x1a8a80=_0x2063b7['etypeId'],_0x96afdb=this[_0x839bf9(0x153)]();let _0x4fe867=-0x1;for(let _0x9dc7f8=0x0;_0x9dc7f8<_0x96afdb['length'];_0x9dc7f8++){const _0x103d06=_0x96afdb[_0x9dc7f8];if(_0x103d06!==_0x1a8a80)continue;if(!this[_0x839bf9(0x43b)]()[_0x9dc7f8])return _0x9dc7f8;if(_0x4fe867<0x0)_0x4fe867=_0x9dc7f8;}return _0x4fe867;},Window_ShopStatus['prototype']['drawItemData']=function(){const _0x389612=_0x28fd0f;VisuMZ['ItemsEquipsCore']['Settings'][_0x389612(0x242)][_0x389612(0x1db)][_0x389612(0x245)](this);},Window_ShopStatus['prototype'][_0x28fd0f(0x2cf)]=function(_0x1c3342,_0x2585ff,_0x39be7d,_0x47a244){const _0xf87c7a=_0x28fd0f,_0x30b160=DataManager['isSkill'](_0x1c3342,_0x2585ff,_0x39be7d,_0x47a244)&&Imported[_0xf87c7a(0xba)],_0x59cf40=_0x1c3342?_0x1c3342['name']:'';if(_0x30b160)Window_SkillList[_0xf87c7a(0x1c0)][_0xf87c7a(0x411)][_0xf87c7a(0x245)](this,_0x1c3342);Window_Base[_0xf87c7a(0x1c0)][_0xf87c7a(0x2cf)][_0xf87c7a(0x245)](this,_0x1c3342,_0x2585ff,_0x39be7d,_0x47a244);if(_0x30b160)_0x1c3342['name']=_0x59cf40;},Window_ShopStatus[_0x28fd0f(0x1c0)]['prepareItemCustomData']=function(){const _0x280f6b=_0x28fd0f;this[_0x280f6b(0x1b5)]={};if(!this[_0x280f6b(0x394)])return;const _0x4240c0=this['_item'][_0x280f6b(0x409)];if(_0x4240c0[_0x280f6b(0x275)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x3052df=String(RegExp['$1'])[_0x280f6b(0x1e2)](/[\r\n]+/);for(const _0x4cc1e5 of _0x3052df){if(_0x4cc1e5[_0x280f6b(0x275)](/(.*):[ ](.*)/i)){const _0x433edf=String(RegExp['$1'])['toUpperCase']()['trim'](),_0x22642b=String(RegExp['$2'])[_0x280f6b(0x35f)]();this[_0x280f6b(0x1b5)][_0x433edf]=_0x22642b;}}}},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x116)]=function(){const _0x373a92=_0x28fd0f;return Math[_0x373a92(0x27f)](0x1,$gameSystem[_0x373a92(0xc2)]()-0x4);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x41d)]=function(){const _0x250907=_0x28fd0f;Window_StatusBase[_0x250907(0x1c0)]['resetFontSettings']['call'](this),this[_0x250907(0x48b)][_0x250907(0x2cb)]=this[_0x250907(0x2ca)]||this['contents']['fontSize'],this[_0x250907(0x48b)]['textColor']=this['_resetFontColor']||this[_0x250907(0x48b)][_0x250907(0x328)];},Window_ShopStatus[_0x28fd0f(0x1c0)]['fontSizeRatio']=function(){return this['contents']['fontSize']/$gameSystem['mainFontSize']();},Window_ShopStatus[_0x28fd0f(0x1c0)]['drawIcon']=function(_0x5224de,_0x433698,_0x567654){const _0x2435a2=_0x28fd0f,_0x26ff65=ImageManager[_0x2435a2(0x389)](_0x2435a2(0x3ce)),_0x4a1ef0=ImageManager[_0x2435a2(0x2c9)],_0x1817fe=ImageManager[_0x2435a2(0x20a)],_0x3e213a=_0x5224de%0x10*_0x4a1ef0,_0x57f0b4=Math[_0x2435a2(0x2bb)](_0x5224de/0x10)*_0x1817fe,_0xec498e=Math['ceil'](_0x4a1ef0*this[_0x2435a2(0x4ac)]()),_0x56a78f=Math['ceil'](_0x1817fe*this[_0x2435a2(0x4ac)]());this[_0x2435a2(0x48b)][_0x2435a2(0x168)](_0x26ff65,_0x3e213a,_0x57f0b4,_0x4a1ef0,_0x1817fe,_0x433698,_0x567654,_0xec498e,_0x56a78f);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0xe9)]=function(_0x53866d,_0x269058){const _0x1b1356=_0x28fd0f;_0x269058['drawing']&&this[_0x1b1356(0x30a)](_0x53866d,_0x269058['x'],_0x269058['y']+0x2);_0x269058['x']+=Math[_0x1b1356(0x32c)](ImageManager[_0x1b1356(0x2c9)]*this['fontSizeRatio']());if(this[_0x1b1356(0x4ac)]()===0x1)_0x269058['x']+=0x4;},Window_ShopStatus['prototype'][_0x28fd0f(0x1bf)]=function(_0x3e3038,_0x4a69ff,_0x305e8f,_0x421858,_0x3bde69,_0x3d6d38){const _0x48c60a=_0x28fd0f;_0x3e3038=_0x3e3038||'',_0x3d6d38=_0x3d6d38||_0x48c60a(0x4aa),this[_0x48c60a(0x2ca)]=this[_0x48c60a(0x116)](),this[_0x48c60a(0x105)]=_0x3bde69?ColorManager['systemColor']():this[_0x48c60a(0x48b)][_0x48c60a(0x328)],_0x4a69ff+=this[_0x48c60a(0x301)](),_0x421858-=this[_0x48c60a(0x301)]()*0x2;const _0x33f8d0=this[_0x48c60a(0x2d6)](_0x3e3038);if(_0x3d6d38===_0x48c60a(0x132))_0x4a69ff=_0x4a69ff+Math[_0x48c60a(0x2bb)]((_0x421858-_0x33f8d0[_0x48c60a(0x248)])/0x2);else _0x3d6d38===_0x48c60a(0x299)&&(_0x4a69ff=_0x4a69ff+_0x421858-_0x33f8d0[_0x48c60a(0x248)]);_0x305e8f+=(this['lineHeight']()-_0x33f8d0[_0x48c60a(0x25b)])/0x2,this['drawTextEx'](_0x3e3038,_0x4a69ff,_0x305e8f,_0x421858),this[_0x48c60a(0x2ca)]=undefined,this[_0x48c60a(0x105)]=undefined,this[_0x48c60a(0x41d)]();},Window_ShopStatus['prototype'][_0x28fd0f(0x1a2)]=function(_0x24397d,_0x7c389d,_0x3d4e27){const _0x34fa51=_0x28fd0f;if(!DataManager[_0x34fa51(0xec)](this[_0x34fa51(0x394)]))return![];const _0x2a7f0e=this[_0x34fa51(0x3f1)]();this[_0x34fa51(0x1bf)](_0x2a7f0e,_0x24397d,_0x7c389d,_0x3d4e27,!![]);const _0x544d4a=this['getItemConsumableText']();return this[_0x34fa51(0x1bf)](_0x544d4a,_0x24397d,_0x7c389d,_0x3d4e27,![],_0x34fa51(0x299)),this[_0x34fa51(0x23a)](_0x24397d,_0x7c389d,_0x3d4e27),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)]['getItemConsumableLabel']=function(){const _0x13c302=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x13c302(0x14a)][_0x13c302(0x242)][_0x13c302(0x2bf)];},Window_ShopStatus[_0x28fd0f(0x1c0)]['getItemConsumableText']=function(){const _0x5d768b=_0x28fd0f,_0x51462f='CONSUMABLE';if(this['_customItemInfo'][_0x51462f])return this[_0x5d768b(0x1b5)][_0x51462f];return this['canConsumeItem']()?VisuMZ[_0x5d768b(0x1ed)]['Settings'][_0x5d768b(0x242)][_0x5d768b(0x277)]:VisuMZ['ItemsEquipsCore'][_0x5d768b(0x14a)][_0x5d768b(0x242)]['NotConsumable'];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x46b)]=function(){const _0x3de214=_0x28fd0f;return VisuMZ[_0x3de214(0x2a8)]&&VisuMZ[_0x3de214(0x2a8)][_0x3de214(0x14a)][_0x3de214(0x1ec)][_0x3de214(0x40e)]&&DataManager[_0x3de214(0x2fd)](this[_0x3de214(0x394)])?![]:this[_0x3de214(0x394)][_0x3de214(0x17d)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0xef)]=function(_0x724110,_0x5f2bbf,_0xad44b8){const _0x1c3881=_0x28fd0f;if(!this[_0x1c3881(0x45b)]()&&!DataManager['isItem'](this[_0x1c3881(0x394)]))return![];if(DataManager[_0x1c3881(0x2fd)](this[_0x1c3881(0x394)])&&!$dataSystem[_0x1c3881(0x362)]){const _0x1d2003=TextManager[_0x1c3881(0x122)];this['drawItemKeyData'](_0x1d2003,_0x724110,_0x5f2bbf,_0xad44b8,!![],_0x1c3881(0x132));}else{const _0x2f4a5c=TextManager[_0x1c3881(0x101)];this[_0x1c3881(0x1bf)](_0x2f4a5c,_0x724110,_0x5f2bbf,_0xad44b8,!![]);const _0x2c0d85=this['getItemQuantityText']();this[_0x1c3881(0x1bf)](_0x2c0d85,_0x724110,_0x5f2bbf,_0xad44b8,![],'right');}return this[_0x1c3881(0x23a)](_0x724110,_0x5f2bbf,_0xad44b8),this[_0x1c3881(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x104)]=function(){const _0xdbb80f=_0x28fd0f,_0xe51caa='QUANTITY';if(this[_0xdbb80f(0x1b5)][_0xe51caa])return this[_0xdbb80f(0x1b5)][_0xe51caa];const _0xde8d38=VisuMZ[_0xdbb80f(0x1ed)][_0xdbb80f(0x14a)][_0xdbb80f(0xff)][_0xdbb80f(0x3db)];return _0xde8d38[_0xdbb80f(0xa8)]($gameParty['numItems'](this['_item']));},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x469)]=function(_0x4355f8,_0x4fee2c,_0x48756d){const _0xbc1c2f=_0x28fd0f,_0x354ad6=this[_0xbc1c2f(0x3de)]();return this[_0xbc1c2f(0x1bf)](_0x354ad6,_0x4355f8,_0x4fee2c,_0x48756d,![],_0xbc1c2f(0x132)),this['drawItemDarkRect'](_0x4355f8,_0x4fee2c,_0x48756d),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemOccasionText']=function(){const _0x28f037=_0x28fd0f,_0x4dbd5d='OCCASION';if(this[_0x28f037(0x1b5)][_0x4dbd5d])return this[_0x28f037(0x1b5)][_0x4dbd5d];const _0x4e95c2=VisuMZ[_0x28f037(0x1ed)]['Settings'][_0x28f037(0x242)],_0xfb3bd9=_0x28f037(0x255)[_0x28f037(0xa8)](this[_0x28f037(0x394)][_0x28f037(0x181)]);return _0x4e95c2[_0xfb3bd9];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1e7)]=function(_0x3489de,_0x417846,_0x580bf6){const _0x2d85df=_0x28fd0f,_0x2c10de=this[_0x2d85df(0x1fb)]();return this[_0x2d85df(0x1bf)](_0x2c10de,_0x3489de,_0x417846,_0x580bf6,![],_0x2d85df(0x132)),this[_0x2d85df(0x23a)](_0x3489de,_0x417846,_0x580bf6),this[_0x2d85df(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1fb)]=function(){const _0x52890a=_0x28fd0f,_0x2c4573='SCOPE';if(this['_customItemInfo'][_0x2c4573])return this[_0x52890a(0x1b5)][_0x2c4573];const _0x24599c=VisuMZ['ItemsEquipsCore'][_0x52890a(0x14a)]['StatusWindow'];if(Imported['VisuMZ_1_BattleCore']){const _0x2eb88b=this[_0x52890a(0x394)][_0x52890a(0x409)];if(_0x2eb88b['match'](/<TARGET:[ ](.*)>/i)){const _0xd3fccd=String(RegExp['$1']);if(_0xd3fccd[_0x52890a(0x275)](/(\d+) RANDOM ANY/i))return _0x24599c['ScopeRandomAny'][_0x52890a(0xa8)](Number(RegExp['$1']));else{if(_0xd3fccd[_0x52890a(0x275)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x24599c[_0x52890a(0x454)][_0x52890a(0xa8)](Number(RegExp['$1']));else{if(_0xd3fccd['match'](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x24599c['ScopeRandomAllies'][_0x52890a(0xa8)](Number(RegExp['$1']));else{if(_0xd3fccd['match'](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x24599c[_0x52890a(0x15c)];else{if(_0xd3fccd[_0x52890a(0x275)](/ALLY OR ENEMY/i))return _0x24599c[_0x52890a(0x303)]||_0x24599c['Scope7'];else{if(_0xd3fccd[_0x52890a(0x275)](/ENEMY OR ALLY/i))return _0x24599c[_0x52890a(0x293)]||_0x24599c['Scope1'];}}}}}}}const _0x410bfd=_0x52890a(0x213)[_0x52890a(0xa8)](this['_item'][_0x52890a(0x487)]);return _0x24599c[_0x410bfd];},Window_ShopStatus[_0x28fd0f(0x1c0)]['drawItemSpeed']=function(_0x27d09e,_0x502437,_0x20a36e){const _0x52f3eb=_0x28fd0f,_0x307fcb=this[_0x52f3eb(0x1c7)]();this[_0x52f3eb(0x1bf)](_0x307fcb,_0x27d09e,_0x502437,_0x20a36e,!![]);const _0x34e096=this['getItemSpeedText']();return this[_0x52f3eb(0x1bf)](_0x34e096,_0x27d09e,_0x502437,_0x20a36e,![],_0x52f3eb(0x299)),this['drawItemDarkRect'](_0x27d09e,_0x502437,_0x20a36e),this[_0x52f3eb(0x41d)](),!![];},Window_ShopStatus['prototype'][_0x28fd0f(0x1c7)]=function(){const _0x587117=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x587117(0x14a)][_0x587117(0x242)][_0x587117(0x230)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0xd7)]=function(){const _0x453656=_0x28fd0f,_0x4a7157=_0x453656(0x1f9);if(this[_0x453656(0x1b5)][_0x4a7157])return this[_0x453656(0x1b5)][_0x4a7157];const _0x192e26=this[_0x453656(0x394)][_0x453656(0x276)];if(_0x192e26>=0x7d0)return VisuMZ['ItemsEquipsCore'][_0x453656(0x14a)][_0x453656(0x242)]['Speed2000'];else{if(_0x192e26>=0x3e8)return VisuMZ[_0x453656(0x1ed)]['Settings'][_0x453656(0x242)][_0x453656(0x3b2)];else{if(_0x192e26>0x0)return VisuMZ[_0x453656(0x1ed)][_0x453656(0x14a)][_0x453656(0x242)]['Speed1'];else{if(_0x192e26===0x0)return VisuMZ[_0x453656(0x1ed)][_0x453656(0x14a)]['StatusWindow'][_0x453656(0x418)];else{if(_0x192e26>-0x3e8)return VisuMZ['ItemsEquipsCore'][_0x453656(0x14a)][_0x453656(0x242)][_0x453656(0x107)];else{if(_0x192e26>-0x7d0)return VisuMZ[_0x453656(0x1ed)][_0x453656(0x14a)][_0x453656(0x242)][_0x453656(0x3c7)];else return _0x192e26<=-0x7d0?VisuMZ[_0x453656(0x1ed)][_0x453656(0x14a)][_0x453656(0x242)]['SpeedNeg2000']:_0x453656(0x478);}}}}}},Window_ShopStatus[_0x28fd0f(0x1c0)]['drawItemSuccessRate']=function(_0x17c9f0,_0xb432db,_0x312c32){const _0x2db7f7=_0x28fd0f,_0x107be3=this['getItemSuccessRateLabel']();this[_0x2db7f7(0x1bf)](_0x107be3,_0x17c9f0,_0xb432db,_0x312c32,!![]);const _0x528640=this[_0x2db7f7(0x356)]();return this[_0x2db7f7(0x1bf)](_0x528640,_0x17c9f0,_0xb432db,_0x312c32,![],'right'),this[_0x2db7f7(0x23a)](_0x17c9f0,_0xb432db,_0x312c32),this[_0x2db7f7(0x41d)](),!![];},Window_ShopStatus['prototype'][_0x28fd0f(0x3ad)]=function(){const _0x4ee587=_0x28fd0f;return VisuMZ[_0x4ee587(0x1ed)][_0x4ee587(0x14a)][_0x4ee587(0x242)][_0x4ee587(0x28a)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x356)]=function(){const _0x10bcca=_0x28fd0f,_0x3ec562='SUCCESS\x20RATE';if(this[_0x10bcca(0x1b5)][_0x3ec562])return this['_customItemInfo'][_0x3ec562];if(Imported['VisuMZ_1_BattleCore']){const _0x468c5b=this[_0x10bcca(0x394)][_0x10bcca(0x409)];if(_0x468c5b['match'](/<ALWAYS HIT>/i))return'100%';else{if(_0x468c5b[_0x10bcca(0x275)](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x10bcca(0x15e)['format'](Number(RegExp['$1']));}}return'%1%'[_0x10bcca(0xa8)](this['_item']['successRate']);},Window_ShopStatus['prototype']['drawItemRepeats']=function(_0x19b5da,_0x3469d8,_0x1aed70){const _0x5442f=_0x28fd0f,_0x192288=this[_0x5442f(0x1b3)]();this[_0x5442f(0x1bf)](_0x192288,_0x19b5da,_0x3469d8,_0x1aed70,!![]);const _0x5e2c43=this['getItemRepeatsText']();return this['drawItemKeyData'](_0x5e2c43,_0x19b5da,_0x3469d8,_0x1aed70,![],_0x5442f(0x299)),this[_0x5442f(0x23a)](_0x19b5da,_0x3469d8,_0x1aed70),this[_0x5442f(0x41d)](),!![];},Window_ShopStatus['prototype'][_0x28fd0f(0x1b3)]=function(){const _0x4e7b1d=_0x28fd0f;return VisuMZ[_0x4e7b1d(0x1ed)][_0x4e7b1d(0x14a)][_0x4e7b1d(0x242)][_0x4e7b1d(0x1be)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x48e)]=function(){const _0x10f60a=_0x28fd0f,_0x204922=_0x10f60a(0x438);if(this['_customItemInfo'][_0x204922])return this[_0x10f60a(0x1b5)][_0x204922];const _0x1eeb59=_0x10f60a(0xde);return _0x1eeb59[_0x10f60a(0xa8)](this[_0x10f60a(0x394)]['repeats']);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x349)]=function(_0x5942d5,_0x13d571,_0x19e138){const _0x1510ad=_0x28fd0f,_0x39207b=this['getItemHitTypeLabel']();this['drawItemKeyData'](_0x39207b,_0x5942d5,_0x13d571,_0x19e138,!![]);const _0x58bb0e=this[_0x1510ad(0x35b)]();return this[_0x1510ad(0x1bf)](_0x58bb0e,_0x5942d5,_0x13d571,_0x19e138,![],_0x1510ad(0x299)),this['drawItemDarkRect'](_0x5942d5,_0x13d571,_0x19e138),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x48c)]=function(){const _0x9eb122=_0x28fd0f;return VisuMZ[_0x9eb122(0x1ed)][_0x9eb122(0x14a)][_0x9eb122(0x242)][_0x9eb122(0x1a0)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x35b)]=function(){const _0x4abf0e=_0x28fd0f,_0x64a554=_0x4abf0e(0x36d);if(this[_0x4abf0e(0x1b5)][_0x64a554])return this[_0x4abf0e(0x1b5)][_0x64a554];const _0xfb5031=VisuMZ[_0x4abf0e(0x1ed)][_0x4abf0e(0x14a)][_0x4abf0e(0x242)],_0x3d883b=_0x4abf0e(0x271)[_0x4abf0e(0xa8)](this[_0x4abf0e(0x394)][_0x4abf0e(0x387)]);return _0xfb5031[_0x3d883b];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x3fb)]=function(_0x5e2c7d,_0x568aa5,_0x2146b9){const _0x3affde=_0x28fd0f;if(this[_0x3affde(0x394)][_0x3affde(0x297)]['type']<=0x0)return _0x568aa5;if(this['drawItemDamageElement'](_0x5e2c7d,_0x568aa5,_0x2146b9))_0x568aa5+=this[_0x3affde(0xa7)]();if(this[_0x3affde(0xb7)](_0x5e2c7d,_0x568aa5,_0x2146b9))_0x568aa5+=this['lineHeight']();return this['resetFontSettings'](),_0x568aa5;},Window_ShopStatus['prototype']['drawItemDamageElement']=function(_0xecb04e,_0x33a4c1,_0x579142){const _0x359df3=_0x28fd0f,_0x26eb77=this[_0x359df3(0x1b6)]();this['drawItemKeyData'](_0x26eb77,_0xecb04e,_0x33a4c1,_0x579142,!![]);const _0x11b950=this[_0x359df3(0xf3)]();return this[_0x359df3(0x1bf)](_0x11b950,_0xecb04e,_0x33a4c1,_0x579142,![],_0x359df3(0x299)),this[_0x359df3(0x23a)](_0xecb04e,_0x33a4c1,_0x579142),this[_0x359df3(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1b6)]=function(){const _0x3a3fab=_0x28fd0f;return VisuMZ[_0x3a3fab(0x1ed)]['Settings'][_0x3a3fab(0x242)]['LabelElement'];},Window_ShopStatus[_0x28fd0f(0x1c0)]['getItemDamageElementText']=function(){const _0x37d349=_0x28fd0f,_0x360d4b=_0x37d349(0x171);if(this[_0x37d349(0x1b5)][_0x360d4b])return this[_0x37d349(0x1b5)][_0x360d4b];if(this[_0x37d349(0x394)][_0x37d349(0x297)][_0x37d349(0xe5)]<=-0x1)return VisuMZ[_0x37d349(0x1ed)]['Settings'][_0x37d349(0x242)][_0x37d349(0x266)];else return this[_0x37d349(0x394)]['damage'][_0x37d349(0xe5)]===0x0?VisuMZ[_0x37d349(0x1ed)][_0x37d349(0x14a)][_0x37d349(0x242)][_0x37d349(0x444)]:$dataSystem[_0x37d349(0x405)][this[_0x37d349(0x394)][_0x37d349(0x297)][_0x37d349(0xe5)]];},Window_ShopStatus['prototype'][_0x28fd0f(0xb7)]=function(_0x4258fb,_0x4e38e8,_0xbbe36e){const _0x4bd331=_0x28fd0f,_0x22aeff=this[_0x4bd331(0x269)]();this[_0x4bd331(0x1bf)](_0x22aeff,_0x4258fb,_0x4e38e8,_0xbbe36e,!![]),this[_0x4bd331(0x332)]();const _0x5e37ed=this['getItemDamageAmountText'](),_0x2db105=ColorManager[_0x4bd331(0x3c3)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x4bd331(0x394)][_0x4bd331(0x297)][_0x4bd331(0x1c9)]]);return this['changeTextColor'](_0x2db105),this[_0x4bd331(0x1bf)](_0x5e37ed,_0x4258fb,_0x4e38e8,_0xbbe36e,![],_0x4bd331(0x299)),this[_0x4bd331(0x23a)](_0x4258fb,_0x4e38e8,_0xbbe36e),this[_0x4bd331(0x41d)](),!![];},Window_ShopStatus['prototype'][_0x28fd0f(0x269)]=function(){const _0x16d7f8=_0x28fd0f;return Imported[_0x16d7f8(0xd8)]&&DataManager['getDamageStyle'](this[_0x16d7f8(0x394)])!==_0x16d7f8(0xcd)?this[_0x16d7f8(0x1c8)]():this[_0x16d7f8(0x1c3)]();},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1c3)]=function(){const _0xb5f9a4=_0x28fd0f,_0x1a7b87=VisuMZ[_0xb5f9a4(0x1ed)][_0xb5f9a4(0x14a)][_0xb5f9a4(0x242)],_0x4aad31=_0xb5f9a4(0x464)[_0xb5f9a4(0xa8)](this[_0xb5f9a4(0x394)]['damage'][_0xb5f9a4(0x1c9)]),_0x790e46=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0xb5f9a4(0x394)]['damage'][_0xb5f9a4(0x1c9)]];return _0x1a7b87[_0x4aad31][_0xb5f9a4(0xa8)](_0x790e46);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x332)]=function(){const _0x13d1ab=_0x28fd0f,_0x15d0e1=$gameActors['actor'](0x1);this['_tempActorA']=JsonEx['makeDeepCopy'](_0x15d0e1),this['_tempActorB']=JsonEx[_0x13d1ab(0x2ad)](_0x15d0e1);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x323)]=function(){const _0x52070c=_0x28fd0f,_0x48b9a7=_0x52070c(0x422);if(this[_0x52070c(0x1b5)][_0x48b9a7])return this[_0x52070c(0x1b5)][_0x48b9a7];return Imported[_0x52070c(0xd8)]&&DataManager[_0x52070c(0x2ef)](this[_0x52070c(0x394)])!=='MANUAL'?this[_0x52070c(0xb3)]():this[_0x52070c(0x4a6)]();},Window_ShopStatus['prototype'][_0x28fd0f(0x4a6)]=function(){const _0x4886ee=_0x28fd0f;window['a']=this[_0x4886ee(0x45a)],window['b']=this['_tempActorB'],this[_0x4886ee(0x45a)][_0x4886ee(0x25d)](!![]),this[_0x4886ee(0x296)]['setShopStatusWindowMode']([0x3,0x4][_0x4886ee(0x41a)](this['_item'][_0x4886ee(0x297)][_0x4886ee(0x1c9)]));let _0x137ad2=this[_0x4886ee(0x394)][_0x4886ee(0x297)][_0x4886ee(0x37c)];try{const _0x2bc8a5=Math[_0x4886ee(0x27f)](eval(_0x137ad2),0x0)/window['a'][_0x4886ee(0xe1)];return this[_0x4886ee(0x40f)](),isNaN(_0x2bc8a5)?_0x4886ee(0x478):'%1%'[_0x4886ee(0xa8)](Math[_0x4886ee(0x182)](_0x2bc8a5*0x64));}catch(_0x2f44fa){return $gameTemp[_0x4886ee(0x495)]()&&(console['log'](_0x4886ee(0x423)[_0x4886ee(0xa8)](this[_0x4886ee(0x394)][_0x4886ee(0x1af)])),console[_0x4886ee(0x254)](_0x2f44fa)),this[_0x4886ee(0x40f)](),_0x4886ee(0x478);}},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x40f)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus['prototype'][_0x28fd0f(0x175)]=function(_0x4e04a5,_0x2954c8,_0x4a8ebf){const _0x5b6094=_0x28fd0f;if(!this[_0x5b6094(0x16f)]())return _0x2954c8;if(this['drawItemEffectsHpRecovery'](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this[_0x5b6094(0xa7)]();if(this[_0x5b6094(0x17c)](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this['lineHeight']();if(this[_0x5b6094(0x347)](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this[_0x5b6094(0xa7)]();if(this[_0x5b6094(0x2bd)](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this[_0x5b6094(0xa7)]();if(this['drawItemEffectsMpDamage'](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this[_0x5b6094(0xa7)]();if(this[_0x5b6094(0x141)](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this[_0x5b6094(0xa7)]();if(this[_0x5b6094(0x185)](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this['lineHeight']();if(this[_0x5b6094(0x24f)](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this[_0x5b6094(0xa7)]();if(this[_0x5b6094(0x483)](_0x4e04a5,_0x2954c8,_0x4a8ebf))_0x2954c8+=this[_0x5b6094(0xa7)]();return this[_0x5b6094(0x41d)](),_0x2954c8;},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x39b)]=function(){const _0x487763=_0x28fd0f;return this[_0x487763(0x394)][_0x487763(0x231)];},Window_ShopStatus['prototype'][_0x28fd0f(0x16f)]=function(){const _0x4a8b7a=_0x28fd0f;let _0x4910f6=![];this[_0x4a8b7a(0x3b7)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0xad47f4=this['getItemEffects']();for(const _0x3bdec3 of _0xad47f4){switch(_0x3bdec3[_0x4a8b7a(0x18f)]){case Game_Action['EFFECT_RECOVER_HP']:this['_itemData'][_0x4a8b7a(0xb6)]+=_0x3bdec3[_0x4a8b7a(0x3ac)],this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x20c)]+=_0x3bdec3[_0x4a8b7a(0x2a0)],_0x4910f6=!![];break;case Game_Action[_0x4a8b7a(0x190)]:this['_itemData']['rateMP']+=_0x3bdec3[_0x4a8b7a(0x3ac)],this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x2ee)]+=_0x3bdec3[_0x4a8b7a(0x2a0)],_0x4910f6=!![];break;case Game_Action[_0x4a8b7a(0x273)]:this['_itemData']['gainTP']+=_0x3bdec3[_0x4a8b7a(0x3ac)],_0x4910f6=!![];break;case Game_Action[_0x4a8b7a(0xd2)]:this['_itemData']['addState'][_0x4a8b7a(0xb5)](_0x3bdec3[_0x4a8b7a(0x173)]),_0x4910f6=!![];break;case Game_Action[_0x4a8b7a(0x1de)]:this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x306)][_0x4a8b7a(0xb5)](_0x3bdec3[_0x4a8b7a(0x173)]),this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x38d)]=!![],_0x4910f6=!![];break;case Game_Action['EFFECT_ADD_BUFF']:this['_itemData'][_0x4a8b7a(0x1b7)][_0x3bdec3['dataId']]+=0x1,_0x4910f6=!![];break;case Game_Action[_0x4a8b7a(0x1d2)]:this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x1b7)][_0x3bdec3[_0x4a8b7a(0x173)]]-=0x1,_0x4910f6=!![];break;case Game_Action[_0x4a8b7a(0x247)]:this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x391)]['push'](_0x3bdec3[_0x4a8b7a(0x173)]),this['_itemData'][_0x4a8b7a(0x38d)]=!![],_0x4910f6=!![];break;case Game_Action['EFFECT_REMOVE_DEBUFF']:this[_0x4a8b7a(0x3b7)]['removeDebuff'][_0x4a8b7a(0xb5)](_0x3bdec3[_0x4a8b7a(0x173)]),this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x38d)]=!![],_0x4910f6=!![];break;}}if(this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x117)][_0x4a8b7a(0x176)]>0x0)this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x308)]=!![];for(let _0x1e6487=0x0;_0x1e6487<this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x1b7)][_0x4a8b7a(0x176)];_0x1e6487++){if(this[_0x4a8b7a(0x3b7)][_0x4a8b7a(0x1b7)][_0x1e6487]!==0x0)this['_itemData']['addStateBuffChanges']=!![];}this['_item']['tpGain']!==0x0&&(this[_0x4a8b7a(0x3b7)]['selfTP']=this[_0x4a8b7a(0x394)][_0x4a8b7a(0x352)],_0x4910f6=!![]);const _0x2a2ca0=[_0x4a8b7a(0x23d),'MP\x20RECOVERY',_0x4a8b7a(0x27c),'HP\x20DAMAGE',_0x4a8b7a(0x166),_0x4a8b7a(0x46f),_0x4a8b7a(0x137),_0x4a8b7a(0x385),_0x4a8b7a(0x14f)];for(const _0x504a54 of _0x2a2ca0){if(this['_customItemInfo'][_0x504a54]){_0x4910f6=!![];break;}}return _0x4910f6;},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x113)]=function(_0xf6adf,_0xd56aa7,_0x1fdc18){const _0x42e25c=_0x28fd0f,_0x371ee9=_0x42e25c(0x23d);if(this[_0x42e25c(0x3b7)][_0x42e25c(0xb6)]<=0x0&&this[_0x42e25c(0x3b7)][_0x42e25c(0x20c)]<=0x0&&!this[_0x42e25c(0x1b5)][_0x371ee9])return![];const _0x32deac=this[_0x42e25c(0x33a)]();this[_0x42e25c(0x1bf)](_0x32deac,_0xf6adf,_0xd56aa7,_0x1fdc18,!![]);const _0x2e60ef=this[_0x42e25c(0x3e8)]();return this[_0x42e25c(0x243)](ColorManager[_0x42e25c(0x3c3)](0x1)),this[_0x42e25c(0x1bf)](_0x2e60ef,_0xf6adf,_0xd56aa7,_0x1fdc18,![],_0x42e25c(0x299)),this[_0x42e25c(0x23a)](_0xf6adf,_0xd56aa7,_0x1fdc18),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x33a)]=function(){const _0x5cbb93=_0x28fd0f,_0x240f13=VisuMZ[_0x5cbb93(0x1ed)]['Settings'][_0x5cbb93(0x242)][_0x5cbb93(0x331)];return _0x240f13[_0x5cbb93(0xa8)](TextManager['hp']);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x3e8)]=function(){const _0x536803=_0x28fd0f,_0x3ea7e1=_0x536803(0x23d);if(this[_0x536803(0x1b5)][_0x3ea7e1])return this[_0x536803(0x1b5)][_0x3ea7e1];let _0x356396='';if(this[_0x536803(0x3b7)][_0x536803(0xb6)]>0x0)_0x356396+='+%1%'[_0x536803(0xa8)](Math[_0x536803(0x2bb)](this[_0x536803(0x3b7)][_0x536803(0xb6)]*0x64));if(this[_0x536803(0x3b7)][_0x536803(0xb6)]>0x0&&this[_0x536803(0x3b7)][_0x536803(0x20c)]>0x0)_0x356396+='\x20';if(this[_0x536803(0x3b7)][_0x536803(0x20c)]>0x0)_0x356396+=_0x536803(0xee)[_0x536803(0xa8)](this[_0x536803(0x3b7)]['flatHP']);return _0x356396;},Window_ShopStatus['prototype']['drawItemEffectsMpRecovery']=function(_0x366afb,_0x3b7799,_0x5d1649){const _0x155335=_0x28fd0f,_0x33db88=_0x155335(0x1f8);if(this[_0x155335(0x3b7)][_0x155335(0x260)]<=0x0&&this[_0x155335(0x3b7)]['flatMP']<=0x0&&!this[_0x155335(0x1b5)][_0x33db88])return![];const _0x2ffcca=this[_0x155335(0x485)]();this['drawItemKeyData'](_0x2ffcca,_0x366afb,_0x3b7799,_0x5d1649,!![]);const _0x1d17b5=this['getItemEffectsMpRecoveryText']();return this[_0x155335(0x243)](ColorManager[_0x155335(0x3c3)](0x3)),this[_0x155335(0x1bf)](_0x1d17b5,_0x366afb,_0x3b7799,_0x5d1649,![],'right'),this[_0x155335(0x23a)](_0x366afb,_0x3b7799,_0x5d1649),this[_0x155335(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)]['getItemEffectsMpRecoveryLabel']=function(){const _0x3dee90=_0x28fd0f,_0x3438ad=VisuMZ[_0x3dee90(0x1ed)][_0x3dee90(0x14a)][_0x3dee90(0x242)]['LabelRecoverMP'];return _0x3438ad[_0x3dee90(0xa8)](TextManager['mp']);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x150)]=function(){const _0x18c054=_0x28fd0f,_0x8b2522=_0x18c054(0x1f8);if(this['_customItemInfo'][_0x8b2522])return this['_customItemInfo'][_0x8b2522];let _0x68c603='';if(this['_itemData'][_0x18c054(0x260)]>0x0)_0x68c603+=_0x18c054(0x368)[_0x18c054(0xa8)](Math['floor'](this['_itemData'][_0x18c054(0x260)]*0x64));if(this[_0x18c054(0x3b7)][_0x18c054(0x260)]>0x0&&this[_0x18c054(0x3b7)][_0x18c054(0x2ee)]>0x0)_0x68c603+='\x20';if(this[_0x18c054(0x3b7)][_0x18c054(0x2ee)]>0x0)_0x68c603+='+%1'[_0x18c054(0xa8)](this[_0x18c054(0x3b7)][_0x18c054(0x2ee)]);return _0x68c603;},Window_ShopStatus['prototype'][_0x28fd0f(0x347)]=function(_0x1d958d,_0x2afff2,_0x44511a){const _0x2e68e9=_0x28fd0f,_0x2fbad8=_0x2e68e9(0x27c);if(this[_0x2e68e9(0x3b7)][_0x2e68e9(0x144)]<=0x0&&!this[_0x2e68e9(0x1b5)][_0x2fbad8])return![];const _0x14057c=this[_0x2e68e9(0x216)]();this['drawItemKeyData'](_0x14057c,_0x1d958d,_0x2afff2,_0x44511a,!![]);const _0x2c039e=this[_0x2e68e9(0x1a3)]();return this[_0x2e68e9(0x243)](ColorManager['powerUpColor']()),this[_0x2e68e9(0x1bf)](_0x2c039e,_0x1d958d,_0x2afff2,_0x44511a,![],'right'),this[_0x2e68e9(0x23a)](_0x1d958d,_0x2afff2,_0x44511a),this[_0x2e68e9(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x216)]=function(){const _0x219b45=_0x28fd0f,_0x54954f=VisuMZ['ItemsEquipsCore']['Settings'][_0x219b45(0x242)][_0x219b45(0x291)];return _0x54954f[_0x219b45(0xa8)](TextManager['tp']);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1a3)]=function(){const _0x318de5=_0x28fd0f,_0x3ecb5a=_0x318de5(0x27c);if(this[_0x318de5(0x1b5)][_0x3ecb5a])return this[_0x318de5(0x1b5)][_0x3ecb5a];let _0x3bbb7f='';return _0x3bbb7f+=_0x318de5(0xee)[_0x318de5(0xa8)](this[_0x318de5(0x3b7)][_0x318de5(0x144)]),_0x3bbb7f;},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x185)]=function(_0x3af8d1,_0x148359,_0x651c92){const _0x49fcd1=_0x28fd0f,_0x1ce9ba='USER\x20TP\x20GAIN';if(this[_0x49fcd1(0x3b7)][_0x49fcd1(0x2d4)]===0x0&&!this[_0x49fcd1(0x1b5)][_0x1ce9ba])return![];const _0x1220be=this['getItemEffectsSelfTpGainLabel']();this[_0x49fcd1(0x1bf)](_0x1220be,_0x3af8d1,_0x148359,_0x651c92,!![]);const _0x36063=this[_0x49fcd1(0xf4)]();return this['_itemData'][_0x49fcd1(0x2d4)]>0x0?this[_0x49fcd1(0x243)](ColorManager[_0x49fcd1(0x19b)]()):this['changeTextColor'](ColorManager[_0x49fcd1(0x330)]()),this['drawItemKeyData'](_0x36063,_0x3af8d1,_0x148359,_0x651c92,![],_0x49fcd1(0x299)),this[_0x49fcd1(0x23a)](_0x3af8d1,_0x148359,_0x651c92),this[_0x49fcd1(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x307)]=function(){const _0x2b8b8e=_0x28fd0f,_0x2e39f1=VisuMZ[_0x2b8b8e(0x1ed)][_0x2b8b8e(0x14a)][_0x2b8b8e(0x242)][_0x2b8b8e(0x44b)];return _0x2e39f1[_0x2b8b8e(0xa8)](TextManager['tp']);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0xf4)]=function(){const _0x5d418d=_0x28fd0f,_0x52dabb=_0x5d418d(0x137);if(this[_0x5d418d(0x1b5)][_0x52dabb])return this['_customItemInfo'][_0x52dabb];let _0x42805c='';return this['_itemData'][_0x5d418d(0x2d4)]>0x0?_0x42805c+='+%1'[_0x5d418d(0xa8)](this['_itemData'][_0x5d418d(0x2d4)]):_0x42805c+='%1'[_0x5d418d(0xa8)](this[_0x5d418d(0x3b7)][_0x5d418d(0x2d4)]),_0x42805c;},Window_ShopStatus[_0x28fd0f(0x1c0)]['drawItemEffectsHpDamage']=function(_0x3dde54,_0x53ed11,_0x1d5609){const _0x367c48=_0x28fd0f,_0x5282ef=_0x367c48(0x361);if(this[_0x367c48(0x3b7)][_0x367c48(0xb6)]>=0x0&&this[_0x367c48(0x3b7)]['flatHP']>=0x0&&!this[_0x367c48(0x1b5)][_0x5282ef])return![];const _0x508ec5=this[_0x367c48(0x31c)]();this[_0x367c48(0x1bf)](_0x508ec5,_0x3dde54,_0x53ed11,_0x1d5609,!![]);const _0x1c37c7=this[_0x367c48(0x3c9)]();return this[_0x367c48(0x243)](ColorManager[_0x367c48(0x3c3)](0x0)),this['drawItemKeyData'](_0x1c37c7,_0x3dde54,_0x53ed11,_0x1d5609,![],_0x367c48(0x299)),this[_0x367c48(0x23a)](_0x3dde54,_0x53ed11,_0x1d5609),this[_0x367c48(0x41d)](),!![];},Window_ShopStatus['prototype']['getItemEffectsHpDamageLabel']=function(){const _0x39a8d9=_0x28fd0f,_0x56d4ac=VisuMZ[_0x39a8d9(0x1ed)]['Settings']['StatusWindow']['LabelDamageHP'];return _0x56d4ac[_0x39a8d9(0xa8)](TextManager['hp']);},Window_ShopStatus[_0x28fd0f(0x1c0)]['getItemEffectsHpDamageText']=function(){const _0x295d53=_0x28fd0f,_0x2fb5f8=_0x295d53(0x361);if(this['_customItemInfo'][_0x2fb5f8])return this['_customItemInfo'][_0x2fb5f8];let _0x463da7='';if(this[_0x295d53(0x3b7)]['rateHP']<0x0)_0x463da7+=_0x295d53(0x15e)[_0x295d53(0xa8)](Math['floor'](this[_0x295d53(0x3b7)][_0x295d53(0xb6)]*0x64));if(this[_0x295d53(0x3b7)][_0x295d53(0xb6)]<0x0&&this[_0x295d53(0x3b7)][_0x295d53(0x20c)]<0x0)_0x463da7+='\x20';if(this[_0x295d53(0x3b7)][_0x295d53(0x20c)]<0x0)_0x463da7+='%1'[_0x295d53(0xa8)](this[_0x295d53(0x3b7)][_0x295d53(0x20c)]);return _0x463da7;},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1f1)]=function(_0x601e63,_0x589ded,_0x1e21e9){const _0x3a48a=_0x28fd0f,_0x272fc3=_0x3a48a(0x166);if(this[_0x3a48a(0x3b7)]['rateMP']>=0x0&&this[_0x3a48a(0x3b7)]['flatMP']>=0x0&&!this[_0x3a48a(0x1b5)][_0x272fc3])return![];const _0x27fd30=this[_0x3a48a(0x354)]();this[_0x3a48a(0x1bf)](_0x27fd30,_0x601e63,_0x589ded,_0x1e21e9,!![]);const _0x9c6ef7=this[_0x3a48a(0x44d)]();return this[_0x3a48a(0x243)](ColorManager['damageColor'](0x2)),this[_0x3a48a(0x1bf)](_0x9c6ef7,_0x601e63,_0x589ded,_0x1e21e9,![],_0x3a48a(0x299)),this[_0x3a48a(0x23a)](_0x601e63,_0x589ded,_0x1e21e9),this[_0x3a48a(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x354)]=function(){const _0x3dcbe7=_0x28fd0f,_0x523c98=VisuMZ[_0x3dcbe7(0x1ed)]['Settings'][_0x3dcbe7(0x242)][_0x3dcbe7(0x45d)];return _0x523c98[_0x3dcbe7(0xa8)](TextManager['mp']);},Window_ShopStatus[_0x28fd0f(0x1c0)]['getItemEffectsMpDamageText']=function(){const _0x4fb3c3=_0x28fd0f,_0x547262=_0x4fb3c3(0x166);if(this['_customItemInfo'][_0x547262])return this[_0x4fb3c3(0x1b5)][_0x547262];let _0x56771f='';if(this['_itemData'][_0x4fb3c3(0x260)]<0x0)_0x56771f+=_0x4fb3c3(0x15e)[_0x4fb3c3(0xa8)](Math['floor'](this[_0x4fb3c3(0x3b7)][_0x4fb3c3(0x260)]*0x64));if(this[_0x4fb3c3(0x3b7)][_0x4fb3c3(0x260)]<0x0&&this[_0x4fb3c3(0x3b7)][_0x4fb3c3(0x2ee)]<0x0)_0x56771f+='\x20';if(this[_0x4fb3c3(0x3b7)][_0x4fb3c3(0x2ee)]<0x0)_0x56771f+='%1'[_0x4fb3c3(0xa8)](this[_0x4fb3c3(0x3b7)]['flatMP']);return _0x56771f;},Window_ShopStatus[_0x28fd0f(0x1c0)]['drawItemEffectsTpDamage']=function(_0x3e258e,_0x2cf098,_0x453f13){const _0x35e182=_0x28fd0f,_0x2febaf=_0x35e182(0x46f);if(this[_0x35e182(0x3b7)]['gainTP']>=0x0&&!this['_customItemInfo'][_0x2febaf])return![];const _0xc5f573=this['getItemEffectsTpDamageLabel']();this[_0x35e182(0x1bf)](_0xc5f573,_0x3e258e,_0x2cf098,_0x453f13,!![]);const _0x199677=this[_0x35e182(0x37a)]();return this['changeTextColor'](ColorManager[_0x35e182(0x330)]()),this[_0x35e182(0x1bf)](_0x199677,_0x3e258e,_0x2cf098,_0x453f13,![],'right'),this[_0x35e182(0x23a)](_0x3e258e,_0x2cf098,_0x453f13),this[_0x35e182(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x3e5)]=function(){const _0x582c0c=_0x28fd0f,_0x5efb18=VisuMZ['ItemsEquipsCore'][_0x582c0c(0x14a)]['StatusWindow'][_0x582c0c(0x15a)];return _0x5efb18[_0x582c0c(0xa8)](TextManager['tp']);},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x37a)]=function(){const _0x294f2d=_0x28fd0f,_0x317689='TP\x20DAMAGE';if(this[_0x294f2d(0x1b5)][_0x317689])return this['_customItemInfo'][_0x317689];let _0x52da1b='';return _0x52da1b+='%1'[_0x294f2d(0xa8)](this[_0x294f2d(0x3b7)][_0x294f2d(0x144)]),_0x52da1b;},Window_ShopStatus['prototype'][_0x28fd0f(0x24f)]=function(_0x6409e2,_0x523f26,_0x52b7e0){const _0x16dd5b=_0x28fd0f,_0x3775e4=_0x16dd5b(0x385);if(!this['_itemData']['addStateBuffChanges']&&!this[_0x16dd5b(0x1b5)][_0x3775e4])return![];const _0x244015=this[_0x16dd5b(0x2c0)]();if(_0x244015[_0x16dd5b(0x176)]<=0x0)return![];const _0x125421=this[_0x16dd5b(0x186)]();return this[_0x16dd5b(0x1bf)](_0x125421,_0x6409e2,_0x523f26,_0x52b7e0,!![]),this[_0x16dd5b(0x1bf)](_0x244015,_0x6409e2,_0x523f26,_0x52b7e0,![],_0x16dd5b(0x299)),this[_0x16dd5b(0x23a)](_0x6409e2,_0x523f26,_0x52b7e0),this[_0x16dd5b(0x41d)](),!![];},Window_ShopStatus['prototype']['getItemEffectsAddedStatesBuffsLabel']=function(){const _0x4fe073=_0x28fd0f;return VisuMZ['ItemsEquipsCore'][_0x4fe073(0x14a)][_0x4fe073(0x242)]['LabelApply'];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x2c0)]=function(){const _0x13cc3b=_0x28fd0f,_0x3f5cda=_0x13cc3b(0x385);if(this[_0x13cc3b(0x1b5)][_0x3f5cda])return this[_0x13cc3b(0x1b5)][_0x3f5cda];let _0x42be66='',_0x2e6580=0x0;const _0x335df0=0x8;for(const _0x176dbb of this[_0x13cc3b(0x3b7)][_0x13cc3b(0x117)]){const _0x3872b8=$dataStates[_0x176dbb];if(_0x3872b8&&_0x3872b8[_0x13cc3b(0x346)]>0x0){_0x42be66+=_0x13cc3b(0x3a7)[_0x13cc3b(0xa8)](_0x3872b8['iconIndex']),_0x2e6580++;if(_0x2e6580>=_0x335df0)return _0x42be66;}}for(let _0x4515cf=0x0;_0x4515cf<this[_0x13cc3b(0x3b7)][_0x13cc3b(0x1b7)][_0x13cc3b(0x176)];_0x4515cf++){const _0x2fed4a=this[_0x13cc3b(0x3b7)][_0x13cc3b(0x1b7)][_0x4515cf],_0x4c892a=Game_BattlerBase['prototype'][_0x13cc3b(0x129)](_0x2fed4a,_0x4515cf);if(_0x4c892a>0x0){_0x42be66+=_0x13cc3b(0x3a7)[_0x13cc3b(0xa8)](_0x4c892a),_0x2e6580++;if(_0x2e6580>=_0x335df0)return _0x42be66;}}return _0x42be66;},Window_ShopStatus[_0x28fd0f(0x1c0)]['drawItemEffectsRemovedStatesBuffs']=function(_0xea7ed2,_0x27a3e1,_0x3fadf5){const _0x48652a=_0x28fd0f,_0x401172=_0x48652a(0x14f);if(!this[_0x48652a(0x3b7)][_0x48652a(0x38d)]&&!this[_0x48652a(0x1b5)][_0x401172])return![];const _0x477019=this[_0x48652a(0x474)]();this['drawItemKeyData'](_0x477019,_0xea7ed2,_0x27a3e1,_0x3fadf5,!![]);const _0x3b1b40=this[_0x48652a(0x1e0)]();return this['drawItemKeyData'](_0x3b1b40,_0xea7ed2,_0x27a3e1,_0x3fadf5,![],_0x48652a(0x299)),this[_0x48652a(0x23a)](_0xea7ed2,_0x27a3e1,_0x3fadf5),this[_0x48652a(0x41d)](),!![];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x474)]=function(){const _0x95a38c=_0x28fd0f;return VisuMZ[_0x95a38c(0x1ed)][_0x95a38c(0x14a)][_0x95a38c(0x242)][_0x95a38c(0x180)];},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x1e0)]=function(){const _0x21cfc9=_0x28fd0f,_0x4e88a5='REMOVED\x20EFFECTS';if(this['_customItemInfo'][_0x4e88a5])return this[_0x21cfc9(0x1b5)][_0x4e88a5];let _0x5347b4='',_0xb1ce54=0x0;const _0x177644=VisuMZ[_0x21cfc9(0x1ed)][_0x21cfc9(0x14a)]['StatusWindow'][_0x21cfc9(0x488)];for(const _0x2a66bb of this[_0x21cfc9(0x3b7)][_0x21cfc9(0x306)]){const _0x2a102f=$dataStates[_0x2a66bb];if(_0x2a102f&&_0x2a102f[_0x21cfc9(0x346)]>0x0){_0x5347b4+=_0x21cfc9(0x3a7)[_0x21cfc9(0xa8)](_0x2a102f[_0x21cfc9(0x346)]),_0xb1ce54++;if(_0xb1ce54>=_0x177644)return _0x5347b4;}}for(let _0xadf289=0x0;_0xadf289<this[_0x21cfc9(0x3b7)]['removeBuff'][_0x21cfc9(0x176)];_0xadf289++){const _0x3bba74=this[_0x21cfc9(0x3b7)][_0x21cfc9(0x391)][_0xadf289],_0x17690d=Game_BattlerBase[_0x21cfc9(0x1c0)][_0x21cfc9(0x129)](0x1,_0x3bba74);if(_0x17690d>0x0){_0x5347b4+='\x5cI[%1]'[_0x21cfc9(0xa8)](_0x17690d),_0xb1ce54++;if(_0xb1ce54>=_0x177644)return _0x5347b4;}}for(let _0x1d0cc3=0x0;_0x1d0cc3<this['_itemData'][_0x21cfc9(0x3cf)][_0x21cfc9(0x176)];_0x1d0cc3++){const _0x355130=this[_0x21cfc9(0x3b7)][_0x21cfc9(0x3cf)][_0x1d0cc3],_0x3b00cd=Game_BattlerBase[_0x21cfc9(0x1c0)][_0x21cfc9(0x129)](-0x1,_0x355130);if(_0x3b00cd>0x0){_0x5347b4+=_0x21cfc9(0x3a7)[_0x21cfc9(0xa8)](_0x3b00cd),_0xb1ce54++;if(_0xb1ce54>=_0x177644)return _0x5347b4;}}return _0x5347b4;},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x386)]=function(_0x4feff0,_0x4babae,_0x39a751){const _0x314dd8=_0x28fd0f;if(this[_0x314dd8(0x394)][_0x314dd8(0x409)][_0x314dd8(0x275)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x3ba7a6=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x2c9313 of _0x3ba7a6){if(_0x2c9313[_0x314dd8(0x275)](/(.*):[ ](.*)/i)){const _0x15b32f=String(RegExp['$1'])[_0x314dd8(0x35f)](),_0x483506=String(RegExp['$2'])['trim']();this['drawItemCustomEntryLine'](_0x15b32f,_0x483506,_0x4feff0,_0x4babae,_0x39a751),_0x4babae+=this[_0x314dd8(0xa7)]();}}}return this[_0x314dd8(0x41d)](),_0x4babae;},Window_ShopStatus['prototype']['drawItemCustomEntryLine']=function(_0xab6928,_0x2fcc13,_0x15f586,_0x173ff0,_0x1ebc52){const _0x8ea08=_0x28fd0f;this[_0x8ea08(0x1bf)](_0xab6928,_0x15f586,_0x173ff0,_0x1ebc52,!![]),this[_0x8ea08(0x1bf)](_0x2fcc13,_0x15f586,_0x173ff0,_0x1ebc52,![],'right'),this[_0x8ea08(0x23a)](_0x15f586,_0x173ff0,_0x1ebc52),this[_0x8ea08(0x41d)]();},Window_ShopStatus['prototype'][_0x28fd0f(0x314)]=function(){const _0x59136a=_0x28fd0f;if(!this['_item'])return;const _0x2a4e20=this[_0x59136a(0x394)]['note'],_0xfffba1=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x1f5a21=_0x2a4e20[_0x59136a(0x275)](_0xfffba1);if(_0x1f5a21)for(const _0x50d4c6 of _0x1f5a21){_0x50d4c6[_0x59136a(0x275)](_0xfffba1);const _0x5e0570=String(RegExp['$1'])[_0x59136a(0x35f)]()||'';if(_0x5e0570==='')continue;const _0x19a29d=ImageManager[_0x59136a(0x28b)](_0x5e0570);_0x19a29d[_0x59136a(0xcc)](this['drawCustomShopGraphicLoad']['bind'](this,_0x19a29d,this[_0x59136a(0x394)]));}},Window_ShopStatus[_0x28fd0f(0x1c0)][_0x28fd0f(0x3e1)]=function(_0x4c3a5c,_0x3436dd){const _0x252552=_0x28fd0f;if(this[_0x252552(0x394)]!==_0x3436dd)return;if(!_0x4c3a5c)return;if(_0x4c3a5c[_0x252552(0x248)]<=0x0||_0x4c3a5c[_0x252552(0x25b)]<=0x0)return;const _0x1b55a6=_0x3436dd[_0x252552(0x409)];let _0x22194d=_0x252552(0xcb);_0x1b55a6['match'](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0x22194d=_0x252552(0x228));const _0xeef1a2=_0x22194d===_0x252552(0xcb)?this[_0x252552(0x471)]:this[_0x252552(0x48b)];let _0x518d97=this[_0x252552(0x462)],_0x2dda53=this[_0x252552(0x36e)];_0x1b55a6[_0x252552(0x275)](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x518d97=Number(RegExp['$1']));_0x1b55a6[_0x252552(0x275)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x2dda53=Number(RegExp['$1']));_0x1b55a6['match'](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0x518d97=Number(RegExp['$1']),_0x2dda53=Number(RegExp['$2']));const _0x25747c=Math['min'](0x1,_0x518d97/_0x4c3a5c[_0x252552(0x248)],_0x2dda53/_0x4c3a5c[_0x252552(0x25b)]);let _0x38e030=0x0,_0x198f68=0x0,_0x3e46e5=Math[_0x252552(0x2bb)](_0x4c3a5c[_0x252552(0x248)]*_0x25747c),_0x534575=Math[_0x252552(0x2bb)](_0x4c3a5c[_0x252552(0x25b)]*_0x25747c),_0xfffdfc=_0x252552(0x132);_0x1b55a6['match'](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0xfffdfc=String(RegExp['$1'])[_0x252552(0x2b4)]()['trim']());if(_0xfffdfc==='left')_0x38e030=0x0;else _0xfffdfc==='center'?_0x38e030=Math[_0x252552(0x182)]((this['innerWidth']-_0x3e46e5)/0x2):_0x38e030=this[_0x252552(0x462)]-_0x3e46e5;let _0x13f462=_0x252552(0x407);_0x1b55a6[_0x252552(0x275)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x13f462=String(RegExp['$1'])[_0x252552(0x2b4)]()[_0x252552(0x35f)]());if(_0x13f462===_0x252552(0x33f))_0x198f68=0x0;else _0x13f462===_0x252552(0x407)?_0x198f68=Math[_0x252552(0x182)]((this[_0x252552(0x36e)]-_0x534575)/0x2):_0x198f68=this['innerHeight']-_0x534575;_0x1b55a6[_0x252552(0x275)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x38e030+=Number(RegExp['$1']));_0x1b55a6['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x198f68+=Number(RegExp['$1']));_0x1b55a6['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x38e030+=Number(RegExp['$1']),_0x198f68+=Number(RegExp['$2']));let _0x5787f6=0xff;if(_0x1b55a6[_0x252552(0x275)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0x5787f6=Number(RegExp['$1']);else _0x1b55a6[_0x252552(0x275)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x5787f6=Math[_0x252552(0x182)](Number(RegExp['$1'])*0.01*0xff)[_0x252552(0xa0)](0x0,0xff));_0xeef1a2[_0x252552(0x309)]=_0x5787f6,_0xeef1a2[_0x252552(0x168)](_0x4c3a5c,0x0,0x0,_0x4c3a5c[_0x252552(0x248)],_0x4c3a5c['height'],_0x38e030,_0x198f68,_0x3e46e5,_0x534575),_0xeef1a2[_0x252552(0x309)]=0xff;},VisuMZ[_0x28fd0f(0x1ed)]['deepCopy']=function(_0x5741fe){const _0x42a172=_0x28fd0f;if(_0x5741fe===null||typeof _0x5741fe!==_0x42a172(0x384))return _0x5741fe;const _0x4bfc12=Array[_0x42a172(0x11c)](_0x5741fe)?[]:Object[_0x42a172(0x24a)](Object[_0x42a172(0x3bf)](_0x5741fe));for(const _0x4682f5 in _0x5741fe){Object[_0x42a172(0x1c0)][_0x42a172(0xa9)][_0x42a172(0x245)](_0x5741fe,_0x4682f5)&&(_0x4bfc12[_0x4682f5]=typeof _0x5741fe[_0x4682f5]===_0x42a172(0x384)&&_0x5741fe[_0x4682f5]!==null?VisuMZ[_0x42a172(0x1ed)]['deepCopy'](_0x5741fe[_0x4682f5]):_0x5741fe[_0x4682f5]);}return _0x4bfc12;};