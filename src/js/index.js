// const buttons = document.querySelectorAll("li");

////////////////////////////////////////////////////
const choix = ["Pierre", "Feuille", "Ciseaux"];

function randomz(){
    let out = "";
    out = Math.floor(Math.random() *3)
    return out;
}

// Logique du jeu 
function game(player, ia){
    // Premier IF 
    if(player === ia){
        return "Egalité";
    } 
    // 2eme IF
    if(player === 0){
        if(ia === 2){
            return "Victoire";
        }
        else{
            return "Défaite";
        }
    }
    // 3eme IF
    if(player === 1 ){
        if (ia === 0) {
            return "Victore";
        }
        else{
            return "Défaite";
        }
    }
    // Dernier IF 
    if (player === 2) {
        if (ia === 1) {
            return "Victoire";
        }
        else{
            return "Défaite";
        }
    }
}

// DOM PART 
    // Nous allons récuperer ou (inserer des valeurs)

let win = document.getElementById('vict');
let loose = document.getElementById('def');
let draw = document.getElementById('draw');

// Nous allons placer un ecouteurs sur chaque elements ayant une class .imag
    // Declaration d'une variable
let lsImg = document.querySelectorAll('.imag');

lsImg.forEach((element,keys) => {
    element.addEventListener('click', () =>{
        // window.alert(keys);
        console.log( game(keys,randomz()) );
        count(game(keys,randomz()));
    })
});

// Création d'une Fonction de stockage 

const count = (result) =>{
    if (result === "Victoire") {
        win.textContent = Number(win.textContent)+1; 
        localStorage.setItem('Victorry', win.textContent);
        localStorage.setItem('Victorry',Number(victStock)+Number(win.textContent));
        // localStorage.getItem('Victoirry');
    }
    else if (result === "Défaite") {
       loose.textContent = Number(loose.textContent)+1;
       localStorage.setItem('Defaite', loose.textContent);
       localStorage.setItem('Defaite',Number(defStock)+Number(loose.textContent));
    //    localStorage.getItem('Defaite');
    }
    else{
       draw.textContent = Number(draw.textContent)+1;
       localStorage.setItem('Draw', draw.textContent);
       localStorage.setItem('Draw',Number(drawStock)+Number(draw.textContent));
    //    localStorage.getItem('Draw');
    }
}
let victStock = localStorage.getItem('Victorry')
let defStock = localStorage.getItem('Defaite')
let drawStock = localStorage.getItem('Draw')


// const buttonCut = document.querySelectorAll('#btnCut');
// const buttonPaper = document.querySelectorAll('#btnPaper');
// const buttonRock = document.querySelectorAll('#btnRock');
// let allButtons = {buttonCut, buttonPaper, buttonRock};
// const username = prompt("Veuillez indiquer votre nom d'utilisateur...");

// for (let i = 0; i < allButtons.lenght; i++) {
//     buttons[i].addEventListener("click", function () {
//         let joueur = allButtons[i].innerHTML;
//         let robot = allButtons[Math.floor(Math.random() *3, allButtons.length)].innerHTML;
//         let resultat;

//         // Logique entiere du jeu
//         if (joueur === robot) {
//             resultat = "Vous avez fait une egalité !";

//         } else if ((joueur === choix[0] && robot === choix[2]) || (joueur === choix[1] && robot === choix[0]) || (joueur === choix[2] && robot === choix[1])){
//             resultat = "Vous avez gagné !!";
//             console.log('Victoire !!');
//         } else{
//             resultat = "Vous avez perdu !";
//             console.log('Défaite !!');
//             document.querySelector(".result").innerHTML = `
//                 ${username} : ${joueur}</br>
//                 Le robot a choisi : ${robot}</br>
//                 ${resultat}
//               `;
//         }
         
//     })
// }

