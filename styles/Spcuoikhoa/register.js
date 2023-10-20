const users = JSON.parse(localStorage.getItem('users')) || []
const formElement = document.getElementById('form')
const emailElement = document.getElementById('name')
const passwordElement = document.getElementById('pw')
formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    const emailValue = emailElement.value
    const passwordValue = passwordElement.value
    users.push({
        username: emailValue,
        password: passwordValue,
    })
    alert('Your account has been created')
    localStorage.setItem('users', JSON.stringify(users))
})
