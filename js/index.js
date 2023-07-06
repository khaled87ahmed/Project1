$("section5 div h6").click((e)=>{
    $(e.target).next().slideToggle(500)
    $(e.target).next().siblings(".box1").slideUp(500)
    $(e.target).children().toggleClass('fa-minus')
    $(e.target).children().toggleClass('fa-plus')
    $(e.target).children().toggleClass('sec5OrangeColor')
    $(e.target).children().toggleClass('sec5BlackColor')
    $(e.target).parent('.sec5BigBox').toggleClass('sec5OrangeBorder');
    $(e.target).parent('.sec5BigBox').toggleClass('sec5BlackBorder');
})

$('.center').fadeOut(5000)
