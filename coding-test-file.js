// a: array/list
// i : 1 ( second index of array)
// l : length of array
// n : current number of minus, used for counting , initially 0
// s : current sum, initially first elemt of array
// sign: current string of signs, initially empty
// result : global param, the final result
// numberofminus : global var to store maximum number of minus in result string

function func(a, i, l, n, s, sign) {
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
}

console.log('~~~~~~~~~~~~~')
result = ''
numberofminus = 0
func([3,5,1,3,2],1,5,0,3,'')
console.log(result)

console.log('~~~~~~~~~~~~~')
// result = ''
// numberofminus = 0
// func([2,6,7,1,2],1,5,0,2,'')
// console.log(result)

