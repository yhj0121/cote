function solution(n) {
 let answer =[];
 let result = n.toString();

 for(let i=0; i<result.length; i++){
     answer.push(Number(result[result.length-1-i]));
 }

 return answer;
}   

console.log(solution(1234));