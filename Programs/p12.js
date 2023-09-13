//	Write a program to convert days into years, weeks and months.
let days =1329;

let year;
let weeks;
let months;

year=parseInt(days/365);
weeks=parseInt((days%365)/7);
months=parseInt(days/30);

console.log("years is ="+year+" "+ "Week is ="+weeks+" "+ "months is ="+months)
