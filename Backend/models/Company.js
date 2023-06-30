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
      amount: Number,
      ID: String
    }],
    default: []
  },
  balance: {
    type: Number,
    default: 0
  }
});

export default mongoose.model("Company", CompanySchema, "companies")
