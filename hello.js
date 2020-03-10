"use strict";
function Greeting(options) {
    var name = options.name;
    $('#name').html("Hello " + name + "!");
    $('#name').click(function () {
        alert(name);
    });
}
Greeting({
    name: 'Nick'
});
