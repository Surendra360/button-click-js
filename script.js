const head = document.querySelector("h1");
const button = document.querySelector("button");
const body = document.querySelector("body");
body.style.background="black"
head.style.color="white"
button.style.padding="5px 10px"
button.style.cursor="pointer"
button.addEventListener("click", ()=>{
    head.innerHTML = "hello";
    head.style.color="green";
});
button.addEventListener("dblclick", function(){
    head.innerHTML = "button clicked twice"
});
button.addEventListener("mouseenter", ()=>{
    button.style.color="blue"
});
button.addEventListener("mouseleave", ()=>{
    button.style.color="black"
})