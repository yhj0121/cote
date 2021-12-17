function solution(n,arr) {

  let left=0;
  let right=1;
  let sum=0;
  let count=0;

  for(let i=0; i<arr.length-1; i++){
    sum=arr[left];
    count++;
    while(sum<n){
      count++;
      sum+=arr[right];
      right++;

    }
  }
  
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));