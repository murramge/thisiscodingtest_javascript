function solution() {
  let money = 1260;
  const arr = [500, 100, 50, 10];
  let count = 0;

  for (let m of arr) {
    count += parseInt(money / m);
    money %= m;
  }
  console.log(count);
}
solution();

// 중요한 점. 항상 거스름 돈 구성이 가장 큰 수의 배수여야지만 이 그리디 알고리즘이 성립됨.
// 500, 400, 100 뭐 이런식이면 성립할 수 없다.
