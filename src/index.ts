import axios from   'axios'
const getData = async () => {
try{
    const listPosts=await axios.get('https://jsonplaceholder.typicode.com/posts')
    for (let i=0;i<10;i++) {
    console.log(listPosts.data[i]);}
    const dataDetail=await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(dataDetail.data);
}
catch(e){
console.log(e);}
}
getData();

    