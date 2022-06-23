function solution(n) {
  var answer = 0;

  let arr = n.toString().split("");
  arr.sort((a, b) => {
    return b - a;
  });

  answer = arr.join("");

  return Number(answer);
}
