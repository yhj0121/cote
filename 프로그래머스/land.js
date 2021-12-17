function solution(land) {
  var answer = 0;
    for(let i=0; i<land.length; i++){
            let arr=[];
        for(let k=0; k<land.length; k++){
            arr.push(land[i][k]);
        }
        answer+=Math.max.apply(arr);
    }
  return answer;
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));