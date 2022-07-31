
// Odd number using anonymous function and IIFE
const odd = function(arr){
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

(function(arr){
    let od = [];
    for(i of arr){
        if(i%2!==0){
            od.push(i);
        }
    }
    console.log(od);
})([1,2,3,4,5,6,7,8,9])

// Convert all strings to title caps in a string array using anonymous function and IIFE
const caps = function(str){
    a = str.toLowerCase().split(' ');
    for(let i=0; i <a.length; i++){
        a[i]=a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.toString());
};
caps("akshay");
caps("aKsHaY");

(function(str){
    a = str.toLowerCase().split(' ');
    for(let i=0; i <a.length; i++){
        a[i]=a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.toString());
})("aKsHaY")

//Sum of all numbers in an array
const sum = function(arr){
    let sm = 0;
    for(i of arr){
        sm+=i;
    }
    console.log(sm);
};

arr=[1,2,3,4,5,6,7,8,9];
sum(arr);

(function(arr){
    let sm = 0;
    for(i of arr){
        sm+=i;
    }
    console.log(sm);
})([1,2,3,4,5,6,7,8,9,10]);

//Return all prime numbers in an array
const prrime = function(arr){
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


(function(arr){
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
})([2,3,5,7,11,12,15]);

//Return all palindromes in an array

const palindrome = function(arr){
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


(function(strc){
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
})(["guvi","noon"]);


//Return median of two sorted arrays of the same size

const get_Median = function (arr1, arr2) {
    if(arr1.length == arr2.length){
        len = arr1.length;
        let j = 0;
        let i = len - 1;
        while (arr1[i] > arr2[j] && j < len && i > -1) {
         let temp = arr1[i];
         arr1[i] = arr2[j];
         arr2[j] = temp;
         i--;
	     j++;
	   }
	   arr1.sort(function (a, b) {
       return a - b;
	     });
	     arr2.sort(function (a, b) {
	     return a - b;
	   });
	   return ((arr1[len - 1] + arr2[0]) / 2);
	 }
    else {
        console.log("Arrays are not equal");
    }
}
	
let arr = [1,14,22,16,18];
let ar = [2,15,7,29,40];
console.log(getMedian(arr, ar));

    
(function(arr){
    let arr1= arr[0];
    let arr2 = arr[1];
        if(arr1.length == arr2.length){
            len = arr1.length;
            let j = 0;
            let i = len - 1;
            while (arr1[i] > arr2[j] && j < len && i > -1) {
                let temp = arr1[i];
                arr1[i] = arr2[j];
                arr2[j] = temp;
                i--;
                j++;
            }
            arr1.sort(function (a, b) {
                    return a - b;
                });
                arr2.sort(function (a, b) {
                    return a - b;
                });
            console.log((arr1[len - 1] + arr2[0]) / 2);
            }
    else {
             console.log("Arrays are not equal");
         }
})([5,15,25,35,45],[4,14,24,34,44]);


//Remove duplicates from an array

let unique = function (arr) {
var uni = arr.filter(function(val, index) {
  return arr.indexOf(val) === index;
});
return uni;
};

var arr = [1, 5, 14, 12, 8, 12, 4, 5, 1, 14,'a','b','a'];
console.log(unique(arr));

(function(arr){
    let unique = [];  
    arr1= arr;
    arr1.forEach((ar) => {  
       if(!unique.includes(ar)){  
          unique.push(ar);  
       }  
    })  
    console.log(unique);  
})([1,2,3,4,5,5,4,3,2,1,'a','b','b']) ;


//Rotate an array by k times

let rotated = function(arr, k) {
    k = k % arr.length;
    let ar1 = [];
    for (let i = 0; i < arr.length; i++) {
    ar1[(i + k) % arr.length] = arr[i];
    }
    return ar1;
};

ar = rotated([2,3,4,5,6],3)
console.log(ar);

(function(arr, k){
    k = k % arr.length;
    let ar1 = [];
    for (let i = 0; i < arr.length; i++) {
    ar1[(i + k) % arr.length] = arr[i];
    }
    console.log(ar1);
})([2,3,4,5,6],2);

