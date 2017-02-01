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

export function GetSingleRunePageStatsDetails(tag) {
	  //set up swtich statement
	  let stats = {
	  	"health" : 0,
	  	"ablity" : 0,
	  	"damage" : 0,
	  	"attackspeed" : 0,
	  	"cooldown": 0,
	  	"armor": 0,
	  	"magicPeneration": 0,
	  	"armorPeneration": 0,
	  	"critDamage" : 0,
	  	"critChance" : 0,
	  	"movementSpeed" : 0,
	  	"lifeSteal" : 0
	  }

	  switch (tag) {
	      case "FlatSpellBlockMod": {
	       //stats[""] = ?
	      }
	      case "PercentMPRegenMod": {
	        //stats[""] = ?
	      }
	      case "PercentSpellBlockMod": {
	        //stats[""] = ?
	      }
	      case "rPercentArmorPenetrationMod": {
	        //stats["armorPeneration"] = ?
	      }
	      case "PercentHPPoolMod": {
	        //stats["health"] = ?
	      }
	      case "rFlatMagicPenetrationMod": {
	         //stats["magicPeneration"] = ?
	      }
	      case "PercentCritDamageMod": {
	         //stats["critDamage"] = ?
	      }
	      case "PercentCritChanceMod": {
	        //stats["critChance"] = ?
	      }
	      case "rPercentMagicPenetrationMod": {
	         //stats["magicPeneration"] = ?
	      }
	      case "FlatArmorMod": {
	         //stats["armor"] = ?
	      }
	      case "PercentMovementSpeedMod": {
	         //stats["movementSpeed"] = ?
	      }
	      case "PercentLifeStealMod": {
	         //stats["lifeSteal"] = ?
	      }
	      case "FlatPhysicalDamageMod": {
	         //stats["damage"] = ?
	      }
	      case "PercentMagicDamageMod": {
	        //stats["ablity"] = ?
	      }
	      case "rFlatArmorPenetrationMod": {
	         //stats["armorPeneration"] = ?
	      }
	      case "FlatCritDamageMod": {
	        
	      }
	      case "PercentAttackSpeedMod": {
	         //stats["attackspeed"] = ?
	      }
	      case "FlatHPPoolMod": {
	         ////stats["health"] = ?
	      }
	      case "FlatBlockMod": {
	        
	      }
	      case "PercentPhysicalDamageMod": {
	        
	      }
	      case "FlatMagicDamageMod": {
	        //stats["ablity"] = ?
	      }
	      case "FlatMovementSpeedMod": {
	        //stats["movementSpeed"] = ?
	      }
	      case "rPercentCooldownMod": {
	        //stats["cooldown"] = ?
	      }
    }
}