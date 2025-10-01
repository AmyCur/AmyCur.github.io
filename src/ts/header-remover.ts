addEventListener("DOMContentLoaded", () => {
    const projects = document.getElementById("projects");

    for(const child of projects!.children){
        if(child.querySelector(".cards")!.childElementCount < 1) child.remove();
        else console.log(child);
    }

});
