import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now
  },
  rank: {
    type: String,
    default: "Newcommer"
  },
  orders: {
    type: [{
        beerName: String,
        beerAlcohol: Number,
        beerPrice: Number
    }],
    default: []
  }
});

export default mongoose.model("Company", CompanySchema, "companies")
