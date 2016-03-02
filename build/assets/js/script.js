    


$('#credit-card-number__data').validateCreditCard(function(result){
	if (result.card_type === null){ $('.credit-card__items input').prop("checked",false)
}
	else{ 
		$("#" + result.card_type.name).prop("checked", true);
			showCSV();}
});


// [ GOTCHA ]
// American Express cards have the csv in a different location
// So, if the American Express radio button is selected (card begins in 34 or 37)
// we will have to switch out the csv-sprite__image, as well
//

function showCSV(){
	var security = $('.csv-sprite'); 	//show the csv
		if($('#amex').is(':checked')){	 	//but if the input is an amex
			security.addClass('amex');	 	//add the amex class to the csv-sprite class
	} 
		else{security.removeClass('amex');
}
}


Modernizr.load({
	test: Modernizr.input.required,
	nope: {
		'validateFallback': 'assets/js/vendor/jquery.validate.min.js'
	},

callback: {
	'validateFallback': function(url, result, key){
		$('#whoo-signup').validate();
	}
}
})