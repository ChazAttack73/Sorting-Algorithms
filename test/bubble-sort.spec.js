var chai = require( 'chai' );
var expect = chai.expect;
chai.should();

var bubble = require( '../js/bubble-sort.js');
var quickSort = require( '../js/quick-sort.js');

describe( 'bubbleSort', function() {
  it( 'should exist', function () {
    expect( bubble ).to.exist;
    expect( bubble ).to.be.a( 'object' );
  });

  it( 'should sort an unsorted array', function () {
    var result = bubble.bubbleSort( [5,7,2,1] );

    expect( result ).to.be.an( 'array' );
    expect( result ).to.deep.equal( [1,2,5,7] );
  });
});

describe( 'quickSort', function() {
  it( 'should exist', function () {
    expect( quickSort ).to.exist;
    expect( quickSort ).to.be.a( 'function' );
  });

  it( 'should sort an unsorted array', function () {
    var result = quickSort( [5,7,2,1] );

    expect( result ).to.be.an( 'array' );
    expect( result ).to.deep.equal( [1,2,5,7] );
  });
});