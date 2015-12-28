var chai = require( 'chai' );
var expect = chai.expect;
chai.should();

var bubbleSort = require( '../js/bubble-sort.js');

describe( 'bubbleSort', function() {
  it( 'should exist', function () {
    expect( bubbleSort ).to.exist;
    expect( bubbleSort ).to.be.a( 'function' );
  });
});
