const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Tasty!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/nirvana.jpg", rating: 4, comment: "Very spicy." },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 4, comment: "Rich and creamy!" },
    { id: 4, name: "Shio Ramen", restaurant: "Ramen Ichiryu", image: "images/kojiro.jpg", rating: 5, comment: "Light and nicely spiced." },
    { id: 5, name: "Spicy Ramen", restaurant: "Spicy Ramen Bar", image: "images/gyukotsu.jpg", rating: 5, comment: "This is very tasty." }
];
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; 
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
    const food = document.getElementById('ramen-overview');

    let img = document.getElementById('my-image');
    if (!img) {
        img = document.createElement('img');
        img.id = 'my-image';  
        food.appendChild(img); 
    }
    img.src = ramen.image;
    img.alt = ramen.name;
    // Seting ramen details
    document.getElementById('ramen-name').innerText = ramen.name;
    document.getElementById('ramen-restaurant').innerText = ramen.restaurant;
    document.getElementById('ramen-rating').innerText = ramen.rating ? `Rating: ${ramen.rating}` : '';
    document.getElementById('ramen-comment').innerText = ramen.comment ? `Comment: ${ramen.comment}` : '';
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();  

        const name = document.getElementById('new-ramen-name').value;
        const restaurant = document.getElementById('new-ramen-restaurant').value;
        const rating = parseInt(document.getElementById('new-ramen-rating').value);
        const image = document.getElementById('new-ramen-image-url').value;
        const comment = document.getElementById('new-ramen-comment').value;
        console.log('Form submitted with values:', name, restaurant, rating, image, comment);

        // new object.
        const newRamen = {
            id: ramens.length + 1,
            name: name,
            restaurant: restaurant,
            image: image,
            rating: rating, 
            comment: comment
        };
        ramens.push(newRamen);
        // Reset the form
        form.reset();
        displayRamens();  
    });
}
function main() {
    displayRamens();
    addSubmitListener();
}
document.addEventListener('DOMContentLoaded', main);
