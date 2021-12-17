function solution(arr){
  let temp=0;
  for(let i=0; i<arr.length; i++){
    for(let k=i+1; k<arr.length; k++){
        if(arr[i]>arr[k]){
          temp=arr[k];
          arr[k]=arr[i];
          arr[i]=temp;
        }
    }
    console.log(arr);
  }
  return arr;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));