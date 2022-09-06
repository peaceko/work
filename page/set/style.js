 document.getElementById('menubtn').addEventListener('click', function (e) {
        $(this).toggleClass('active');
        $('#menuUl').toggleClass('active');
    })

    $('#menuUl li').click(function () {
        $(this).parent().find('li').each(function () {
            if ($(this).hasClass('current-active')) {
                $(this).toggleClass('current-active');
            }
        })
        $(this).toggleClass('current-active');
    })





// 獨立寫的原始碼，沒有外嵌

$(window).scroll(function(){            //當視窗滾動時
      if ( $(this).scrollTop() > 100) {     //如果視窗向下滾動100px
        $('.menu').addClass('scroll');  //header 加上我們剛剛寫好的scroll css
         $('.menu').addClass('menu2');
      } else {
        $('.menu').removeClass('scroll'); //如果沒有的話就刪除 scroll css
        $('.menu').removeClass('menu2');
     }
  });




 /* ==================================================
            Preloader Init
         ===============================================*/
        $(window).on('load', function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut(3000);;
        });