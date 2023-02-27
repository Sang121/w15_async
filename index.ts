function sum(a: any, b: any)  {
    return new Promise(
        (resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
        let sum = a + b;
        resolve(sum);

    }
    else if (typeof a !== 'number'|| typeof b !== 'number') {
        reject("a hoac b khong phai la number!");
    }}
    );
}
const getDataa = async (a:any,b:any) => {
    sum(a,b)
    .then(val=>{
        console.log(val);
        
    })
    .catch(err=>{
        console.log(err);
    })
}
getDataa(1,"a")




    