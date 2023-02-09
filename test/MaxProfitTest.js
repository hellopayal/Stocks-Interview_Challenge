import MaxProfit from "../src/MaxProfit.js";
import { strict as assert } from 'assert';

describe("MaxProfit", () => {
     it('should return 0 profit when empty price is passed', () => {
          assert.equal(0, MaxProfit(""));
     });

     it('should throw error when invalid input is passed', () => {
          assert.throws(
               () => MaxProfit(),
               /^Error: Invalid Input$/
          );
     });

     it('should throw error when negative prices are passed', () => {
          assert.throws(
               () => MaxProfit("-1, 3, 4, 2, 8"),
               /^Error: invalid price$/
          );
     });


     it('should throw error when 0 is passed in as a price', () => {
          assert.throws(
               () => MaxProfit("5, 3, 0, 2, 8"),
               /^Error: invalid price$/
          );
     });

     it('should return max profit when valid prices are passed', () => {
          assert.equal(5, MaxProfit("7, 1, 5, 3, 6, 4"));
     });

});