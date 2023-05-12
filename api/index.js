const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('./models/User');
const Medicine = require('./models/Medicine');
require('dotenv').config();
const mongoURI = process.env.DATABASE_URL;

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfkjahselrkjhk5jh3456435jksdnlgsd';

app.use(cors({ credentials: true, origin: 'https://www.manymeds.net' }));
app.options(
	'*',
	cors({ credentials: true, origin: 'https://www.manymeds.net' })
);

app.use(express.json());
app.use(cookieParser());

mongoose
	.connect(mongoURI)
	.then(() => {
		console.log('✅ Connected to MongoDB successfully');

		// register
		app.post('/api/register', async (req, res) => {
			const { username, password } = req.body;
			try {
				const userDoc = await User.create({
					username,
					password: bcrypt.hashSync(password, salt),
				});
				res.json(userDoc);
			} catch (e) {
				res.status(400).json(e);
			}
		});

		// login
		app.post('/api/login', async (req, res) => {
			const { username, password } = req.body;
			const userDoc = await User.findOne({ username });
			const passOk = bcrypt.compareSync(password, userDoc.password);
			if (passOk) {
				//logged in
				jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
					if (err) throw err;
					res.cookie('token', token).json({
						id: userDoc._id,
						username,
					});
				});
			} else {
				res.status(400).json('wrong credentials');
			}
		});

		// get profile
		app.get('/api/profile', (req, res) => {
			const { token } = req.cookies;
			jwt.verify(token, secret, {}, (err, info) => {
				if (err) {
					console.error(err);

					res.status(401).json({ error: 'Unauthorized' });
				} else {
					res.json(info);
				}
			});
		});

		// Log out profile
		app.post('/api/logout', (req, res) => {
			res.cookie('token', '').json('ok');
		});

		// Create medicine
		app.post('/api/medicine', async (req, res) => {
			try {
				const { token } = req.cookies;
				jwt.verify(token, secret, {}, async (err, info) => {
					if (err) {
						console.error(err);
						return res.status(401).json({ error: 'Unauthorized' });
					}

					console.log(req.body);
					const {
						title,
						instructions,
						notes,
						time,
						type,
						doctor,
						doctorSpecialty,
					} = req.body;

					const medicine = await Medicine.create({
						title,
						instructions,
						notes,
						time,
						type,
						doctor,
						doctorSpecialty,
						patient: info.id,
					});

					console.log(medicine);
					res.json({ medicine });
				});
			} catch (err) {
				console.error(err);
				res.status(500).json('Internal server error');
			}
		});

		// Get medicine
		app.get('/api/medicine', async (req, res) => {
			try {
				const { token } = req.cookies;
				const { id } = jwt.verify(token, secret);

				// Find the user in the database
				const userDoc = await User.findById(id);

				// If the user is found, return their medicine data
				if (userDoc) {
					const userSpecificMedicineData = await Medicine.find({
						patient: userDoc._id,
					})
						.populate('title' /*['username']*/)
						.sort({ createdAt: -1 })
						.limit(20);

					res.json(userSpecificMedicineData);
				} else {
					res.status(400).json('User not found');
				}
			} catch (err) {
				console.error(err);
				res.status(500).json('Internal server error');
			}
		});

		// Get medicine by ID
		app.get('/api/medicine/:id', async (req, res) => {
			try {
				const { id } = req.params;
				const medicine = await Medicine.findById(id).populate(
					'title',
					'instructions'
					// 'notes',
					// 'time',
					// 'type',
					// ['patient']
				);

				if (!medicine) {
					return res.status(404).json('Medicine not found');
				}

				res.json(medicine);
			} catch (err) {
				console.error(err);
				res.status(500).json('Internal server error');
			}
		});

		// Delete medicine by ID
		app.delete('/api/delete/:id', async (req, res) => {
			try {
				const { id } = req.params;
				const medicine = await Medicine.findByIdAndDelete(id);

				if (!medicine) {
					return res.status(404).json('Medicine not found');
				}

				res.json(medicine);
			} catch (err) {
				console.error(err);
				res.status(500).json('Internal server error');
			}
		});

		// Edit medicine
		app.put('/api/medicine/:id', async (req, res) => {
			try {
				const { token } = req.cookies;
				jwt.verify(token, secret, {}, async (err, info) => {
					if (err) {
						console.error(err);
						return res.status(401).json({ error: 'Unauthorized' });
					}

					console.log(req.body);
					const {
						title,
						instructions,
						notes,
						time,
						type,
						doctor,
						doctorSpecialty,
					} = req.body;
					const { id } = req.params;
					const medicine = await Medicine.findById(id);
					if (!medicine) {
						return res.status(404).json('Medicine not found');
					}

					const isPatient =
						JSON.stringify(medicine.patient) === JSON.stringify(info.id);

					if (!isPatient) {
						return res
							.status(400)
							.json(
								'This medicine does not belong to you, please contact hanswatkins@gmail.com about this error'
							);
					}

					await medicine.updateOne({
						title,
						instructions,
						notes,
						time,
						type,
						doctor,
						doctorSpecialty,
					});

					res.json(medicine);
				});
			} catch (err) {
				console.error(err);
				res.status(500).json('Internal server error');
			}
		});

		const PORT = process.env.PORT || 4000;
		app.listen(PORT, () => {
			console.log(`⭐️ Medicine Tracker listening on port: ${PORT}.⭐️`);
		});
	})
	.catch((err) => {
		console.error('❌ Failed to connect to MongoDB:', err);
	});
