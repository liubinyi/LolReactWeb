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
	let stats = {"magicResistance": 1};
	let rune = {"PercentSpellBlockMod": 0.2}
	let count = 2
	let newStats = {"magicResistance": 2.4}
	expect(helper.GetSingleRunePageStatsDetails(tag, stats, rune, count)).toMatchObject(newStats);

})