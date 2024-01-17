function solution(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= 59; j++) {
      for (let k = 0; k <= 59; k++) {
        const time = `${i}${j}${k}`;
        if (time.includes("3")) count++;
      }
    }
  }
  console.log(count);
}

solution(5);

//처음에는 문제를 잘 이해하지 못해서 000000~n5959 이런식으로 모든걸 비교해주려 했음.
//생각해보니 시, 분, 초를 기준으로 나눠야 함.
