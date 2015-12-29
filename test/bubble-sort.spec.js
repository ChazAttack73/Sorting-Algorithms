var chai = require( 'chai' );
var expect = chai.expect;
chai.should();

var bubbleSort = require( '../js/bubble-sort.js');

describe( 'bubbleSort', function() {
  it( 'should exist', function () {
    expect( bubbleSort ).to.exist;
    expect( bubbleSort ).to.be.a( 'function' );
  });

  it( 'should sort an unsorted array', function () {
    var result = bubbleSort( [5,7,2,1]);

    expect( result ).to.be.an( 'array' );
    expect( result ).to.deep.equal( [1,2,5,7]);
  });
});
