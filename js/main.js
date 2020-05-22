jQuery(document).ready(function( $ ) {

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});

		// Smooth scroll for the menu and links with .scrollto classes
	  $('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});
		
		// Init Stellar
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40
    });

});

var button = document.getElementsById("button");
button.addEventListener("click", function(event){
	event.preventDefault();

	var name = document.getElementById("contact-name").value;
	var email = document.getElementById("contact-email").value;
	var subject = document.getElementById("contact-subject").value;
	var message = document.getElementById("contact-message").value;

	function sendmail(name, email, subject, message) {
		return fetch('https://sapd0j6epg.execute-api.ap-northeast-1.amazonaws.com/prod', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name, email, subject, message})

		})
	}

	sendmail(name, email, subject, message)
});
