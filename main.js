document.addEventListener("DOMContentLoaded", function() {

    let html = document.querySelector("html")

    var windowX = window.innerWidth;
    var windowY = window.innerHeight;

    

    let loading = document.querySelector(".loading")
    let loaded = document.querySelector(".loaded")
    let loadingRight = document.querySelector(".loadingRight");
    let loadingLeft = document.querySelector(".loadingLeft");


    loadingLeft.style.width = 50 + "vw";
    loadingRight.style.width = 50 + "vw";
    loadingRight.style.left = 50 + "vw";

    loaded.classList.remove("hidden")

    setTimeout(function() {
        for (let i = 0; i < 51; i++) {
            loadingLeft.style.width = 0 + "vw";
            loadingRight.style.width = 0 + "vw";
            loadingRight.style.left = 100 + "vw";
        }
    }, 1000)


    let menu = html.querySelector(".menu")

    let hamburger = document.querySelector(".hamburger");
    let navLinks = document.querySelector(".nav-links");
    let links = document.querySelectorAll(".nav-links li");
    let buttonShowMenu = document.querySelector(".buttonShowMenu")
    let buttonShowMenuImg = document.querySelector(".buttonShowMenuImg")

    hamburger.addEventListener('click', () => {
        // buttonShowMenu.classList.toggle("hidden")
        buttonShowMenu.classList.toggle("hidden")
        navLinks.classList.toggle("open")
        links.forEach(link => {
            link.classList.toggle("fade")
        })
    })

    navLinks.addEventListener('click', () => {
        navLinks.classList.toggle("open")
        links.forEach(link => {
            link.classList.toggle("fade")
        })
    })

    var up = false;

    var angle = 0

    

    buttonShowMenu.addEventListener("click", function() {

        if (up == false) {
            buttonShowMenu.classList.remove("buttonShowMenuUp")
            buttonShowMenu.classList.add("buttonShowMenuDown")
            menu.classList.remove("menuUp")
            menu.classList.add("menuDown")
            canvas.classList.remove("canvasBig")
            canvas.classList.add("canvasSmall")
            buttonShowMenuImg.style.transform = 'rotate(180deg)'
            up = true
        } else {
            buttonShowMenu.classList.add("buttonShowMenuUp")
            buttonShowMenu.classList.remove("buttonShowMenuDown")
            menu.classList.add("menuUp")
            menu.classList.remove("menuDown")
            canvas.classList.add("canvasBig")
            canvas.classList.remove("canvasSmall")
            up = false
            buttonShowMenuImg.style.transform = 'rotate(0deg)'
        }



    })

    //-----------------------------------------------------------------------
    //BALLS
    let canvas = document.querySelector("canvas")
    let c = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let w = canvas.width
    let h = canvas.height
    let nbballs = canvas.width / 45 + 15

    // let nbballs = 10;
    let balls = []
    for (let i = 0; i < nbballs; i++)
        balls.push({
            x: Math.random() * w,
            y: Math.random() * h,
            sx: Math.random() * 2.4 - 1.2,
            sy: Math.random() * 2.4 - 1.2,
            r: 3,
            color: 0xFFFFFF.toString(16)
        })

    setInterval(function() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let w = canvas.width
        let h = canvas.height
        c.clearRect(0, 0, w, h)
        for (let ball of balls) {
            for (let other of balls) {
                c.beginPath()
                c.strokeStyle = "white"
                c.lineWidth = 1
                c.moveTo(ball.x, ball.y)
                if (ball.x - other.x <= 100 && ball.x - other.x >= -100 && ball.y - other.y <= 100 && ball.y - other.y >= -100) {
                    c.lineTo(other.x, other.y)
                }
                c.stroke()
            }
            c.beginPath()
            c.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2)
            c.fillStyle = "#" + ball.color
            c.strokeStyle = "black"
            c.lineWidth = 3
            c.fill()
            c.stroke()
            ball.x += ball.sx
            ball.y += ball.sy
            if (ball.x + ball.r >= w || ball.x - ball.r < 0)
                ball.sx = -ball.sx
            if (ball.y + ball.r >= h || ball.y - ball.r < 0)
                ball.sy = -ball.sy
        }
    }, 1)


    let aboutShow = document.querySelector(".aboutShow")
    let aboutButtonImg = document.querySelector(".aboutButtonImg")
    let aboutButton = document.querySelector(".aboutButton")
    let aboutDescription = document.querySelector(".aboutDescription")
    let aboutDescriptionText = document.querySelector(".aboutDescription p")

    var angle = 0

    aboutDescription.style.height = 0 + "%";

    let name = document.querySelector(".name")
    let nameHeight = name.offsetHeight

    aboutButton.style.height = nameHeight + "px"

    aboutButton.addEventListener("click", function() {
        if (angle == 0) {
            aboutButtonImg.style.transform = 'rotate(180deg)'
            angle += 180
            growDiv()
            aboutDescriptionText.classList.remove("hidden")
        } else if (angle == 180) {
            aboutButtonImg.style.transform = 'rotate(0deg)'
            angle -= 180
            reduceDiv()
            aboutDescriptionText.classList.add("hidden")
        }
    })

    let aboutDescHeight=aboutDescriptionText.style.height;

    function growDiv() {
        let windowX = window.innerWidth;
        if(windowX<960){
            divHobbies.style.top= "75vh";
            divProjects.style.top= "75vh";
        }

        
        
        setTimeout(function() {
            aboutDescription.style.height = "90%";
        }, 100)
    }

    function reduceDiv() {
        let windowX = window.innerWidth;

        divHobbies.style.top= "55vh";  
        divProjects.style.top= "55vh";  

        setTimeout(function() {
            aboutDescription.style.height = "0%";
        }, 100)
    }

    // HOBBIES-----------------------------

   
    let hobbieNb=0
    let imagesHobbies = ["tennis.png","skiing.png","basketball.png","magazine.png"]
    let descHobbies = [
                        "I have been playing tennis every week for the past 4 years. I really love this sport!",
                        "Since I live in the Alps, I have been skiing since I was 5 years old. I consider myself as a  good skier.",
                        "I played basketball competitions for 5 years. Now I just play casually wit hmy friends.",
                        "I like reading articles or magazines about science, especially AI, robotics, and quantum computers.",
                        "I go to the gym several times a week. It's my way to reset my emotions when I have a bad day.",
                        "I love cooking my own food and having healthy protein-dense foods."
                    ]    
    let divHobbies = document.querySelector(".hobbies")               
    let divImagesHobbies = document.querySelector(".hobbiesImg")
    let divDescHobbies = document.querySelector(".hobbiesDesc")

    let leftArrowHobbies = document.querySelector(".arrow-left-hobbies")
    let rightArrowHobbies = document.querySelector(".arrow-right-hobbies")

    
    divDescHobbies.innerText = descHobbies[hobbieNb]
    divImagesHobbies.innerHTML= '<img src =images/'+imagesHobbies[hobbieNb]+' />'

    leftArrowHobbies.addEventListener("click", function() {      
        hobbieNb--
        if(hobbieNb<0){
            hobbieNb=3
        }
        divDescHobbies.innerText = descHobbies[hobbieNb]
        divImagesHobbies.innerHTML= '<img src =images/'+imagesHobbies[hobbieNb]+' />'
    })
    rightArrowHobbies.addEventListener("click", function() {
        hobbieNb++
        if(hobbieNb>3){
            hobbieNb=0
        }
        divDescHobbies.innerText = descHobbies[hobbieNb]
        divImagesHobbies.innerHTML= '<img src =images/'+imagesHobbies[hobbieNb]+' />'
    })

    // PROJECTS-----------------------------

    let projectNb=0
    let imagesProjects = ["game-development.png","website.png","portfolio.png"]
    let descProjects = [
                        "Development of a 2D game with a team of 3 other students using SFML and C++.",
                        "Creating a website listing all the activities that can be done around Annecy with a team of 5 other students.",
                        "Development of this portfolio with responsize design(HTML5,CSS3,JS)"
                    ]    
    let divProjects = document.querySelector(".projects")               
    let divImagesProjects = document.querySelector(".projectImg")
    let divDescProjects = document.querySelector(".projectDesc")

    let leftArrowProjects = document.querySelector(".arrow-left-projects")
    let rightArrowProjects = document.querySelector(".arrow-right-projects")

    
    divDescProjects.innerText = descProjects[projectNb]
    divImagesProjects.innerHTML= '<img src =images/'+imagesProjects[projectNb]+' />'

    leftArrowProjects.addEventListener("click", function() {      
        projectNb--
        if(projectNb<0){
            projectNb=2
        }
        divDescProjects.innerText = descProjects[projectNb]
        divImagesProjects.innerHTML= '<img src =images/'+imagesProjects[projectNb]+' />'
    })
    rightArrowProjects.addEventListener("click", function() {
        projectNb++
        if(projectNb>2){
            projectNb=0
        }
        divDescProjects.innerText = descProjects[projectNb]
        divImagesProjects.innerHTML= '<img src =images/'+imagesProjects[projectNb]+' />'
    })

    
// SKILLS--------------------------------------------------------------------
    let navSkillsLinkLeft = document.querySelector(".navskillsleft");
    let navSkillsLinkMiddleLeft = document.querySelector(".navskillsmiddleleft");
    let navSkillsLinkMiddleRight = document.querySelector(".navskillsmiddleright");
    let navSkillsLinkRight = document.querySelector(".navskillsright");

    let skillsGenerals = document.querySelector(".skillGenerals")
    let skillsWeb = document.querySelector(".skillWeb")
    let skillsDatabase = document.querySelector(".skillDatabase")
    let skillsLanguages = document.querySelector(".skillLanguages")

    navSkillsLinkLeft.addEventListener("click", function() {
        navSkillsLinkLeft.classList.add("selected")
        navSkillsLinkMiddleLeft.classList.remove("selected")
        navSkillsLinkMiddleRight.classList.remove("selected")
        navSkillsLinkRight.classList.remove("selected")

        skillsGenerals.classList.remove("hidden")
        skillsWeb.classList.add("hidden")
        skillsDatabase.classList.add("hidden")
        skillsLanguages.classList.add("hidden")

        spanAnimation(100)
    })
    navSkillsLinkMiddleLeft.addEventListener("click", function() {
        navSkillsLinkLeft.classList.remove("selected")
        navSkillsLinkMiddleLeft.classList.add("selected")
        navSkillsLinkMiddleRight.classList.remove("selected")
        navSkillsLinkRight.classList.remove("selected")

        skillsGenerals.classList.add("hidden")
        skillsWeb.classList.remove("hidden")
        skillsDatabase.classList.add("hidden")
        skillsLanguages.classList.add("hidden")

        spanAnimation(100)
    })
    navSkillsLinkMiddleRight.addEventListener("click", function() {
        navSkillsLinkLeft.classList.remove("selected")
        navSkillsLinkMiddleLeft.classList.remove("selected")
        navSkillsLinkMiddleRight.classList.add("selected")
        navSkillsLinkRight.classList.remove("selected")

        skillsGenerals.classList.add("hidden")
        skillsWeb.classList.add("hidden")
        skillsDatabase.classList.remove("hidden")
        skillsLanguages.classList.add("hidden")

        spanAnimation(100)
    })

    navSkillsLinkRight.addEventListener("click", function() {

        navSkillsLinkLeft.classList.remove("selected")
        navSkillsLinkMiddleLeft.classList.remove("selected")
        navSkillsLinkMiddleRight.classList.remove("selected")
        navSkillsLinkRight.classList.add("selected")

        skillsGenerals.classList.add("hidden")
        skillsWeb.classList.add("hidden")
        skillsDatabase.classList.add("hidden")
        skillsLanguages.classList.remove("hidden")


        spanAnimation(100)
    })

    let skillsValues = document.querySelectorAll("#levels .value")
    spanAnimation(500)

    function spanAnimation(time) {
        // j'etais oblige de rajouter un Timeout sinon des animations de ne lancaient pas
        setTimeout(function() {
            for (let span of skillsValues) {
                let v = span.innerText
                span.style.width = 10 + "%"
                setTimeout(function() {
                    span.style.width = v + "%"
                }, 500)
            }
        }, time)
    }

    let experience1 = document.querySelector(".experience1")
    let experience2 = document.querySelector(".experience2")
    let experience3 = document.querySelector(".experience3")
    let experience4 = document.querySelector(".experience4")
    let experiences = [experience1, experience2, experience3, experience4]
    let experienceExampleDesc1 = document.querySelector(".exampleDesc1")
    let experienceExampleDesc2 = document.querySelector(".exampleDesc2")
    let experienceExampleDesc3 = document.querySelector(".exampleDesc3")
    let experienceExampleDesc4 = document.querySelector(".exampleDesc4")
    let experienceExampleDesc = [experienceExampleDesc1, experienceExampleDesc2, experienceExampleDesc3, experienceExampleDesc4]
    let experienceExampleEx1 = document.querySelector(".exampleEx1")
    let experienceExampleEx2 = document.querySelector(".exampleEx2")
    let experienceExampleEx3 = document.querySelector(".exampleEx3")
    let experienceExampleEx4 = document.querySelector(".exampleEx4")
    let experienceExampleEx = [experienceExampleEx1, experienceExampleEx2, experienceExampleEx3, experienceExampleEx4]
    let contactEexperience1 = document.querySelector(".contactExperience1")
    let contactEexperience2 = document.querySelector(".contactExperience2")
    let contactEexperience3 = document.querySelector(".contactExperience3")
    let contactEexperience4 = document.querySelector(".contactExperience4")

    // for (let experience of experiences) {
    //     experience.addEventListener("click", function() {
    //         experienceExampleDesc.classList.toggle("hidden")
    //         experienceExampleEx.classList.toggle("exampleExClicked")
    //     })
    // }

    experience1.addEventListener("click", function() {
        experienceExampleDesc1.classList.toggle("hidden")
        experienceExampleEx1.classList.toggle("exampleExClicked")
        contactEexperience1.classList.toggle("hidden")
    })
    experience2.addEventListener("click", function() {
        experienceExampleDesc2.classList.toggle("hidden")
        experienceExampleEx2.classList.toggle("exampleExClicked")
        contactEexperience2.classList.toggle("hidden")

    })
    experience3.addEventListener("click", function() {
        experienceExampleDesc3.classList.toggle("hidden")
        experienceExampleEx3.classList.toggle("exampleExClicked")
        contactEexperience3.classList.toggle("hidden")
    })
    experience4.addEventListener("click", function() {
        experienceExampleDesc4.classList.toggle("hidden")
        experienceExampleEx4.classList.toggle("exampleExClicked")
        contactEexperience4.classList.toggle("hidden")
    })




    //----------------------
    function _(tag, content, parent, id = null, classs = null) {

        let element = document.createElement(tag)

        if (content)
            element.appendChild(document.createTextNode(content))
        if (id)
            element.id = id
        if (classs)
            element.classList.add(classs)

        parent.appendChild(element)

        return element
    }
})