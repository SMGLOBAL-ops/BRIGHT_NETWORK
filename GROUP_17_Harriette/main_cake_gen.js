



// Challenge 2: Cat Generator

function generateCake() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cake-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&amp;type=jpg&amp;size=small";
    div.appendChild(image);
}


