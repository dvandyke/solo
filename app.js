var randomProperty = function(obj){
	var keys = Object.keys(obj);
	return keys[keys.length *Math.random() <<0] ;
};

$('#submit').on('click', function(){
	var param = $('.active').find('input').attr('id').toString();
	console.log(param);
	$('#myModal').modal('hide');
	$('.lead').fadeOut(1000);
	myFirebaseRef.child(param).on('value', function(snapshot){
		$('.cover-heading').fadeOut(1000, function(){
			console.log(snapshot.val());
			var author = randomProperty(snapshot.val());
			console.log(author);
			$('.cover-heading').html(snapshot.val()[author] + ' <br>- 	<i>'+author+'</i> '
				+'<span class="glyphicon glyphicon-star-empty"></span>').fadeIn(2300);
		})
		// $('.cover-heading').fadeOut(function(){	
		// });
	});
});

$('body').on('click', '.glyphicon', function(){
	$(this).toggleClass('glyphicon-star-empty glyphicon-star');
})

var myFirebaseRef = new Firebase('https://sizzling-inferno-4974.firebaseio.com/%20Quotes');
