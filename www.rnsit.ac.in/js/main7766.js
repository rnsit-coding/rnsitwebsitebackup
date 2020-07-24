function getBaseURL() {
    var l = location.href;
    var k = l.substring(0, l.indexOf("/", 14));
    if (k.indexOf("http://localhost") != -1) {
        var l = location.href;
        var j = location.pathname;
        var g = l.indexOf(j);
        var h = l.indexOf("/", g + 1);
        var i = l.substr(0, h);
        return i + "/";
    } else {
        //return k + "/";
        return k + "/sunil/csb/";
    }
}
// $(document).keydown(function(event){    
//     if((event.keyCode==123) || (event.ctrlKey && event.shiftKey && event.keyCode==73) || (event.ctrlKey && event.shiftKey && event.keyCode==105) || (event.ctrlKey && event.keyCode==85) || (event.ctrlKey && event.keyCode==117)){
//         return false;
//     }
// });

// $(document).on("contextmenu",function(e){        
//    e.preventDefault();
// });

// PARRALAX JS
  $(function(){
    $('.parallax').parallax();
  }); // end of document ready
      