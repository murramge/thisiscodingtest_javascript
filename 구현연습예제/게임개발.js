const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [nm, abd, ...arr] = input;
const [n, m] = nm.split(" ").map((v) => +v);
let [x, y, d] = abd.split(" ").map((v) => +v);
const map = arr.map((v) => v.split(" ").map((v) => +v));

function solution(n, m, x, y, d, map) {
  const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  let visited = Array.from(Array(n), () => Array(m).fill(false));
  visited[x][y] = true;
  let count = 1;
  let turntime = 0;

  while (1) {
    d = d === 0 ? 3 : d - 1;
    let nx = x + dir[d][0];
    let ny = y + dir[d][1];

    if (!map[nx][ny] && !visited[nx][ny]) {
      visited[nx][ny] = true;
      x = nx;
      y = ny;
      count++;
      turntime = 0;
      continue;
    } else {
      turntime++;
    }
    if (turntime === 4) {
      nx = x - dir[d][0];
      ny = y - dir[d][1];
      if (!map[nx][ny]) {
        x = nx;
        y = ny;
        turntime = 0;
      } else {
        break;
      }
    }
  }
  console.log(count);
}

solution(n, m, x, y, d, map);
