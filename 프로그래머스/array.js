function solution(a, b) {
  var answer = 0;
  if(a>b){
      for(let i=b; i<=a; i++){
          answer+=i;
      } 
  } else if(b>a) {
    for( let k=a; k<=b; k++){
        answer+=k;
    }
} else {
  answer=b;
}
  return answer;
}

console.log(solution(3,3));