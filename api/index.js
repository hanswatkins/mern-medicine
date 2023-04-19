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

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(mongoURI);

// register
app.post('/register', async (req, res) => {
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
app.post('/login', async (req, res) => {
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
app.get('/profile', (req, res) => {
	const { token } = req.cookies;
	jwt.verify(token, secret, {}, (err, info) => {
		if (err) throw err;
		res.json(info);
	});
});

//log out profile
app.post('/logout', (req, res) => {
	res.cookie('token', '').json('ok');
});

// create medicine
app.post('/medicine', async (req, res) => {
	const { token } = req.cookies;
	jwt.verify(token, secret, {}, async (err, info) => {
		if (err) throw err;
		console.log(req.body);
		const { title, instructions, notes, time, type } = req.body;
		const medicine = await Medicine.create({
			title,
			instructions,
			notes,
			time,
			type,
			patient: info.id,
		});
		console.log(medicine);
		res.json({ medicine });
	});
});

// get medicine
app.get('/medicine', async (req, res) => {
	res.json(
		await Medicine.find()
			.populate('title' /*['username']*/)
			.sort({ createdAt: -1 })
			.limit(20)
	);
});

// get medicine by ID
app.get('/medicine/:id', async (req, res) => {
	const { id } = req.params;
	const medicine = await Medicine.findById(id).populate(
		'title',
		'instructions',
		// 'notes',
		// 'time',
		// 'type',
		// ['patient']
	);
	
	res.json(medicine);
});

app.listen(4000, () => {
	console.log('⭐️ Medicine Tracker listening on port 4000 ⭐️');
});
