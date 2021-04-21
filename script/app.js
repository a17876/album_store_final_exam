let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false }, 
{ name: "Album 3", price: 9.99, addedToCart: false },
 { name: "Album 4", price: 19.99, addedToCart: false }];




function imageSrcUpdate() {
    let firstImage = document.getElementById("Album 1");
    firstImage.setAttribute("src", "Images/Album 1.png");

    let secondImage = document.getElementById("Album 2");
    secondImage.setAttribute("src", "Images/Album 2.png");

    let thirdImage = document.getElementById("Album 3");
    thirdImage.setAttribute("src", "Images/Album 3.png");

    let fourthImage = document.getElementById("Album 4");
    fourthImage.setAttribute("src", "Images/Album 4.png");

}

imageSrcUpdate();

document.body.addEventListener("click", handleClick);


function handleClick(event) {
    const cartAlbum = []
    let id = event.target.id

    for (item of albums) {
        if (item.name === id) {
            cartAlbum.push(item);
            cartAlbum.addedToCart = true;

            console.log(cartAlbum);
            for (let i = 0; i < cartAlbum.length; i = i + 1) {
                let parent = document.querySelector(".cart");
                let div = document.createElement("div");
                div.classList.add("cart_lst")

                let img2 = document.createElement("img")
                let span1 = document.createElement("span");
                let span2 = document.createElement("span");
                img2.setAttribute("src", `Images/${id}.png`);
                img2.setAttribute("alt", id);
                img2.setAttribute("width", "40em");
                img2.setAttribute("height", "40em");
                console.log(cartAlbum.name);
                span1.innerText = cartAlbum[i].name;
                span2.innerText = cartAlbum[i].price;
                div.appendChild(img2);
                div.appendChild(span1);
                div.appendChild(span2);
                parent.appendChild(div);
            }
        
        }
    }

}


