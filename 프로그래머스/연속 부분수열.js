function solution(m, arr){
let answer=0;
let rt=0,sum=0,lt=0;
  for(rt=0; rt<arr.length; rt++){
    sum+=arr[rt];
    while(sum>m){
        sum-=arr[lt++];
    }
 
    answer+=(rt-lt+1);
    console.log(answer);
}               
return answer;
}
  
  let a=[1, 3, 1, 2, 3,4];
  console.log(solution(5, a));