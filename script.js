const btn = document.getElementById("btn"); // Här kopplar jag html och js. Knappfunktionen
const user = document.getElementById("user"); // Inputen för rutan man skriver in
const form = document.getElementById("form"); // piffar upp rutan för formen.
const div = document.createElement("div"); // Här skapar jag ett element via DOM manipulation.
const lsOutput = document.getElementById("lsOutput"); //LocalStorage output.
const input = document.getElementById("input");
const username = "test";
const password = "1234";
var UserName = document.getElementById("user");
var PassWord = document.getElementById("input");


btn.onclick = function () { // i consolen så finns värdena samlade där när man skriver i rutan.
    const name = document.getElementById("user").value;
    const passW = document.getElementById("input").value;

    if (name === username && passW === password) {
        alert("rätt!");
        let p = document.createElement("p").innerHTML="Rätt!";
    } else {
        alert("fel!");
    }

    //console.log(name);
    //console.log(value);
}

// for (let i = 0; i < localStorage.length; i++) {
//     const name = localStorage.getItem(user);
//     const value = localStorage.getItem(input);
//     // lsOutput.innerText += `$name: ${value}<br />`;
// }

// div.addEventListener("click", function () { // Tar två parametrar, Event vi lyssnar på, efter det skapas en "callback funktion".
//     console.log("klicka på knappen!"); // Detta gör så vi får en klick på knappen.
// })

// btn.addEventListener("click", () => { //Här skapar jag localStorage så att det sparas när man skriver.
//     const inputValue = input.value;
//     localStorage.setItem("user", inputValue.value);
//     printUser();
// })

// function validate() { // kolla hur du ska få igenom validation.

//     if (username == null || username == "") {
//         return false;
//     }
//     if (password == null || password == "");
//     return false;
// }

// const checkUser = () => { //Här skapar jag en if statement. 
//     const user = localStorage.getItem("test");

//     if (PassWord === password && UserName === username) {
//         localStorage.setItem(user, password);
//         alert("Rätt!");
//         printUser(user);
//         printUser(input);
//         return true;
//     } else {
//         alert("Fel!");
//         return false;
//     }
// };

// const printUser = (name) => { // Här skapar jag så att när man loggar in att man blir välkommnad!
//     const user = localStorage.getItem("user");
//     //div.innerText = `${user}`;
//     //const nameText = document.createElement("p");
//     //nameText.innerText = `Ditt namn är ${name}`;


//     const eraseButton = document.createElement("button"); // Här skapar jag en knapp så man kan radera namnet vid sidan.
//     div.appendChild(eraseButton);
//     eraseButton.innerText = "Radera ";
//     eraseButton.addEventListener("click", reset);
// };

// const reset = () => { // här skapar jag så att man kan radera saker på locaStorage.
//     localStorage.removeItem("user");
//     div.innerText = "";
// }


//checkUser();