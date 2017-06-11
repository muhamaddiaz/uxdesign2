$(function() {
  var cl1 = $('.cloud1');
  var cl2 = $('.cloud2');
  var cl3 = $('.cloud3');
  var plane = $('.airplane');
  var txt = $('.head-txt');
  $(window).scroll(function() {
    var value = $(window).scrollTop();
    plane.css('transform', 'scale(2) translate(' + (50 + value) + '%, -' + (0 + value) + '%)');
    txt.css('transform', 'translate(' + (-50) + '%,' + (-50 + value / 2) + '%)')
    cl1.css('transform', 'scale(10) translateY(-' + (0 + value  / 4) + '%)');
    cl2.css('transform', 'scale(2) translateY(-' + (0 + value  / 4) + '%)');
  });
});
