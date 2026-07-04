// ================= Scroll To Top =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ================= Gallery Lightbox =================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// ================= Counter Animation =================

const counters = document.querySelectorAll(".stats h3");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            parseInt(counter.innerText);

        let current = 0;

        const speed = target / 100;

        const update = () => {

            if(current < target){

                current += speed;

                counter.innerText =
                    Math.floor(current) +
                    (counter.innerText.includes("%")
                    ? "%"
                    : "+");

                setTimeout(update,15);

            }else{

                counter.innerText =
                    target +
                    (counter.innerText.includes("%")
                    ? "%"
                    : "+");

            }

        };

        update();

    });

};

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats"));

// ================= Scroll Animation =================

const hiddenElements =
document.querySelectorAll(
'.card,.why-grid div,.gallery img,.contact-card'
);

const reveal =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    reveal.observe(el);

});

// ================= Navbar Shadow =================

window.addEventListener("scroll",()=>{

    const nav =
    document.querySelector("nav");

    if(window.scrollY>100){

        nav.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.1)";

    }else{

        nav.style.boxShadow =
        "0 2px 20px rgba(0,0,0,.05)";

    }

});
window.addEventListener(
'load',
()=>{

setTimeout(()=>{

document
.getElementById('loader')
.style.display='none';

},1500);

});
document
.getElementById("theme")
.addEventListener(
"click",
()=>{

document.body
.classList
.toggle("dark");

});
document
.querySelectorAll(
'.stats h3'
)
.forEach(counter=>{

const update=()=>{

const target=
+counter
.getAttribute(
'data-target'
);

const c=
+counter.innerText;

const inc=
target/100;

if(c<target){

counter.innerText=
Math.ceil(c+inc);

setTimeout(
update,
20
);

}

};

update();

});