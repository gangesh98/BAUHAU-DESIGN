function myFunction(x) {
  x.classList.toggle("change");
}
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

$(document).ready(function(){
  $('.testonomial-right').slick({
    
  });

$('.testonomial-right').slick({
  rtl: true
});
});



$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".header-section, .footer-fixed").css("background" , "#b3b3b3");
	  }

	  else{
		  $(".header-section, .footer-fixed").css("background" , "transparent");  	
	  }
  })
})

