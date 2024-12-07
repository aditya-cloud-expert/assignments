/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length ) return false;

  let m = new Map();

  for(let i = 0 ; i < str1.length ; i++)
  {
    if(m.find(str1[i]))
    {
      m[str1[i]]+=1
    }
    else
    {
      m[str1[i]] = 1;
    }
  }

  for(let i = 0 ; i < str2.length ; i++)
    {
      if(m.find(str1[i]))
      {
        m[str1[i]]+=1
      }
      else
      {
        m[str1[i]] = 1;
      }
    }
}

module.exports = isAnagram;
