import mongoose from "mongoose";

const BeerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  alcohol: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Beer", BeerSchema, "beers")
