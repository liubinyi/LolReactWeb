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
	 //         need to generate stats base on this swtich statement
	 // 		"FlatSpellBlockMod": 0,
 	 //         "PercentMPRegenMod": 0,
	 //         "rFlatSpellBlockModPerLevel": 0,
	 //         "rFlatArmorModPerLevel": 0,
	 //         "PercentPhysicalDamageMod": 0,
	 //         "FlatCritChanceMod": 0,
	 //         "PercentSpellBlockMod": 0,
	 //         "rFlatTimeDeadModPerLevel": 0,
	 //         "rFlatMagicDamageModPerLevel": 0,
	 //         "rFlatHPModPerLevel": 0,
	 //         "rPercentMovementSpeedModPerLevel": 0,
	 //         "FlatEXPBonus": 0,
	 //         "FlatMPRegenMod": 0,
	 //         "rFlatHPRegenModPerLevel": 0,
	 //         "FlatBlockMod": 0,
	 //         "PercentEXPBonus": 0,
	 //         "FlatEnergyPoolMod": 0,
	 //         "rFlatEnergyRegenModPerLevel": 0,
	 //         "rFlatGoldPer10Mod": 0,
	 //         "FlatAttackSpeedMod": 0,
	 //         "FlatHPPoolMod": 0,
	 //         "PercentAttackSpeedMod": 0,
	 //         "rFlatDodgeMod": 0,
	 //         "rFlatMPRegenModPerLevel": 0,
	 //         "rPercentTimeDeadMod": 0,
	 //         "FlatEnergyRegenMod": 0,
	 //         "PercentSpellVampMod": 0,
	 //         "FlatCritDamageMod": 0,
	 //         "rFlatMovementSpeedModPerLevel": 0,
	 //         "PercentHPRegenMod": 0,
	 //         "rPercentArmorPenetrationModPerLevel": 0,
	 //         "PercentArmorMod": 0,
	 //         "rFlatMPModPerLevel": 0,
	 //         "rFlatArmorPenetrationMod": 0,
	 //         "PercentBlockMod": 0,
	 //         "PercentMagicDamageMod": 0,
	 //         "FlatMPPoolMod": 0,
	 //         "FlatPhysicalDamageMod": 0,
	 //         "rFlatPhysicalDamageModPerLevel": 0,
	 //         "rFlatTimeDeadMod": 0,
	 //         "FlatHPRegenMod": 0,
	 //         "rFlatCritDamageModPerLevel": 0,
	 //         "rFlatCritChanceModPerLevel": 0,
	 //         "rFlatDodgeModPerLevel": 0,
	 //         "rPercentMagicPenetrationModPerLevel": 0,
	 //         "PercentLifeStealMod": 0,
	 //         "PercentMovementSpeedMod": 0,
	 //         "FlatArmorMod": 0,
	 //         "rFlatEnergyModPerLevel": 0,
	 //         "rPercentMagicPenetrationMod": 0,
	 //         "rPercentTimeDeadModPerLevel": 0,
	 //         "PercentMPPoolMod": 0,
	 //         "PercentDodgeMod": 0,
	 //         "PercentCritChanceMod": 0,
	 //         "PercentCritDamageMod": 0,
	 //         "rPercentAttackSpeedModPerLevel": 0,
	 //         "rFlatMagicPenetrationMod": 0,
	 //         "PercentHPPoolMod": 0,
	 //         "rPercentArmorPenetrationMod": 0,
	 //         "rFlatMagicPenetrationModPerLevel": 0,
	 //         "rFlatArmorPenetrationModPerLevel": 0,
	 //         "rPercentCooldownModPerLevel": 0,
	 //         "FlatMagicDamageMod": 0,
	 //         "FlatMovementSpeedMod": 0,
	 //         "rPercentCooldownMod": 0
}