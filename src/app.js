const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./util/forecast')
//const geocode = require('./util/geocode')
const app = express()

// Setup path for Express config
const public = path.join(__dirname, '../public')
const views = path.join(__dirname, '../templates/views')
const partials = path.join(__dirname, '../templates/partials')

hbs.registerPartials(partials)

// Setup static directory
app.use(express.static(public))

//set handlebars engine and views templates
app.set('view engine', 'hbs')
app.set('views', views)

app.get('', (req, res)=>{
    res.render('index',{
        title : 'Weather',
        name: 'Hicham Fekhar'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title : 'Weather',
        name: 'Hicham Fekhar'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title : 'Weather',
        msg : 'This is a helpful msg',
        name: 'Hicham Fekhar'
    })
})


app.get('/weather',(req, res)=>{
    if (! req.query.adress){
        return res.send({
            msg: 'No adress provided'
        })
    }
    //console.log(geocode(req.query.adress))
    res.send({
        forcast: 'it is raining',
        location: 'Algeria',
        adress: req.query.adress
    })
})

app.get('/help/*',(req, res)=>{
    res.render('notFoundHelp', {
        title : 'Weather',
        msg: 'Help Article not Found !!'
    })
})

app.get('*', (req, res)=>{
    res.render('notFound',{
        msg:'Not found'
    })
})

app.listen(3000, ()=>{
    console.log('Server is runing on 3000')
})
