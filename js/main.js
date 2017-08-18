$('#header').transition({
            animation: 'fade down in',
            duration: '2s',
        });
        
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});