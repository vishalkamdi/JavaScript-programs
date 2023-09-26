// Write a program to find out reverse of a given number.


let num =1234;
let reverse=0;
let rem;

while (num >0) {
    rem =num%10;
    reverse=reverse*10+rem;
    num=parseInt(num/10);
}
console.log(reverse);