

$(document).ready(function(){


 
      $("#my-table-creativo").hide();
      $("#my-table-solos").hide();
      $("#my-table-duos").hide();

    $("#option1").click(function(){
      $("#my-table-duos").show();
      $("#my-table-creativo").hide();
      $("#my-table-solos").hide();
      $("#my-table-solos-q").hide();
      $("#my-table-creativo-q").hide();
      $("#my-table-duos-q").hide();

    });
    $("#option2").click(function(){
        $("#my-table-creativo").show();
        $("#my-table-solos").hide();
        $("#my-table-duos").hide();
        $("#my-table-solos-q").hide();
        $("#my-table-creativo-q").hide();
        $("#my-table-duos-q").hide();
    });
    $("#option3").click(function(){
        $("#my-table-solos").show();
        $("#my-table-creativo").hide();
        $("#my-table-duos").hide();

        $("#my-table-solos-q").hide();
      $("#my-table-creativo-q").hide();
      $("#my-table-duos-q").hide();
    });
    
    $("#buscador1").click(function(){
      $("#my-table-solos").hide();
      $("#my-table-creativo").hide();
      $("#my-table-duos").hide();
      var v = document.getElementById("buscador").value;
      $("#my-table-creativo-q").sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1bAvzXFOSQXRAzUZEHxmeQUxhQinHUJTh0xJ5mW" +
                "wHrl0/edit#gid=0",
                sql: "select * where B like '" + v + "%'"
    });
    $("#my-table-solos-q").sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1XyTkbMzVKmLEUXx-J8B4QsbRp_3t1TfcJugUvj" +
                "WLCQg/edit#gid=0",
                sql: "select * where B like '" + v + "%'"
    });
    $("#my-table-duos-q").sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1CPCVUbsZMw6eW9ntqom3GRR5ZqgnDj0OQnzzas" +
                "Xnsx4/edit#gid=0",
                sql: "select * where B like '" + v + "%'"
    });
  });

  });