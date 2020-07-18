// start  build the nav
let allSections = document.querySelectorAll("section");
(function create_navbar(){
    const listParent = document.getElementById("navbar__list")
    for (let i = 0; i < allSections.length; i++) {
        let sectionsName = allSections[i].id;
        let listItem = document.createElement("li");
        let createLink = document.createElement("a");
        createLink.textContent = sectionsName;
        createLink.setAttribute("href",`#${sectionsName}`)
        listParent.append(listItem)
        listItem.append(createLink)
      }
})();
// end  build the nav

// Add class 'active' to section when near top of viewport
let allLinks = document.querySelectorAll("#navbar__list li a");
function changeLinkState() {
    let index = allSections.length;
    while (--index && window.scrollY < allSections[index].offsetTop - 150){}
    allLinks.forEach((link) => link.classList.remove('active'));
    allSections.forEach((section) => section.classList.remove('your-active-class'));
    allLinks[index].classList.add('active');
    allSections[index].classList.add('your-active-class');
}
window.addEventListener("scroll", changeLinkState);
// start top arrow function
const topArrow = document.querySelector(".top-arrow");
window.addEventListener("scroll",function(){
    if(window.scrollY > 100 ){
        topArrow.style.cssText="display:block"
    }
    else{
        topArrow.style.cssText="display:none"
    }
})
topArrow.addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});
// end top arrow function


