// loadMenu.js
export default function loadMenu() {
    const menu = document.createElement('div');
    const titleMenu = document.createElement("h3");
    const listContainer = document.createElement("ul");


    menu.classList.add("menu");
    titleMenu.classList.add("menu.title");
    listContainer.classList.add('menu-list')
    titleMenu.textContent = "Menu of the day";

    const items = [
        "Pepporoni Pizza: $10.99",
        "Regular Cheese Pizza: $7.99",
        "Mushroom Cheese Pizza: $9.99",
        "Pineapple Pizza: $5.99",
        "Chicken Pizza: $7.99",
        "Italian Special: $15.99"
    ];

    items.forEach(itemText =>{
        const itemlist = document.createElement('li');
        itemlist.textContent = itemText;
        listContainer.appendChild(itemlist);
    })
    menu.appendChild(titleMenu);
    menu.appendChild(listContainer);

    return menu;
}
