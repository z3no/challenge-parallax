// get our character
let character = document.getElementById("character")

// jump function
function jump() {
    if (character.classList !== "animate") {
        character.classList.add("animate-jump")
        character.style.backgroundImage = "url(img/jump.gif)"
    }
    setTimeout(function (){
        character.classList.remove("animate-jump")
        character.removeAttribute("style")
    }, 600)
}

//assign function to keycode spacebar
function control(e) {
    if (e.keyCode === 32) {
        jump()
    }
}

document.addEventListener('keydown', control)