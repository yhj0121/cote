function solution(n) {
  let arr=[];
  var answer = 0;
  for(let k=0; k<n; k++){
    if(n%k===1){
      arr.push(k);
    }
    answer = Math.min.apply(null,arr);
  }
  return answer;
}

console.log(solution(10));