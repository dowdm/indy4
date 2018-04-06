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
    console.log(arrayTotal);
  }
  return this.sizeNumber + arrayTotal;
  }


//UI Logic
$(document).ready(function(){
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
  });
});
