$(function () {

  // Event listening
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

});
