/**
 *	ATBO's fadeThrough jQuery Plugin for simple Element Fading
 *	nothing less, nothing more.
 *
 *  The MIT License (MIT)
 *	
 *	Copyright (c) 2014 www.at-bo.com
 *	
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *	
 *	The above copyright notice and this permission notice shall be included in all
 *	copies or substantial portions of the Software.
 *	
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *	SOFTWARE.
 */
if( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	}
}
(function( $, window, document, undefined ) {
	var Fader = {
		init: function( options, elem ) {
			var self = this;
			self.elem = elem;
			self.$elem = $( elem );
			if( typeof options === 'string' ) {
				self.interval = options;
			} else {
				self.options = $.extend( {}, $.fn.fadeThrough.options, options );
			}
			self.$elem.children(self.options.childIdentifier).css({ position: "absolute" });
			self.$elem.children(self.options.childIdentifier).hide();
			self.currentItem = self.$elem.children().first(self.options.childIdentifier);
			self.currentItem.show();
			if(self.options.animatestartheight) {
				self.$elem.animate({height: self.currentItem.height()}, self.options.heightduration);
			} else {
				self.$elem.height(self.currentItem.height());
			}
			self.timer = false;
			if(self.options.autostart) {
				self.start();
			}
		},
		start: function () {
			var self = this;
			if(!self.timer)
			self.timer = setInterval( function () { self.next(); }, self.options.interval);
		},
		stop: function () {
			var self = this;
			clearInterval(self.timer);
			self.timer = false;
		},
		next: function () {
			var self = this;
			var next = (self.currentItem.next().length > 0 ? self.currentItem.next() : self.$elem.children().first(self.options.childIdentifier));
			if(self.options.autowidth) {
				next.width(self.$elem.width());
			}
			self.$elem.animate({height: next.height()}, self.options.heightduration);
			self.currentItem.fadeOut();
			next.fadeIn(self.options.fadeduration);
			self.currentItem = next;
		}
	}
	$.fn.fadeThrough = function( options ) {
		return this.each(function (k, v) {
			if( typeof jQuery.data(v, 'fadeThrough') === 'undefined') {
				var fader = Object.create( Fader );
				fader.init( options, this );
				jQuery.data( v, "fadeThrough", fader);
			} else {
				return jQuery.data( v, "fadeThrough")[options]();
			}
		});
	}; 
	$.fn.fadeThrough.options = {
		interval: 3000,
		fadeduration: 500,
		heightduration: 500,
		animatestartheight: false,
		autostart: true,
		autowidth: false,
		childIdentifier: '.item'
	}
})( jQuery, window, document );