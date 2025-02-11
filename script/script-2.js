window.addEventListener('scroll', updateScroll);
window.addEventListener('resize', updateScroll);


var timeout;
    
window.addEventListener('scroll', function() {
    var homeButton= document.getElementById('homeButton');
    clearTimeout(timeout);
    
    if (window.pageYOffset > 200) {
        homeButton.style.display = 'block';
        timeout = setTimeout(function() {
            homeButton.style.display = 'none';
        }, 6000);
    } else {
        homeButton.style.display = 'none';
    }
});