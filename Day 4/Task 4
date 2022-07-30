// 1. Comparing JSON Properties 
var obj1 = {name:"Person 1", age: 5};
var obj2 = {age: 5, name:"Person 1"};
var a= true;

if (Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) {
        if(obj1[key] == obj2[key]){
            continue;
        }
        else{
           a=false;
           break;
       }
        
    }
}
else{
  a=false;
}
console.log(a);

//2. Flag 
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.send();
xhr.onload = function () {
 let response = JSON.parse(xhr.response);
 for(let i=0; i<response.length; i++){
   console.log(response[i].flag)
 }
};


//3. Name, region, subregion and population
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.send();
xhr.onload = function () {
 let response = JSON.parse(xhr.response);
 for(let i=0; i<response.length; i++){
   console.log(` Name: ${response[i].name}
   Region: ${response[i].region}
   Subregion: ${response[i].subregion}
   Population: ${response[i].population}`)
 }
};
