import _ from 'lodash';

export function RenderIf() {
	return predicate => element => predicate && element;
}

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

export function NullToZero(obj) {
	if (obj == null) {
		return 0;
	}
	return obj;
}

export function GetSingleRunePageStatsDetails(tag, stats,rune, count) {
	  switch (tag) {
	      case "FlatSpellBlockMod": {
	        stats["magicResistance"] += rune[tag] * count;
	        return stats;
	      }
	      case "PercentSpellBlockMod": {
	        stats["magicResistance"] =  stats["magicResistance"] * (1 + rune[tag]* count);
	        return stats;
	      }
	      case "rPercentArmorPenetrationMod": {
	        stats["armorPeneration"] = stats["armorPeneration"] * (1 + rune[tag] * count);
	       return stats;
	      }
	      case "PercentHPPoolMod": {
	        stats["percentHealth"] += rune["PercentHPPoolMod"] * count * 100;
	       return stats;
	      }
	      case "rFlatMagicPenetrationMod": {
	        stats["magicPeneration"] += rune["magicPeneration"]* count;
	       return stats;
	      }
	      case "PercentCritDamageMod": {
	        stats["critDamage"] += rune["PercentCritDamageMod"] * count;
	       return stats;
	      }
	      case "PercentCritChanceMod": {
	        stats["critChance"] += rune["PercentCritChanceMod"] * count;
	       return stats;
	      }
	      case "rPercentMagicPenetrationMod": {
	        stats["magicPeneration"] += rune["rPercentMagicPenetrationMod"] * count;
	       return stats;
	      }
	      case "FlatArmorMod": {
	        stats["armor"] += rune["FlatArmorMod"] * count;
	       return stats;
	      }
	      case "PercentMovementSpeedMod": {
	        stats["movementSpeed"] = stats["movementSpeed"] * (1 + rune["PercentMovementSpeedMod"] * count);
	       return stats;
	      }
	      case "PercentLifeStealMod": {
	        stats["lifeSteal"] += rune["PercentLifeStealMod"] * count;
	       return stats;
	      }
	      case "FlatPhysicalDamageMod": {
	        stats["damage"] += rune["FlatPhysicalDamageMod"] * count;
	       return stats;
	      }
	      case "PercentMagicDamageMod": {
	        stats["ablity"] = stats["ablity"] * (1 + rune["PercentMagicDamageMod"] * count);
	       return stats;
	      }
	      case "rFlatArmorPenetrationMod": {
	        stats["armorPeneration"] += rune["rFlatArmorPenetrationMod"] * count;
	       return stats;
	      }
	      case "PercentAttackSpeedMod": {
	         stats["attackspeed"] += rune["PercentAttackSpeedMod"] * count * 100;
	        return stats;
	      }
	      case "FlatHPPoolMod": {
	         stats["health"] += rune["FlatHPPoolMod"] * count;
	        return stats;
	      }
	      case "PercentPhysicalDamageMod": {
	         stats["PercentPhysicalDamageMod"] += rune["PercentPhysicalDamageMod"] * count;
	        return stats;
	      }
	      case "FlatMagicDamageMod": {
	        stats["ablity"] += rune["FlatMagicDamageMod"] * count;
	       return stats;
	      }
	      case "FlatMovementSpeedMod": {
	        stats["movementSpeed"] += rune["FlatMovementSpeedMod"] * count;
	       return stats;
	      }
	      case "rPercentCooldownMod": {
	        stats["cooldown"] += rune["rPercentCooldownMod"] * count * 100;
	       return stats;
	      }
	      case "rFlatArmorModPerLevel": {
	      	stats["ArmorPerLevel"] += rune["rFlatArmorModPerLevel"] * count;
	        return stats;
	      }
	      case "rFlatCritChanceModPerLevel": {
	      	stats["CritChancePerLevel"] += rune["rFlatCritChanceModPerLevel"] * count * 100;
	        return stats;
	      }
	      case "rFlatCritDamageModPerLevel": {
	      	stats["CritDamagePerLevel"] += rune["rFlatCritDamageModPerLevel"] * count * 100;
	        return stats;
	      }
	      case "rFlatHPModPerLevel": {
	      	stats["HealthPerLevel"] += rune["rFlatHPModPerLevel"] * count;
	        return stats;
	      }
	      case "rFlatMagicDamageModPerLevel": {
	      	stats["MagicDamagePerLevel"] += rune["rFlatMagicDamageModPerLevel"] * count;
	        return stats;
	      }
	      case "rFlatMagicPenetrationModPerLevel": {
	      	stats["MagicPenetrationPerLevel"] += rune["rFlatMagicPenetrationModPerLevel"] * count;
	        return stats;
	      }
	      case "rFlatMovementSpeedModPerLevel": {
	      	stats["MovementSpeedPerLevel"] += rune["rFlatMovementSpeedModPerLevel"] * count;
	        return stats;
	      }
	      case "rFlatPhysicalDamageModPerLevel": {
	      	stats["PhysicalDamagePerLevel"] += rune["rFlatPhysicalDamageModPerLevel"] * count;
	        return stats;
	      }
	      case "rPercentAttackSpeedModPerLevel": {
	      	stats["AttackSpeedPercentPerLevel"] += rune["rPercentAttackSpeedModPerLevel"] * count;
	        return stats;
	      }
	      case "rPercentCooldownModPerLevel": {
	      	stats["CooldownPercentPerLevel"] += rune["rPercentCooldownModPerLevel"] * count;
	        return stats;
	      }
	      case "rPercentMagicPenetrationModPerLevel": {
	      	stats["MagicPenetrationPercentPerLevel"] += rune["rPercentMagicPenetrationModPerLevel"] * count;
	        return stats;
	      }
	      case "rPercentMovementSpeedModPerLevel": {
	      	stats["MovementSpeedPercent"] += rune["rPercentMovementSpeedModPerLevel"] * count;
	        return stats;
	      }
    }
    return stats;
}



