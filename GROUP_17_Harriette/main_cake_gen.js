



// Challenge 2: Cat Generator

function generateCake() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cake-gen');
    let number = Math.floor((Math.random()*10) +1 );
    image.src = "https://loremflickr.com/320/240/cake?random="+number;;
    div.appendChild(image);
}


