require('dotenv').config()

// normal express stuff to make it run
var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
PORT = process.env.PORT || 3000;

// other package requirements
const axios = require('axios');

// helper functions
let unformatDollars = function(moneyString) {
    moneyString = moneyString.replace(/[$,]/g, "")
    moneyFloat = parseFloat(moneyString)
    return moneyFloat
}

// grab the conversion rates using exchangerate api
let conversionRates
let conversionAPI = 'https://api.exchangerate-api.com/v4/latest/USD'
axios.get(conversionAPI).then(function (response) {
    conversionRates = response.data.rates
}).catch(function(error){
    console.log(error)
})


app.get('/', function(req, res){
    res.send('Whoops! You shouldn\'t be here! Double check your url and try again!')
})

app.get('/usdEuro', function(req, res){
    // grab the cash to convert
    cashToConvert = req.query.cashAmount

    // turn into a float
    cashFloat = unformatDollars(cashToConvert)

    // convert it into euros
    convertedCash = cashFloat * conversionRates.EUR

    // sets up styling rules to format a string as a euro
    let EuroDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR'})
    convertedCash = EuroDollar.format(convertedCash)


    res.send({
        'cashTotal': convertedCash
    })
})

app.get('/usdCad', function(req, res){
    // grab the cash to convert
    cashToConvert = req.query.cashAmount

    // turn into a float
    cashFloat = unformatDollars(cashToConvert)

    // convert it into euros
    convertedCash = cashFloat * conversionRates.CAD

    // sets up styling rules to format a string as a euro
    let EuroDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CAD'})
    convertedCash = EuroDollar.format(convertedCash)


    res.send({
        'cashTotal': convertedCash
    })
})

app.get('/usdMxn', function(req, res){
    // grab the cash to convert
    cashToConvert = req.query.cashAmount

    // turn into a float
    cashFloat = unformatDollars(cashToConvert)

    // convert it into euros
    convertedCash = cashFloat * conversionRates.MXN

    // sets up styling rules to format a string as a euro
    let EuroDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'MXN'})
    convertedCash = EuroDollar.format(convertedCash)


    res.send({
        'cashTotal': convertedCash
    })
})

// code to make express listen
app.listen(PORT, function () { 
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});