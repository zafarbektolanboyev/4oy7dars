// const data = ["Hello", 1, "10", false, 0, true, 8, -4, undefined];
// const newData = [];
// for(let i = 0; i < data.length; i++){
//     newData.push(typeof data[i]);
// }
// console.log(newData)


//sonlarni birxillarni olib tashlash
// const numbers = [1,2,9,2,1,12,5,3,4,3,7,12];
// const newNumbers = [];
// for(let i = 0; i < numbers.length; i++){
//     if(!newNumbers.includes(numbers[i])){
//         newNumbers.push(numbers[i])
//     }
// }
// console.log(newNumbers)


//eng kattasini topib ber
// const numbers = [1,2,9,2,1,12,5,3,4,3,7,1000];
// let k = 0;
// for(let i = 0; i < numbers.length; i++){
//     if(k < numbers[i]){
//         k = numbers[i];
//     }
// }
// console.log(k)



// function1
// const rectangle = (a, b) => {
//     let s = a * b;
//     let p = 2 * (a + b);

//     console.log(s, p)
// }
// rectangle(3, 2)


// function2
// function triangle(a){
//     let area = (Math.sqrt(3) / 4) * Math.pow(a, 2);
//     let peremetri = 3 * a;
//     console.log("yuzasi: "+area)
//     console.log("peremetri: "+peremetri)
// }
// triangle(5)


// function3
// function sum(n){
//     let number = 0;
//     for(let i = 1; i < n; i++){
//         number += i;
//     }
//     return number;
// }
// console.log(sum())\



// function4
// function isSquare(k){
//     if(k <= 0){
//         return false
//     }   
//     let squareRoot = Math.sqrt(k);
//     return squareRoot === Math.floor(squareRoot);
// }
// console.log(isSquare(10))
// console.log(isSquare(25))

//function5
// function digitCount(k){
//     if(k > 0){
//         return k
//     }
//     let digitCount = Math.round(k)
// }
// console.log(Math.round(15.50))


//function6
// function getDigitSum(n){
//     let getDigitSum = 0;
//     while(n > 0){
//         getDigitSum += n % 0;
//         n = Math.floor(n / 0)
//     }
//     return getDigitSum;
// }
// console.log(getDigitSum(456))


//function7
// function timeToHMS(T){
//     let Hour = Math.floor(T / 3600)
//     let Minute = Math.floor((T % 3600) / 10)
//     let Second = T % 60;
//     return{ H:Hours, M:Minute, S:Secund}
// }
// console.log(timeToHMS(400))

// function8
// function incTime(H, M, S) {
//     let totalSeconds = H * 3600 + M * 60 + S;
//     totalSeconds++;
//     let hours = Math.floor(totalSeconds / 3600);
//     let minutes = Math.floor((totalSeconds % 3600) / 60);
//     let seconds = totalSeconds % 60;
//     return { H: hours, M: minutes, S: seconds };
// }
// console.log(incTime(10, 30, 45))
