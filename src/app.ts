function onlyNumbers(array:any[])  {
    let checkNumber=true;
    array.map((item)=>{
    if(typeof item !== 'number'){
        checkNumber=false;
    }
});
return checkNumber;
}
function sumNumbers(array:any[])  {
return new Promise((resolve, reject)=>{
if(onlyNumbers(array)){
    let sum=0;
    for (const value of array){
        sum=sum+value;
    }
    resolve(sum);
}
    else{
        reject("co ki tu khong phai la so")
    }
}
);
}
const getData = async () => {
const allPromises = Promise.all([
    sumNumbers([1,2,3,4,5,6,7,8,9,10]),
    sumNumbers([1,2,3,4,5,'a']),
]
);
const lists= await allPromises;
console.log(lists);
}
getData();