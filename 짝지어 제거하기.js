function solution(s)
{

    const answer = []
    const a = [...s];

    for(let i = 0; i < a.length; i++) {        
      //문자 비교
      if(a[i] == answer[answer.length-1]) {
          answer.pop();
          continue
      }


      //문자 입력
      answer.push(a[i])
      console.log(answer);


      //남은 문자의 개수가 현재까지 입력된 개수보다 적으면 0
      if(a.length - i < answer.length) return 0
  }

  return 1



    return answer;
}

console.log(solution('baabaa'));