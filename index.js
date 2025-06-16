const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

// Tableau d'image : [0, 1, 2]

buttons.forEach((button) => {    // Ajout d'un écouteur d'événement pour chaque bouton
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;   // Calculer l'index du slide suivant
    const slideActive = document.querySelector(".active");   // Sélectionner le slide actif

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);  // Calculer le nouvel index du slide actif

    if (newIndex < 0) newIndex = [...slides].length - 1; // Si l'index est inférieur à 0, le mettre à la fin du tableau
    if (newIndex >= [...slides].length) newIndex = 0;     // Si l'index est supérieur ou égal à la longueur du tableau, le mettre à 0
    slides[newIndex].classList.add("active"); 
    slideActive.classList.remove("active");
  });
});
 