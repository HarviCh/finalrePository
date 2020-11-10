const renderApp = () => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    if (token) {
        if (role === 'administrador') {
            location.href = "prueba.html"
        } else
    }
}

const logIn = () => {
    const loginForm = document.getElementById('login')
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        fetch('https://serverless.harvich.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        }).then(x => x.json())
            .then(respuesta => {
                localStorage.setItem('token', respuesta.token)
                return respuesta.token
            }).then(token => {
                if (token) {
                    return fetch('https://serverless.harvich.vercel.app/api/auth/me', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: token,
                        },
                    }).then(x => x.json())
                        .then(user => {
                            localStorage.setItem('role', user['role'])
                            localStorage.setItem('id', user._id)
                            renderApp()
                        })
                }
                document.getElementById('error').removeAttribute('hidden')
            })
    }
}

window.onload = () => {
    renderApp()
    logIn()
}