// function solution(s){  
              
//   let stack=[];

//   for(let x of s )
//   {
//     if(x===')') 
//     {
//       while(stack.pop()!=='(');
//     }
//       else stack.push(x);
//   }
//   return stack.join("");
// }

function solution(s)
{
  let answer;
  let stack = [];
  for (let x of s) {
    if(x!==')'){
      stack.push(x);
    } else {
      let index = stack.lastIndexOf('(');
      stack.splice(index);

    }
  }

  return stack.join("");
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));