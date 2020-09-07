-1,5 +1,6
$function;{
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total };
            return {f, s, c, t, n, total};
        };

        //check price
-375,11 +376,14 
$(function () {
        }
        //Exec order function
        //Execute order function
        .let,'newOrder' = order(flavour, size, crust, topping, number, totalPrice)
        console.log (newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
-390,7 +394,24
(function () {
            + newOrder.total + "<br><br>".css('font-family', 'system-ui').css('font-size', '24px');
    }

    (function() {
    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up
    $(".delivernot").click(function () {

    });

    //Scrollify
    $(function {
        $.scrollify.move('#sum-order');
    }