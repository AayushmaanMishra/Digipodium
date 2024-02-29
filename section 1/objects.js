const user = {name: 'raju', email : 'raju@gmail.com', password  : 'abc123'};

console.log( user );

console.log(user.name);
console.log(user['password']);

user.password = 'pass2';

user.address='unnao'
console.log(user);


const smartphone = {
    brand : 'samsung',
    model : 'Galaxy j2',
    price : '1000',
    color : ['white', 'black', 'red'],  
};

const phoneList = [{brand : 'samsung', model : 'Galaxy j2', price : '1000',color : ['white', 'black', 'red']},
{brand : 'oppo', model : 'nexus', price : '1000',color : ['white', 'orange', 'yellow']} ,
{brand : 'realme', model : '3 pro', price : '3000',color : ['white', 'pale', 'green']} ,
{brand : 'apple', model : 'Iphone 12', price : '4000',color : ['white', 'violet', 'magenta']} ,
{brand : 'nokia', model : '3310', price : '5000',color : ['white', 'doraemon', 'jawahar lal nehru']} 
];

console.log(smartphone.color[2]);

console.log(  phoneList.length);
console.log(phoneList[0].price);
console.log(phoneList[2].color[1]);

console.log(phoneList[4].color.push('rahul gandhi'));
console.log(phoneList[4].color);
