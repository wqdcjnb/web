var divs = document.querySelectorAll('#a');
divs.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var b = document.getElementById('b')
        var bc = document.getElementById('c')
        bc.innerHTML = value.innerHTML
        b.style.display = "flex"
        b.addEventListener("click", () => {
            b.style.display = "none"
        })
    })
})