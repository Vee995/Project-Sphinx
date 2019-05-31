var offsetScroll = 80; //Scroll Offset

$('body').attr('data-offset', (offsetScroll + 1).toString());

$(function(){
  

  var typedjsOptions;
  
  var options = {
    strings: ["Website created by", "Divyan Hirasen and Verosha Pillay"],
    typeSpeed: 40,
    loop: true,
    backDelay: 2000
  }
  
  var typed = new Typed(".typed-js-text", options);
  
  
  
  
  
});