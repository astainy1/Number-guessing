/*

1. Ask user for his/her name
2. Store user name in localStorage
3. Welcome user and tell user about the game
4. Tell user the number guesses he/she and display remaining guess each time user guess
5. Ask user to guess a Number
6. If user guessed number is the same as the random number, display a message. Else, display another message.
7. If user number of guesses reached terminate the program

*/

//Testing connection
// alert('Connected successfully!');

// prompt user
const userName = prompt("Please enter your name.");

//Load DOM before other script
document.addEventListener('DOMContentLoaded', () => {
    //get random number
    let randomNumber = Math.random(); //this method returns 0 inclusive & 1 exclusive

    //convert random decimal into integer
    const convertNumber = Math.floor(randomNumber * 100);

    //number of guess
    let numberOfGuess = 5;
    const countDown = numberOfGuess-- //decrement number of guess

    //get html element
    const greet = document.querySelector('h2');
    let userGuess = document.querySelector('#userGuess');
    const button = document.querySelector('button');
    const form = document.querySelector('form');
    const errorMessage = document.querySelector('span');
    const hint = document.querySelector('small');

    //condition for user name
    if(userName != null && userName.length >= 3){

        //Store user name in localStorage if there isn't
        if(!localStorage.getItem('user')){
            localStorage.setItem('user', userName);
        }
        greet.innerHTML = `Hello, ${userName}`;b //greet user
        
    }else{
        alert("Invalid input");
        window.userName
        window.location.href = "404.html" //display another page otherwise
    }

    //store user name back into localstorage
    localStorage.setItem('user', userName)

    //log random number into console for testing
    console.log(convertNumber)

    //eventListener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (numberOfGuess === 0) {
            window.location.href = "gameOver.html";
        }

        const userNumber = userGuess.value;
        
        if(userNumber == convertNumber){
            errorMessage.style.display = 'line-block';
            errorMessage.innerHTML = `Excellent! ${userNumber} is correct.`;
            errorMessage.style.color = 'green';

            setTimeout(() => {
                window.location.href = "success.html"
            }, 2000);
            
        }
        else if(userNumber > convertNumber){
            errorMessage.style.display = 'inline-block';
            errorMessage.innerHTML = `Wrong! ${userNumber} is too high.`;
            hint.innerHTML = `You have ${numberOfGuess--} guess(s) to make`
        }
        else if(userNumber < convertNumber ){
            errorMessage.style.display = 'inline-block';
            errorMessage.innerHTML = `Wrong! ${userNumber} is too low.`;
            hint.innerHTML = `You have ${numberOfGuess--} guess(s) to make`
        }else{
            errorMessage.style.display = 'inline-block';
            errorMessage.innerHTML = `Invalid input!`;
        }

        form.reset(); //Clear input field after submitting
    })
    
})




