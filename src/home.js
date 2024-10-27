// loadHome.js
export default function loadHome() {
    const home = document.createElement('div');
    home.classList.add("home");

    const welcomeText = document.createElement('h2');
    welcomeText.textContent = "Welcome to my Pizza Store!";
    home.appendChild(welcomeText);

    // Add a short description
    const description = document.createElement('p');
    description.textContent = "Enjoy the best pizza in town, made with fresh ingredients and a passion for taste! We offer a wide variety of flavors and toppings to satisfy every craving.";
    home.appendChild(description);

    // Add a call-to-action button for ordering
    const orderButton = document.createElement('button');
    orderButton.textContent = "Order Now";
    orderButton.classList.add('order-button');
    orderButton.addEventListener('click', () => {
        alert("Order page coming soon!");
    });
    home.appendChild(orderButton);

    return home;
}
