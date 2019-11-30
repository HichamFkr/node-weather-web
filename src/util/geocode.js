const request = require('request')


// const geocode = (adresses, callback)=>{

//     adresses.forEach(adress => {
//         const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'+.json?access_token=pk.eyJ1IjoiaGljaGFtLWZrIiwiYSI6ImNrMmQzeG11MjA3bGgzcHBwaGJnNWJ6eGwifQ.Tt-Z4s9kFoZ6D6Uxtn-g0g&limit=1'
//     request({'url': geocodeUrl, json: true}, (error, response)=>{
//         if (error){
//             callback('Unable to connect !!', undefined) //callback(error, data)
//         } else if(response.body.features.length == 0){
//             callback(undefined, "Unable to find location")
//         } else {
//             callback(undefined, {
//                 location : response.body.features[0].place_name,
//                 long : response.body.features[0].center[0],
//                 lat : response.body.features[0].center[1]
//             })
//         }
//     })
//     });
    
// }




// module.exports = {
//     geocode: geocode
// }


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode