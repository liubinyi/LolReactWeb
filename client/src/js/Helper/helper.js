import _ from 'lodash';

export function applyPercentageItemEffect(oldStats, num) {
		return oldStats == null ? 0 : oldStats * (1 + num);
}

export function applyFlatItemEffect(oldStats, num) {
		return oldStats == null ? num : oldStats + num;
}

export function arrayToCountHash(array) {
	let countHash = _.countBy(array, 'runeId');
	return countHash;
}

export function GetSingleRunePageStatsDetails(tag,stats,rune) {
	  //set up swtich statement

	  switch (tag) {
	      case "FlatSpellBlockMod": {
	        stats["magicResistance"] = rune[tag];
	        break;
	      }
	      case "PercentSpellBlockMod": {
	        stats["magicResistance"] =  stats["magicResistance"] * (1 + rune[tag]);
	         break;
	      }
	      case "rPercentArmorPenetrationMod": {
	        stats["armorPeneration"] = stats["armorPeneration"] * (1 + rune[tag]);
	        break;
	      }
	      case "PercentHPPoolMod": {
	        stats["health"] += rune["health"];
	        break;
	      }
	      case "rFlatMagicPenetrationMod": {
	        stats["magicPeneration"] += rune["magicPeneration"];
	        break;
	      }
	      case "PercentCritDamageMod": {
	        stats["PercentCritDamageMod"] += rune["PercentCritDamageMod"];
	        break;
	      }
	      case "PercentCritChanceMod": {
	        stats["PercentCritChanceMod"] += rune["PercentCritChanceMod"];
	        break;
	      }
	      case "rPercentMagicPenetrationMod": {
	        stats["rPercentMagicPenetrationMod"] += rune["rPercentMagicPenetrationMod"];
	        break;
	      }
	      case "FlatArmorMod": {
	        stats["armor"] += rune["FlatArmorMod"];
	        break;
	      }
	      case "PercentMovementSpeedMod": {
	        stats["PercentMovementSpeedMod"] = stats["PercentMovementSpeedMod"] * (1 + rune["PercentMovementSpeedMod"]);
	        break;
	      }
	      case "PercentLifeStealMod": {
	        stats["lifeSteal"] += rune["PercentLifeStealMod"];
	        break;
	      }
	      case "FlatPhysicalDamageMod": {
	        stats["FlatPhysicalDamageMod"] += rune["FlatPhysicalDamageMod"];
	        break;
	      }
	      case "PercentMagicDamageMod": {
	        stats["PercentMagicDamageMod"] = stats["PercentMagicDamageMod"] * (1 + rune["PercentMagicDamageMod"]);
	        break;
	      }
	      case "rFlatArmorPenetrationMod": {
	        stats["armorPeneration"] += rune["rFlatArmorPenetrationMod"];
	        break;
	      }
	      case "PercentAttackSpeedMod": {
	         stats["attackspeed"] += rune["PercentAttackSpeedMod"];
	         break;
	      }
	      case "FlatHPPoolMod": {
	         stats["health"] += rune["FlatHPPoolMod"];
	         break;
	      }
	      case "PercentPhysicalDamageMod": {
	         stats["health"] += rune["PercentPhysicalDamageMod"];
	         break;
	      }
	      case "FlatMagicDamageMod": {
	        stats["ablity"] += rune["FlatMagicDamageMod"];
	        break;
	      }
	      case "FlatMovementSpeedMod": {
	        stats["movementSpeed"] += rune["FlatMovementSpeedMod"];
	        break;
	      }
	      case "rPercentCooldownMod": {
	        stats["cooldown"] += rune["rPercentCooldownMod"];
	        break;
	      }
    }
}