$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $("#nav_bar").addClass("black");
    }
    else{
        $("#nav_bar").removeClass("black");
    }
})

window.onscroll = function() {
    if (pageYOffset >= 200) {
      document.getElementById('btnScrollToTop').classList.add('visible');
    } else {
        document.getElementById('btnScrollToTop').classList.remove('visible');
    }
  };

var typed = new Typed('.animate',{
    strings:[
        "Wellness screenings.",
        "Physical exams.",
        "Vaccinations.",
        "COVID testing + education.",
        "Medication counseling.",
        "Acute care referrals.",
        "Dental education + Fluoride varnishes.",
        "MNSure referrals.",
        "Telehealth, including mental health."
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
})

