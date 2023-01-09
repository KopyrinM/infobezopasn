setInterval(function () {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    
    if (up) {
      up.removeAttribute('data-up')
    }
    
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    
    next.setAttribute('data-show', '')
  }, 2000)



  // функция вызова окна
  function show_popap(id_popap) {
    var id = "#" + id_popap;
    $(id).addClass('active');
  }
   
  // функция закрытия окна 
  $(".close_popap").click( function(){
    $(".overlay").removeClass("active");
  });




