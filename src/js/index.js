const item = document.querySelectorAll(".item");

item.forEach(function (itemSelected) {
    itemSelected.addEventListener("click", function(){
        const itemActual = document.querySelector(".active")
        itemActual.classList.remove("active");
        itemSelected.classList.add("active")
    })
})