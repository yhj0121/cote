function solution(x) {
  let e=0;
  let d=0;
  let c=0;
  let b=0;
  let a=0;

  if(x>10000){
       e=Math.floor(x/10000);
       d=Math.floor((x-e*10000)/1000);
       c=Math.floor(((x-e*10000)-1000*d)/100);
       b=Math.floor((((x-e*10000)-1000*d)-100*c)/10);
       a=Math.floor(((((x-e*10000)-1000*d)-100*c)-10*b));

        if(x%(a+b+c+d+e)===0){
          return true;
            }else{
               return false;
        }
  }else if(x<10000&&x>1000){
    d=Math.floor(x/1000);
    c=Math.floor((x-d*1000)/100);
    b=Math.floor(((x-d*1000)-c*100)/10);
    a=Math.floor(((x-d*1000)-c*100)-b*10);
    if(x%(a+b+c+d)===0){
      return true;
        }else{
           return false;
    }
  }
}

console.log(solution(65555));