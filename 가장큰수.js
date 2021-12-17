function solution(numbers) {
  
  var io =numbers.map(c=> c + '') .sort((a,b) => (b+a) - (a+b)).join('');


  var ia = numbers.map(numbers=> numbers.toString()).sort((a,b) => (b+a) - (a+b)).join("");
  return ia;

}
console.log(solution([3, 30, 34, 5, 9]));