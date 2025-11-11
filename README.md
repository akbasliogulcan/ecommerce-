E-commerce Shop Project
Overview

This is a modern e-commerce web application built using HTML, CSS, JavaScript (with modules) and leverages browser localStorage for cart persistence. The live demo is available at: clothesakbasli.netlify.app

Features

Browse products and add them to the shopping cart

Cart data is persisted in localStorage so items remain when the user reloads the page

Cart icon shows a badge with the total quantity of items in the cart

The cart page displays each product’s quantity and the total price calculation

Clear separation of UI logic (in ui.js) and storage / cart logic (in cart module)

Responsive design and simple, clean UX for a boutique-style store

Getting Started
Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)

Optionally a code-editor if you wish to modify the project

Installation (for development)

Clone the repository:

git clone <repo-url>
cd <project-folder>


Install dependencies (if any build tools are used) — if you are purely using static JS you may skip this.

npm install


Run a local server to develop:

npm start


or open index.html in your browser directly.

Make changes, and view the live development version.

Deployment

This project is deployed on Netlify. To deploy, push your code to GitHub (or similar) and connect the repository to Netlify. Every commit triggers a new build and deployment.

Project Structure
/src
  /js
    ui.js             # UI-related selectors & rendering functions
    cart.js           # Cart logic: add/update/remove items, update icon, calculate total
  index.html           # Homepage with product listing
  cart.html            # Cart page which displays items and total price
  style.css            # Global stylesheet

Key Modules

localStorage helpers (saveToLocalStorage, getFromLocalStorage)

Cart icon update function — updateCartIcon(cart)

Total calculation — calculateCartTotal(cart) returns the sum of price × quantity

Render total — displayCartTotal(cart) updates the UI element showing the total

Usage

Browse through products and click “Add to Cart”.

Navigate to the Cart page — items you added are listed with quantities.

The “Total” section shows the correct aggregated price.

The cart icon (often in the header) shows a small badge indicating how many items are in the cart.

Customization Ideas

Add product filters (by category, price range)

Implement removing items from the cart or updating quantities

Integrate with a backend/API for product data instead of static JSON/localStorage

Add user authentication and order checkout flow

Improve performance and add animations for better UX

Contributing

Feel free to fork the project, open issues or submit pull requests — improvements are always welcome! Please ensure your code follows consistent formatting and includes comments when implementing new features.

License

This project is open-source and available under the MIT License
.
