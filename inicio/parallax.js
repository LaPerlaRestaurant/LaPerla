window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    document.querySelector('.parallax').style.setProperty('top', (scrollPosition*0.75) + 'px');
    document.querySelector('.section-1 .content').style.setProperty('top', 50 - (scrollPosition*0.0) + "%");
});
