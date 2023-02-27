import axios from 'axios'
const user={
    name:'Hung'
}
async function getUserProfile() {
    try {
        const githubUser = await axios.get(`https://api.github.com/users/${user.name}`)
        console.log(githubUser.data)
    }
    catch (err) {
        console.error(err)}}
getUserProfile();


