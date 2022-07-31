//Print odd numbers in an array
const odd = (arr) => {
    let od = [];
    for(i of arr){
        if(i%2!==0){
            od.push(i);
        }
    }
    console.log(od);
};

arr=[1,2,3,4,5,6,7,8,9];
odd(arr);

// Convert all strings to title caps 
const caps = (str) =>{
    a = str.toLowerCase().split(' ');
    for(let i=0; i <a.length; i++){
        a[i]=a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.toString());
};
caps("akshay");
caps("aKsHaY");

//Sum of all numbers in an array
let sum = (arr) => {
    let sm = 0;
    for(i of arr){
        sm+=i;
    }
    console.log(sm);
};

arr=[1,2,3,4,5,6,7,8,9];
sum(arr);

// Return all the prime numbers in an array
const prrime = (arr) => {
    pr = [];
    for(k of arr){
    flag = true;
        for(i = 2; i <= k - 1; i++){
            if (k % i == 0) {
                flag = false;
                break;
                }
            }        
    if (flag == true){
        pr.push(k);
    }
    else {
        continue;
    }
}
    console.log(pr);  
};
arr=[2,3,5,7,11,12,13,14,15];
prrime(arr);

//Return all palindromes in an array

const palindrome = (arr) => {
    pr = [];
    let flag = false;
    for(str of strc){ 
        //let j = str.length -1;
         for( let i = 0 ; i < (str.length-1)/2 ;i++){
          let a = str[i] ;
          let b = str[(str.length-1)-i];
          if( a != b){
            flag = false;
            break;
          }
          else{
            flag = true;
          }
        }
        if(flag == true){
        pr.push(str);
        }
    }
    console.log(pr);
}
strc=["noon","guvi","level"];
palindrome(strc);
