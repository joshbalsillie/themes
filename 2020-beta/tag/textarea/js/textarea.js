/*
 * @author: Joshua Balsillie
 * @version: 1.0
 * @since: 2020-01-12
 */

'use strict'; // ECMAScript version 5 strict mode

/*var textarea = {
	// global placeholder object for defining variables and methods for this file
	setup : function(){
		if( window.attachEvent ){
			textarea.observe = function( element, event, handler ){
				element.attachEvent( 'on' + event, handler );
			};
		}
		else {
			textarea.observe = function ( element, event, handler ){
				element.addEventListener( event, handler, false );
			};
		}
	},
	initialize : function(){
		window.addEventListener( "load", function( event ){
			var text = document.getElementById('text');

			function resize(){
				text.style.height = 'auto';
				text.style.height = text.scrollHeight+'px';
			}
			function delayedResize(){
				// 0-timeout to get the already changed text
				window.setTimeout(resize, 0);
			}
			textarea.setup();
			textarea.observe(text, 'change', resize);
			textarea.observe(text, 'cut',delayedResize);
			textarea.observe(text, 'paste', delayedResize);
			textarea.observe(text, 'drop', delayedResize);
			textarea.observe(text, 'keydown', delayedResize);

			text.focus();
			text.select();
			resize();
		})
	}
};
textarea.initialize();
*/

var autoExpand = function( element ){
	// source: https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
	element.style.height = 'inherit'; // Reset element height
	var computed = window.getComputedStyle( element );// Get the computed styles for the element

	// Calculate the height
	var height = 	element.scrollHeight
					+ parseInt( computed.getPropertyValue( 'border-top-width' ), 10)
					+ parseInt( computed.getPropertyValue( 'padding-top' ), 10)
					+ parseInt( computed.getPropertyValue( 'padding-bottom' ), 10)
					+ parseInt( computed.getPropertyValue( 'border-bottom-width' ), 10);

	element.style.height = height + 'px';

};

document.addEventListener( 'input', function( event ){
	if( event.target.tagName.toLowerCase() !== 'textarea' ) return;
	autoExpand( event.target );
}, false );