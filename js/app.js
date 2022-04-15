/* CODE ORDER
 * elements
 * events
 * functions
 */
// calling the elements
const body = document.querySelector("body")
const about = document.getElementById("about")
const work = document.getElementById("work")
const contact = document.getElementById("contact")

/* EVENTS */
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

about.addEventListener("click", clickAbout)

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

work.addEventListener("click", clickWork)

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

contact.addEventListener("click", clickContact)

/* FUNCTIONS */
// function of events back to menu
function backToMenu() {
    // calling the elements
    const back = document.getElementById("back")

    // event mouseover
    back.addEventListener("mouseover", () => {
        back.textContent = "Lucas.Portfolio"
        back.style.cursor = "pointer"
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

// function of event on click about
function clickAbout() {
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
}

// function of event on click work
function clickWork() {
    // empty body
    body.textContent = ""

    // create elements
    const backHTML = document.createElement("header")
    const newWork = document.createElement("main")

    // declaring classes 
    body.className = "bodyDom"
    backHTML.className = "backHTML"
    newWork.className = "newWork"

    // content HTML
    backHTML.innerHTML = `
    <ul class="ulBack">
    <li class="back" id="back">Lucas.</li>
    </ul>
    `

    newWork.innerHTML = `
    <div class="divContentWork" id="divContentWork">
        <div id="works0">
            <span class="divTitleWork" id="divTitleWork"><a href="https://lucasezequielgiordano.github.io/Simulador-TiendaDeDulces/" target="_blank">Candy Store</a></span>
            <p>Web App</p>
        </div>
        <div id="works1">
            <span class="divTitleWork" id="divTitleWork"><a href="https://lucasezequielgiordano.github.io/Movie-App/" target="_blank">Movie App</a></span>
            <p>Web App</p>
        </div>
    </div>
    `

    // append
    body.appendChild(backHTML)
    body.appendChild(newWork)

    // call function
    backToMenu()

    // events works 0
    const works0 = document.getElementById("works0")
    works0.addEventListener("mouseover", () => {
        // add text HTML
        // works.textContent = add image with languages used

        // add styles
        works0.style.cursor = "pointer"
        works0.style.transform = "translate(25px)"
        works0.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    works0.addEventListener("mouseout", () => {
        // add HTML
        // works0.textContent = "I am"

        // add styles
        works0.style.transform = "translate(0px)"
        works0.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    // event works 1 
    const works1 = document.getElementById("works1")
    works1.addEventListener("mouseover", () => {
        // add text HTML
        // works.textContent = add image with languages used

        // add styles
        works1.style.cursor = "pointer"
        works1.style.transform = "translate(25px)"
        works1.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    works1.addEventListener("mouseout", () => {
        // add HTML
        // works1.textContent = "I am"

        // add styles
        works1.style.transform = "translate(0px)"
        works1.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })
}

// function of event on click contact
function clickContact() {
    // empty body
    body.textContent = ""

    // create elements
    const backHTML = document.createElement("header")
    const newContact = document.createElement("main")

    // declaring classes 
    body.className = "bodyDom"
    backHTML.className = "backHTML"
    newContact.className = "newContact"

    // content HTML
    backHTML.innerHTML = `
    <ul class="ulBack">
    <li class="back" id="back">Lucas.</li>
    </ul>
    `
    newContact.innerHTML = `
    <span class="divTitleContact" id="divTitleContact"> Contact </span>
    <div class="divContentContact" id="divContentContact">
        <p> I am looking for opportunities to collaborate with companies, agencies, individuals, not only to work for them but I want to bring my experience to work as a team and solve problems in a way that optimizes our experience and knowledge. </p>
        <p> I want to avoid confrontations that do not lead to anything and favor my colleagues. </p>
        <p> If all this sounds good to you, then let 's talk about how we can work together. Feel free to contact me through the following platforms: </p>
    </div>
    <div class="socials">
        <div>
            <a class="mail" id="mail" href="mailto:lucasgiordano2219@gmail.com" target="_blank"> Mail </a>
            <a class="linkedin" id="linkedin" href="https://www.linkedin.com/in/lucas-giordano-b6045b187/" target="_blank"> Linkedin </a>
            <a class="github" id="github" href="https://github.com/LucasEzequielGiordano" target="_blank"> GitHub </a>
        </div>
    </div>
    `

    // append
    body.appendChild(backHTML)
    body.appendChild(newContact)

    // call functions
    backToMenu()
    clickMail()
    clickLinkedin()
    clickGithub()
}

// function of event on click mail in contact
function clickMail() {
    // calling the elements
    const mail = document.getElementById("mail")

    // event mouseover
    mail.addEventListener("mouseover", () => {
        mail.textContent = "lucasgiordano2219@gmail.com"
        mail.style.cursor = "pointer"
        mail.style.transform = "translate(25px)"
        mail.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    // event mouseout
    mail.addEventListener("mouseout", () => {
        mail.textContent = "Mail"
        mail.style.transform = "translate(0px)"
        mail.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })
}

// function of event on click linkedin in contact
function clickLinkedin() {
    // calling the elements
    const linkedin = document.getElementById("linkedin")

    // event mouseover
    linkedin.addEventListener("mouseover", () => {
        linkedin.textContent = "Lucas Giordano"
        linkedin.style.cursor = "pointer"
        linkedin.style.transform = "translate(25px)"
        linkedin.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    // event mouseout
    linkedin.addEventListener("mouseout", () => {
        linkedin.textContent = "Linkedin"
        linkedin.style.transform = "translate(0px)"
        linkedin.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })
}

// function of event on click github in contact
function clickGithub() {
    // calling the elements
    const github = document.getElementById("github")

    // event mouseover
    github.addEventListener("mouseover", () => {
        github.textContent = "@LucasEzequielGiordano"
        github.style.cursor = "pointer"
        github.style.transform = "translate(25px)"
        github.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })

    // event mouseout
    github.addEventListener("mouseout", () => {
        github.textContent = "GitHub"
        github.style.transform = "translate(0px)"
        github.style.transition = "all .4s cubic-bezier(0.2, 0.6, 0.2, 1)"
    })
}