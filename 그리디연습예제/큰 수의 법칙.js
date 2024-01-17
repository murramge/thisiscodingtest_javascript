function solution(n, m, k) {
  const arr = [2, 4, 5, 4, 6];
  arr.sort((a, b) => b - a);
  let count = 0;
  for (let j = 0; j < m / 2; ) {
    for (let i = 0; i < k; i++) {
      count += arr[0];
      j++;
    }
    count += arr[1];
  }
  console.log(count);
}
solution(5, 8, 3);

function answer(n, m, k) {
  const arr = [2, 4, 5, 4, 6];
  arr.sort((a, b) => b - a);
  //반복되는 수열의 길이.
  count = Number(m / (k + 1)) * k;
  //6임. 8 / 4 * 3 -> 4개씩 반복 k+1 반복. 그리고 총 길이를 나눈 후, 다시 반복할횟수를 곱함. 가장 큰 수가 더해지는 횟수를 구함
  console.log(count);
  //나누어떨어지지 않는 경우 고려. 몫을 추가로 함.
  count += m % (k + 1);
  console.log(count);
  let result = 0;
  result += count * arr[0];
  //횟수를 구했으니 큰 수를 곱하면 됨
  result += (m - count) * arr[1];
  //총 길이 - 가장 큰 수가 더해진 횟수는 그 다음 수를 더해줘야하므로
  console.log(result);
}
answer(5, 8, 3);
