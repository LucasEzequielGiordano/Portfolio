// calling the elements
const body = document.querySelector("body")
const about = document.getElementById("about")
const work = document.getElementById("work")
const contact = document.getElementById("contact")

// events about
about.addEventListener("mouseover", () => {
    about.style.cursor = "pointer"
    about.textContent = ""
    about.textContent = "About"
    about.style.transform = "translate(75px)"
    about.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

about.addEventListener("mouseout", () => {
    about.textContent = ""
    about.textContent = "Hello."
    about.style.transform = "translate(0px)"
    about.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

about.addEventListener("click", () => {
    body.textContent = ""
})

// events work
work.addEventListener("mouseover", () => {
    work.style.cursor = "pointer"
    work.textContent = ""
    work.textContent = "Work"
    work.style.transform = "translate(75px)"
    work.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

work.addEventListener("mouseout", () => {
    work.textContent = ""
    work.textContent = "I am"
    work.style.transform = "translate(0px)"
    work.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

work.addEventListener("click", () => {
    body.textContent = ""
})

// events contact
contact.addEventListener("mouseover", () => {
    contact.style.cursor = "pointer"
    contact.textContent = ""
    contact.textContent = "Contact"
    contact.style.transform = "translate(75px)"
    contact.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

contact.addEventListener("mouseout", () => {
    contact.textContent = ""
    contact.textContent = "Lucas"
    contact.style.transform = "translate(0px)"
    contact.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

contact.addEventListener("click", () => {
    body.textContent = ""
})