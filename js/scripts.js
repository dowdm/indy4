//Business Logic
function Pizza (sizeWord, sizeNumber, toppingWord, toppingNumber){
  this.sizeWord = sizeWord;
  this.sizeNumber = sizeNumber;
  this.toppingWord = toppingWord;
  this.toppingNumber = toppingNumber;
}

Pizza.prototype.price = function(array){
  var arrayTotal = 0;
  for (var i = 0; i < array.length; i++) {
    arrayTotal += array[i];
  }
  return this.sizeNumber + arrayTotal;
  }

var basketArray = [];

function basketSum(array) {
  var basketTotal = 0;
  for (var i = 0; i < array.length; i++) {
    basketTotal += array[i];
  }
  return basketTotal;
}


//UI Logic
$(document).ready(function(){
  var total = 0;
  $("form#pie-order").submit(function(event){
    event.preventDefault();
    var pieSizeVal =$("#size").val()
    var sizeArray = pieSizeVal.split(" ");
    var sizeName = sizeArray[0];
    var sizeCost = parseInt(sizeArray[1]);

    var toppingArrayName = [];
    var toppingArrayCost = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topNameCost = $(this).val();
      var topNameCostArray = topNameCost.split(" ");
      toppingArrayName.push(topNameCostArray[0]);
      toppingArrayCost.push(parseInt(topNameCostArray[1]));
    });

    var pie = new Pizza(sizeName, sizeCost, toppingArrayName, toppingArrayCost);
    var piePrice = pie.price(pie.toppingNumber);
    $("#price").text(  "A " + pie.sizeWord + " with " + pie.toppingWord + " costs $" + piePrice);
    $(".catalog").append('<li>' + pie.sizeWord + ' - ' + pie.toppingWord + ' ' + '$' + piePrice);
    $("#hide").show();
    $("#checkout").show();
    $("#cart").show();
    basketArray.push(piePrice);
    total = basketSum(basketArray);
    console.log(total);
    })
  $(".ordermore").click(function(){
    $("#price").text(" ");
  });
  $("#checkout").click(function(){
    $("#total").show();
    $("#total").text("Your grand total is $"+total);
  });
});
