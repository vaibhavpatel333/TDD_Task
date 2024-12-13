import { expect } from 'chai';
import { add } from '../stringCalculator.js';

describe('String Calculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).to.equal(0);
  });

  it('returns the number for a single number', () => {
    expect(add('1')).to.equal(1);
  });

  it('returns the sum of two numbers', () => {
    expect(add('1,5')).to.equal(6);
  });

  it('handles new lines between numbers', () => {
    expect(add('1\n2,3')).to.equal(6);
  });

  it('supports different delimiters', () => {
    expect(add('//;\n1;2')).to.equal(3);
  });

  it('throws an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).to.throw('negative numbers not allowed -2');
  });
});
