// const request = require('request')
// // 2. Require the function in app.js and call it as shown below
// // 3. The forecast function should have three potential calls to callback:
// //    - Low level error, pass string for error
// //    - Coordinate error, pass string for error
// //    - Success, pass forecast string for data (same format as from before)

// forecast(long, lat, (error, data)=>{
//     console.log('Error', error)
//     console.log('Data', data)
// })

// module.exports = {
//       forecast: forecast
// }
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast