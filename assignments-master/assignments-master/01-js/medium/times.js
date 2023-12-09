/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// By the time I am doing this assignment Harkirat sir has already revealed the logic in one of his offline lectures 
// Anyways I didn't even dare to think about it -- maybe 
function calculateTime(n) {

    let obj1 = new Date();
    let currentTime= obj1.getTime();
     console.log(currentTime);
let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum += i;
    }
    console.log(sum);
    let obj2 = new Date();
    let OverTime = obj2.getTime();
    console.log(OverTime);
    return OverTime-currentTime;
}

console.log(calculateTime(10000))