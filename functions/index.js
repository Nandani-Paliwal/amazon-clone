const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51Mc4pnSIpmnRw1zscZWxyye98bQVSv3Svy0QDY6Crp5xTdCRoiuQjBuCYmiQbJbNS9o41IZLpfbwbltxXrRx8FfV00nKEKcj7x');

//API

// -App config
const app = express();

// -Middlewears
app.use(cors({origin: true}));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment Request received BOOM!!! for this amount >>>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });
    console.log(paymentIntent);

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://127.0.0.1:5001/challenge-22a1f/us-central1/api