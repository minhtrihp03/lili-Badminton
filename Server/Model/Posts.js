const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  court_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Court' },
  post_type: { type: String, enum: ['find_player', 'find_partner'], required: true },
  skill_level: { type: String, required: true },
  time: { type: Date, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  applicants: [{
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
  }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
