function solution(n, move) {
  let moveObject = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };
  move = move.split(" ");
  let start = [1, 1];
  move.map((m) => {
    if (
      (start[0] == 1 && m == "U") ||
      (start[0] == n && m == "D") ||
      (start[1] == 1 && m == "L") ||
      (start[1] == n && m == "R")
    ) {
      start[0] += 0;
      start[1] += 0;
    } else {
      let arr = moveObject[m];
      start[0] += arr[0];
      start[1] += arr[1];
    }
  });
  console.log(start.join(" "));
}

solution(5, "R R R U D D");
