var API_URL = 'http://www.omdbapi.com/?t=';
var FIREBASE_URL = 'https://flicks.firebaseio.com/flicks.json';

var button = document.querySelector('.search'); 

$('button').click(function () {
  title = document.querySelector('#movie').value;
  var img = document.querySelector('img');
  var movie = API_URL + title;
  $('.hidden').removeClass('hidden');

  $.getJSON(API_URL + title,function(data){
        console.log(data);
    var row = $('.row');
    var imgSrc = data.Poster;
    var img = document.createElement('img');
    row.append(img);
    row.append('<td>' + data.Title + '</td>');
    row.append('<td>' + data.Year + '</td>');
    row.append('<td>' + data.Rated + '</td>');
    row.append('<td>' + data.Runtime + '</td>');

    img.setAttribute('src', imgSrc);
  });
});

$('.hidden').on('click', function(){
  $.get(API_URL + title, function(data) {
    console.log(data);
    debugger;
    $.post(FIREBASE_URL, JSON.stringify(data), function(data){
       })
 })
})


