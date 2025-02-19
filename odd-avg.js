/**
 * Function takes an array as parameter
 * Give the average of odd numbers in the array
 */

/**
 * Solution 1
 * Put odd numbers is an array
 */

function oddAverage(numbers){
    const odd = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odd.push(number);
        }
    }
    // odd is the array that only contains the odd numbers
    // console.log(odd);
    let sum = 0;
    for(const number of odd){
        sum = sum + number;
    }
    const count = odd.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;

}

const numbers = [23, 34, 55, 67, 24];
const avg = oddAverage(numbers);
console.log("Average of odd number in the array is : ", avg);