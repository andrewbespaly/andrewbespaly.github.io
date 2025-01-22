$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block'; // Show details
    } else {
        details.style.display = 'none'; // Hide details
    }
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  };
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.target.classList.contains('active')){
        if(entry.isIntersecting){
          entry.target.play();
        } else {
          entry.target.pause();
        }
      }
    })
  } 
  let observer = new IntersectionObserver(callback, options);
const allVideos = document.querySelectorAll(".active");
allVideos.forEach((video)=>{
    observer.observe(video);
})