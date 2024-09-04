function getFilteredQuizQuestion(pathLength) {
    // パスの長さに収まるクイズ問題をフィルタリング
    const filteredQuestions = quizQuestions.filter(q => q.question.length <= pathLength);

    // フィルタリングされた問題が存在する場合、ランダムに選択
    if (filteredQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        return filteredQuestions[randomIndex];
    } else {
        return null; // 条件に合う問題がない場合
    }
}

function insertRandomKanaInNonPathCells(maze, pathCells) {
    const kanaChars = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    let nonPathCells = [];

    // 最短経路以外のセルを収集
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            const cell = maze[y][x];
            if (!cell.inPath) {
                nonPathCells.push(cell);
            }
        }
    }

    // シャッフルしてランダムに仮名を挿入
    nonPathCells = nonPathCells.sort(() => Math.random() - 0.5);
    nonPathCells.slice(0, Math.floor(nonPathCells.length / 3)).forEach(cell => {
        const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);
        const randomKana = kanaChars[Math.floor(Math.random() * kanaChars.length)];
        cellDiv.textContent = randomKana;
        cellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`; // フォントサイズを動的に調整
    });
}


function getRandomQuizQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    return quizQuestions[randomIndex];
}

const selectedQuestion = getRandomQuizQuestion();
const questionChars = selectedQuestion.question.split(""); // 文字ごとに分割


class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.walls = { top: true, right: true, bottom: true, left: true };
    this.parent = null;
    this.inPath = false;
  }
}

const cols = 16;
const rows = 16;
const maze = [];
const stack = [];

function placeQuizQuestionOnPath(pathCells) {
    const pathLength = pathCells.length;

    // 最短経路の長さに合ったクイズ問題を取得
    const selectedQuestion = getFilteredQuizQuestion(pathLength);

    if (selectedQuestion) {
        const questionChars = selectedQuestion.question.split(""); // 文字ごとに分割
        const totalChars = questionChars.length;

        // 文字を配置する間隔を計算し、ゴール地点に最後の文字が配置されるようにする
        const interval = Math.floor((pathLength - 2) / (totalChars - 1)); // 最初と最後を除く

        // 最初の文字をスタート地点に配置
        const startCell = pathCells[0];
        const startCellDiv = document.querySelector(`#cell-${startCell.x}-${startCell.y}`);
        startCellDiv.textContent = questionChars[0];
        startCellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`;

        // 最後の文字をゴール地点に配置
        const goalCell = pathCells[pathCells.length - 1];
        const goalCellDiv = document.querySelector(`#cell-${goalCell.x}-${goalCell.y}`);
        goalCellDiv.textContent = questionChars[totalChars - 1];
        goalCellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`;

        // 残りの文字を経路上に等間隔で配置
        for (let i = 1; i < totalChars - 1; i++) {
            const position = i * interval + 1; // スタートとゴールを除いた位置
            const cell = pathCells[position];
            const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);
            cellDiv.textContent = questionChars[i];
            cellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`;
        }

        // クイズの答えを表示するボタンを迷路の次に追加
        const answerButton = document.getElementById('answer-button');
        const answerDisplay = document.getElementById('answer-display');

        answerButton.style.display = 'inline-block';
        answerButton.onclick = () => {
            answerDisplay.textContent = 'A. ' + selectedQuestion.answer;  // 答えを設定
            answerDisplay.style.visibility = 'visible';  // 答えを表示

            // 最短経路をハイライト
            pathCells.forEach(cell => {
                const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);
                cellDiv.classList.add('path');
            });
        };
    } else {
        console.log("適したクイズ問題が見つかりませんでした。");
    }
}




for (let y = 0; y < rows; y++) {
  const row = [];
  for (let x = 0; x < cols; x++) {
      row.push(new Cell(x, y));
  }
  maze.push(row);
}

function getUnvisitedNeighbors(cell) {
  const neighbors = [];

  const directions = [
      { x: 0, y: -1, wall: 'top', opposite: 'bottom' },
      { x: 1, y: 0, wall: 'right', opposite: 'left' },
      { x: 0, y: 1, wall: 'bottom', opposite: 'top' },
      { x: -1, y: 0, wall: 'left', opposite: 'right' }
  ];

  for (const direction of directions) {
      const nx = cell.x + direction.x;
      const ny = cell.y + direction.y;

      if (nx >= 0 && ny >= 0 && nx < cols && ny < rows && !maze[ny][nx].visited) {
          neighbors.push({ cell: maze[ny][nx], direction });
      }
  }

  return neighbors;
}

function generateMaze() {
  const startCell = maze[0][0];
  startCell.visited = true;
  stack.push(startCell);

  while (stack.length > 0) {
      const current = stack.pop();
      const neighbors = getUnvisitedNeighbors(current);

      if (neighbors.length > 0) {
          stack.push(current);

          const { cell: next, direction } = neighbors[Math.floor(Math.random() * neighbors.length)];
          
          current.walls[direction.wall] = false;
          next.walls[direction.opposite] = false;

          next.visited = true;
          stack.push(next);
      }
  }
}

generateMaze();

function resetVisited() {
  for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
          maze[y][x].visited = false;  // 訪問フラグをリセット
          maze[y][x].parent = null;    // 親セルもリセット
      }
  }
}

// 最短経路を計算し、その結果をpathCellsに格納
function findShortestPath() {
    const startCell = maze[0][0];
    const goalCell = maze[rows - 1][cols - 1];
    const queue = [startCell];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    startCell.visited = true;
    visited[startCell.y][startCell.x] = true;

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === goalCell) {
            const path = [];
            let temp = current;
            while (temp != null) {
                path.push(temp);
                temp = temp.parent;
            }
            path.reverse(); // 順序を反転してスタートからゴールへ
            path.forEach(cell => cell.inPath = true);
            return path; // 経路を返す
        }

        const directions = [
            { x: 0, y: -1, wall: 'top' },
            { x: 1, y: 0, wall: 'right' },
            { x: 0, y: 1, wall: 'bottom' },
            { x: -1, y: 0, wall: 'left' }
        ];

        for (const direction of directions) {
            const nx = current.x + direction.x;
            const ny = current.y + direction.y;

            if (nx >= 0 && ny >= 0 && nx < cols && ny < rows) {
                const neighbor = maze[ny][nx];
                if (!visited[ny][nx] && !current.walls[direction.wall]) {
                    visited[ny][nx] = true;
                    neighbor.parent = current;
                    queue.push(neighbor);
                }
            }
        }
    }

    return []; // 経路が見つからない場合
}


function drawMaze() {
    const mazeElement = document.getElementById('maze');
    mazeElement.innerHTML = '';

    const pathCells = findShortestPath(); // 最短経路を取得

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const cell = maze[y][x];
            const cellDiv = document.createElement('div');

            cellDiv.className = 'cell' +
                (cell.walls.top ? '' : ' no-top') +
                (cell.walls.right ? '' : ' no-right') +
                (cell.walls.bottom ? '' : ' no-bottom') +
                (cell.walls.left ? '' : ' no-left');
            cellDiv.id = `cell-${x}-${y}`;

            if (x === 0 && y === 0) {
                cellDiv.classList.add('start');
            } else if (x === cols - 1 && y === rows - 1) {
                cellDiv.classList.add('goal');
            } else if (cell.inPath) {
                // cellDiv.classList.add('path');
            }

            mazeElement.appendChild(cellDiv);
        }
    }

    // 最短経路以外のセルに仮名をランダムに配置
    insertRandomKanaInNonPathCells(maze, pathCells);

    // 最短経路上にクイズの文字を1文字ずつ配置
    placeQuizQuestionOnPath(pathCells);
}

// 最短経路を描画した後に、仮名を挿入
drawMaze();
