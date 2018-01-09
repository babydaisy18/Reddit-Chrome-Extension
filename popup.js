$(function () {

  // Event listening code goes here.
  // Be sure to check popup.html to learn the `id` attributes of the apply/remove filter
  // buttons and the username input box - you'll need those to listen for events!
  $('#filter-off').click(function () {
    chrome.tabs.executeScript({ code: 'window.parser.filter(false)' });
  });

  $('#filter-on').click(function () {
    chrome.tabs.executeScript({ code: 'window.parser.filter(true)' });
  });

  $('#username').keydown(function () {
    var user = $('#username').val();
    chrome.tabs.executeScript({ code: 'window.parser.parse(' + user + ')' });
  });

  // HINT: You can't access window.parser here. You'll have to use chrome.tabs.executeScript
  // to call window.parser.filter and window.parser.parse.

});
