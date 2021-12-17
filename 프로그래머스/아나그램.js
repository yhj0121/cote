function solution(str1, str2){
     let count = new Map();
     let answer = 'yes';
     for(let x of str1){
       if(count.has(x)) count.set(x,count.get(x)+1)
       else count.set(x,1);
     }

     for(let x of str2)
     {
       if(!count.has(x)||count.get(x==0)) return 'NO'
       count.set(x,count.get(x)-1)
     }
  
  return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));