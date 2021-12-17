function solution(lottos, win_nums) {
  var answer = 0;
  var count =0;
  var rank =[6,6,5,4,3,2,1];
  var result=[];
  for(let i=0; i<lottos.length; i++){
   
      for(let k=0; k<win_nums.length; k++){
        if(lottos[i]===win_nums[k]){
            count++;
        }
      }
  }
  for(let o=0; o<lottos.length; o++){
    if(lottos[o]===0){
      answer++;
    }
  }

  answer+=count;



     
  result[0] = rank[answer];   //최고
  result[1] = rank[count];  //최저
  return result;
  
}

console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]));