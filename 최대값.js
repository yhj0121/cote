function solution(k, arr){
  let max =0; 
  let sum =0;
     for(let i=0; i<arr.length; i++){
       sum=arr[i]+arr[i+1]+arr[i+2];

       if(sum>max){
         max =sum;
       }
     }
      return max;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));