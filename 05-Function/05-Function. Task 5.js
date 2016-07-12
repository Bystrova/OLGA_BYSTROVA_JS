//05-Function. Task 5/
  var getLink = document.getElementsByTagName('a');
    for (var i = 0; i < getLink.length; i++){
        (function(localIndex){
            getLink[i].addEventListener('click', function(e) {
                e.preventDefault();
                alert('Link #' + localIndex);
            }, false);
        })(i);
    }
