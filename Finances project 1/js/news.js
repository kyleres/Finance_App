
// START SCRIPT FOR NEWS WINDOW


var NIFshow	= "yes"		// SHOW NEWS IFRAME



   if (NIFshow == "yes") {

// START NEWS WINDOW
document.write('<div id="news_window">');
document.write('<div class="news_window-title">');
document.write('News and Updates<br>');
document.write('</div>');
document.write('<iframe name="NewsIFrame" src="news_window.html" frameborder="0" scrolling="no"></iframe>');
document.write('</div>');
// END NEWS WINDOW


}

// END SCRIPT