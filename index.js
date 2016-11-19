function iterativeLog(array){
  array.forEach(item => {
  console.log(`${array.indexOf(item)}: ${item}`)
  })
}



function iterate(callback){
  var evens = [0, 2, 4, 6, 8, 10]
  evens.forEach(callback)
  return evens;

}

function doToArray(array, callback) {
  array.forEach(callback)
}
