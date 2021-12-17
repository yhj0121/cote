function solution(s, n) {
  var answer = '';

  for(let i = 0 ; i < s.length;i++){
    let tmp = s.charCodeAt(i)
    if (tmp == 32){
        answer += " "
    } else if ( 64 < tmp +n && tmp+n < 91){
        answer += String.fromCharCode(tmp+n)
    } else if ( 90 < tmp+n && tmp +n < 97){
        answer += String.fromCharCode(tmp+n-90+64)
    } else if (96 < tmp+n && tmp +n < 123){
        answer += String.fromCharCode(tmp+n)
    } else if (122 < tmp +n){
         answer += String.fromCharCode(tmp+n - 122 + 96)
    }

}
return answer;
}

console.log(solution("AB",1));