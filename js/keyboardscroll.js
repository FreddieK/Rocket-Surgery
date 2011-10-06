jQuery(document).ready(function(){
  var nodes = jQuery("#block-system-main .node");
  var currentNode = nodes.first();
  currentNode.css("border-bottom", "1px solid #0071B3").addClass('currentNode');

  jQuery(document).keydown(function(e){
    currentNode = jQuery(".currentNode");
    // j pressed
    if(e.keyCode == 74){
      if(currentNode.next().hasClass('node')){
        currentNode
        .next()
          .addClass('currentNode')
        .end()
        .removeClass('currentNode');
        jQuery('html, body').animate({scrollTop: (jQuery(".currentNode").offset().top-20)}, 200);
      }
    }
    // k pressed
    else if(e.keyCode == 75){
      if(currentNode.prev().hasClass('node')){
        currentNode
         .prev()
          .addClass('currentNode')
        .end()
        .removeClass('currentNode');
        jQuery('html, body').animate({scrollTop: (jQuery(".currentNode").offset().top-20)}, 200);
      }
    }
  });
});