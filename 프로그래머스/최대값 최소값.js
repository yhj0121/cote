function solution(s) {
  var answer = '';
 s=  s.split(' ');
  let max = Math.max.apply(null,s);
  let min = Math.min.apply(null,s);
  answer = min+' '+max;
  return answer
}

console.log(solution("1 2 3 4"));