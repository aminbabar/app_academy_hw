

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb} the ${adjective} ${noun}`);
}

// madLib('make', 'best', 'guac');


function isSubstring(sentence, word) {
    return sentence.includes(word)
}

// console.log(isSubstring("time to program", "time"));
// true

// console.log(isSubstring("Jump for joy", "joys"));
// false


function fizzBuzz(array) {
    let arr = [];
    for (i=0; i < array.length; i++) {
        if (array[i] % 3 === 0 || array[i] % 5 === 0 ) {
            arr.push(array[i]);
        }
    }

    return arr
}

// console.log(fizzBuzz([1,2,3,4,5]));


function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// console.log(isPrime(2));
// // true

// console.log(isPrime(10));
// // false

// console.log(isPrime(15485863));
// // true

// console.log(isPrime(3548563));
// // false



function sumOfNPrimes(n) {
    let sum = 0;
    firstNPrimes(n).forEach(el => {
        sum += el;
    });
    return sum;
}

function firstNPrimes(n) {
    let arr = [];
    let i = 2;
    while (arr.length < n) {

        if (isPrime(i)) {
            arr.push(i);
        }
        i += 1;
    }
    return arr;
}

// console.log(sumOfNPrimes(0));
// // 0

// console.log(sumOfNPrimes(1));
// // 2

// console.log(sumOfNPrimes(4));
// // 17
