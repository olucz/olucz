$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$('.images-container').magnificPopup({
  delegate: 'a',
  type: 'image'
});

$('.budynek-link').magnificPopup({
  type: 'image'
});