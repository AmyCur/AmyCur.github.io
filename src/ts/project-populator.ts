// For creating this script i genuinely deserve death, how am i so fucking stupid holy shit this is embarrassing fucking kill yourself already


function MakeProject(project : any) { 
    return `<Project title=${project.frontmatter.title}, image=${project.frontmatter.image}, url=${project.url}, description=${project.frontmatter.description}/>`;
}

addEventListener("DOMContentLoaded", () =>{
    const projects = Object.values(import.meta.glob('../pages/projects/*.mdx', { eager: true }));
    
    const unity = document.getElementById("unity");
    const unreal = document.getElementById("unreal");
    const blender = document.getElementById("blender");

    projects.forEach((project : any) =>{
        if(project.frontmatter.software === undefined) console.log("Undefined");
        else if((project.frontmatter.software) == "unity"){unity!.innerHTML+=MakeProject(project)}
        else if((project.frontmatter.software) == "unreal"){unreal!.innerHTML+=MakeProject(project)}
        else if((project.frontmatter.software) == "blender"){blender!.innerHTML+=MakeProject(project)}
    })
});