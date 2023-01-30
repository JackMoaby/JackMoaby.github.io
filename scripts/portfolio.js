var modules = document.getElementsByClassName("portfolio-module-image")
var dimensions = [modules[0].offsetWidth, modules[0].offsetHeight]
for (let i = 0; i < modules.length; i++){
    modules[i].addEventListener("mousemove", portfolio_movement)
    modules[i].addEventListener("mouseleave", portfolio_exit)
}
function portfolio_movement(event) {
    var mouse_percentages = [Math.floor(event.offsetX / dimensions[0] * 100), Math.floor(event.offsetY / dimensions[1] * 100)];
    var mouse_percent_coords = [Math.floor(mouse_percentages[0] - 50) * (1 / 3), Math.floor(mouse_percentages[1] - 50) * -1 * (1 / 3)];

    event.target.style.transform = "rotateX(" + mouse_percent_coords[1] + "deg) rotateY(" + mouse_percent_coords[0] + "deg)"
    event.target.style.transition = "0s"
}
function portfolio_exit(event) {
    event.target.style.transform = "rotateX(0deg) rotateY(0deg)"
    event.target.style.transition = ".5s"
}