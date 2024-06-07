let skills = document.querySelector("#skills")
let target = document.querySelector("#target")
skills.addEventListener("click", () => {
    target.scrollIntoView({ behavior: 'smooth' });
})
let about = document.querySelector("#about")
let target2 = document.querySelector("#target2")
about.addEventListener("click", () => {
    target2.scrollIntoView({ behavior: 'smooth' });
})
let links = document.querySelector("#links")
let target3 = document.querySelector("#links-target")
links.addEventListener("click", () => {
    target3.scrollIntoView({ behavior: 'smooth' });
})
let education = document.querySelector("#educations")
let target4 = document.querySelector("#education-target")
education.addEventListener("click", () => {
    target4.scrollIntoView({ behavior: 'smooth' });
})