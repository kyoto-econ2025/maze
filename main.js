const canvas = document.getElementById('maze');
const ctx = canvas.getContext('2d');
const cellSize = 40;
const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
let player = { x: 1, y: 1 }; 
const goal = { x: 8, y: 8 }; 

function drawMaze() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      ctx.fillStyle = maze[y][x] === 1 ? 'black' : 'white';
      ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = 'red';
  ctx.fillRect(player.x * cellSize, player.y * cellSize, cellSize, cellSize);
}

function drawGoal() {
  ctx.fillStyle = 'green';
  ctx.fillRect(goal.x * cellSize, goal.y * cellSize, cellSize, cellSize);
}

function movePlayer(event) {
  const key = event.key;
  let newX = player.x;
  let newY = player.y;

  if (key === 'ArrowUp') newY--;
  if (key === 'ArrowDown') newY++;
  if (key === 'ArrowLeft') newX--;
  if (key === 'ArrowRight') newX++;

  if (maze[newY][newX] === 0) {
    player.x = newX;
    player.y = newY;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
  drawGoal();
  drawPlayer();

  // ゴールに到達したかチェック
  if (player.x === goal.x && player.y === goal.y) {
    alert('ゴールに到達しました！');
  }
}

document.addEventListener('keydown', movePlayer);

drawMaze();
drawGoal();
drawPlayer();

