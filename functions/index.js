
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const stripe = require("stripe") (process.env.STRIPE_KEY);
const app = express();

app.use(cors({origin: true}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "success"
});
});

app.post("/payments/create", async (req, res) => {
    const total =parseInt( req.query.total);
    if (total > 0) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
      });
  
      res.status(200).json({
        // paymentIntent
        clientPaymentSecret: paymentIntent.client_secret,
      });
  
    } else {
      res.status(403).json({
        message: "Payment amount must be greater than zero (0).",
      });
    }
  });
  

exports.api = onRequest(app);



