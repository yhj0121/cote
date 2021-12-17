function solution(N, stages) {
  var answer = [];
  for(let i = 1; i <= N ; i++){
      answer.push([i, stages.filter(a => a===i).length/stages.filter(a=> a>=i).length]);
  }
  console.log(answer);
  
  return answer.sort((a,b) => b[1]-a[1]).map(a=> a[0]);
}

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]	));