var myFirebaseRef = new Firebase('https://sizzling-inferno-4974.firebaseio.com/%20Quotes');
var randomProperty = function(obj){
	var keys = Object.keys(obj);
	return keys[keys.length *Math.random() <<0] ;
};

var backgrounds = ['clouds.mp4', 'raindrops.mp4', 'stars.mp4', 'ocean.mp4', 'beach.mp4', 'lightning.mp4'];
var bg = 0;

$('#submit').on('click', function(){
	var param = $('.active').find('input').attr('id').toString();
	console.log(param);
	$('#myModal').modal('hide');
	$('.lead').fadeOut(1000);
	$('.inner-cover').find('button').fadeOut(1000, function(){
		this.remove();
	});
	myFirebaseRef.child(param).on('value', function(snapshot){
		$('.cover-heading').fadeOut(1000, function(){
			console.log(snapshot.val());
			var author = randomProperty(snapshot.val());
			console.log(author);
			$('.cover-heading').html(snapshot.val()[author] + ' <br>- 	<i>'+author+'</i> '
				+'<span id="star" class="glyphicon glyphicon-star-empty"></span>').fadeIn(2300);
			$('.inner-cover').append('<button type="button" href="#myModal" class="btn btn-lg btn-default" data-toggle="modal" data-target="#myModal">Next Quote</button>').hide().fadeIn(2300);
		})
	});
});

$('body').on('click', '#star', function(){
	$(this).toggleClass('glyphicon-star-empty glyphicon-star');
      $("audio").play();
});

//CHANGING BACKGROUNDS
$(".glyphicon-picture").on("click", function(){
	console.log($("video").attr("src"));
	$("video").fadeTo(800, .1, function(){
		bg = (bg+1) % backgrounds.length;
		$("video").attr("src", backgrounds[bg]).fadeTo(800, 1);
	});
});

$("#next").on("click", function(){
	console.log($("video").attr("src"));
	if($("#music")[0].paused === false){
		$("#music").trigger('pause');
		$('#next').removeClass();
		$('#next').addClass('glyphicon glyphicon-pause');
	} else {
		$("#music").trigger('play');
		$('#next').removeClass();
		$('#next').addClass('glyphicon glyphicon-play');

	}
});




