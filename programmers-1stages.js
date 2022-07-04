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

// 부족한 금액 계산하기
function solution(price, money, count) {
  var answer = 0;
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  if (total < money) {
    return 0;
  }

  answer = total - money;

  return answer;
}
