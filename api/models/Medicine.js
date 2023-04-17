const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MedicineSchema = new Schema({
	title: String,
	instructions: String,
	notes: String,
	time: String,
	type: String,
	patient: { type: Schema.Types.ObjectId, ref: 'User' },
},
{
	timestamps: true
});

const MedicineModel = model('Medicine', MedicineSchema);

module.exports = MedicineModel;
