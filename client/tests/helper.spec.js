import * as helper from "../src/js/Helper/helper";

test('convert null to zero', () => {
	expect(helper.NullToZero(null)).toBe(0);
})

test('apply Percent effect to a item', () => {
	expect(helper.applyPercentageItemEffect(10, 0.5)).toBe(15);
})

test('apply Flat effect to a item', () => {
	expect(helper.applyFlatItemEffect(15, 20)).toBe(35);
})

test('convert array to hash', () =>{
	let array = [{runeId:1234,runeSlotId:1},{runeId:1234,runeSlotId:2},{runeId:5678,runeSlotId:1}];
	let hash = {1234:2,5678:1};
	expect (helper.arrayToCountHash(array)).toMatchObject(hash);
})

test('get rune page status by tag flatSpellBlockMod', ()=> {
	let tag = "FlatSpellBlockMod";
	let stats = {"magicResistance": 0};
	let rune = {"FlatSpellBlockMod": 0.4}
	let count = 2
	let newStats = {"magicResistance": 0.8}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag percentSpellBlockMod', ()=> {
	let tag = "PercentSpellBlockMod";
	let stats = {"magicResistance": 0.1};
	let rune = {"PercentSpellBlockMod": 0.2}
	let count = 2
	let newStats = {"magicResistance": 0.13999999999999999}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})


test('get rune page status by tag PercentCritChanceMod', ()=> {
	let tag = "PercentCritChanceMod";
	let stats = {"critChance": 0.2};
	let rune = {"PercentCritChanceMod": 0.1}
	let count = 2
	let newStats = {"critChance": 0.4}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag FlatArmorMod', ()=> {
	let tag = "FlatArmorMod";
	let stats = {"armor": 30};
	let rune = {"FlatArmorMod": 1}
	let count = 6
	let newStats = {"armor": 36}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})


test('get rune page status by tag PercentMovementSpeedMod', ()=> {
	let tag = "PercentMovementSpeedMod";
	let stats = {"movementSpeed": 30};
	let rune = {"PercentMovementSpeedMod": 0.07}
	let count = 1
	let newStats = {"movementSpeed": 32.1}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})


test('get rune page status by tag FlatPhysicalDamageMod', ()=> {
	let tag = "FlatPhysicalDamageMod";
	let stats = {"damage": 60.3};
	let rune = {"FlatPhysicalDamageMod": 0.67}
	let count = 1
	let newStats = {"damage": 60.97}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})


test('get rune page status by tag PercentMagicDamageMod', ()=> {
	let tag = "PercentMagicDamageMod";
	let stats = {"ablity": 60};
	let rune = {"PercentMagicDamageMod": 0.02}
	let count = 6
	let newStats = {"ablity": 67.2}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag PercentAttackSpeedMod', ()=> {
	//by percent
	let tag = "PercentAttackSpeedMod";
	let stats = {"attackspeed": 0.0};
	let rune = {"PercentAttackSpeedMod": 0.02}
	let count = 2
	let newStats = {"attackspeed": 4}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag FlatHPPoolMod', ()=> {
	
	let tag = "FlatHPPoolMod";
	let stats = {"health": 340};
	let rune = {"FlatHPPoolMod": 6.25}
	let count = 2
	let newStats = {"health": 352.5}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag FlatMagicDamageMod', ()=> {

	let tag = "FlatMagicDamageMod";
	let stats = {"ablity": 7};
	let rune = {"FlatMagicDamageMod": 2.5}
	let count = 4
	let newStats = {"ablity": 17}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag FlatMovementSpeedMod', ()=> {

	let tag = "FlatMovementSpeedMod";
	let stats = {"movementSpeed": 325};
	let rune = {"FlatMovementSpeedMod": 1.5}
	let count = 5
	let newStats = {"movementSpeed": 332.5}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})


test('get rune page status by tag rPercentCooldownMod', ()=> {
	//by percent
	let tag = "rPercentCooldownMod";
	let stats = {"cooldown": 0};
	let rune = {"rPercentCooldownMod": 0.002}
	let count = 5
	let newStats = {"cooldown": 1}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})


test('get rune page status by tag rPercentMovementSpeedModPerLevel', ()=> {
	//by percent
	let tag = "rPercentMovementSpeedModPerLevel";
	let stats = {"MovementSpeedPercent": 0};
	let rune = {"rPercentMovementSpeedModPerLevel": 0.002}
	let count = 5
	let newStats = {"MovementSpeedPercent": 0.01}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rPercentMagicPenetrationModPerLevel', ()=> {

	let tag = "rPercentMagicPenetrationModPerLevel";
	let stats = {"MagicPenetrationPercentPerLevel": 0};
	let rune = {"rPercentMagicPenetrationModPerLevel": 0.003}
	let count = 4
	let newStats = {"MagicPenetrationPercentPerLevel": 0.012}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rPercentCooldownModPerLevel', ()=> {
	//by percent
	let tag = "rPercentCooldownModPerLevel";
	let stats = {"CooldownPercentPerLevel": 0};
	let rune = {"rPercentCooldownModPerLevel": 0.001}
	let count = 5
	let newStats = {"CooldownPercentPerLevel": 0.005}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rPercentAttackSpeedModPerLevel', ()=> {
	//by percent
	let tag = "rPercentAttackSpeedModPerLevel";
	let stats = {"AttackSpeedPercentPerLevel": 0};
	let rune = {"rPercentAttackSpeedModPerLevel": 0.002}
	let count = 10
	let newStats = {"AttackSpeedPercentPerLevel": 0.02}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatPhysicalDamageModPerLevel', ()=> {
	let tag = "rFlatPhysicalDamageModPerLevel";
	let stats = {"PhysicalDamagePerLevel": 0};
	let rune = {"rFlatPhysicalDamageModPerLevel": 0.95}
	let count = 8
	let newStats = {"PhysicalDamagePerLevel": 7.6}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatMovementSpeedModPerLevel', ()=> {
	let tag = "rFlatMovementSpeedModPerLevel";
	let stats = {"MovementSpeedPerLevel": 0};
	let rune = {"rFlatMovementSpeedModPerLevel": 3}
	let count = 2
	let newStats = {"MovementSpeedPerLevel": 6}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatMagicPenetrationModPerLevel', ()=> {
	let tag = "rFlatMagicPenetrationModPerLevel";
	let stats = {"MagicPenetrationPerLevel": 0};
	let rune = {"rFlatMagicPenetrationModPerLevel": 1}
	let count = 1
	let newStats = {"MagicPenetrationPerLevel": 1}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatMagicDamageModPerLevel', ()=> {
	let tag = "rFlatMagicDamageModPerLevel";
	let stats = {"MagicDamagePerLevel": 0.5};
	let rune = {"rFlatMagicDamageModPerLevel": 1.95}
	let count = 10
	let newStats = {"MagicDamagePerLevel": 20}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatHPModPerLevel', ()=> {
	let tag = "rFlatHPModPerLevel";
	let stats = {"HealthPerLevel": 0};
	let rune = {"rFlatHPModPerLevel": 0.95}
	let count = 8
	let newStats = {"HealthPerLevel": 7.6}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatCritDamageModPerLevel', ()=> {
	let tag = "rFlatCritDamageModPerLevel";
	let stats = {"CritDamagePerLevel": 0};
	let rune = {"rFlatCritDamageModPerLevel": 0.01}
	let count = 2
	let newStats = {"CritDamagePerLevel": 2}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatCritChanceModPerLevel', ()=> {
	let tag = "rFlatCritChanceModPerLevel";
	let stats = {"CritChancePerLevel": 0};
	let rune = {"rFlatCritChanceModPerLevel": 0.01}
	let count = 3
	let newStats = {"CritChancePerLevel": 3}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

test('get rune page status by tag rFlatArmorModPerLevel', ()=> {
	let tag = "rFlatArmorModPerLevel";
	let stats = {"ArmorPerLevel": 0};
	let rune = {"rFlatArmorModPerLevel": 0.5}
	let count = 8
	let newStats = {"ArmorPerLevel": 4}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);
})

//PercentHPPoolMod
//rFlatMagicPenetrationMod
//PercentCritDamageMod
//rPercentMagicPenetrationMod
//PercentLifeStealMod
//rFlatArmorPenetrationMod
//PercentPhysicalDamageMod


