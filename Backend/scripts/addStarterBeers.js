import mongoose from "mongoose";
import dotenv from 'dotenv'
import Beer from '../models/Beer.js'
import Company from "../models/Company.js";
dotenv.config({ path: "../config.env" });

const beerData = [
    {
        name: "Siegbrau premium",
        alcohol: 10,
        price: 1000,
    },
    {
        name: "Morgen's",
        alcohol: 5,
        price: 500,
    },
    {
        name: "Dog piss",
        alcohol: 3,
        price: 200,
    },
];

const companyData = {
    name: "Company_1",
};

const addStarterData = async () => {
    try {
        await Beer.insertMany(beerData);
        await Company.create(companyData);
        console.log("Successfully added starter data");
    } catch (error) {
        console.error(error);
    }
};

mongoose
    .connect(`${process.env.CONSTRING}cheapBeer`)
    .then((result) => {
        console.log("Successfully connected to database");
        addStarterData().then(() =>{mongoose.disconnect()});
    })
    .catch((error) => console.error(error));
