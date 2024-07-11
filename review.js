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