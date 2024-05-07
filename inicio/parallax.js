window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    document.querySelector('.parallax').style.setProperty('background-position-y', (scrollPosition*0.75) + 'px');
});
