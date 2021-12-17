function solution(phone_number) {
  var length = phone_number.length-4;
  var answer = phone_number.split('');
  for(let i=0; i<length; i++){
      answer[i]='*'

  }
  
  return answer.join('');
}

console.log(solution("01033334444"));