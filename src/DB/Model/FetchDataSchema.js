const { default: mongoose } = require("mongoose");

const ContactDataSkillsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  message: String,
  date: {
    type: Date,
    default: Date.now // Automatically set the current date when a new document is created
  },
  time: {
    type: String, // You can use String type for time if you prefer
    default: () => new Date().toLocaleTimeString() // Automatically set the current time when a new document is created
  }
});

export const ContactData =
  mongoose.models.ContactDataSkills ||
  mongoose.model("ContactDataSkills", ContactDataSkillsSchema);
