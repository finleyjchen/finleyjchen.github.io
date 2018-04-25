function repeat() {
    eat();
    sleep();
    code();
    repeat();
  }

$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".index-list").addClass(".affix-top");
    }
});
  
