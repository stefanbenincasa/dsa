const sorted = []
const unsorted = [ 1, 4, 7, 9, 10 ]

for(let i = 0; i < unsorted.length; i++) {
  for(let j = 0; j < sorted.length; j++) {
    if(unsorted[i] < sorted[j] || sorted.length === 0) {
      sorted.unshift(unsorted[i]) 
    }
  }

  i === unsorted.length-1 && console.log(sorted)
}
