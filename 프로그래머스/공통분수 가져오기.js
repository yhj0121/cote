function solution(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k]) {
        sum.push(arr1[i]);
      }
    }
  }
  return sum.sort((a,b)=> a-b);

}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));