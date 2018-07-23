var CommentParser = function ($comments, op) {
  // Save the $comments and op as state
  this.$comments = $comments;
  this.op = op;
};


CommentParser.prototype.parse = function (username) {
//stuff
for(var i = 0; i < this.$comments.length; i++) {
  var original = this.op;
  var $authors = $(this.$comments[i]).find('a.author');
  var isAnswered = false;
  $(this.$comments[i]).removeClass('unanswered-chain');
  $(this.$comments[i]).removeClass('answered-chain');
  $authors.each(function () {
      var $this = $(this);
      if (username === undefined || username === null || username === '') {
        if ($this.text() === original) {
          isAnswered = true;
        }
      } else {
        if ($this.text() === username) {
          isAnswered = true;
        }
      }
    });
    if (isAnswered) {
      $(this.$comments[i]).addClass('answered-chain');
    } else {
      $(this.$comments[i]).addClass('unanswered-chain');
    }
  }
  //set filter to true
  this.filter(true);
  
};

CommentParser.prototype.filter = function (shouldFilter) {
//stufff
for (var i = 0; i < this.$comments.length; i++) {

   if (shouldFilter) {
      $(this.$comments[i]).css('display', 'none');
    } else {
      $(this.$comments[i]).css('display', 'block');
    }
  }
};
