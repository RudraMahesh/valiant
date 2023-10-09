// for cursor
let cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", ((e) => {
    let x = e.clientX;
    let y = e.clientY
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}))
document.addEventListener("scroll", () => {
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    cursor.style.transform = `translate(${scrollX}px, ${scrollY}px) translate(-50%, -50%)`;
});

//for header
let nav = document.querySelector("#nav")
const scroo = 300;

function scrollHandle() {
    let scrollY = window.scrollY
    if (scrollY > scroo) {
        nav.classList.add("color1")
        nav.classList.remove("color")
    }
    else {
        nav.classList.add("color")
        nav.classList.remove("color1")
    }
}
window.addEventListener("scroll", scrollHandle);

// for section2
let box = document.querySelectorAll("#section2 .box")

box.forEach((val) => {
    val.addEventListener("mousemove", ((e) => {
        // console.log(val.childNodes[3]);
        let x = e.x
        let y = e.y
        val.childNodes[3].style.left = x + "px"
        // val.childNodes[3].style.top = y + "px"
    }))
    val.addEventListener("mouseenter", (() => {
        val.childNodes[3].style.display = "block"
    }))
    val.addEventListener("mouseleave", (() => {
        val.childNodes[3].style.display = "none"
    }))
});


// gsap

let tl = gsap.timeline()
//gsap for loader

function createLoader() {
    let a = Math.floor(Math.random() * 40)
    setInterval(() => {
        a++
        if (a <= 100) {
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
    }, 15);
}

tl.to("#loader .l1", {
    x: -100,
})

tl.to("#loader .l2", {
    x: 100,
})

tl.to("#loader", {
    duration: 1,
    onStart: createLoader(),
    stagger: 0.2,
})

tl.to("#loader", {
    top: "-100vh",
    duration: 1
})

// for navlinks
let navtoggler = document.querySelector("#nav-toggle")
let navIcon = document.querySelector(".navLogo")
let close = document.querySelector(".close")

navIcon.addEventListener("click", (() => {
    navtoggler.style.display = "block"
}))

tl.from("#nav-toggle .navLogo a", {
    opacity: 0,
    y: 300,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#nav-toggle .navLogo a",
        scroller: "body",
    }
})

close.addEventListener("click", (() => {
    navtoggler.style.display = "none"
}))

// other
tl.from("#nav .logo h2, #nav .navLogo", {
    y: -100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3
})

tl.from("#section1 .hero h4", {
    x: 100,
    opacity: 0,
    stagger: 0.3
})

tl.from("#section1 .explore", {
    opacity: 0,
    x: 50,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: "power1.inOut"
})


gsap.from("#section2 h3", {
    y: 100,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3,
    // repeat: (-1),
    scrollTrigger: {
        trigger: "#section2 h3",
        scroller: "body",
        // markers: true,
        // start: "top 70%",
        // end: "bottom 30%"
    }
})

gsap.from("#section3 h3", {
    y: 100,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#section3 h3",
        scroller: "body"
    }
})

gsap.from("#section3 button", {
    scale: 1.2,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#section3 button",
        scroller: "body"
    },
})

gsap.from("#section3 .view", {
    y: 50,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#section3 .view",
        scroller: "body"
    },
})

// gsap.from("#section4 label", {
//     y: 50,
//     delay: 0.3,
//     duration: 0.7,
//     scrollTrigger: {
//         trigger: "#section4 label",
//         scroller: "body"
//     },
//     opacity: 0
// })


gsap.to(".fleftelem", {
    scrollTrigger: {
        trigger: "#fsection",
        pin: true,
        start: "top 150px top 150px",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: "power1"
})


// accordian

let toggleBtns = document.querySelectorAll(".toggle-btn");
let togglers = document.querySelectorAll(".toggler");

togglers.forEach((toggler, index) => {
    let isOpen = false;

    toggleBtns[index].addEventListener("click", () => {
        isOpen = !isOpen;

        let targetHeight = isOpen ? toggler.scrollHeight : -100;

        gsap.to(toggler, {
            height: targetHeight,
            marginTop: isOpen ? 0 : -toggler.scrollHeight,
            display: isOpen ? "block" : "none",
            duration: 0.5,
            ease: "power2.inOut"
        });
    });
});





