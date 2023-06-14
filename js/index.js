const mock = [
  { name: 'Articulo 1', price: 10 },
  { name: 'Articulo 2', price: 20 },
  { name: 'Articulo 3', price: 30 },
  { name: 'Articulo 4', price: 40 },
];

const mock2 = [
  { name: 'Articulo 5', price: 10 },
  { name: 'Articulo 6', price: 20 },
  { name: 'Articulo 7', price: 30 },
  { name: 'Articulo 8', price: 40 },
];

const listId = document.getElementById('list');
const updateId =
  document.getElementById('update');
updateId.addEventListener('click', () =>
  renderList(mock2, listId, 'red')
);

{
  /* <article class="card"><h4>Articulo</h4><p>100</p></article>; */
}

// Recordar borrar antes todo si uso inyeccion en una funcion que puede actualizar la UI
const renderList = (list, id, colorClass) => {
  id.innerHTML = '';
  list.forEach(article => {
    const card =
      document.createElement('article');
    card.className =
      colorClass === 'blue'
        ? 'card bg-blue'
        : 'card bg-red';
    card.innerHTML =
      /* HTML */
      `<h4>${article.name}</h4>
        <p>${article.price}</p>`;
    id.appendChild(card);
  });
};

renderList(mock, listId, 'blue');
