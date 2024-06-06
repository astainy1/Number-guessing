//Testing connection
// alert('Connected sccessfully!')

//Load DOM before script
document.addEventListener('DOMContentLoaded', () => {
    //Get user name from localStorage
    const userName = localStorage.getItem('user');
    const message = document.querySelector('.success');

    message.innerHTML = `Congratulations, ${userName}!`;

})
