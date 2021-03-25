// Incomplete // 
function selectionSort() {
  const array = [ 10, 9, 7, 4, 1 ]

  for(let i = 0; i < array.length; i++) { 
    for(let j = array.length - 1; j > i; j--) {
      if(array[j] < array[i]) 
        array[i] = array[j] 
    }
  }
 
  return array
}

const sorted = selectionSort()
console.log(sorted) 
