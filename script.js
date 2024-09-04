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

const cols = 10; // 迷路の列数
const rows = 10; // 迷路の行数
let maze = [];
let stack = [];

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
    nonPathCells = nonPathCells.sort(() => Math.random() - 0.5); // シャッフル
    nonPathCells.slice(0, Math.floor(nonPathCells.length)).forEach(cell => {
        const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);
        const randomKana = kanaChars[Math.floor(Math.random() * kanaChars.length)];
        if (cellDiv) {
            cellDiv.textContent = randomKana;
            // cellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`; // フォントサイズを設定
        }
    });
}

// 迷路を描画する関数
function drawMaze() {
    const mazeElement = document.getElementById('maze');
    mazeElement.innerHTML = ''; // 迷路を描画するエリアをクリア

    // 迷路を描画する
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const cell = maze[y][x];
            const cellDiv = document.createElement('div'); // 各セルの要素を作成

            // 基本的なクラス設定
            cellDiv.className = 'cell' +
                (cell.walls.top ? '' : ' no-top') +
                (cell.walls.right ? '' : ' no-right') +
                (cell.walls.bottom ? '' : ' no-bottom') +
                (cell.walls.left ? '' : ' no-left');
            cellDiv.id = `cell-${x}-${y}`; // IDをセット

            // スタート地点に 'start' クラスを追加
            if (x === 0 && y === 0) {
                cellDiv.classList.add('start');
            }

            // ゴール地点に 'goal' クラスを追加
            if (x === cols - 1 && y === rows - 1) {
                cellDiv.classList.add('goal');
            }

            mazeElement.appendChild(cellDiv); // 各セルを迷路に追加
        }
    }
}

// ゴールから遠ざかることを優先し、かつ蛇行やループを意図的に作る複雑な迷路生成
function generateComplexMazeWithLongPath() {
    maze = [];
    
    // 迷路の初期化
    for (let y = 0; y < rows; y++) {
        const row = [];
        for (let x = 0; x < cols; x++) {
            row.push(new Cell(x, y));
        }
        maze.push(row);
    }

    const startCell = maze[0][0];
    const goalCell = maze[rows - 1][cols - 1];
    startCell.visited = true;
    
    // 壁のリストを作成
    let walls = [];
    const directions = [
        { x: 0, y: -1, wall: 'top', opposite: 'bottom' },
        { x: 1, y: 0, wall: 'right', opposite: 'left' },
        { x: 0, y: 1, wall: 'bottom', opposite: 'top' },
        { x: -1, y: 0, wall: 'left', opposite: 'right' }
    ];

    // 最初のセルの周りの壁をリストに追加
    for (const direction of directions) {
        const nx = startCell.x + direction.x;
        const ny = startCell.y + direction.y;
        if (nx >= 0 && ny >= 0 && nx < cols && ny < rows) {
            walls.push({ current: startCell, neighbor: maze[ny][nx], direction });
        }
    }

    // スタックを作成してDFS用の処理を追加
    let stack = [];

    // プリムとDFSとループ生成のアルゴリズム
    while (walls.length > 0 || stack.length > 0) {
        if (Math.random() < 0.5 && walls.length > 0) {
            // プリム法で壁を選択する確率（ここでは50%）
            const randomWallIndex = Math.floor(Math.random() * walls.length);
            const { current, neighbor, direction } = walls[randomWallIndex];

            // 隣接するセルが未訪問ならば、壁を取り除く
            if (!neighbor.visited || Math.random() < 0.2) { // 20%の確率で既訪問のセルにも通路を作る
                current.walls[direction.wall] = false;
                neighbor.walls[direction.opposite] = false;
                neighbor.visited = true;

                // 新しいセルの周りの壁をリストに追加
                for (const dir of directions) {
                    const nx = neighbor.x + dir.x;
                    const ny = neighbor.y + dir.y;
                    if (nx >= 0 && ny >= 0 && nx < cols && ny < rows && !maze[ny][nx].visited) {
                        walls.push({ current: neighbor, neighbor: maze[ny][nx], direction: dir });
                    }
                }

                // 時々DFSスタックに追加し、蛇行パターンを作成
                if (Math.random() < 0.6) { // 60%の確率でDFSに追加
                    stack.push(neighbor);
                }
            }

            // 壁をリストから削除
            walls.splice(randomWallIndex, 1);

        } else if (stack.length > 0) {
            // DFSで深く探索し、遠回りになるように優先
            const current = stack.pop();
            const neighbors = getFartherNeighbors(current, goalCell);

            if (neighbors.length > 0) {
                stack.push(current);

                const { cell: next, direction } = neighbors[Math.floor(Math.random() * neighbors.length)];
                
                // 壁を取り除く
                current.walls[direction.wall] = false;
                next.walls[direction.opposite] = false;

                next.visited = true;
                stack.push(next);
            }
        }
    }

    drawMaze(); // 迷路を描画
}

// ゴールから遠ざかる隣接セルを優先的に取得する関数
function getFartherNeighbors(cell, goalCell) {
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
            const distanceToGoal = Math.abs(nx - goalCell.x) + Math.abs(ny - goalCell.y);
            neighbors.push({ cell: maze[ny][nx], direction, distance: distanceToGoal });
        }
    }

    // ゴールから遠ざかるセルを優先的にソート
    neighbors.sort((a, b) => b.distance - a.distance);
    return neighbors;
}



// 最短経路を計算する関数
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
            path.reverse(); // スタートからゴールに向けて順番を反転
            return path; // 最短経路を返す
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

// クイズ問題を選択する関数
function getFilteredQuizQuestionForPathLength(pathLength) {
    // パスの長さに収まる問題をフィルタリング（長さが一致する問題のみ）
    const filteredQuestions = quizQuestions.filter(q => q.question.length === pathLength);

    // フィルタリングされた問題が存在する場合、ランダムに選択
    if (filteredQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        return filteredQuestions[randomIndex];
    } else {
        return null; // 条件に合う問題がない場合
    }
}

// クイズ問題を配置する関数
function placeQuizQuestionOnPath(pathCells) {
    const pathLength = pathCells.length;

    const selectedQuestion = getFilteredQuizQuestionForPathLength(pathLength);

    if (selectedQuestion) {
        const questionChars = selectedQuestion.question.split(""); // 文字ごとに分割
        const totalChars = questionChars.length;

        // スタート地点に最初の文字を配置
        const startCell = pathCells[0];
        const startCellDiv = document.querySelector(`#cell-${startCell.x}-${startCell.y}`);
        if (startCellDiv) {
            startCellDiv.textContent = questionChars[0];
            startCellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`;
        }

        // ゴール地点に最後の文字を配置
        const goalCell = pathCells[pathCells.length - 1];
        const goalCellDiv = document.querySelector(`#cell-${goalCell.x}-${goalCell.y}`);
        if (goalCellDiv) {
            goalCellDiv.textContent = questionChars[totalChars - 1];
            goalCellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`;
        }

        // 残りの文字を均等に配置
        for (let i = 1; i < totalChars - 1; i++) {
            const position = Math.floor((pathLength - 1) * i / (totalChars - 1));
            const cell = pathCells[position];
            const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);
            if (cellDiv) {
                cellDiv.textContent = questionChars[i];
                cellDiv.style.fontSize = `${Math.max(12, Math.min(20, 14))}px`;
            }
        }

        handleAnswerButton(selectedQuestion, pathCells);
        return true;
    } else {
        console.log("適したクイズ問題が見つかりませんでした。");
        return false;
    }
}

// 答えボタンの動作を設定する関数
function handleAnswerButton(selectedQuestion, pathCells) {
    const answerButton = document.getElementById('answer-button');
    const answerDisplay = document.getElementById('answer-display');

    if (answerButton && answerDisplay) {
        answerButton.style.display = 'inline-block';
        answerButton.onclick = () => {
            answerDisplay.textContent = 'A. ' + selectedQuestion.answer;
            answerDisplay.style.visibility = 'visible';

            // 最短経路をハイライト
            pathCells.forEach(cell => {
                const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);
                if (cellDiv) {
                    cellDiv.classList.add('path');
                }
            });
        };
    }
}

// 迷路を生成し、クイズ問題を配置する
function generateMazeAndPlaceQuiz(maxAttempts = 50) {
    let attempts = 0;
    let quizPlaced = false;

    while (!quizPlaced && attempts < maxAttempts) {
        generateComplexMazeWithLongPath(); // 迷路を生成
        const pathCells = findShortestPath(); // 最短経路を取得

        if (pathCells.length > 0) {
            insertRandomKanaInNonPathCells(maze, pathCells); // ランダムにかなを配置
            quizPlaced = placeQuizQuestionOnPath(pathCells); // クイズを配置
        }

        attempts++;
        console.log(`試行回数: ${attempts}`);
    }

    if (!quizPlaced) {
        clearMaze(); // 迷路をクリアする
        console.log("50回の試行後も適したクイズ問題が見つかりませんでした。");
    } else {
        console.log("適したクイズ問題が見つかりました！");
    }
}

// 迷路をクリアする関数
function clearMaze() {
    const mazeElement = document.getElementById('maze');
    if (mazeElement) {
        mazeElement.innerHTML = ''; // 迷路を描画している要素を空にする
        document.write('生成に失敗しました。')
    }
}

// 実行
generateMazeAndPlaceQuiz();
