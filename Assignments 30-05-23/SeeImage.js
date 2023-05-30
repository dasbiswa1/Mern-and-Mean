const button = document.getElementById("clickable")
button.addEventListener('click',()=>{
    console.log("clickable");
    const div = document.getElementById("showable");
    const image = document.createElement("img");
    image.src="Silicon.jpg"
    div.append(image);
})