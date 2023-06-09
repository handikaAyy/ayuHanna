let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let downer = document.querySelector(".downer");
function topage2(){
    page1.classList.add("d-none");
    page2.classList.remove("d-none")
}
const section = document.querySelectorAll(".page2 section[id]");
function scroll() {
    const scrollY = window.pageYOffset;
  
    section.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 500;
      sectionId = current.getAttribute("id");
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector("#" + sectionId + " div").classList.remove("anim-off");
        document.querySelector("#" + sectionId + " div").classList.remove("d-none");
       if(sectionId == "ke1"){
        downer.href = "#ke2";
       }else if(sectionId == "ke2"){
        downer.href = "#ke3";
       }
        if(sectionId == "ke3"){
          downer.classList.add("d-none");
        }else{
          downer.classList.remove("d-none")
        }
      } else {
       document.querySelector("#" + sectionId + " div").classList.add("anim-off");
        const delaycheck = document.querySelector("#" + sectionId + " .anim-off");

        opacity = getComputedStyle(delaycheck).opacity;
        if(opacity == 0){
          document.querySelector("#" + sectionId + " div").classList.add("d-none");
          document.querySelector("#" + sectionId + " div").classList.remove("anim-off");
        }
      }
    });
  }
  window.addEventListener("scroll", scroll);
 
  const loader = document.querySelector(".loader");

  window.addEventListener("load", function(){
    loader.classList.add("d-none");
  })