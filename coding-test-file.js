// a: array/list
// i : 1 ( second index of array)
// l : length of array
// n : current number of minus, used for counting , initially 0
// s : current sum, initially first elemt of array
// sign: current string of signs, initially empty
// result : global param, the final result
// numberofminus : global var to store maximum number of minus in result string

const func = (a, i, l, n, s, sign) => {
  console.log('i: ',i)
  console.log('n: ',n)
  console.log('s: ',s)
  console.log('sign: ',sign)
  console.log('+++++++++++++this is initial +++++++++++++++++++++')
    if (i == l) {
        console.log('enter full lenght of i',i,l,' currnet full sum: ',s)
    if (s == 0) {
        console.log('current sum is zero number of minus ',numberofminus,'result: ',result)
      if (n > numberofminus) {
        numberofminus = n;
        result = sign;
      }
    }
  console.log('+++++++++++++this is final +++++++++++++++++++++')

    return;
  }
  func(a, i + 1, l, 1 + n, s - a[i], sign + "-");
  func(a, i + 1, l, n, s + a[i], sign + "+");
};

// console.log('~~~~~~~~~~~~~')
// result = ''
// numberofminus = 0
// func([3,5,1,3,2],1,5,0,3,'')
// console.log(result)

console.log("~~~~~~~~~~~~~");
let result = "";
let numberofminus = 0;
//let a = [2, 6, 7, 1, 2];
let a = [1,2,1,4];
//let a = [0];
if(a.length){
func(a, 1, a.length, numberofminus, a[0], result);
}
if (numberofminus === 0) {
  console.log("not possible");
} else {
  console.log(result);
}
