/* eslint-env mocha */
import {assert} from 'chai';
import * as Utils from './dateUtils';

describe('Date Utils', () => {
  describe('getWeekArray', () => {
    it('pads previous month entries with nulls', () => {
      const date = new Date(1498867200000); // Sat, 01 July 2017 00:00:00 GMT
      const weekArray = Utils.getWeekArray(date, 1);

      const firstWeek = weekArray[0];

      // First week should have 7 days
      assert.strictEqual(firstWeek.length, 7);

      // Five days are from the previous month
      assert.strictEqual(firstWeek.filter(((day) => day === null)).length, 5);
    });
  });
});
