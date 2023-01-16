const PlusMinus = (num) => {
const arrOfStrs = Array.from(String(num));
const a = arrOfStrs.map((str) => Number(str));
let result = "";
let numberofminus = 0;

 const func = (a, i, l, n, s, sign) => {
    if (i == l) {
      if (s == 0) {
        if (n > numberofminus) {
          numberofminus = n;
          result = sign;
        }
      }
      return;
    }
    func(a, i + 1, l, 1 + n, s - a[i], sign + "-");
    func(a, i + 1, l, n, s + a[i], sign + "+");
  };

  if(a.length){
  func(a, 1, a.length, numberofminus, a[0], result);
  }
  if (numberofminus === 0) {
    return "not possible";
  } else {
    console.log('this is final result');
    return result;
  }
  
}
console.log(PlusMinus(35132))
//console.log(PlusMinus( 26712 ))