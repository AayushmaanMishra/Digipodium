const fru =['apple', 'orange', 'mango','grapes', 'kiwi']

console.log(typeof(fru));

console.log(fru[2]);

console.log(fru.indexOf('apple'));


//slicing

console.log(fru.slice(1,4));


 //adding new elements

 fru.push('apple');
 console.log(fru);
 fru.unshift('grapes');
 console.log(fru);
 // removing old elements
 fru.pop();
 fru.shift();
 console.log(fru);

 //adding and removing new elements from array 
 console.log(fru);   
 fru.splice(3, 2 , 'dragon fruit');
 console.log(fru);
