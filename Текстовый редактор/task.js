const textArea = document.getElementById("editor"),
    clear = document.querySelector(".clear");

if (localStorage.text !== null) {
    textArea.textContent = localStorage.text
}

textArea.addEventListener("keyup", () => {
    localStorage.setItem('text', editor.value)
})

clear.addEventListener("click", (e) => {
    e.preventDefault()
    editor.value = ""
    localStorage.clear()

})
