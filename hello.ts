function Greeting(options: { name: string }) {
    const name = options.name;
    $('#name').html(`Hello ${name}!`);
    $('#name').click(() => {
        alert(name);
    });
}

Greeting({
    name: 'Nick'
});