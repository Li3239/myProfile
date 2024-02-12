(function($){
    "use strict";
    // $(window) 是一个 jQuery 选择器，用于选择网页中的窗口对象（window 对象）
    // 当使用 $(window) 时，可以在 JavaScript 中操作和监听浏览器窗口的各种事件，
    // 例如窗口滚动、窗口大小改变、页面加载完成等。
    // 这对于创建交互式和响应式的网页非常有用，因为它允许你以可编程的方式响应浏览器窗口的各种变化。
    $(window).on('load',function(event){
        // $('.preloader')：意为选择class="preloader"的DOM元素
        // 预加载效果：当页面加载完成后，.preloader 元素会延迟 500 毫秒淡出，以展示预加载效果
        $('.preloader').delay(500).fadeOut(500);
    });
    // 它的作用是在页面中找到具有类名 "navbar-toggler" 的元素（通常是用于触发导航栏折叠/展开的按钮），
    // 然后在点击这个元素时切换其是否具有 "active" 类名。
    $(".navbar-toggler").on('click',function(){
        //当 "navbar-toggler" 元素被点击时，这行代码会在该元素上切换 "active" 类名的存在。如果元素当前没有 "active" 类名，它将被添加；如果已经存在，则会被移除
        $(this).toggleClass('active');
    });
    // 导航中的 Home, about, projects 等<a>元素
    $(".navbar-nav a").on('click',function(){
        //当导航链接（".navbar-nav a"）被点击时，它会移除按钮的 "active" 类名，以确保按钮状态正确反映导航栏的展开或折叠状态
        $(".navbar-toggler").removeClass('active');});
    
    // $(".navbar-nav a").on('click',function(){
    //     $(".navbar-collapse").removeClass("show");});
    
    $(window).on('scroll',function(event){
        var scroll=$(window).scrollTop();
        if(scroll<10){
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });
    
    var scrollLink=$('.page-scroll');
    $(window).scroll(function(){
        var scrollbarLocation=$(this).scrollTop();
        scrollLink.each(function(){
            var sectionOffset=$(this.hash).offset().top-73;
            if(sectionOffset<=scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');}
            }
        );
    });
    
    // 鼠标在画面上移动时，页面元素“parallax”下的子元素会做相应的移动
    function parallaxMouse(){
        // 检查页面上是否存在具有 id 为 "parallax" 的元素
        if($('#parallax').length){
            var scene=document.getElementById('parallax');
            // 查看“parallax.min.js”中的处理
            var parallax=new Parallax(scene);
        };
    };
    parallaxMouse();

    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el=$(this);var percent=el.data('width');
            $(el).css('width',percent+'%');},{accY:0});
    }
    $('.counter').counterUp({delay:10,time:1600,});
    $('.image-popup').magnificPopup({type:'image',gallery:{enabled:true}});
    $(window).on('scroll',function(event){
        if($(this).scrollTop()>600){
            $('.back-to-top').fadeIn(200)
        }else{
            $('.back-to-top').fadeOut(200)}
        }
    );
    
    $('.back-to-top').on('click',function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:0,},1500);
    });
}(jQuery));