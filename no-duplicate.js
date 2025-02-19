/**
 * Array has duplicate elements
 */

const biriyani_khor = ['a', 'b', 'd', 'c', 'a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyani_khor);
console.log(uniqueArray);