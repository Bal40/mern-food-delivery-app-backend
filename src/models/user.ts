import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  phone:{
    type: String,
  },
  addressline1: {
    type: String,
  },
  addressline2: {
    type: String,
  },
  postalcode: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;