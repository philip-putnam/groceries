$(document).ready(function() {
  $("#grocery-list form").submit(function(event) {
    $("#grocery-list").hide();

    var blanks = ["groceryItem1", "groceryItem2", "groceryItem3", "groceryItem4", "groceryItem5"];
    var userGroceries = [];

    blanks.forEach(function(blank) {
      userGroceries.push($("input#"+ blank).val());
    });

    var upperGroceries = userGroceries.map(function(string) {
      return string.toUpperCase();
    });

    upperGroceries.sort();

    // $(".groceryItem1").text(upperGroceries[0]);
    // $(".groceryItem2").text(uppgerGroceries[1]);
    var num = 0
    blanks.forEach(function(blank) {
        $("." + blank).append(upperGroceries[num]);
        num += 1;
    });

    event.preventDefault();
  });
});
