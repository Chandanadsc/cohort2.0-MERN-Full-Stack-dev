/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count=0;
    let str1= str.split('');
    for(let i=0;i<str1.length;i++)
    {
      let a= str1[i];
      switch(a){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
      //    case 'A':
      //   case 'E':
      //   case 'I':
      //  case 'O':
      //  case 'U':
      // I am just testing my memory if I could actually remember the YT lecture that I watched lont time ago.
      // this is f similar to C lang
          count++;
          break;

      }
    }
    return count;
}

console.log("The number of vowels in the given string is "+countVowels("Chandana"));

