window.onload = $(document).ready(function(){
    jQuery.navlevel2 = function(level1,dytime) {
        $(level1).hover(function(){
            me = $(this);
            delytime = setTimeout(function(){
                me.find('.dropdown-menu').slideDown();
            },dytime);
        },function(){
            clearTimeout(delytime);
            $(this).find('.dropdown-menu').slideUp();
        })
    };
    window.onload=jQuery.navlevel2("li.mainlevel",300);
})