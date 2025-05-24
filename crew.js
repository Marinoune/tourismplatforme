document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelectorAll(".btn")
    button.forEach( (btn) => {
        btn.addEventListener("click", ()=> {
            const itemclass = btn.getAttribute("data-item")
            switch(itemclass){
                case "one" : 
                document.querySelector(".one").style.display = "block";
                document.querySelector(".two").style.display = "none";
                document.querySelector(".three").style.display = "none";
                document.querySelector(".four").style.display = "none";
                              break;
                case "two" : 
                document.querySelector(".two").style.display = "block";
                document.querySelector(".one").style.display = "none";
                document.querySelector(".three").style.display = "none";
                document.querySelector(".four").style.display = "none";
                              break;
                case "three": 
                document.querySelector(".three").style.display = "block";
                document.querySelector(".two").style.display = "none";
                document.querySelector(".one").style.display = "none";
                document.querySelector(".four").style.display = "none";
                              break;
                case "four": 
                document.querySelector(".four").style.display = "block";
                document.querySelector(".two").style.display = "none";
                document.querySelector(".three").style.display = "none";
                document.querySelector(".one").style.display = "none";
                              break;
            };
        });
    });
});