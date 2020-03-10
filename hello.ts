function Greeting (options: { name: string }) {
    $('#name').html(`Hello ${options.name}!`);
    console.log(`Hello ${options.name}!`);
}

Greeting({
    name: 'Nick'
});