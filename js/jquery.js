function ipadContent(id,data){
}

(function($){
	$.fn.ipadContent = function(options){
	  
		var id = $(this), opts, fieldset, objAt = 0;
    
    options.fieldset.forEach(function(o) {
      objAt +=1;
      fieldset = "<fieldset>";
        fieldset += "<div class='form'>";
          fieldset += "<div class='tab "+objAt+"'>";
            fieldset += "<legend><div class='"+objAt+"'><span class='C_FirstName_display'>"+o.firstName+"</span>&nbsp;<span class='C_LastName_display'>"+o.LastName+"</span></div></legend>";
		      fieldset += "</div>";
		      fieldset += "<div id='"+objAt+"' class='input'>";
		        fieldset += "<label>First Name:</label>";
		        fieldset += "<br/>";
		        fieldset += "<input class='firstName' type='text' name='C_FirstName' value='"+o.firstName+"' />";
		        fieldset += "<br/>";
		        fieldset += "<label>Last Name:</label>";
		        fieldset += "<br/>";
		        fieldset += "<input class='lastName' type='text' name='C_LastName' value='"+o.lastName+"' />";
		        fieldset += "<br/>";
		        fieldset += "<label>Email:</label>";
		        fieldset += "<br/>";
		        fieldset += "<input class='email' type='text' name='C_Email' value='"+o.email+"' />";
		        fieldset += "<br/>";
		      fieldset += "</div>";
		    fieldset += "</div>";
		  fieldset += "</fieldset>"; 
		  
		  $(id).append(fieldset);     
		});
		

    // opts = $.extend({}, $.fn.ipadContent.defaults, options);
    //     ipadContent(id, opts);
    // return this; 
		
	};

})(jQuery);