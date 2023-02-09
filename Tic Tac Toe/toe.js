const cells = document.querySelectorAll('.cell');
let xIsNext = true;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick);
}

function handleClick(event) {
  const cell = event.target;
  if (cell.textContent !== '') {
    return;
  }
  cell.textContent = xIsNext ? 'X' : 'O';
  xIsNext = !xIsNext;
  calculateWinner();
}

function calculateWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent &&
      cells[a].textContent !== ''
    ) {
      alert(`Player ${cells[a].textContent} wins!`);
      return;
    }
  }

  if (Array.from(cells).every(cell => cell.textContent !== '')) {
    alert('Draw!');
  }
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
  xIsNext = true;
}
//The code starts by selecting all the cells in the Tic Tac Toe board using document.querySelectorAll.
//The variable xIsNext is used to keep track of which player's turn it is, starting with X.
//The for loop sets up an event listener for each cell that calls the handleClick function when clicked.
//The handleClick function checks if the cell is already filled, and returns if it is. It then sets the text content of the cell to X or O depending on the value of xIsNext, inverts the value of xIsNext, and calls the calculateWinner function.
//The calculateWinner function starts by defining an array of arrays called winningCombinations. Each inner array represents a winning combination of cells on the Tic Tac Toe board.
//The function then uses a for loop to iterate through the winningCombinations array.
//For each combination, the code destructures the inner array into variables a, b, and c. These variables represent the indexes of the cells in the combination.
//Inside the for loop, an if statement checks if the text content of the cells at indexes a, b, and c are equal//