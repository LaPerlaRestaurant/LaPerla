window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    document.querySelector('.parallax').style.setProperty('background-position-y', 0 + (scrollPosition) + 'px');
});
