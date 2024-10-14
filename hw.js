

// from 1 to 50 print....

let number = 50;

for (let index = 1; index <= number; index++) {
    console.log(index);    
}


// form 33 to 1 print.......

let number =1;

for (let  i = 33;  i >= number;  i--) {
    console.log(i);
    
}



// from 1 to 45 even number plus and total result

let number = 45;

for (let i = 0; i <= 45; i++) {
    
    if(i % 2 === 0){
        console.log(i);
    }
    
}


// "Showing the squares of the numbers from 1 to 10 and the sum of those squares."

let number =10;
let sum = 0

for( let i = 1; i<=10; i++){
   
    if(i % 2 !== 0){
        console.log(Math.pow(i,2));
    }

    sum = sum + Math.pow(i,2);

  
    
    
}

console.log(sum);





//  multifiction table of 7.......

let num = 10;
let multify = 7;


for (let i = 1; i <= 10; i++) {

    console.log(i * multify);

    
    
}


//  digit conting .....

let num = "139586883";

console.log(number.length);



// another way...

let num = 139586883;

for (let i = 0; i <= 1; i++) {
    console.log(num.toString().length);
    
}



