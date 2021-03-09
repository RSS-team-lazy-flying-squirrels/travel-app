const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CountrySchema = new Schema( {
    name: {
        type: String
    },
    alpha3Code: {
        type: String
    },
    capital: {
        type: String
    },
    region: {
        type: String
    },
    subregion: {
        type: String
    },
    population: {
        type: Number
    },
    latlng: {
        type: Array
    },
    area: {
        type: Number
    },
    timezones: {
        type: Array
    },
    borders: {
        type: Array
    },
    currencies: {
        type: Array
    },
    languages: {
        type: Array
    },
    translations: {
        type: Object
    },
    flag: {
        type: String
    }
})

module.exports = mongoose.model("Country", CountrySchema)


