

var main = function() {
  $('.login-btn').click(function() {
    var entry = $('.login-box').val(); 
  });
    
    ('.login-box').keyup(function() {
        var entryLength = $(this).val().length;
        var charactersLeft = 8 - entryLength;
        
        if(charactersLeft < 0){
        $('.login-btn').addClass('disabled');
    }
    
    else if(charactersLeft == 8){
        $('.login-btn').addClass('disabled')
    }
    
    else {
      $('.login-btn').removeClass('disabled')
    }
    });
    
    $('.login-btn').addClass('disabled');
}

$(document).ready(main);