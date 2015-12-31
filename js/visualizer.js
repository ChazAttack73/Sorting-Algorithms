$( document ).ready( function() {

  var bubbleSortModule = require( './bubble-sort.js' );

  //========== Create main container for Visualizer
  var mainDiv = $( '<div>' );
    mainDiv
      .addClass( 'mainDiv' )
    ;
    $( 'body' ).append( mainDiv );

  //========== Create container for graphic display
  var visualizerDiv = $( '<div>' );
    visualizerDiv
      .addClass( 'visualizerDiv' )
    ;
    $( mainDiv ).append( visualizerDiv );

  //========== Create buttons for each sort algorithm
  var buttonNames = [ 'Bubble', 'Quick', 'Merge', 'Insertion', 'Selection' ];

  for( var i = 0; i < buttonNames.length; i++ ) {
    var sortButtonsDiv = $( '<div>' );
      sortButtonsDiv
        .addClass( 'sortButtonsDiv' )
        .addClass( buttonNames[i] )
        .text( buttonNames[i] )
      ;
      $( mainDiv ).append( sortButtonsDiv );
  }

  //========== Create randomized array of 50 numbers
  var randoArr = [];

  for( var j = 0; j < 50; j++ ) {
    var randoNum = Math.floor(( Math.random() * 50 ) + 1 );
    randoArr.push( randoNum );

  //========== Create bars proportionate to number value
    var bars = $( '<div>' );
      bars
        .addClass( 'bars' )
        .css( 'height', ( 10 * randoArr[j] ) + 'px' )
      ;
      $( visualizerDiv ).append( bars );
  }
  console.log(randoArr);

  //========== Click event for Bubble Sort
  $( '.sortButtonsDiv.Bubble' ).click(function() {
    $( '.visualizerDiv' ).empty();
    var bubbleSorted = bubbleSortModule.bubbleSort( randoArr );
    for( var k = 0; k < 50; k++ ) {
      var bars = $( '<div>' );
      bars
        .addClass( 'bars' )
        .css( 'height', ( 10 * bubbleSorted[k] ) + 'px' )
      ;
      $( visualizerDiv ).append( bars );
    }
      console.log( bubbleSorted );
  });
});