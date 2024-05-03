
function noturnMode() {
    var fundo = document.getElementById("body")
    var buttonTitle = document.getElementById("noturn-button")
    var buttonIcon = document.getElementById("light-dark")
    if (fundo.style.backgroundColor == "var(--principal-background)"){
    fundo.style.backgroundColor = "white";
    buttonTitle.textContent = "Modo Noturno"
    buttonIcon.textContent = "dark_mode"
}
    else {
        fundo.style.backgroundColor = "var(--principal-background)"
        buttonTitle.textContent = "Modo Claro"
        buttonIcon.textContent = "sunny"
    }
}
