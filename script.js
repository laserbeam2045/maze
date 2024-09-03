const quizQuestions = [
        "水は何度で氷になりますか？",
        "地球は太陽系の何番目の惑星ですか？",
        "日本で一番高い山は何ですか？",
        "ピザの発祥地はどの国ですか？",
        "モナ・リザを描いたのは誰ですか？",
        "光の速さは毎秒何キロメートルですか？",
        "太陽系で最も大きな惑星は何ですか？",
        "人間の体で最も大きな臓器は何ですか？",
        "エジプトにある有名な古代遺跡は何ですか？",
        "パリにある有名な鉄塔の名前は何ですか？",
        "酸素の化学式は何ですか？",
        "人間の血液中に最も多く含まれる金属は何ですか？",
        "日本の通貨は何ですか？",
        "日本の国旗に描かれている色は何と何ですか？",
        "オリンピックは何年ごとに開催されますか？",
        "ドレミの次に来る音階は何ですか？",
        "水の化学式は何ですか？",
        "月は地球の周りを何日で一周しますか？",
        "東京は日本の何地方にありますか？",
        "カンガルーはどの国の動物ですか？",
        "スペインの首都はどこですか？",
        "火星の空の色は何色ですか？",
        "パンダが主に食べる植物は何ですか？",
        "酸素は元素記号で何と表されますか？",
        "二酸化炭素の化学式は何ですか？",
        "世界で最も大きな砂漠は何ですか？",
        "ドイツの首都はどこですか？",
        "地球の自転はどちら回りですか？",
        "光の速度は秒速何キロメートルですか？",
        "太陽の周りを公転している惑星はいくつありますか？",
        "地球の表面の約何パーセントが水で覆われていますか？",
        "エベレスト山はどの国にありますか？",
        "ニュートンが発見した法則は何ですか？",
        "地球の北半球で冬至は何月に起こりますか？",
        "世界最大の洋は何ですか？",
        "電池に使われる化学元素は何ですか？",
        "国際的に使われる海上の救難信号は何ですか？",
        "酸素を発見した科学者は誰ですか？",
        "最も多くのメダルを獲得したオリンピック選手は誰ですか？",
        "日本で最も人口が多い都市はどこですか？",
        "アルファベットの最初の文字は何ですか？",
        "地球から月までの平均距離は約何キロメートルですか？",
        "一番深い海溝はどこですか？",
        "日本の建国記念日は何月何日ですか？",
        "アインシュタインが提唱した理論は何ですか？",
        "元素の周期表で一番最初に来る元素は何ですか？",
        "東京オリンピックが最初に開催された年は何年ですか？",
        "太平洋を横断した初の航空機は何ですか？",
        "最も多くの島を持つ国はどこですか？",
        "地球の自転は1日何時間かかりますか？",
        "温度を測るために使う装置は何ですか？",
        "光が1年で進む距離を何と言いますか？",
        "オーロラは主にどの地帯で見られますか？",
        "人間の体温の平均は何度ですか？",
        "日本の国花は何ですか？",
        "最も近い恒星は何ですか？",
        "アフリカ大陸の中で最も面積が広い国はどこですか？",
        "日本の一番長い川は何ですか？",
        "世界で最も深い湖はどこですか？",
        "原子番号が1の元素は何ですか？",
        "太陽は何でできていますか？",
        "最も多くの元素が発見された国はどこですか？",
        "日本の最北端の島はどこですか？",
        "地球の直径は約何キロメートルですか？",
        "フランスの首都はどこですか？",
        "日本で一番広い都道府県はどこですか？",
        "エベレスト山の高さは約何メートルですか？",
        "アメリカの国旗には何本の縞がありますか？",
        "最も近い惑星は何ですか？",
        "原子爆弾が最初に落とされた都市はどこですか？",
        "酸性雨の主な原因は何ですか？",
        "人間が飲むことができる水の塩分濃度は何パーセント以下ですか？",
        "日本の天皇の名前は何ですか？",
        "オーストラリアの首都はどこですか？",
        "一番大きい大陸はどこですか？",
        "地球の中で最も大きな海は何ですか？",
        "地球の自転の向きはどちらですか？",
        "日本で最も高いビルは何ですか？",
        "日本の現在の天皇は誰ですか？",
        "最も多くの言語が話されている国はどこですか？",
        "世界で最も高いビルはどこにありますか？",
        "フランス革命は何年に始まりましたか？",
        "世界で最も古い木造建築はどこですか？",
        "イタリアの首都はどこですか？",
        "世界で最も広い砂漠は何ですか？",
        "地球で最も高い地点はどこですか？",
        "最も多くの国と国境を接している国はどこですか？",
        "太陽の表面温度は約何度ですか？",
        "オリンピックの発祥地はどこですか？",
        "日本で一番広い湖はどこですか？",
        "最も多くの氷河を持つ国はどこですか？",
        "オーストラリア大陸の最高峰はどこですか？",
        "世界で最も深い海はどこですか？",
        "世界で最も大きな島は何ですか？",
        "アメリカ合衆国の独立記念日は何月何日ですか？"
];


function insertRandomKanaInNonPathCells(maze, pathCells) {
    const kanaChars = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    const nonPathCells = [];

    // 最短経路以外のセルを収集
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            const cell = maze[y][x];
            if (!cell.inPath) {
                nonPathCells.push(cell);
            }
        }
    }

    // ランダムに仮名を挿入
    nonPathCells.forEach((cell, index) => {
        if (index % 3 !== 0) return
        const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);
        const randomKana = kanaChars[Math.floor(Math.random() * kanaChars.length)];
        cellDiv.textContent = randomKana;
        cellDiv.style.fontSize = '14px'; // 必要に応じてフォントサイズを調整
    });
}



function getRandomQuizQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    return quizQuestions[randomIndex];
}

const selectedQuestion = getRandomQuizQuestion();
const questionChars = selectedQuestion.split(""); // 文字ごとに分割


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

const cols = 15;  // 列数を15に変更
const rows = 15;  // 行数を15に変更
const maze = [];
const stack = [];



function getRandomQuizQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    return quizQuestions[randomIndex];
}

function placeQuizQuestionOnPath(pathCells) {
    const totalCells = pathCells.length;
    const totalChars = questionChars.length;

    // 文字を配置する間隔を計算し、ゴール地点に最後の文字が配置されるようにする
    const interval = (totalCells - 1) / (totalChars - 1); 

    for (let i = 0; i < totalChars; i++) {
        // 各文字の位置を計算
        const position = Math.round(i * interval);
        const cell = pathCells[position];
        const cellDiv = document.querySelector(`#cell-${cell.x}-${cell.y}`);

        // 文字を配置
        cellDiv.textContent = questionChars[i];
        cellDiv.style.fontSize = '14px'; // 必要に応じてフォントサイズを調整
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
