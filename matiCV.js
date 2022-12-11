let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  
    let iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe){
      
        let data_src = iframe.getAttribute('data-src');
        iframe.setAttribute('src', data_src);
    });

});

