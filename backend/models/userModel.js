const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		require: [true, 'Name is required'],
		trim: true,
		maxlength: [25, 'Maximum char 25'],
	},
	email: {
		type: String,
		require: [true, 'Email is required'],
		unique: true,
	},
});

module.exports = mongoose.model('User', userSchema);
