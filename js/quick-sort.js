module.exports = quickSort;

function quickSort( arr ) {
  var pivot = arr[0];
  var leftPartition = [];
  var rightPartition = [];

  for( var i = 1; i < arr.length; i++ ) {
    if( pivot > arr[i] ) {
      leftPartition.push( arr[i] );
    } else {
      rightPartition.push( arr[i] );
    }
  }

  if( arr.length <= 1 ) {
    return arr;
  } else {
  return quickSort( leftPartition ).concat( pivot, quickSort( rightPartition ) );
  }
}

console.log(quickSort( [10,3,2,53,4,89,9,9] ) );