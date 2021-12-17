function solution(sizes) {
  var answer =0;
  let mo=[];
  let moo=[];
  for(let k=0; k<sizes.length; k++){
    (sizes[k][0]>sizes[k][1])? mo.push(sizes[k][0]): mo.push(sizes[k][1]);
    var max = Math.max.apply(null,mo);
}
  for(let i=0; i<sizes.length; i++){
        (sizes[i][0]>sizes[i][1])? moo.push(sizes[i][1]): moo.push(sizes[i][0]);
        var min = Math.max.apply(null,moo);
  }
  return max*min;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));