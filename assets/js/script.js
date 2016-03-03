    
// credit card validation

$('#credit-card-number__data').validateCreditCard(function(result){
	if (result.card_type === null) {
		$('.credit-card__items input').prop("checked",false)
	} else { 
		$("#" + result.card_type.name).prop("checked", true);
			showCSV();}
});


// [ GOTCHA ]
// American Express cards have a 4-digit csv on the front of the card
// So, if the American Express radio button is selected (card begins in 34 or 37)
// we will have to switch out the csv-sprite__image, as well
// 

function showCSV(){
	var csv = $('.csv-sprite'); 			//get the csv-sprite class
		if ($('#amex').is(':checked')){	 	//but if the input is an amex
			csv.addClass('amex');	 		//add the amex class to the csv-sprite class
	} else { csv.removeClass('amex');		//remove amex class if it was previously selected
}
}


//Modernizr script

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