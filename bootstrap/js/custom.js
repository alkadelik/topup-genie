$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
 
   var $target = $( event.currentTarget );
 
   $target.closest( '.btn-group' )
      .find( '[data-bind="label"]' ).text( $target.text() )
         .end()
      .children( '.dropdown-toggle' ).dropdown( 'toggle' );
 
   return false;
   
 
});

$(function(){
	
	$('a.pop').click(function(e) {
		e.preventDefault();
	})
	$("rel=['tooltip']").tooltip();
	
})
