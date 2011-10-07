jQuery(document).ready(function(){
  var menu = jQuery(Drupal.settings.rocketsurgery.floatingmenu.selector);
  var startingY = menu.offset().top;

  menu.css({
    'position' : 'relative',
    'z-index'  : '200'
  });

  jQuery(window).bind("scroll", function(){
    currentPos = getPageY();
    if(currentPos > startingY && menu.css('position') == 'relative'){
      menu.css({
        'position' : 'fixed',
        'top'      : '0'
      });
    }
    else if(currentPos <= startingY && menu.css('position') == 'fixed'){
      menu.css({
        'position' : 'relative'
      });
    }
  });
});

// Based on getPageScroll() by quirksmode.com
function getPageY(){
  var yScroll;
  if(self.pageYOffset){
    yScroll = self.pageYOffset;
  }
  else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {// all other Explorers
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}