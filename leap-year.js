/**
 * SIMPLE Logic
 * Year will be a leap year if the year is divisible by 4
 */

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLippi = isLeapYear(2044);
console.log(isLippi);

/**
 * But there's a bit problem
 * 1/ Those years that are not divisible by 100 but by only 4 those are leap year
 * 2/ Those years that are divisible by 400 are also leap years
 */

function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLippi2 = isLeapYear2(2100);
const isLippi3 = isLeapYear2(2400);
const isLippi4 = isLeapYear2(2000);
console.log(isLippi2, isLippi3, isLippi4);