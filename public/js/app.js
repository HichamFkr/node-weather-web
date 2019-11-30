console.log('client side js file is runing')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const WeatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const loc = document.getElementById('msg1')
const forc = document.getElementById('msg2')


WeatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const search = searchInput.value

    loc.textContent = 'Loading ...'
    forc.textContent = ' '

    
    fetch('http://localhost:3000/weather?adress='+search).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forcast)
            loc.textContent = data.location
            forc.textContent = data.forcast
        }
    })
})
})

