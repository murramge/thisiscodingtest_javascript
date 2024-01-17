function solution(n, k) {
  let count = 0;
  while (n > 1) {
    n % k == 0 ? (n = n / k) : (n = n - 1);
    count++;
  }
  console.log(count);
}
solution(17, 4);

//큰 수가 되어도 작동하려면
function answer(n, k) {
  let count = 0;
  while (1) {
    target = parseInt(n / k) * k;
    count += n - target;
    n = target;
    if (n < k) {
      break;
    }
    count += 1;
    n /= k;
  }
  count += n - 1;
  console.log(count);
}
answer(17, 4);
