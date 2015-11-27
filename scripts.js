// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    return array.sort()[array.length - 1]
  },
  
  reversed: function(inputString){  
    var result = [];
    for (var i = 0; i < inputString.length; i++) {
      result[i] = inputString[(inputString.length - 1 - i)];
    }
    return result.join("");
  },

  loudSnakeCase: function(inputString){  
    splitInput = inputString.split(" ");
    result = [];

    // first remove extra spaces
    for (var i = 0; i < splitInput.length; i++) {
      if (splitInput[i] != "") {
        result.push(splitInput[i]);
      }
    }

    // remove punctuation
    var removePunctuation = function(string) {
      var last = string[string.length - 1];
      if (last == "." || last == "," || last == "!") {
        var result = string.slice(0, string.length - 1);
        return result;
      }
      return string;
    }

    for (var i = 0; i < result.length; i++) {
      result[i] = removePunctuation(result[i]);
    }

    // capitalize first letter
    var cap = function(string) {
      var result = string.split("")
      result[0] = string[0].toUpperCase();
      return result.join("");
    }

    for (var i = 0; i < result.length; i++) {
      result[i] = cap(result[i]);
    }

    // join with underscore
    return result.join("_");
  },

  compareArrays: function(arr1, arr2){ 
    if (arr1.length != arr2.length) {
      return false;
    } 

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }

    return true;
  },

  fizzBuzz: function(num){  
    var result = [];

    for (var i = 1; i <= num; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        result.push("FIZZBUZZ");
      } else if (i % 3 == 0) {
        result.push("FIZZ");
      } else if (i % 5 ==0) {
        result.push("BUZZ");
      } else {
        result.push(i);
      }
    }

    return result;
  },

  myMap: function(array, myFunction){  
    var result = [];

    for (var i = 0; i < array.length; i++) {
      result.push( myFunction.call(undefined, array[i]) );
    }

    return result
  },

  primes: function(num){  
    result = [];

    // check if a number is prime
    var isPrime = function(checkNum) {
      for (var i = 2; i <= Math.sqrt(checkNum); i++) {
        if (checkNum % i == 0) {
          return false;
        }
      }
      return true;
    }

    // if a number is prime push into results
    for (var i = 2; i < num; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }

    return result;
  },
}