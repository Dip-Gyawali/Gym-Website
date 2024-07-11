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

gsap.from('.head',{
    opacity:0,
    duration:3
})
gsap.to('.arrow1',{
    top:"80%",
    opacity:0,
    duration:1,
    repeat:-1
})
gsap.to('.arrow2',{
    top:"85%",
    opacity:0,
    duration:1,
    repeat:-1
})
gsap.to('.arrow3',{
    top:"90%",
    opacity:0,
    duration:1,
    repeat:-1
})
gsap.to('.ambi-right img',{
    scrollTrigger:{
        trigger:".ambi-right",
        scroller:'body',
        pin:true,
    }
})
let main=document.querySelector('.main');

main.addEventListener('mousemove',function(dets){
    gsap.to('.cursor',{
        x:dets.x,
        y:dets.y,
        duration:2,
        ease: "back.out(1.7)",
    })
})

gsap.from('.chest-content',{
    x:-100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".chest",
        scroller:'body',
    }
})
gsap.from('.back-content',{
    x:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".back",
        scroller:'body',
        start:'top 15%'
    }
})
gsap.from('.legs-content',{
    y:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".legs",
        scroller:'body',
        start:'top 15%'
    }
})
gsap.from('.arms-content',{
    y:-100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".arms",
        scroller:'body',
        start:'top 15%'
    }
})
gsap.from('.location-content',{
    scale:2,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".location",
        scroller:'body',
        start:'top 15%'
    }
})