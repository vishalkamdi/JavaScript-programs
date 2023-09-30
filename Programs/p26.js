// Write a program that accepts a number from user and check given number is palindrome number or not. e.g 


function palindrome(data) {
    let start = 0;
    let end = data.length - 1;
    let result = true;
    while (end > start) {
        if (data[start] != data[end]) {

            result = false;

        }
        start++;
        end--;

    }
    return result;

}
let value = 16761;
console.log(palindrome(value));





