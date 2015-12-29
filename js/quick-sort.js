module.exports = quickSort;

function quickSort( arr ) {
  var pivot = arr[0];
  var leftPartition = [];
  var rightPartition = [];

  for( var i = 0; i < arr.length; i++ ) {
    if( arr[i] >= arr[0] ) {
      rightPartition.push( arr[i] );
    } else {
      leftPartition.push( arr[i] );
    }

    if( arr.length <= 1 ) {

    }
  }
      console.log(rightPartition);
      console.log(leftPartition);
}

console.log( quickSort( [10,3,2,53,4,89,9,9] ) );