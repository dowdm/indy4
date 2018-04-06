//Business Logic
function Pizza (sizeCost, toppingCost){
  this.sizeCost = sizeCost;
  this.toppingCost = toppingCost;
}

Pizza.prototype.price = function(array){
  var arrayTotal = 0;
  for (var i = 0; i < array.length; i++) {
    arrayTotal += array[i];
    console.log(arrayTotal);
  }
  return this.sizeCost + arrayTotal;
  }

//UI Logic
$(document).ready(function(){
  $("form#pie-order").submit(function(event){
    event.preventDefault();
    var pieSizeCost = parseInt($("#size").val());
    var toppingArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var oneCost = parseInt($(this).val());
      toppingArray.push(oneCost);
    });

    var pie = new Pizza(pieSizeCost, toppingArray);
    var piePrice = pie.price(pie.toppingCost);
    $("#price").text("This pie'll cost ya " + piePrice + " bucks.")
  });
});
