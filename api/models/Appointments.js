const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Appointments = mongoose.model('Appointment', new Schema({
  patient_nit: String,
  patient_name: String,
  doctor_nit: String,
  doctor_name: String,
  appoint_type: String,
  date: String,
  time: String,
  confirmed: String,
  assistance: String,
  doctor_availability: String,    
}))

module.exports = Appointments