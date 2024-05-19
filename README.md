# Currency_Converter
A microservice for another classmates project that takes USD and converts to Euros, canadian dollars, and mexican pesos

# How to use

The Website that this is deployed to is currency-converter-mmad.onrender.com

## How to send data to the api

Use one of the following routes depending on what the dollars are being converting to.

Euros = /usdEuro

Canadian Dollars = /usdCad

Mexican Pesos = /usdMxn

Then follow that with ?cashAmount= and the USD dollar string like "$130,594,339.00" cents are optional. 

### Example api call 

currency-converter-mmad.onrender.com/usdEuro?cashAmount=$130,594,339.00

## How to receive data from the api

After sending the call you will receive a request object which has multiple parts.

The only part that you care about is the data section which is an object that only has 1 key which is cashTotal.

This part will remain the same no matter which currency you converted the USD to.

### Example data retrieval

request.data.cashTotal


## Apis Used
https://www.exchangerate-api.com used to grab and update conversion rates for different currencies

## Packages used
express: used to create the server

axios: used to make get requests from the server to the API

## Author
Daniel Rogalsky
