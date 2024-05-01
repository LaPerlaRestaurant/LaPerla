window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    document.querySelector('.img-container').style.setProperty('top', (scrollPosition*0.75) + 'px');
    document.querySelector('.img-container .content').style.setProperty('top', 50 - (scrollPosition*0.15) + "%");
});
