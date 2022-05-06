$(".a").click((e) => {
    $("#b").show()
    $("#c").text(e.target.innerText);
})
$("#b").click(() => {
    $("#b").hide()
})