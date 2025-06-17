// Attrape l'input, le bouton, et la liste
const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const buttonRemove = document.getElementById('remove');
const list = document.getElementById('todo-list');
const header = document.getElementById('header');

// InnerHTML  --- ↓

header.innerHTML = ` <nav>
      <ul>
        <li><a href="index.html">Caroussel</a></li>
        <li><a href="todolist.html">Todo List</a></li>
        <li><a href="score.html">Score Keeper</a></li>
      </ul>
    </nav>`;



    // Add Button --- ↓
button.addEventListener('click', function() {

  // Étape 1 : créer un <li>
  const newTask = document.createElement('li');

  // Étape 2 : lui mettre le texte (ce que l’utilisateur a tapé dans l’input)
  newTask.textContent = input.value;

  // Étape 3 : l’ajouter à la liste
  list.appendChild(newTask);

  // Étape 4 : vider l’input pour la prochaine tâche
  input.value = '';
});


// ----------------------------------------------------

// Remove Button --- ↓

buttonRemove.addEventListener('click', function() {
  if (list.firstElementChild !== null) {
    list.removeChild(list.firstElementChild);
  }
});
