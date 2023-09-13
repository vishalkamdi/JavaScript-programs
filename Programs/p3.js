//Write a program to find gross salary (Hint :-GS=BS+DA+TA).

let gross_salary=10000;
let basic=1000;
let da;
let ta;

da=(10*basic)/100;
ta=(12*basic)/100;

gross_salary=basic+ta+da;
console.log(gross_salary);