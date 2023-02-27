import axios from 'axios';
async function getData() {
 try{
        const data=await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"); 
        for(const pokemon of data.data.results){
console.log(pokemon)}
        
 }
 catch(e){
 console.log(e);
 }
}
 getData();
 