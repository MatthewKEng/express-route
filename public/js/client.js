$(function(){
  // ask the server for songs, and then draw them
  getSongs();

  // listen for submit events and send new songs to the server
  $('form').on('submit', function(event){
    //if (($('#title').val()==='')||($('#artist').val()==='')||(($('#title').val()==='')&&($('#artist').val()===''))){
      //alert("Please enter a valid title or artist!");
    //}else{
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '/songs',
      data: formData,
      success: getSongs,
      //failure: someFn,     failure function
    });

    $(this).find('input[type=text]').val('');
  //})
  });//end of listener
});


function getSongs() {
  $.ajax({
    type: 'GET',
    url: '/songs',
    success: function(songs){
      $('#songs').empty();
      songs.forEach(function(song){
        var $li = $('<li></li>');
        $li.append('<p>'+ song.title + '</p>');
        $li.append('<p>by: '+ song.artist + '</p>');
        $('#songs').append($li);
      });
    }
  });
}
