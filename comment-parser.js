var CommentParser = function ($comments, op) {
  // Save the $comments and op as state!
  this.$comments = $comments;
  this.op = op;
};


// parse and filter implementations go here.
//parse should take a String username as a parameter
//apply the classes answered-chain and unanswered-chain to each top level comment
//based on whether username shows up in the chain
//only one of these classes should ever be applied to a top level comment at a time
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
  //when page first loads, filter(true) should be called in the parse method & 
  //unanswered chains should be hidden
  //if filter(false) is subsequently called unanswered chains should be shown
  //don't change classes; use $topLevelComment.css('display', 'block') to show comments
  //$topLevelComment.css('display', 'none'); to hide comments

};