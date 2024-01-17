function solution(s) {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  const row = s[1];
  const cols = obj[s[0]];
  const steps = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];
  let count = 0;
  for (let step of steps) {
    let move_row = parseInt(row) + step[0];
    let move_cols = parseInt(cols) + step[1];
    if (move_row >= 1 && move_row <= 8 && move_cols >= 1 && move_row <= 8) {
      count++;
    }
  }
  console.log(count);
}

solution("a1");
