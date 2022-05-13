window.addEventListener('scroll', onScroll)

function onScroll() {
    fixNavOnScroll()
    showBackToTopButton()
}

function fixNavOnScroll() {
    let imgLogo = document.getElementById("imglogo")
    let menuMobile = document.getElementById("menumobile")
    let linkMenu = document.querySelectorAll(".link-menu")
    let buttonMenuDesktop = document.getElementById("buttonMenuDesktop")

    if(scrollY > 0) {
        navigation.classList.add("scroll")
        imgLogo.src = "./assets/logo-white.svg"
        menuMobile.src = "./assets/mobile-menu-white.svg"
        buttonMenuDesktop.classList.add("button-white")

        for (link of linkMenu) {
            link.classList.add("link-white")
        }
        
    } else {
        navigation.classList.remove("scroll")
        buttonMenuDesktop.classList.remove("button-white")
        imgLogo.src = "./assets/logo.svg"
        menuMobile.src = "./assets/mobile-menu.svg"

        for (link of linkMenu) {
            link.classList.remove("link-white")
        }
    }
}

function showBackToTopButton() {
    if(scrollY > 3200 && window.innerWidth < 1024 ) {
        backToTop.classList.add("show")
        
    } else if(scrollY > 700 && window.innerWidth >= 1024) {
        backToTop.classList.add("show")
    } 
    else {
        backToTop.classList.remove("show")
    }
}

function openMenu() {
    let imgLogo = document.getElementById("imglogo")
    let body = document.querySelector("body")
    body.classList.add("menu-expanded")
    navigation.classList.add("scroll")
    backToTop.classList.remove("show")
    imgLogo.src = "./assets/logo-white.svg"
}

function closeMenu() {
    let imgLogo = document.getElementById("imglogo")
    let body = document.querySelector("body")
    let menuMobile = document.getElementById("menumobile")
    body.classList.remove("menu-expanded")

    if(scrollY == 0) {
        navigation.classList.remove("scroll")
        imgLogo.src = "./assets/logo.svg"
    } else {
        menuMobile.src = "./assets/mobile-menu-white.svg"
    }
}