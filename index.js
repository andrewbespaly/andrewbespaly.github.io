$(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
});

function copyEmail() {
    const str = document.getElementById('real_email').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
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
