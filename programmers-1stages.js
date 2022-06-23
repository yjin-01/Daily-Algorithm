//정수 내림차순으로 배치하기

function solution(n) {
  var answer = 0;

  let arr = n.toString().split("");
  arr.sort((a, b) => {
    return b - a;
  });

  answer = arr.join("");

  return Number(answer);
}

// 수박수박수박수박수박수?
function solution(n) {
  var answer = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }

  return answer;
}
