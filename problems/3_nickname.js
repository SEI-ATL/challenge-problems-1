/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('engineer'); // => 'ENGI-ENGI'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/

function nickname(name) {
    let vowels = 'AEIOUaeiou'.split('');
    let vowelCount = 0;
  
    for (var i = 0; i < name.length; i += 1) {
      let char = name[i];
  
      if (vowels.indexOf(char) > -1) {
        vowelCount += 1;
        if (vowelCount === 2) {
          break;
        }
      }
    }
  
    let str = name.slice(0, i + 1).toUpperCase();
    return str + '-' + str;
  }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nickname;
