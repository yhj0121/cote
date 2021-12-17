function solution(n) {
  let x = Math.floor(Math.sqrt(n));
  let zeco = Math.pow(x,2);

    if(zeco===n){
      return zeco = Math.pow(x+1,2);

    }else{
      return -1;
    }
}
console.log(solution(144));