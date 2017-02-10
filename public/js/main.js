$(document).ready(function () {
  console.log('Hello. I am jQuery');

  var updatingBear;

  $('.delete-btn').on('click', function () {
    var id = $(this).attr('id');
    updatingBear = id;
    $.ajax({
      url: "/api/bears/" + id,
      method : "DELETE"
    }).done(function(){
      console.log('The bear with id:' + id + "is dead.");
    });
    $(this).closest('tr').remove();

  });

  $('.update-btn').on('click', function () {
    var id = $(this).attr('id');
    updatingBear = id;
    $.ajax({
      url: "/api/bears/" + id,
      method: "GET"

    }).done(function (data) {
      $('#species').val(data.species);
      $('#age').val(data.age);
      $('#name').val(data.name);
      $('#weight').val(data.weight);
      $('#location').val(data.location);
      $('#attitude').val(data.attitude);
      $('#subBear').addClass('updateBear');


    });

  })
  $('#newBear').submit(function (e) {
    e.preventDefault();
    //make a new bear
    var newBear = {
      species: $('#species').val(),
      age: $('#age').val(),
      name: $('#name').val(),
      weight: $('#weight').val(),
      location: $('#location').val(),
      attitude: $('#attitude').val(),
    };
    var ajaxUrl = $('#subBear').hasClass('updateBear') ? '/api/bears/' + updatingBear : '/api/bears/';
    var ajaxMethod = $('#subBear').hasClass('updateBear') ? 'PUT' : 'POST';
    if($('#subBear').hasClass('updateBear')){
      $('#subBear').toggleClass('updateBear');

    }
    console.log(newBear);
    //add bear to database
    $.ajax({
      url: ajaxUrl,
      method: ajaxMethod,
      data: newBear,
    }).done(function (data) {
      console.log("create a bear.", data);


    });
    //reloads page
    window.location= '/bears';

  });

});
