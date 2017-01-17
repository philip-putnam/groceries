$(document).ready(function() {
  $("#grocery-list form").submit(function(event) {
    var blanks = ["groceryItem1", "groceryItem2", "groceryItem3", "groceryItem4", "groceryItem5"];
    var userGroceries = [];

    var stringTemp = "groceryItem";

    blanks.forEach(function(blank) {
      userGroceries.push($("input#"+ blank).val());
    });

    alert(userGroceries);

    event.preventDefault();
  });
});
