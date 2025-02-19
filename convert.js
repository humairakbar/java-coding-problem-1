// 12 inches 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// const shubhoHeight = inchToFeet(75);
// console.log(shubhoHeight);

// Ignore this one

function inchToFeet2(inch){
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inches ";
    return result;
}

const shubhoHeight = inchToFeet2(75);
console.log(shubhoHeight);