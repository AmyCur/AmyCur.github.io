document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("projects")?.childElementCount! % 3 != 0){
        document.getElementById("projects")!.innerHTML += "<Project />"
    }
});