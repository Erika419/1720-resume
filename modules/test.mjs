//allows background images to pop up when a button is clicked
export function nationalParkImages(name, image){
    document.querySelector('#photos').innerHTML = `<h2>${name}</h2>`;
    console.log(image)
    document.body.style.backgroundImage = `url(images/${image})`
}