$(document).ready(function () {
    function Pizza(type, crust, toppings, size) {
        this.type = type;
        this.crust = crust;
        this.toppings = toppings;
        this.size = size;
    }
    var totalAmount = 0;
    var newOrder = [];

    Pizza.prototype.myToppingsPrice = function () {
        if (this.size === "large") {
            if (this.toppings === "tomato") {
                return 150;
            } else if (this.toppings === "onions") {
                return 120;
            } else {
                return 180;
            }
        } else if (this.size === "medium") {
            if (this.toppings === "tomato") {
                return 100;
            } else if (this.toppings === "onions") {
                return 80;
            } else {
                return 140;
            }
        } else {
            if (this.topping === "tomato") {
                return 80;
            } else if (this.toppings === "onions") {