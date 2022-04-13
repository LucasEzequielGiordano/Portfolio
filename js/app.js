// calling the elements
const body = document.querySelector("body")
const about = document.getElementById("about")
const work = document.getElementById("work")
const contact = document.getElementById("contact")

// events about
about.addEventListener("mouseover", () => {
    // add text HTML
    about.textContent = "About"

    // add styles
    about.style.cursor = "pointer"
    about.style.transform = "translate(25px)"
    about.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

about.addEventListener("mouseout", () => {
    // add text HTML
    about.textContent = "Hello."

    // add Styles
    about.style.transform = "translate(0px)"
    about.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

about.addEventListener("click", () => {
    // empty body
    body.textContent = ""
    // create elements
    const backHTML = document.createElement("header")
    const newAbout = document.createElement("main")
    // declaring classes 
    body.className = "bodyDom"
    backHTML.className = "backHTML"
    newAbout.className = "newAbout"
    // content HTML
    backHTML.innerHTML = `
    <ul class="ulBack">
    <li class="back" id="back">Lucas.</li>
    </ul>
    `
    newAbout.innerHTML = `
    <div class="divTitleAbout" id="divTitleAbout"><span id="spanAbout"> I am a Front-End Developer </span></div>
    <div class="divContentAbout" id="divContentAbout"><p> I am 21 years old, I began to study web development in a self-taught way in 2020, in this way I learned HTML, CSS and JavaScript, at the end of the year 2021 I began with the process of strengthening my knowledge in the Bootcamp Coder House where with the help of professionals in the area I acquired new tools such as Bootstrap, Sass/Scss and new concepts of JavaScript, I am currently learning React and making projects on an ongoing basis. </p></div>
    <span id="spanSkills">Languages And Tools</span>
    <div class="skills">
    <img class="imgSkills" src="https://img.icons8.com/color/1600/000000/html-5--v1.png"/>
    <img class="imgSkills" src="https://img.icons8.com/color/1600/000000/css3.png"/>
    <img class="imgSkills" src="https://img.icons8.com/color/1600/000000/sass.png"/>
    <img class="imgSkills" src="https://img.icons8.com/color/1600/000000/bootstrap.png"/>
    <img class="imgSkills" src="https://img.icons8.com/color/1600/000000/javascript--v1.png"/>
    <img class="imgSkills" src="https://img.icons8.com/color/1600/000000/git.png"/>
    <img class="imgSkills" src="https://img.icons8.com/fluency/1600/000000/github.png"/>
    </div>
    `
    // appends
    body.appendChild(backHTML)
    body.appendChild(newAbout)

    // function back to menu
    backToMenu()
})

// events work
work.addEventListener("mouseover", () => {
    // add text HTML
    work.textContent = "Work"

    // add styles
    work.style.cursor = "pointer"
    work.style.transform = "translate(25px)"
    work.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

work.addEventListener("mouseout", () => {
    // add HTML
    work.textContent = "I am"

    // add styles
    work.style.transform = "translate(0px)"
    work.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

work.addEventListener("click", () => {
    // empty body
    body.textContent = ""
})

// events contact
contact.addEventListener("mouseover", () => {
    // add text HTML
    contact.textContent = "Contact"

    // add styles
    contact.style.cursor = "pointer"
    contact.style.transform = "translate(25px)"
    contact.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

contact.addEventListener("mouseout", () => {
    // add text HTML
    contact.textContent = "Lucas"

    // add styles
    contact.style.transform = "translate(0px)"
    contact.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
})

contact.addEventListener("click", () => {
    // empty body
    body.textContent = ""
})

// function of events back to menu
function backToMenu() {
    // calling the elements
    const back = document.getElementById("back")

    // event mouseover
    back.addEventListener("mouseover", () => {
        back.style.cursor = "pointer"
        back.textContent = "Lucas.Portfolio"
        back.style.transform = "translate(-25px)"
        back.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    // event mouseout
    back.addEventListener("mouseout", () => {
        back.textContent = "Lucas."
        back.style.transform = "translate(0px)"
        back.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    // event window reload on click
    back.addEventListener("click", () => {
        window.location.reload()
    })
}