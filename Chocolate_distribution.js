//j is a arr of length
let j
let arr = [j]
j = prompt("Enter the Size of array")
j = Number.parseInt(j)

for (a = 0; a < j; a++) {
  arr[a] = prompt("Enter the Element Of array")
  arr[a] = Number.parseInt(arr[a])
}
console.log(arr)


//j is a arr of length
let m
function findMinDiff() {
  if (m == 0 || j == 0) {
    return 0;
  }
  arr.sort(function(a, b) {
    return a - b
  })

  if (j < m)
    return -1;

  let min_diff = Number.MAX_VALUE;

  for (let i = 0; i + m - 1 < j; i++) {
    let diff = arr[i + m - 1] - arr[i];

    if (diff < min_diff) {
      min_diff = diff;
    }
  }
  return min_diff;
}

m = prompt(" Enter the distribute chocolate packets m : ")
m = Number.parseInt(m)

console.log("Minimum difference is : " + findMinDiff(arr, j, m));
