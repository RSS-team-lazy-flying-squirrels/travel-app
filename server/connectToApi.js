const { default: axios } = require("axios")

async function getUser() {
    try{
        const response = await axios.get("https://restcountries.eu/rest/v2/")
        console.log(responcse)
    } catch(e) {
        console.log(e)
    }
}

getUser()