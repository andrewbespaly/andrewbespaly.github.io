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

function mockupDisappear() {
  const mockupElement = document.getElementById("mockup");
  // mockupElement.style.width = 0;
  // mockupElement.style.height = 0;
  // mockupElement.style.top = 50;

  mockupElement.style.opacity = 0;
}

function disappearTimer() {
  setTimeout(()=>{
    mockupDisappear()
  }, 1500);
}

disappearTimer()

// document.addEventListener("visibilitychange", onchange)