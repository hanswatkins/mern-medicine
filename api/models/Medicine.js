const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MedicineSchema = new Schema({
	name: String,
	instructions: String,
    notes: String,
    time: String,
    Type: String,
	patient: { type: Schema.Types.ObjectId, ref: 'User' },
});

const MedicineModel = model('Medicine', MedicineSchema);

module.exports = MedicineModel;
