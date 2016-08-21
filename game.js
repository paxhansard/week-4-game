$( document ).ready(function(){
	
	

	
		var randomNumber = Math.floor(Math.random() * (120 - 19) + 19 );
		// var crystal1 = Math.floor(Math.random() * (11) + 1 );
		// var crystal2 = Math.floor(Math.random() * (11) + 1 );
		// var crystal3 = Math.floor(Math.random() * (11) + 1 );
		// var crystal4 = Math.floor(Math.random() * (11) + 1 );
		var crystal1 = $('<img>');
			crystal1.attr('data-num', Math.floor(Math.random() * (11) + 1 ));
			crystal1.attr('src', 'crystal1.jpg');
			crystal1.attr('id', 'crystal1');
	      	crystal1.attr('alt', 'crystals');
	     	crystal1.addClass ('crystalClass');
	    var crystal2 = $('<img>');
			crystal2.attr('data-num', Math.floor(Math.random() * (11) + 1 ));
			crystal2.attr('src', 'crystal2.jpg');
			crystal2.attr('id', 'crystal2');
	      	crystal2.attr('alt', 'crystals');
	     	crystal2.addClass ('crystalClass');
	    var crystal3 = $('<img>');
			crystal3.attr('data-num', Math.floor(Math.random() * (11) + 1 ));
			crystal3.attr('src', 'crystal3.jpg');
			crystal3.attr('id', 'crystal3');
	      	crystal3.attr('alt', 'crystals');
	     	crystal3.addClass ('crystalClass');
	    var crystal4 = $('<img>');
			crystal4.attr('data-num', Math.floor(Math.random() * (11) + 1 ));
			crystal4.attr('src', 'crystal4.jpg');
			crystal4.attr('id', 'crystal4');
	      	crystal4.attr('alt', 'crystals');
	     	crystal4.addClass ('crystalClass');
		
	    $('#crystals').append(crystal1, crystal2, crystal3, crystal4);
		$('#randomNumber').text(randomNumber);
		
	var wins = 0;
	var losses = 0;

	



	var score = 0;
	$('#winsLosses').html("Wins: " + wins + "<br> Losses: " + losses)
	// $('#wins').text(wins);
	// $('#losses').text(losses);
		$('.crystalClass').on('click', function(){
	      score = score + parseInt($(this).data('num'));
	  	// })
	  	// $('#crystal2').on('click', function(){
	   //    score = score + crystal2;
	  	// })
	  	// $('#crystal3').on('click', function(){
	   //    score = score + crystal3;
	  	// })
	  	// $('#crystal4').on('click', function(){
	   //    score = score + crystal4;
	  	// })
		  	$('#score').text(score);{
		  		if (score == randomNumber){
		  			alert('You won!');
		  			var win = function(){
		  			wins++;
		  			score = 0;
		  			}
		  		}else if (score > randomNumber){
		  			alert('You lose.');
		  			var lose = function(){
		  			losses--;
		  			score = 0;
		  			}
		  		}
	  		};
		 });
	
});