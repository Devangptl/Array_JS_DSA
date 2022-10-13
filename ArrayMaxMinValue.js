
let i
let arr = [i]
i = prompt("Enter the Size of array");
i = Number.parseInt(i)

for (let a = 0; a < i; a++) {
  arr[a] = prompt('Enter array Element ' + (a + 1));
  arr[a] = Number.parseInt(arr[a])

}
console.log(arr);
console.log(arr.reverse());
if (i == 0) {
  console.log("Enter the element in Array")
}
else {
  let c = Math.min(...arr)
  let d = Math.max(...arr)
  console.log("Minvalue of :" + c)
  console.log("Maxvalur of :" + d)
}

