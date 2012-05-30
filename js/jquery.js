function ipadContent(id,data){
}

(function($){
	$.fn.ipadContent = function(options){
		var id = $(this), opts;
    
    if(options.type === "default"){
  		$.fn.ipadContent.defaults = {
  		  firstName: 'First Name',
  		  email: 'Email Address',
  		  company: 'Company'
  		  
  		};
  	}
		
		opts = $.extend({}, $.fn.ipadContent.defaults, options);
    ipadContent(id, opts);
		return this;	
		
	};

})(jQuery);