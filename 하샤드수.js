function solution(x) {
  var sum =0;
  var tmp =x;
    while(tmp){
      sum+=(tmp%10);
      tmp=Math.floor(tmp/10);
  }

  if(x%sum===0){
    return true;
  } else {
    return false;
  }



}

console.log(solution(10));