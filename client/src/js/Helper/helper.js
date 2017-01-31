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
	  switch (tag) {
	      case "FlatSpellBlockMod": {
	       
	      }
	      case "PercentMPRegenMod": {
	        
	      }
	      case "PercentSpellBlockMod": {
	        
	      }
	      case "rPercentArmorPenetrationMod": {
	        
	      }
	      case "PercentHPPoolMod": {
	        
	      }
	      case "rFlatMagicPenetrationMod": {
	        
	      }
	      case "PercentCritDamageMod": {
	        
	      }
	      case "PercentCritChanceMod": {
	        
	      }
	      case "rPercentMagicPenetrationMod": {
	        
	      }
	      case "FlatArmorMod": {
	        
	      }
	      case "PercentMovementSpeedMod": {
	        
	      }
	      case "PercentLifeStealMod": {
	        
	      }
	      case "FlatPhysicalDamageMod": {
	        
	      }
	      case "FlatMPPoolMod": {
	        
	      }
	      case "PercentMagicDamageMod": {
	        
	      }
	      case "rFlatArmorPenetrationMod": {
	        
	      }
	      case "PercentArmorMod": {
	        
	      }
	      case "FlatCritDamageMod": {
	        
	      }
	      case "PercentAttackSpeedMod": {
	        
	      }
	      case "FlatHPPoolMod": {
	        
	      }
	      case "FlatAttackSpeedMod": {
	        
	      }
	      case "FlatBlockMod": {
	        
	      }
	      case "FlatCritChanceMod": {
	        
	      }
	      case "PercentPhysicalDamageMod": {
	        
	      }
	      case "FlatMagicDamageMod": {
	        
	      }
	      case "FlatMovementSpeedMod": {
	        
	      }
	      case "rPercentCooldownMod": {
	        
	      }
    }
}