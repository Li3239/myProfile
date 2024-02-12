// 创建页面内部平滑滚动效果的交互功能。
// 它的主要作用是在单页网站或网页内的锚点链接被点击时，以平滑的动画方式滚动到目标位置
$(function(){
    // jQuery 选择器，用于选择具有以下特征的锚点链接
    // 1. 具有 page-scroll 类的链接 ('a.page-scroll')
    // 2. 链接的 href 属性包含 # 符号，并且不等于 #（:not([href="#"])）
    $('a.page-scroll[href*="#"]:not([href="#"])')
    .on('click',function(){
        //检查当前页面路径与链接的路径是否匹配，并且检查链接的主机名是否与当前主机名匹配。这是为了确保平滑滚动只在相同页面内部进行，不会在跳转到其他页面时触发
        if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&
           location.hostname==this.hostname){
            //选择链接的目标元素（通常是页面中的一个部分或元素），并将其存储在 target 变量中
            var target=$(this.hash);
            target=target.length?target:$('[name='+this.hash.slice(1)+']');
            if(target.length){
                // 使用 jQuery 的 animate 方法来执行平滑的滚动动画。动画滚动到目标元素的顶部位置，减去页面顶部的偏移值（通常是固定导航栏的高度）。滚动的速度设置为 1200 毫秒，并且使用 "easeInOutExpo" 缓动效果。
                $('html, body').animate({scrollTop:(target.offset().top-70)},
                                         1200,"easeInOutExpo");
                                         return false;
            }
        }});
    }
);