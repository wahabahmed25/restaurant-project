import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');

    // Load the home content initially if it's empty
    if (content.children.length === 0) {
        content.appendChild(loadHome());
    }

    const contactButton = document.getElementById("contact-button");
    const menuButton = document.getElementById("menu-button");
    const homeButton = document.getElementById("home");

    // Home page button
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            console.log('home');
            content.innerHTML = ''; // Clear existing content
            content.appendChild(loadHome());
        });
    }

    // Contact page button
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            console.log('contact');
            content.innerHTML = ''; // Clear existing content
            content.appendChild(loadContact());
        });
    }

    // Menu page button
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            console.log('menu');
            content.innerHTML = ''; // Clear existing content
            content.appendChild(loadMenu());
        });
    }
});
