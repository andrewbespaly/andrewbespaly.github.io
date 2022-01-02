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

function openAndCloseSidebar() {
  let sidebar = document.getElementById("sidebar");
  let right_arrow = document.getElementById("right-arrow");
  let arrow = document.getElementById("arrow");
  let main_body = document.getElementById("main");

  // let sidebar_curr_width = sidebar.style.width;

  //get sidebar width first click
  let sidebar_curr_width = window.getComputedStyle(document.querySelector('#sidebar')).width;

  if(sidebar_curr_width === "0px"){
    sidebar.style.width = "15%";
    right_arrow.style.left = "15%";

    //not sure if i should have this
    main_body.style.marginLeft = "15%";

    // right_arrow.innerHTML = "<";
    right_arrow.style.transform = 'rotate(180deg)';
    right_arrow.style.borderRadius = "5px 0px 0px 5px";
  }
  else {
    sidebar.style.width = "0%";
    right_arrow.style.left = "0%";
    main_body.style.marginLeft = "0%";

    right_arrow.style.transform = 'rotate(360deg)';
    right_arrow.style.borderRadius = "0px 5px 5px 0px";


    // right_arrow.innerHTML = ">";

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

function mockupDisappear() {
  const mockupElement = document.getElementById("mockup");
  // mockupElement.style.width = 0;
  // mockupElement.style.height = 0;
  // mockupElement.style.top = 50;

  mockupElement.style.opacity = 0;
  mockupElement.style.zIndex = 0;
}

function disappearTimer() {
  setTimeout(()=>{
    mockupDisappear()
  }, 1500);
}

disappearTimer()

// document.addEventListener("visibilitychange", onchange)