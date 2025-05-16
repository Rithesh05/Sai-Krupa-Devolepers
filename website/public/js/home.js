let wrongbutton = document.querySelector("#wrong");
let contactus = document.querySelector(".contact-us");
let contactanchor = document.querySelector(".contactanchor");
let ourprojects = document.querySelector(".ourprojects");
let projectsinto = document.querySelector(".intomark");
let projects = document.querySelector(".projects");

wrongbutton.addEventListener("click", () => {
  if (contactus.style.display === "none" || contactus.style.display === "") {
    contactus.style.display = "block";
  } else {
    contactus.style.display = "none";
    contactanchor.style.boxShadow = "";
    contactanchor.style.color = "";
  }
});

contactanchor.addEventListener("click", () => {
  contactus.style.display = "block";
  contactanchor.style.boxShadow = "0 10px 25px rgb(0, 0, 0)";
  contactanchor.style.color = " rgb(114, 110, 110)";
});

ourprojects.addEventListener("click", () => {
  projects.style.display = "flex";
});

projectsinto.addEventListener("click", () => {
    setTimeout(()=>{
   projects.style.display = "none";      
    },500);
 
});


