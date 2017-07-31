/* eslint-env mocha */
import {assert} from 'chai';
import * as Utils from './dateUtils';

describe('Date Utils', () => {
  describe('getWeekArray', () => {
    it('leading month padded with nulls', () => {
      const date = new Date(1498867200000); // Sat, 01 July 2017 00:00:00 GMT
      const weekArray = Utils.getWeekArray(date, 1);

      const firstWeek = weekArray[0];

      // A week should have 7 days
      assert.strictEqual(firstWeek.length, 7);

      // Verify null days from leading month
      assert.strictEqual(firstWeek.filter(((day) => day === null)).length, 5);
    });

    it('trailing month padded with nulls', () => {
      const date = new Date(1498867200000); // Sat, 01 July 2017 00:00:00 GMT
      const weekArray = Utils.getWeekArray(date, 1);

      const lastWeek = weekArray[5];

      // A week should have 7 days
      assert.strictEqual(lastWeek.length, 7);

      // Verify null days from trailing month
      assert.strictEqual(lastWeek.filter(((day) => day === null)).length, 6);
    });
  });
});
