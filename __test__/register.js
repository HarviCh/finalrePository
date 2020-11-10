const fetch = require('node-fetch')

const email = 'abarrioasdsadas@unab.edu.co'; //cambiar para pruebas
const name = 'juan';
const password = '12345';
const dni = '1005';
const cellphone = 301;
const landline = 6361;
const age = 20;
const gender = 'femenino';
const department = 'santa';
const city = 'buca';
const address = 'cra';

const testRegister = (name, dni, email, password, cellphone, landline, age, gender, department, city, address) => {
    fetch('https://serverless.harvich.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, dni, email, password, cellphone, landline, age, gender, department, city, address })
    }).then(x => x.json())
        .then(respuesta => {
            //console.log(respuesta)
        })
}

testRegister(name, dni, email, password, cellphone, landline, age, gender, department, city, address);