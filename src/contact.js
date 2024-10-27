// loadContact.js
export default function loadContact() {
    const contact = document.createElement('div');
    const headerText = document.createElement('h1');

    headerText.textContent = 'Get in touch on the Contact Page!';
    headerText.style.padding = '5px';
    contact.style.fontSize = "10px";
    contact.style.backgroundColor = '#FADBD8'; // Light red/pink background for distinction


    contact.classList.add('contact');

    const numberText = document.createElement('h3');
    numberText.textContent = "Call us on 123-456-7890";
    const emailText = document.createElement('h3');
    emailText.textContent = "Email: authenticpizza@gmail.com"
    const addressText = document.createElement('h3');

    addressText.textContent = "Location: 123av street"
    contact.appendChild(headerText);
    contact.appendChild(emailText);
    contact.appendChild(addressText);
    contact.appendChild(numberText);

    return contact;
}
