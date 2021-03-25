function selectionSort() {
  const array = [ 10, 9, 7, 4, 1 ]

  let a, b, c
  for(let a = 0; a < array.length-1; a++) {
    for(let b = a; b <= array.length; b++) {
      if(array[a] > array[b]) {
        c = array[a]
        array[a] = array[b]
        array[b] = c
      }
    }
  }

  console.log(array)
}

selectionSort()
