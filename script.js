let main = document.querySelector(".main");
let cursor = document.querySelector('.cursor');
let login = document.querySelector('.login');
let signup = document.querySelector(".signup");
let membership = document.querySelector('.membership');
let loadingScreen = document.querySelector(".loading-screen");
let home = document.querySelector(".home");

let show=document.querySelector('.show-side');
let vanish=document.querySelector('#remove');
let sidebar=document.querySelector(".sideways");

show.onclick=showSide;
vanish.onclick=hideSide;

function showSide(){
    sidebar.style.display="flex";
}
function hideSide(){
    sidebar.style.display="none";
}

function loading() {
    let tl = gsap.timeline();

    tl.from('.loading-screen h1', {
        opacity: 0,
        scale: 1.5,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.5
    });
    function startLoader() {
        let counterElement = document.querySelector('.load-count');
        let currentValue = 0;

        function updateCounter() {
            if (currentValue === 100) {
               return;
            }
            currentValue += Math.floor(Math.random() * 11) + 1;

            if (currentValue > 100) {
                currentValue = 100;
            }
            counterElement.innerHTML = currentValue;

            let delay = Math.floor(Math.random() * 200) + 50;

            setTimeout(updateCounter, delay);
        }
        updateCounter();
    }
    startLoader();
    tl.to('.loading-screen', {
        top: "-100%",
        opacity: 0,
    })
    tl.to('.loading-screen', {
        display: "none"
    })
    tl.from(home, {
        opacity: 0,
        y: 100,
        duration: 1
    })
}
loading();

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 2,
        ease: "back.out(1.7)",
    })
})

login.addEventListener('mouseenter', function () {
    cursor.innerHTML = "Login";
    gsap.to(cursor, {
        scale: 1.5,
    })
})
login.addEventListener('mouseleave', function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
    })
})
signup.addEventListener('mouseenter', function () {
    cursor.innerHTML = "Signup";
    gsap.to(cursor, {
        scale: 1.5,
    })
})
signup.addEventListener('mouseleave', function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
    })
})
membership.addEventListener('mouseenter', function () {
    cursor.innerHTML = "Member";
    gsap.to(cursor, {
        scale: 1.5,
        fontSize: "0.5vw"
    })
})
membership.addEventListener('mouseleave', function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        fontSize: "0.6vw"
    })
})


//service section animations

gsap.from(".service-head-1", {
    opacity: 0,
    x: -400,
    duration: 2,
    delay: 0,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".services",
        scroller: "body",
        start: "top 80%",
    }
})
gsap.from(".service-head-3", {
    opacity: 0,
    x: 900,
    duration: 2,
    delay: 0,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".services",
        scroller: "body",
        start: "top 80%",
    }
})
gsap.from(".service-head-2", {
    opacity: 0,
    y: -200,
    duration: 1,
    delay: 0,
    scrollTrigger: {
        trigger: ".services",
        scroller: "body",
        start: "top 80%",
    }
})
gsap.from(".box", {
    opacity: 0,
    x: -200,
    duration: 1,
    delay: 0,
    scrollTrigger: {
        trigger: ".service-content",
        scroller: "body",
        start: "top 80%",
    }
})
gsap.from(".reason-left", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".reasons",
        scroller: "body",
        start: "top 40%"
    }
})
gsap.from(".reason-head", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".reasons",
        scroller: "body",
        start: "top 40%"
    }
})

gsap.fromTo(".reason-list", { opacity: 0, y: 20 }, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.7,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".reasons",
        scroller: "body",
        start: "top 40%"
    }
})

//animated line

let Path = `M -600 100 Q 600 100 1200 100`;
const finalPath = `M -600 100 Q 600 100 1200 100`;

const string = document.querySelector(".line");

string.addEventListener("mousemove", function (dets) {
    const newPath = `M 10 100 Q ${dets.x} ${dets.y} 800 100`;
    gsap.to("svg path", {
        attr: { d: newPath },
        duration: 0.8,
        ease: "power3.out",
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.8,
        ease: "elastic.out(1.2,0.1)",
    });
});

//trial animation

gsap.from(".trial-left", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".Free-trial",
        scroller: "body",
        start: "top 40%"
    }
})
gsap.from(".trial-right", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".Free-trial",
        scroller: "body",
        start: "top 40%"
    }
})

//trial line animation

window.addEventListener('wheel', function (dets) {
    if (dets.deltaY > 0) {
        gsap.to('.marque', {
            transform: 'translateX(-200%)',
            duration: 4,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(".marque img", {
            rotate: 180,
        })
    }
    else {
        gsap.to('.marque', {
            transform: 'translateX(0%)',
            duration: 4,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(".marque img", {
            rotate: 0,
        })
    }
})

const counters = document.querySelectorAll('.counter span');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const duration = 2;
        const increment = target / (duration * 60);
        let current = 0;

        const animate = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current) + '+';
                requestAnimationFrame(animate);
            } else {
                counter.innerText = target + '+';
            }
        };

        animate();
    };

    ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: updateCount,
        once: true
    });
});

gsap.to('.client-section', {
    transform: "translateX(-35%)",
    scrollTrigger: {
        trigger: ".happy-client",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})