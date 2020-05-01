

$(document).ready(function(){
      $("#my-table-creativo").hide();
      $("#my-table-solos").hide();
      $("#my-table-duos").hide();

    $("#option1").click(function(){
      $("#my-table-duos").show();
      $("#my-table-creativo").hide();
      $("#my-table-solos").hide();
    });
    $("#option2").click(function(){
        $("#my-table-creativo").show();
        $("#my-table-solos").hide();
        $("#my-table-duos").hide();
    });
    $("#option3").click(function(){
        $("#my-table-solos").show();
        $("#my-table-creativo").hide();
        $("#my-table-duos").hide();
    });
  });