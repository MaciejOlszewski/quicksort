function quicksort(numbers) {
  if (!numbers.length){
    return numbers;
  }
  var pivot = Math.floor(numbers.length/2),
      left = [],
      right = [],
      equal = [];

  for(var i=0; i<numbers.length; i++){
    if(numbers[i]===numbers[pivot]){
      equal.push(numbers[i]);
    }
    else if (numbers[i]<numbers[pivot]) {
      left.push(numbers[i]);
    }
    else {
      right.push(numbers[i]);
    }
  }
  return quicksort(left).concat(equal, quicksort(right));
}
