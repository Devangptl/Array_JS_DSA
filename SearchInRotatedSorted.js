let j;
let v1 = [j];
j = prompt("Enter the Size of array : ");
j = Number.parseInt(j);

for (a = 0; a < j; a++) {
  v1[a] = prompt("Enter the Element of array : ");
  v1[a] = Number.parseInt(v1[a]);
}

let i = prompt("Enter the key : ");
i = Number.parseInt(i);

let binarySearch = function(arr, start, end, key) {

  if (start > end) {
    return -1;
  }

  let mid = start + Math.floor((end - start) / 2);

  if (arr[mid] === key) {
    return mid;
  }

  if (arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]) {
    return binarySearch(arr, start, mid - 1, key);
  }

  else if (arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]) {
    return binarySearch(arr, mid + 1, end, key);
  }

  else if (arr[end] <= arr[mid]) {
    return binarySearch(arr, mid + 1, end, key);
  }

  else if (arr[start] >= arr[mid]) {
    return binarySearch(arr, start, mid - 1, key);
  }

  return -1;
};

let binarySearchRotated = function(arr, key) {
  return binarySearch(arr, 0, arr.length - 1, key);
};

console.log("Key(" + i + ") found at: " + binarySearchRotated(v1, i));
