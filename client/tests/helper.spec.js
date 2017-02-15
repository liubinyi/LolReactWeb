import {NullToZero, applyPercentageItemEffect,applyFlatItemEffect} from "../src/js/Helper/helper";

test('convert null to zero', () => {
	expect(NullToZero(null)).toBe(0)
})

test('apply Percent effect to a item', () => {
	expect(applyPercentageItemEffect(10, 0.5)).toBe(15)
})


test('apply Flat effect to a item', () => {
	expect(applyFlatItemEffect(15, 20)).toBe(35)
})