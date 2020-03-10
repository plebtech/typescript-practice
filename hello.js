"use strict";
function Greeting(options) {
    $('#name').html("Hello " + options.name + "!");
    console.log("Hello " + options.name + "!");
}
Greeting({
    name: 'Nick'
});
