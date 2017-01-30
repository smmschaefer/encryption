$(function(){
  $('#nav').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('#nav').data('size') == 'big')
    {
        $('#nav').data('size','small');
		
        $('#nav').stop().animate({
            height:'40px'
        },600);
		
    }
}
else
  {
    if($('#nav').data('size') == 'small')
      {
        $('#nav').data('size','big');
        $('#nav').stop().animate({
            height:'65px'
        },600);
      }  
  }
});
