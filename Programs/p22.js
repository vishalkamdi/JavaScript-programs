// Write a program to calculate sum of digits of a number.
let digit =1234;
let sum =0;
let num;


while(digit>0){
    num =digit%10;
sum =sum+num;
digit=parseInt(digit/10);
}

console.log(sum);
