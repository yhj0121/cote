function solution(left, right) {
  var answer = 0;
  for(let i=left; i<=right; i++){
    let arr =[];
    for(let k=1; k<=i; k++){
      if(i%k==0){
      arr.push(k);
      }
    }
        if(arr.length%2==0){
            answer+=i;
        }else{
          answer-=i;
        }

  }
  return answer;
}

console.log(solution(13,17));