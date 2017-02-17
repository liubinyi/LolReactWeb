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


//PercentHPPoolMod
//rFlatMagicPenetrationMod
//PercentCritDamageMod
//rPercentMagicPenetrationMod
//PercentLifeStealMod
//rFlatArmorPenetrationMod
//PercentPhysicalDamageMod

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
	//by percent
	let tag = "FlatHPPoolMod";
	let stats = {"health": 340};
	let rune = {"FlatHPPoolMod": 6.25}
	let count = 2
	let newStats = {"health": 352.5}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag FlatMagicDamageMod', ()=> {
	//by percent
	let tag = "FlatMagicDamageMod";
	let stats = {"ablity": 7};
	let rune = {"FlatMagicDamageMod": 2.5}
	let count = 4
	let newStats = {"ablity": 17}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})

test('get rune page status by tag FlatMovementSpeedMod', ()=> {
	//by percent
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