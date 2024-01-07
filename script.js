/*==================toggle icon Navbar===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*================scroll sections avtive link ===========*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{               // on window scrolling
    sections.forEach(sec =>{           //differet sections and reading one one section and from all selection one by one section
        let top = window.scrollY;   //  getting how much pixel scrolled from the top 
        let offset =sec.offsetTop-150;    //getting distance between from the top means it parent total   // section distance from the top
        let height = sec.offsetHeight;    //it will get the section complete height by combining the padding and all 
        let id = sec.getAttribute('id');   // it will get each section id according to for each one by one
        if(top>=offset && top<offset + height){     // if scrolled distance is less than top and 
              navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');  // it will change link attribute to active means class -"active"
              })
        };
    });

    /*   ==============Sticky Navbar======*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    
    /* ========================remove toggle icon and navbar when click navbar link(scroll)==========*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*========scroll reveal===========*/
ScrollReveal({
   // reset:true,    // off and on from returning same in website
    distance:'80px',
    duration:2000,
    delay:200

})

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-conatiner,.portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});


/*========= typed js===============*/

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Designer','Full Stack Developer','Mechanical Engineer'],
    typeSpeed:80,
    backSpeed:80,
    backDelay:800,
    loop:true
});

/*===================changing color feature on setting option   ======*/

let x = document.querySelectorAll(".color-changerdiv");
x.forEach(function(btn){
    btn.addEventListener("click",()=>{
        if(btn.classList.contains('d1')){
            document.documentElement.style.setProperty('--bg-color', '#1f79df');  
            document.documentElement.style.setProperty('--second-bg-color', '#5030b9');
            document.documentElement.style.setProperty('--main-color', '#db66f2');
        }
        else if(btn.classList.contains('d2')){
            document.documentElement.style.setProperty('--bg-color', '#1f242d');  
            document.documentElement.style.setProperty('--second-bg-color', '#323946');
            document.documentElement.style.setProperty('--main-color', '#0ef');
        }
    })
})

document.querySelector("#set-icon-night").addEventListener("click",()=>{
    document.documentElement.style.setProperty('--bg-color', '#37383b');
    document.documentElement.style.setProperty('--second-bg-color', '#aaabad');
    document.documentElement.style.setProperty('--main-color', '#0d0c0d');
})

























