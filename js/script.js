// Multiplication
$(document).ready(function(){

  $(".multiplication").click(function(event){

    var number1 = parseInt($("input#add1").val());
    var number2 = parseInt($("input#add2").val());

    var total = (number1 * number2);

    $(".number1").text(number1);

    $(".number2").text(number2);

    $("#results").text(total);

    $(".results").show();

    event.preventDefault();

  });

});

// Addition
$(document).ready(function(){

  $(".addition").click(function(display){

    var number1 = parseInt($("#add1").val());

    var number2  = parseInt($("#add2").val());

    var total  = (number1 + number2);

    $(".number1").text(number1);

    $(".number2").text(number2);

    $("#results").text(total);

    $(".results").show();

    display.preventDefault();

  });

});

// Subtraction
$(document).ready(function(){

  $(".subtraction").click(function(display){

    var number1 = parseInt($("#add1").val());

    var number2  = parseInt($("#add2").val());

    var total  = (number1 - number2);

    $(".number1").text(number1);

    $(".number2").text(number2);

    $("#results").text(total);

    $(".results").show();

    display.preventDefault();

  });

});

// Division
$(document).ready(function(){

  $(".division").click(function(display){

    var number1 = parseInt($("#add1").val());

    var number2  = parseInt($("#add2").val());

    var total  = (number1 / number2);

    $(".number1").text(number1);

    $(".number2").text(number2);

    $("#results").text(total);

    $(".results").show();

    display.preventDefault();

  });

});