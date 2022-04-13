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
    <div class="divTitleAbout" id="divTitleAbout"><span id="spanAbout"> I am a web developer </span></div>
    <div class="divContentAbout" id="divContentAbout"><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptate consequuntur dolorem aliquam amet fugiat inventore eius ut delectus repellendus aliquid exercitationem recusandae dolore odio eaque, unde animi distinctio quae natus laboriosam vel molestiae.Autem dolorum provident repellendus esse sed eius distinctio voluptates eaque.Sunt sit blanditiis ut asperiores repellat quisquam vero alias veniam facere molestiae sed officiis, vitae iusto iure, ipsum qui ad veritatis corrupti, reiciendis reprehenderit ? Dolorum laudantium illum vel ex id.Delectus voluptates quos amet odit doloribus fugiat asperiores at harum laudantium soluta ? Illo, fugiat rerum!Ipsa exercitationem nobis perspiciatis adipisci dicta facere ducimus, optio repudiandae quisquam illo!Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur voluptatibus tempora doloribus minus soluta ? Omnis fugiat temporibus aspernatur ad unde voluptatum sapiente!Iusto dolore alias repudiandae rem soluta eaque vitae commodi blanditiis ? Pariatur, fuga iure aut quaerat eligendi facilis rerum nemo a magnam, tenetur eum commodi autem laudantium!Quas incidunt impedit, esse odio, nemo quibusdam tempora in error dicta sapiente ea.Distinctio omnis eveniet nisi totam saepe ducimus.Voluptatibus repudiandae et iure ipsam in , voluptatem commodi consectetur perferendis qui id aspernatur nam labore doloremque officia quos laborum suscipit aperiam ut cum necessitatibus, rerum error!Dolorem dolorum nesciunt illo odit cum ducimus perspiciatis aperiam magnam.At consectetur beatae sint non facilis voluptatem tenetur illum, harum reprehenderit excepturi quaerat iste consequuntur nam autem corporis, tempore iusto dicta omnis.Repudiandae aliquam nisi culpa quisquam quod quos sint, eum ullam esse aliquid perferendis repellendus.Eius, omnis!Iste fuga delectus aspernatur vel, reiciendis rem id quibusdam corporis voluptatem soluta, ipsum magnam, nesciunt qui voluptatibus alias commodi!Architecto amet accusamus alias dolores maxime cumque ea perspiciatis magni vitae consequuntur ? Atque, veritatis quae ? Omnis dicta doloremque libero quos placeat qui harum architecto!Enim rem, cumque corrupti cum illo temporibus magni ipsam officiis porro a dolore unde recusandae! <p><div>
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