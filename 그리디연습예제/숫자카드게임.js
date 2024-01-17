function solution(n, m, num) {
    const arr = [];
    let min = 0;
    for (let i = 0; i < n; i++) {
        min = Math.min(...num[i]);
        arr.push(min);
    }

    console.log(Math.max(...arr));
}
solution(2, 4, [
    [7, 5, 4, 8],
    [3, 3, 3, 4],
]);

// 이중 for문으로 할 수도 있음.