var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, location, element) {
        this.element = element;
        this.element.innerHTML += "Name: " + name + "<br> Quantity:" + quantity + "<br> Price:"
            + price + "<br> Location:" + location + "<br><br>";
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.location = location;
    }
    return Grocery;
}());
window.onload = function () {
    var el = document.getElementById("content");
    var grocery = [new Grocery('bread', 2, 2.99, 'Cape Cod', el),
        new Grocery('eggs', 1, 5.99, 'Wellington', el),
        new Grocery('milk', 2, 3.99, 'Manchester', el),
        new Grocery('cereal', 1, 7.99, 'Miami', el),
        new Grocery('juice', 2, 1.99, 'Huntsville', el),
        new Grocery('steak', 1, 14.99, 'St. Louis', el),
        new Grocery('sausage', 1, 8.99, 'Lakeville', el),
        new Grocery('hot dogs', 2, 6.99, 'Stoughton', el),];
};
//# sourceMappingURL=grocery.js.map