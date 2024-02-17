function add(a,b) {
    var c = a + b;
    console.log(c);
}

add(3,4);

const fact = function(n){
    let f = 1;
    for (let i = 1; i <=n ; i++){
        f *=i;
    
    }
    return f;
}

const res= fact(7);
console.log(res);

const avg = (x,y,z) => {
    return(x + y + z)/3;
}
const result= avg(3,4,5);
console.log(result);