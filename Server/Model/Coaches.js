const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String, required: true },
  experience: { type: String, required: true },
  price_per_hour: { type: Number, required: true },
  availability: [{
    day: { type: String },
    time_slots: [String]  // e.g., ["10:00 - 12:00", "14:00 - 16:00"]
  }],
  contact_info: {
    phone_number: { type: String, required: true },
    email: { type: String, required: true }
  },
  rating: { type: Number, default: 0 },
  reviews: [{
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String },
    rating: { type: Number }
  }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Coach', coachSchema);
