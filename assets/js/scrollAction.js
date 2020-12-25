const elList = [$('#navbar'), $('#hero-image'), $('#about-section')]
const scrollAction = () => {
    if ($(this).scrollTop() > 20) {
        elList.forEach(el => el.addClass('scrolled'))
    } else {
        elList.forEach(el => el.removeClass('scrolled'))
    }
}

$().ready(scrollAction)
$(window).scroll(scrollAction);
