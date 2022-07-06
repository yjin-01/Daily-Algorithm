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

// 나머지가 1이 되는 수 찾기
function solution(n) {
  let a = 0;
  let x = 1;

  while (a !== 1) {
    x++;
    a = n % x;
  }
  return x;
}

//약수의 갯수와 덧셈

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    count % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}
