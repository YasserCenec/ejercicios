const tablero = document.getElementById('tablero');

for (let i = 0; i < 9; i++) {
  const celda = document.createElement('div');
  celda.classList.add('celda');
  celda.id = `celda-${i}`;
  tablero.appendChild(celda);
}

function handleMouseEnter(event) {
  event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
}

function handleMouseLeave(event) {
  event.target.style.backgroundColor = '';
}

const celdas = document.getElementsByClassName('celda');

for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener('mouseenter', handleMouseEnter);
  celdas[i].addEventListener('mouseleave', handleMouseLeave);
}

let jugadorActual = '✘';

function handleClick(event) {
  if (event.target.textContent === '') {
    event.target.textContent = jugadorActual;
    event.target.style.color = 'white';
    jugadorActual = jugadorActual === '✘' ? '〇' : '✘';
    verificarGanador();
  }
}

for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener('click', handleClick);
}

function verificarGanador() {
  const valoresCeldas = Array.from(celdas).map(celda => celda.textContent);
  const condicionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  for (const condicion of condicionesGanadoras) {
    const [a, b, c] = condicion;
    if (valoresCeldas[a] && valoresCeldas[a] === valoresCeldas[b] && valoresCeldas[a] === valoresCeldas[c]) {
      alert(`¡El jugador ${valoresCeldas[a]} ganó la partida!`);
      break;
    }
  }

  document.getElementById('mas-informacion').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Yasser, 1º DAM\nTA-TE-TI');
  });

}