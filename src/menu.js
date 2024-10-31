// loadMenu.js
export default function loadMenu() {
    const menu = document.createElement('div');
    const titleMenu = document.createElement("h3");
    const listContainer = document.createElement("ul");
    const cartContainer = document.createElement('div');
    const totalContainer = document.createElement('div');
    const checkOut = document.createElement('button');

    
    let cart = [];
    let total = 0;

    menu.classList.add("menu");
    titleMenu.classList.add("menu-title");
    listContainer.classList.add('menu-list');
    cartContainer.classList.add('cart-container');
    totalContainer.classList.add('total-container');
    checkOut.classList.add('checkout-button')

    titleMenu.textContent = "Menu of the Day";
    checkOut.textContent = "Checkout";
    checkOut.addEventListener('click',() =>{
        alert('ordering now, please wait!');
        cartContainer.textContent = '';
        totalContainer.textContent = '';
        total = 0;
        cart = [];
    })


    const items = [
        { name: "Pepperoni Pizza", price: 10.99},
        { name: "Regular Cheese Pizza", price: 7.99 },
        { name: "Mushroom Cheese Pizza", price: 9.99 },
        { name: "Pineapple Pizza", price: 5.99 },
        { name: "Chicken Pizza", price: 7.99 },
        { name: "Italian Special", price: 15.99 }
    ];

    items.forEach(item => {
        const itemElement = document.createElement('li');
        const addButton = document.createElement('button');
        

        itemElement.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        addButton.textContent = "Add to Cart";
        
        
        addButton.addEventListener('click', () => {
            console.log(`Adding ${item.name} to cart`); // Log for debugging
            addToCart(item);
            updateCartDisplay();
        });

        itemElement.appendChild(addButton);  // Attach the add button to the item
        listContainer.appendChild(itemElement);
    });

    function addToCart(item) {
        cart.push(item);
        total += item.price;
        console.log(cart); // Log the cart content for debugging
    }

    function updateCartDisplay() {
        cartContainer.innerHTML = ''; // Clear previous cart items

        cart.forEach((item, index) => {
            
            const cartItem = document.createElement('div');
            const removeButton = document.createElement('button');
            
            cartItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
            removeButton.textContent = "Remove";

            removeButton.addEventListener('click', () => {
                console.log(`Removing ${item.name} from cart`); // Log for debugging
                removeFromCart(index);
                updateCartDisplay();
            });

            cartItem.appendChild(removeButton);
            cartContainer.appendChild(cartItem);
        });

        totalContainer.textContent = `Total: $${total.toFixed(2)}`;
    }

    function removeFromCart(index) {
        total -= cart[index].price;
        cart.splice(index, 1);
    }

    menu.appendChild(titleMenu);
    menu.appendChild(listContainer);
    menu.appendChild(cartContainer);
    menu.appendChild(totalContainer);
    menu.appendChild(checkOut);

    return menu;
}
