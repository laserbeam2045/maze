const quizQuestions = [
        "水は何度で氷になりますか？",
        "日本の国花は何ですか？",
        "ピザの発祥地はどの国ですか？",
        "モナ・リザを描いたのは誰ですか？",
        "スーパーマリオの主人公の名前は何ですか？",
        "フランスの有名なファッションブランドは何ですか？",
        "ドラゴンボールの主人公の名前は何ですか？",
        "世界で最も人気のあるサッカークラブはどこですか？",
        "アインシュタインのファーストネームは何ですか？",
        "世界初の量産車は何ですか？",
        "パリの有名な塔は何ですか？",
        "太陽系で一番大きな惑星は何ですか？",
        "日本で一番高い山は何ですか？",
        "地球は太陽系の何番目の惑星ですか？",
        "チョコレートの原料は何ですか？",
        "桜の花が咲く季節はいつですか？",
        "人間の体で一番大きな臓器は何ですか？",
        "エジプトの有名な古代遺跡は何ですか？",
        "フランスの代表的な食べ物は何ですか？",
        "最も売れたビデオゲームは何ですか？",
        "世界で最も話されている言語は何ですか？",
        "火星は何色ですか？",
        "オーストラリアに生息する有名な動物は何ですか？",
        "空気の主成分は何ですか？",
        "ドイツの首都はどこですか？",
        "地球上で最も長い川は何ですか？",
        "月が地球を回る周期はどのくらいですか？",
        "日本で一番長い川は何ですか？",
        "一番大きい陸上動物は何ですか？",
        "世界で最も人口が多い国はどこですか？",
        "光の速さはどのくらいですか？",
        "世界三大料理に含まれる国はどこですか？",
        "世界で最も使われている検索エンジンは何ですか？",
        "シェイクスピアの有名な悲劇の一つは何ですか？",
        "パンダが主に食べる植物は何ですか？",
        "ギザのピラミッドはどの国にありますか？",
        "ニュートンが発見した法則は何ですか？",
        "アフリカで最も広い砂漠はどこですか？",
        "日本の有名な城の一つは何ですか？",
        "日本で使用される三つの主要な文字は何ですか？",
        "バチカン市国はどこの国にありますか？",
        "世界最大のオンラインストリーミングサービスは何ですか？",
        "太陽が東から昇る理由は何ですか？",
        "地球が太陽を一周するのにかかる時間はどのくらいですか？",
        "フランスの首都はどこですか？",
        "日本で一番広い都道府県はどこですか？",
        "地球温暖化の主な原因は何ですか？",
        "アルコール飲料の主成分は何ですか？",
        "エッフェル塔がある都市はどこですか？",
        "オリンピックのシンボルである五つの輪は何を表していますか？",
        "最も一般的な色の車は何色ですか？",
        "日本で最も有名なアニメ映画監督は誰ですか？",
        "フランスで有名な画家の一人は誰ですか？",
        "イギリスの通貨は何ですか？",
        "最新のiPhoneのモデル名は何ですか？",
        "現在の日本の首相は誰ですか？",
        "アメリカの現職大統領は誰ですか？",
        "最新のノーベル平和賞受賞者は誰ですか？",
        "現在のサッカーワールドカップの優勝国はどこですか？",
        "最新のオリンピック開催地はどこですか？",
        "日本で最も古い木造建築は何ですか？",
        "最近の宇宙探査機の名前は何ですか？",
        "スマートフォンの最大手メーカーはどこですか？",
        "日本の代表的なファーストフードチェーンは何ですか？",
        "カーボンニュートラルの意味は何ですか？",
        "日本で最近人気のある観光地はどこですか？",
        "イギリスの現在の首相は誰ですか？",
        "現在の世界経済で注目されている国はどこですか？",
        "イタリアの首都はどこですか？",
        "最新のiPhoneに搭載された新機能は何ですか？",
        "オーストラリアの首都はどこですか？",
        "日本で最近話題になった技術革新は何ですか？",
        "アフリカで最も人口が多い国はどこですか？",
        "日本で最も有名な紅葉の名所はどこですか？",
        "現在の中国のリーダーは誰ですか？",
        "スペインの首都はどこですか？",
        "日本で最近話題の食べ物は何ですか？",
        "日本で最も有名な城は何ですか？",
        "日本で最近話題のドラマは何ですか？",
        "日本の有名な神社の一つはどこですか？",
        "日本で一番寒い都市はどこですか？",
        "世界で最も裕福な国はどこですか？",
        "世界で最も貧しい国はどこですか？",
        "日本の有名な映画は何ですか？",
        "現在のロシアの大統領は誰ですか？",
        "世界で最も多くの人口を抱える都市はどこですか？",
        "日本の有名な芸術家は誰ですか？",
        "日本で最も有名な美術館はどこですか？",
        "日本で最近話題のアーティストは誰ですか？",
        "世界で最も人口密度の高い都市はどこですか？",
        "日本で最近話題になった映画は何ですか？",
        "日本の有名なファッションブランドは何ですか？",
        "世界で最も高い山は何ですか？",
        "日本で最も有名な夏祭りは何ですか？",
        "最近の世界経済で注目されている問題は何ですか？",
        "日本で最も古い温泉はどこですか？",
        "オーストラリアで有名な建物は何ですか？",
        "フランスで有名な建物は何ですか？",
        "アメリカで最も有名なファーストフードチェーンは何ですか？",
        "世界で最も多くの観光客が訪れる都市はどこですか？",
        "日本の有名な科学者は誰ですか？",
        "イタリアで有名な料理は何ですか？",
        "アメリカで最も有名な国立公園はどこですか？",
        "アメリカで最近人気のあるスポーツ選手は誰ですか？",
        "フランスで有名なワインの産地はどこですか？",
        "アメリカの有名な作家は誰ですか？",
        "最近の気象変動で注目されている現象は何ですか？",
        "日本の有名な作家は誰ですか？",
        "世界で最も高いビルはどこにありますか？",
        "日本で最も有名なアニメキャラクターは誰ですか？",
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
