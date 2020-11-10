const register = () => {
    const registerForm = document.getElementById('register-form')
    registerForm.onsubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const dni = document.getElementById('dni').value
        const email = document.getElementById('email').value
        const password = document.getElementById('pass').value
        const cellphone = document.getElementById('celular').value
        const landline = document.getElementById('telefono').value
        const age = document.getElementById('edad').value
        const gender = document.getElementById('genero').value
        const department = document.getElementById('depart').value
        const city = document.getElementById('city').value
        const address = document.getElementById('direccion').value
        

        fetch('https://serverless.harvich.vercel.app/api/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, 
                dni, 
                email, 
                password, 
                cellphone, 
                landline, 
                age, 
                gender, 
                department, 
                city, 
                address,
             })
        })

        //location.href = "html/Index.html"

    }
}


window.onload = () =>{
  register()
}