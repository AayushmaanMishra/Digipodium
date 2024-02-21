// //arrray operations

const num = [34, 89 , 284, 275, 39, 54, 92];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
// }

// console.log(sum);
// console.log("-----------------------------"
// );
// let sum2 = 0;
// num.forEach((n) => {console.log(n);});
// num.forEach((n,i) => {sum2 += n; console.log(sum2);});

//find the sum of all even indexes 

let sum3 = 0;

num.forEach((Element,index) => {
    if (index % 2 == 0) sum3 += Element;
});

console.log(sum3);




