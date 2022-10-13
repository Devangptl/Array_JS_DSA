
function maxSum(arr) {
  let a1 = 0
  let a2 = arr[0]
  arr.forEach((j, a) => {
    a1 = Math.max(j, a1 + j)
    a2 = Math.max(a2, a1)
  })
  return a2
}

let i
let arr = [i]
i = prompt("Enter the Size of array")
i = Number.parseInt(i)

for (let a = 0; a < i; a++) {

  arr[a] = prompt("Enter the Element of Array" + (a + 1))
  arr[a] = Number.parseInt(arr[a])
}

console.log(arr)
console.log(maxSum(arr))
