module.exports = bubbleSort;

function bubbleSort( arr ) {
  var positionSwap = 0;

  for( var i = 0; i < arr.length; i++ ) {
    var a = arr[i];
    var b = arr[i + 1];

    if ( a > b ) {
      arr[i] = b;
      arr[i + 1] = a;
      positionSwap++;
      console.log(positionSwap);
    }

    if ( i === arr.length - 1 ) {
      if ( positionSwap === 0 ) {
        console.log(arr);
        return arr;
      } else {
        console.log(arr);
        return bubbleSort( arr );
      }
    }
  }
}

console.log(bubbleSort( [7, 3, 5, 2, 28, 82, 4]));