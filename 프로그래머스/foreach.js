function solution(numbers){
var answer =[];
let o = 0;

for(let i=0; i<numbers.length-1; i++){
    for(let k=1; k<numbers.length; k++){
        if(i!==k){
         o=numbers[i]+numbers[k];
        answer.push(o);
        }
           
    }
  
}
answer =[...new Set(answer)];
    answer.sort((a, b) => {
        return a - b;
     })
  return answer;

    }

    console.log(solution([5,0,2,7]));