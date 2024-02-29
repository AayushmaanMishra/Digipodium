const nums =[ 3,  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const sqrt = nums.map( (n) => { return n**2});

console.log(sqrt);

const price = ['$45.434' , '$32.99' , '$24.99' ];

const price2 = price.map( (n) => { return parseInt(n.slice(1))} );
console.log(price2);


//find 10% disc on all prices



console.log(price.map((pr) => parseInt(pr.slice(1)) * 0.9));

const names = ['kali das' , 'kabir das', 'shakespear chaurasia',  'shinchan chauhan']

console.log(names.map((n) => { return n.split(' ')[0]}));

//filter

const numodd = nums.filter((n) => {return n%2 !== 0} )

console.log(numodd);
const prices2 = [740,920,1450,3500,6400]


const filteredPrices = prices2.filter((n) => { return n > 1000 && n < 5000});

console.log(filteredPrices);

const phoneList = [{brand : 'samsung', model : 'Galaxy j2', price : 1000,color : ['white', 'black', 'red']},
{brand : 'oppo', model : 'nexus', price : 1000,color : ['white', 'orange', 'yellow']} ,
{brand : 'realme', model : '3 pro', price : 3000,color : ['white', 'pale', 'green']} ,
{brand : 'apple', model : 'Iphone 12', price : 40000,color : ['white', 'violet', 'magenta']} ,
{brand : 'nokia', model : '3310', price : 50000,color : ['white', 'doraemon', 'jawahar lal nehru']},
{brand : 'samsung', model : 'j2', price : 17500,color : ['white', 'doraemon', 'jawahar lal nehru']} 
];

const expensivePhones = phoneList.filter((n) => {return n.brand == 'samsung';}); 

console.log(expensivePhones);

const phonesWithRedColor = phoneList.filter(phone => phone.color.includes('yellow'));

console.log(phonesWithRedColor);





