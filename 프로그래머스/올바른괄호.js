function solution(s){
  var answer = true;
  let left =0;
  let arr = [...s];

  if(arr[0]===')') return false;

  for(let i = 0; i < arr.length; i++){
    if(arr[i]==='('){
        left++;
    }else if(left >= 1 && arr[i] === ')'){
        left--; 
    }
}
if(left === 0){
    return true;
}else{
    return false; 
}
}

console.log(solution('()()'));