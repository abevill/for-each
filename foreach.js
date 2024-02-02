function doubleValues(arr) {
  return arr.map(value => value * 2);
}
function onlyEvenValues(arr) {
    return arr.filter(value => value % 2 === 0);
  }
  function showFirstAndLast(arr) {
    return arr.map(string => [string.charAt(0), string.charAt(string.length - 1)]);
  }
  function addKeyAndValue(arr, key, value) {
    return arr.map(obj => ({ ...obj, [key]: value }));
  }
  function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (vowels.includes(char)) {
        count[char] = (count[char] || 0) + 1;
      }
    }
    return count;
  }
  function doubleValuesWithMap(arr) {
    return arr.map(value => value * 2);
  }
  function valTimesIndex(arr) {
    return arr.map((value, index) => value * index);
  }
  function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
  }
  function extractFullName(arr) {
    return arr.map(obj => `${obj.first} ${obj.last}`);
  }
  function filterByValue(arr, key) {
    return arr.filter(obj => obj[key]);
  }
  function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return arr[i];
      }
    }
    return undefined;
  }
  function findInObj(arr, key, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] === value) {
        return arr[i];
      }
    }
    return undefined;
  }
  function removeVowels(str) {
    const withoutVowels = str.replace(/[aeiou]/g, '');
    return withoutVowels.toLowerCase();
  }
  function doubleOddNumbers(arr) {
    return arr.filter(value => value % 2 !== 0).map(value => value * 2);
  }
    