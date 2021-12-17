function solution(participant, completion) {
  var answer = '';
    for(let i=0; i<participant.length; i++){
      for(let k=0; k<completion.length; k++){
        if(participant[i]==completion[k]){
          participant.splice(i);
          completion.splice(i);
        }
      }
    }
    for(let j=0; j<=participant.length; j++){
      answer+=participant[j];
    }
    return answer;
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]));