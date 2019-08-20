const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;
});

beforeEach(() => {
    mortgage = new Mortgage();
});

it('should have a constructor function', () => {
    expect(mortgage.constructor).to.exist;
});

it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
});
