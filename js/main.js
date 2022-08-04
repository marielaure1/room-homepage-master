let count = 0

const actived = (count) => {

    $(".img-hero.desktop, .img-hero.mobile, .shop").each((i, element) => {
        $(element).removeClass('active')
    })

    $(".img-hero.desktop").eq(count).addClass("active")
    $(".img-hero.mobile").eq(count).addClass("active")
    $(".shop").eq(count).addClass("active")
}

$(".btn-left").each((i, btn) => {

    $(btn).on("click", () => {

        if(count <= 0){
            count = 2
        } else{
            count--
        }

        actived(count)
    })
})

$(".btn-right").each((i, btn) => {

    $(btn).on("click", () => {
        
        if(count >= 2){
            count = 0
        } else{
            count++
        }

        actived(count)
    })
})

$(".menu-burger").on("click", () => {
    $(".menu-burger").toggleClass("active")
    
    if($(".menu-burger").hasClass('active')){
        $(".icon-menu").eq(1).addClass("active")
        $(".icon-menu").eq(0).removeClass("active")

        $(".nav-mobile").addClass("active")
    } else{
        $(".icon-menu").eq(0).addClass("active")
        $(".icon-menu").eq(1).removeClass("active")

        $(".nav-mobile").removeClass("active")
    }
})