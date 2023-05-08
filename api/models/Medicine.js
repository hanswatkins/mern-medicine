const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MedicineSchema = new Schema(
	{
		title: { type: String, required: true },
		instructions: { type: String, required: true },
		notes: String,
		time: {type: [String], required: true},
		type: { type: String, required: true },
		doctor: String,
		doctorSpecialty: String,
		patient: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{
		timestamps: true,
	}
);

const MedicineModel = model('Medicine', MedicineSchema);

module.exports = MedicineModel;
