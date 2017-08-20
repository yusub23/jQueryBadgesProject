$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/Yuriy_Zubaha.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var $badges = $('#badges');
      var courses = response.courses.completed;
      courses.forEach(function(course) {
        $div = $('<div />', {
          'class': 'course'
        }).appendTo($badges);

        $('<h3 />', {
          text: course.title
        }).appendTo($div);

        $('<img />', {
          src: course.badge
        }).appendTo($div);

        $('<a />', {
          'class': 'btn btn-primary',
          target: '_blank',
          href: course.url,
          text: 'See Course'
        }).appendTo($div);
      });
    }
  });

});
