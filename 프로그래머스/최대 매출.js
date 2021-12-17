// function solution(k, arr){

//   let answer, sum=0;
//   for(let i=0; i<k; i++) sum+=arr[i];
//   answer=sum;
//   console.log(answer);
//   for(let i=k; i<arr.length; i++){
//       sum+=(arr[i]-arr[i-k]);
//       answer=Math.max(answer, sum);
//   }                    
//   return answer;
        
//   }
   
function solution(k,arr){

  let sum=0;
  let count=0;

  for(let i=0; i<k; i++){
    sum+=arr[i];
    answer=sum;
  }
  for(let j=k; j<arr.length; j++){
    sum+=(arr[j]-arr[j-k]);
    answer=Math.max(answer,sum);
    console.log(answer);
  }

}
    

    



let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));