document.addEventListener('DOMContentLoaded', function () {
    if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
        
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('mobile-text').style.display = 'block';

        
        document.getElementById('map-container').style.display = 'none';
    }
});
