let i
let arr=[i]
i=prompt("Enter the size of array")
i=Number.parseInt(i)
for(a=0;a<i;a++){
  arr[a]=prompt("Enter the Element of array")
  arr[a]=Number.parseInt(arr[a])
}
console.log(arr)
function containsDuplicates() {
  if (i !== new Set(arr).size) {
    return true;
  }

  return false;
}

console.log(containsDuplicates(arr)); 
