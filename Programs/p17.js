
//Write a program to perform all arithmetic operations according to user choice (for ex-for addition press '+''...) by using switch case
let num1=10, num2=2;
let operater = "+";

switch (operater) {
    case '+':
        
        console.log(num1+num2);
        break;
        
    case '-':
         console.log(num1-num2);
        break;

    case '*':
        console.log(num1*num2); 
        break;
    case '/':
        console.log(num1/num2); 
        break;
    default:
      console.log("invalid ");
        break;
}