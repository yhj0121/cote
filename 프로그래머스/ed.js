function solution(s) {
  let answer;
  s.replace('one','1')
  s.replace('two','2')
  s.replace('three','3')
  s.replace('four','4')
  s.replace('five','5')
  s.replace('six','6')
  s.replace('seven','7')
  s.replace('eight','8')
  s.replace('nine','9')
  s.replace('zero','0')
  answer= Number(s);
return answer;

}

console.log(solution("one4seveneight"));