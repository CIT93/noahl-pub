function displayImg(photos) {
    photos.forEach(photo => {
        const img = document.createElement("img");
        img.setAttribute("src", `https://picsum.photos/seed/${photo.id}/150`);
        document.getElementById("thumbnail-output").appendChild(img);
    });
}

async function start() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/photos");
        const photoArray = await data.json();
        displayImg(photoArray);
    } catch(e) {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "uh oh couldnt fetch server !!!";
        document.getElementById("thumbnail-output").appendChild(paragraph);

        console.log(`Error: ${e}`);
    }
}

start();