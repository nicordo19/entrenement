// création de phrases aleatoirs
// au click une phrase aléatoir doit apparaitre
// tu a sujet verbe et complement

const button = document.querySelector("button");
let eRandom = document.querySelector(".eRandom");

const sujet = ["Marie", " Le chien", "Le chat", "Le Garçon ", "Le proffesseur"];
const verbe = [
  "veux manger",
  "à rangé",
  "a voulu aller",
  "ai allé dormir",
  " parti courir",
];
const completment = [
  "dehors",
  "dans la cuisine",
  "dans le jardin",
  " dans le lit",
  "et veux jouer",
];

button.addEventListener("click", () => {
  addWordRandom();
});
const randomPhrase = (array) => array[Math.floor(Math.random() * array.length)];
function addWordRandom() {
  // let woldRandomV = Math.floor(Math.random() * verbe.length);
  // let woldRandomC = Math.floor(Math.random() * completment.length);
  // let woldRandom = Math.floor(Math.random() * sujet.length);
  // let elementRandom = sujet[woldRandom];
  // let elementRandomV = verbe[woldRandomV];
  // let elementRandomC = completment[woldRandomC];

  if (eRandom) {
    eRandom.innerHTML = `${randomPhrase(sujet)} ${randomPhrase(
      verbe
    )} ${randomPhrase(completment)}`;
  } else {
    console.log("erreur l'élément n'existes pas ,");
  }
}
// choisire le bon nombre
// tu a un prompte qui apparais tu a 7 chance pour trouver le bon numero
let displayResult = document.querySelector(".result");
let numbersDifferents = document.querySelector(".number");

let misterNomber = Math.floor(Math.random() * 7) + 1;
let chance = 7;
numbersDifferents.addEventListener("change", (event) => {
  let selectedNomber = Number(event.target.value);
  let message = iisOkay(selectedNomber);
  displayResult.textContent = message;
});

function iisOkay(n) {
  if (chance === 0) {
    return "tu n'a pas trouvé 😭 ,ne perd pas hespoir 💪 si tu veux retante ta chance  ";
  }
  chance--;
  if (n === misterNomber) {
    return "bravo tu a trouvé le bon numéro 🥳";
  } else if (n === misterNomber - 1 || n === misterNomber + 1) {
    return `tu été à coté de 1😳, il te rests ${chance}`;
  } else {
    return `retante ta chance 🙈 il te rests ${chance}`;
  }
  //on reduit les essais a chaque tour
}

// function numberRandom(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// let result = numberRandom(7);
// console.log(result);

// function iisOkay(n) {
//   return result === n;
// }
// // faire en sorte en cas de une mauvaise saisie
// function Gess() {
//   const number = prompt("entre un numero Entre 1 et 7 (tu a 7 chances))") * 1;
//   if (isNaN(number) || number < 0 || number > 7) {
//     console.log("Entre un nombre valide !");
//     return false;
//   }
//   return number;
// }

// for (let i = 0; i < 7; i++) {
//   let numberUser = Gess();
//   if (numberUser === false) {
//     i--; // Ne pas compter un essai invalide
//     continue;
//   }

//   if (iisOkay(numberUser)) {
//     console.log("bravo tu a trouve");
//     break;
//   } else if (numberUser === result + 1 || numberUser === result - 1) {
//     console.log("tu été a un pret ");
//   } else {
//     console.log("recommence mauvaise reponce");
//   }
// }

// //projet 3 : Gestionnaire de produits
