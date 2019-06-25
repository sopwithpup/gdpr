//= require js.cookie
$(function(){
  $('.js-gdpr__cookie_consent__buttons__ok').click(function() {
    Cookies.set('gdpr.cookie_consent.ok', true, { path: '/', expires: 365 });
    $('.js-gdpr__cookie_consent').remove();
  });
});

$(function(){
  $('.js-gdpr__cookie_consent__buttons__no').click(function() {
   window.location.href = "http://duckduckgo.com";
     });
});
