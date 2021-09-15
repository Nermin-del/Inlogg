const loginButton = document.getElementById("btn"); // Här definerar jag konstanter för att förstå vad jag jobbar med. (Pekar ut sökvägen)
const userInput = document.getElementById("user"); 
const passwordInput = document.getElementById("input");
const username = "test";
const correctPassword = "1234";
const logOutButton = document.getElementById("logOutBtn");
const tryAgainButton = document.getElementById("tryAgainBtn");

const onStart = () => {
    if (checkLogin(localStorage.getItem("UserName"), localStorage.getItem("Password"))) { // här kollar vi localStorage om jag är inloggad fortfarande
        login();
    } else {
        logOutButton.style.display = "none";
        tryAgainButton.style.display = "none";
    }
}

const checkLogin = (inputUsername, inputPassword) => { // Se om användaren kan logga in
    return inputUsername === username && inputPassword === correctPassword; // Validerar användarnamn och lösenord
};

const login = () => {
    let rightPassword = document.createElement("p"); // Skapar ett element med p tagg
    let text = document.createTextNode("Du har loggat in!"); // istället för innerHTML
    rightPassword.appendChild(text); // Här appendar jag så det ligger documentet
    document.body.appendChild(rightPassword); // Här med fast från document.body

    userInput.style.display = "none"; // här gömmer jag input för anvädarnamn
    passwordInput.style.display = "none"; // här gömmer jag input för lösenord
    loginButton.style.display = "none"; // här gömmer jag login knappen
    tryAgainBtn.style.display = "none"; // Här döljer jag försök igen knappen

    logOutButton.style.display = "block"; // Här visar jag logoutbutton
}

const logout = () => {
    console.log("du loggade ut");
}

loginButton.onclick = () => { //sätter upp en eventlyssnare på click eventet för login knappen "() => = arrow function"
    const inputUsername = userInput.value; // Kollar in vad det är för värde i userinput fältet
    const inputPassword = passwordInput.value; // Kollar in vad det är för värde i passwordinput fältet
    

    if (checkLogin(inputUsername, inputPassword)) { // om namn och lösen stämmer så aktiveras hela denna statementen.
        login();
        localStorage.setItem("UserName", inputUsername); // Sparar i localStorage namnet
        localStorage.setItem("Password", inputPassword); // Sparar i localStorage lösenet
        

    } else { // Om det blir fel loggin så visas texten "du skrev fel" och knappen "försök igen" visas
        let wrongPassword = document.createElement("p");
        let wrongtext = document.createTextNode("Du skrev fel!"); // istället för innerHTML
        wrongPassword.appendChild(wrongtext); 
        document.body.appendChild(wrongPassword);
        userInput.style.display = "none";
        passwordInput.style.display = "none";
        btn.style.display = "none";
        tryAgainBtn.style.display = "block";
    }
}

logOutButton.onclick(() => { // tar bort datan ur localstorage när man loggar ut
    localStorage.removeItem("UserName");
    localStorage.removeItem("Password");
    logout();
})

onStart(); // Detta tar reda på vad man vill visa på hemsidan. När man öppnar index.html så injicerar js filen och kollar om man är inloggad eller inte.