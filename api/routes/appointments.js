const express = require('express')
const Appointments = require('../models/Appointments')

const router = express.Router()

router.get('/', (req, res) => {
	Appointments.find()
	  .exec()
	  .then( x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
	Appointments.findById(req.params.id)
	  .exec()
	  .then(x => res.status(200).send(x))
})

router.post('/', (req, res) =>{
	Appointments.create(req.body).then( x => res.status(201).send(x))
})

router.put('/edit/:id', (req, res) => {
	Appointments.findByIdAndUpdate(req.params.id, req.body)
	  .then( () => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
	Appointments.findByIdAndDelete(req.params.id).exec().then( () => res.sendStatu(204))
})

module.exports = router