// Attrape l'input, le bouton, et la liste
const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');


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
