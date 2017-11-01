
var access_token = '..........', tag='tag', count = 3;
$.ajax({
  url: 'https://api.instagram.com/v1/tags/' + tag + '/media/recent',
  dataType: 'jsonp',
  type: 'GET',
  data: {access_token: access_token, count: count},
  success: function(result){
    console.log(result);
    for(x in result.data){
      $('ul').append('<li><a href="'+result.data[x].link+'" target="_blank"><img src="'+result.data[x].images.low_resolution.url+'"></a></li>');  
    }
    $.ajax({
      url: result.pagination.next_url,
      dataType: 'jsonp',
      type: 'GET',
      success: function(result2){
        console.log(result2);
        for(x in result2.data){
          $('ul').append('<li><a href="'+result.data[x].link+'" target="_blank"><img src="'+result2.data[x].images.standard_resolution.url+'"></a></li>');  
        }
      },
      error: function(result2){
        console.log(result2);
      }
    });
  },
  error: function(result){
    console.log(result);
  }
});
