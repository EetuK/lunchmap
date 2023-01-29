import { describe, it, expect } from 'vitest';
import { arrayToStringArray, getQueryStringArray } from './routeStore';


describe('getQueryStringArray', () => {
  it('converts string array to array successfully', () => {
    expect(getQueryStringArray("[word1,word2,word 3]")).toStrictEqual(["word1", "word2", "word 3"]);
  });
  it('filters empty strings', () => {
    expect(getQueryStringArray("[,word1,word2,word 3]")).toStrictEqual(["word1", "word2", "word 3"]);
  })
  it('returns empty array if false string is provided', () => {
    expect(getQueryStringArray("[word1,")).toStrictEqual([]);
  });
  it('returns empty array if undefined', () => {
    expect(getQueryStringArray()).toStrictEqual([]);
  });
});

describe('arrayToStringArray', () => {
  it('converts array to string array successfully', () => {
    expect(arrayToStringArray(["word1", "word2", "word 3"])).toEqual("[word1,word2,word 3]");
  });
  it('filters empty strings', () => {
    expect(arrayToStringArray(["word1", "word2", "word 3", ""])).toEqual("[word1,word2,word 3]");
  })
  it('returns empty array if false string is provided', () => {
    expect(arrayToStringArray([])).toStrictEqual("[]");
  });
  it('returns empty array if undefined', () => {
    expect(arrayToStringArray()).toStrictEqual("[]");
  });
});
