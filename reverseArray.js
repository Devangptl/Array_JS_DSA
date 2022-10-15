

let i
let arr = [i]
i = prompt("Enter the Size of array")
i = Number.parseInt(i)

for (let a = 0; a < i; a++) {

  arr[a] = prompt("Enter the Element of Array" + (a + 1))
  arr[a] = Number.parseInt(arr[a])
}

console.log("Array is : " + arr)
console.log("Reverse array is : " + arr.reverse())
