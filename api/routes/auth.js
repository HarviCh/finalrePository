const express= require('express')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const Users= require('../models/Users')
const { isAuthenticated } =require('../auth')

const router= express.Router()

const signToken= (_id) =>{
	return jwt.sign({ _id }, 'mi-secreto', {
		expiresIn: 60*60*24*365,
	})
}

router.post('/register', (req, res)=>{
    const {name, dni, email, password, cellphone, landline, age, gender, department, city, address} = req.body
	crypto.randomBytes(16, (err, salt) =>{
		const newSalt = salt.toString('base64')
		crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key)=>{
			const encryptedPassword = key.toString('base64')
			Users.findOne({email}).exec()
			  .then( user => {
			  	if (user) {
			  		return res.send('usuario ya existe')
			  	}
			  	Users.create({
					name, 
					dni, 
					email, 
					password: encryptedPassword, 
					cellphone, 
					landline, 
					age, 
					gender, 
					department, 
					city, 
					address, 
			  		salt: newSalt
			  	}).then(() => {
			  		res.send('usuario creado')
			  	})
			  })
		})
	})

})

router.post('/login', (req, res)=>{
	const {email, password} = req.body
	const error = 'error'
	Users.findOne({email}).exec()
	  .then(user => {
		if (!user) {
			return res.send({error})
		}
		crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key)=>{
			const encryptedPassword = key.toString('base64')
			if (user.password === encryptedPassword) {
				const token = signToken(user._id)
				return res.send({token})
			}
			return res.send({error})
		})
	})
})

router.get('/me', isAuthenticated, (req, res) =>{
	res.send(req.user)
})

module.exports = router











	
