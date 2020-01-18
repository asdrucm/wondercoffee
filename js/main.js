$(document).ready(function() {
  function getData(){
    $.getJSON('products.json', function(obj) {
      $.each(obj.data, function(key, value){
        const price = value.price/100;
        $('.container').append('<div class="content"><img src="'+ value.image +'" alt="Coffee Bag"><p class="name">'+ value.name + '</p><p class="price">$'+ price +'</p></div>');
      });
    });
  };
  getData();
  $('#btnopen').click(function(e){
    e.preventDefault();
    $('.modal').addClass('opened');
  });
  $('.btnclose').click(function(e){
    e.preventDefault();
    $('.modal').removeClass('opened');
  });
  $('.modal').click(function(){
    $('.modal').removeClass('opened');
  });
  $('.modal-content').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  });
});
