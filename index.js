const coffees = ["Latte", "Cappuccino", "Americano"];
const coffeeName = prompt("Поиск кофе по названию").trim();
const searchByName = coffeeName => {
    const indexOfCoffee = coffees
        .findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase()
        )
    if (indexOfCoffee !== -1)
        alert(`Держите ваш любимый кофе ${coffeeName}.\nОн ${indexOfCoffee + 1}-й по популярности в нашей кофейне.`)
    else
        alert("К сожалению, такого вида кофе нет в наличии");
}
searchByName(coffeeName);



