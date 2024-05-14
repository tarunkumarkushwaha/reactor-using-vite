let str = "how to add translate button on to website you are making";
let parstr = "race car"
let arr
let word = "rationalIsation"
let numarr = [1, 1, 2, 5, 3, 4, 9, 6, 1, 0, 7, 8, 9, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, -5]
let numarr2 = [1, 2, 4, 8, 1, 2, 2]
let numarr3 = [10, 20, 30, 40]

//please include any new function in function array last included was repeatationcheck

const repetationCheck = (array) => {
  let output = {}
  for (const element of new Set([...array])) {
    output[element] = array.filter(item => item == element).length
  }
  return output
}

// console.log(repetationCheck(numarr2))

const medianCalculator = (numarray) => {
  let median = 0
  if (numarray.length % 2 == 0) {
    let index1 = parseInt((numarray.length - 1) / 2)
    let index2 = index1 + 1
    median = (numarray[index1] + numarray[index2]) / 2
  } else {
    let index = (numarray.length - 1) / 2
    median = numarray[index]
  }
  return median
}

// console.log(medianCalculator(numarr3))

const meanCalculator = (numarray) => {
  if (numarray.every((item) => typeof item == "string" ? false : true)) {
    return (numarray.reduce((acc, curr) => acc + (+curr), 0)) / numarray.length
  }
}

// console.log(meanCalculator(numarr3))

const stringReverser = (str) => {
  if (!str || str.length <= 0) { return false }
  let str1 = str.toLowerCase().trim().split("")
  let str2 = []
  for (let index = str1.length - 1; index >= 0; index--) {
    str2.push(str1[index])
  }
  return str2.join('')
}

// console.log(stringReverser(word))

const IsUpperCaseOrLOwerCase = (char) => {
  if (!char || char.length > 1) { return false }
  // if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
  //   return "is upper case"
  // }
  // else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
  //   return "is lower case"
  // } 
  // or 
  if (char.trim() == char.toUpperCase()) {
    return "is upper case"
  }
  if (char.trim() == char.toLowerCase()) {
    return "is lower case"
  }
  else { return "is not alphabet" }
}

// console.log(IsUpperCaseOrLOwerCase("z"))

const convertToCamelCase = (str) => {
  if (!str || str.length <= 0) { return false }
  let str1 = str.toLowerCase().trim().split(" ")
  return str1.map(item => item[0].toUpperCase() + item.slice(1)).join('')
}

// console.log(convertToCamelCase(str))

const sumSquareAllArrayElements = (numArr) => {
  if (numArr.every((item) => typeof item == "string" ? false : true)) {
    // return numArr.reduce((acc, item, index) => {
    //   if (index <= (numArr.length - 1)) {
    //     acc += (item*item)
    //   }
    //   return acc
    // }, 0)

    // or  

    let sum = 0
    for (let i of numArr) {
      sum += i * i
    }
    return sum
  }
  else { return "numm arr has string" }
}

// console.log(sumSquareAllArrayElements(numarr3))

const ispowerof2 = (num) => {
  return num <= 0 ? false : num.toString(2).split('').map(item => parseInt(item)).filter((i) => i == 1).length == 1
}

// console.log(ispowerof2(7))
// console.log(ispowerof2(8))
// console.log(ispowerof2(0))

const vowelcheck = (str) => {
  if (!str || str.length <= 0) { return false }
  let str1 = str.toLowerCase().trim().split(" ")
  return str1.reduce((acc, curr) => {
    if (curr[0] === "a" || curr[0] === "e" || curr[0] === "i" || curr[0] === "o" || curr[0] === "u") {
      // acc = acc + 1
      acc += 1
    }
    return acc
  }, 0)
}

// console.log(vowelcheck(str))

const sumofd = (num) => {
  let numdigit = num.toString().split("")
  // return numdigit.reduce((acc,curr) => acc + (+curr),0)
  let sum = 0
  numdigit.forEach((item) => sum = sum + (+item))
  return sum
}

// console.log(sumofd(55550))

const arrayEqualityCheck = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  // for(let i = 0; i < arr1.length; i++){
  //   if(arr1[i] !== arr2[i]) return false;
  // }
  // return true;

  return arr1.every((item, i) => item == arr2[i])
}
// console.log(arrayEqualityCheck(numarr3, numarr2))

const factorialCalculator = (num) => {
  if (num === 0) {
    return 1
  }
  else {
    let result = num
    for (let i = 1; i < num; i++) {
      result = result * (num - i)
    }
    return result
  }
}

// console.log(factorialCalculator(5))


const checkMax = (numarray) => {
  if (numarray.length <= 0) { return "array empty" }
  if (numarray.every((item) => typeof item == "string" ? false : true)) { return "array has string" }
  // let maxno = numarray.sort((a,b) => b-a)
  //   return maxno[0]
  return Math.max(...numarray)
}

// console.log(checkMax(numarr))

const checkMin = (numarray) => {
  if (numarray.length <= 0) { return "array empty" }
  if (numarray.every((item) => typeof item == "string" ? false : true)) { return "array has string" }
  let minno = numarray.sort((a, b) => a - b)
  return minno[0]
  // return Math.min(...numarray)
}

// console.log(checkMin(numarr))

const checkPalindrome = (str) => {
  if (!str || str.length <= 0) { return false }
  let str1 = str.toLowerCase().replace(/\W/g, "").trim()
  let str2 = str.toLowerCase().replace(/\W/g, "").trim().split(" ").reverse().join(" ")
  return str2 == str1
}

// console.log(checkPalindrome(parstr))

const checkTriangleType = (a, b, c) => {
  if (a == b && b == c) { return "equlateral tringle" }
  else if (a != b && b != c && a != c) { return "scalane tringle" }
  return "isosceles tringle"
}
// console.log(checkTriangleType(3,2,1))

const occuranceletter = (word, char) => {
  if (!word || word.length <= 0) { return false }
  let arr = word.toLowerCase().trim().split("")
  // let result = arr.reduce((acc,i)=>{if(i==char){
  //   acc++
  // }
  //    return acc                              
  //    },0)
  let result = arr.filter((i) => i == char).length
  return result
}

// console.log(occuranceletter(word,"a"))

const occuranceword = (str, char) => {
  if (!str || str.length <= 0 || str.length >= 280) { return false }
  let arr = str.trim().split(" ")
  let result = arr.filter((i) => i == char).length
  // console.log(str,char)
  return result
}

// console.log(occuranceword(str,"to"))

const hashgenerator = (str) => {
  if (!str) { return false }
  if (str.length <= 0 || str.length >= 280) { return false }
  let arr = str.trim().split(" ")
  arr = arr.map(item => {
    return item.slice(0, 1).toUpperCase().concat(item.slice(1))
    // return item.replace(item[0],item[0].toUpperCase())
  })
  arr.unshift("#")
  return arr.join("")
}

// console.log(hashgenerator(str))

const longestWordCheck = (str) => {
  if (!str) { return false }
  if (str.length <= 0) { return false }
  let arr = str.trim().split(" ");
  // let word =""
  // for(let i=0;i<arr.length;i++){
  //   if(word.length < arr[i].length){
  //     word = arr[i]
  //   }
  //   }
  // return word;
  return arr.sort((b, a) => a.length - b.length)[0]
}

// console.log(longestWordCheck(str))

const functionarray = [
  {
    name: "hashgenerator",
    inputs: ["string"],
    function: hashgenerator
  },
  {
    name: "check Palindrome",
    inputs: ["string"],
    function: checkPalindrome
  },
  {
    name: "longest Word finder",
    inputs: ["string"],
    function: longestWordCheck
  },
  {
    name: "occurance of word",
    inputs: ["sentance", "word"],
    function: occuranceword
  }
  ,
  // {
  //   name: "number repetation Check",
  //   inputs: ["num array"],
  //   function: repetationCheck
  // },
  {
    name: "median Calculator",
    inputs: ["num array"],
    function: medianCalculator
  },
  {
    name: "mean Calculator",
    inputs: ["num array"],
    function: meanCalculator
  },
  {
    name: "string Reverser",
    inputs: ["string"],
    function: stringReverser
  },
  // {
  //   name: "IsUpperCaseOrLOwerCase check",
  //   inputs: ["string"],
  //   function: IsUpperCaseOrLOwerCase
  // },
  {
    name: "convert To CamelCase",
    inputs: ["string"],
    function: convertToCamelCase
  },
  {
    name: "sum of Square numbers",
    inputs: ["num array"],
    function: sumSquareAllArrayElements
  },
  // {
  //   name: "is power of 2 check",
  //   inputs: ["number"],
  //   function: ispowerof2
  // },
  {
    name: "check no of vowel",
    inputs: ["string"],
    function: vowelcheck
  },
  {
    name: "sum of digits",
    inputs: ["number"],
    function: sumofd
  },
  // {
  //   name: "Equality Check",
  //   inputs: ["two array"],
  //   function: arrayEqualityCheck
  // },
  {
    name: "factorial Calculator",
    inputs: ["number"],
    function: factorialCalculator
  },
  {
    name: "check Max number",
    inputs: ["num array"],
    function: checkMax
  },
  {
    name: "check Min number",
    inputs: ["num array"],
    function: checkMin
  },
  {
    name: "check Triangle Type",
    inputs: ["num array"],
    function: checkTriangleType
  },
  // {
  //   name: "occurance of letter",
  //   inputs: ["two array"],
  //   function: occuranceletter
  // },
];


export default functionarray