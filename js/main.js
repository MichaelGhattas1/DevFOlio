$(window).scroll( function (){
    let wScroll = $(window).scrollTop();
    console.log(wScroll)
    if (wScroll>150)
    {
        $('nav').css({"background-color":"black"})
    }
    else 
    {
        $('nav').css({"background-color":"transparent"})
    }
})