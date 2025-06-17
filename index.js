const main =document.getElementById('main')
const header = document.getElementById('header')

header.innerHTML = `    <nav>
      <ul>
        <li><a href="index.html">Caroussel</a></li>
        <li><a href="todolist.html">Todo List</a></li>
        <li><a href="score.html">Score Keeper</a></li>
      </ul>
    </nav> ;`




main.innerHTML = `
    <div class="carousel">
      <button class="btn" id="prev">Précédent</button>
      <button class="btn" id="next">Suivant</button>
      <ul>
        <li class="slide">
          <img src="./img/0.png" alt="image carousel">
        </li>
        <li class="slide active">
          <img src="./img/1.png" alt="image carousel">
        </li>
        <li class="slide">
          <img src="./img/2.png" alt="image carousel">
        </li>
      </ul>
    </div>`;


const buttons = document.querySelectorAll(".btn");  // On sélectionne tous les boutons Précédent et Suivant
const slides = document.querySelectorAll(".slide"); // On sélectionne toutes les images

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {  // Pour chaque bouton, on écoute le clic
    const direction = e.target.id === "next" ? 1 : -1; // Si c'est le bouton "next", avancer (+1), sinon reculer (-1)

    const currentSlide = document.querySelector(".active"); // On trouve l’image actuellement visible
    let currentIndex = [...slides].indexOf(currentSlide);   // On trouve son index dans la liste
    let newIndex = currentIndex + direction;                // On calcule l’index de la prochaine image

    // Gestion des bords : on boucle
    if (newIndex < 0) newIndex = slides.length - 1; // Si on recule au-delà du premier, on va au dernier
    if (newIndex >= slides.length) newIndex = 0;    // Si on dépasse le dernier, on revient au premier

    // Changer l’image active
    slides[currentIndex].classList.remove("active");  // Enlève la classe active à l’actuelle
    slides[newIndex].classList.add("active");         // Ajoute la classe active à la nouvelle
  });
});








// ------------------------------------


//Ajout lien vers autre page ↓

// const lien = document.createElement('a')

// lien.href = 'todolist.html'
// lien.textContent = 'Todo list'

// document.getElementById('conteneur').appendChild(lien);