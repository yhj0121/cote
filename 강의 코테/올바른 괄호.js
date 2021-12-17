function solution(s){
      
  let answer = "true"
  let stack = [];
  if(s[0]===")") return 'no';

  for(let x of s)
  {
    if(x=='(') stack.push(x);
      else {
        if(stack.length===0) return 'NO';
        stack.pop();
      }
  }
  
  if(stack.length>0) return "NO";  
  return answer;

}

let a="(()(()))(()";
console.log(solution(a));