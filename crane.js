function solution(board, moves) {
  var answer = 0;
  var crane = [];
  
  for(let i=0; i<moves.length; i++){
    for(let k=0; k<board.length; k++){
      if(board[k][moves[i]-1]>0){   //board[2차원 배열]
        crane.push(board[k][moves[i]-1]);
        board[k][moves[i]-1]=0;
          
      }
      
    }
    for(let o=0; o<crane.length; o++){
      if(crane[o]===crane[o+1]){
          crane.splice(o,2);
          answer = answer+2;
          o=0;
      }
    }
    
  }
  
  
  return answer;
  
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]));
