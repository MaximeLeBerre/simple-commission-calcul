const {getCommissionSurVente} = require("./index");
const { describe, test, expect} = require('@jest/globals')
describe('calcul % of commission according CA', () => {
    test('998 should return 0', () => {
        expect(getCommissionSurVente(998)).toBe(0)

    });
    test('1280 should return 0.15', () => {
        expect(getCommissionSurVente(1280)).toBe(0.15)
    });
    test('2001 should return 0.15', () => {
        expect(getCommissionSurVente(2001)).toBe(0.20)
    });
})