const fetch = require('node-fetch')


const trueEmail = "abarrios@unab.edu.co"
const truePassword = "Fabian"

const falseEmail = "profe@unab.edu.co"
const falsePassword = "123"

const testLogin = (email, password) => {
	fetch('https://serverless.harvich.vercel.app/api/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password })
	}).then(x => x.json())
		.then(respuesta => {

			if (respuesta.token == null) {
				console.log(respuesta.error)
			} else {
				console.log("El usuario ingresó con exito")
			}

			return respuesta.token
		})
}



testLogin(trueEmail, truePassword);