import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  course: { type: String, required: true },
  merchantId: { type: String },
  transactionId: { type: String },
  status: { type: String, default: "failed" },
  date: { type: Date, default: Date.now },
  time: { type: String, default: () => new Date().toLocaleTimeString() }
});

const PaymentForm =
  mongoose.models.Payments || mongoose.model("Payments", paymentSchema);

export default PaymentForm;
