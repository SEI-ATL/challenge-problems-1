/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

let tryRequire = require('../utils/try_require.js');
let assert = require('assert');

let power = tryRequire('../problems/1_power.js');
let removeNthLetter = tryRequire('../problems/2_remove_nth_letter.js');
let nickname = tryRequire('../problems/3_nickname.js');
let oddOnesOut = tryRequire('../problems/4_odd_ones_out.js');
let greatestCommonFactor = tryRequire('../problems/5_greatest_common_factor.js');
let jump = tryRequire('../problems/6_debug_1.js');
let unique = tryRequire('../problems/7_debug_2.js');

describe('power()', function () {
    it('should return base to the power of exp', function () {
        assert.equal(power(2, 5), 32);
        assert.equal(power(2, 10), 1024);
        assert.equal(power(9, 2), 81);
        assert.equal(power(9, 3), 729);
        assert.equal(power(11, 0), 1);
        assert.equal(power(11, 1), 11);
    });
});
  
describe('removeNthLetter()', function () {
  it('should return the given string with the nth letter removed', function () {
    assert.equal(removeNthLetter('bootcamp', 0), 'ootcamp');
    assert.equal(removeNthLetter('bootcamp', 6), 'bootcap');
    assert.equal(removeNthLetter('bootcamp', 4), 'bootamp');
    assert.equal(removeNthLetter('computer', 3), 'comuter');
  });
});

describe('greatestCommonFactor()', function () {
  it('should return the greatest common factor between num1 and num2', function () {
    assert.equal(greatestCommonFactor(6, 10), 2);
    assert.equal(greatestCommonFactor(10, 15), 5);
    assert.equal(greatestCommonFactor(4, 7), 1);
    assert.equal(greatestCommonFactor(4, 8), 4);
    assert.equal(greatestCommonFactor(45, 30), 15);
  });
});


describe('nickname()', function () {
  it('should return a nickname string', function () {
    assert.equal(nickname('manuel'), 'MANU-MANU');
    assert.equal(nickname('pikachu'), 'PIKA-PIKA');
    assert.equal(nickname('bootcamp'), 'BOO-BOO');
    assert.equal(nickname('bob'), 'BOB-BOB');
  });
});

describe('oddOnesOut()', function () {
  it('should return an array of elements that appear in the given array an even number of times', function () {
    let arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd'];
    let arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog'];

    assert.deepEqual(oddOnesOut(arr1), [ 'b', 'd' ]);
    assert.deepEqual(oddOnesOut(arr2), [ 'fish' ]);
  });
});

describe('debug1()', function () {
    it('should return a string indicating how high the person is jumping', function () {
      assert.equal(jump(5), "I'm jumping 5 feet high!");
      assert.equal(jump(12), "I'm jumping 12 feet high!");
    });
  });
  
  
describe('debug2()', function () {
    it('should return an array of unique numbers', function () {
      let arr = unique([1,23,2,4,5,1,23]);
      let result = [1, 23, 2, 4, 5];
  
      assert.deepEqual(arr, result);
    });
});