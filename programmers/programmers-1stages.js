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

// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  var answer = [];
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let num = 0;
  let win = 0;
  let maxResult = 0;
  let minResult = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      num++;
      continue;
    }
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        win++;
      }
    }
  }

  maxResult = win + num;
  minResult = win;

  answer.push(rank[maxResult]);
  answer.push(rank[minResult]);

  return answer;
}

// 2016년

// 방법 1
function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = week[new Date(`2016-${a}-${b}`).getDay()];

  return day;
}

// 방법 2
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return acc + (mn !== a ? month[mn] : b - 1);
  }, 0);
  return week[days % 7];
}

// 최대공약수와 최소공배수
function solution(n, m) {
  var answer = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let gcd = 0;
  let lcm = 0;
  for (let i = 1; i <= min; i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  lcm = (n / gcd) * (m / gcd) * gcd;

  answer.push(gcd);
  answer.push(lcm);

  return answer;
}

// 완주하지 못한 선수

function solution(participant, completion) {
  participant.sort(); // 참가자 명단을 오름차순으로 정렬
  completion.sort((a, b) => (a > b ? 1 : -1)); // 완주자 명단을 오름차순으로 정렬

  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      // 참가자 명단과 완주자 명단을 비교했을 때
      // 완주자 명단에 없는 참가자를 찾은 후, 바로 반복문을 종료
      answer = participant[i];
      break;
      // return answer;
    }
  }

  return answer;
}
