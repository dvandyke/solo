$('#submit').on('click', function(){
	$('#myModal').modal('hide');
	$('.lead').fadeOut(1000);
	myFirebaseRef.orderByValue().limitToFirst(1).on('child_added', function(snapshot){
		$('.cover-heading').fadeOut(1000, function(){
			console.log(snapshot.val());
			$('.cover-heading').html(snapshot.val() + ' - '+snapshot.key()
				+'<span class="glyphicon glyphicon-star"></span>').fadeIn(2000);
		})
		// $('.cover-heading').fadeOut(function(){	
		// });
	});
});

var myFirebaseRef = new Firebase('https://sizzling-inferno-4974.firebaseio.com/');
