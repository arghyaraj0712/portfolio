$(document).ready(function() {
 
    //Owl-Carousel Slide
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true, 
		animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // Animation
    AOS.init();
    new WOW().init();
    
});

// sweet Alert
function info(){
    swal({
        title: "Hello! I'm ArghyaRaj Niloy. Front-End WEB Developer",
        text: "Hello Sir/Mam, \n\n I am currently enrolled in my Bachelor programme and will receive my degree on next spring. While I have a curriculum background on software field, I have been practicing front-end development for last three years. Besides, I have done by internship with HelloHydra Innovative for four months and deals with practical job circumstances.\n\n As a person, I am creative and hard working. I am very much passionate and committed towards my works and duties. I put my work first and complete them with all my heart. I believe that, my knowledge and skill of developing could be of interest to you.\n\n You can contact me by phone at +8801703795185 or by email at arniloy.official@gmail.com.\n\n Thank you for your time and consideration.\n\n Sincerely,\n ArghyaRaj Niloy.",
        button: "Download CV",
    });
}

function comment(){
    swal("Write a comment...", {
        content: "input",
      })
      .then((value) => {
        swal("Thank You!", "Your Comment is Submitted!", "success");
      });
}

function notwork(){
    swal("Working On Process!", "Try Again After Some Times!", "error");
}

function logout(){
    swal("Log Out Successful.", "Thank You!", "success");
}

// function submit(){
//     swal("Submitted!", "Thank You!", "success");
// }