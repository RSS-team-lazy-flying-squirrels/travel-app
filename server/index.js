const express = require('express')
const mongoose = require('mongoose')
const { default: axios } = require("axios")
const Country = require("./models/country")

const PORT = process.env.PORT || 3000

const app = express()

const createCountry = data => {

         Country.insertMany(data);

    
}
async function start() {
  try {
        await mongoose.connect(
            'mongodb+srv://dbUser:dbUserPassword@cluster0.2iqnv.mongodb.net/travelApp', 
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        )
        

        async function getUser() {
            try{
                const response = await axios.get("https://restcountries.eu/rest/v2/")
                console.log(response)
                await createCountry(response)

            } catch(e) {
                console.log(e)
            }
        }
        
        // getUser()
        app.listen(PORT, () => {
            console.log("started")
        })
    } catch (e) {
        console.log(e)
    }
}

start()