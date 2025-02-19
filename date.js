const today = new Date();
const date = new Date('2026-10-09');
console.log(date);
console.log(date.getDate());
console.log(date.getMonth());
const specifitDate = new Date(2091, 0, 26);
console.log(specifitDate);
specifitDate.setMonth(10);
console.log(specifitDate);
console.log(specifitDate.toLocaleString('en-GB'));

// unix epoc

