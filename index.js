const panel = document.querySelectorAll('.panel');
panel.forEach(element => {
    element.addEventListener("click",function(params) {
        this.classList.toggle("open");
    })
});