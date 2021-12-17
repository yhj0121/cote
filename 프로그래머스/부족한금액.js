function solution(price, money, count) {
  var sum=0;
  var result=0;
    for(let i=1; i<=count; i++){
        sum+=price*i;
    }
      if((sum-money)>=0){
        result = (sum-money);
      }else if((sum-money)===0){
        result =0;
      }else if(sum===0){
        result = 0;
      }
  return result;
}

console.log(solution(3,20,4));