// get our character
let character = document.getElementById("character")

// jump function
function jump() {
    character.classList.add("animate-jump")
    character.style.backgroundImage = "url(img/jump.gif)"
    setTimeout(function (){
        character.classList.remove("animate-jump")
        character.style.backgroundImage = "url(img/run.gif)"
    }, 600)
}

character.addEventListener('click', jump);