/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let s = new Set();
    s.add('a')
    s.add('e')
    s.add('i')
    s.add('o')
    s.add('u')
    s.add('A')
    s.add('E')
    s.add('I')
    s.add('O')
    s.add('U')
    let count = 0;
    for(let i = 0 ; i < str.length ; i++)
    {
      if(s.has(str[i]))
      {
        count++;
      }
    }

    return count;
    //console.log(s)
}

countVowels("Abc");

module.exports = countVowels;