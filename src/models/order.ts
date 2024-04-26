import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  deliveryDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    addressline1: { type: String, required: true },
    addressline2: { type: String, required: true},
    postalcode:{type: String, required: true},
    city:{type: String, required:true},
    state:{type: String, required: true},
    country:{type: String, required: true}
  },
  cartItems: [
    {
      menuItemId: { type: String, required: true },
      quantity: { type: Number, required: true },
      name: { type: String, required: true },
    },
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["placed", "paid", "inProgress", "outForDelivery", "delivered"],
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;