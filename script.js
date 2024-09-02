const quizQuestions = [
    // 地理
    "日本で最も広い県は？",
    "アメリカの首都はどこですか？",
    "アフリカで最も広い国はどこですか？",
    "東京23区で面積が最大の区は？",
    "日本最南端の島はどこですか？",

    // 歴史
    "江戸幕府を開いた将軍は誰ですか？",
    "鎌倉幕府を倒したのは誰ですか？",
    "明治維新が始まった年は？",
    "日本で最も古いお寺は？",
    "大化の改新が行われたのは何年？",

    // 理科
    "酸素の化学記号は？",
    "地球の自転周期は何時間？",
    "太陽系で最も大きい惑星は？",
    "光が一年間に進む距離を何と呼ぶ？",
    "炭素を含まない化合物は何ですか？",

    // 社会
    "日本の総理大臣は誰ですか？",
    "国会はどこで開かれますか？",
    "国連の本部はどこにありますか？",
    "日本の最高裁判所はどこにありますか？",
    "日本の消費税率は何％ですか？",

    // 公民
    "三権分立の三つの権力は？",
    "日本国憲法の施行日は？",
    "国民が持つ三つの義務は？",
    "参議院議員の任期は何年ですか？",
    "日本で初めて女性参政権が認められたのは何年？",

    // 時事
    "最新のノーベル平和賞受賞者は？",
    "最近のオリンピック開催地は？",
    "国際的な温暖化防止の合意は何と呼ばれる？",
    "最近の国連総会で話題になったテーマは？",
    "最近の主要G7サミットの開催地は？",

    // その他のトピック
    "日本の最長河川は？",
    "地球上で最も大きな哺乳類は？",
    "火星の表面を探査した最初のロボットは？",
    "日本の国技は何ですか？",
    "オーストラリアの国鳥は何ですか？",

    // 日本史
    "関ヶ原の戦いが起こったのは何年？",
    "明治天皇が即位したのは何年？",
    "徳川家康が生まれたのはどこですか？",
    "源頼朝が鎌倉幕府を開いたのは何年？",
    "幕末に活躍した薩摩藩士は誰ですか？",

    // 世界史
    "第一次世界大戦が始まった年は？",
    "アメリカ独立宣言が発表された年は？",
    "ナポレオンがフランス皇帝になった年は？",
    "ベルリンの壁が崩壊したのは何年？",
    "ロシア革命が起こった年は？",

    // 科学
    "水は何度で氷になる？",
    "元素の周期表で水素の次にくる元素は？",
    "DNAの二重らせん構造を発見した科学者は？",
    "イギリスの生物学者で進化論を提唱したのは？",
    "地球の中心部を何と呼ぶ？",

    // 公民・時事
    "日本で国会が開かれる期間は？",
    "日本の人口は何人ですか？（2023年時点）",
    "日本の内閣総理大臣は誰ですか？",
    "G20サミットで話し合われる主要なテーマは？",
    "国際連合が設立されたのは何年？",

    // スポーツ
    "オリンピックが初めて開催された年は？",
    "サッカーW杯で最も多く優勝した国は？",
    "バスケットボールの起源はどこの国ですか？",
    "テニスの4大大会を何と呼ぶ？",
    "日本のプロ野球リーグのチーム数は？",

    // 音楽・文化
    "日本で最も有名な歌舞伎俳優は誰ですか？",
    "クラシック音楽で最も有名な作曲家は？",
    "ビートルズのメンバーは何人？",
    "ハリウッド映画のアカデミー賞を何と呼ぶ？",
    "日本で最も売れた小説は？",

    // 食文化
    "寿司のネタとして人気の魚は何ですか？",
    "フランス料理のコースで最初に出されるものは？",
    "日本の伝統的な正月料理は何ですか？",
    "イタリアの有名なパスタ料理は何ですか？",
    "チョコレートの原料は何ですか？",

    // 美術・文学
    "有名な絵画「モナリザ」を描いた画家は？",
    "日本の有名な浮世絵師は誰ですか？",
    "シェイクスピアの代表作は？",
    "ダヴィンチが描いた有名な人物は？",
    "最も翻訳された日本の小説は？"
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
