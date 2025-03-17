const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Tasty!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/nirvana.jpg", rating: 4, comment: "Very spicy." },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 4, comment: "Rich and creamy!" },
    { id: 4, name: "Shio Ramen", restaurant: "Ramen Ichiryu", image: "images/kojiro.jpg", rating: 5, comment: "Light and nicely spiced." },
    { id: 5, name: "Spicy Ramen", restaurant: "Spicy Ramen Bar", image: "images/gyukotsu.jpg", rating: 5, comment: "This is very tasty." }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing images
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        img.onerror = () => { img.src = 'images/default.jpg'; }; // Fallback image on error
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById('ramen-name').innerText = ramen.name;
    document.getElementById('ramen-restaurant').innerText = ramen.restaurant;
    document.getElementById('ramen-rating').innerText = ramen.rating ? `Rating: ${ramen.rating}` : '';
    document.getElementById('ramen-comment').innerText = ramen.comment ? `Comment: ${ramen.comment}` : '';
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newRamen = {
            name: document.getElementById('new-ramen-name').value,
            restaurant: document.getElementById('new-ramen-restaurant').value,
            image: document.getElementById('new-ramen-image').value,
            rating: parseInt(document.getElementById('new-ramen-rating').value), // Ensure rating is a number
            comment: document.getElementById('new-ramen-comment').value
        };

        ramens.push(newRamen);
        displayRamens(); // Re-display ramen menu with the new item
        form.reset(); // Reset the form fields
    });
}

// Ensure the functions run on page load
window.onload = () => {
    displayRamens();      // Display initial ramen items
    addSubmitListener();  // Set up form submit listener
};
function validateForm(newRamen) {
    if (newRamen.rating < 1 || newRamen.rating > 5) {
        alert('Please enter a rating between 1 and 5.');
        return false;
    }
    if (!newRamen.image.match(/\.(jpg|jpeg|png|gif)$/)) {
        alert('Please enter a valid image URL.');
        return false;
    }
    return true;
}
if (validateForm(newRamen)) {
    ramens.push(newRamen);
    displayRamens();
    form.reset();
}
