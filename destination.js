document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelectorAll(".btn")
    button.forEach( (btn) => {
        btn.addEventListener("click", ()=> {
            const itemclass = btn.getAttribute("data-item")
            const items = document.querySelectorAll(".container div")
            const classimage = document.querySelectorAll(".img1");
            
            items.forEach((item)=>{
                item.style.zIndex = "1" ;
            });
            document.querySelector(`.${itemclass}`).style.zIndex = "5";
            document.querySelector(`.${itemclass}`).classList.add(".img2");
            switch(itemclass){
                case "one" : document.querySelector(".one h1").style.display = "block";
                document.querySelector(".one .p1").style.display = "block";
                document.querySelector(".one .p3").style.display = "flex";
                document.querySelector(".two .p3").style.display = "none";
                document.querySelector(".three .p3").style.display = "none";
                document.querySelector(".four .p3").style.display = "none";
                document.querySelector(".two h1").style.display = "none";
                document.querySelector(".two .p1").style.display = "none";
                document.querySelector(".three h1").style.display = "none";
                document.querySelector(".three .p1").style.display = "none";
                document.querySelector(".four h1").style.display = "none";
                document.querySelector(".four .p1").style.display = "none";
                              break;
                case "two" : document.querySelector(".two h1").style.display = "block";
                document.querySelector(".two .p1").style.display = "block";
                document.querySelector(".two .p3").style.display = "flex";
                document.querySelector(".one .p3").style.display = "none";
                document.querySelector(".three .p3").style.display = "none";
                document.querySelector(".four .p3").style.display = "none";
                document.querySelector(".one h1").style.display = "none";
                document.querySelector(".one .p1").style.display = "none";
                document.querySelector(".three h1").style.display = "none";
                document.querySelector(".three .p1").style.display = "none";
                document.querySelector(".four h1").style.display = "none";
                document.querySelector(".four .p1").style.display = "none";
                              break;
                case "three": document.querySelector(".three h1").style.display = "block";
                document.querySelector(".three .p1").style.display = "block";
                document.querySelector(".three .p3").style.display = "flex";
                document.querySelector(".two .p3").style.display = "none";
                document.querySelector(".one .p3").style.display = "none";
                document.querySelector(".four .p3").style.display = "none";
                document.querySelector(".two h1").style.display = "none";
                document.querySelector(".two .p1").style.display = "none";
                document.querySelector(".one h1").style.display = "none";
                document.querySelector(".one .p1").style.display = "none";
                document.querySelector(".four h1").style.display = "none";
                document.querySelector(".four .p1").style.display = "none";
                              break;
                case "four": document.querySelector(".four h1").style.display = "block";
                document.querySelector(".four .p1").style.display = "block";
                document.querySelector(".four .p3").style.display = "flex";
                document.querySelector(".two .p3").style.display = "none";
                document.querySelector(".three .p3").style.display = "none";
                document.querySelector(".one .p3").style.display = "none";
                document.querySelector(".two h1").style.display = "none";
                document.querySelector(".two .p1").style.display = "none";
                document.querySelector(".three h1").style.display = "none";
                document.querySelector(".three .p1").style.display = "none";
                document.querySelector(".one h1").style.display = "none";
                document.querySelector(".one .p1").style.display = "none";
                              break;
            }
        })
    })
});