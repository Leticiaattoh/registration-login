// Select form by id
const login = document.querySelector('#login')
// Handle form submit event
login.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect login data
    const formData = new FormData(event.target)
    console.log(
        formData.get('Username'),
        formData.get('email'),
        formData.get('password')
    )

    // Dispaly succes message
    const messageH1 = document.querySelector('#message')
    messageH1.textContent = 'Logged-in successfully!'




})