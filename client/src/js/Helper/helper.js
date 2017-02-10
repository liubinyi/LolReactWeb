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
	        stats["magicResistance"] =  stats["magicResistance"] * (1 + rune[tag]) * count;
	        return stats;
	      }
	      case "rPercentArmorPenetrationMod": {
	        stats["armorPeneration"] = stats["armorPeneration"] * (1 + rune[tag]) * count;
	       return stats;
	      }
	      case "PercentHPPoolMod": {
	        stats["health"] += rune["health"] * count;
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
	        stats["movementSpeed"] = stats["movementSpeed"] * (1 + rune["PercentMovementSpeedMod"])* count;
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
	        stats["ablity"] = stats["ablity"] * (1 + rune["PercentMagicDamageMod"]) * count;
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
	         stats["health"] += rune["PercentPhysicalDamageMod"] * count;
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
    }
    return stats;
}



