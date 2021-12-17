function solution(answers) {
  var answer = [];

  var first= [1,2,3,4,5];
  var second =[2,1,2,3,2,4,2,5];
  var third = [3,3,1,1,2,2,4,4,5,5];
 

  for(let i=0; i<=2000; i++){
    first.push(first[0]);
    first.push(first[1]);
    first.push(first[2]);
    first.push(first[3]);
    first.push(first[4]);
  }

  for(let k=0; k<=1250; k++){
    second.push(second[0]);
    second.push(second[1]);
    second.push(second[2]);
    second.push(second[3]);
    second.push(second[4]);
    second.push(second[5]);
    second.push(second[6]);
    second.push(second[7]);

  }

  for(let p=0; p<=1000; p++){
    third.push(third[0]);
    third.push(third[0]);
    third.push(third[2]);
    third.push(third[2]);
    third.push(third[4]);
    third.push(third[4]);
    third.push(third[6]);
    third.push(third[6]);
    third.push(third[8]);
    third.push(third[8]);
  }

  first = first.filter((n, index) => n === answers[index]);
  second = second.filter((n, index) => n === answers[index]);
  third = third.filter((n, index) => n === answers[index]);

  if (first.length > second.length) {
    if (first.length > third.length) {
    	answer.push(1);
    } else if (first.length === third.length) {
    	answer.push(1);
    	answer.push(3);
    } else {
    	answer.push(3);
    }
  } else if (first.length === second.length) {
    if (first.length > third.length) {
      answer.push(1);
      answer.push(2);
    } else if (first.length === third.length) {
      answer.push(1);
      answer.push(2);
      answer.push(3);
    } else {
    	answer.push(3);
    }
  } else {
    if (second.length > third.length) {
    	answer.push(2);
    } else if (second.length === third.length) {
      answer.push(2);
      answer.push(3);
    } else {
    	answer.push(3);
    }
  }
  return answer;
}